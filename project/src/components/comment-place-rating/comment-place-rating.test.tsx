import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import CommentPlaceRating from './comment-place-rating';
import { randomInt } from '../../util';

describe('Component: CommentPlaceRating', () => {
  const changeRatingMock = jest.fn();

  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <CommentPlaceRating currentRating={randomInt(1, 5)} isDisabled={false} onChangeRatingHandler={changeRatingMock} />
        </BrowserRouter>
      </HelmetProvider>
    );

    const stars = screen.getAllByTestId('rating-star');
    expect(stars.length).toBe(5);

  });
});

