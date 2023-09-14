import { DebtorType } from "./DebtorType"

export interface DebtType {
  id: string
  debtor: DebtorType[]
  origin: string
  documentId: string
  expirationDate: string | Date
  originalValue: number
  correction: CorrectionType
  fee: ChargerType
  interest: ChargerType
  otherCharges: ChargerType[]
  presentValue: number
  collateral?: CollateralGuaranteeType[]
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

export interface CorrectionType {
  name: string
  value: number
  correctionStatus: 'correct' | 'no-correct'
}
