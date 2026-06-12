import { GraphQLClient } from "graphql-request";

export const datoClient = new GraphQLClient(
  "https://graphql.datocms.com/",
  {
    headers: {
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  }
);