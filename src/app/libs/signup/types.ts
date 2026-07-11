export interface SignUpprop{
    setOpt: (v: number|null) => void 
}
export interface UserOnboardFormData {
    firstName: string
    lastName: string
    clerkid:string
  }
export interface DealerOnboardFormData {
    companyName: string
    tradingName: string
    email: string
    phone: string
    logo?: File | null
    clerkid:string|null
    firstName: string
    lastName: string
  }
export interface EnquiryForm{
  firstName:string
  lastName:string
  email:string
  phone?:string
  message:string
}