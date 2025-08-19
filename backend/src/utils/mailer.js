// utils/mailer.js
import * as nodemailer from "nodemailer";


export const sendMail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",   // ya SMTP details
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Emergency Alert" <${process.env.EMAIL_USER}>`,
      to,   // string ya array.join(",")
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Mail send error:", error.message);
    return false;
  }
};
