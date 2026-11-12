// config.js
import 'dotenv/config';
export const ISDEV = process.env.NEXT_PUBLIC_ISDEV ?? "";
export const BASEURL = process.env.BASEURL;
export const ASSET_PREFIX = ISDEV;