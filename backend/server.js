const express = require('express');
const app = express();
const port = 8081;


// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


// login 
app.post('/login', (req, res) => {
    res.send("hello from login");
    // const {email, password} = req.body;
    // const sql = 'SELECT * FROM userDetails WHERE email =? AND password =?';
    // db.query(sql,[email,password], (err, result) => {
    //     if (err) throw err;
    //     if(result.length > 0) {
    //         const token = jwt.sign({email},"1234",{expiresIn:"1d"});
    //         res.cookie('token', token,{
    //             httpOnly: true,
    //             secure: process.env.NODE_ENV === "production", // Ensure it's true in production with HTTPS
    //             maxAge: 24 * 60 * 1000,
    //             path: "/", // Ensure the cookie is available for all paths
    //             domain: "localhost",
    //         });      
    //         return res.json({message: 'Login successful'});
    //     }
    //     else {
    //         res.send('Invalid credentials');
    //     }
        
    // });
})

app.get('/', (req, res) => {
    res.send("Hello from Server");
})

app.listen(port,(req,res)=>{
    console.log(`Server is running at http://localhost:${port}`)
})