import axios from 'axios'

const REVISE_BASE_URL = `${process.env.API_URL}`

export const httpClient = axios.create({
  baseURL: REVISE_BASE_URL
})
