import axios from 'axios'
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email,
      password,
    })
    if (response.data.token) {
      return {
        loading: false,
        isAuthenticated: true,
        user: response.data.token,
      }
    } else {
      return { loading: false, isAuthenticated: false, user: null }
    }
  } catch (error) {
    return { loading: false, isAuthenticated: false, user: error }
  }
}
