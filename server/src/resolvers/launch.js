const { paginateResults } = require('../utils');

const resolver = {
  Query: {
    launch: (parent, args, context) => {
      const { launchId } = args;
      const { launchAPI } = context.dataSources;
      return launchAPI.getLaunchById({ launchId });
    },

    launches: async (parent, args, context) => {
      const { after, pageSize } = args;
      const { launchAPI } = context.dataSources;

      const allLaunches = await launchAPI.getAllLaunches();
      allLaunches.reverse();

      const launches = paginateResults({
        after,
        pageSize: pageSize >= 1
          ? pageSize
          : 20,
        results: allLaunches,
      });

      const cursor = launches.length
        ? launches[launches.length - 1].cursor
        : null;

      const hasMore = launches.length
        ? launches[launches.length - 1].cursor !== allLaunches[allLaunches.length - 1].cursor
        : false;

      return {
        cursor,
        hasMore,
        launches,
      };
    },
  },

  Mutation: {
    bookTrips: async (parent, args, context) => {
      const { launchIds } = args;
      const { userAPI, launchAPI } = context.dataSources;

      const results = await userAPI.bookTrips({ launchIds });
      const launches = await launchAPI.getLaunchesByIds({ launchIds });

      return {
        success: results && results.length === launchIds.length,
        message:
          results.length === launchIds.length
            ? 'trips booked successfully'
            : `the following launches couldn't be booked: ${launchIds.filter(
                id => !results.includes(id),
              )}`,
        launches,
      };
    },

    cancelTrip: async (parent, args, context) => {
      const { launchId } = args;
      const { userAPI, launchAPI } = context.dataSources;

      const result = await userAPI.cancelTrip({ launchId });
      if (!result) {
        return {
          success: false,
          message: 'failed to cancel trip',
        };
      }

      const launch = await launchAPI.getLaunchById({ launchId });
      return {
        success: true,
        message: 'trip cancelled',
        launches: [launch],
      };
    },
  },

  Launch: {
    isBooked: (parent, args, context) => {
      const { userAPI } = context.dataSources;
      return userAPI.isBookedOnLaunch({
        launchId: parent.id,
      });
    },
  },

  User: {
    trips: async (parent, args, context) => {
      const { userAPI, launchAPI } = context.dataSources;
      const launchIds = await userAPI.getLaunchIdsByUser();
      if (!launchIds.length) return [];
      return (
        launchAPI.getLaunchesByIds({ launchIds }) || []
      );
    },
  },
};

module.exports = resolver;
