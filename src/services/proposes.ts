import { ProposeType } from "@/@types/ProposeType";
import { MemoryDatabase } from "@/db/memoryDatabase";
import { randomUUID } from "crypto";

const db = MemoryDatabase

export function listDebtors() {
    return db.debtors
}

export function listProposes() {
  return db.proposes
}

export function savePropose( propose: ProposeType ) {
  db.proposes.unshift(
    { 
      ...propose, 
      id: randomUUID()
    }
  )
}

export function getPropose( id: string ) {
  const foundPropose = db.proposes.filter( (propose) => propose.id === id )[0]
  return foundPropose
}