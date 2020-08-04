import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type People {
    birth_year: String
    created: String
    edited: String
    eye_color: String
    films: [String]
    gender: String
    hair_color: String
    height: String
    homeworld: String
    mass: String
    name: String
    skin_color: String
    species: [String]
    starships: [String]
    url: String
    vehicles: [String]
  }

  type Vehicle {
    name: String # The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
    model: String # The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
    vehicle_class: String # The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
    manufacturer: String # The manufacturer of this vehicle. Comma separated if more than one.
    length: String # The length of this vehicle in meters.
    cost_in_credits: String # The cost of this vehicle new, in Galactic Credits.
    crew: String # The number of personnel needed to run or pilot this vehicle.
    passengers: String # The number of non-essential people this vehicle can transport.
    max_atmosphering_speed: String # The maximum speed of this vehicle in the atmosphere.
    cargo_capacity: String # The maximum number of kilograms that this vehicle can transport.
    consumables: String # The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
    films: [String] # An array of Film URL Resources that this vehicle has appeared in.
    pilots: [String] # An array of People URL Resources that this vehicle has been piloted by.
    url: String # the hypermedia URL of this resource.
    created: String # the ISO 8601 date format of the time that this resource was created.
    edited: String # the ISO 8601 date format of the time that this resource was edited.
  }

  type Query {
    vehicle(id: ID!): Vehicle! @isAuthenticated
    people(id: ID!): People! @isAuthenticated @hasRole(roles: ["ADMIN", "USER"])
    peoples: [People!]! @isAuthenticated @hasRole(roles: ["ADMIN"])
    vehicles: [Vehicle!]! @isAuthenticated @hasPermission(permissions: ["GET_VEHICLES"])
  }
`
