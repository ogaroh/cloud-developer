export const config = {
  dev: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    aws_region: process.env.AWS_REGION,
    aws_profile: "DEPLOYED",
    aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
    dialect: "postgres",
  },
  jwt: {
    secret: "",
  },
  prod: {
    username: "",
    password: "",
    database: "",
    host: "",
    port: 5432,
    dialect: "postgres",
    aws_region: "",
    aws_profile: "default",
    aws_media_bucket: "",
  },
};
