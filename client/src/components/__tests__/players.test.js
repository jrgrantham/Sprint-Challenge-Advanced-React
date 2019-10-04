import React from 'react';
import * as rtl from '@testing-library/react';
import Players from '../Players';

let tools;

// a jest thing
// the code inside the callback
// will run before each test
beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Players user='Peter' />);
});

