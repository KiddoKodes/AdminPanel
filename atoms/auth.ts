//An atom refers to a slice of store in recoilJS
import { atom } from 'recoil'
import { User } from '../typings'
interface state {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
}
const defaultState: state = {
  user: null,
  loading: false,
  isAuthenticated: false,
}
export const authState = atom({
  key: 'authState', // unique ID (with respect to other atoms/selectors)
  default: defaultState, // default value (aka initial value)
})
