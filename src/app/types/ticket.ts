export interface CreateTicketRequest {
    type: 'VEHICLE_ENQUIRY'
    vehicleId: string
    customer: {
      firstName: string
      lastName: string
      email: string
      phone?: string
    }
    dealerId:string
    message: string
  }