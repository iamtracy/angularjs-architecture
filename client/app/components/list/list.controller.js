import FirebaseService from '../../services/firebase/firebase';

class ListController {

  constructor(FirebaseService) {
    this.FirebaseService = FirebaseService;
  }

  $onInit() {
    this.info = this.FirebaseService.getData().$$state;
    this.cards = this.FirebaseService.setItems();
  }

  onAddCard() {
    this.FirebaseService.addItem();
  }

  onDeleteCard(index) {
    this.FirebaseService.deleteItem();
  }

}

ListController.$inject = ["FirebaseService"];

export default ListController;