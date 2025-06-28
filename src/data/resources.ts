export interface Resource {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  url: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  type?: string;
  isFree?: boolean;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  dateAdded?: string;
  location?: string;
  features?: string[];
  pricing?: {
    free?: string;
    paid?: string[];
  };
  requirements?: string[];
  alternatives?: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  resources: Resource[];
  tags?: string[];
}

export const categories: Category[] = [
  {
    id: 'ai-tools',
    title: 'AI & Tech Tools',
    description: 'Cutting-edge AI tools and platforms to supercharge your projects and workflows.',
    icon: '🤖',
    gradient: 'from-blue-600 to-purple-600',
    tags: ['artificial intelligence', 'automation', 'productivity'],
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced AI assistant for writing, coding, analysis, and creative tasks.',
        detailedDescription: 'OpenAI\'s ChatGPT is a powerful conversational AI that can help with a wide range of tasks including writing, coding, analysis, brainstorming, and learning. It\'s an essential tool for modern innovators.',
        url: 'https://chat.openai.com',
        tags: ['AI', 'writing', 'coding', 'assistant'],
        difficulty: 'beginner',
        type: 'AI Assistant',
        isFree: true,
        rating: 4.8,
        reviewCount: 15420,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Writing assistance',
          'Data analysis',
          'Creative brainstorming'
        ],
        pricing: {
          free: 'Free tier with GPT-3.5',
          paid: ['ChatGPT Plus: $20/month for GPT-4 access']
        }
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'AI-powered code completion and programming assistant.',
        url: 'https://github.com/features/copilot',
        tags: ['coding', 'AI', 'development', 'productivity'],
        difficulty: 'intermediate',
        type: 'Development Tool',
        isFree: false,
        rating: 4.6,
        reviewCount: 8930,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Real-time code suggestions',
          'Multi-language support',
          'Context-aware completions',
          'Code explanation',
          'Test generation'
        ],
        pricing: {
          paid: ['Individual: $10/month', 'Business: $19/user/month']
        }
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI-powered image generation for creative projects and design.',
        url: 'https://midjourney.com',
        tags: ['AI', 'design', 'art', 'creativity'],
        difficulty: 'beginner',
        type: 'Creative Tool',
        isFree: false,
        rating: 4.7,
        reviewCount: 12340,
        dateAdded: '2024-01-25',
        features: [
          'High-quality image generation',
          'Style customization',
          'Aspect ratio control',
          'Upscaling capabilities',
          'Community gallery'
        ],
        pricing: {
          paid: ['Basic: $10/month', 'Standard: $30/month', 'Pro: $60/month']
        }
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Events',
    description: 'Discover exciting hackathons, competitions, and tech events to showcase your skills.',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-600',
    tags: ['competition', 'networking', 'innovation'],
    resources: [
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'The home for hackathons - discover, participate, and showcase your projects.',
        url: 'https://devpost.com',
        tags: ['hackathons', 'competitions', 'projects'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 5670,
        featured: true,
        dateAdded: '2024-01-10',
        features: [
          'Global hackathon directory',
          'Project submission platform',
          'Team formation tools',
          'Prize tracking',
          'Portfolio building'
        ],
        pricing: {
          free: 'Free for participants and organizers'
        }
      },
      {
        id: 'mlh',
        name: 'Major League Hacking',
        description: 'The official student hackathon league with events worldwide.',
        url: 'https://mlh.io',
        tags: ['hackathons', 'students', 'community'],
        difficulty: 'beginner',
        type: 'Organization',
        isFree: true,
        rating: 4.6,
        reviewCount: 3420,
        dateAdded: '2024-01-12',
        features: [
          'Student-focused events',
          'Mentorship programs',
          'Swag and prizes',
          'Career opportunities',
          'Global community'
        ],
        pricing: {
          free: 'Free participation in all events'
        }
      },
      {
        id: 'hackathon-io',
        name: 'Hackathon.io',
        description: 'Comprehensive hackathon discovery and management platform.',
        url: 'https://hackathon.io',
        tags: ['hackathons', 'events', 'discovery'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 2180,
        dateAdded: '2024-01-18',
        features: [
          'Event calendar',
          'Location-based search',
          'Registration management',
          'Networking tools',
          'Resource sharing'
        ],
        pricing: {
          free: 'Free for participants',
          paid: ['Premium features for organizers: $99/event']
        }
      }
    ]
  },
  {
    id: 'funding',
    title: 'Funding & Grants',
    description: 'Find funding opportunities, grants, and investment resources for your startup.',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['funding', 'grants', 'investment', 'startup'],
    resources: [
      {
        id: 'ycombinator',
        name: 'Y Combinator',
        description: 'The world\'s most successful startup accelerator and early-stage fund.',
        url: 'https://ycombinator.com',
        tags: ['accelerator', 'funding', 'startup', 'mentorship'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        rating: 4.9,
        reviewCount: 1250,
        featured: true,
        dateAdded: '2024-01-05',
        features: [
          '3-month acceleration program',
          '$500k investment',
          'Extensive mentor network',
          'Demo Day presentation',
          'Alumni network access'
        ],
        pricing: {
          paid: ['7% equity for $500k investment']
        },
        requirements: [
          'Innovative startup idea',
          'Strong founding team',
          'Scalable business model',
          'Technical prototype or MVP'
        ]
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Global startup accelerator with programs in multiple cities worldwide.',
        url: 'https://techstars.com',
        tags: ['accelerator', 'mentorship', 'funding'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        rating: 4.7,
        reviewCount: 890,
        dateAdded: '2024-01-08',
        features: [
          '13-week program',
          '$120k investment',
          'Mentor-driven approach',
          'Global network',
          'Industry-specific programs'
        ],
        pricing: {
          paid: ['6% equity for $120k investment']
        }
      },
      {
        id: 'grants-gov',
        name: 'Grants.gov',
        description: 'Official U.S. government portal for federal grant opportunities.',
        url: 'https://grants.gov',
        tags: ['grants', 'government', 'funding', 'research'],
        difficulty: 'intermediate',
        type: 'Government Portal',
        isFree: true,
        rating: 4.2,
        reviewCount: 1560,
        dateAdded: '2024-01-14',
        features: [
          'Federal grant database',
          'Application tracking',
          'Eligibility screening',
          'Deadline notifications',
          'Resource library'
        ],
        pricing: {
          free: 'Free access to all grant opportunities'
        }
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Platforms',
    description: 'Top-tier educational resources and courses to expand your knowledge and skills.',
    icon: '📚',
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['education', 'courses', 'skills', 'learning'],
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'World-class online courses from top universities and companies.',
        url: 'https://coursera.org',
        tags: ['courses', 'certificates', 'university', 'skills'],
        difficulty: 'beginner',
        type: 'Learning Platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 45670,
        featured: true,
        dateAdded: '2024-01-03',
        features: [
          'University partnerships',
          'Professional certificates',
          'Degree programs',
          'Hands-on projects',
          'Career services'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: ['Coursera Plus: $59/month', 'Individual courses: $39-79']
        }
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Massive marketplace of practical courses taught by industry experts.',
        url: 'https://udemy.com',
        tags: ['courses', 'practical', 'skills', 'technology'],
        difficulty: 'beginner',
        type: 'Learning Platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 67890,
        dateAdded: '2024-01-06',
        features: [
          'Lifetime access',
          'Mobile learning',
          'Certificate of completion',
          'Q&A support',
          'Regular sales and discounts'
        ],
        pricing: {
          free: 'Free courses available',
          paid: ['Individual courses: $10-200 (frequent sales)']
        }
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'Learn to code for free with interactive lessons and projects.',
        url: 'https://freecodecamp.org',
        tags: ['coding', 'programming', 'web development', 'free'],
        difficulty: 'beginner',
        type: 'Coding Platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 23450,
        featured: true,
        dateAdded: '2024-01-09',
        features: [
          'Interactive coding challenges',
          'Project-based learning',
          'Certification programs',
          'Community support',
          'Open source curriculum'
        ],
        pricing: {
          free: 'Completely free forever'
        }
      }
    ]
  },
  {
    id: 'communities',
    title: 'Communities & Networks',
    description: 'Connect with like-minded innovators and join thriving tech communities.',
    icon: '🌐',
    gradient: 'from-pink-500 to-purple-600',
    tags: ['networking', 'community', 'collaboration'],
    resources: [
      {
        id: 'discord-servers',
        name: 'Tech Discord Servers',
        description: 'Active Discord communities for developers, designers, and entrepreneurs.',
        url: 'https://discord.com',
        tags: ['discord', 'community', 'real-time', 'networking'],
        difficulty: 'beginner',
        type: 'Community Platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 8920,
        dateAdded: '2024-01-11',
        features: [
          'Real-time chat',
          'Voice channels',
          'Screen sharing',
          'Community events',
          'Resource sharing'
        ],
        pricing: {
          free: 'Free to join communities',
          paid: ['Discord Nitro: $9.99/month for enhanced features']
        }
      },
      {
        id: 'reddit-programming',
        name: 'Programming Subreddits',
        description: 'Active Reddit communities for programmers and tech enthusiasts.',
        url: 'https://reddit.com/r/programming',
        tags: ['reddit', 'programming', 'discussion', 'community'],
        difficulty: 'beginner',
        type: 'Forum',
        isFree: true,
        rating: 4.3,
        reviewCount: 12340,
        dateAdded: '2024-01-13',
        features: [
          'Discussion threads',
          'News and updates',
          'Q&A support',
          'Project showcases',
          'Career advice'
        ],
        pricing: {
          free: 'Free to participate'
        }
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Community of independent entrepreneurs building profitable businesses.',
        url: 'https://indiehackers.com',
        tags: ['entrepreneurship', 'indie', 'business', 'community'],
        difficulty: 'intermediate',
        type: 'Community',
        isFree: true,
        rating: 4.7,
        reviewCount: 5670,
        featured: true,
        dateAdded: '2024-01-16',
        features: [
          'Founder interviews',
          'Revenue tracking',
          'Community discussions',
          'Meetup events',
          'Resource library'
        ],
        pricing: {
          free: 'Free community access'
        }
      }
    ]
  },
  {
    id: 'open-source',
    title: 'Open Source Projects',
    description: 'Contribute to meaningful open source projects and build your portfolio.',
    icon: '🔓',
    gradient: 'from-teal-500 to-cyan-600',
    tags: ['open source', 'collaboration', 'portfolio'],
    resources: [
      {
        id: 'github',
        name: 'GitHub',
        description: 'The world\'s largest platform for open source collaboration and code hosting.',
        url: 'https://github.com',
        tags: ['git', 'collaboration', 'code hosting', 'portfolio'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 89120,
        featured: true,
        dateAdded: '2024-01-02',
        features: [
          'Git repository hosting',
          'Issue tracking',
          'Pull requests',
          'GitHub Actions CI/CD',
          'Project management tools'
        ],
        pricing: {
          free: 'Free for public repositories',
          paid: ['GitHub Pro: $4/month', 'GitHub Team: $4/user/month']
        }
      },
      {
        id: 'good-first-issues',
        name: 'Good First Issues',
        description: 'Curated list of beginner-friendly open source contribution opportunities.',
        url: 'https://goodfirstissues.com',
        tags: ['beginner', 'contributions', 'open source'],
        difficulty: 'beginner',
        type: 'Resource Directory',
        isFree: true,
        rating: 4.6,
        reviewCount: 3450,
        dateAdded: '2024-01-17',
        features: [
          'Beginner-friendly issues',
          'Language filtering',
          'Project descriptions',
          'Difficulty ratings',
          'Regular updates'
        ],
        pricing: {
          free: 'Completely free resource'
        }
      },
      {
        id: 'first-timers-only',
        name: 'First Timers Only',
        description: 'Issues specifically created for first-time open source contributors.',
        url: 'https://firsttimersonly.com',
        tags: ['first-time', 'beginner', 'mentorship'],
        difficulty: 'beginner',
        type: 'Initiative',
        isFree: true,
        rating: 4.4,
        reviewCount: 2180,
        dateAdded: '2024-01-19',
        features: [
          'Mentorship focus',
          'Step-by-step guidance',
          'Welcoming community',
          'Learning resources',
          'Success stories'
        ],
        pricing: {
          free: 'Free participation'
        }
      }
    ]
  }
];