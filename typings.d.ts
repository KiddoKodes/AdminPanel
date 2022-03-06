export interface User {
  id: string
  name: string
  email: string
  passwordHash: string
  isVerified: boolean
  profilePicture: string
  createdAt: string
  updatedAt: string
  blocked: boolean
}
