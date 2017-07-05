import FirebaseService from '../../services/firebase/firebase';

class ListController {

  constructor(FirebaseService) {
    this.info = {};
    this.cards = [];
    this.FirebaseService = FirebaseService;
  }

  $onInit() {
    this.info = this.FirebaseService.getData().$$state;
  }

  onAddCard() {
    this.cards.push({ date: new Date() });
  }

  onDeleteCard(index) {
    this.cards.splice(index, 1);
  }

}

ListController.$inject = ["FirebaseService"];

export default ListController;