let _gameSettingsService

export default class GameSettingsController {
  constructor(gameSettingsService) {

    _gameSettingsService = gameSettingsService
    this.findSettings()
  }
  
  findSettings() {
    _gameSettingsService.findSettings().then((res)=>{
      this.settings = res.data
    })
  }

  save() {
    console.log(this.settings)
    _gameSettingsService.save(this.settings).then((res)=>{
    })
  }
}
