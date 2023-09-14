import { ProposesStatus } from "./ProposeType"

export interface DebtorType {
  typeOfDebtor: 'individual' | 'company'
  fiscalDocument: string
  name: string
  email: string
  phone?: string
  address: AddressDebtorType
  id: string
  companyDebtorData?: CompanyDebtorDataType
  totalDebts?: number
  lastStats?: ProposesStatus
}

export interface CompanyDebtorDataType {
  contactName: string
  legalRepresentative?: LegalRepresentativeType
}

export interface AddressDebtorType {
  postalCode: string
  city: string
  uf: string
  street: string
  number: string
  complement: string
}

export interface LegalRepresentativeType {
  name: string
  email: string
  phone: string
}

