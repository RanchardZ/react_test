import React from 'react'
import { connect } from 'react-redux'
import { checkCheckBox } from '../actions'

let CheckBox = ({dispatch}) => {
	let inStockOnly;
	return (
		<form>
			<input 
				type="checkbox"
				checked={inStockOnly}
				onClick={e => {
					e.preventDefault()
					dispatch(checkCheckBox())
				}}
			/>
			{' '}
			Only show products in stock
		</form>
	)
}

CheckBox = connect()(CheckBox)

export default CheckBox