export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  homeTitle: string;
  homeSummary: string;
  cardLead: string;
  cardBody: string;
  image: string;
  heroImage: string;
  contentImage: string;
  blocks: Block[];
}

export type ProjectCategory = "residential" | "commercial" | "renovation" | "engineering";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  image: string;
  gallery: string[];
  duration: string;
  budget: string;
  goals: string;
  solutions: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  image: string;
  excerpt: string;
  category: string;
  blocks: Block[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const site = {
  name: "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS",
  short: "FRANSARE 40",
  phone: "+233 24 385 3715",
  phoneHref: "tel:+233243853715",
  whatsapp: "+233 24 385 3715",
  whatsappHref: "https://wa.me/233243853715",
  email: "info@archline.com",
  emailHref: "mailto:info@archline.com",
  category: "Architectural designer, Engineering & Construction Works",
  location: "Kumasi, Ghana",
  address: "Opposite AAMUSTED west gate, AK - 694 3231 Tanoso - Apatrapa, Junction, Kumasi, Ghana",
  hours: "Monday–Friday, 8:00 AM – 6:00 PM",
  hoursNote: "Closes 6:00 PM",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Opposite%20AAMUSTED%20west%20gate%20Tanoso%20Apatrapa%20Kumasi%20Ghana",
  about:
    "Foundation of the building will be solidify if you choose the right path. For all your Building works come to FRANSARE40 ENGINEERING & CONSTRUCTION WORKS and let's get it done.",
  heroSub: "From architecture to construction, FRANSARE 40 delivers projects that stand the test of time.",
  availability:
    "Whether it’s a question, an update, or a site visit, our team is available Monday to Friday, 8:00 AM – 6:00 PM.",
  footerBlurb:
    "Foundation of the building will be solidify if you choose the right path. For all your Building works come to FRANSARE40 ENGINEERING & CONSTRUCTION WORKS and let's get it done.",
  designer: { name: "Dleading Creative Design Ltd", href: "https://www.creativedleading.co.uk/" },
};

export const heroSlides = [
  "/images/bg-4.jpg",
  "/images/bg-5.jpg",
  "/images/bg-6.jpg",
  "/images/bg-8.jpg",
  "/images/bg-7.jpg",
];

export const services: Service[] = [
  {
    slug: "construction",
    navLabel: "Building construction",
    title: "Building Construction",
    homeTitle: "Building construction",
    homeSummary: "Building construction, pavement works, and sales of land and houses.",
    cardLead: "Building construction and pavement works, plus sales of land and houses, from our Kumasi base.",
    cardBody:
      "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS carries out building construction, construction of pavement works, and sales of land and houses. Visit us opposite the AAMUSTED west gate at Tanoso–Apatrapa Junction, Kumasi, and let’s get the work done.",
    image: "/images/Team.jpg",
    heroImage: "/images/construction-team.jpg",
    contentImage: "/images/sustainable-works.jpg",
    blocks: [
      {
        type: "p",
        text: "Foundation of the building will be solidify if you choose the right path. For all your building works, come to FRANSARE40 ENGINEERING & CONSTRUCTION WORKS and let’s get it done.",
      },
      {
        type: "p",
        text: "From our workshop opposite the AAMUSTED west gate in Tanoso–Apatrapa, Kumasi, this is the construction side of the practice: building the work, paving it, and helping clients with land and houses.",
      },
      { type: "h3", text: "What We Build" },
      {
        type: "ul",
        items: [
          "**Building construction** – Building works carried out by FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS.",
          "**Construction of pavement works** – Pavement construction for the sites we take on.",
          "**Sales of land / house** – Land and house sales alongside the building work.",
        ],
      },
    ],
  },
  {
    slug: "design",
    navLabel: "Building designs",
    title: "Building Designs",
    homeTitle: "Building designs",
    homeSummary: "Building designs for projects in Kumasi.",
    cardLead: "Building designs from an architectural designer based in Kumasi, Ghana.",
    cardBody:
      "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS provides building designs as an architectural designer serving Kumasi. Bring the brief to the office at Tanoso–Apatrapa Junction, opposite the AAMUSTED west gate, and the design work starts from there.",
    image: "/images/Architecture-Services.jpg",
    heroImage: "/images/Architecture-Services.jpg",
    contentImage: "/images/pic-3.jpg",
    blocks: [
      {
        type: "p",
        text: "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS is listed as an architectural designer in Kumasi. Building designs are part of the work, alongside construction and engineering.",
      },
      { type: "h3", text: "Building Designs" },
      {
        type: "ul",
        items: [
          "**Building designs** – Design work for the building projects we take on in Kumasi.",
          "**With the build** – Design sits next to building construction, renovation, and engineering works from the same practice.",
        ],
      },
    ],
  },
  {
    slug: "engineering",
    navLabel: "Civil engineering works",
    title: "Engineering Works",
    homeTitle: "Civil engineering works",
    homeSummary: "Civil, electrical, and plumbing engineering works.",
    cardLead: "Civil engineering, electrical engineering, and plumbing works.",
    cardBody:
      "Engineering and construction works from FRANSARE 40 include civil engineering works, electrical engineering works, and plumbing works. The office is opposite the AAMUSTED west gate, Tanoso–Apatrapa Junction, Kumasi, and is open Monday to Friday, 8:00 AM – 6:00 PM.",
    image: "/images/Engineering-Services.jpg",
    heroImage: "/images/Engineering-Services.jpg",
    contentImage: "/images/pic-44.jpg",
    blocks: [
      {
        type: "p",
        text: "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS takes on engineering works together with building construction and building designs, from the Kumasi office at Tanoso–Apatrapa Junction.",
      },
      { type: "h3", text: "Engineering Works" },
      {
        type: "ul",
        items: [
          "**Civil engineering works** – Civil engineering as offered by the practice.",
          "**Electrical engineering works** – Electrical engineering works for the jobs we handle.",
          "**Plumbing works** – Plumbing works alongside the rest of the build.",
        ],
      },
    ],
  },
  {
    slug: "renovation",
    navLabel: "Maintenance and renovation",
    title: "Maintenance and Renovation Works",
    homeTitle: "Maintenance and renovation works",
    homeSummary: "Maintenance, renovation, and painting works.",
    cardLead: "Maintenance and renovation works, including painting.",
    cardBody:
      "FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS carries out maintenance and renovation works and painting works. Ask at the Kumasi office, opposite the AAMUSTED west gate, during Monday to Friday hours, 8:00 AM – 6:00 PM.",
    image: "/images/Renovation.jpg",
    heroImage: "/images/Renovation.jpg",
    contentImage: "/images/pic-3.jpg",
    blocks: [
      {
        type: "p",
        text: "Maintenance and renovation works are part of what FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS offers in Kumasi, together with painting works on the jobs we take.",
      },
      { type: "h3", text: "Maintenance and Renovation" },
      {
        type: "ul",
        items: [
          "**Maintenance and renovation works** – Upkeep and renovation for existing buildings.",
          "**Painting works** – Painting works as part of the same practice.",
        ],
      },
    ],
  },
];

export const footerServices = [
  { label: "Building designs", to: "/services/design" },
  { label: "Building construction", to: "/services/construction" },
  { label: "Sales of land / house", to: "/services/construction" },
  { label: "Electrical engineering works", to: "/services/engineering" },
  { label: "Maintenance and renovation works", to: "/services/renovation" },
  { label: "Civil engineering works", to: "/services/engineering" },
  { label: "Construction of pavement works", to: "/services/construction" },
  { label: "Painting works", to: "/services/renovation" },
  { label: "Plumbing works", to: "/services/engineering" },
];

export const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { label: "Twitter (X)", href: "https://x.com", icon: "x" as const },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" as const },
];

export const headerSocials = [
  socials[0],
  socials[2],
  socials[1],
];

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "residential", label: "Residential Projects" },
  { id: "commercial", label: "Commercial Projects" },
  { id: "renovation", label: "Renovations" },
  { id: "engineering", label: "Engineering Projects" },
];

export const projects: Project[] = [
  {
    slug: "oakwood-residence",
    title: "The Oakwood Residence",
    category: "residential",
    summary:
      "A modern two-story family home designed with open living spaces, large windows for natural light, and eco-friendly materials.",
    image: "/images/pic-1.jpg",
    gallery: ["/images/pic-1.jpg", "/images/pic-11.jpg"],
    duration: "8 months",
    budget: "$450,000",
    goals: "A sustainable, spacious home for a family of five.",
    solutions:
      "Solar panels, energy-efficient insulation, and an open-plan design that blends indoor and outdoor living.",
  },
  {
    slug: "harmony-townhouses",
    title: "Harmony Townhouses",
    category: "residential",
    summary:
      "A gated community of 12 townhouses featuring contemporary architecture, landscaped gardens, and secure fencing.",
    image: "/images/bg-1.jpg",
    gallery: ["/images/bg-1.jpg", "/images/bg-4.jpg", "/images/bg-5.jpg"],
    duration: "14 months",
    budget: "$2.1 million",
    goals: "Affordable yet stylish housing for middle-income families.",
    solutions: "Modular construction techniques to save costs and maximize efficiency.",
  },
  {
    slug: "accra-tech-hub-offices",
    title: "Accra Tech Hub Offices",
    category: "commercial",
    summary:
      "A state-of-the-art office complex designed for startups and tech companies, featuring collaborative workspaces and modern amenities.",
    image: "/images/pic-2.jpg",
    gallery: ["/images/pic-2.jpg", "/images/bg-13.jpg", "/images/bg-8.jpg"],
    duration: "12 months",
    budget: "$3.5 million",
    goals: "Flexible, modern offices to attract innovative businesses.",
    solutions: "Open floor plans, glass partitions, and energy-saving LED lighting systems.",
  },
  {
    slug: "prime-retail-center",
    title: "Prime Retail Center",
    category: "commercial",
    summary: "A multi-level shopping plaza with retail outlets, a food court, and entertainment facilities.",
    image: "/images/pic-22.jpg",
    gallery: ["/images/pic-22.jpg", "/images/pic-2.jpg"],
    duration: "18 months",
    budget: "$6 million",
    goals: "A high-traffic retail hub with modern design.",
    solutions: "Smart parking systems, escalator access, and optimized storefront layouts for maximum visibility.",
  },
  {
    slug: "heritage-villa-restoration",
    title: "The Heritage Villa Restoration",
    category: "renovation",
    summary:
      "Renovation of a 1970s colonial-style home into a modern, energy-efficient residence while preserving its classic character.",
    image: "/images/pic-3.jpg",
    gallery: ["/images/pic-3.jpg", "/images/bg-13.jpg", "/images/bg-8.jpg"],
    duration: "6 months",
    budget: "$200,000",
    goals: "Upgrade without losing historical charm.",
    solutions: "Retained original woodwork, added modern kitchen and bathrooms, installed solar water heating.",
  },
  {
    slug: "downtown-office-upgrade",
    title: "Downtown Office Upgrade",
    category: "renovation",
    summary: "Transformation of a dated office space into a sleek, modern working environment.",
    image: "/images/pic-33.jpg",
    gallery: ["/images/pic-33.jpg", "/images/bg-4.jpg", "/images/bg-5.jpg"],
    duration: "4 months",
    budget: "$120,000",
    goals: "Improve productivity and aesthetics.",
    solutions: "Modern lighting, ergonomic furniture, open-plan layout, and soundproof meeting rooms.",
  },
  {
    slug: "east-ridge-bridge",
    title: "East Ridge Bridge Development",
    category: "engineering",
    summary: "Design and construction of a reinforced concrete bridge to improve transport connectivity.",
    image: "/images/pic-4.jpg",
    gallery: ["/images/pic-4.jpg", "/images/bg-13.jpg", "/images/bg-8.jpg"],
    duration: "10 months",
    budget: "$4.5 million",
    goals: "Safe and durable bridge with minimal maintenance.",
    solutions: "High-strength concrete, advanced drainage systems, seismic safety engineering.",
  },
  {
    slug: "city-water-supply",
    title: "City Water Supply Expansion",
    category: "engineering",
    summary: "Engineering and installation of a large-scale water pipeline system serving 50,000+ residents.",
    image: "/images/pic-44.jpg",
    gallery: ["/images/pic-44.jpg", "/images/bg-4.jpg", "/images/bg-5.jpg"],
    duration: "15 months",
    budget: "$7.2 million",
    goals: "Reliable, efficient water delivery for urban growth.",
    solutions: "Modern pumping stations, corrosion-resistant pipes, and real-time monitoring systems.",
  },
];

export interface ShowcaseItem {
  kind: "card" | "feature";
  title: string;
  text: string;
  image: string;
  to: string;
}

export const showcaseRows: ShowcaseItem[][] = [
  [
    {
      kind: "card",
      title: "Commercial Spaces",
      text: "Discover our cutting-edge designs for commercial environments.",
      image: "/images/bg-13.jpg",
      to: "/projects/accra-tech-hub-offices",
    },
    {
      kind: "card",
      title: "Residential Designs",
      text: "Transforming homes with modern aesthetics and functionality.",
      image: "/images/bg-1.jpg",
      to: "/projects/oakwood-residence",
    },
    {
      kind: "feature",
      title: "Modern Corporate Headquarters",
      text: "Engineering Solutions for Complex Challenges.",
      image: "/images/Architecture-Services.jpg",
      to: "/projects/accra-tech-hub-offices",
    },
  ],
  [
    {
      kind: "feature",
      title: "Modern Corporate Headquarters",
      text: "Engineering Solutions for Complex Challenges.",
      image: "/images/Construction.jpg",
      to: "/projects/prime-retail-center",
    },
    {
      kind: "card",
      title: "Residential Designs",
      text: "Transforming homes with modern aesthetics and functionality.",
      image: "/images/bg-3.jpg",
      to: "/projects/harmony-townhouses",
    },
    {
      kind: "card",
      title: "Commercial Spaces",
      text: "Discover our cutting-edge designs for commercial environments.",
      image: "/images/bg-6.jpg",
      to: "/projects/prime-retail-center",
    },
  ],
];

export const testimonials = [
  {
    name: "Sarah Martinez",
    role: "CEO, TechInnovate Solutions",
    quote:
      "ArchLine transformed our corporate headquarters with an incredible design that perfectly balances functionality and aesthetic appeal.",
    photo: "/images/review-2.jpg",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, Urban Developments",
    quote:
      "Their renovation expertise turned our outdated space into a modern, inspiring environment that exceeded all expectations.",
    photo: "/images/review-1.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Residential Client",
    quote:
      "Professional, precise, and passionate about delivering outstanding architectural solutions. Highly recommended.",
    photo: "/images/review-3.jpg",
  },
];

export const team: TeamMember[] = [
  {
    slug: "kwame-boateng",
    name: "Kwame Boateng",
    role: "Structural Engineer",
    bio: "Kwame ensures every building is structurally sound and meets international safety standards.",
    image: "/images/team_1_optimized.jpg",
  },
  {
    slug: "sophia-mensah",
    name: "Sophia Mensah",
    role: "Lead Architect",
    bio: "With over 12 years of experience, Sophia specializes in sustainable and modern design, bringing creativity and functionality together in every project.",
    image: "/images/team_2_optimized.jpg",
  },
  {
    slug: "james-parker",
    name: "James Parker",
    role: "Mechanical Engineer",
    bio: "Michael brings efficiency and precision to mechanical systems, from HVAC to advanced construction technology.",
    image: "/images/team_3_optimized.jpg",
  },
  {
    slug: "emmanuel-asare",
    name: "Emmanuel Asare",
    role: "Master Builder",
    bio: "Emmanuel leads with hands-on expertise, ensuring the highest quality finishes in every build.",
    image: "/images/team-4.jpg",
  },
];

export const posts: Post[] = [
  {
    slug: "top-5-benefits-of-hiring-a-professional-construction-company-for-your-next-project",
    title: "Top 5 Benefits of Hiring a Professional Construction Company for Your Next Project",
    date: "2025-09-13T11:49:01",
    displayDate: "September 13, 2025",
    image: "/images/construction-team.jpg",
    excerpt:
      "When it comes to construction, choosing the right partner can make or break your project. Professional construction companies bring unmatched expertise, resources, and reliability.",
    category: "Our Blog",
    blocks: [
      {
        type: "p",
        text: "When it comes to construction, choosing the right partner can make or break your project. While some homeowners and businesses may be tempted to manage construction themselves, the reality is that professional construction companies bring unmatched expertise, resources, and reliability.",
      },
      {
        type: "p",
        text: "At ArchLine Construction Company, we’ve helped clients across residential, commercial, and industrial sectors achieve their vision with excellence. Here are five key benefits of hiring a professional construction company.",
      },
      { type: "h3", text: "1. Expertise & Experience" },
      {
        type: "p",
        text: "Professional construction firms employ certified architects, engineers, and builders with years of hands-on experience. This ensures projects are planned and executed with precision.",
      },
      { type: "h3", text: "2. Quality Workmanship" },
      {
        type: "p",
        text: "From sourcing premium materials to applying proven building techniques, quality remains the hallmark of a professional construction company. ArchLine prioritizes durability and long-lasting value in every project.",
      },
      { type: "h3", text: "3. Time & Cost Efficiency" },
      {
        type: "p",
        text: "Delays and budget overruns are common in DIY projects. Professionals use efficient project management systems to keep everything on schedule and within budget.",
      },
      { type: "h3", text: "4. Compliance & Safety" },
      {
        type: "p",
        text: "Construction involves permits, safety standards, and local regulations. A licensed company like ArchLine ensures everything complies with laws while maintaining worker and site safety.",
      },
      { type: "h3", text: "5. End-to-End Services" },
      {
        type: "p",
        text: "From design and planning to construction, renovation, and engineering, professional companies offer a complete solution—saving clients the stress of coordinating multiple vendors.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Hiring a professional construction company isn’t just about convenience—it’s about ensuring success. At ArchLine, we combine expertise, quality, and commitment to excellence for every project.",
      },
    ],
  },
  {
    slug: "how-sustainable-construction-is-shaping-the-future-of-architecture",
    title: "How Sustainable Construction is Shaping the Future of Architecture",
    date: "2025-09-13T11:47:47",
    displayDate: "September 13, 2025",
    image: "/images/Eco-friendly.jpg",
    excerpt:
      "The construction industry is evolving, and sustainability is at the heart of the transformation. Eco-friendly practices reduce environmental impact while enhancing long-term efficiency.",
    category: "Our Blog",
    blocks: [
      {
        type: "p",
        text: "The construction industry is evolving, and sustainability is at the heart of the transformation. More homeowners, developers, and governments are prioritizing eco-friendly practices that reduce environmental impact while enhancing long-term efficiency.",
      },
      {
        type: "p",
        text: "ArchLine Construction Company is committed to adopting environmentally responsible building methods. Let’s explore how sustainable construction is shaping the future of architecture.",
      },
      { type: "h3", text: "1. Energy-Efficient Designs" },
      {
        type: "p",
        text: "Green buildings are designed to reduce energy use through smart layouts, insulation, and energy-efficient windows. Solar-ready rooftops and natural ventilation systems are increasingly popular.",
      },
      { type: "h3", text: "2. Use of Sustainable Materials" },
      {
        type: "p",
        text: "Recycled steel, reclaimed wood, bamboo, and low-VOC paints are replacing traditional materials. These eco-friendly options minimize carbon footprint without compromising quality.",
      },
      { type: "h3", text: "3. Water Conservation" },
      {
        type: "p",
        text: "Modern buildings integrate rainwater harvesting systems, low-flow fixtures, and wastewater recycling to cut down water usage.",
      },
      { type: "h3", text: "4. Smart Technology in Green Buildings" },
      {
        type: "p",
        text: "IoT devices and smart meters help monitor and optimize energy and water consumption in real-time.",
      },
      { type: "h3", text: "5. Health & Wellbeing Benefits" },
      {
        type: "p",
        text: "Eco-friendly buildings improve indoor air quality and create healthier living and working spaces.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Sustainable construction isn’t just a trend—it’s the future. At ArchLine, we integrate green practices into our projects, building structures that are environmentally responsible and future-ready.",
      },
    ],
  },
  {
    slug: "renovation-vs-new-construction-which-is-right-for-you",
    title: "Renovation vs. New Construction: Which is Right for You?",
    date: "2025-09-13T11:46:09",
    displayDate: "September 13, 2025",
    image: "/images/renovation-1.jpg",
    excerpt:
      "If you’re planning to upgrade your home or office, you may face a tough decision: renovate your existing space or build a new one from scratch.",
    category: "Our Blog",
    blocks: [
      {
        type: "p",
        text: "If you’re planning to upgrade your home or office, you may face a tough decision: renovate your existing space or build a new one from scratch. Both options have unique benefits and challenges. Here’s how to decide which is right for you.",
      },
      { type: "h3", text: "Renovation: The Pros" },
      {
        type: "ul",
        items: [
          "**Cost Savings:** Renovations are often cheaper than new builds.",
          "**Preserves Character:** Older properties with history can be modernized without losing charm.",
          "**Faster Completion:** Renovations typically take less time than new constructions.",
        ],
      },
      { type: "h3", text: "Renovation: The Cons" },
      {
        type: "ul",
        items: [
          "**Hidden Costs:** Structural issues or outdated wiring can increase expenses.",
          "**Limited Layout Changes:** Renovations may not allow complete freedom in redesign.",
        ],
      },
      { type: "h3", text: "New Construction: The Pros" },
      {
        type: "ul",
        items: [
          "**Complete Customization:** Build exactly what you want from the ground up.",
          "**Energy Efficiency:** New builds allow integration of modern, eco-friendly systems.",
          "**Higher Value:** New properties often increase in resale value.",
        ],
      },
      { type: "h3", text: "New Construction: The Cons" },
      {
        type: "ul",
        items: [
          "**Higher Upfront Cost:** Building from scratch can be more expensive.",
          "**Longer Timelines:** New projects require more planning and execution time.",
        ],
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Both renovation and new construction have their merits. Your choice depends on budget, timeline, and vision. ArchLine Construction Company can guide you through both paths to ensure the best outcome.",
      },
    ],
  },
];

export const stats = [
  { value: 300, suffix: "", label: "Construction Experts", tone: "dark" as const },
  { value: 250, suffix: "+", label: "Completed Projects", tone: "dark" as const },
  { value: 62, suffix: "", label: "Our Offices", tone: "orange" as const },
  { value: 395, suffix: "+", label: "Suppervised Projects", tone: "orange" as const },
];

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}

export function categoryLabel(id: ProjectCategory) {
  return projectCategories.find((category) => category.id === id)?.label ?? id;
}
