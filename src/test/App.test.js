import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/App';

describe('Render app', () => {
  it('should render app', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

})
