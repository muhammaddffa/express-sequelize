import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Siswa = db.define(
  "siswa",
  {
    nama: DataTypes.STRING,
    nis: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM("Lulus", "Tidak Lulus"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Siswa;

(async () => {
  await db.sync();
})();
