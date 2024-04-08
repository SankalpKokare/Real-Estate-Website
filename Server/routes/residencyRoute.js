import express from 'express';
import { createResidency, getAllResidencies } from '../controllers/residencyCntrl.js';

const router = express.Router()

router.post('/create', createResidency)
router.get("/allresd", getAllResidencies)

export { router as residencyRoute }