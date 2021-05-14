import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// TODO: Import the IssueItem component here

afterEach(cleanup);

describe('Renders each issue individually', () => {
  const issue = {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  };

  it('renders', () => {
    // TODO: Create an it block that checks to see if the component renders properly
  });

  it('matches snapshot', () => {
    // TODO: Create an it block to ensure that the component matches the snapshot
  });
});
