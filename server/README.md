# GraphQL Express Server

This is the GraphQL server that was used for to mock data for the task.  
Server can be explored live [here](https://helicarrier-task.herokuapp.com/graphql)

### Technologies

Technologies used to build the server: `Express`, `Apollo-Server`, `GraphQL`

### To run server locally

- download or clone the repository
- run `yarn install`
- run `yarn start`
- Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view playground

### Structure of query response

Each query returns a list of grouped transactions which are grouped by date.

```js
[
  [txn, txn, ...],  // transactions with same date
  [txn, txn, ...],
  ...
]
```

### To generate more mock data

Run the command below providing the number of transactions the mock data should contain. **Default** is 30  
An array of the generated transactions would have been copied to the clipboard that should replace the value of the `txns` variable in `Mock.js` file.

```bash
yarn run mock [numOfMockData]

Eg. yarn run mock 40
```
