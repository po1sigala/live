import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../SearchBar';

afterEach(cleanup);

describe('Renders a list of issues', () => {
  it('renders', () => {
    render(<SearchBar />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<SearchBar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
