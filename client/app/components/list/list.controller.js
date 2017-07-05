import ApiService from '../../services/api/api';

class ListController {

  constructor(ApiService) {
    this.info = {};
    this.cards = [];
    this.ApiService = ApiService;
  }

  $onInit() {
    this.info = this.ApiService.getData().$$state;
  }

  onAddCard() {
    this.cards.push({ date: new Date() });
  }

  onDeleteCard(index) {
    this.cards.splice(index, 1);
  }

}

ListController.$inject = ["ApiService"];

export default ListController;