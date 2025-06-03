# M7-ponderada-semana-3

[EN]

This repository demonstrates a backend connected to a database and a very simple frontend as a proof of concept.

## Technologies

- Database: AWS RDS PostgreSQL  
- Backend: NestJS, TypeScript, and Prisma  
- Frontend: Next.js and TypeScript  

## Main Folder and File Structure
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

## Demo Video
Video showing the execution of EC2 instances and the RDS service, both on AWS:  
[![Link para o vídeo](https://i9.ytimg.com/vi/NQt5Hy7Lp9A/mqdefault.jpg?sqp=CKz3j6cG-oaymwEmCMACELQB8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGFkgOihyMA8=&rs=AOn4CLDlxICHYy31mzSD138g6hr8Mb6KQw)](https://youtu.be/NQt5Hy7Lp9A)

## Database Modeling
There are two tables: `Artist` and `Song`, represented in the [schema.prisma](./backend/prisma/schema.prisma) file as follows:
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
Although the full schema has been built and implemented in the backend, the frontend only provides interaction options (CREATE and GET) for the `Song` table, as required by the weighted assignment.

## Deployment
Example of deploying both backend and frontend environments.

### Backend
1. Access the EC2 instance via terminal:  
   ```bash
   ssh -i "ponderada-semana-3.pem" ec2-user@ec2-52-90-26-79.compute-1.amazonaws.com
   ```
2. Install Git:  
   ```bash
   sudo yum install git
   ```
3. Install and activate Node.js by following the [AWS tutorial](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html).  
4. Clone the repository:  
   ```bash
   git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git
   ```
5. Navigate to the backend folder:  
   ```bash
   cd M7-ponderada-semana-3/backend
   ```
6. Create the environment variables file to connect to the PostgreSQL database:  
   ```bash
   touch .env
   ```
7. Verify that the file was created:  
   ```bash
   ls -a
   ```
8. Edit the `.env` file:  
   ```bash
   nano .env
   ```  
   Paste the database connection string:  
   ```
   DATABASE_URL="postgres://username:password@host:port/database"
   ```
9. Install dependencies:  
   ```bash
   npm install
   ```
10. Generate the Prisma client:  
    ```bash
    npx prisma generate
    ```
11. Start the server:  
    ```bash
    npm run start:dev
    ```
12. **OPTIONAL:** Access the instance’s IP address on port 3000 to test the endpoints:  
    ```
    http://52.90.26.79:3000
    ```

### Frontend
1. Access the EC2 instance via terminal:  
   ```bash
   ssh -i "ponderada-semana-3.pem" ec2-user@ec2-3-92-78-230.compute-1.amazonaws.com
   ```
2. Install Git:  
   ```bash
   sudo yum install git
   ```
3. Install and activate Node.js by following the [AWS tutorial](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html).  
4. Clone the repository:  
   ```bash
   git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git
   ```
5. Navigate to the frontend folder:  
   ```bash
   cd M7-ponderada-semana-3/frontend
   ```
6. Install dependencies:  
   ```bash
   npm install
   ```
7. Start the frontend:  
   ```bash
   npm run dev
   ```
8. Access the instance’s IP address on port 3001:
```
http://3.92.78.230:3001
```


---

[PT-BR]

# M7-ponderada-semana-3

[PT-BR]

Este repositório demonstra um backend conectado a um banco de dados e um frontend extremamente simples para demonstração de conceito.

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
[![Link para o vídeo](https://i9.ytimg.com/vi/NQt5Hy7Lp9A/mqdefault.jpg?sqp=CKz3j6cG-oaymwEmCMACELQB8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGFkgOihyMA8=&rs=AOn4CLDlxICHYy31mzSD138g6hr8Mb6KQw)](https://youtu.be/NQt5Hy7Lp9A)

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
Apesar da modelagem completa ter sido construída e implementada no backend, existem apenas as opções de interação (CREATE e GET), referentes à tabela `Songs`, no frontend, como solicitado na atividade ponderada.

## Deploy
Exemplificação do deploy dos ambientes de backend e frontend

### Backend
1. Acessar a instância EC2 pelo terminal:  
```bash
ssh -i "ponderada-semana-3.pem" ec2-user@ec2-52-90-26-79.compute-1.amazonaws.com
```
2. Instalar git:  
```bash
sudo yum install git
```
3. Instalar e ativar Node.js seguindo o [tutorial da AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html).  
4. Clonar o repositório com:  
```bash
git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git
```
5. Navegar até a pasta do backend:  
```bash
cd M7-ponderada-semana-3/backend
```
6. Criar o arquivo de variáveis de ambiente para conectar ao banco de dados Postgres:  
```bash
touch .env
```
7. Checar se o arquivo foi criado:  
```bash
ls -a
```
8. Editar o arquivo `.env`:  
```bash
nano .env
```  
Colar a variável de ambiente de acesso ao banco:  
```
DATABASE_URL="postgres://username:password@host:port/database"
```
9. Instalar as dependências:  
```bash
npm i
```
10. Iniciar a conexão com o cliente do Prisma:  
 ```bash
 npx prisma generate
 ```
11. Iniciar o servidor:  
 ```bash
 npm run start:dev
 ```
12. **OPCIONAL:** Acessar o endereço de IP da instância na porta 3000 para testar os endpoints:  
 ```
 http://52.90.26.79:3000
 ```

### Frontend
1. Acessar a instância EC2 pelo terminal:  
```bash
ssh -i "ponderada-semana-3.pem" ec2-user@ec2-3-92-78-230.compute-1.amazonaws.com
```
2. Instalar git:  
```bash
sudo yum install git
```
3. Instalar e ativar Node.js seguindo o [tutorial da AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html).  
4. Clonar o repositório com:  
```bash
git clone https://github.com/ThomeGiovana/M7-ponderada-semana-3.git
```
5. Navegar até a pasta do frontend:  
```bash
cd M7-ponderada-semana-3/frontend
```
6. Instalar as dependências:  
```bash
npm i
```
7. Iniciar o front:  
```bash
npm run dev
```
8. Acessar o endereço de IP da instância na porta 3001:  

```
http://3.92.78.230:3001
```
