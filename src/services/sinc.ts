import { sincList } from "./mock/sinc";

const db = sincList

export function getSincByFiscalDocumento( fiscalDocument: string ) {
  //@ts-ignore
  const foundSinc = db.filter( (sinc) => sinc.fiscalDocument === fiscalDocument )[0]
  return foundSinc
}