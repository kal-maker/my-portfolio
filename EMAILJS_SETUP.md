# EmailJS Setup Instructions

Follow these steps to set up email functionality for your contact form:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Set the **To Email** field to your email address: `alikalkidan0088@gmail.com`
5. **Save your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** under API Keys
3. **Copy your Public Key** (you'll need this later)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys

## Step 6: Restart Your Dev Server

After adding the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message

## Troubleshooting

- Make sure your `.env` file is in the root directory (same level as `package.json`)
- Restart the dev server after creating/modifying `.env`
- Check the browser console for any error messages
- Verify your EmailJS service is active in the dashboard
- Ensure your email template has the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to add these environment variables in your hosting platform's settings:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

