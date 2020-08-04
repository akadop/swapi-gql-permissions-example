import axios, { AxiosPromise } from 'axios'
import { People, Peoples, Vehicles, Vehicle } from './ts-types'

const SwapiApi = axios.create({ baseURL: 'https://swapi.dev/api' })

export const SwapiService = {
  getPeopleById: (id: string): AxiosPromise<People> => SwapiApi.get(`/people/${id}`),
  getPeoples: (): AxiosPromise<Peoples> => SwapiApi.get('/people'),
  getVehicles: (): AxiosPromise<Vehicles> => SwapiApi.get('/vehicles'),
  getVehiclesById: (id: string): AxiosPromise<Vehicle> => SwapiApi.get(`/vehicles/${id}`)
}
