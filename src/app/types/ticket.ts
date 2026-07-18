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


export interface TicketNotes {
    ticketId: string
    createdById: string
  
    type:
    | "PHONE_CALL"
    | "EMAIL"
    | "SMS"
    | "WALK_IN"
    | "MEETING"
    | "INTERNAL_NOTE"
    | "SYSTEM"
  
    subject?: string
  
    notes: string
  
    followUpAt?:Date | null
  
    outcome?:
      | "NONE"
      | "NO_ANSWER"
      | "LEFT_MESSAGE"
      | "CUSTOMER_RESPONDED"
      | "FOLLOW_UP_REQUIRED"
      | "INFORMATION_REQUESTED"
      | "DOCUMENT_REQUESTED"
      | "APPOINTMENT_BOOKED"
      | "COMPLETED"
      | "CANCELLED"
  }

  export interface TransferTicketRequest {
    ticketId: string
    dealerUserId: string
    department:
      | "SALES"
      | "FINANCE"
      | "MANAGEMENT"
      | "OPERATIONS"
  }