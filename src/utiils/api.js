import axios from './axios'

const api = {
  ambassador: {
    leaderboard: {
      get: () => {
        const path = '/ca/leaderboard'
        return axios.get(path).then((res) => res.data)
      }
    },
    profile: {
      get: () => {
        const path = '/ca/profile'
        return axios.get(path).then((res) => res.data)
      }
    },
    forgotPassword: {
      setEmail: (emailData) => {
        const path = '/auth/forgot-password/ca'
        return axios.post(path, emailData).then((res) => res.data)
      },
      submitPassword: (passwordData) => {
        const path = '/auth/submit-password/ca'
        return axios.post(path, passwordData).then((res) => res.data)
      }
    },
    referralCode: {
      verify: (code) => {
        const path = '/ca/verify-code'
        return axios.post(path, code).then((res) => res.data)
      }
    }
  },
  common: {
    events: {
      getAll: () => {
        const path = '/events'
        return axios.get(path).then((res) => res.data)
      },
      getByName: (uniqueName) => {
        const path = `/events/${uniqueName}`
        return axios.get(path).then((res) => res.data)
      }
    }
  }
}

export default api
