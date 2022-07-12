const _ = require("lodash");
const dayjs = require("dayjs");

const assets = ["usdt", "eth", "btc", "sol", "bnb"];
const status = ["sent", "received", "pending", "failed"];
const platforms = ["mobile", "desktop", "website", "terminal"];
const type = ["transfer", "withdrawal", "deposit", "conversion"];

const addresses = [
  "0x1e29b383badd55261a5ce210f9d5ce728f0d337f",
  "0xcd261a6dcb2046f2db1052a1bd1d78606f75a0e4",
  "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
  "0xea674fdde714fd979de3edf0f56aa9716b898ec8",
  "0x0eb8adbbc6078a1bcd69cc27546a8ef9d1b51564",
  "0xe931efcbc5cb224c762bb9e4b2dd90a8645458f2",
  "0x11111112542d85b3ef69ae05771c2dccff4faa26",
  "0x3a341259100fee4a5f610655104eb28295e62e0f",
  "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
];

const dates = [
  dayjs().subtract(2, "day").format("YYYY-MM-DD/HH:mm"),
  dayjs().subtract(4, "day").subtract(6, "hour").format("YYYY-MM-DD/HH:mm"),
  dayjs().subtract(1, "day").add(7, "hour").format("YYYY-MM-DD/HH:mm"),
  dayjs().subtract(9, "day").add(4, "hour").format("YYYY-MM-DD/HH:mm"),
  dayjs().subtract(5, "day").subtract(11, "hour").format("YYYY-MM-DD/HH:mm"),
];

const GenerateMockData = (num = 30) => {
  const mockData = [];
  for (let i = 0; i < num; i++) {
    const dateTime = _.sample(dates);
    mockData.push({
      id: `${i + 1}`,
      status: _.sample(status),
      date: dateTime.split("/")[0],
      time: dateTime.split("/")[1],
      asset: _.sample(assets),
      type: _.sample(type),
      address: _.sample(addresses),
      platform: _.sample(platforms),
    });
  }

  import("clipboardy").then((clipboardy) =>
    clipboardy.default.writeSync(JSON.stringify(mockData))
  );

  return mockData;
};

const arg = parseInt(process.argv.slice(2)[0]);
const count = !isNaN(arg) ? arg : 30;

console.log(GenerateMockData(count));
