import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';
import { useState, useEffect } from 'react';

import React from 'react';

const OmdbContainer = () => {
  // Set state for the search result and the search query
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  // When the component mounts, use the API.search method to render a default search result
  useEffect(() => {
    searchMovie('The Matrix');
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Set the state for the input name and value
    setSearch({ search: value });
  };

  // Handler for form submission. When the form is submitted use the API.search method to search for the movie(s)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search.search);
  };

  // Destructure the result object to make the code more readable
  const {
    Title = '',
    Poster = '',
    Director = '',
    Genre = '',
    Released = '',
  } = result;

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || 'Search for a Movie to Begin'}>
            {Title ? (
              <MovieDetail
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
