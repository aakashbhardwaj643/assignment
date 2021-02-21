import React, { useState, useEffect } from 'react';
import ReviewMain from './reviews/ReviewMain';
import ReviewForm from './reviews/ReviewForm';
import { useDispatch } from 'react-redux';
import { fetchReviews } from '../actions/index';

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [currentId, dispatch]);

  return (
    <div className="ui container">
      <ReviewMain setCurrentId={setCurrentId}/>
      <ReviewForm setCurrentId={setCurrentId} currentId={currentId}/>
    </div>
  );
};

export default App;