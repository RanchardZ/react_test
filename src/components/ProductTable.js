import React, {PropTypes} from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({ products, inStockOnly, filterText }) => {
	let rows = [];
	let lastCategory = null;
	products.forEach((product) => {
		if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
			return;
		}
		if (product.category !== lastCategory) {
			rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});
	return (
			<table>
		        <thead>
		            <tr>
		            	<th>Name</th>
		            	<th>Price</th>
		            </tr>
		        </thead>
		        <tbody>{rows}</tbody>
		    </table>
	);
}

ProductTable.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object),
	filterText: PropTypes.string,
	inStockOnly: PropTypes.bool.isRequired
}

export default ProductTable