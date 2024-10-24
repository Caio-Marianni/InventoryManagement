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