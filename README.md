# Professional Services Website

A clean, modern, mobile-first Next.js website for professional services with a working contact form and Gmail SMTP integration.

## Features

- ✅ Clean, professional design with mobile-first responsive layout
- ✅ 4 pages: Home, About, Services, Contact
- ✅ Working contact form with email delivery via Gmail SMTP
- ✅ Form validation (client-side and server-side)
- ✅ TypeScript + Tailwind CSS
- ✅ Next.js 14+ App Router
- ✅ Accessible components with ARIA labels

## Project Structure

```
professional-site/
├── app/
│   ├── about/page.tsx          # About page
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── contact/page.tsx        # Contact page with form
│   ├── services/page.tsx       # Services page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── Button.tsx              # Reusable button component
│   ├── Footer.tsx              # Footer component
│   ├── FormInput.tsx           # Form input component
│   ├── FormTextarea.tsx        # Form textarea component
│   └── Navbar.tsx              # Navigation bar
├── lib/
│   └── mailer.ts               # Email utility using Nodemailer
└── .env.local                  # Environment variables (not in git)
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gmail SMTP

Before the contact form can send emails, you need to set up Gmail SMTP:

1. **Enable 2-Step Verification** on your Google Account
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Navigate to Security → 2-Step Verification
   - Follow the setup process

2. **Create an App Password**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other" as the device and name it "Professional Site Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this in the next step)

### 3. Configure Environment Variables

Edit the `.env.local` file in the project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-actual-gmail@gmail.com
SMTP_PASS=your-16-char-app-password-here
CONTACT_TO=ngellis@alumni.princeton.edu
```

**Important:**
- Replace `SMTP_USER` with your Gmail address
- Replace `SMTP_PASS` with the 16-character App Password you generated
- `CONTACT_TO` is already set to receive emails at ngellis@alumni.princeton.edu

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Test the Contact Form

1. Navigate to the Contact page
2. Fill in all required fields (Name, Email, Message)
3. Click "Send Message"
4. Check the inbox at ngellis@alumni.princeton.edu for the email

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO`
4. Deploy!

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

Just ensure you add the environment variables in your platform's settings.

## Customization

### Update Content

All placeholder content can be easily replaced:

- **Home page:** Edit `app/page.tsx`
- **About page:** Edit `app/about/page.tsx`
- **Services page:** Edit `app/services/page.tsx`
- **Contact page:** Edit `app/contact/page.tsx`

### Update Styles

- **Colors:** Modify Tailwind classes throughout components
- **Fonts:** Update in `app/globals.css`
- **Layout:** Adjust spacing and max-width in `app/layout.tsx`

### Add Images

Replace placeholder images:

1. Add images to the `public/` folder
2. Update image references in page files
3. Use Next.js `<Image>` component for optimization

### Update Site Name

Replace "Professional Co." in:
- `components/Navbar.tsx` (line 21)
- `components/Footer.tsx` (line 4)
- `app/layout.tsx` (line 7-8) - metadata

## Support

For issues or questions about Next.js, visit:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available for use.
