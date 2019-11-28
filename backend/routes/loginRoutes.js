var express    = require("express");
var mysql      = require('mysql');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');
var sgTransport = require('nodemailer-sendgrid-transport');
const Nexmo = require('nexmo');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '118169',
  database : 'entry'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n");
} else {
    console.log("Error connecting database ... \n");
}
});


let name, phone, email ,arrival, departure, host_name, host_email, host_phone;


exports.login = function(req,res){
    
    name = req.body.name;
    phone = req.body.phone;
    email = req.body.email;
    arrival = new Date();
    departure = null;

    var user= {
      "name" : name,
      "phone" : phone,
      "email" : email,
      "arrival" : arrival,
       "departure" : departure
    }

    connection.query('INSERT INTO user SET ?',user, function (error, results, fields) {
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        console.log('The solution is: ', results);
        res.send({
          "code":200,
          "success":"visitor checked in sucessfully"
            });
      }
      });
     // console.log(email); 
    
  }
  
      exports.register = async function(req,res){
    //console.log("req",req.body.name);
         host_name = req.body.fullName;
         host_email =req.body.Hostemail;
         host_phone = req.body.Hostphone;
        // console.log(email);     
          var host= {
            "name" : host_name,
            "phone" : host_phone,
            "email" : host_email
          }       
         const value = await connection.query('INSERT INTO host SET ?',host, function (error, results, fields) {
            if (error) {
              console.log("error ocurred",error);
              res.send({
                "code":400,
                "failed":"error ocurred"
              })

            }else{
        
            //  console.log('The solution is: ', results);
              res.send({
                "code":200,
                "success":"host registered sucessfully"
                  });    
            }
            });
            
            //host should get a mail containing the visitor details once the visitor has checked In and host details have been entered
            var options = {
              auth: {
                api_user: 'yellowwoods12',
                api_key: 'tripti12345678'
              }
            }
            
            var client = nodemailer.createTransport(sgTransport(options));
            
            var mail = {
              from: 'tripti12shukla1280@gmail.com',
              to: host_email,
              subject: 'Visitor Details',
              text: 'Name :'+name+'Email :'+email+'\nPhone :'+phone+'\nArrival :'+arrival,
              html: '<b>Name :</b>'+name+'<br><b>Email :</b>'+email+'<br><b>Phone :</b>'+phone+'<br><b>Check In Time :</b>'+arrival
             
            };
          
            client.sendMail(mail, function(err, info){
                if (err ){
                  console.log(err);
                }
                else {
                  console.log('Message sent: ' + info);
                }
            });

            //mobile sms functionality for the host 
            const nexmo = new Nexmo({
                apiKey: 'cdfca95c',
                apiSecret: 'WixWzOENXbMmME9A',
          });
          const from = '917355780958';
          const to = '91'+host_phone;
          const text = 'Name:'+name+'\nEmail:'+email+'\nPhone:'+phone+'\nArrival Time:'+arrival+'\n';
          nexmo.message.sendSms(from, to, text);
          
          }
         

          exports.checkout = async function(req,res){

            const checkout = req.body.checkout;
           // console.log(email); 

            //visitor should get an email stating his visit details 

               var options = {
                 auth: {
                   api_user: 'yellowwoods12',
                   api_key: 'tripti12345678'
                 }
               }
               
               var client = nodemailer.createTransport(sgTransport(options));
               
               var mail = {
                 from: 'tripti12shukla1280@gmail.com',
                 to: email,
                 subject: 'Visiting Details at Innovaccer',
                 text: 'Name :'+name+'\nPhone :'+phone+'\nCheck In Time:'+arrival+'\nCheck Out Time:'+checkout+'\nHost Name:'+host_name+'\nAddress Visited: Innovaccer Sector 62, Noida',
                 html: '<b>Name :</b>'+name+'<br><b>Phone :</b>'+phone+'<br><b>Check In Time :</b>'+arrival+'<br><b>Check Out Time:</b>'+checkout+'<br><b>Host Name</b>'+host_name+'<br><b>Address Visited: Innovaccer Sector 62, Noida</b>'
                
               };
             
               client.sendMail(mail, function(err, info){
                   if (err ){
                     console.log(err);
                   }
                   else {
                     console.log('Message sent: ' + info);
                   }
               });
               res.send({"success": "Visitor checked out successfully"});
            }
                 
        

