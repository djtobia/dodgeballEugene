import * as functions from "firebase-functions/v2";
import * as mailer from "nodemailer";

interface EmailData {
  recipientEmail: string;
  name: string;
  text: string;
}

export const sendEmail = functions.https.onCall(async (data: any) => {
  // Get the email details from the request data
  const emailData: EmailData = {
    recipientEmail: data.data.recipientEmail,
    name: data.data.name,
    text: data.data.text,
  };

  // Email configuration
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const mailOptionsForDodgeballEugene = {
    from: gmailEmail,
    to: gmailEmail,
    subject: "Contact from dodgeballEugene.org",
    text: `
    From: ${emailData.recipientEmail}
    Name: ${emailData.name}
    Body: ${emailData.text}
    `,
  };

  const mailOptionsForContactee = {
    from: gmailEmail,
    to: emailData.recipientEmail,
    subject: "Thanks for contacting Dodgeball Eugene!",
    text: `
    Thank you for contacting Dodgeball Eugene!
    We'll get back to you as soon as possible.
    Your message:
    ${emailData.text}
    `,
  };


  try {
    // Send the email
    await transporter.sendMail(mailOptionsForDodgeballEugene);
    await transporter.sendMail(mailOptionsForContactee);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
});
