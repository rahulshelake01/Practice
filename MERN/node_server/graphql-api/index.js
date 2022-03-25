const { makeExecutableSchema } = require('graphql-tools')
const graphqlHTTP = require('express-graphql')

const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const middleware = graphqlHTTP({
    schema,
    graphiql:true
})

module.exports = { middleware };