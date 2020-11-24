/** @format */

import React, {useState} from 'react';
import Category from './Category.jsx';

let nameArr = [
  'All',
  'Life Style',
  'Travel',
  'Blogging',
  'Hollywood Shows',
  'Forest Life',
  'Live Stream',
  'Sports',
  'Gaming',
  'Data Structure',
  'Css Updates',
  'Google Policy',
  'Avengers',
  'Sublime Text 3',
  'Vim',
];

function Categories() {
  const [active, setActive] = useState(0);

  const nameCategories = nameArr.map((name, index) => (
    <Category
      key={index}
      press={() => setActive(index)}
      name={name}
      active={index === active}
    />
  ));

  return (
    <div className="categories">
      <section className="category-section">{nameCategories}</section>
    </div>
  );
}

export default Categories;
