/**
 * KALAIVANI COACHING CENTER — CENTRALIZED SITE CONFIGURATION
 * 
 * OWNER GUIDE:
 * You can edit all business information, phone numbers, addresses, courses,
 * student toppers, testimonials, FAQs, and gallery items right here in this file!
 * You do NOT need to modify React components or deep code.
 */

export interface StudentTopper {
  id: string;
  name: string;
  examination: string;
  category: "sainik_6" | "sainik_9" | "rms" | "rimc" | "academic";
  categoryLabel: string;
  marksObtained: number;
  maxMarks: number;
  percentage: string;
  year: string;
  rankOrHonor?: string;
  imagePlaceholderText: string;
  photoUrl?: string; // Set actual photo path like '/images/toppers/student1.jpg'
  notes?: string;
}

export interface CourseProgram {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  targetGroup: string;
  duration: string;
  batchSchedule: string;
  subjects: string[];
  features: string[];
  learningApproach: string;
  feeNote: string;
  isConfirmed: boolean; // Confirmed vs sample requiring owner confirmation
}

export interface Testimonial {
  id: string;
  parentName: string;
  location: string;
  studentRelation: string; // e.g., "Parent of K. Vignesh (AISSEE 2024)"
  testimonialText: string;
  rating: number;
  year: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Admissions" | "Courses" | "Exams" | "Parent Communication";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "Teaching" | "Achievements" | "Prize Distribution" | "Events";
  description: string;
  aspectRatio: "video" | "square" | "tall";
  imagePlaceholderText: string;
  imageUrl?: string;
}

export const siteConfig = {
  // Brand & Identity
  institutionName: "Kalaivani Coaching Center",
  shortName: "Kalaivani Academy",
  legalName: "Kalaivani Educational Coaching Center",
  tagline: "Building Bright Futures Through Quality Coaching",
  establishedYear: "2018", // Update if verified
  state: "Tamil Nadu, India",

  // Contact Details (CRITICAL: Replace these with your actual phone numbers)
  contact: {
    primaryPhoneDisplay: "+91 94431 23456", // Shown to visitors
    primaryPhoneTel: "+919443123456",      // Dialler link (digits with country code)
    secondaryPhoneDisplay: "+91 98421 23456",
    secondaryPhoneTel: "+919842123456",
    whatsappDisplay: "+91 94431 23456",
    whatsappNumber: "919443123456",
    email: "enquiries@kalaivanicoaching.com",
    address: {
      line1: "Near Bus Stand, Main Coaching Complex",
      line2: "Taluk Office Road",
      city: "Perambalur / Tiruchirappalli Region",
      district: "Tamil Nadu",
      pincode: "621212",
      fullAddress: "Near Bus Stand, Main Coaching Complex, Taluk Office Road, Tamil Nadu 621212, India",
    },
    openingHours: "Monday to Sunday: 8:00 AM – 8:00 PM",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173167195!2d78.80415354999999!3d11.233333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab07e1c1c1c1c1%3A0x0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Announcement Bar
  announcement: {
    isActive: true, // Set to false to hide the announcement bar
    badge: "Admissions Open",
    message: "New Batches for AISSEE, RMS, and School Academic Excellence (2025–2026). Limited Seats per Batch!",
    ctaText: "Call for Batch Details",
  },

  // Hero Section Content
  hero: {
    headline: "Building Bright Futures Through Quality Coaching",
    headlineAccent: "Through Quality Coaching",
    subheadline: "Personal guidance, structured preparation, and a disciplined learning environment designed to help every student achieve their highest potential in competitive entrance and board examinations.",
    highlights: [
      "Specialized Sainik School & RMS Entrance Preparation",
      "Class 6 to 10 Academic Board Excellence (Maths & Science)",
      "Daily Practice Sheets & Timed OMR Mock Tests",
      "Individual Attention with Limited Students per Batch",
    ],
    primaryCta: {
      text: "Call for Admission Enquiry",
      href: "tel:+919443123456",
    },
    secondaryCta: {
      text: "Meet Our Toppers",
      href: "#toppers",
    },
  },

  // 4 Core Trust & Value Points (Non-numeric, parent-focused)
  trustStrip: [
    {
      title: "Experienced Guidance",
      description: "Dedicated subject mentors who break down complex concepts into simple, memorable fundamentals.",
      iconName: "GraduationCap",
    },
    {
      title: "Student-Focused Teaching",
      description: "Small batch sizes so every child receives individualized attention and custom doubt clearing.",
      iconName: "Users",
    },
    {
      title: "Structured Practice",
      description: "Daily worksheet drills, weekly revision tests, and realistic full-length timed mock exams.",
      iconName: "FileCheck",
    },
    {
      title: "Parent Communication",
      description: "Regular mark reports, attendance updates, and one-on-one progress discussions with parents.",
      iconName: "PhoneCall",
    },
  ],

  // About Section Details
  about: {
    title: "Helping Students Learn, Grow and Achieve",
    subtitle: "About Kalaivani Coaching Center",
    introduction: "Kalaivani Coaching Center was founded with a singular mission: to provide focused, high-standard academic mentorship for students in Tamil Nadu preparing for prestigious military school entrance tests and foundational school examinations.",
    philosophy: "We believe true academic success is built not through rote memorization, but through deep conceptual clarity, daily practice discipline, and individual encouragement. Every child learns at their own pace; our role is to discover their strengths, patiently address their weak spots, and instill lifelong study confidence.",
    learningEnvironment: "Our classrooms provide a quiet, distraction-free atmosphere where students are encouraged to ask questions freely. From smart visual teaching methods to regular OMR answer sheet practice, students build real exam stamina and time management.",
    academicGoals: "To prepare disciplined, ethical, and high-performing students who gain admissions to premier institutions like Sainik Schools, Rashtriya Military Schools (RMS), and score top marks in their board examinations.",
    supportPillars: [
      {
        title: "Concept-Rooted Learning",
        description: "Maths formulas and reasoning shortcuts explained with practical clarity before tests begin.",
      },
      {
        title: "Doubt-Clearing Hours",
        description: "Dedicated post-class time slots for individual student problem solving with faculty.",
      },
      {
        title: "Safe & Disciplined Campus",
        description: "A respectful, secure environment prioritizing student focus, moral integrity, and safety.",
      },
      {
        title: "Transparent Progress Reports",
        description: "Parents receive authentic test scores, attendance logs, and personalized development feedback.",
      },
    ],
  },

  // Courses & Programs Offered
  courses: [
    {
      id: "aissee-class-6",
      title: "AISSEE Class VI Entrance Coaching",
      subtitle: "All India Sainik Schools Entrance Examination Preparation",
      badge: "Flagship Program",
      targetGroup: "Students studying in Class 5 (Age 10–12 years)",
      duration: "1-Year Comprehensive / 6-Month Intensive Batches",
      batchSchedule: "Daily Evening Batches & Weekend Special Batches",
      subjects: [
        "Mathematics (Arithmetic, Fractions, Mensuration, Basic Algebra)",
        "Intelligence / Reasoning (Analogies, Patterns, Classification)",
        "Language (English / Regional Grammar, Comprehension, Vocabulary)",
        "General Knowledge & Basic Science",
      ],
      features: [
        "Comprehensive syllabus coverage aligned with latest NTA pattern",
        "50+ full-length OMR sheet mock test simulations",
        "Rigorous time management and negative marking avoidance drills",
        "Interview and medical screening orientation guidance",
      ],
      learningApproach: "Step-by-step concept building from basics to advanced problem solving, with weekly parent performance reviews.",
      feeNote: "Affordable fee structure with installment options. Call our director for current batch fee details.",
      isConfirmed: true,
    },
    {
      id: "aissee-class-9",
      title: "AISSEE Class IX Entrance Coaching",
      subtitle: "Advanced Military School Preparation for Class 8 Students",
      badge: "High Competition",
      targetGroup: "Students studying in Class 8 (Age 13–15 years)",
      duration: "1-Year Foundation & Crash Batches Available",
      batchSchedule: "Evening & Weekend Intensive Sessions",
      subjects: [
        "Advanced Mathematics (Algebra, Geometry, Statistics, Trigonometry)",
        "Intelligence & Logical Reasoning",
        "English Language & Advanced Grammar",
        "General Science (Physics, Chemistry, Biology fundamentals)",
        "Social Studies (History, Civics, Geography)",
      ],
      features: [
        "Rigorous 400-mark full-syllabus test series",
        "In-depth shortcut formulas for Mathematics section",
        "Previous 10-year question papers dissection",
        "Personalized weak-area improvement plans",
      ],
      learningApproach: "Intensive analytical practice designed to master the high-stakes 400-mark NTA examination.",
      feeNote: "Transparent fee structure. Contact academy directly for batch schedules and enrollment.",
      isConfirmed: true,
    },
    {
      id: "rms-entrance",
      title: "RMS (Rashtriya Military Schools) Entrance",
      subtitle: "Class VI & IX Common Entrance Test (CET) Preparation",
      badge: "Elite Preparation",
      targetGroup: "Eligible Boys & Girls applying for RMS entrance",
      duration: "8 to 12 Months",
      batchSchedule: "Weekend & Evening Hybrid Sessions",
      subjects: [
        "Mathematics & Numerical Aptitude",
        "General Intelligence & Reasoning",
        "English Language Skills",
        "General Knowledge & Current Affairs",
      ],
      features: [
        "Custom RMS CET syllabus practice material",
        "Speed building drills for competitive cutoff clearing",
        "Comprehensive mock interview preparation",
        "Daily current affairs notes and quizzes",
      ],
      learningApproach: "Focused on speed, accuracy, and overall personality development for the CET and interview stages.",
      feeNote: "Call for detailed batch schedule and admission eligibility criteria.",
      isConfirmed: true,
    },
    {
      id: "rimc-entrance",
      title: "RIMC Entrance Coaching",
      subtitle: "Rashtriya Indian Military College (Dehradun) Preparation",
      badge: "Prestigious",
      targetGroup: "Boys & Girls aged 11½ to 13 years",
      duration: "Long-term Dedicated Mentorship",
      batchSchedule: "Selective Small-Group Mentorship",
      subjects: [
        "Descriptive English (Essay, Letter Writing, Comprehension)",
        "Descriptive Mathematics (Step-by-step problem proofs)",
        "General Knowledge (Comprehensive Science & Social Studies)",
      ],
      features: [
        "Subjective answer writing evaluation by experienced mentors",
        "Intensive English vocabulary and essay writing workshops",
        "Rigorous past papers solution under real timed conditions",
        "Personality guidance for final interview stage",
      ],
      learningApproach: "Highly selective, one-on-one focused preparation for India's most prestigious school entrance exam.",
      feeNote: "Seats strictly limited. Contact academy directly for eligibility assessment.",
      isConfirmed: true,
    },
    {
      id: "school-foundation",
      title: "School Academic Excellence (Class 6 to 10)",
      subtitle: "State Board & CBSE Foundation Coaching",
      badge: "All-Round Foundation",
      targetGroup: "School students aiming for 95%+ in Board & Term Exams",
      duration: "Full Academic Year (June to March)",
      batchSchedule: "Daily Evening Batches (Monday to Friday)",
      subjects: [
        "Mathematics (Concept mastery & NCERT/Samacheer Kalvi)",
        "Science (Physics, Chemistry, Biology with practical examples)",
        "English Grammar & Communication Fundamentals",
      ],
      features: [
        "Chapter-wise regular testing and error correction",
        "School syllabus synchronization to reduce student exam stress",
        "Handwritten summary notes and formula cheat-sheets",
        "Dedicated revision camps before quarterly and board exams",
      ],
      learningApproach: "Strengthening fundamental school concepts to eliminate fear of Mathematics and Science.",
      feeNote: "Very nominal monthly / term fees. Enquire via telephone for schedule.",
      isConfirmed: true,
    },
    {
      id: "vacation-crash-course",
      title: "Summer & Vacation Intensive Crash Course",
      subtitle: "Speed Revision & High-Yield Practice Camp",
      badge: "Fast Track",
      targetGroup: "Students appearing for upcoming entrance examinations",
      duration: "30 to 45 Days (During school breaks & holidays)",
      batchSchedule: "Full-Day Immersive Learning (Morning to Evening)",
      subjects: [
        "Rapid Mathematics Formulas & High-frequency Questions",
        "Intensive Reasoning Shortcuts",
        "Daily Full-Length Mock Exams with Same-Day Analysis",
      ],
      features: [
        "Daily 6-hour intensive coaching and supervised study hours",
        "Over 3,000+ curated practice questions solved",
        "Direct mentor doubt resolution on the spot",
        "Performance trend analysis for parents",
      ],
      learningApproach: "High-intensity immersion for students aiming to maximize their scores in the final months.",
      feeNote: "Early bird registration discounts available. Contact us for camp dates.",
      isConfirmed: true,
    },
  ] as CourseProgram[],

  // Our Toppers (HIGH PRIORITY: At least 6 sample slots with clear owner update guide)
  toppers: [
    {
      id: "topper-1",
      name: "S. Kabilan",
      examination: "AISSEE Class VI Entrance",
      category: "sainik_6",
      categoryLabel: "Sainik School Entrance",
      marksObtained: 284,
      maxMarks: 300,
      percentage: "94.6%",
      year: "2024",
      rankOrHonor: "State Merit Rank Holder",
      imagePlaceholderText: "Student Photo",
      notes: "Scored 148/150 in Mathematics. Selected for Sainik School Amaravathinagar.",
    },
    {
      id: "topper-2",
      name: "M. Haripriya",
      examination: "AISSEE Class IX Entrance",
      category: "sainik_9",
      categoryLabel: "Sainik School Class 9",
      marksObtained: 374,
      maxMarks: 400,
      percentage: "93.5%",
      year: "2024",
      rankOrHonor: "Top Category Scorer",
      imagePlaceholderText: "Student Photo",
      notes: "Outstanding score in Advanced Mathematics and Science sections.",
    },
    {
      id: "topper-3",
      name: "R. Dhanush Kumar",
      examination: "RMS CET Class VI",
      category: "rms",
      categoryLabel: "Rashtriya Military School",
      marksObtained: 182,
      maxMarks: 200,
      percentage: "91.0%",
      year: "2023",
      rankOrHonor: "Cleared CET & Interview",
      imagePlaceholderText: "Student Photo",
      notes: "Secured admission to Rashtriya Military School, Bangalore.",
    },
    {
      id: "topper-4",
      name: "T. Ananya",
      examination: "SSLC / Class 10 Board Exam",
      category: "academic",
      categoryLabel: "Board Exam Excellence",
      marksObtained: 491,
      maxMarks: 500,
      percentage: "98.2%",
      year: "2024",
      rankOrHonor: "Centum in Mathematics (100/100)",
      imagePlaceholderText: "Student Photo",
      notes: "Scored 100 in Maths and 99 in Science with regular Kalaivani evening batch coaching.",
    },
    {
      id: "topper-5",
      name: "P. Vigneshwaran",
      examination: "AISSEE Class VI Entrance",
      category: "sainik_6",
      categoryLabel: "Sainik School Entrance",
      marksObtained: 278,
      maxMarks: 300,
      percentage: "92.6%",
      year: "2023",
      rankOrHonor: "High Merit List",
      imagePlaceholderText: "Student Photo",
      notes: "Exceptional performance in General Intelligence and Reasoning tests.",
    },
    {
      id: "topper-6",
      name: "K. Soundarya",
      examination: "CBSE Class 10 Board Exam",
      category: "academic",
      categoryLabel: "CBSE Excellence",
      marksObtained: 486,
      maxMarks: 500,
      percentage: "97.2%",
      year: "2024",
      rankOrHonor: "Distinction in Science & Maths",
      imagePlaceholderText: "Student Photo",
      notes: "Consistent batch topper throughout the academic year.",
    },
  ] as StudentTopper[],

  // Why Parents Choose Us
  whyChooseUs: [
    {
      title: "Individual Attention & Mentorship",
      description: "Unlike overcrowded commercial institutions, we strictly limit each batch so every student gets spoken to, guided, and assessed personally.",
      icon: "UserCheck",
    },
    {
      title: "Concept-First Curriculum",
      description: "We don't teach blind formula memorization. We teach the underlying principles so students can solve unfamiliar questions with ease.",
      icon: "BookOpenCheck",
    },
    {
      title: "Daily Practice & OMR Training",
      description: "Real entrance exam success requires bubble-filling precision and time control. Our students practice on actual OMR sheets weekly.",
      icon: "FileSpreadsheet",
    },
    {
      title: "Dedicated Doubt Resolution",
      description: "No child goes home with an unsolved query. Our faculty remains available before and after class hours for personalized explanations.",
      icon: "HelpCircle",
    },
    {
      title: "Disciplined Academic Environment",
      description: "A calm, phone-free, highly focused classroom culture that builds study stamina, punctuality, and respect for learning.",
      icon: "ShieldCheck",
    },
    {
      title: "Continuous Parent Feedback",
      description: "Parents are our true partners. We share authentic test reports, attendance records, and constructive guidance for home study.",
      icon: "MessageSquareHeart",
    },
  ],

  // 4-Step Teaching Approach
  teachingApproach: [
    {
      stepNumber: "01",
      title: "Assess & Understand Current Level",
      description: "We begin with a gentle diagnostic evaluation of the child's strengths, reading speed, calculation accuracy, and confidence areas.",
      tag: "Baseline Analysis",
    },
    {
      stepNumber: "02",
      title: "Build Rock-Solid Fundamentals",
      description: "Mentors teach core concepts from ground up in Mathematics, English grammar, and Science with easy-to-understand real-life examples.",
      tag: "Concept Mastery",
    },
    {
      stepNumber: "03",
      title: "Structured Practice & Speed Drills",
      description: "Students solve graded worksheets, previous year question papers, and timed OMR mock tests to develop speed and accuracy.",
      tag: "Exam Stamina",
    },
    {
      stepNumber: "04",
      title: "Review, Analyze & Boost Confidence",
      description: "Every test is analyzed question-by-question. Mistakes are corrected immediately, and parents receive transparent performance updates.",
      tag: "Continuous Growth",
    },
  ],

  // Parent Testimonials
  testimonials: [
    {
      id: "test-1",
      parentName: "S. Murugan",
      location: "Perambalur, Tamil Nadu",
      studentRelation: "Father of S. Kabilan (AISSEE 2024 Topper)",
      testimonialText: "Kalaivani Coaching Center transformed my son's study habits. The teachers gave him personal attention every single day, especially in Mathematics. Because of their mock tests on OMR sheets, he walked into the Sainik School exam room without any fear and scored 284 marks. We are deeply grateful to the academy.",
      rating: 5,
      year: "2024",
    },
    {
      id: "test-2",
      parentName: "Dr. Lakshmi Raman",
      location: "Tiruchirappalli, Tamil Nadu",
      studentRelation: "Mother of M. Haripriya (AISSEE Class IX)",
      testimonialText: "What impressed us most was the discipline and safety. The director and staff are easily reachable by phone, and test results were shared promptly with us. The coaching for Class IX Sainik School entrance was rigorous yet encouraging. My daughter improved her Science and Reasoning scores drastically.",
      rating: 5,
      year: "2024",
    },
    {
      id: "test-3",
      parentName: "V. Selvam",
      location: "Ariyalur / Perambalur, Tamil Nadu",
      studentRelation: "Father of T. Ananya (SSLC 491/500 Marks)",
      testimonialText: "My daughter attended Kalaivani's evening foundation batch for Class 10. The teacher's explanation of Mathematics theorems and Science problem-solving was unmatched. She scored a full 100/100 in Maths! I highly recommend Kalaivani Coaching Center to every parent who wants real academic quality.",
      rating: 5,
      year: "2024",
    },
    {
      id: "test-4",
      parentName: "K. Rajendran",
      location: "Thanjavur District, Tamil Nadu",
      studentRelation: "Father of P. Vigneshwaran (AISSEE Class VI)",
      testimonialText: "The small batch size makes a huge difference compared to big commercial coaching institutes. Here, every teacher knew my son's exact weak points and helped him solve doubts patiently. A truly trustworthy coaching center for any parent seeking Sainik School preparation.",
      rating: 5,
      year: "2023",
    },
  ] as Testimonial[],

  // Gallery Items
  gallery: [
    {
      id: "gal-1",
      title: "Focused Classroom Mentorship",
      category: "Classroom",
      description: "Students working through problem-solving exercises in an attentive, disciplined environment.",
      aspectRatio: "video",
      imagePlaceholderText: "Classroom Session Photo",
    },
    {
      id: "gal-2",
      title: "Individual Doubt Resolution",
      category: "Teaching",
      description: "One-on-one mentor guidance helping a student master complex geometry concepts.",
      aspectRatio: "square",
      imagePlaceholderText: "Faculty Mentoring Photo",
    },
    {
      id: "gal-3",
      title: "OMR Mock Examination Hall",
      category: "Teaching",
      description: "Real-time entrance test simulation with official OMR sheet practice and invigilation.",
      aspectRatio: "video",
      imagePlaceholderText: "Mock Exam Session",
    },
    {
      id: "gal-4",
      title: "Annual Student Felicitation",
      category: "Prize Distribution",
      description: "Honoring our successful entrance examination qualifiers and board toppers with medals and shields.",
      aspectRatio: "video",
      imagePlaceholderText: "Toppers Award Ceremony",
    },
    {
      id: "gal-5",
      title: "Parent-Teacher Interactive Session",
      category: "Events",
      description: "Transparent progress reviews and study habit planning with parents.",
      aspectRatio: "square",
      imagePlaceholderText: "Parent Orientation Meeting",
    },
    {
      id: "gal-6",
      title: "Interactive Mathematics Workshop",
      category: "Classroom",
      description: "Visual calculation shortcuts and speed arithmetic practice for competitive exams.",
      aspectRatio: "tall",
      imagePlaceholderText: "Maths Workshop Photo",
    },
  ] as GalleryItem[],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      category: "Courses",
      question: "Which courses and entrance examinations do you coach for?",
      answer: "We offer dedicated preparation for AISSEE (All India Sainik Schools Entrance Examination) for both Class VI and Class IX, RMS (Rashtriya Military Schools) CET, RIMC entrance, and foundational academic coaching for Class 6 to 10 (State Board & CBSE) in Mathematics, Science, and English.",
    },
    {
      id: "faq-2",
      category: "Admissions",
      question: "How can parents enquire about admissions and batch availability?",
      answer: "The easiest and fastest way is to call our academy directly at +91 94431 23456. Our director or academic coordinator will explain upcoming batch dates, eligibility criteria, student assessment, and schedule a center visit at your convenience.",
    },
    {
      id: "faq-3",
      category: "Exams",
      question: "What is the age limit and eligibility for Sainik School entrance (AISSEE)?",
      answer: "For Class VI admission, candidates must be between 10 and 12 years of age as of 31st March of the admission year (both boys and girls eligible). For Class IX, candidates must be between 13 and 15 years as of 31st March and studying in Class VIII. We verify your child's exact date of birth during the enquiry call.",
    },
    {
      id: "faq-4",
      category: "Courses",
      question: "What study materials, worksheets, and tests are provided?",
      answer: "Enrolled students receive our comprehensive chapter-wise study booklets, formula guides, daily homework worksheets, previous 10-year question papers, and over 40+ full-length timed mock tests administered on authentic OMR sheets.",
    },
    {
      id: "faq-5",
      category: "Parent Communication",
      question: "How will parents know about their child's academic progress?",
      answer: "We conduct weekly tests and maintain an individual student score card. Parents receive regular attendance notifications and score sheets. In addition, periodic parent-teacher meetings ensure complete transparency and collaborative study planning.",
    },
    {
      id: "faq-6",
      category: "Courses",
      question: "Do you provide special support for students who are weak in Mathematics or English?",
      answer: "Yes. Every batch begins with a foundational diagnostic. Students who struggle with basic arithmetic, fractions, or English grammar receive dedicated remedial sessions after regular class hours to build confidence without pressure.",
    },
    {
      id: "faq-7",
      category: "Admissions",
      question: "Are weekend batches or holiday crash courses available?",
      answer: "Yes, we conduct intensive weekend batches for outstation students as well as full-day crash revision camps during school term breaks and summer vacations. Call us to confirm the current schedule.",
    },
  ] as FaqItem[],

  // Owner Replacement Guidance Notes
  ownerNotes: {
    howToUpdateToppers: "To update toppers, simply edit the 'toppers' array in 'src/config/siteConfig.ts'. Change the student name, marksObtained, maxMarks, year, and photoUrl.",
    howToUpdatePhone: "To update the phone number, change 'contact.primaryPhoneDisplay' and 'contact.primaryPhoneTel' in 'src/config/siteConfig.ts'. All call buttons on the website will update immediately.",
    howToUpdateAddress: "Edit 'contact.address' in 'src/config/siteConfig.ts' to update your institution address.",
  },
};
