import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// TODO: Import the IssueList component here

afterEach(cleanup);

describe('Renders a list of issues', () => {
  const issues = [
    {
      url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
      html_url: 'https://github.com/microsoft/vscode/issues/68',
      id: 117635943,
      node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
      number: 68,
      title: 'Git: Support git history in VSCode',
    },
    {
      url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
      html_url: 'https://github.com/microsoft/vscode/issues/127',
      id: 117711073,
      node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
      number: 127,
      title: 'Provide option to opt out of line ending normalisation for files',
    },
  ];

  it('renders', () => {
    // TODO: Add an it block to check to see if the component renders properly
  });

  it('matches snapshot', () => {
    // TODO: Add an it block to check to see if the component matches the snapshot
  });
});
