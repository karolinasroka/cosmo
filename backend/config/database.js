module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default:
      env("DATABASE_TYPE") === "mysql"
        ? {
            connector: "bookshelf",
            settings: {
              client: "mysql",
              host: env("DATABASE_HOST", "localhost"),
              port: env.int("DATABASE_PORT", 3306),
              database: env("DATABASE_NAME", "strapi"),
              username: env("DATABASE_USERNAME", "strapi"),
              password: env("DATABASE_PASSWORD", "strapi"),
            },
            options: {},
          }
        : {
            connector: "bookshelf",
            settings: {
              client: "sqlite",
              filename: env("DATABASE_FILENAME", ".tmp/data.db"),
            },
            options: {
              useNullAsDefault: true,
            },
          },
  },
});
