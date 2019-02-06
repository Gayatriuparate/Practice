
const express = require('express');
const jwt = require('jsonwebtoken')

const app= express();

app.get('/api',(req,res)=>{
    res.json({
        message:'welcome in the API'
    });
});

app.post('/api/login',(req,res)=>{
    //Moke User
    const user={
        id:1,
        username:'gayatri',
        email:'gayatri@gmail.com'
        
    }
    jwt.sign({user},'key',(err,token)=>{
        res.json({
            token
        })
    })
})

app.post('/api/post',verifytoken,(req,res)=>{
    jwt.verify(req.token,'key',(err,authdata)=>{
        if(err)
        {
            res.sendStatus(403)
        }
        else{
            res.json({
                message:'post Running',
                authdata
            });
        }
    })
});

function verifytoken(req,res,next){
    const bh=req.headers['authorization'];
   
    if(typeof bh!=="undefined"){
        const bearer=bh.split(' ');
        const bT=bearer[1];
        req.token=bT;
        // console.log(req.token)
        next();
    }else{
        res.sendStatus(403);
    }
}
app.listen(5000,()=>console.log('sever started at 5000'))

// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.get('/api', (req, res) => {
//   res.json({
//     message: 'Welcome to the API'
//   });
// });

// app.post('/api/posts', verifyToken, (req, res) => {  
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if(err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created...',
//         authData
//       });
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   // Mock user
//   const user = {
//     id: 1, 
//     username: 'brad',
//     email: 'brad@gmail.com'
//   }
//   jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//     res.json({
//       token
//     });
//   });
// });

// // FORMAT OF TOKEN
// // Authorization: Bearer <access_token>

// // Verify Token
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers['authorization'];
//   // Check if bearer is undefined
//   if(typeof bearerHeader !== 'undefined') {
//     // Split at the space
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }

// }

// app.listen(5000, () => console.log('Server started on port 5000'));