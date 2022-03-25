const router = require("express").Router()
const graphQL = require("../graphql-api")

router.use("/graphql", graphQL.middleware)

module.exports = router