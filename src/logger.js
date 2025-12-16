const colors = {
  info: '\x1b[36m',
  success: '\x1b[32m',
  warn: '\x1b[33m',
  error: '\x1b[31m',
  reset: '\x1b[0m'
};

function log(type, message) {
  const time = new Date().toLocaleTimeString();
  console.log(`${colors[type]}[${type.toUpperCase()} ${time}] ${message}${colors.reset}`);
}

module.exports = {
  info: msg => log('info', msg),
  success: msg => log('success', msg),
  warn: msg => log('warn', msg),
  error: msg => log('error', msg)
};