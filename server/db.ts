import { createPool } from 'mysql2';

const DevSettings = {
  host: 'localhost',
  user: 'root',
  password: 'Mmcl-fullyou0798',
  database: 'todomern',
};

const ProdSettings = {
  host: 'mysqldb',
  user: 'root',
  password: 'pass123',
  database: 'todomern',
};

const PoolSettings = process.env.IS_PROD ? ProdSettings : DevSettings;

export const pool = createPool(PoolSettings);