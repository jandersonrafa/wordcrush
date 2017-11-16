routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/base-text');

    $stateProvider
        .state('secured', {
            url: '',
            abstract: true,
            template: '<app-base-secured>',
        })

    $stateProvider.state('secured.home', {
        url: '/base-text',
        views: {
			[`content@${'secured'}`]: {
				template: '<baseText></baseText>',
			},
		},
    })
    $stateProvider.state('teste', {
        url: '/teste',
        template: '<teste></teste>',
    })
}