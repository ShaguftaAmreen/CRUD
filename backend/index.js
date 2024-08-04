import express from 'express';
import mysql from "mysql";
import cors from 'cors'

const app=express()
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"test"

})
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Adjust according to your frontend's address
}));

//app.use(cors());
app.get("/",(req,res)=>{
    res.json("Hello this is the backend again!");
})

 app.get("/books",(req,res)=>{
    const q ="SELECT * FROM books"
    db.query(q,(error,data)=>{
        if(error) return res.json(error);

        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q="INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES(?)"
    const values=[
   req.body.title,
   req.body.desc,
   req.body.price,
   req.body.cover,
]
    db.query(q,[values],(error,data)=>{
        if(error) return res.json(error);

        return res.json(data)
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookID=req.params.id
    const q = "DELETE FROM books WHERE id=?"
    db.query(q,[bookID],(error,data)=>{
        if(error) return res.json(error);

        return res.json("Books have been deleted successfully.")
    })
})

app.put("/books/:id",(req,res)=>{
    const bookID=req.params.id
    const q = "UPDATE books SET `title`=?,`desc`=?,`price`=?,`cover`=? WHERE id=?"
    const values=[
        req.body.title,
   req.body.desc,
   req.body.price,
   req.body.cover,
    ]
    
    db.query(q,[...values,bookID],(error,data)=>{
        if(error) return res.json(error);

        return res.json("Books have been updated successfully.")
    })
})


app.listen(8800,()=>{
    console.log("Connected to backend easily!");
})