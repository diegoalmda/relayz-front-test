import { NextResponse } from 'next/server'

import data from '../../../data/data.json'

export async function POST(req: Request) {
  console.log(req.body)
}
