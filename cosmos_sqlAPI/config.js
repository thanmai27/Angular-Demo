const config = {
  endpoint: "https://gmdb.documents.azure.com:443/",
  key: "aZVQlFsegnzb7VVgU7Zz9yyR2UwCwE4ddw70gd9skRhhotU7nu42CmAhxwi2tWtCZUfdYt4s7RzcpwHJImPD1w==",
  databaseId: "APILOG",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/id"] }
};

module.exports = config;