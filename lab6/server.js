const {MongoClient} = require("mongodb");

//using compass
// const uri="mongodb://localhost:27017/";

//pr7
//const uri="mongodb://abc:abc123@localhost:27017/collegeDB?authSource=collegeDB";

//using atlas
// email used - bhaskardhuri1917@gmail.com
const uri="mongodb+srv://bhaskardhuri1917_db_user:SFz7nLUwJPT9wIzI@cluster0.ptjcci9.mongodb.net/?appName=Cluster0";
const client=new MongoClient(uri)

async function con()
{
   try
   {
     result=await client.connect();
     console.log("connected");
     const db=client.db("Studentdb");
     const c=db.collection("Student");
   
    //inserting record
    await c.insertMany(
        [{
            "Name":"xyz",
            "age":23,
            "dob":"22-11-2002"
        },
        {
           "Name":"mno",
            "age":23,
            "dob":"1-03-2003"
        }]    
    );

   await c.updateOne(
      {"Name":"xyz"},
      {$set:{"age":20}}
   );

   }
   
   catch(error)
   {
    console.log(error);
   }

}

con();