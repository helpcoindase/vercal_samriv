import mysql from 'mysql2/promise';

const dbHost = process.env.DB_HOST || 'srv830.hstgr.io';
const dbUser = process.env.DB_USER || 'u305588601_samrivwork';
const dbPass = process.env.DB_PASS || '?>PG|Vam;Cg7';
const dbName = process.env.DB_NAME || 'u305588601_samrivwork';
const dbPort = Number(process.env.DB_PORT) || 3306;

// Cache the pool across serverless invocations
const globalForDb = globalThis as unknown as {
  mysqlPool?: mysql.Pool;
};

export const pool: mysql.Pool =
  globalForDb.mysqlPool ||
  mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName,
    port: dbPort,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 30000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.mysqlPool = pool;
}

export default pool;

