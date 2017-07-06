class FirebaseService {

  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.cards = [];
  }

  getData() {
    const defer = this.$q.defer();
    this.$http.get('https://angular-1-5-cli.firebaseio.com/data.json')
      .then((response) => {
        const data = response.data;
        defer.resolve(data);
      })
      .catch((response) => {
        defer.reject(response.statusText);
      });
    return defer.promise;
  }

  setItems() {
    return this.cards;
  }

  addItem() {
    return this.cards.push({ date: new Date() });
  }

  deleteItem(index) {
    this.cards.splice(index, 1);
  }

}

export default FirebaseService;