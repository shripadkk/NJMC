const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err) {
    return console.log("Failed to connecto to db server");
  }

  console.log("Connected to db Server");

  db.collection('Users').find({"name": "Shripad KK"}).toArray().then((docs) => {
    console.log("Records");
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log("I cannot fetch record");
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count: ${count}`);
  // },(err) => {
  //   console.log("I cannot fetch record");
  // });

  db.close();

});
