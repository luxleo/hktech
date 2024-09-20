/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';
const nextConfig = {};

// LEARN: mjs 에서는 require 표현식이 불가능하다.
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
//
// module.exports = withBundleAnalyzer(nextConfig);

const withBundleAnalyzer = bundleAnalyzer({enabled: process.env.ANALYZE === 'true'});

export default withBundleAnalyzer(nextConfig);
