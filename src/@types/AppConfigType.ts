export interface AppConfigType {
  company : {
    name: string
    tradingName: string
    fiscalDocument: string
    email: string
    address: {
      postalCode: string
      city: string
      uf: string
      street: string
      number: string
      complement: string
    }
    legalRepresentative: {
      name: string,
      fiscalDocument: string
    }
  }
  appInterface: {
    logo: string
    colors: {
      background: string
      primary: string
      secondary: string
    }
  }
  apis: {
    whatsappApi: {
      conection: boolean
      secret: string
    }
    serasaApi: {
      connection: boolean
      secret: string
    }
  }
}