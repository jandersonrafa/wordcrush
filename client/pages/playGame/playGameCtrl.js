let _playGameService

export default class PlayGameController {
  constructor(playGameService) {

    _playGameService = playGameService
    this.findSettings()
  }

  findSettings() {
    _playGameService.findSettings().then((res) => {
      let data = JSON.parse(atob(res.data))
      this.settings = data
    })
  }

  select(char, x, y) {
    if (this.primarySelect) {
      var primaryPositionX = this.primarySelect.x
      var primaryPositionY = this.primarySelect.y
      var primaryCharacter = this.primarySelect.character
      if (
        (((x - 1) == primaryPositionX) && (y == primaryPositionY))
        ||
        (((x + 1) == primaryPositionX) && (y == primaryPositionY))
        ||
        (((y - 1) == primaryPositionY) && (x == primaryPositionX))
        ||
        (((y + 1) == primaryPositionY) && (x == primaryPositionX))
      ) {
        var aux = char.character
        char.character = primaryCharacter
        this.settings.mapCharacters[primaryPositionX][primaryPositionY].character = aux

        this.primarySelect = undefined
      }
    } else {
      this.primarySelect = char
      this.primarySelect.x = x
      this.primarySelect.y = y
    }
    // char.select=true
  }

}
