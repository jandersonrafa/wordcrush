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

  checkWords() {
    var mapInverse = this.settings.mapCharacters[0].map((col, i) => this.settings.mapCharacters.map(row => row[i]));
    this.settings.listRandomKeywordHelp.forEach(kh => {
      var listContains = this.settings.mapCharacters.filter( line => {
        return line.map(k => k.character).join("").toUpperCase().indexOf(kh.dsKeyword.toUpperCase()) > -1
      })
      var listContainsInverse = mapInverse.filter( line => {
        return line.map(k => k.character).join("").toUpperCase().indexOf(kh.dsKeyword.toUpperCase()) > -1
      })
      kh.checked = listContains.length >0 || listContainsInverse.length >0;
    });
  }

  select(char, x, y) {
    var blSegundaVez = this.primarySelect != null
    if (blSegundaVez) {
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
        this.settings.mapCharacters[primaryPositionX][primaryPositionY].selected = false
      }
    } else {
      this.primarySelect = char
      this.primarySelect.x = x
      this.primarySelect.y = y
      this.primarySelect.selected = true
    }
    this.checkWords()
  }

  getTotalPalavrasRestantes() {
    return this.settings.listRandomKeywordHelp.filter(kh => !kh.checked).length
  }

  getTotalPalavras() {
    return this.settings.listRandomKeywordHelp.length
  }
}
