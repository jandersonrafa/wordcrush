let _playGameService

export default class PlayGameController {
  constructor(playGameService) {

    _playGameService = playGameService
    this.findSettings()
  }
  
  findSettings() {
    _playGameService.findSettings().then((res)=>{
      let data = JSON.parse(atob(res.data))
      this.settings = data
    })
  }

}
