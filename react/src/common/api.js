import axios from 'axios';

export default function API() {
  return {
    getGnb() {
      return axios.get('http://haezoom-frontend-homework.s3.ap-northeast-2.amazonaws.com/response.json');
    }
  };
}
