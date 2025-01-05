const express = require('express');
const app = express();
const port = 8081;
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use( cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST","DELETE"],
  }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
// database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'foodie'
});

db.connect((err, db) => {
    if(err) throw err;
    console.log('Connected to database');
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log("Token : "+token);
    if (!token) {
      return res.status(401).json({ message: "Token is not provided" });
    } else {
      jwt.verify(token, "1234", (err, decoded) => {
        if (err) {
          return res.json({ Error: "Token is not same" });
        } else {
          req.email = decoded.email;
          next();
        }
      });
    }
  };
  // protected route
  app.get('/', verifyUser, (req, res) => {
    res.json({email:req.email,greetings:"Hello"});
  });

//register
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    const sql = 'SELECT * FROM userDetails WHERE email = ? AND password = ?';
    db.query(sql,[email,password],(err, result) => {
        if (err) throw err;
        if(result.length > 0){
            res.json({message:'User already exists'});
        }else{
            const sql = 'INSERT INTO userDetails (name, email, password) VALUES(?,?,?)';
            db.query(sql,[name,email,password],(err, result) => {
                const token = jwt.sign({email},"1234",{expiresIn:"1d"});
                res.cookie('token', token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Ensure it's true in production with HTTPS
                maxAge: 24 * 60 * 60 * 1000,
                path: "/", // Ensure the cookie is available for all paths
                domain: "localhost",
            });      
                if (err) {
                    return res.json({error:'Error inserting in database'});
                };
                res.json({page:"Register",message: 'Registration successful'});
            });
        }
    })
})

// login 
app.post('/login', (req, res) => {
    const {email,password} = req.body;
    console.log(email,password);
    
    const sql = 'SELECT * FROM userDetails WHERE email =? AND password =?';
    db.query(sql,[email,password], (err, result) => {
        if (err) throw err;
        if(result.length > 0) {
            const token = jwt.sign({email},"1234",{expiresIn:"1d"});
            res.cookie('token', token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Ensure it's true in production with HTTPS
                maxAge: 24 * 60 * 1000,
                path: "/", // Ensure the cookie is available for all paths
                domain: "localhost",
            });      
            return res.json({message: 'Login successful'});
        }
        else {
            res.send('Invalid credentials');
        }
        
    });
})

// Logout
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({message: 'Logged out'});
})

// get food items
app.get('/getfooditems', (req, res) => {
    const sql = 'SELECT * FROM fooditem';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})

app.get('/', (req, res) => {
    res.send("Hello from Server");
})

app.listen(port,(req,res)=>{
    console.log(`Server is running at http://localhost:${port}`)
})