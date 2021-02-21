import { FETCH_REVIEWS, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from './types';
import api from '../api/api';

export const fetchReviews = () => async (dispatch) => {
  try {
    const response = await api.get('/reviews');
    console.log(response);
    dispatch({ type: FETCH_REVIEWS, payload: response.data });
  } catch(error) {
    console.log(error);
  }
};

export const createReview = (review) => async(dispatch) => {
  try {
    const response = await api.post('/reviews', review);
    dispatch({ type: CREATE_REVIEW, payload: response.data });
  }
  catch(error) {
    console.log(error);
  }
};

export const updateReview = (id, updatedReview) => async(dispatch) => {
  try {
    const response = await api.patch(`/reviews/${id}`, updatedReview);
    dispatch({ type: UPDATE_REVIEW, payload: response.data });
  } catch(error) {
    console.log(error.message);
  }
}

export const deleteReview = (id) => async dispatch => {
  try {
    await api.delete(`/reviews/${id}`);
    dispatch({ type: DELETE_REVIEW, payload: id });
  } catch(error) {
    console.log(error);
  }
} 
