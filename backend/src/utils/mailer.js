// utils/mailer.js
import nodemailer from "nodemailer";

export const sendMail = async (patientName, latitude, longitude, familyEmails) => {
  try {
    // 1. Create a test account (Ethereal provides fake SMTP creds automatically)
    let testAccount = await nodemailer.createTestAccount();

    // 2. Create transporter using Ethereal
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // 3. Define email
    const mailOptions = {
      from: '"SOS Alert" <sos@example.com>',
      to: familyEmails.join(","), // fake or real, Ethereal doesn’t care
      subject: `🚨 SOS Alert from ${patientName}`,
      html: `<p>Patient <b>${patientName}</b> pressed SOS!</p>
             <p>Location: <a href="https://maps.google.com/?q=${latitude},${longitude}" target="_blank">Open in Google Maps</a></p>`,
    };

    // 4. Send email
    let info = await transporter.sendMail(mailOptions);

    console.log("✅ SOS Email sent (Ethereal)");
    console.log("📩 Preview URL:", nodemailer.getTestMessageUrl(info));

  } catch (error) {
    console.error("❌ Error sending SOS email:", error);
  }
};
