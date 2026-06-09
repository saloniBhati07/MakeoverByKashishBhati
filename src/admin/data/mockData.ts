// ─── Types ────────────────────────────────────────────────────────────────────

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  clientName: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  package: string;
  status: BookingStatus;
  totalAmount: number;
  depositPaid: number;
  notes: string;
  createdAt: string;
  brideParty: number;
  trialDate?: string;
}

export interface Client {
  id: string;
  name: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  package: string;
  notes: string;
  totalSpend: number;
  createdAt: string;
  city: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  isActive: boolean;
  includes: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  rating: number;
  review: string;
  weddingDate: string;
  isApproved: boolean;
  isFeatured: boolean;
  source: 'google' | 'direct' | 'instagram' | 'referral';
  avatar: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  isFromClient: boolean;
}

export interface Conversation {
  id: string;
  clientName: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: ChatMessage[];
}

export interface PortfolioImage {
  id: string;
  url: string;
  category: 'Bridal' | 'Editorial' | 'Engagement' | 'Party' | 'Mehndi';
  isFeatured: boolean;
  alt: string;
  order: number;
}

export interface CalendarEvent {
  date: string;
  type: 'booked' | 'blocked' | 'trial';
  clientName?: string;
  package?: string;
}

export interface MonthlyData {
  month: string;
  bookings: number;
  revenue: number;
}

// ─── Bookings ─────────────────────────────────────────────────────────────────

export const bookings: Booking[] = [
  { id: 'BK001', clientName: 'Amelia Rosewood', partnerName: 'James Hartley', email: 'amelia.r@email.com', phone: '+44 7700 900123', weddingDate: '2025-09-14', venue: 'The Grand Pavilion, Surrey', package: 'Bridal Radiance Collection', status: 'confirmed', totalAmount: 1850, depositPaid: 500, notes: 'Prefers dewy finish, sensitive skin. No shellac.', createdAt: '2025-01-10', brideParty: 4, trialDate: '2025-08-20' },
  { id: 'BK002', clientName: 'Isabelle Laurent', partnerName: 'Hugo Moreau', email: 'isabelle.l@email.com', phone: '+44 7911 456789', weddingDate: '2025-10-05', venue: 'Château Belvedere, Kent', package: 'Eternal Glow Package', status: 'pending', totalAmount: 2400, depositPaid: 0, notes: 'Wants editorial glam look. 6 bridesmaids.', createdAt: '2025-02-01', brideParty: 6 },
  { id: 'BK003', clientName: 'Charlotte Weston', partnerName: 'Oliver Banks', email: 'charlotte.w@email.com', phone: '+44 7800 111222', weddingDate: '2025-07-19', venue: 'Blenheim Estate, Oxford', package: 'Bridal Radiance Collection', status: 'confirmed', totalAmount: 1850, depositPaid: 500, notes: 'Classic elegant look. Prefers nude tones.', createdAt: '2025-01-28', brideParty: 3, trialDate: '2025-06-25' },
  { id: 'BK004', clientName: 'Priya Sharma', partnerName: 'Arjun Kapoor', email: 'priya.s@email.com', phone: '+44 7555 888999', weddingDate: '2025-08-23', venue: 'The Meridian Hall, London', package: 'Maharani Bridal Suite', status: 'confirmed', totalAmount: 3200, depositPaid: 800, notes: 'South Asian bridal look. Gold eye makeup essential.', createdAt: '2025-01-15', brideParty: 8, trialDate: '2025-07-30' },
  { id: 'BK005', clientName: 'Sophie Ainsworth', partnerName: 'Thomas Leigh', email: 'sophie.a@email.com', phone: '+44 7222 333444', weddingDate: '2025-11-08', venue: 'Harlow Manor, Essex', package: 'Blush & Bloom Duo', status: 'pending', totalAmount: 1200, depositPaid: 0, notes: 'Bohemian garden wedding vibe.', createdAt: '2025-02-12', brideParty: 2 },
  { id: 'BK006', clientName: 'Eleanor Voss', partnerName: 'Frederick Nash', email: 'eleanor.v@email.com', phone: '+44 7321 654987', weddingDate: '2024-12-07', venue: 'Winter Gardens, Bath', package: 'Eternal Glow Package', status: 'completed', totalAmount: 2400, depositPaid: 2400, notes: 'Stunning ivory look delivered. Client was thrilled.', createdAt: '2024-09-01', brideParty: 5 },
  { id: 'BK007', clientName: 'Natasha Bloom', partnerName: 'Daniel Frost', email: 'natasha.b@email.com', phone: '+44 7444 777888', weddingDate: '2024-11-02', venue: 'Ashwood Park, Cambridge', package: 'Bridal Radiance Collection', status: 'completed', totalAmount: 1850, depositPaid: 1850, notes: 'Autumn tones. Warm copper eye look requested.', createdAt: '2024-08-20', brideParty: 3 },
  { id: 'BK008', clientName: 'Victoria Chen', partnerName: 'Michael Tan', email: 'victoria.c@email.com', phone: '+44 7678 234567', weddingDate: '2025-06-21', venue: 'The Ivory Suite, Mayfair', package: 'Eternal Glow Package', status: 'confirmed', totalAmount: 2400, depositPaid: 600, notes: 'Clean minimal look. Very specific about brows.', createdAt: '2025-01-05', brideParty: 4, trialDate: '2025-05-28' },
  { id: 'BK009', clientName: 'Grace O\'Reilly', partnerName: 'Patrick Walsh', email: 'grace.or@email.com', phone: '+44 7101 202303', weddingDate: '2025-09-27', venue: 'Cliffside Manor, Devon', package: 'Blush & Bloom Duo', status: 'cancelled', totalAmount: 1200, depositPaid: 300, notes: 'Cancelled due to venue change. Refund processed.', createdAt: '2025-01-20', brideParty: 2 },
  { id: 'BK010', clientName: 'Layla Hassan', partnerName: 'Yasir Al-Rashid', email: 'layla.h@email.com', phone: '+44 7888 100200', weddingDate: '2025-08-09', venue: 'The Crystal Ballroom, Birmingham', package: 'Maharani Bridal Suite', status: 'confirmed', totalAmount: 3200, depositPaid: 1000, notes: 'Arabic bridal makeup. Bold kohl liner important.', createdAt: '2025-01-30', brideParty: 7, trialDate: '2025-07-15' },
  { id: 'BK011', clientName: 'Rose Pemberton', partnerName: 'Arthur Greenwood', email: 'rose.p@email.com', phone: '+44 7500 600700', weddingDate: '2025-12-20', venue: 'Snowshill Estate, Cotswolds', package: 'Bridal Radiance Collection', status: 'pending', totalAmount: 1850, depositPaid: 0, notes: 'Winter wedding. Wants rose pink tones.', createdAt: '2025-02-20', brideParty: 4 },
  { id: 'BK012', clientName: 'Mei-Ling Park', partnerName: 'Jin-Ho Kim', email: 'meiling.p@email.com', phone: '+44 7300 400500', weddingDate: '2025-07-05', venue: 'Oriental Garden, London', package: 'Eternal Glow Package', status: 'confirmed', totalAmount: 2400, depositPaid: 600, notes: 'Korean traditional elements mixed with modern.', createdAt: '2025-01-08', brideParty: 5, trialDate: '2025-06-12' },
];

// ─── Clients ──────────────────────────────────────────────────────────────────

export const clients: Client[] = [
  { id: 'CL001', name: 'Amelia Rosewood', partnerName: 'James Hartley', email: 'amelia.r@email.com', phone: '+44 7700 900123', weddingDate: '2025-09-14', venue: 'The Grand Pavilion, Surrey', package: 'Bridal Radiance Collection', notes: 'Sensitive skin, prefers dewy finish. Very detail-oriented client.', totalSpend: 1850, createdAt: '2025-01-10', city: 'London' },
  { id: 'CL002', name: 'Victoria Chen', partnerName: 'Michael Tan', email: 'victoria.c@email.com', phone: '+44 7678 234567', weddingDate: '2025-06-21', venue: 'The Ivory Suite, Mayfair', package: 'Eternal Glow Package', notes: 'Very precise about brow shape. Prefers minimal shimmer.', totalSpend: 2400, createdAt: '2025-01-05', city: 'London' },
  { id: 'CL003', name: 'Priya Sharma', partnerName: 'Arjun Kapoor', email: 'priya.s@email.com', phone: '+44 7555 888999', weddingDate: '2025-08-23', venue: 'The Meridian Hall, London', package: 'Maharani Bridal Suite', notes: 'Multi-day event. Also booked for reception makeup.', totalSpend: 3200, createdAt: '2025-01-15', city: 'Wembley' },
  { id: 'CL004', name: 'Charlotte Weston', partnerName: 'Oliver Banks', email: 'charlotte.w@email.com', phone: '+44 7800 111222', weddingDate: '2025-07-19', venue: 'Blenheim Estate, Oxford', package: 'Bridal Radiance Collection', notes: 'Classic look. Has bridesmaid makeup package too.', totalSpend: 1850, createdAt: '2025-01-28', city: 'Oxford' },
  { id: 'CL005', name: 'Eleanor Voss', partnerName: 'Frederick Nash', email: 'eleanor.v@email.com', phone: '+44 7321 654987', weddingDate: '2024-12-07', venue: 'Winter Gardens, Bath', package: 'Eternal Glow Package', notes: 'Past client. Excellent review left. Referred 2 friends.', totalSpend: 2400, createdAt: '2024-09-01', city: 'Bath' },
  { id: 'CL006', name: 'Layla Hassan', partnerName: 'Yasir Al-Rashid', email: 'layla.h@email.com', phone: '+44 7888 100200', weddingDate: '2025-08-09', venue: 'The Crystal Ballroom, Birmingham', package: 'Maharani Bridal Suite', notes: 'Bold Arabic makeup style. Henna ceremony makeup also needed.', totalSpend: 3200, createdAt: '2025-01-30', city: 'Birmingham' },
  { id: 'CL007', name: 'Natasha Bloom', partnerName: 'Daniel Frost', email: 'natasha.b@email.com', phone: '+44 7444 777888', weddingDate: '2024-11-02', venue: 'Ashwood Park, Cambridge', package: 'Bridal Radiance Collection', notes: 'Past client. Loved warm autumn look. Shared on Instagram.', totalSpend: 1850, createdAt: '2024-08-20', city: 'Cambridge' },
  { id: 'CL008', name: 'Mei-Ling Park', partnerName: 'Jin-Ho Kim', email: 'meiling.p@email.com', phone: '+44 7300 400500', weddingDate: '2025-07-05', venue: 'Oriental Garden, London', package: 'Eternal Glow Package', notes: 'Fusion modern-traditional. Needs long-lasting formula.', totalSpend: 2400, createdAt: '2025-01-08', city: 'London' },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  { id: 'SV001', name: 'Bridal Radiance Collection', description: 'Our signature bridal package designed for the modern bride who desires a luminous, long-lasting look that photographs beautifully.', price: 1850, duration: '6 hrs', category: 'Bridal', isActive: true, includes: ['Bridal makeup trial', 'Wedding day full glam', '3 bridesmaids', 'On-site touch-up kit', 'Lash application'] },
  { id: 'SV002', name: 'Eternal Glow Package', description: 'An all-inclusive luxury package for the bride and her full party, ensuring everyone looks radiant from ceremony to reception.', price: 2400, duration: '8 hrs', category: 'Bridal', isActive: true, includes: ['Bridal makeup trial', 'Wedding day bridal makeup', 'Up to 5 bridesmaids', 'Mother of the bride', 'Premium lashes included', 'Touch-up on arrival'] },
  { id: 'SV003', name: 'Maharani Bridal Suite', description: 'A bespoke experience for South Asian and Middle Eastern brides, celebrating rich traditions with flawless technique.', price: 3200, duration: '10 hrs', category: 'Bridal', isActive: true, includes: ['Bridal trial (2 sessions)', 'Wedding day bridal', 'Up to 7 bridal party', 'Mehndi ceremony makeup', 'Reception makeup touch-up', 'Premium products only'] },
  { id: 'SV004', name: 'Blush & Bloom Duo', description: 'Perfect for intimate weddings and elopements. Elegant, effortless makeup for the bride and one guest.', price: 1200, duration: '4 hrs', category: 'Bridal', isActive: true, includes: ['1 makeup trial', 'Wedding day bridal makeup', '1 bridesmaid or mother', 'Lash application'] },
  { id: 'SV005', name: 'Editorial Glam', description: 'High-fashion editorial looks for shoots, campaigns, and styled photoshoots.', price: 450, duration: '3 hrs', category: 'Editorial', isActive: true, includes: ['Consultation', 'Full editorial makeup', 'On-set adjustments', 'Multiple look changes'] },
  { id: 'SV006', name: 'Engagement Session', description: 'Look your best for your engagement shoot with a naturally glowing, camera-ready look.', price: 380, duration: '2 hrs', category: 'Bridal', isActive: true, includes: ['Skin prep consultation', 'Natural glam makeup', 'Lash application', 'Touch-up kit'] },
  { id: 'SV007', name: 'Bridal Trial', description: 'Dedicated trial session to perfect your wedding day look before the big day.', price: 280, duration: '3 hrs', category: 'Bridal', isActive: true, includes: ['Full makeup application', 'Style consultation', 'Photos for reference', 'Product recommendations'] },
  { id: 'SV008', name: 'Prom & Special Event', description: 'Glamorous looks for proms, galas, black-tie events, and special occasions.', price: 220, duration: '1.5 hrs', category: 'Special Event', isActive: false, includes: ['Consultation', 'Full glam makeup', 'Lash application'] },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  { id: 'TM001', clientName: 'Eleanor Voss', rating: 5, review: 'Sophia is nothing short of a miracle worker. I had tears in my eyes (happy ones!) when I saw myself in the mirror. The makeup lasted the entire day and into the night — not a single touch-up needed. I cannot recommend her enough.', weddingDate: '2024-12-07', isApproved: true, isFeatured: true, source: 'google', avatar: 'EV' },
  { id: 'TM002', clientName: 'Natasha Bloom', rating: 5, review: 'From the first trial to the wedding morning, Sophia made me feel so at ease. She listened to everything I wanted and delivered a look that was 10x better than I imagined. My photos are STUNNING.', weddingDate: '2024-11-02', isApproved: true, isFeatured: true, source: 'instagram', avatar: 'NB' },
  { id: 'TM003', clientName: 'Sophie Ainsworth', rating: 5, review: 'Absolutely breathtaking work. Sophia understood my bohemian vision instantly. The earthy, romantic look was perfect for our garden wedding. Every single guest complimented my makeup.', weddingDate: '2025-03-15', isApproved: true, isFeatured: false, source: 'direct', avatar: 'SA' },
  { id: 'TM004', clientName: 'Mei-Ling Park', rating: 5, review: 'I wanted something modern yet respectful of my Korean heritage. Sophia researched and consulted beautifully — the result was absolutely perfect. My mother cried. I cried. Perfect day.', weddingDate: '2024-09-28', isApproved: true, isFeatured: true, source: 'google', avatar: 'MP' },
  { id: 'TM005', clientName: 'Rebecca Alderton', rating: 4, review: 'Wonderful experience overall. Sophia was professional, warm, and incredibly talented. The makeup was gorgeous and lasted all day. Would highly recommend to any bride.', weddingDate: '2024-10-12', isApproved: true, isFeatured: false, source: 'google', avatar: 'RA' },
  { id: 'TM006', clientName: 'Priya Sharma', rating: 5, review: 'As a South Asian bride, I needed someone who truly understood the tradition and drama of Maharani makeup. Sophia exceeded every expectation. My whole family was in awe. Absolutely magical.', weddingDate: '2024-08-17', isApproved: false, isFeatured: false, source: 'direct', avatar: 'PS' },
  { id: 'TM007', clientName: 'Grace O\'Reilly', rating: 4, review: 'Sophia is incredibly talented and made me feel so beautiful. The attention to detail is unmatched. My only tiny note is the trial ran slightly over time, but the end result was worth every minute!', weddingDate: '2024-07-06', isApproved: true, isFeatured: false, source: 'referral', avatar: 'GO' },
  { id: 'TM008', clientName: 'Amara Okafor', rating: 5, review: 'I have darker skin and have often struggled with artists who don\'t know how to work with my undertones. Sophia was EXCEPTIONAL. She matched my skin flawlessly and the look was magazine-worthy.', weddingDate: '2025-02-22', isApproved: false, isFeatured: false, source: 'instagram', avatar: 'AO' },
];

// ─── Messages ─────────────────────────────────────────────────────────────────

export const conversations: Conversation[] = [
  {
    id: 'MSG001', clientName: 'Isabelle Laurent', avatar: 'IL', unread: 2,
    lastMessage: 'Could we discuss adding a hair styling service?', timestamp: '10:32 AM',
    messages: [
      { id: 'm1', text: 'Hello Sophia! I\'m so excited about my upcoming booking. I had a quick question about the bridesmaid makeup.', timestamp: '9:15 AM', isFromClient: true },
      { id: 'm2', text: 'Of course, Isabelle! I\'m so excited to work with you. What did you have in mind?', timestamp: '9:42 AM', isFromClient: false },
      { id: 'm3', text: 'I have 6 bridesmaids but I was wondering if we could do lighter, more natural looks for 3 of them? They prefer minimal makeup.', timestamp: '9:48 AM', isFromClient: true },
      { id: 'm4', text: 'Absolutely! I always tailor each look to the individual. We can do a full glam for some and a fresh natural look for others — it will all be cohesive and beautiful.', timestamp: '10:01 AM', isFromClient: false },
      { id: 'm5', text: 'That\'s wonderful! Also, could we discuss adding a hair styling service as well?', timestamp: '10:32 AM', isFromClient: true },
    ]
  },
  {
    id: 'MSG002', clientName: 'Rose Pemberton', avatar: 'RP', unread: 1,
    lastMessage: 'Thank you so much! See you at the trial.', timestamp: 'Yesterday',
    messages: [
      { id: 'm1', text: 'Hi Sophia, I\'ve just put down a deposit! I\'m so thrilled to be working with you for my winter wedding.', timestamp: 'Yesterday 2:10 PM', isFromClient: true },
      { id: 'm2', text: 'Welcome, Rose! I\'m absolutely delighted. A winter wedding is so magical — I already have some beautiful ideas for a rosy, warm look that will glow in the candlelight.', timestamp: 'Yesterday 3:45 PM', isFromClient: false },
      { id: 'm3', text: 'That sounds perfect! Thank you so much! See you at the trial.', timestamp: 'Yesterday 4:00 PM', isFromClient: true },
    ]
  },
  {
    id: 'MSG003', clientName: 'Amara Okafor', avatar: 'AO', unread: 0,
    lastMessage: 'Looking forward to it!', timestamp: 'Mon',
    messages: [
      { id: 'm1', text: 'Hello, I found you through Instagram and I am completely in love with your work. I would love to book you for my February wedding.', timestamp: 'Mon 11:00 AM', isFromClient: true },
      { id: 'm2', text: 'Thank you so much, Amara! I would love to discuss your vision. Do you have a preferred package in mind?', timestamp: 'Mon 12:30 PM', isFromClient: false },
      { id: 'm3', text: 'I was thinking the Eternal Glow Package. I have 4 bridesmaids.', timestamp: 'Mon 1:00 PM', isFromClient: true },
      { id: 'm4', text: 'Perfect choice! I\'ll send over a booking form shortly. I\'m so excited to work together!', timestamp: 'Mon 1:15 PM', isFromClient: false },
      { id: 'm5', text: 'Looking forward to it!', timestamp: 'Mon 1:20 PM', isFromClient: true },
    ]
  },
  {
    id: 'MSG004', clientName: 'Sophie Ainsworth', avatar: 'SA', unread: 3,
    lastMessage: 'Can you confirm our trial date please?', timestamp: 'Sun',
    messages: [
      { id: 'm1', text: 'Hi! I haven\'t received the trial date confirmation yet. Is everything on track?', timestamp: 'Sun 9:00 AM', isFromClient: true },
      { id: 'm2', text: 'So sorry for the delay, Sophie! Let me check my calendar and get back to you today.', timestamp: 'Sun 10:30 AM', isFromClient: false },
      { id: 'm3', text: 'No worries! Can you confirm our trial date please?', timestamp: 'Sun 4:00 PM', isFromClient: true },
    ]
  },
];

// ─── Portfolio ────────────────────────────────────────────────────────────────

export const portfolioImages: PortfolioImage[] = [
  { id: 'P001', url: 'https://picsum.photos/seed/bride1/600/750', category: 'Bridal', isFeatured: true, alt: 'Ethereal bridal glam', order: 1 },
  { id: 'P002', url: 'https://picsum.photos/seed/bride2/600/750', category: 'Bridal', isFeatured: true, alt: 'Natural dewy bridal', order: 2 },
  { id: 'P003', url: 'https://picsum.photos/seed/edit1/600/750', category: 'Editorial', isFeatured: true, alt: 'High fashion editorial', order: 3 },
  { id: 'P004', url: 'https://picsum.photos/seed/bride3/600/750', category: 'Bridal', isFeatured: false, alt: 'Classic bridal ivory', order: 4 },
  { id: 'P005', url: 'https://picsum.photos/seed/party1/600/750', category: 'Party', isFeatured: false, alt: 'Party glam smoky eye', order: 5 },
  { id: 'P006', url: 'https://picsum.photos/seed/bride4/600/750', category: 'Bridal', isFeatured: false, alt: 'Romantic garden bridal', order: 6 },
  { id: 'P007', url: 'https://picsum.photos/seed/engage1/600/750', category: 'Engagement', isFeatured: true, alt: 'Engagement natural glow', order: 7 },
  { id: 'P008', url: 'https://picsum.photos/seed/mehndi1/600/750', category: 'Mehndi', isFeatured: false, alt: 'Mehndi ceremony look', order: 8 },
  { id: 'P009', url: 'https://picsum.photos/seed/edit2/600/750', category: 'Editorial', isFeatured: false, alt: 'Avant-garde editorial', order: 9 },
  { id: 'P010', url: 'https://picsum.photos/seed/bride5/600/750', category: 'Bridal', isFeatured: false, alt: 'Bohemian bridal glow', order: 10 },
  { id: 'P011', url: 'https://picsum.photos/seed/bride6/600/750', category: 'Bridal', isFeatured: false, alt: 'South Asian bridal', order: 11 },
  { id: 'P012', url: 'https://picsum.photos/seed/engage2/600/750', category: 'Engagement', isFeatured: false, alt: 'Engagement soft glam', order: 12 },
];

// ─── Calendar Events ──────────────────────────────────────────────────────────

export const calendarEvents: CalendarEvent[] = [
  { date: '2025-06-07', type: 'booked', clientName: 'Victoria Chen', package: 'Eternal Glow Package' },
  { date: '2025-06-14', type: 'booked', clientName: 'Charlotte Weston', package: 'Bridal Radiance' },
  { date: '2025-06-21', type: 'booked', clientName: 'Victoria Chen (Wedding Day)', package: 'Eternal Glow Package' },
  { date: '2025-06-28', type: 'blocked' },
  { date: '2025-07-05', type: 'booked', clientName: 'Mei-Ling Park', package: 'Eternal Glow Package' },
  { date: '2025-07-12', type: 'trial', clientName: 'Amelia Rosewood', package: 'Bridal Radiance' },
  { date: '2025-07-19', type: 'booked', clientName: 'Charlotte Weston (Wedding Day)', package: 'Bridal Radiance' },
  { date: '2025-07-26', type: 'blocked' },
  { date: '2025-08-02', type: 'blocked' },
  { date: '2025-08-09', type: 'booked', clientName: 'Layla Hassan', package: 'Maharani Suite' },
  { date: '2025-08-16', type: 'blocked' },
  { date: '2025-08-23', type: 'booked', clientName: 'Priya Sharma', package: 'Maharani Suite' },
];

// ─── Chart Data ───────────────────────────────────────────────────────────────

export const monthlyData: MonthlyData[] = [
  { month: 'Jan', bookings: 3, revenue: 5550 },
  { month: 'Feb', bookings: 5, revenue: 9250 },
  { month: 'Mar', bookings: 7, revenue: 12950 },
  { month: 'Apr', bookings: 4, revenue: 7400 },
  { month: 'May', bookings: 9, revenue: 16650 },
  { month: 'Jun', bookings: 11, revenue: 20350 },
  { month: 'Jul', bookings: 8, revenue: 14800 },
  { month: 'Aug', bookings: 10, revenue: 18500 },
  { month: 'Sep', bookings: 12, revenue: 22200 },
  { month: 'Oct', bookings: 6, revenue: 11100 },
  { month: 'Nov', bookings: 5, revenue: 9250 },
  { month: 'Dec', bookings: 4, revenue: 7400 },
];

// ─── Dashboard Stats ──────────────────────────────────────────────────────────

export const dashboardStats = {
  totalBookings: { value: 84, trend: +12, label: 'Total Bookings' },
  upcomingWeddings: { value: 9, trend: +3, label: 'Upcoming Weddings' },
  newInquiries: { value: 6, trend: +8, label: 'New Inquiries' },
  monthlyRevenue: { value: 22200, trend: +15, label: 'Monthly Revenue' },
};
