# Email Template Upgrade - Summary

## What Changed

Your contact form now sends **branded HTML emails** instead of plain text! 🎉

### Files Modified/Created:

#### 1. **emails/ContactLeadEmail.tsx** (NEW)
- Beautiful dark-themed email template matching your brand (#FFB020 accent)
- Organized sections for lead info, message, additional info, and attribution
- Quick action buttons (Call & Reply) in the email
- Responsive layout with proper spacing

#### 2. **api/contact.ts** (UPDATED)
- Now renders HTML + plain text versions using React Email
- Smart subject lines: `[Demo 24h] John Smith • Northampton`
- `reply_to` set to lead's email (one-click replies!)
- Tags for analytics (source, type)
- Cleaner error handling

#### 3. **src/pages/Contact.tsx** (UPDATED)
- Sends structured JSON instead of composing plain text
- All form fields now properly passed to email template
- Includes source path tracking

## What You Get Now

✅ **Reply-To set** → Click "Reply" in your inbox to respond directly to leads  
✅ **Preheader** → Shows "Name • Badge • City" in inbox preview  
✅ **Consistent subjects** → Quick triage with `[Demo 24h]`, `[Audit]`, or `[Lead]`  
✅ **CTA buttons** → "Call" and "Reply via Email" right in the email  
✅ **Text fallback** → Works on plain-text email clients  
✅ **Branded design** → Dark theme (#121218 bg, #FFB020 accent)  
✅ **UTM tracking** → Attribution data shown in dedicated section

## Email Preview Structure

```
New Enquiry — Demo (24h)
/northampton-plumbers

─────────────────────────

Name: John Smith
Email: john@example.com
Phone: +44 7700 900123
Company: Smith Plumbing
Website: smithplumbing.co.uk
City/Area: Northampton
Preferred Contact: Phone @ Mornings
Timeline: Within 1 week
Budget: £500-£1000
Heard About Us: Google Search

─────────────────────────
Message
Looking to automate lead follow-up...

─────────────────────────
Additional Info
Service Type: demo
Leads / week: 10-20
...

─────────────────────────
Attribution
utm_source: google
utm_campaign: northampton-plumbers
...

─────────────────────────
[Call John] [Reply via Email]

Sent from zynkrosystems.com • This is a transactional lead alert.
```

## Environment Variable

Make sure you have `RESEND_KEY` set in your Vercel environment variables (looks like you already do!).

## Optional: Update Your Resend Domain

When you're ready, update line 52 in `api/contact.ts`:
```typescript
from: "ZynkroSystems <leads@zynkrosystems.com>", // Change from onboarding@resend.dev
```

You'll need to verify your domain in Resend first.

## Test It!

Fill out your contact form and check your inbox. You should now see a beautifully formatted, branded email with all the information cleanly organized! 🚀
