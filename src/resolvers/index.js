const resolvers = {
  Query: {
    hello: () => 'world 🌍🌏🌎',
    isoString: (_, { date }) => date.toISOString()
  }
}

import Review from './Review'
import User from './User'
import Date from './Date'
import Github from './Github'

export default [resolvers, Review, User, Date, Github]
