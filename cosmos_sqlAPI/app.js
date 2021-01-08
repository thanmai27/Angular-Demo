const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const newItem = {

  name: "Yash",
  salary:98468

};

async function main() 
{
  
  // <CreateClientObjectDatabaseContainer>
  const { endpoint, key, databaseId, containerId } = config;
  console.log(config);

  const client = new CosmosClient({ endpoint, key });

  const database = client.database(databaseId);
  const container = database.container(containerId);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, databaseId, containerId);
  // </CreateClientObjectDatabaseContainer>
  
  try 
  {
    
 console.log(`Querying container: Items`);
    const querySpec = {query: "SELECT * from Items" };
    
    // read all items in the Items container
    const { resources: items } = await container.items .query(querySpec).fetchAll();

    items.forEach(item => console.log(`${item.id} - ${item.name}  ${item.salary}`));

    /*   // create new Item
    const {resources:createdItem} =  await container.items.create(newItem);

    console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.salary}\r\n`);

*/
const { id, category } = createdItem;

createdItem.isComplete = true;

const { resource: updatedItem } = await container
  .item(id, category)
  .replace(createdItem);

console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`); 
console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
  

   // const { resource: result } = await container.item('5', items.id).delete();
    //console.log(`Deleted item with id: ${id}`);

       
  } 

  catch (err)
  {
    console.log(`Error:${err.message}`);
  }
}

main();