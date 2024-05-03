import fs from "fs"
import Sequelize from "sequelize";

const db = new Sequelize(
  "medusa",
  "zZWmJbKVmjBoYfK.root",
  "20hOpY7vj5SNnWoj",
  {
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    port: 4000,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync("/home/daffa/Downloads/isrgrootx1.pem"),
      },
    },
  }
);

export default db;
