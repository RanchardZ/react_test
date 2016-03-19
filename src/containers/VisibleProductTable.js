import React from 'react'
import { connect } from 'react-redux'
import ProductTable from '../components/ProductTable'

const getVisibleProducts = (products, inStockOnly) => {
	if (inStockOnly)
		return products.filter(product => product.stocked)
	else
		return products

}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products, state.inStockOnly),
		inStockOnly: state.inStockOnly,
		filterText: state.filterText
	}
}

const VisibleProductTable = connect(
	mapStateToProps
)(ProductTable);

export default VisibleProductTable;