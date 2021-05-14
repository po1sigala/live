import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IssueItem from '../IssueItem';

afterEach(cleanup);

// Here we check to see if each IssueItem will render properly.
describe('Renders each issue individually', () => {
  // Here is our test issue
  const issue = {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  };

  // Here we check to see if each IssueItem will render properly given the props key and issue
  it('renders', () => {
    render(<IssueItem key={issue.id} issue={issue} />);
  });

  // Finally we check to see if the IssueItem matches the snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<IssueItem key={issue.id} issue={issue} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
