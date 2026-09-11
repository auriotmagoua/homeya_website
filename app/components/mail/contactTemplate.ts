type ContactTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const currentYear = new Date().getFullYear();

export function contactTemplate({
  name,
  email,
  subject,
  message,
}: ContactTemplateProps): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message – HomeYa</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f5f7fa;
      font-family: Arial, Helvetica, sans-serif;
    }

    .email-container {
      width: 600px;
      max-width: 95%;
      margin: 35px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
    }

    /* HEADER */
    .email-header {
      background-color: #123B70;
      padding: 32px 30px;
      text-align: center;
      color: #ffffff;
    }

    .logo {
      margin-bottom: 18px;
    }

    .logo span {
      display: inline-block;
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .logo .orange {
      color: #F77500;
    }

    .email-header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }

    .email-header p {
      margin: 8px 0 0;
      font-size: 14px;
      line-height: 1.5;
      color: #dbe7f5;
    }

    /* BODY */
    .email-body {
      padding: 32px;
      color: #374151;
      font-size: 15px;
      line-height: 1.6;
    }

    .intro {
      margin: 0 0 25px;
      color: #4b5563;
    }

    .info {
      margin-bottom: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid #f0f0f0;
    }

    .info strong {
      display: inline-block;
      min-width: 75px;
      color: #123B70;
    }

    .info span {
      color: #374151;
    }

    /* MESSAGE */
    .message-box {
      margin-top: 25px;
      padding: 20px;
      background-color: #f8fafc;
      border-left: 4px solid #F77500;
      border-radius: 6px;
    }

    .message-title {
      margin: 0 0 10px;
      color: #123B70;
      font-size: 15px;
      font-weight: 700;
    }

    .message-content {
      margin: 0;
      color: #4b5563;
      white-space: pre-line;
    }

    /* FOOTER */
    .footer {
      padding: 22px 20px;
      text-align: center;
      background-color: #f8fafc;
      border-top: 1px solid #edf0f4;
      color: #6b7280;
      font-size: 12px;
      line-height: 1.7;
    }

    .footer strong {
      color: #123B70;
    }

    .footer .orange {
      color: #F77500;
      font-weight: 600;
    }

    @media (max-width: 600px) {
      .email-container {
        width: 95%;
        margin: 20px auto;
      }

      .email-header {
        padding: 25px 20px;
      }

      .email-body {
        padding: 25px 20px;
      }

      .logo span {
        font-size: 24px;
      }

      .email-header h1 {
        font-size: 21px;
      }
    }
  </style>
</head>

<body>

<table class="email-container" cellpadding="0" cellspacing="0" border="0">

  <!-- HEADER -->
  <tr>
    <td class="email-header">

      <div class="logo">
        <span>HomeYa</span>
      </div>

      <h1>Nouveau message</h1>

      <p>
        Un nouveau message a été envoyé depuis la plateforme HomeYa.
      </p>

    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td class="email-body">

      <p class="intro">
        Bonjour,<br />
        Vous avez reçu un nouveau message via le formulaire de contact
        de la plateforme <strong>HomeYa</strong>.
      </p>

      <div class="info">
        <strong>Nom :</strong>
        <span>${name}</span>
      </div>

      <div class="info">
        <strong>Email :</strong>
        <span>${email}</span>
      </div>

      <div class="info">
        <strong>Sujet :</strong>
        <span>${subject}</span>
      </div>

      <div class="message-box">

        <p class="message-title">
          Message
        </p>

        <p class="message-content">
          ${message}
        </p>

      </div>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td class="footer">

      <strong>HomeYa</strong> — Ton chez-toi, simplement.<br />

      <span class="orange">
        Trouvez, louez ou achetez votre prochain bien.
      </span>

      <br /><br />

      © ${currentYear} HomeYa. Tous droits réservés.

    </td>
  </tr>

</table>

</body>
</html>`;
}