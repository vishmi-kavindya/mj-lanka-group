import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vishmikavindya722@gmail.com', // ඔයාගේ Gmail එක
    pass: 'kmrodlutdahcgohi' // මේක සාමාන්‍ය පාස්වර්ඩ් එක නෙවෙයි, Google App Password එකක් වෙන්න ඕනේ
  }
  ,
  tls: {
    rejectUnauthorized: false
  }
});