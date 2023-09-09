module.exports = {
  api: { port: process.env.API_PORT || 3000 },
  jwt: { secret: process.env.JWT_SECRET || "notasecret!" },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "root",
    database: process.env.MYSQL_DB || "redSocial",
    port: process.env.MYSQL_PORT || "3307",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
};
