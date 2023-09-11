import { DebtType } from "./DebtType"

export interface ProposesStatus {
  updatedAt: Date
  situation:  "sent" | "viewed" | "accepted" | "completed" | "expired" | "cancelled" | "execution" | "error"
}

export interface ProposeType {
  id: string
  debt: DebtType
  date: Date
  status: ProposesStatus
}