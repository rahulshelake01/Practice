
const Posts = `
type Posts {
    _id: String
    title: String
    description: String
}
`;

const successResponse = `
    type successResponse {
        msg: String
    }
`

const Query = `
    type Query {
        getPosts: [Posts]
    }
`;

const PostData = `
    input PostData {
        title:String
        description: String
    }
`;

const UpdatePostData = `
    input UpdatePostData {
        _id:String!,
        title:String
        description: String
    }
`

const Mutation = `
    type Mutation {
        addPost(data: PostData): Posts
        updatePost(data: UpdatePostData): successResponse
        deletePost(_id: String!): successResponse
    },
`;

const Schema = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

const typeDefs = [
    Posts,
    PostData,
    UpdatePostData,
    successResponse,
    Query,
    Mutation,
    Schema
]

module.exports = { typeDefs }