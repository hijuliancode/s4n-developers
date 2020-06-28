import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com'

const API_GITHUB = {
  getRepos(username) {
    return axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  },
  getUserData(username) {
    return axios.get(`${GITHUB_API_URL}/users/${username}`);
  }
};

export default API_GITHUB;