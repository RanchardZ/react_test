import React, { PropTypes } from 'react'

const ProductRow = ({product}) => {
	let name = product.stocked ? product.name : 
				<span style={{color: 'red'}}>
					{product.name}
				</span>;
	return (
		<tr>
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	);
}

ProductRow.propTypes = {
	product: PropTypes.object
}

export default ProductRow