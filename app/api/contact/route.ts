import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactTemplate } from "@/app/components/mail/contactTemplate";
import { contactTemplateConfirm } from "@/app/components/mail/contactTemplateConfirm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      message,
    } = body;

    // Vérification
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          error: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    await transporter.sendMail({
      from: `"HomeYa" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,

      subject: `Nouveau message – HomeYa`,

      html: contactTemplate({
        name: fullName,
        email,
        subject: "Demande de contact",
        message: `${message}
        `,
      }),
    });

    await transporter.sendMail({
      from: `"HomeYa" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Confirmation de votre message – HomeYa",

      html: contactTemplateConfirm({
        name: fullName,
        subject: "Demande de contact",
        message,
      }),
    });

    return NextResponse.json(
      {
        message: "Votre message a été envoyé avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur Nodemailer :", error);

    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de l'envoi du message.",
      },
      { status: 500 }
    );
  }
}