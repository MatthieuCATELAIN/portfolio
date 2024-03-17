import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "uzguulz6",
  dataset: "production",
  apiVersion: "2024-03-13",
  useCdn: true,
};

const client = createClient(config);

export default client;