import { selector } from 'recoil'
import { authState } from '../atoms/auth'

export const logoutState = selector({
  key: 'logoutState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    //Do some shit in backend and delete token
    const user = {}
    return user
  },
})
