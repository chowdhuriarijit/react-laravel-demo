
import axios from 'axios';

const apiUrl = 'http://myweb.local/api/getPages';
export const FETCH_POST = 'FETCH_POST';



export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchPages = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



