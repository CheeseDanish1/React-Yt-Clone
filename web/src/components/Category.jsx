import React from 'react';

function Category({name, active}) {
	return (
		<button className={`category ${active ? 'active' : ''}`}>{name}</button>
	);
}

export default Category;