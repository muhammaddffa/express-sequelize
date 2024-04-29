import Sequelize from "sequelize";

const db = new Sequelize('kelulusan', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

export default db;