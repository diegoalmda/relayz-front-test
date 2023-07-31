import axios from 'axios'

import { IRelayzNode } from '../types/DataTypes'

const BASE_URL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export async function getNodes(): Promise<IRelayzNode[]> {
  const response = await api.get('/nodes')

  if (response) {
    return response.data
  }

  return [] as IRelayzNode[]
}
