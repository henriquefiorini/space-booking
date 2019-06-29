const resolver = {
  Mission: {
    missionPatch: (parent, args) => {
      const size = args.size || 'LARGE';
      return size === 'SMALL'
        ? parent.missionPatchSmall
        : parent.missionPatchLarge;
    },
  },
};

module.exports = resolver;
