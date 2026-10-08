const {MongoClient} = require("mongodb")

const url="mongodb+srv://bhaskardhuri1917_db_user:tOfU8mxM2gpNZD29@cluster0.ptjcci9.mongodb.net/?appName=Cluster0";

const client=new MongoClient(url)

async function con()
{
    try{

        await client.connect();
        console.log("conncted to mongodb");

        const db =client.db("students"); 
        const c=db.collection("student");
        
        // await c.insertMany(
        //    [ {
        //         name:"abc",
        //         age:23,
        //         dob:"22-11-2002"
        //     },
        //     {
        //         name:"abc",
        //         age:23,
        //         dob:"22-11-2002",
        //         marks:90
        //     }]
         //)
      await c.updateOne(
        {name:"xyz"},
        {$set:{age:20}}
      )

    //   console.log(await c.findOne({name:"abc"}))
        

      const result=await c.find({name:"abc"}).toArray()
      console.log(result)
    
      await client.close();

      
    }
    catch(error)
    {
        console.log("Connected Failed")
    }
}

con();