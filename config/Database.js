import { Sequelize } from "sequelize";

const db = new Sequelize( "bookslibs-db", 'root' ,'Kiki12345&',{
    host: "34.101.227.111",
    dialect: "mysql"
});

// const db = new Sequelize( "project_tcc", 'root' ,'',{
//     host: "localhost",
//     dialect: "mysql"
// });

export default db;