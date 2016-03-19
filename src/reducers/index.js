const initState = {
	products: [
			  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
			  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
			  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
			  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
			  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
			  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
			],
	filterText: "",
	inStockOnly: false 
};


export const productapp = (state=initState, action) => {
	switch (action.type) {
		case 'ADD_FILTER_TEXT':
			console.log('ADD_FILTER_TEXT');
			return Object.assign({}, state, {
				filterText: action.filterText
			})
		case 'CHECK_CHECK_BOX':
			return Object.assign({}, state, {
				inStockOnly: !state.inStockOnly
				})
		default:
			return state
	}
}