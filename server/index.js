// // const express = require('express')
// // const cors = require('cors')
// // const sgMail = require('@sendgrid/mail');


// // const app = express();

// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // app.use(cors());


// // app.get('/', (_req, res) => {
// //     res.send("welsomdmsamdsadushaidhsaiudhsaiuhdsau")
// // })
// // app.get('/send-email', (req, _res) => {
// //     const { recipient, sender, topic, text } = req.query;
// //     const msg = {

// //         to: 'snikersdro@gmail.com',
// //         from: 'test@example.com',
// //         subject: 'Sending with Twilio SendGrid is Fun',
// //         text: 'and easy to do anywhere, even with Node.js',
// //         html: '<strong>and easy to do anywhere, even with Node.js</strong>',

// //     }
// //     sgMail.send(msg)
// // })

// // app.listen(4000, () => console.log('runinf'))

// const express = require('express')
// const bodyParser = require('body-parser')
// const nodemailer = require('nodemailer')
// const exphbs = require('express-handlebars')
// const path = require('path')
// const app = express()

// app.engine('handlebars', exphbs())
// app.set('view engine', 'handlebars')

// app.use('/', express.statuc(path.join(__dirname, 'public')))

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.render('contact')
// })

// app.listen(3000, () => console.log('sssssssss'))


// const bodyParser = require("body-parser")
// const express = require("express")
// const nodemailer = require("nodemailer")
// const app = express()
// app.use(bodyParser.urlencoded())
// const contactAddress = "snikersdro@gmail.com"
// const mailer = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: 'snikersdro@gmail.com',
//     pass: 'snikersdro@gmail.com'
//   },
// })
// app.post("/contact", function (req, res) {
//   mailer.sendMail(
//     {
//       from: req.body.from,
//       to: [contactAddress],
//       subject: req.body.subject || "[No subject]",
//       html: req.body.message || "[No message]",
//     },
//     function (err, info) {
//       if (err) return res.status(500).send(err)
//       res.json({ success: true })
//     }
//   )
// })
// app.listen(3000)
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'snikersdro@gmail.com ',
        pass: 'NieSzpiegowac00'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Your Account Name <snikersdro@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
