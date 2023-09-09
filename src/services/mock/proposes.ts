import { ProposeType } from "@/@types/ProposeType";

export const proposesList: ProposeType[] = [
  {
    id: '3f0460e2-5c5a-4b02-a9b3-3df568cbfcf8',
    debt: [
      {
        id: '101',
        debtor: [
          {
            id: '3f0460e2-5c5a-4b02-a9b3-3df568cbfcf7',
            fiscalDocument: '628.725.592-72',
            name: 'Hugo Kevin Levi Viana',
            email: 'hugo_kevin_viana@rgsa.com.br',
            typeOfDebtor: 'individual',
            address: {
              postalCode: '12345-678',
              city: 'Cidade 1',
              uf: 'UF 1',
              street: 'Rua 1',
              number: '123',
              complement: 'Complemento 1',
            }
          },
        ],
        origin: 'Origem 1',
        documentId: 'doc123',
        expirationDate: new Date('2023-12-31'),
        originalValue: 1000,
        fee: {
          name: 'Multa contratual',
          chargerType: 'percentage',
          value: 10,
        },
        interest: {
          name: 'Juros',
          chargerType: 'percentage',
          value: 1,
        },
        otherCharges: [
          {
            name: 'Honorários',
            chargerType: 'fixed',
            value: 200,
          },
        ],
        presentValue: 1200,
        collateral: [],
      },
      {
        id: '102',
        debtor: [
          {
            id: '3f0460e2-5c5a-4b02-a9b3-3df568cbfcf7',
            fiscalDocument: '628.725.592-72',
            name: 'Hugo Kevin Levi Viana',
            email: 'hugo_kevin_viana@rgsa.com.br',
            typeOfDebtor: 'individual',
            address: {
              postalCode: '12345-678',
              city: 'Cidade 1',
              uf: 'UF 1',
              street: 'Rua 1',
              number: '123',
              complement: 'Complemento 1',
            }
          },
        ],
        origin: 'Origem 2',
        documentId: 'doc456',
        expirationDate: new Date('2023-12-31'),
        originalValue: 2000,
        fee: {
          name: 'Multa',
          chargerType: 'fixed',
          value: 200,
        },
        interest: {
          name: 'Juros Empresa 1',
          chargerType: 'percentage',
          value: 15,
        },
        otherCharges: [
          {
            name: 'Outra Cobrança Empresa 1',
            chargerType: 'fixed',
            value: 30,
          },
        ],
        presentValue: 2400,
        collateral: [],
      },
    ],
    date: new Date('2023-09-09'),
    status: {
      updatedAt: new Date('2023-09-09'),
      situation: 'viewed',
    },
  },
];