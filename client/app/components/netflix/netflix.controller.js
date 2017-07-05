class NetflixController {

  constructor(NetflixService) {
    this.movies = [];
    this.NetflixService = NetflixService;
  }

  getMovie(actor) {
    this.movies = this.NetflixService.getData(actor).$$state
  }

  onDelete(index) {
    this.NetflixService.deleteItem(index);
  }

}

NetflixController.$inject = ["NetflixService"];

export default NetflixController;