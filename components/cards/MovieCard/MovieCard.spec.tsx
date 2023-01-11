import { mainCardData } from '@/mocks/mainCardData.mock';
import { store } from '@/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MovieCard from './MovieCard';
import singletonRouter from 'next/router';
import { authActions } from '@/redux/slices/authSlice';

const { id, title, imageUrl, overview, voteAverage } = mainCardData;

jest.mock('next/router', () => require('next-router-mock'));

describe('MovieCard', () => {
  window.ResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );
    expect(getByTestId('MovieCard')).not.toBeEmptyDOMElement();
  });

  it('the component should not be rendered if the imageUrl is invalid', async () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={''}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    expect(queryByTestId('MovieCard')).not.toBeInTheDocument();
  });

  it('the component should not be rendered if the overview is invalid', async () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={''}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    expect(queryByTestId('MovieCard')).not.toBeInTheDocument();
  });

  it('the component should not be rendered if the title is invalid', async () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={''}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    expect(queryByTestId('MovieCard')).not.toBeInTheDocument();
  });

  it('the component should not be rendered if the voteAverage is invalid', async () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={''}
        />
      </Provider>
    );

    expect(queryByTestId('MovieCard')).not.toBeInTheDocument();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
          className="test-class"
        />
      </Provider>
    );
    expect(getByTestId('MovieCard')).toHaveClass('test-class');
  });

  it('the component should be render with the correct title', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );
    expect(getByTestId('MovieCard')).toHaveTextContent(title);
  });

  it('the component should be render with the correct overview', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );
    expect(getByTestId('MovieCard')).toHaveTextContent(overview);
  });

  it('the component should be render with the correct voteAverage', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );
    expect(getByTestId('MovieCard')).toHaveTextContent(voteAverage.toString());
  });

  it('when click on button has to add or remove the movie from the favourite movie list', async () => {
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    getByTestId('add-button').click();
    expect(store.getState().auth.favoriteMovies[0]).toHaveProperty('id', id);
    expect(store.getState().auth.favoriteMovies[0]).toHaveProperty(
      'title',
      title
    );
    expect(store.getState().auth.favoriteMovies[0]).toHaveProperty(
      'overview',
      overview
    );
    expect(store.getState().auth.favoriteMovies[0]).toHaveProperty(
      'posterImage',
      imageUrl
    );
    expect(store.getState().auth.favoriteMovies[0]).toHaveProperty(
      'voteAverage',
      voteAverage
    );

    const removeButton = await findByTestId('remove-button');
    removeButton.click();
    expect(store.getState().auth.favoriteMovies).toHaveLength(0);
  });

  it('when click on the image the app has to go to path `/details/${id}`', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );
    getByTestId('MovieCardImage').click();
    expect(singletonRouter.pathname).toBe(`/details/${id}`);
  });

  it('if the movie is NOT in favourite movies the add button is shown', async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    const element = await findByTestId('add-button');
    expect(element).toBeInTheDocument();
  });

  it('if the movie is in favourite movies the remove button is shown', async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <MovieCard
          id={id}
          imageUrl={imageUrl}
          overview={overview}
          title={title}
          voteAverage={voteAverage}
        />
      </Provider>
    );

    store.dispatch(
      authActions.addFavoriteMovie({
        id,
        title,
        overview,
        posterImage: imageUrl,
        voteAverage,
      })
    );

    const element = await findByTestId('remove-button');
    expect(element).toBeInTheDocument();
  });
});
