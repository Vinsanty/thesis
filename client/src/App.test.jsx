import reviewsReducer, { createNewDeviceReviewAC } from './store/reviewsReducer';
import axios from 'axios';


it('review should  be created', () => {
    let action = createNewDeviceReviewAC('asdasda')
    let state =  {
      reviews:[],
      newReview : ''
  }
  let newState = reviewsReducer(state,action)

  expect(newState.reviews.length).toBe(1)
});



