'use strict';
module.exports.handler = (event, context, callback) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(event.body)
  const to = process.env.TO;
  const from = process.env.FROM;
  const subject = "A new post was published: " + body.data.title;
  const html_body = body.data.content;
  const text_body = body.data.title;
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text_body,
    html: html_body
  };
  sgMail.send(msg).then(data => {
    // Celebrate
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify({
        data: data
      })
    };
    callback(null, response);
  })
  .catch(error => {
    // Log friendly error
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify(error)
    };
    callback(null, response);
  });
};
