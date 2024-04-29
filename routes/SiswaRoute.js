import express from "express";
import { createSiswa, getSiswa, getSiswabyNis } from "../controllers/SiswaController.js";

const router = express.Router();

router.get('/siswa', getSiswa);
router.get('/siswa/:nis', getSiswabyNis);
router.post('/siswa', createSiswa)

export default router;