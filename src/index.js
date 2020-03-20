import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema/schema.graphql'
import resolvers from './resolvers'
import dataSources, { Github } from './data-sources'
import context from './context'
import formatError from './formatError'
import { connectToDB } from './db'
import schemaDirectives from './directives'

const server = new ApolloServer({
  typeDefs,
  schemaDirectives,
  resolvers,
  dataSources,
  context,
  formatError
})

const start = () => {
  connectToDB()
  Github.startPolling()
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`GraphQL server running at ${url}`))
}

if (process.env.NODE_ENV !== 'test') {
  start()
}

export { server, typeDefs, resolvers, context, formatError }
