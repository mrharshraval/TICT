"use server"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "theinnercompasstarot@gmail.com",
    pass: "hljr upez rzlt filf", // TICT App Password
  },
})

export async function sendBookingEmail(data: {
  name: string
  email: string
  type: string
  price: string
  date: string
  intent: string
}) {
  try {
    const adminHtml = `
      <div style="font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #09090b; padding: 40px; border-radius: 10px; border: 1px solid #e4e4e7;">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="margin-bottom: 16px;">
            <div style="display: inline-block; padding: 8px; border-radius: 50%; width: 40px; height: 40px; text-align: center; vertical-align: middle;">
              <img src="https://theinnercompasstarot.in/media/tict-logo.png" alt="TICT Logo" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; margin: 0 auto;" />
            </div>
          </div>
          <h1 style="color: #09090b; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">The Inner Compass Tarot</h1>
          <p style="color: #71717a; font-size: 13px; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.05em;">New Booking Request</p>
        </div>
        <div style="background-color: #fafafa; padding: 28px; border-radius: 8px; border: 1px solid #e4e4e7;">
          <h2 style="color: #09090b; font-size: 15px; font-weight: 600; margin-top: 0; border-bottom: 1px solid #e4e4e7; padding-bottom: 12px; margin-bottom: 16px;">Seeker Details</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #71717a; width: 100px;">Name</td><td style="padding: 8px 0; color: #09090b; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0; color: #09090b; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Session</td><td style="padding: 8px 0; color: #09090b; font-weight: 500;">${data.type}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Price</td><td style="padding: 8px 0; color: #09090b; font-weight: 500;">${data.price}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Date</td><td style="padding: 8px 0; color: #09090b; font-weight: 500;">${data.date}</td></tr>
          </table>
          <h2 style="color: #09090b; font-size: 15px; font-weight: 600; margin-top: 28px; border-bottom: 1px solid #e4e4e7; padding-bottom: 12px; margin-bottom: 16px;">Intention / Question</h2>
          <p style="color: #3f3f46; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.intent || "No intent provided."}</p>
        </div>
        <div style="text-align: center; margin-top: 32px; font-size: 12px; color: #71717a; line-height: 1.5;">
          <p style="margin: 0; margin-bottom: 8px;">
            <a href="https://theinnercompasstarot.in" style="color: #3f3f46; text-decoration: none;">Website</a> &bull; 
            <a href="https://www.youtube.com/@theinnercompasstarot" style="color: #3f3f46; text-decoration: none;">YouTube</a>
          </p>
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} The Inner Compass Tarot. All rights reserved.</p>
          <p style="margin: 0; margin-top: 4px;">Readings available worldwide via video.</p>
        </div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #09090b; padding: 40px; border-radius: 10px; border: 1px solid #e4e4e7;">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="margin-bottom: 16px;">
            <div style="display: inline-block; padding: 8px; border-radius: 50%; width: 40px; height: 40px; text-align: center; vertical-align: middle;">
              <img src="https://theinnercompasstarot.in/media/tict-logo.png" alt="TICT Logo" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; margin: 0 auto;" />
            </div>
          </div>
          <h1 style="color: #09090b; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">The Inner Compass Tarot</h1>
          <p style="color: #71717a; font-size: 13px; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Booking Request Received</p>
        </div>
        <div style="background-color: #fafafa; padding: 28px; border-radius: 8px; border: 1px solid #e4e4e7;">
          <p style="font-size: 15px; line-height: 1.6; color: #09090b; margin-top: 0;">Hi ${data.name},</p>
          <p style="font-size: 15px; line-height: 1.6; color: #3f3f46;">Thank you for reaching out to The Inner Compass Tarot. Your request for a <strong>${data.type}</strong> session (${data.price}) on <strong>${data.date}</strong> has been successfully received.</p>
          <p style="font-size: 15px; line-height: 1.6; color: #3f3f46;">We will review your details and be in touch shortly to confirm your booking and exact time.</p>
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e4e4e7;">
            <p style="font-size: 14px; color: #71717a; font-style: italic; margin: 0; text-align: center; line-height: 1.5;">"Nothing here is random. The cards you drew hold your energy. Trust the pull—let's uncover why they chose you."</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 32px; font-size: 12px; color: #71717a; line-height: 1.5;">
          <p style="margin: 0; margin-bottom: 8px;">
            <a href="https://theinnercompasstarot.in" style="color: #3f3f46; text-decoration: none;">Website</a> &bull; 
            <a href="https://www.youtube.com/@theinnercompasstarot" style="color: #3f3f46; text-decoration: none;">YouTube</a>
          </p>
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} The Inner Compass Tarot. All rights reserved.</p>
          <p style="margin: 0; margin-top: 4px;">Readings available worldwide via video.</p>
        </div>
      </div>
    `;

    const adminMailOptions = {
      from: `"TICT Booking System" <theinnercompasstarot@gmail.com>`,
      to: "theinnercompasstarot@gmail.com",
      subject: `New Booking Request from ${data.name}`,
      html: adminHtml,
    }

    const userMailOptions = {
      from: `"The Inner Compass Tarot" <theinnercompasstarot@gmail.com>`,
      to: data.email,
      subject: `Your Booking Request: ${data.type}`,
      html: userHtml,
    }

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
