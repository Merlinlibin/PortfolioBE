const mailRouter = require("express").Router();
const nodemailer = require("nodemailer");

mailRouter.post("/", async (req, res) => {
  // get the details from the request body
  const { name, email, message } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "merlinlibinmerlin@gmail.com",
        pass: "gtpvydtmshtlkjdi",
      },
    });

    var mailToClient = {
      from: "merlinlibinmerlin@gmail.com",
      to: email,
      subject: "Email regarding your message to Merlin",
      text: `
            Hi ${name},

            I hope this email finds you well. Thankyou for your message.
            If you have any questions or need further assistance, feel free to reach out.
            
            Thanks & regard,
            Merlin Libin.`,
    };

    transporter.sendMail(mailToClient, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    var mailToMe = {
      from: "merlinlibinmerlin@gmail.com",
      to: "merlinlibinmerlin@gmail.com",
      subject: "Message From Portfolio",
      text: `
            Hi Merlin,

            ${message}
            
            Thanks & regard,
            ${name}`,
    };

    transporter.sendMail(mailToMe, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
   
    res.status(200).json({
      message: "Message sent successfully",
      success: true,
    });
  } catch (error) {
      console.log(error);
       res.status(500).json({
         message: "error sending message",
         success: false,
       });
  }
});

module.exports = mailRouter;
