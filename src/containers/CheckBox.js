import React from 'react';
import { connect } from 'react-redux';
import { checkCheckBox } from '../actions';
import { bindActionCreators } from 'redux';

const CheckBox = props => {
	const { actions: { checkCheckBox } } = props;
	const { inStockOnly } = props;
	return (
		<form>
			<input 
				type="checkbox"
				checked={inStockOnly}
				onClick={e => {
					e.preventDefault();
					checkCheckBox();
					return false;
				}}
			/>
			{' '}
			Only show products in stock
		</form>
	)
};

const mapStateToProps = state => ({
	inStockOnly: state.inStockOnly
});

const mapDispatchToActions = dispatch => ({
	actions: bindActionCreators({ checkCheckBox }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToActions)(CheckBox);;