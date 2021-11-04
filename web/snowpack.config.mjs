import 'dotenv/config';

export default {
  alias: {
    '@': './src'
  },
  packageOptions: {
    knownEntrypoints: [
      'vue/server-renderer',
      'vue'
    ]
  },
  env: process.env
};