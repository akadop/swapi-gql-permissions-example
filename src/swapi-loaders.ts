import { People, Vehicle } from './ts-types'
import { SwapiService } from './swapi'

const getPeopleById = async (id: string): Promise<People> => {
  const { data } = await SwapiService.getPeopleById(id)
  return data
}

const getPeoples = async (): Promise<People[]> => {
  const {
    data: { results }
  } = await SwapiService.getPeoples()
  return results
}

const getVehicles = async (): Promise<Vehicle[]> => {
  const {
    data: { results }
  } = await SwapiService.getVehicles()
  return results
}

const getVehicleById = async (id: string): Promise<Vehicle> => {
  const { data } = await SwapiService.getVehiclesById(id)
  return data
}

export { getPeopleById, getVehicles, getPeoples, getVehicleById }
