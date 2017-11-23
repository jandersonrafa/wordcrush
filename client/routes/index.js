routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/base-text');

    $stateProvider
        .state('secured', {
            url: '',
            abstract: true,
            template: '<app-base-secured>',
        })

    $stateProvider.state('secured.baseText', {
        url: '/base-text',
        views: {
			[`content@${'secured'}`]: {
				template: '<base-text></base-text>',
			},
		},
    })

    $stateProvider.state('secured.gameSettings', {
        url: '/game-settings',
        views: {
			[`content@${'secured'}`]: {
				template: '<game-settings></game-settings>',
			},
		},
    })

    $stateProvider.state('secured.playGame', {
        url: '/play-game',
        views: {
			[`content@${'secured'}`]: {
				template: '<play-game></play-game>',
			},
		},
    })
}