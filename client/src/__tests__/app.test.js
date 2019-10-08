import React from 'react';
// import ReactDom from 'react-dom';
import * as rtl from '@testing-library/react';
import App from '../App'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { name: 'James', id: '1', country: 'Scotland', searches: 5 },
          { name: 'John', id: '2', country: 'England', searches: 5 },
        ],
      });
    },
  };
});

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

describe('App component', () => {
  it('runs', () => {
    tools.debug();
  });

  it('shows the title', () => {
    expect(tools.queryByText(/womens/i)).toBeInTheDocument();
  });
})