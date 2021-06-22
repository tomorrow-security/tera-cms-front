import { candidats } from '../../../data'

export default function handler(req, res) {
  req.status(200).json(candidats)
}