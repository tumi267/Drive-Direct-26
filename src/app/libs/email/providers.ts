export const SMTPProviders = {
    gmail: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
    },
  
    office365: {
      host: "smtp.office365.com",
      port: 587,
      secure: false,
    },
  
    outlook: {
      host: "smtp.office365.com",
      port: 587,
      secure: false,
    },
  
    zoho: {
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
    },
  } as const;
  
  export type EmailProvider = keyof typeof SMTPProviders;