import axios from 'axios';
import { YELP_BEARER } from '../../tokens';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: YELP_BEARER,
  }
});
