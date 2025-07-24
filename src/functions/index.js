const { setGlobalOptions } = require("firebase-functions/v2");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

setGlobalOptions({ maxInstances: 10 });

// 🔐 Use Gmail SMTP (recommended: use App Password, not real password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "odiaupahar@gmail.com",       // ✅ your email
    pass: "CP@$3-SOB0YNfcp",          // ✅ Gmail App Password
  },
});

// 🚀 Trigger: when new document is added to "waitlist_emails"
exports.notifyAdminOnNewEmail = onDocumentCreated("waitlist_emails/{docId}", async (event) => {
  const data = event.data.data();

  if (!data || !data.email) {
    logger.warn("No email found in document");
    return;
  }

  const email = data.email;
  const mailOptions = {
    from: '"OdiaUpahar" <odiaupahar@gmail.com>',
    to: "bikibikash666@example.com", // ✅ where you want the alert
    subject: "📬 New Email Subscriber",
    html: `<p><strong>${email}</strong> has subscribed to the waitlist.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info("📧 Email sent to admin");
  } catch (error) {
    logger.error("❌ Failed to send email", error);
  }
});


/* Note: firebase deploy --only functions - */


// Error: Your project odiaupahar-1dbc6 must be on the Blaze (pay-as-you-go) plan to complete this command.
//  Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL: