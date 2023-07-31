import { NextResponse } from 'next/server'

import data from '../../../data/data.json'

export async function GET(req: Request) {
  return NextResponse.json({ data })
}
