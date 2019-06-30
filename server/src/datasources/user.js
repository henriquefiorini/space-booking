const { DataSource } = require('apollo-datasource');
const isEmail = require('isemail');

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findUser({ email: emailArg } = {}) {
    const email = !emailArg && this.context && this.context.user
      ? this.context.user.email
      : emailArg;

    if (!email || !isEmail.validate(email)) {
      return null;
    }
    const user = await this.store.users.findOne({
      where: { email },
    });
    return user || null;
  }

  async findUserById({ id }) {
    if (!id) {
      return null;
    }
    const user = await this.store.users.findOne({
      where: { id },
    });
    return user || null;
  }

  async createUser({ email, password }) {
    if (!email || !isEmail.validate(email) || !password) {
      return null;
    }
    const user = await this.store.users.create({
      email,
      password,
    });
    return user || null;
  }

  async bookTrips({ launchIds }) {
    const userId = this.context.user.id;
    if (!userId) return;
    let results = [];
    for (const launchId of launchIds) {
      const response = await this.bookTrip({ launchId });
      if (response) {
        results.push(response);
      }
    }
    return results;
  }

  async bookTrip({ launchId }) {
    const userId = this.context.user.id;
    const response = await this.store.trips.findOrCreate({
      where: {
        userId,
        launchId,
      },
    });
    return response && response.length
      ? response[0].get()
      : false;
  }

  async cancelTrip({ launchId }) {
    const userId = this.context.user.id;
    return !!this.store.trips.destroy({
      where: {
        userId,
        launchId,
      },
    });
  }

  async getLaunchIdsByUser() {
    const userId = this.context.user.id;
    const found = await this.store.trips.findAll({
      where: { userId },
    });
    return found && found.length
      ? found
        .map(launch => launch.dataValues.launchId)
        .filter(launch => !!launch)
      : [];
  }

  async isBookedOnLaunch({ launchId }) {
    if (!this.context || !this.context.user) {
      return false;
    }
    const userId = this.context.user.id;
    const found = await this.store.trips.findAll({
      where: {
        userId,
        launchId,
      },
    });
    return found && found.length > 0;
  }
}

module.exports = UserAPI;
