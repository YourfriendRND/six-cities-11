import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import CommentHelp from './comment-help';

describe('Component: CommentHelp', () => {
  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <CommentHelp />
      </HelmetProvider>
    );

    const helpComponentId = 'comment-help-component';

    expect(screen.getByTestId(helpComponentId)).toBeInTheDocument();

  });
});
