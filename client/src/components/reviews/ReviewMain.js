import React from 'react';
import ReviewWrite from './ReviewWrite';
import ReviewList from './ReviewList';

const ReviewMain = ({ setCurrentId }) => {
  return (
    <div>
      <ReviewWrite/>
      <ReviewList setCurrentId={setCurrentId}/>
    </div>
  );
};

export default ReviewMain;