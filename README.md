# M7-ponderada-semana-3
Este repositório é referente à atividade ponderada da semana 3, módulo 7.

## Tecnologias

- Banco de dados AWS RDS Postgre
- Backend: Nestjs, TypeScript e Prisma
- Frontend: Nextjs e Typescript

## Estrutura de pastas e arquivos principais
```
| --> backend
    | --> prisma
        | schema.prisma
    | --> src
        | -> songs
        | -> artists
        | app.controller.ts
| --> frontend
    | --> app
        | --> components
        | --> songs-add
        | page.tsx
| README.MD
```

## Vídeo demonstrativo
Vídeo demonstrando a execução de instâncias EC2 e o serviço RDS, ambos da AWS:
[![Link para o vídeo](https://i9.ytimg.com/vi/NQt5Hy7Lp9A/mqdefault.jpg?sqp=CKz3j6cG-oaymwEmCMACELQB8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGFkgOihyMA8=&rs=AOn4CLDlxICHYy31mzSD138g6hr8Mb6KQw)](https://youtu.be/NQt5Hy7Lp9A) <br>
https://youtu.be/NQt5Hy7Lp9A

## Modelagem do banco de dados
Existem duas tabelas: `Artist` e `Song`, representadas da seguinte forma no arquivo [schema.prisma](./backend/prisma/schema.prisma):
```
model Artist {
  id      Int       @id @default(autoincrement())
  name    String
  songs   Song[]
}

model Song {
  id          Int         @id @default(autoincrement())
  name        String      
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  author      Artist      @relation(fields: [authorId], references: [id])
  authorId    Int
}
```
Apesar da modelagem completa ter sido construída e implementada no backend, existem apenas as opções de interação (CREATE e GET), referentes à tabela ``Songs``, no frontend, como solicitado na atividade ponderada.

## Deploy
Exemplificação do deploy dos ambientes de backend e frontend

### Backend
1. Acessar a instância EC2 pelo terminal: `ssh -i "ponderada-semana-3.pem" ec2-user@ec2-52-90-26-79.compute-1.amazonaws.com`
2. Instalar git: `sudo yum install git`;
3. Instalar e ativar Node.js seguindo o [tutorial da AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html);
4. Clonar o repositório com `git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git`;
5. Navegar até a pasta do backend: `cd M7-ponderada-semana-3/backend`;
6. Criar o arquivo de variáveis de ambiente para conectar ao banco de dados Postgres: `touch .env`;
7. Checar se o arquivo foi criado: `ls -a`;
8. Editar o arquivo `.env`:
    - `nano .env`;
    - Colar a variável de ambiente de acesso ao banco: `DATABASE_URL = "postgres://username:password@host:port/database"`
9. Instalar as dependências: `npm i`;
10. Iniciar a conexão com o cliente do Prisma: `npx prisma generate`;
11. Iniciar o servidor: `npm run start:dev`;
12. OPCIONAL: Acessar o endereço de ip da instância na porta 3000 para testar os endpoints: http://52.90.26.79:3000;


### Frontend
1. Acessar a instância EC2 pelo terminal: `ssh -i "ponderada-semana-3.pem" ec2-user@ec2-3-92-78-230.compute-1.amazonaws.com`;
2. Instalar git: `sudo yum install git`;
3. Instalar e ativar Node.js seguindo o [tutorial da AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html);
4. Clonar o repositório com `git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git`;
5. Navegar até a pasta do frontend: `cd M7-ponderada-semana-3/frontend`
6. Instalar as dependências: `npm i`;
7. Iniciar o front: `npm run dev`;
8. Acessar o endereço de ip da instância na porta 3001: http://3.92.78.230:3001