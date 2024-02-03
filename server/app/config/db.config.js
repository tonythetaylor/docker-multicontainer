const keys = require("../../keys");

module.exports = {
    HOST: keys.pgHost,
    USER: keys.pgUser,
    PASSWORD: keys.pgPassword,
    DB: keys.pgDatabase,
    PORT: keys.pgPort,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

// module.exports = {
//     HOST: process.env.PGHOST,
//     USER: process.env.PGUSER,
//     PASSWORD: process.env.PGPASSWORD,
//     DB: process.env.PGDATABASE,
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

// module.exports = {
//     HOST: keys.pgHost,
//     USER: keys.pgUser,
//     PASSWORD: keys.pgPassword,
//     DB: keys.pgDatabase,
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };
// module.exports = {
//   HOST: process.env.DB_HOST,
//   USER: process.env.DB_USER,
//   PASSWORD: process.env.DB_PASSWORD,
//   DB: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };