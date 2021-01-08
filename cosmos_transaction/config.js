const config = {
    endpoint: "https://thanmaisql.documents.azure.com:443/",
    key: "RVkLcGmfW2wzh2w5gmxnxYSL5G6zxI1PcBxi2DAfu3SkmpJcINCRDL3ZlICxYECCmUTLeWXSzK5EnUed9BWnIg==",
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
  
  module.exports = config;