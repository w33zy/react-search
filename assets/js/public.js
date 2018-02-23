import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm';

const searchFormElement  = <SearchForm />;
const searchFields = document.getElementsByClassName('search-form');

if( searchFields.length ) {

	for( let i=0; i < searchFields.length; i++ ) {
		console.log( searchFields[ i ]); // @TODO: Remove in production.
		ReactDOM.render(
			searchFormElement,
			searchFields[ i ]
		);
	}
}