type contactTemplateConfirmProps = {
  name: string;
  subject: string;
  message: string;
};

const currentYear = new Date().getFullYear();

export function contactTemplateConfirm({
  name,
  subject,
  message,
}: contactTemplateConfirmProps): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirmation de votre message – HomeYa</title>

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

    .success-box {
      margin-bottom: 25px;
      padding: 18px 20px;
      background-color: #f0fdf4;
      border-left: 4px solid #22c55e;
      border-radius: 6px;
      color: #166534;
    }

    .success-box strong {
      display: block;
      margin-bottom: 4px;
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

    .closing {
      margin-top: 28px;
      color: #4b5563;
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
        <span>HomeYa</span></span>
      </div>

      <h1>Message bien reçu</h1>

      <p>
        Merci d'avoir contacté HomeYa.
      </p>

    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td class="email-body">

      <p class="intro">
        Bonjour <strong>${name}</strong>,<br /><br />

        Nous vous confirmons que votre message a bien été reçu
        par l'équipe HomeYa.
      </p>

      <div class="success-box">
        <strong>✓ Votre message a bien été envoyé</strong>
        Notre équipe prendra connaissance de votre demande et
        vous répondra dans les meilleurs délais.
      </div>

      <div class="info">
        <strong>Sujet :</strong>
        <span>${subject}</span>
      </div>

      <div class="message-box">

        <p class="message-title">
          Votre message
        </p>

        <p class="message-content">
          ${message}
        </p>

      </div>

      <p class="closing">
        Merci pour votre confiance et pour l'intérêt que vous portez
        à <strong>HomeYa</strong>.<br /><br />

        À très bientôt,<br />
        <strong>L'équipe HomeYa</strong>
      </p>

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
