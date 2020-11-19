/** @format */

import React, {useState} from 'react';

function Header() {
  const [search, setSearch] = useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <header className="header">
      <a href="/#">
        <img
          src="https://raw.githubusercontent.com/WebDevSimplified/YouTube-Design-Clone/master/logo.png"
          alt="YouTube Logo"
          className="youtube-logo"
        />
      </a>
      <form className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          aria-label="Search"
        />
        <button type="submit" className="search-btn">
          <img
            alt="magnify"
            src="https://raw.githubusercontent.com/WebDevSimplified/YouTube-Design-Clone/73993ebe5f06d59e9ab68e07830f9cfc585b8f72/magnify.svg"
          />
        </button>
      </form>
      <div className="menu-icons">
        <a href="/#">
          <img
            src="https://raw.githubusercontent.com/WebDevSimplified/YouTube-Design-Clone/73993ebe5f06d59e9ab68e07830f9cfc585b8f72/video-plus.svg"
            alt="Upload Video"
          />
        </a>
        <a href="/#">
          <img
            src="https://raw.githubusercontent.com/WebDevSimplified/YouTube-Design-Clone/73993ebe5f06d59e9ab68e07830f9cfc585b8f72/apps.svg"
            alt="Apps"
          />
        </a>
        <a href="/#">
          <img
            src="https://raw.githubusercontent.com/WebDevSimplified/YouTube-Design-Clone/73993ebe5f06d59e9ab68e07830f9cfc585b8f72/bell.svg"
            alt="Notifications"
          />
        </a>
        <a href="/#">
          <img
            className="menu-channel-icon"
            src="https://source.unsplash.com/36x36/?boy"
            alt=""
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
