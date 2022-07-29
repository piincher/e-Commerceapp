const env = "dev";
export const baseUrl =
  env === "prod"
    ? "http://10.0.2.2:8000/api/v1/"
    : "https://myma-express.herokuapp.com/api/v1/";
