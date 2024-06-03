import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Books = db.define('books',{
    id_user:{
        type: DataTypes.INTEGER
    },
    judul:{
        type: DataTypes.STRING
    },
    pengarang:{
        type: DataTypes.STRING
    },
    img_url:{
        type: DataTypes.STRING
    },
    stok:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default Books;
(async()=>{
    await db.sync();
})();