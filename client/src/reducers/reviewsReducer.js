import { FETCH_REVIEWS, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../actions/types';

const reviewsReducer = (reviews = [], action) => {
  switch(action.type) {
    case FETCH_REVIEWS:
      return action.payload;
    case CREATE_REVIEW:
      return [...reviews, action.payload];
    case UPDATE_REVIEW:  
      return reviews.map(review => review._id === action.payload.id ? action.payload: review);
    case DELETE_REVIEW:
      return reviews.filter(review => review._id !== action.payload );
    default:
      return reviews;
  }
};

export default reviewsReducer;