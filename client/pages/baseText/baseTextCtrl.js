let _baseTextService
let _notifierService

export default class BaseTextController {
  constructor(baseTextService, notifierService) {

    _baseTextService = baseTextService
    _notifierService = notifierService
  }

  importText() {
    if (this.text && this.text !== "") {
      _baseTextService.import(this.text).then(bt => {
        _notifierService.success("Salvo com sucesso!")
      })
    } else {
      _notifierService.error("Erro ao salvar!")
    }
  }

}
