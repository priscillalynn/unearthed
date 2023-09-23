import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GiftsController from "../controllers/gifts.js";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts, (req, res) => {
  const { giftData } = res.locals.giftData
  res.status(200).json(giftData)
})

router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router



