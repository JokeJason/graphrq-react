module.exports = {
  '*.json': ['yarn format:check'],
  '*.{ts,tsx,js,jsx}': [
    'yarn lint',
    "bash -c 'yarn types:check'",
    'yarn format:check',
  ],
};
