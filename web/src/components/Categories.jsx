/** @format */

import React from 'react';
import Category from './Category.jsx';

function Categories() {
  return (
    <div className="categories">
      <section className="category-section">
        <Category name="All" active="true" />
        <Category name="Life Style" />
        <Category name="Travel" />
        <Category name="Blogging" />
        <Category name="Hollywood Shows" />
        <Category name="Forest Life" />
        <Category name="Live Stream" />
        <Category name="Sports" />
        <Category name="Gaming" />
        <Category name="Data Structure" />
        <Category name="Css Updates" />
        <Category name="Google Policy" />
        <Category name="Avengers" />
        <Category name="Sublime Text 3" />
        <Category name="Vim" />
      </section>
    </div>
  );
}

export default Categories;
