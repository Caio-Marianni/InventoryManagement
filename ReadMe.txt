--Frontend
npm i
  @mui/x-data-grid    #library to use Ui table, and dependencies
  @mui/material
  @emotion/react
  @emotion/styled
  lucide-react        #Icon library
  numeral             #library to manipulate numbers
  recharts            #charm libary
  uuid                #to generate randons Ids uses cases
  axios               #to make APIs calls

#Install dependencies
npm i -D
  @types/node
  @types/uuid
  @types/numeral

#To meka easy to go from light mode to dark mode
npm i 
  tw-colors


--Backend
(Sql created in drawSql ans codded in schema.prisma)
npx prisma generate

npx prisma migrate dev --name init

#Up the tables in schema.prisma
npm run seed

#Install other things
npm i
  express         #framework
  body-parser     
  cors            #for cors issues
  dotenv          #envioment variables
  helmet          #security API
  morgan          #security API
  concurrently    #Diferent variations for the developmente server

#Install dependencies
npm i -D 
  nodemon 
  @types/cors 
  @types/express 
  @types/morgan



===NOTES===
-Chegou quuase no fim do projeto, agora o lance
seria usar/assinar o serviço da AWS da Amazon
mas com nao vou fazer isso, o projeto vai parar por aqui.

-como se inicializa, sao duas pastas/
client - basicamente o frontend e layout
server - armazenamento e funcionalidades para o uso dos dados

client- npm run dev (pra iniciar a aplicaçao do front)
server- npm run dev (para inicar as funcionalidades e rotas criadas)
      - iniciar o servidor que possui os dados, no caso desse projeto é o POSTGRE, USADO NO pgADM 4