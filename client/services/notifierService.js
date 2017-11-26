import PNotify from 'pnotify/src/pnotify'
import angular from 'angular'
import _ from 'lodash'

const isObject = obj => {
	return obj === Object(obj)
}
const boldText = text => {
	return text ? `<strong> ${text} </strong>` : ''
}

const defaults = {
	ERROR: { type: 'error', title: 'Problemas encontrados', icon: 'fa fa-times-circle' },
	SUCCESS: { type: 'success', title: 'Sucesso!', icon: 'fa fa-check-circle' },
	INFO: { type: 'info', title: 'Informação', icon: 'fa fa-info-circle' },
	NOTICE: { type: 'notice', title: 'Notícia', icon: 'fa fa-info-circle' },
}

class NotifierService {
	constructor() {
		PNotify.prototype.options.styling = 'bootstrap3'
		this.defaults = { delay: 4000 }

		// api simplificada
		this.error = this.notifyErrorMessage.bind(this)
		this.info = this.notifyInfoMessage.bind(this)
		this.notice = this.notifyNoticeMessage.bind(this)
		this.success = this.notifySuccessMessage.bind(this)
	}

	notifySuccessMessage(message, delay) {
		this.notifyMessage('SUCCESS', message, delay)
	}

	notifyNoticeMessage(message, delay) {
		this.notifyMessage('NOTICE', message, delay)
	}

	notifyErrorMessage(message, delay) {
		this.notifyMessage('ERROR', message, delay)
	}

	notifyInfoMessage(message, delay) {
		this.notifyMessage('INFO', message, delay)
	}

	notifyMessage(type, message, delay) {
		const notifierOptions = {
			buttons: {
				closer_hover: false,
				sticker_hover: false,
				classes: {
					pin_up: 'fa fa-thumb-tack',
					pin_down: 'fa fa-thumb-tack text-muted',
				},
				labels: {
					close: 'Fechar',
					stick: 'Fixar',
				},
			},
			delay: delay || this.defaults.delay,
			text: this._buildNotificationText(message),
		}

		this.notify = new PNotify(angular.merge({}, defaults[type], notifierOptions))
	}

	_buildNotificationText(messageObject) {
		if (isObject(messageObject)) {
			return `${boldText(messageObject.field)} ${messageObject.message}`.trim()
		}
		return messageObject
	}

	getListWithoutDuplications(list) {
		const listaDeObjetosComAtributosField = _.filter(list, (current) => { return current.field })
		return _.uniqWith(listaDeObjetosComAtributosField, (a, b) => a.field === b.field)
	}

	resolveListOfMessages(list) {
		const listaUnicaDeObjetosComAtributosField = this.getListWithoutDuplications(list)
		const mensagemDeErroDeFields = _.reduce(listaUnicaDeObjetosComAtributosField, (result, current) => {
			return result.concat(`<li> <b> ${current.field} </b>- ${current.message} </li>`)
		}, '')
		if (mensagemDeErroDeFields) {
			this.notifyErrorMessage(`<ul style='margin-left: 20px;'> ${mensagemDeErroDeFields} </ul>`)
		}

		list.filter(cur => !cur.field)
			.forEach(cur => {
				if (cur.type && cur.message) {
					this.notifyMessage(cur.type, cur.message)
				}
			})
	}
}

export default angular
	.module('notifierService', [])
	.service('notifierService', NotifierService)
	.name
