import Siswa from "../models/SiswaModel.js";

export const getSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSiswabyNis = async (req, res) => {
    try {
      const response = await Siswa.findOne({
        where:{
            nis:req.params.nis
        }
      });
      res.status(200).json({result: response, msg: "Get User By Nis"});
    } catch (error) {
      console.log(error.message);
    }
  };
  

export const createSiswa = async (req, res) => {
  try {
    const { nama, nis, status } = req.body;
    const newSiswa = await Siswa.create({ nama, nis, status });

    res.status(201).json({ result: newSiswa, msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};
