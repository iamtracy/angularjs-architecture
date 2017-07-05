class NetflixService {

  constructor($http, $q) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
    this.movies = [];
  }

  getData(actor) {
    const defer = this.$q.defer();
    this.$http
      .get(`http://netflixroulette.net/api/api.php?actor=${actor}`)
      .then(response => {
        const data = response.data;
        this.movies = data;
        defer.resolve(data);
      })
      .catch(response => defer.reject(response));
    return defer.promise;
  }

  deleteItem(index) {
    this.movies.splice(index, 1);
  }

}

export default NetflixService;