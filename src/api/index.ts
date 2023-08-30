import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64e24d844ece705056da");

// Subscribe to files channel
client.subscribe("files", (response) => {
  if (response.events.includes("buckets.*.files.*.create")) {
    // Log when a new file is uploaded
    console.log(response.payload);
  }
});

const account = new Account(client);

export { client, account, ID };
