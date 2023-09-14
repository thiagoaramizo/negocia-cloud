import { ProposeType } from "@/@types/ProposeType";

export const proposesList: ProposeType[] = [
  {
    id: '3f0460e2-5c5a-4b02-a9b3-3df568cbfcf8',
    debt:{
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
      expirationDate: new Date('2023-08-30'),
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
      correction: {
        name: 'INPC',
        value: 1,
        correctionStatus: 'no-correct'
      }
    },
      
    date: new Date('2023-09-09'),
    status: {
      updatedAt: new Date('2023-09-09'),
      situation: 'viewed',
    },
    proposeValue: 1050,
    expirationDate: new Date('2023-22-09'),
    paymentDeadline: 1,
    payments: [
      { 
        name: 'creditCard',
        status: true,
      },
      { 
        name: 'bankShip',
        status: true,
      },
      { 
        name: 'pix',
        status: true,
      }
    ],
    comunication: [
      { 
        name: 'email',
        status: true,
      },
      { 
        name: 'whatsapp',
        status: true,
      },
    ]
  },
];