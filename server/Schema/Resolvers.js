const _ = require("lodash");
const { txns } = require("../Mock");

const resolvers = {
  Query: {
    transactions(parent, args) {
      if (args.filter) {
        const filteredTxns = _.filter(
          txns,
          (txn) =>
            _.values(_.omit(txn, "id")).filter((txt) =>
              txt.includes(args.filter.trim())
            ).length > 0
        );
        const groupedTxns = _.chain(filteredTxns)
          .groupBy("date")
          .map((value, key) => value)
          .value();
        return groupedTxns;
      } else {
        const groupedTxns = _.chain(txns)
          .groupBy("date")
          .map((value, key) => value)
          .value();
        return groupedTxns;
      }
    },
  },
};

module.exports = { resolvers };
