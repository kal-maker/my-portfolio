# Troubleshooting EmailJS Issues

## Common Error: `ERR_NAME_NOT_RESOLVED` or `status: 0`

This error typically means your EmailJS environment variables are not properly configured.

### Solution Steps:

1. **Check if `.env` file exists**
   - Make sure you have a `.env` file in the root directory (same level as `package.json`)
   - The file should NOT be named `.env.example` - it should be exactly `.env`

2. **Verify your `.env` file contents**
   Your `.env` file should look like this (replace with your actual values):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   ```
   - Make sure there are NO spaces around the `=` sign
   - Make sure there are NO quotes around the values
   - Make sure each variable is on its own line

3. **Restart your development server**
   - Environment variables are only loaded when the server starts
   - Stop your server (Ctrl+C) and run `npm run dev` again

4. **Verify your EmailJS setup**
   - Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Go to **Email Services** - copy your Service ID
   - Go to **Email Templates** - copy your Template ID
   - Go to **Account** > **General** - copy your Public Key
   - Make sure all three values are correct in your `.env` file

5. **Check browser console**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for any error messages that might give more details

6. **Test your EmailJS configuration**
   - In EmailJS dashboard, go to **Email Templates**
   - Click on your template
   - Use the "Test" button to verify your template works

## Still Not Working?

### Alternative: Use a fallback email link

If EmailJS continues to have issues, you can temporarily modify the contact form to use a `mailto:` link instead. However, the EmailJS setup is recommended for a better user experience.

### Check Network Issues

- Make sure you have an active internet connection
- Check if your firewall or antivirus is blocking the API call
- Try accessing https://api.emailjs.com in your browser to verify connectivity

### Verify EmailJS Account Status

- Make sure your EmailJS account is active
- Check if you've exceeded the free tier limit (200 emails/month)
- Verify your email service is properly connected in EmailJS dashboard

## Quick Checklist

- [ ] `.env` file exists in project root
- [ ] `.env` file has all three variables (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
- [ ] No spaces around `=` in `.env` file
- [ ] No quotes around values in `.env` file
- [ ] Development server was restarted after creating/modifying `.env`
- [ ] EmailJS account is set up correctly
- [ ] Email service is active in EmailJS dashboard
- [ ] Email template is configured correctly
- [ ] Internet connection is working

## Need Help?

If you're still experiencing issues:
1. Check the browser console for detailed error messages
2. Verify your EmailJS credentials are correct
3. Make sure you've followed all steps in `EMAILJS_SETUP.md`

