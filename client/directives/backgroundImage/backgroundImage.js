export default () => {
	return {
		link: (scope, element, attrs, ctrl) => {
            debugger
            element.css({
                'background-image': 'url(' + attrs.backgroundImage + ')',
                'background-repeat': 'no-repeat',
            });
		},
	}
}
