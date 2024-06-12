const fs = require("fs");

// READ A CONTETN DEMO.TEXT FILE

fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// CREATE A FILE DINAMICALLY

fs.writeFile("example.html","utf8",(err,date)=>{
  if(err){
      console.log("error")
  }    console.log("you successfully created a file")
 })

// CREATEING A CONTENT  AN EXAMPLE.HTML FILE 

const contentSample = "my name is prakash, i am Creating Dynamic content";

 fs.writeFile("example.html", contentSample, (err) => {
    if (err) {
       console.log(err);
   } else {
      console.log("File content is success");
    }
 });


// REWRITE A FILE NAME


fs.rename("example.html", "newChangedFile.js", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("modified success");
    }
});

// DELETED A FILE DYNAMICALLY

fs.unlink("newChangedFile.js",(err) => {
    if(err){
        console.log(err)
    }else {
        console.log("file Deleted success")
    }
});

