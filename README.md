# GraphQL Essentials

* GraphQL is Query Language which gives the Client the Possibility to query for exactly Information that is needed
* It prevents the Client to over-fetch and under-fetch an Endpoint
* GraphQL describes the Data Structure of the Data (and related Data) that contains the needed Information

## REST vs. GraphQL

| REST            | GraphQL  |
|-----------------|----------|
| POST (Create)   | Mutation |
| GET  (Read)     | Query    |
| PUT (Update)    | Mutation |
| DELETE (Delete) | Mutation |


## Resolver

* A Resolver has three Parameters to utilize: ``resovler(parent, args, context)``
* `args` contains all Parameters that are passed to the Resolver

## Setup

* Stating local GraphQl Server
* Using GraphQl Explorer to query Data: ``https://studio.apollographql.com/sandbox/explorer``
