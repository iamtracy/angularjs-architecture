class NetflixService {

  constructor($http, $q) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
  }

  getData(actor) {
    const defer = this.$q.defer();
    this.$http
      .get(`http://netflixroulette.net/api/api.php?actor=${actor}`)
      .then(response => {
        const data = response.data;
        defer.resolve(data);
      })
      .catch(response => defer.reject(response));
    return defer.promise;
  }

}

export default NetflixService;