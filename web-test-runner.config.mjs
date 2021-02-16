import { chromeLauncher } from '@web/test-runner';

export default {
    files: 'test/**/*.test.js',
    nodeResolve: true,
    browsers: [chromeLauncher({ launchOptions: { args: ['--no-sandbox'] } })]
  };