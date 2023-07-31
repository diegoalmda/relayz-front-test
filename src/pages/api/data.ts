import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../data/data.json'
import { IRelayzNode } from '../../types/DataTypes'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRelayzNode[]>
) {
  res.status(200).json(data)
}
