import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IssueList from '../IssueList';

afterEach(cleanup);

// Here we want to test whether the IssueList component renders correctly for given issue prop
describe('Renders a list of issues', () => {
  // This is our issues array that we will use to test the component
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

  // Here we check to see that the IssueList component renders
  it('renders', () => {
    render(<IssueList issues={issues} />);
  });

  // Finally, we check to see that the IssueList matches the snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<IssueList issues={issues} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
