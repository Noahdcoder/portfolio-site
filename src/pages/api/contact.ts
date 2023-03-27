import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "noahnosaaghedo@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: "noahnosaaghedo@gmail.com",
    to: "noahnosaaghedo@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err: Error | null, info: any) {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.status(200).send("Email sent successfully");
    }
  });

  console.log(req.body);
  res.status(200).json({ message: "success" });
}
