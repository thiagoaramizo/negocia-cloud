import { ProposeType } from "@/@types/ProposeType";

export const proposesList: ProposeType[] = [
  JSON.parse('{"id":"123aa1f5-cfde-4668-9b0a-164c15e12965","debt":{"id":"","debtor":[{"id":"443d1a10-36cb-4d2b-894f-6e9518f301a3","fiscalDocument":"729.294.345-46","name":"Silvana Patrícia Monteiro","email":"silvana_monteiro@caiuas.com","typeOfDebtor":"individual","address":{"postalCode":"00000-000","city":"Uberlândia","uf":"MG","street":"Avenida Afonso Pena","number":"1000","complement":"101"},"totalDebts":60.4,"lastStats":{"updatedAt":"2023-08-09T00:00:00.000Z","situation":"completed"}}],"origin":"Contrato 997457","documentId":"","expirationDate":"2023-05-01T03:00:00.000Z","originalValue":1245.06,"fee":{"name":"fee","chargerType":"percentage","value":2},"interest":{"name":"interest","chargerType":"percentage","value":1},"otherCharges":[],"presentValue":1342.0024300992,"collateral":[],"correction":{"name":"INPC","value":1.01176,"correctionStatus":"correct"}},"date":"2023-09-14T21:21:09.071Z","status":{"updatedAt":"2023-09-14T21:21:09.071Z","situation":"sent"},"proposeValue":1207.72,"expirationDate":"2023-10-14T21:21:09.071Z","paymentDeadline":10,"payments":[{"name":"creditCard","status":true},{"name":"bankShip","status":true},{"name":"pix","status":true}],"comunication":[{"name":"email","status":true},{"name":"whatsapp","status":true}]}'),
  JSON.parse(`{
    "id": "0c44071b-5760-4378-bfb9-d9ea234b7c8e",
    "debt": {
      "id": "",
      "debtor": [
        {
          "id": "b621adab-c937-400a-a758-1bc1d9141a2a",
          "fiscalDocument": "68.144.470/0001-62",
          "name": "SpaceZ do Brasil Ltda",
          "email": "eltrano@spacez.com",
          "typeOfDebtor": "company",
          "address": {
            "postalCode": "00000-000",
            "city": "Uberlândia",
            "uf": "MG",
            "street": "Avenida Afonso Pena",
            "number": "1000",
            "complement": "101"
          },
          "totalDebts": 12560.2,
          "lastStats": {
            "updatedAt": "2023-08-09T00:00:00.000Z",
            "situation": "sent"
          },
          "companyDebtorData": { "contactName": "Eltrano Muskano" }
        }
      ],
      "origin": "Contrato 011154",
      "documentId": "",
      "expirationDate": "2023-07-16T18:55:48.145Z",
      "originalValue": 297.56,
      "fee": { "name": "fee", "chargerType": "percentage", "value": 10 },
      "interest": { "name": "interest", "chargerType": "percentage", "value": 1 },
      "otherCharges": [],
      "presentValue": 334.24700556799996,
      "collateral": [],
      "correction": {
        "name": "INPC",
        "value": 1.00294,
        "correctionStatus": "correct"
      }
    },
    "date": "2023-09-14T18:55:48.145Z",
    "status": { "updatedAt": "2023-09-14T18:55:48.145Z", "situation": "sent" },
    "proposeValue": 290,
    "expirationDate": "2023-10-14T18:55:48.145Z",
    "paymentDeadline": 10,
    "payments": [
      { "name": "creditCard", "status": true },
      { "name": "bankShip", "status": true },
      { "name": "pix", "status": true }
    ],
    "comunication": [
      { "name": "email", "status": true },
      { "name": "whatsapp", "status": true }
    ]
  }
  `),
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