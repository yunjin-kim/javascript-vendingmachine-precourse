export default class ChargeAddController {
  constructor($app) {
    this.$app = $app;
    this.chargeAddField = document.createElement('div');
    this.addCoin;
    this.render();
    this.setEvent();
  }

}