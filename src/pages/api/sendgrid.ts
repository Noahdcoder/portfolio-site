import { NextApiHandler } from "next";
import { sendEmail } from "@/utils/sendgrid";

const handler: NextApiHandler = async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "noahaghedo1@gmail.com",
    from: "noahnosaaghedo@gmail.com",
    subject: "Message from " + name,
    html: `${req.body.message} \n From ${req.body.email}`,
  };

  try {
    await sendEmail(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export default handler;