import { AddressDebtorType, DebtorType } from "@/@types/DebtorType";

const genericAddress: AddressDebtorType = {
  postalCode: '00000-000',
  city: 'Uberlândia',
  uf: 'MG',
  street: 'Avenida Afonso Pena',
  number: '1000',
  complement: '101',
}


export const clientList: DebtorType[] = [
  {
    id: '13bd983a-f354-4271-b2f0-598909d823c4',
    fiscalDocument: '200.345.700-39',
    name: 'Fulano Ciclano Beltrano',
    email: 'fulano@email.com',
    typeOfDebtor: 'individual',
    address: genericAddress,
    totalDebt: 365.87,
    lastStats: {
      updatedAt: new Date('2023-09-09'),
      situation: 'accepted'
    }
  },
  {
    id: 'b621adab-c937-400a-a758-1bc1d9141a2a',
    fiscalDocument: '68.144.470/0001-62',
    name: 'SpaceZ do Brasil Ltda',
    email: 'eltrano@spacez.com',
    typeOfDebtor: 'company',
    address: genericAddress,
    totalDebt: 12560.2,
    lastStats: {
      updatedAt: new Date('2023-08-09'),
      situation: 'sent'
    },
    debtorData: {
      contactName: 'Eltrano Muskano',
    }
  },
  {
    id: '6d784d9d-92f9-4c85-980e-ca2335092cca',
    fiscalDocument: '309.920.765-95',
    name: 'Cauê Felipe Leonardo Moraes',
    email: 'caue_moraes@keffin.com.br',
    typeOfDebtor: 'individual',
    address: genericAddress,
  },
  {
    id: '3f0460e2-5c5a-4b02-a9b3-3df568cbfcf7',
    fiscalDocument: '628.725.592-72',
    name: 'Hugo Kevin Levi Viana',
    email: 'hugo_kevin_viana@rgsa.com.br',
    typeOfDebtor: 'individual',
    address: genericAddress,
    totalDebt: 520.25,
    lastStats: {
      updatedAt: new Date('2023-08-06'),
      situation: 'viewed'
    },
  },
  {
    id: '6fb60dbb-aca7-4734-82eb-64f0b7a000f7',
    fiscalDocument: '286.241.414-00',
    name: 'Pietra Laura Sophia Melo',
    email: 'pietra-melo91@profiledesign.com.br',
    typeOfDebtor: 'individual',
    address: genericAddress,
    totalDebt: 1060.4,
    lastStats: {
      updatedAt: new Date('2023-08-09'),
      situation: 'expired'
    },
  },
  {
    id: 'ba678b61-2371-494b-8056-70b399d31012',
    fiscalDocument: '52.341.384/0001-00',
    name: 'Bar e Restaurante do Fuclano Ltda',
    email: 'fuclano1964@email.com',
    typeOfDebtor: 'company',
    address: genericAddress,
    debtorData: {
      contactName: 'Fuclano Silva Sauro',
    }
  },
  {
    id: '443d1a10-36cb-4d2b-894f-6e9518f301a3',
    fiscalDocument: '729.294.345-46',
    name: 'Silvana Patrícia Monteiro',
    email: 'silvana_patricia_monteiro@caiuas.com.br',
    typeOfDebtor: 'individual',
    address: genericAddress,
    totalDebt: 60.4,
    lastStats: {
      updatedAt: new Date('2023-08-09'),
      situation: 'completed'
    },
  },
  {
    id: 'cf5383c0-0aa9-4569-92ee-e99fb82b2138',
    fiscalDocument: '485.101.609-37',
    name: 'Sandra Alana Bruna Lima',
    email: 'sandraalanalima@yande.com.br',
    typeOfDebtor: 'individual',
    address: genericAddress,
    totalDebt: 180,
    lastStats: {
      updatedAt: new Date('2023-08-09'),
      situation: 'completed'
    },
  },
]