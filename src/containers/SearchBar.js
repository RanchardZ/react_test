import React from 'react'
import { connect } from 'react-redux'
import { addFilterText } from '../actions'
import { bindActionCreators } from 'redux';

const SearchBar = props => {
	const { actions: { addFilterText } } = props;
	// const { filterText } = props;
	let filterText;
		return (
		<form onChange={ e => {
			e.preventDefault();
			if (!filterText.value.trim()) {
				addFilterText('');
				return
			};
			addFilterText(filterText.value);
		}}>
		<input 
			ref={node => {
			filterText = node;
			}}
		/>
		<button type="submit">
			Like
		</button>
		</form>
	) 

}


// const SearchBar = ({dispatch}) => {
// 	let filterText;
// 	return (
// 		<form onSubmit={ e => {
// 			e.preventDefault()
// 			if (!filterText.value.trim()) {
// 				return
// 			}
// 			dispatch(addFilterText(filterText.value))
// 			filterText.value=""
// 		}}>
// 		<input ref={node => {
// 			filterText = node
// 			}}
// 		/>
// 		<button type="submit">
// 			Like
// 		</button>
// 		</form>
// 	)
// };

const mapStateToProps = state => ({
	// filterText: state.filterText
});

const mapDispatchToActions = dispatch => ({
	actions: bindActionCreators({ addFilterText }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToActions)(SearchBar);