import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  author?: string;
  tags?: string[];
  readTime?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: string;
  tags?: string[];
  readTime?: string;
}

// Hard-coded blog posts that will definitely work
const blogPosts = [
  {
    slug: '5-signs-your-business-needs-automation',
    title: "5 Signs Your Business Is Losing Money to Manual Processes",
    excerpt: "If you're running a small business, you might be leaking profit without realising it. Here are the 5 hidden ways manual work, slow follow-ups, and missed calls quietly drain your revenue — and how automation can stop the bleed.",
    date: "2025-03-15",
    category: "Business Automation",
    author: "ZynkroSystems Team",
    tags: ["automation", "business-efficiency", "lead-generation", "small-business"],
    readTime: "5 min read",
    content: `Most small businesses don't realise how much revenue slips through the cracks every single day. Manual processes, delayed follow-ups, and outdated systems quietly cost UK businesses thousands in lost opportunities.

---

## 1. You're Slow to Respond to Enquiries

When a potential customer reaches out, they expect a response *now* — not tomorrow.  
If your team replies hours (or days) later, that lead is already gone.

**📉 The Impact:**  
Businesses that respond to leads within **5 minutes** are up to **100× more likely to convert** than those that wait half an hour.

**⚙️ The Fix:**  
Set up **instant auto-replies**, route new leads to the right person immediately, and use smart notifications so every enquiry gets attention within seconds — even outside business hours.

---

## 2. Your Team Wastes Hours on Repetitive Admin

If your staff spends half their day copying data, chasing invoices, or sending the same emails, you're paying for work that software could do for pennies.

**📉 The Impact:**  
Even 2 hours of unnecessary admin per employee per day adds up to **10+ hours weekly** — over **£500/month in wasted wages**.

**⚙️ The Fix:**  
Automate routine tasks with **connected systems** and **smart templates** so your team can focus on work that actually grows the business.

---

## 3. You're Missing Calls — and Losing Leads Forever

When a customer calls and no one answers, they don't leave a voicemail — they call your competitor.

**📉 The Impact:**  
A single missed call could mean losing a **£1,000+ job**, especially for service businesses like plumbers, electricians, and cleaners.

**⚙️ The Fix:**  
Use **call-to-text automation**, **instant follow-up messages**, and **smart routing** to ensure every missed call gets a reply within minutes.

---

## 4. You Don't Follow Up Consistently

Following up shouldn't rely on memory or sticky notes. Most businesses stop after one or two attempts — long before a sale is made.

**📉 The Impact:**  
Over **80% of sales require at least 5 follow-ups**, but most businesses quit after 2. That's up to **60% of potential revenue lost**.

**⚙️ The Fix:**  
Automated **email/SMS nurture flows** and **CRM reminders** ensure every lead stays warm until they're ready to buy.

---

## 5. You're Operating Blind Without Data

If you don't know where leads come from, what converts, or why customers drop off, you can't make informed decisions.

**📉 The Impact:**  
Businesses without analytics waste **up to 30%** of their marketing budget on underperforming channels.

**⚙️ The Fix:**  
A clear **automation dashboard** and **conversion tracking** show exactly what's working — so you can double down on what drives profit.

---

## The Bottom Line: Automation Pays for Itself

Manual work costs more than time — it costs growth.  
Every task you automate earns back hours, focus, and revenue.

💡 **We help small businesses identify where they're losing money and build systems that recover it automatically.**

👉 **Book your Free £300 Automation ROI Audit** — and discover exactly how much time and revenue your business could win back.`
  },
  {
    slug: 'website-conversion-checklist',
    title: "The 10-Point Website Conversion Checklist Every Small Business Needs",
    excerpt: "Your website might look good, but is it converting visitors into customers? Use this simple 10-step checklist to find and fix the leaks in your conversion funnel.",
    date: "2025-03-10",
    category: "Web Design",
    author: "ZynkroSystems Team",
    tags: ["website-optimization", "conversion", "lead-generation", "small-business"],
    readTime: "7 min read",
    content: `Your website might look great, but if it's not converting visitors into leads, it's just a digital business card — not a sales engine.  
This checklist will help you spot the most common conversion killers and fix them fast.

---

## 1. ✓ Your Headline Passes the 5-Second Test

Visitors should instantly understand what you do and why it matters — within five seconds of landing.

**Check:**  
Can a complete stranger read your headline and know what you offer?

**Fix:**  
Lead with results, not services.  
✅ "Never Miss Another Customer Call" beats "Business Process Automation Solutions."

---

## 2. ✓ One Clear Call-to-Action (CTA)

Too many CTAs confuse people — and confused visitors don't click.

**Check:**  
Is there one obvious next step (like "Book a Free Audit") that stands out on the page?

**Fix:**  
Make your primary CTA bright, bold, and benefit-driven. Avoid generic text like "Submit."  
✅ Use: *"Get My Free Audit"* or *"Start Saving Time Today."*

---

## 3. ✓ Visible Trust & Social Proof

People buy from businesses they trust — so prove you're credible.

**Check:**  
Do you have testimonials, Google reviews, or client logos visible above the fold?

**Fix:**  
Add authentic reviews, customer photos, or "as seen in" logos.  
Even a short quote from a happy client builds trust instantly.

---

## 4. ✓ Fully Mobile-Optimized

Over 60% of web traffic is mobile. If your site doesn't load perfectly on phones, you're losing leads daily.

**Check:**  
Is text easy to read? Are buttons large enough to tap? Does your form work smoothly?

**Fix:**  
Design mobile-first. Test on multiple screen sizes.  
Small frustrations = big drop-offs.

---

## 5. ✓ Speed Under 3 Seconds

Speed directly impacts revenue — every extra second can cut conversions by up to 7%.

**Check:**  
Use [Google PageSpeed Insights](https://pagespeed.web.dev/) to test your site. Aim for a score above 85.

**Fix:**  
Compress images, remove heavy plugins, and enable caching.  
Fast sites build instant trust.

---

## 6. ✓ Contact Info is Always Visible

Buy-ready visitors shouldn't have to search for your details.

**Check:**  
Is your phone number in the header or footer on every page?

**Fix:**  
Add a sticky "Call Now" or "Book a Free Audit" button.  
The easier you make contact, the faster conversions happen.

---

## 7. ✓ Simple, Logical Navigation

If users can't find what they need in two clicks, they leave.

**Check:**  
Are your menu items clear and limited to essentials (Home, Services, Case Studies, Contact)?

**Fix:**  
Avoid dropdown clutter. Use short, descriptive labels like "Our Work" instead of "Portfolio."

---

## 8. ✓ You Handle Objections Early

Your website should answer questions before people ask them.

**Check:**  
Do you clearly explain pricing, timelines, or guarantees?

**Fix:**  
Add an FAQ or "Why Choose Us" section.  
Transparency builds confidence and removes hesitation.

---

## 9. ✓ You Offer a Value Exchange (Lead Magnet)

People rarely share their email "just to stay updated."  
Give them something worth exchanging it for.

**Check:**  
Do you offer a free guide, checklist, or audit that solves a real problem?

**Fix:**  
Use your expertise. Offer a *Website Audit* or *Automation Playbook* — something instantly useful.

---

## 10. ✓ Analytics Are Set Up and Checked

You can't fix what you don't measure.

**Check:**  
Are you tracking conversions, form submissions, and traffic sources?

**Fix:**  
Install **Google Analytics 4** and **Meta Pixel**, and use **Hotjar** or **Clarity** for heatmaps.  
Data tells you what's working — and what's not.

---

## 🔥 Bonus: Use Heatmaps to See What Users Actually Do

Heatmaps and session recordings show where visitors click, scroll, and drop off.  
Tools like **Hotjar** or **Microsoft Clarity** give you a front-row seat to your customer's experience.

---

## Your Website Conversion Action Plan

1. **Audit** – Score each checklist point (1–10)  
2. **Prioritize** – Fix what hurts conversions most  
3. **Test** – Make one change at a time and measure  
4. **Optimize** – Keep improving based on real data  

---

## Ready to Turn Your Website Into a Lead Machine?

Don't let a "nice-looking" site cost you real customers.  
Our **Free Website Conversion Audit** identifies what's holding your site back and shows you exactly how to fix it.

👉 **Book your free audit today** and uncover the 3 fastest improvements that could double your conversions in weeks.`
  },
  {
    slug: 'why-businesses-fail-at-lead-followup',
    title: "Why 80% of Businesses Fail at Lead Follow-Up (And How to Fix It)",
    excerpt: "Speed wins. Learn why most enquiries go cold and how simple automation can turn missed opportunities into consistent sales.",
    date: "2025-03-05",
    category: "Lead Generation",
    author: "ZynkroSystems Team",
    tags: ["lead-generation", "sales-automation", "business-efficiency"],
    readTime: "6 min read",
    content: `Most businesses don't lose leads because their service isn't good — they lose them because they take too long to follow up.  
Here's the truth: **80% of sales require at least 5 follow-ups**, but most businesses give up after just 2. That's not a sales issue — that's a system issue.

---

## The Hidden Cost of Poor Follow-Up

Every unreturned call, forgotten email, or late reply isn't just a missed opportunity — it's **lost revenue**.

**Quick stats:**
- Average business replies to leads after **48 hours** (when interest is already gone)
- Most teams make just **2 follow-up attempts**
- It usually takes **5–12 touchpoints** to convert a lead
- Companies lose up to **50% of revenue** through poor lead management

---

## Why Businesses Struggle to Follow Up

### 1. They Rely on Memory
Most small business owners *intend* to follow up — but between quotes, clients, and admin, things slip. Without automation, consistency is impossible.

### 2. No Structured System
Manual follow-up is chaotic. Some leads get chased endlessly, others never at all. That inconsistency destroys trust.

### 3. Too Slow to Respond
The fastest responder usually wins the sale. Waiting even an hour can cut your conversion rate in half.

### 4. Fear of Being "Pushy"
Most people stop too early because they don't want to annoy prospects. But when follow-ups add value, they *build* trust instead of breaking it.

### 5. No Value in Messages
"Just checking in" doesn't cut it. Every touchpoint should educate, reassure, or inspire action.

---

## The Real Cost in Pounds

**For a £50k business:**
- 100 leads/month
- 20% conversion rate possible with automation
- Current 8% conversion due to poor follow-up  
→ **£30,000+ lost annually**

**For a £200k business:**
- 200 leads/month  
- 25% potential conversion  
- 10% actual conversion  
→ **£180,000 in missed sales**

Automation pays for itself — fast.

---

## The Follow-Up System That Actually Works

### Phase 1: Respond Instantly (0–5 minutes)
- Send automated thank-you email  
- Notify your team immediately  
- Include a booking link for instant scheduling  

### Phase 2: Build Value (Days 1–30)
- Day 1: Call + helpful email  
- Day 3: Send a case study or testimonial  
- Day 7: Share a short educational resource  
- Day 14: Show more proof or reviews  
- Day 30: Offer an incentive or time-limited deal  

### Phase 3: Stay Top of Mind (Months 2–12)
- Monthly newsletter or insight drop  
- Industry tips or seasonal updates  
- Personalised re-engagement message  

---

## How to Automate Without Losing the Human Touch

### Personalization That Feels Real
- Use their name, company, and specific context  
- Reference what they enquired about  
- Match tone to their industry  

### Value First, Always
- Share insights, not sales pitches  
- Send useful guides, not spam  
- Position yourself as a helpful expert  

### Multichannel Magic
- Email for education  
- SMS for immediacy  
- Calls for personal connection  
- LinkedIn for credibility  

---

## The 5-Touch Follow-Up Formula

1. **Immediate Acknowledgment:**  
   "Thanks for your enquiry — I'll review and get back within 2 hours."  
2. **2 Hours Later:**  
   Call + email with relevant case study.  
3. **Day 3:**  
   Educational tip or article related to their problem.  
4. **Day 7:**  
   Share a testimonial from a similar client.  
5. **Day 14:**  
   Offer a clear next step — book a strategy call or free audit.  

Consistency beats charisma every time.

---

## Avoid These Common Follow-Up Fails

1. Sending generic "checking in" messages  
2. Forgetting to track who replied  
3. Waiting days to respond  
4. Stopping after 1–2 attempts  
5. Never asking for the next step  

---

## Turn Missed Leads Into Closed Deals

If you're tired of losing leads to competitors who just followed up faster — it's time to fix your system.

**Book your free Lead Generation Audit**  
We'll map out your current follow-up gaps and show you how automation can recover up to 40% more leads without extra effort.

👉 **Claim Your Free Audit Now**`
  }
];

// Function to get all blog posts metadata
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  // Convert to metadata format
  const posts: BlogPostMeta[] = blogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    author: post.author,
    tags: post.tags,
    readTime: post.readTime,
  }));
  
  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get a single blog post
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(p => p.slug === slug);
  return post || null;
}

// Function to get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Function to get related posts (by category, excluding current post)
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPostMeta[]> {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
    
  // If not enough posts in same category, fill with other recent posts
  if (relatedPosts.length < limit) {
    const otherPosts = allPosts
      .filter(post => post.slug !== currentSlug && post.category !== currentPost.category)
      .slice(0, limit - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }
  
  return relatedPosts;
}