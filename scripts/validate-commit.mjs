// const { execSync } = require('child_process');
import { execSync } from 'child_process';
// Define app paths and mapping
const apps = {
  CAPI: 'apps/CAPI',
  ReLOOQ: 'apps/ReLOOQ',
};

// Get staged files
const stagedFiles = execSync('git diff --cached --name-only', {
  encoding: 'utf-8',
})
  .trim()
  .split('\n')
  .filter(Boolean); // Filter out empty lines
console.log(stagedFiles);
// Determine affected apps
const affectedApps = new Set();
stagedFiles.forEach((file) => {
  const isApp = Object.entries(apps).some(([appName, appPath]) => {
    // console.log({ appPath, file });

    if (file.startsWith(appPath)) {
      affectedApps.add(appName);
      return true;
    }
    return false;
  });
  if (!isApp) affectedApps.add('ROOT');
});
// console.log(stagedFiles.length, affectedApps.size)
// if (stagedFiles.length > 0 && affectedApps.size === 0) {
//   affectedApps.add('ROOT');
// }
// Validation logic
if (affectedApps.size > 1) {
  console.error(
    `\x1b[31mError:\x1b[0m Your commit affects multiple apps: ${[
      ...affectedApps,
    ].join(', ')}.\n` +
      'Please ensure commits are limited to one app at a time.'
  );
  process.exit(1);
}

if (affectedApps.size === 1) {
  const app = [...affectedApps][0];
  console.log(`\x1b[32mSuccess:\x1b[0m Your commit is scoped to "${app}".`);

  // check commit pattern
} else {
  console.error(
    '\x1b[31mError:\x1b[0m No app-specific changes detected. Please ensure changes are scoped to a valid app.'
  );
  process.exit(1);
}

export { affectedApps };
// module.export={
//   affectedApps
// }
