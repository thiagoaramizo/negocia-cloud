## O que é o projeto

Projeto realizado para o HackaJur da Algar para cobrança de dívidas de clientes.
O projeto ficou em 3º lugar na competição.
O projeto teve como requisitos a geração automática de termo de confissão de dívida (executável judicialmente) e a possibilidade de apresentação de garantias. O presente repositório lida diretamente com a UI da solução.

<img width="900" alt="Interface operador" src="https://github.com/thiagoaramizo/negocia-cloud/assets/48260314/d571d7e8-8cd9-4e50-ae90-33b462f79c20">


## Para acessar o projeto

Para executar o projeto é necessário ter o `node` instalado em sua versão mínima `v16.17.0` com o gerenciador de pacotes `npm@9.7.1`.
Após clonar o projeto em sua máquina utilize os comandos abaixo:

```bash
npm i
npm run dev
```

Abra o endereço [http://localhost:3000](http://localhost:3000) no seu navegador para acessar o conteúdo.

Se preferir, acesse a versão on-line do projeto em [negocia-cloud.vercel.app](negocia-cloud.vercel.app). Neste caso não é necessário instalar nada em seu computador.

Os usuário de teste é `teste@email.com` e a senha é `12345`.

## Navegando pelo projeto

### Interface do gestor de cobranças

A interface do devedor oferece as principais operações para o gerenciamento dos devedores, sendo sua principal função o gerenciamento de propostas de acordo.

![uso-operador](https://github.com/thiagoaramizo/negocia-cloud/assets/48260314/9cca50a4-bdc2-44a3-a275-baa80dab1c1c)


### Interface do devedor

Já a inteface do devedor foi desenvolvida tendo como foco o uso de dispositivos móveis. Esta interface é personalizada a partir do painel de configurações da interface do credor (operador).

![uso-devedor](https://github.com/thiagoaramizo/negocia-cloud/assets/48260314/65608954-ba90-4ccf-b1a0-424d9338a41e)



## Tecnologias utilizada no front-end

Para a realização deste projeto as principais bibliotecas utilizadas foram:
- [Next.js](https://nextjs.org)
- [Tailwindcss](https://tailwindcss.com)

## Demais camadas do projeto

- Back-End [https://github.com/osodracnai/hackajur](https://github.com/osodracnai/hackajur)
- Ciência de dados [https://github.com/douglasso1988/sinc](https://github.com/douglasso1988/sinc)
