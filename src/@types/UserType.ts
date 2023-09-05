export interface UserType {
  username: string
  email: string
  id: string
  pass: string
  avatar: string
}

export interface TempUserType {
  username: string
  email: string
  pass: string
  avatar: string
}

export interface DecodeTokenUserType {
  username: string
  userId: string
  userEmail: string
  avatar?: string
  iat?: number
}