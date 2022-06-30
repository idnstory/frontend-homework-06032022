import Vue from 'vue';

export default function API() {
  return {
    getGnb() {
      return Vue.axios.get('http://haezoom-frontend-homework.s3.ap-northeast-2.amazonaws.com/response.json');
    }
  };
}
