const timers = {};

module.exports = {
  start(label) {
    timers[label] = Date.now();
  },
  end(label) {
    if (!timers[label]) return null;
    const time = Date.now() - timers[label];
    delete timers[label];
    return `${time}ms`;
  }
};