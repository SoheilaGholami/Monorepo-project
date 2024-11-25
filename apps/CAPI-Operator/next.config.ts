//@ts-check

// const { composePlugins, withNx } = require('@nx/next');

import { composePlugins, withNx } from "@nx/next";
import { withPigment } from "@pigment-css/nextjs-plugin";
import type { NextConfig } from "next";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig: NextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withPigment,
];

export default composePlugins(...plugins)(nextConfig);
