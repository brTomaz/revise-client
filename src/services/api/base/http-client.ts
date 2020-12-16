import axios from 'axios'

const REVISE_BASE_URL = `${process.env.API_HOST}:${process.env.API_PORT}`

export const httpClient = axios.create({
  baseURL: REVISE_BASE_URL
})
