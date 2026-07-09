export interface AddUserFormData {
  firstName: string
  lastName: string
  email: string
  password:string
  role: 'OWNER' | 'MANAGER' | 'SALES'
}

