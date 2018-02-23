import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ( props ) => {

	let results = '';

	if ( props.loading ) {
		// We are loading the results.
		results = <p>Loading</p>;
	} else if ( props.results.length > 0 ) {
		// Results loaded and there are some of it.
		const _results = props.results.map( result => {
			return ( <SearchResult key={result.id} result={result}/> ); // SearchResult is a new component.
		} );
		results = <ul>{_results}</ul>;
	} else if ( props.searched ) {
		// Results loaded, but none found.
		results = <p>Nothing Found</p>;
	}
	return (
		<div>{results}</div>
	);

};

export default SearchResults;