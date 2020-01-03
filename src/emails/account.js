const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sheikhtaha.1990@gmail.com",
    subject: "Welcome to the Task Manager App",
    text: `Welcome to the app, ${name}. Let me know how you get along with it!`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sheikhtaha.1990@gmail.com",
    subject: "Sorry to see you go",
    text: `Sorry to see you go, ${name}. We are always looking to improve our application. Please let us know how we can do better`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
