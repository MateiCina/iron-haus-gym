export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Area', href: '/area' },
];

export const heroStats = [
  { value: '12', label: 'Years Strong' },
  { value: '40+', label: 'Weekly Classes' },
  { value: '5', label: 'Head Coaches' },
  { value: '2,400', label: 'Members' },
];

export const heroIntro = {
  eyebrow: 'Strength Club · Est. 2014',
  title: 'Where strength is forged.',
  description:
    'A no-nonsense strength & conditioning club in the heart of the East Docklands. Serious iron, expert coaching, and a floor built for people who show up.',
  ctaPrimary: { label: 'Join Now', href: '/pricing' },
  ctaSecondary: { label: 'Take a Tour', href: '/area' },
};

export const aboutTags = [
  'Free Weights',
  'Competition Platforms',
  'Sled Turf',
  'Strongman Kit',
  'Recovery Suite',
];

export const services = [
  {
    title: 'Strength Training',
    description:
      'Barbell, dumbbell and machine work on a floor built for heavy days — no waiting for a rack.',
    icon: 'strength',
  },
  {
    title: 'Functional & Conditioning',
    description:
      'Sled turf, rigs and metabolic circuits to build engine and athleticism, not just size.',
    icon: 'functional',
  },
  {
    title: '1-on-1 Coaching',
    description:
      'Personal programming with a dedicated coach who tracks your numbers and adjusts weekly.',
    icon: 'coaching',
  },
  {
    title: 'Group Classes',
    description:
      'Over 40 coached sessions a week — strength, HIIT, mobility and more, all included.',
    icon: 'group',
  },
  {
    title: 'Recovery & Mobility',
    description:
      'Sauna, cold plunge, foam and stretch zones so you come back stronger every session.',
    icon: 'recovery',
  },
  {
    title: 'Nutrition Coaching',
    description:
      'Practical fuelling plans built around your goals, schedule and the food you actually eat.',
    icon: 'nutrition',
  },
];

export const trainers = [
  {
    name: 'Sara Kovač',
    role: 'Head Coach',
    description:
      'Powerlifting & strength programming. Ex-national deadlift record holder who has coached over 200 members to their first platform.',
    image: '/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg',
    initials: 'SK',
    tags: ['Powerlifting', 'Programming', 'L4 S&C'],
  },
  {
    name: 'Marcus Reid',
    role: 'S&C Coach',
    description:
      'Ten years ringside and pitchside. Marcus builds explosive strength and conditioning for combat athletes and team-sport players.',
    initials: 'MR',
    tags: ['Combat', 'HIIT', 'Speed'],
  },
  {
    name: 'Elena Voss',
    role: 'Mobility Lead',
    description:
      'Movement, rehab and mobility specialist. Elena keeps members lifting heavy and pain-free — and runs our recovery and prehab programming.',
    initials: 'EV',
    tags: ['Mobility', 'Rehab', 'Physio'],
  },
  {
    name: 'Deniz Aydın',
    role: 'Conditioning',
    description:
      'Marathon finisher and certified Hyrox coach. Deniz runs our engine work — metabolic conditioning, endurance and hybrid athlete programming.',
    initials: 'DA',
    tags: ['Hyrox', 'Endurance', 'Conditioning'],
  },
];

export const galleryItems = [
  {
    label: 'Free Weights',
    image: '/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg',
    span: 'span 2',
    isPhoto: true,
  },
  { label: 'Squat Racks', span: 'span 1', isPhoto: false },
  { label: 'Cardio Deck', span: 'span 1', isPhoto: false },
  { label: 'Sled Turf', span: 'span 1', isPhoto: false },
  { label: 'Combat Zone', span: 'span 1', isPhoto: false },
  { label: 'Recovery Suite', span: 'span 2', isPhoto: false },
];

export const pricingPlans = [
  {
    name: 'Basic',
    price: '£24',
    tagline: 'Off-peak access, train solo.',
    features: [
      'Off-peak floor access (9am–4pm)',
      'Full free-weight & machine floor',
      'Locker & shower access',
      'Member app',
    ],
    cta: 'Choose Basic',
    featured: false,
  },
  {
    name: 'Iron',
    price: '£54',
    tagline: 'Full access + every class.',
    features: [
      '24/7 unlimited access',
      'All 40+ classes included',
      'Recovery suite: sauna & cold plunge',
      '1 free coaching session / month',
      'Bring-a-friend passes',
    ],
    cta: 'Join Now',
    featured: true,
  },
  {
    name: 'Unlimited',
    price: '£104',
    tagline: 'Coaching-led membership.',
    features: [
      'Everything in Iron',
      'Weekly 1-on-1 coaching',
      'Personalised programming',
      'Monthly nutrition review',
      'Priority class booking',
    ],
    cta: 'Choose Unlimited',
    featured: false,
  },
];

export const dayPass = {
  title: 'Just visiting? Day Pass £12',
  description:
    'Full floor and class access for the day. Redeemable against your first month if you join.',
  cta: 'Get a Day Pass',
};

export const faqItems = [
  {
    question: 'Is there a contract?',
    answer:
      'No. All memberships are rolling monthly — cancel or freeze any time with 14 days\' notice.',
  },
  {
    question: 'Are classes included?',
    answer:
      'Every class is included on Iron and Unlimited plans — over 40 a week. Basic is floor access only.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Yes — freeze for up to three months a year at no charge, for travel, injury or anything else.',
  },
  {
    question: 'Do you offer student rates?',
    answer:
      'Students and NHS staff get 15% off any plan. Just bring valid ID when you sign up in club.',
  },
];

export const scheduleDays = [
  {
    day: 'Mon',
    sessions: [
      { time: '06:30', name: 'Strength', coach: 'Sara' },
      { time: '12:15', name: 'Conditioning', coach: 'Deniz' },
      { time: '18:30', name: 'Powerlifting', coach: 'Sara' },
    ],
  },
  {
    day: 'Tue',
    sessions: [
      { time: '07:00', name: 'HIIT', coach: 'Marcus' },
      { time: '18:00', name: 'Mobility', coach: 'Elena' },
      { time: '19:15', name: 'Hyrox', coach: 'Deniz' },
    ],
  },
  {
    day: 'Wed',
    sessions: [
      { time: '06:30', name: 'Strength', coach: 'Sara' },
      { time: '12:15', name: 'Combat Fit', coach: 'Marcus' },
      { time: '18:30', name: 'Conditioning', coach: 'Deniz' },
    ],
  },
  {
    day: 'Thu',
    sessions: [
      { time: '07:00', name: 'Olympic Lift', coach: 'Sara' },
      { time: '18:00', name: 'HIIT', coach: 'Marcus' },
      { time: '19:15', name: 'Mobility', coach: 'Elena' },
    ],
  },
  {
    day: 'Fri',
    sessions: [
      { time: '06:30', name: 'Strength', coach: 'Sara' },
      { time: '17:30', name: 'Hyrox', coach: 'Deniz' },
      { time: '18:45', name: 'Open Gym', coach: 'Team' },
    ],
  },
  {
    day: 'Sat',
    sessions: [
      { time: '09:00', name: 'Team WOD', coach: 'Marcus' },
      { time: '10:30', name: 'Strength', coach: 'Sara' },
      { time: '12:00', name: 'Recovery', coach: 'Elena' },
    ],
  },
  {
    day: 'Sun',
    sessions: [
      { time: '10:00', name: 'Conditioning', coach: 'Deniz' },
      { time: '11:30', name: 'Mobility', coach: 'Elena' },
      { time: '13:00', name: 'Open Gym', coach: 'Team' },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'I added 40kg to my deadlift in a year. The coaching is the real deal — they actually program for you, not for a poster on the wall.',
    name: 'Tom H.',
    role: 'Member, 2 years',
    initials: 'TH',
  },
  {
    quote:
      'First gym I\'ve walked into and felt at home. No egos, no waiting for equipment, and the recovery suite is unreal after leg day.',
    name: 'Priya S.',
    role: 'Member, 8 months',
    initials: 'PS',
  },
  {
    quote:
      'Went from never having trained to competing in my first Hyrox. Deniz and the crew changed how I think about fitness entirely.',
    name: 'Alex M.',
    role: 'Member, 1 year',
    initials: 'AM',
  },
];

export const hours = [
  { label: 'Mon – Fri', time: '05:00 – 23:00' },
  { label: 'Saturday', time: '07:00 – 21:00' },
  { label: 'Sunday', time: '08:00 – 20:00' },
];

export const aboutValues = [
  {
    title: 'No Egos',
    description:
      'Leave the attitude at the door. First-timers and competitors train on the same floor.',
    icon: 'x',
  },
  {
    title: 'Real Coaching',
    description:
      'Our coaches program for your goals and track your numbers — never generic plans.',
    icon: 'coach',
  },
  {
    title: 'Always Open',
    description:
      '24/7 access on Iron & Unlimited plans. Train on your schedule, not ours.',
    icon: 'clock',
  },
  {
    title: 'Built To Last',
    description:
      'Mobility and recovery are part of the plan, so you keep lifting for decades.',
    icon: 'heart',
  },
];

export const timeline = [
  {
    year: '2014',
    text: 'Founded in a 4,000 sq ft railway arch with three racks, a rusty bar, and a lot of ambition.',
  },
  {
    year: '2017',
    text: 'Doubled to 8,000 sq ft and installed competition platforms and calibrated plates.',
  },
  {
    year: '2020',
    text: 'Opened the recovery suite — sauna, cold plunge and a dedicated mobility zone.',
  },
  {
    year: '2023',
    text: 'Grew to 12,000 sq ft across two floors and launched 40+ coached classes a week.',
  },
  {
    year: '2026',
    text: '2,400 members strong, still independent, and still coach-led.',
  },
];

export const aboutStats = [
  { value: '12', label: 'Years Strong' },
  { value: '12,000', label: 'Sq Ft Of Iron' },
  { value: '5', label: 'Head Coaches' },
  { value: '2,400', label: 'Members' },
];

export const coachingSteps = [
  {
    number: '01',
    title: 'Assessment',
    description:
      'A full movement screen and goal-setting session so your coach knows exactly where you\'re starting.',
  },
  {
    number: '02',
    title: 'Your Program',
    description:
      'A written plan built around your schedule and goals, adjusted every week based on your numbers.',
  },
  {
    number: '03',
    title: 'On The Floor',
    description:
      'Hands-on coaching during your sessions — technique, cues and accountability every step.',
  },
];

export const equipmentZones = [
  {
    title: 'Free Weights',
    items: ['Competition barbells', 'Dumbbells & kettlebells', 'Plate-loaded machines', 'Racks & benches'],
  },
  {
    title: 'Racks & Platforms',
    items: ['Squat stands', 'Deadlift platforms', 'Bench rigs', 'Competition plates'],
  },
  {
    title: 'Machines',
    items: ['Cable towers', 'Hammer strength', 'Leg press', 'Conditioning rigs'],
  },
  {
    title: 'Conditioning & Turf',
    items: ['Sled lanes', 'Prowlers', 'Rowers', 'Battling ropes'],
  },
  {
    title: 'Cardio Deck',
    items: ['Assault bikes', 'Treadmills', 'Runners', 'Ski ergs'],
  },
  {
    title: 'Recovery Suite',
    items: ['Sauna', 'Cold plunge', 'Stretch zone', 'Self-massage tools'],
  },
];

export const classTypes = [
  {
    title: 'Strength',
    description: 'Coached barbell work — squat, press, pull. Build a base with proper progression.',
  },
  {
    title: 'Powerlifting',
    description: 'Squat, bench and deadlift technique and peaking for competition or PRs.',
  },
  {
    title: 'Olympic Lifting',
    description: 'Snatch and clean & jerk skill work for power and athleticism.',
  },
  {
    title: 'HIIT',
    description: 'Short, intense circuits to spike your heart rate and burn. High energy, all levels.',
  },
  {
    title: 'Hyrox',
    description: 'Race-specific conditioning — runs, sleds, wall balls and functional stations.',
  },
  {
    title: 'Mobility & Recovery',
    description: 'Guided mobility, breathing and soft-tissue work to keep you moving well.',
  },
];

export const gettingHereCards = [
  {
    title: 'By DLR',
    description:
      '2 min walk from Dockside DLR. Trains every 5–8 minutes from Bank and Stratford.',
  },
  {
    title: 'By Bus',
    description:
      'Routes 147, 300 and D3 stop on Dockside Road, right outside the entrance.',
  },
  {
    title: 'Parking',
    description:
      'Free member parking for 40 cars on-site. EV charging at four bays.',
  },
  {
    title: 'By Bike',
    description:
      'Secure indoor bike storage and a docking station 50m along the quay.',
  },
];

export const contactInfo = {
  address: ['Unit 4, The Ironworks', '112 Dockside Road', 'East Docklands, E16 2QR'],
  phone: '020 7946 0114',
  email: 'train@ironhaus.club',
};

export const classSchedule = [
  {
    day: 'Monday',
    time: '06:30 – 07:30',
    className: 'Strength Review',
    description: 'Barbell progressions and technique coaching for serious lifts.',
  },
  {
    day: 'Tuesday',
    time: '18:00 – 19:00',
    className: 'Conditioning Metcon',
    description: 'High-intensity circuits to build engine and work capacity.',
  },
  {
    day: 'Wednesday',
    time: '12:15 – 13:15',
    className: 'Powerlifting',
    description: 'Squat, bench and deadlift focus with manual load adjustments.',
  },
  {
    day: 'Thursday',
    time: '19:15 – 20:15',
    className: 'Mobility & Recovery',
    description: 'Banded mobility, breathing, and soft tissue prep for the week.',
  },
  {
    day: 'Friday',
    time: '17:30 – 18:30',
    className: 'Hyrox Skills',
    description: 'Work capacity rounds with sleds, wall balls, and running transitions.',
  },
  {
    day: 'Saturday',
    time: '10:00 – 11:00',
    className: 'Open Gym Session',
    description: 'Coach-led floor time with programming and troubleshooting support.',
  },
];

export const scheduleIntro = {
  title: 'Train smarter, not harder.',
  description:
    'Our class schedule is built to balance strength, recovery and performance across the week. Every session has a clear focus and coach-led structure.',
  bullets: [
    'Strength classes with progressive loading',
    'Conditioning built around recovery and volume',
    'Mobility sessions to keep you training pain free',
  ],
};
