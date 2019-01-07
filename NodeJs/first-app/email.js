var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodesourabh@gmail.com',
    pass: 'node_sourabh123!'
  }
});

var mailOptions = {
  from: 'nodesourabh@gmail.com',
  to: 'sourabh.karmarkar@synerzip.com',
  subject: 'Sending Email using Node.js',
  text: 'It is Done.....gayatri!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});