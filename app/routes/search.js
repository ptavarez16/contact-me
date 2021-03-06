import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const searchQuery = params.searchQuery
    return this.get('store').query('contact', { search: searchQuery })
      .then((results) => {
        if (results.get('lastObject') === undefined) {
          results = false
        }
        return results
      })
  },

  actions: {
  }
})
