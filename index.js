const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query} = require("./resolver/Query");
const {Mutation} = require("./resolver/Mutation");
const {Category} = require("./resolver/Category");
const {Product} = require("./resolver/Product");
const {data} = require("./data");

const server = new ApolloServer({
    /* Schema of Data */
    typeDefs,
    /* Functions that return the Data  that is defined in Schema */
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
    },
    context: {
        data
    }
});

server.listen().then(({url}) => {
    console.log(`Server is running at ${url}`);
});
