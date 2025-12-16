module.exports = {
  node: process.version,
  platform: process.platform,
  memory() {
    return `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`;
  }
};