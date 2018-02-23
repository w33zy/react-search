import React from 'react';

const SearchResult = ( props ) => {
	return (
		<li>
			<a href={props.result.link}>{props.result.title.rendered}</a>
		</li>
	)
}

export default SearchResult;
