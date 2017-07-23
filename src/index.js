import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5TsqwTCCaRUXQDRQMKkAU5C-M_5zcWa4';
// Create a new component. This compenent should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated html and put it on the page
React.render(<App />, document.querySelector('.container'));
