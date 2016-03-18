import React from 'react'
import { connect } from 'react-redux'
import { addFilterText } from '../actions'

let SearchBar = ({dispatch}) => {
	let filterText;
	return (
		<form onSubmit={ e => {
			e.preventDefault()
			if (!filterText.value.trim()) {
				return
			}
			dispatch(addFilterText(filterText.value))
			filterText.value=""
		}}>
		<input ref={node => {
			filterText = node
		}}
		/>
		<button type="submit">
			Like
		</button>
		</form>
	)
}

SearchBar = connect()(SearchBar)

export default SearchBar