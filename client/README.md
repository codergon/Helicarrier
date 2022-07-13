# GraphQL React App

React app for the Helicarrier engineering challenge  
Project can be explored live [here](https://helicarrier-task.netlify.app/)

### Technologies

Technologies used: `React`, `Apollo-Client`, `GraphQL`, `SASS`

### To run app locally

- download or clone the repository
- run `yarn install`
- run `yarn start`
- Open [http://localhost:3000](http://localhost:3000) to view app in your browser

### Filtering transactions

To filter transactions,

- search transactions by typing in the `SearchBar` component or
- click on any of the filter options under any of filter types to narrow down transactions
- **Note:** Filtering works for all the columns except the unique value column; **ID**

### Fetching data from the server

To fetch transactions, a `filter` variable is paased to the query. If the `filter` variable is not provided or empty, the query returns all transactions. Below is the structure of the GraphQL query to fetch data

```
query Transactions($filter: String) {
  transactions(filter: $filter) {
    id
    type
    date
    time
    asset
    status
    address
    platform
  }
}
```

Variables used to query the server
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `filter` | `string` | **Optional**. Value to filter transactions |

Each transaction object returned contains
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Unique Id of transaction |
| `type` | `string` | Type of transaction |
| `date` | `string` | Date of transaction `YYYY-MM-DD` |
| `time` | `string` | Time transaction occurred`HH:mm` |
| `asset` | `string` | Asset involved in transaction |
| `status` | `string` | Transaction status |
| `address` | `string` | Address used to transact |
| `platform` | `string` | Platform used for transaction |
