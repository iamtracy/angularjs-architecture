class NetflixController {

  constructor(NetflixService) {
    this.NetflixService = NetflixService;
  }

  onGetMovie(actor) {
    this.movies = this.NetflixService.getData(actor).$$state
  }

  onDelete(index) {
    this.NetflixService.deleteItem(index);
  }

}

NetflixController.$inject = ["NetflixService"];

export default NetflixController;