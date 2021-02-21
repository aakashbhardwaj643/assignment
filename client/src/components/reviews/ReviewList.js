import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteReview } from '../../actions/index';

const ReviewList = ({ setCurrentId }) => {
  const reviews = useSelector(state => state.reviews);

  const dispatch = useDispatch();

  const renderReviews = () => {
    if(!reviews.length) {
      return null;
    } else {
      return reviews.map(review => {
        return (
          <div className="card" key={review._id}>
            <div className="content">
              <div>
                <div className="header">{review.title}</div>
                <div className="meta">{review.name}</div>
                <div className="description">{review.comment}</div>
                <button className="ui button" onClick={() => setCurrentId(review._id)}>Update</button>
                <button className="ui button" onClick={() => dispatch(deleteReview(review._id))}>Delete</button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      {renderReviews()}
    </div>
  );
};

export default ReviewList;