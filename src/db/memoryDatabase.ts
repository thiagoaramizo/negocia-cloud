import { DebtorType } from "@/@types/DebtorType";
import { ProposeType } from "@/@types/ProposeType";
import { clientList } from "@/services/mock/clients";
import { proposesList } from "@/services/mock/proposes";

export const MemoryDatabase = {
  debtors: <DebtorType[]>[...clientList],
  proposes: <ProposeType[]>[...proposesList]
}

