import express from 'express'
import { typeDefs } from './type-defs'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import { authTypeDefs, createAuthDirectives } from 'gql-auth-directives'
import { DocumentNode } from 'graphql'
import { People, Vehicle } from './ts-types'
import { getPeopleById, getPeoples, getVehicleById, getVehicles } from './swapi-loaders'
require('dotenv').config()

interface Param {
  id: string
}

const resolvers = {
  Query: {
    people: (_: any, { id }: Param): Promise<People> => getPeopleById(id),
    peoples: (): Promise<People[]> => getPeoples(),
    vehicle: (_: any, { id }: Param): Promise<Vehicle> => getVehicleById(id),
    vehicles: (): Promise<Vehicle[]> => getVehicles()
  }
}

const server = new ApolloServer({
  schema: makeExecutableSchema({
    resolvers,
    typeDefs: [authTypeDefs as DocumentNode, typeDefs],
    schemaDirectives: {
      ...createAuthDirectives()
    }
  }),
  context(ctx) {
    return { ...ctx }
  }
})

const app = express()

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
