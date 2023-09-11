import { DebtorType } from "./DebtorType"

export interface DebtType {
  id: string
  debtor: DebtorType[]
  origin: string
  documentId: string
  expirationDate: string | Date
  originalValue: number
  correction?: ChargerType
  fee: ChargerType
  interest: ChargerType
  otherCharges: ChargerType[]
  presentValue: number
  collateral: CollateralGuaranteeType[]
}

export interface CollateralGuaranteeType {
  name: string
  desc: string
  value: string
}

export interface ChargerType {
  name: string
  chargerType: 'fixed' | 'percentage'
  value: number
}
