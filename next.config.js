module.exports = {
  async exportPathMap() {
    return {
      '/': {
        page: '/'
      },
      '/color-markers': {
        page: '/color-markers'
      }
    };
  },
  exportTrailingSlash: false
};
