export {}; //"Cannot redeclare block-scoped variable"エラー回避
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mmcl-fullyou0798',
  database: 'todomern',
});

module.exports = pool;