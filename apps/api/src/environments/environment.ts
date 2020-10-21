export const environment = {
  production: false,
  port: parseInt(process.env.PORT) || 8080,
  redis_host: process.env.REDIS_HOST || '127.0.0.1',
  redis_port: parseInt(process.env.REDIS_PORT) || 6379,
  db_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
};
