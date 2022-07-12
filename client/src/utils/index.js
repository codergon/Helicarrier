const shortenAddr = (address) =>
  address.substring(0, 8) +
  "..." +
  address.substring(address.length - 6, address.length);

const filterList = ["asset", "type", "status", "platform"];
const filterOptions = {
  asset: ["usdt", "eth", "btc", "sol", "bnb"],
  status: ["sent", "received", "pending", "failed"],
  platform: ["mobile", "desktop", "website", "terminal"],
  type: ["transfer", "withdrawal", "deposit", "conversion"],
};

export { shortenAddr, filterList, filterOptions };
