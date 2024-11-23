//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { composePlugins, withNx } = require('@nx/next');

import { composePlugins, withNx } from '@nx/next';
import { withPigment } from '@pigment-css/nextjs-plugin';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withPigment
];


export default composePlugins(...plugins)(nextConfig)
