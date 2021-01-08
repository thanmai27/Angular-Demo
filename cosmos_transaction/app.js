const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

//selecting databse
const database = client.database(databaseId);

//select table from the datbase
const container1 = database.container(containerId);



//REgister
const container = client.database(database).container(container1);
const sprocId = "st_players";
container.scripts.storedProcedures.create({
    id: sprocId,
    body: require(`${sprocId}`)
});

//call
const newItem = [{
    category: "Personal2",
    name: "Groceries2",
    description: "Pick up strawberries",
    isComplete: false
}];

const {body: result} = container.scripts.storedProcedure(sprocId).execute( newItem,{partitionKey: newItem[0].category});

console.log(result);