import { Sequelize } from "sequelize";

const db = new Sequelize('project_tcc', 'root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;