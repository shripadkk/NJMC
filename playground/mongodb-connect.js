const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err) {
    return console.log("Failed to connecto to db server");
  }

  console.log("Connection successfull");
  db.collection('Todos').insertOne({
    text: 'Wholly molly',
    after: 'Nothing'
  },(err,result) => {
    if(err) {
      return console.log("Screweeeed");
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  } );

  //Inset new doc with name age and location parameters
  db.collection('Todos').insertOne({
    name: 'Shripad',
    age: 32,
    location: 'Bangalore'
  },(err,result) => {
    if(err) {
      return console.log("Screweeeed");
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  } );
  db.close();

});
