
# Kalaivani Coaching Center — Premium Educational Academy Website

A complete, modern, production-ready website for **Kalaivani Coaching Center**, an educational coaching academy in Tamil Nadu, India, specializing in AISSEE (Sainik School Class VI & IX), RMS (Rashtriya Military Schools), RIMC, and Academic Board Excellence (Class 6–10).

Designed with a parent-first philosophy: builds credibility, showcases authentic student toppers and marks, provides transparent course information, and prioritizes **direct phone call conversions** (`tel:`) without third-party lead generation friction.

---

## 🌟 Key Highlights & Architecture

- **Visual Brand Identity**: Deep Navy Blue (`#0B1B3D`) representing academic discipline, Warm Gold (`#D4AF37`) representing achievement and excellence, and clean soft Ivory (`#FAF9F6`) backgrounds.
- **Original Logo & Emblem**: Scalable vector academic shield incorporating an open book of knowledge, a rising star of wisdom, and laurel branches.
- **Phone-First Conversion**:
  - Direct `<a href="tel:+91XXXXXXXXXX">` links in the header, hero section, course cards, contact section, and footer.
  - Sticky mobile call bar (`md:hidden`) with high-touch 48px buttons that open the phone dialler natively.
  - Zero third-party call-center routing; direct connection to the academy director.
- **High-Priority Toppers Showcase**:
  - Clean cards displaying student names, examination/category, marks obtained, maximum marks, percentage progress bar, year, and rank.
  - Neutral profile placeholders with transparent replacement instructions.
- **Centralized Content Management (`src/config/siteConfig.ts`)**:
  - Update phone numbers, address, courses, toppers, photos, testimonials, and FAQs in **one single typed configuration file** without writing code!
- **WCAG 2.2 AA Accessibility & Performance**:
  - Accessible contrast ratios, visible focus indicators, skip-to-content link, keyboard-navigable lightbox modal, and reduced-motion support.
- **Production Security & SEO**:
  - Strict Content Security Policy (CSP), HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
  - JSON-LD structured data (`EducationalOrganization` & `LocalBusiness`).
  - Automatic `sitemap.xml` and `robots.txt`.

---

## 📁 Project Structure

```
kalaivani-coaching-center/
├── public/
│   ├── favicon.svg             # Original Kalaivani emblem favicon
│   └── images/                 # Folder for topper photos and gallery uploads
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4, custom scrollbars, academic patterns
│   │   ├── layout.tsx          # Root layout, SEO metadata, JSON-LD, Nav, Footer, Call Bar
│   │   ├── page.tsx            # Complete assembled homepage
│   │   ├── robots.ts           # Dynamic search engine robots.txt
│   │   └── sitemap.ts          # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx  # Dismissible admission notification banner
│   │   │   ├── Navbar.tsx           # Sticky nav, brand logo, mobile drawer menu
│   │   │   ├── Footer.tsx           # Rich footer with links, phone, legal dialogs
│   │   │   └── MobileCallBar.tsx    # Fixed bottom call bar for smartphones
│   │   ├── modals/
│   │   │   └── PolicyModal.tsx      # Accessible Privacy Policy & Terms dialog
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Headline, value checkmarks, call CTA, spotlight
│   │   │   ├── TrustStrip.tsx       # 4 verified parent confidence assurances
│   │   │   ├── AboutSection.tsx     # Philosophy, goals, 4 teaching pillars
│   │   │   ├── CoursesSection.tsx   # Filterable course cards with syllabus & fee notes
│   │   │   ├── ToppersSection.tsx   # Student cards with marks, max marks, percentages
│   │   │   ├── WhyChooseUsSection.tsx # 6 value proposition cards with Lucide icons
│   │   │   ├── TeachingApproachSection.tsx # 4-step visual learning roadmap
│   │   │   ├── TestimonialsSection.tsx # Authentic parent reviews from Tamil Nadu
│   │   │   ├── GallerySection.tsx   # Image gallery with keyboard lightbox
│   │   │   └── ContactSection.tsx   # Direct phone cards, address, validated enquiry form
│   │   ├── seo/
│   │   │   └── JsonLd.tsx           # Schema.org structured data
│   │   └── ui/
│   │       └── Logo.tsx             # Original vector Kalaivani Coaching Center logo
│   └── config/
│       └── siteConfig.ts       # ⭐️ CENTRAL OWNER CONFIGURATION FILE
├── .env.example                # Sample environment configuration
├── next.config.ts              # Security headers and build configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js version 18.18 or higher (Node 20+ recommended).
- npm or pnpm package manager.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static production build in `.next`.

### 4. Run the Production Server
```bash
npm run start
```

---

## ✏️ How the Academy Owner Updates Content

All content is managed in a single, well-documented file:  
`src/config/siteConfig.ts`

### 1. Updating Phone Numbers & Academy Address
Open `src/config/siteConfig.ts` and locate the `contact` block:
```typescript
contact: {
  primaryPhoneDisplay: "+91 94431 23456", // Number shown to parents
  primaryPhoneTel: "+919443123456",      // Dialler link (with country code)
  secondaryPhoneDisplay: "+91 98421 23456",
  secondaryPhoneTel: "+919842123456",
  whatsappNumber: "919443123456",
  email: "enquiries@kalaivanicoaching.com",
  address: {
    line1: "Near Bus Stand, Main Coaching Complex",
    city: "Tiruchirappalli / Perambalur Region",
    district: "Tamil Nadu",
    pincode: "621212",
    fullAddress: "Near Bus Stand, Taluk Office Road, Tamil Nadu 621212, India",
  },
  openingHours: "Monday to Sunday: 8:00 AM – 8:00 PM",
}
```
*Saving this file instantly updates the header, hero section, contact section, mobile call bar, and footer!*

### 2. Replacing Topper Details & Photographs
In `src/config/siteConfig.ts`, locate the `toppers` array:
```typescript
{
  id: "topper-1",
  name: "S. Kabilan",                     // Student Name
  examination: "AISSEE Class VI Entrance", // Exam Name
  category: "sainik_6",
  marksObtained: 284,                      // Marks scored
  maxMarks: 300,                           // Total marks
  percentage: "94.6%",
  year: "2024",
  rankOrHonor: "State Merit Rank Holder",
  photoUrl: "/images/toppers/kabilan.jpg",  // Place JPG in public/images/toppers/
  notes: "Scored 148/150 in Mathematics. Selected for Sainik School Amaravathinagar.",
}
```
- **To add a student photograph**: Save the photo (e.g. `kabilan.jpg`) into the `public/images/toppers/` folder and set `photoUrl: "/images/toppers/kabilan.jpg"`.
- If no photo is provided, the card automatically shows a clean, professional academic graduate placeholder.

### 3. Updating Courses and Fees
Modify the `courses` array in `src/config/siteConfig.ts`. You can change course names, target age groups, subjects covered, and fee notes.

### 4. Updating Announcement Banner
To toggle the top announcement bar on or off:
```typescript
announcement: {
  isActive: true, // Set to false to hide when admissions close
  badge: "Admissions Open",
  message: "New Batches for AISSEE and RMS Entrance (2025–2026). Limited Seats!",
  ctaText: "Call for Batch Details",
}
```

---

## 🌐 Custom `.com` Domain Setup & Deployment

The website is optimized for one-click deployment on reputable platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Step 1: Purchasing Your Domain
1. Visit a domain registrar such as:
   - [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost pricing)
   - [Namecheap](https://www.namecheap.com)
   - [GoDaddy](https://www.godaddy.com)
2. Search for recommended available names:
   - `kalaivanicoachingcenter.com`
   - `kalaivanicoaching.com`
   - `kalaivaniacademy.com`
3. Complete registration (typically ₹800–₹1,200 per year). Ensure **WHOIS Privacy Protection** is enabled (usually free).

### Step 2: Deploying the Code to Vercel (Recommended)
1. Push this project to a private GitHub repository:
   ```bash
   git add .
   git commit -m "Initial release of Kalaivani Coaching Center website"
   git remote add origin https://github.com/your-username/kalaivani-coaching-center.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and select `kalaivani-coaching-center`.
4. Leave build settings as default (`next build`) and click **Deploy**.
5. Your website will be live on a `*.vercel.app` URL within 60 seconds with free SSL.

### Step 3: Connecting Your Custom `.com` Domain
1. In your Vercel Dashboard, go to **Project Settings > Domains**.
2. Enter `kalaivanicoachingcenter.com` and click **Add**.
3. Vercel will provide two standard DNS records:
   - **Type A Record**:
     - Host: `@`
     - Value: `76.76.21.21`
   - **Type CNAME Record**:
     - Host: `www`
     - Value: `cname.vercel-dns.com`
4. Log in to your domain registrar (where you bought the domain), open **DNS Management**, and add these two records.
5. Within 15–30 minutes, DNS will propagate and Vercel will automatically provision a free, auto-renewing **Let's Encrypt SSL/HTTPS certificate**.

### Step 4: Domain & Hosting Renewal Reminders
- Set your domain registrar account to **Auto-Renew** with a backup payment card to prevent domain expiration.
- Vercel's Hobby tier is completely free for individual institutional websites with generous bandwidth.

---

## 📋 Pre-Launch Checklist for Academy Owner

Before public launch, please review and confirm the following:

- [ ] **Telephone Numbers**: Verify the primary phone number in `src/config/siteConfig.ts` (`primaryPhoneDisplay` & `primaryPhoneTel`). Test tapping the button on a mobile phone to confirm it opens the dialler correctly.
- [ ] **Physical Address**: Update the campus road, landmark, district, and pincode in `src/config/siteConfig.ts`.
- [ ] **Topper Verification**: Replace sample topper names and marks with your actual verified student results and photos.
- [ ] **Course Offerings**: Confirm that all listed courses (AISSEE VI, AISSEE IX, RMS, RIMC, School Foundation) match current batch offerings.
- [ ] **Parental Consent**: Ensure you have written parent consent before publishing identifiable photographs of children.
- [ ] **Google Business Profile**: Set up or claim your Google Maps listing ("Kalaivani Coaching Center") with the identical address and phone number for strong local SEO.
- [ ] **Search Console**: Once deployed to your custom domain, submit `https://kalaivanicoachingcenter.com/sitemap.xml` to Google Search Console.

---

## 🔒 Security & Privacy Commitments

- **No Third-Party Lead Tracking**: We do not sell or pass parent phone numbers to external advertising networks or data brokers.
- **Client-Side Data Safety**: The quick enquiry form connects directly via the user's phone dialler or encrypted WhatsApp link; no student personal records are stored on vulnerable external databases.
- **Strict Headers**: Content Security Policy, X-Frame-Options (Clickjacking defense), and X-Content-Type-Options (MIME sniffing prevention) are active on all routes.

---

## 💡 Support and Maintenance

For feature additions, batch updates, or technical assistance, contact your web development administrator or maintainer.
