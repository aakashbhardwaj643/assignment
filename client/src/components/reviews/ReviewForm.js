import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, updateReview } from '../../actions/index';

const ReviewForm = ({ currentId, setCurrentId }) => {
  const [reviewData, setReviewData] = useState({ 
    name: '', title: '', comment: ''
   });
  const dispatch = useDispatch();

  const review = useSelector(state => currentId ? state.reviews.find(r => r._id === currentId) : null);

   useEffect(() => {
    if(review) {
      setReviewData(review);
    }
   }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updateReview(currentId, reviewData));
    } else {
      dispatch(createReview(reviewData));
    }

    clearInputs();
  }   

  const clearInputs = () => {
    setCurrentId(null);
    setReviewData({ name: '', title: '', comment: '' });
  }

  return (
    <div>
      <form className="ui form" onSubmit={e => handleSubmit(e)}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" onChange={e => setReviewData({ ...reviewData, name: e.target.value })} value={reviewData.name}/>
        </div>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" onChange={e => setReviewData({ ...reviewData, title: e.target.value })} value={reviewData.title}/>
        </div>
        <div className="ui field">
          <label htmlFor="review">Review</label>
          <input id="review" onChange={e => setReviewData({ ...reviewData, comment: e.target.value })} value={reviewData.comment}/>
        </div>
        <button className="ui button">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;