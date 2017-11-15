export default class HomeController {
  constructor() {
    this.random = {};
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }
}
