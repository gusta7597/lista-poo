import pg from "pg";
const { Pool } = pg;

const connectToDB = () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gerson',
    password: 'admin',
    port: 5432, 
  });
  console.log("conectado com sucesso")
  return pool;
};


export default connectToDB;
