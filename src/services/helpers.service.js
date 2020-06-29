import axios from 'axios'

const FAKE_USERS_API_URL = 'https://reqres.in/api/users'

export const API_FAKE_USERS = {
  getFakeUsers: async () => {
    return await axios.get(FAKE_USERS_API_URL)
      .then(data => {
        console.log('getFakeUsers, data', data)
        return data;
      }).catch(error => {
        console.error('Error, getFakeUsers', error)
        return;
      })
  }
}