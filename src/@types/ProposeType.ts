import { DebtType } from "./DebtType"


export interface ProposeType {
  id: string
  debt: DebtType
  date: Date
  updatedAt?: Date
  status: ProposesStatus
  proposeValue: number
  expirationDate: Date
  paymentDeadline: number
  payments: {
    name: string
    status: boolean
  }[]
  comunication: {
    name: string
    status: boolean
  }[]
  chat?: {
    sender: 'debtor' | 'operator'
    message: string
    dateTime: Date
    attachment?: Blob
  }[]
}

export interface ProposesStatus {
  updatedAt: Date
  situation:  "sent" | "viewed" | "accepted" | "completed" | "expired" | "cancelled" | "execution" | "error"
}