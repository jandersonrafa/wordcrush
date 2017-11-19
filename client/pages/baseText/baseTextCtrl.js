let _baseTextService

export default class BaseTextController {
  constructor(baseTextService) {

    _baseTextService = baseTextService
  }

  importText() {
    _baseTextService.import(this.text)
  }

}
