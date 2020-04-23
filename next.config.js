module.exports = {
  async exportPathMap() {
    return {
      '/': {
        page: '/'
      },
      '/map': {
        page: '/map'
      }
    };
  },
  exportTrailingSlash: false
};
