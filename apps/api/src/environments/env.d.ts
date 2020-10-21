declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    JWT_SECRET: string;
  }
}
