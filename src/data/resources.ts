export interface Resource {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  url: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  type?: string;
  isFree: boolean;
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
  tags?: string[];
  resources: Resource[];
}

export const categories: Category[] = [
  {
    id: 'ai-tools',
    title: 'AI & Tech Tools',
    description: 'Cutting-edge AI tools and platforms to supercharge your projects and automate workflows.',
    icon: '🤖',
    gradient: 'from-blue-600 to-purple-600',
    tags: ['AI', 'Machine Learning', 'Automation', 'Development'],
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced AI assistant for writing, coding, analysis, and creative tasks.',
        detailedDescription: 'ChatGPT is a powerful conversational AI that can help with a wide range of tasks including writing, coding, analysis, brainstorming, and problem-solving. It\'s particularly useful for developers, writers, researchers, and anyone looking to enhance their productivity.',
        url: 'https://chat.openai.com',
        tags: ['AI', 'Writing', 'Coding', 'Assistant'],
        difficulty: 'beginner',
        type: 'AI Assistant',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Writing assistance',
          'Data analysis',
          'Creative brainstorming',
          'Multiple language support'
        ],
        pricing: {
          free: 'Free tier with GPT-3.5 and limited GPT-4 access',
          paid: ['ChatGPT Plus: $20/month for unlimited GPT-4 access']
        },
        requirements: [
          'Internet connection',
          'Web browser or mobile app'
        ],
        alternatives: ['Claude', 'Gemini', 'Perplexity']
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'AI-powered code completion and programming assistant.',
        detailedDescription: 'GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly.',
        url: 'https://github.com/features/copilot',
        tags: ['AI', 'Coding', 'IDE', 'Productivity'],
        difficulty: 'intermediate',
        type: 'Development Tool',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-10',
        features: [
          'Real-time code suggestions',
          'Multi-language support',
          'IDE integration',
          'Context-aware completions',
          'Code explanation',
          'Test generation'
        ],
        pricing: {
          paid: [
            'Individual: $10/month',
            'Business: $19/user/month',
            'Free for students and open source maintainers'
          ]
        },
        requirements: [
          'Compatible IDE (VS Code, JetBrains, etc.)',
          'GitHub account',
          'Active subscription'
        ],
        alternatives: ['Tabnine', 'CodeWhisperer', 'Codeium']
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI-powered image generation tool for creating stunning artwork and designs.',
        url: 'https://midjourney.com',
        tags: ['AI', 'Design', 'Art', 'Image Generation'],
        difficulty: 'beginner',
        type: 'Creative Tool',
        isFree: false,
        dateAdded: '2024-01-08',
        features: [
          'High-quality image generation',
          'Style customization',
          'Aspect ratio control',
          'Upscaling capabilities',
          'Community gallery',
          'Discord integration'
        ],
        pricing: {
          paid: [
            'Basic: $10/month',
            'Standard: $30/month',
            'Pro: $60/month'
          ]
        }
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'AI writing assistant integrated into Notion workspace.',
        url: 'https://notion.so/product/ai',
        tags: ['AI', 'Writing', 'Productivity', 'Workspace'],
        difficulty: 'beginner',
        type: 'Productivity Tool',
        isFree: true,
        dateAdded: '2024-01-05',
        features: [
          'Writing assistance',
          'Content generation',
          'Summarization',
          'Translation',
          'Brainstorming',
          'Workspace integration'
        ],
        pricing: {
          free: 'Limited AI responses included with Notion plans',
          paid: ['AI add-on: $10/member/month']
        }
      },
      {
        id: 'claude',
        name: 'Claude',
        description: 'Anthropic\'s AI assistant for analysis, writing, and complex reasoning.',
        url: 'https://claude.ai',
        tags: ['AI', 'Assistant', 'Analysis', 'Writing'],
        difficulty: 'beginner',
        type: 'AI Assistant',
        isFree: true,
        dateAdded: '2024-01-12',
        features: [
          'Long-form conversations',
          'Document analysis',
          'Code understanding',
          'Creative writing',
          'Research assistance',
          'Safety-focused responses'
        ],
        pricing: {
          free: 'Free tier with usage limits',
          paid: ['Claude Pro: $20/month for higher usage limits']
        }
      },
      {
        id: 'replit',
        name: 'Replit',
        description: 'Online IDE with AI-powered coding assistance and collaboration features.',
        url: 'https://replit.com',
        tags: ['IDE', 'Coding', 'Collaboration', 'AI'],
        difficulty: 'beginner',
        type: 'Development Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Browser-based IDE',
          'AI code generation',
          'Real-time collaboration',
          'Multiple language support',
          'Instant deployment',
          'Version control'
        ],
        pricing: {
          free: 'Free tier with public repls',
          paid: [
            'Hacker: $7/month',
            'Pro: $20/month',
            'Teams: $20/user/month'
          ]
        }
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    description: 'Discover exciting hackathons, coding competitions, and innovation challenges worldwide.',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-600',
    tags: ['Competition', 'Innovation', 'Networking', 'Prizes'],
    resources: [
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'The home for hackathons - discover, participate, and showcase your projects.',
        detailedDescription: 'Devpost is the leading platform for hackathons and developer competitions. It connects developers with opportunities to build, learn, and win prizes while showcasing their skills to potential employers and collaborators.',
        url: 'https://devpost.com',
        tags: ['Hackathons', 'Competitions', 'Portfolio', 'Networking'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Hackathon discovery',
          'Project submission',
          'Portfolio building',
          'Team formation',
          'Prize tracking',
          'Employer connections'
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
        tags: ['Student', 'Hackathons', 'Community', 'Learning'],
        difficulty: 'beginner',
        type: 'Organization',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-16',
        features: [
          'Student-focused events',
          'Global hackathon network',
          'Mentorship programs',
          'Swag and prizes',
          'Career opportunities',
          'Community building'
        ],
        pricing: {
          free: 'Free participation in all MLH events'
        }
      },
      {
        id: 'kaggle-competitions',
        name: 'Kaggle Competitions',
        description: 'Data science and machine learning competitions with real-world datasets.',
        url: 'https://kaggle.com/competitions',
        tags: ['Data Science', 'Machine Learning', 'AI', 'Analytics'],
        difficulty: 'intermediate',
        type: 'Competition Platform',
        isFree: true,
        dateAdded: '2024-01-14',
        features: [
          'Real-world datasets',
          'Cash prizes',
          'Leaderboards',
          'Community discussions',
          'Learning resources',
          'Career advancement'
        ],
        pricing: {
          free: 'Free to participate in all competitions'
        }
      },
      {
        id: 'hackathon-io',
        name: 'Hackathon.io',
        description: 'Global hackathon discovery platform with events from around the world.',
        url: 'https://hackathon.io',
        tags: ['Global', 'Discovery', 'Events', 'Innovation'],
        difficulty: 'beginner',
        type: 'Discovery Platform',
        isFree: true,
        dateAdded: '2024-01-11',
        features: [
          'Global event listings',
          'Event filtering',
          'Calendar integration',
          'Organizer tools',
          'Community features',
          'Mobile app'
        ],
        pricing: {
          free: 'Free event discovery and participation'
        }
      },
      {
        id: 'junction',
        name: 'Junction',
        description: 'Europe\'s leading hackathon organizing community.',
        url: 'https://junction.fi',
        tags: ['Europe', 'Community', 'Innovation', 'Startups'],
        difficulty: 'intermediate',
        type: 'Event Organizer',
        isFree: true,
        location: 'Europe',
        dateAdded: '2024-01-09',
        features: [
          'Premium hackathon experiences',
          'Startup connections',
          'Mentorship programs',
          'Industry partnerships',
          'Career opportunities',
          'Innovation challenges'
        ],
        pricing: {
          free: 'Free participation, some events may have application process'
        }
      },
      {
        id: 'techcrunch-disrupt',
        name: 'TechCrunch Disrupt',
        description: 'Startup battlefield and hackathon at the premier tech conference.',
        url: 'https://techcrunch.com/events/disrupt',
        tags: ['Startups', 'Conference', 'Networking', 'Investment'],
        difficulty: 'advanced',
        type: 'Conference Competition',
        isFree: false,
        dateAdded: '2024-01-07',
        features: [
          'Startup battlefield',
          'Investor connections',
          'Media exposure',
          'Networking opportunities',
          'Industry insights',
          'Prize money'
        ],
        pricing: {
          paid: ['Conference tickets: $2,000-$5,000', 'Startup battlefield: Application-based']
        }
      }
    ]
  },
  {
    id: 'funding',
    title: 'Funding & Grants',
    description: 'Find funding opportunities, grants, and investment programs for your innovative projects.',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['Funding', 'Grants', 'Investment', 'Startups'],
    resources: [
      {
        id: 'ycombinator',
        name: 'Y Combinator',
        description: 'The world\'s most successful startup accelerator program.',
        detailedDescription: 'Y Combinator provides seed funding, advice, and connections to help startups succeed. The program includes a 3-month intensive bootcamp and culminates in Demo Day where startups pitch to investors.',
        url: 'https://ycombinator.com',
        tags: ['Accelerator', 'Seed Funding', 'Mentorship', 'Silicon Valley'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        featured: true,
        location: 'San Francisco, CA',
        dateAdded: '2024-01-19',
        features: [
          '$500k investment for 7% equity',
          '3-month intensive program',
          'Access to YC network',
          'Demo Day presentation',
          'Ongoing support',
          'Global alumni network'
        ],
        pricing: {
          paid: ['$500k for 7% equity stake']
        },
        requirements: [
          'Innovative startup idea',
          'Strong founding team',
          'Scalable business model',
          'Application and interview process'
        ]
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Global startup accelerator with programs in multiple cities.',
        url: 'https://techstars.com',
        tags: ['Accelerator', 'Global', 'Mentorship', 'Network'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-17',
        features: [
          '$120k investment',
          '3-month program',
          'Mentor network',
          'Demo Day',
          'Lifetime network access',
          'Multiple locations'
        ],
        pricing: {
          paid: ['$120k for 6% equity']
        }
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Crowdfunding platform for creative projects and innovative products.',
        url: 'https://kickstarter.com',
        tags: ['Crowdfunding', 'Creative', 'Products', 'Community'],
        difficulty: 'intermediate',
        type: 'Crowdfunding',
        isFree: true,
        dateAdded: '2024-01-15',
        features: [
          'All-or-nothing funding',
          'Creative project focus',
          'Backer rewards system',
          'Project promotion tools',
          'Community engagement',
          'Global reach'
        ],
        pricing: {
          free: 'Free to launch, 5% fee on successful campaigns'
        }
      },
      {
        id: 'indiegogo',
        name: 'Indiegogo',
        description: 'Flexible crowdfunding platform for entrepreneurs and innovators.',
        url: 'https://indiegogo.com',
        tags: ['Crowdfunding', 'Flexible', 'Innovation', 'Entrepreneurs'],
        difficulty: 'intermediate',
        type: 'Crowdfunding',
        isFree: true,
        dateAdded: '2024-01-13',
        features: [
          'Flexible funding options',
          'Keep what you raise',
          'InDemand marketplace',
          'Marketing tools',
          'Global shipping',
          'Expert support'
        ],
        pricing: {
          free: 'Free to launch, 5% platform fee'
        }
      },
      {
        id: 'grants-gov',
        name: 'Grants.gov',
        description: 'Official U.S. government portal for federal grant opportunities.',
        url: 'https://grants.gov',
        tags: ['Government', 'Federal', 'Research', 'Non-profit'],
        difficulty: 'advanced',
        type: 'Government Portal',
        isFree: true,
        location: 'United States',
        dateAdded: '2024-01-10',
        features: [
          'Federal grant database',
          'Application management',
          'Eligibility checking',
          'Deadline tracking',
          'Award notifications',
          'Compliance tools'
        ],
        pricing: {
          free: 'Free to search and apply for grants'
        }
      },
      {
        id: 'angel-list',
        name: 'AngelList',
        description: 'Platform connecting startups with angel investors and venture capital.',
        url: 'https://angel.co',
        tags: ['Angel Investors', 'VC', 'Startups', 'Investment'],
        difficulty: 'advanced',
        type: 'Investment Platform',
        isFree: true,
        dateAdded: '2024-01-08',
        features: [
          'Investor connections',
          'Startup profiles',
          'Job opportunities',
          'Fundraising tools',
          'Market insights',
          'Due diligence support'
        ],
        pricing: {
          free: 'Free for basic features, premium options available'
        }
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Platforms',
    description: 'Educational resources, courses, and platforms to enhance your skills and knowledge.',
    icon: '📚',
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['Education', 'Courses', 'Skills', 'Certification'],
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'Online courses and degrees from top universities and companies.',
        detailedDescription: 'Coursera partners with leading universities and organizations to offer high-quality online courses, specializations, and degree programs. Learn from world-class instructors and earn certificates that can advance your career.',
        url: 'https://coursera.org',
        tags: ['University', 'Certificates', 'Degrees', 'Professional'],
        difficulty: 'beginner',
        type: 'Learning Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'University partnerships',
          'Professional certificates',
          'Degree programs',
          'Hands-on projects',
          'Peer interaction',
          'Career services'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: [
            'Individual courses: $39-79',
            'Specializations: $39-79/month',
            'Degrees: $15,000-25,000'
          ]
        }
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Marketplace for online courses on virtually any topic.',
        url: 'https://udemy.com',
        tags: ['Marketplace', 'Practical', 'Skills', 'Affordable'],
        difficulty: 'beginner',
        type: 'Course Marketplace',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Vast course library',
          'Lifetime access',
          'Mobile learning',
          'Practical projects',
          'Q&A support',
          'Certificates of completion'
        ],
        pricing: {
          free: 'Free courses available',
          paid: ['Courses typically $10-200, frequent sales']
        }
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'Free coding bootcamp with interactive lessons and projects.',
        url: 'https://freecodecamp.org',
        tags: ['Coding', 'Free', 'Bootcamp', 'Open Source'],
        difficulty: 'beginner',
        type: 'Coding Bootcamp',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-16',
        features: [
          'Completely free',
          'Interactive coding challenges',
          'Real-world projects',
          'Certification programs',
          'Community support',
          'Open source curriculum'
        ],
        pricing: {
          free: 'Completely free forever'
        }
      },
      {
        id: 'khan-academy',
        name: 'Khan Academy',
        description: 'Free world-class education for anyone, anywhere.',
        url: 'https://khanacademy.org',
        tags: ['Free', 'K-12', 'Math', 'Science'],
        difficulty: 'beginner',
        type: 'Educational Platform',
        isFree: true,
        dateAdded: '2024-01-14',
        features: [
          'Completely free',
          'Personalized learning',
          'Progress tracking',
          'Mastery-based learning',
          'Multiple subjects',
          'Mobile apps'
        ],
        pricing: {
          free: 'Always free for everyone'
        }
      },
      {
        id: 'pluralsight',
        name: 'Pluralsight',
        description: 'Technology skills platform for developers and IT professionals.',
        url: 'https://pluralsight.com',
        tags: ['Technology', 'Professional', 'Skills Assessment', 'Hands-on'],
        difficulty: 'intermediate',
        type: 'Professional Platform',
        isFree: false,
        dateAdded: '2024-01-12',
        features: [
          'Skill assessments',
          'Learning paths',
          'Hands-on labs',
          'Analytics and insights',
          'Expert-led courses',
          'Certification prep'
        ],
        pricing: {
          paid: [
            'Personal: $29/month',
            'Premium: $45/month',
            'Free trial available'
          ]
        }
      },
      {
        id: 'edx',
        name: 'edX',
        description: 'University-level courses from Harvard, MIT, and other top institutions.',
        url: 'https://edx.org',
        tags: ['University', 'Academic', 'Research', 'Certificates'],
        difficulty: 'intermediate',
        type: 'Academic Platform',
        isFree: true,
        dateAdded: '2024-01-10',
        features: [
          'University partnerships',
          'Academic rigor',
          'Research-based content',
          'Verified certificates',
          'MicroMasters programs',
          'Professional education'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: ['Verified certificates: $50-300']
        }
      }
    ]
  },
  {
    id: 'communities',
    title: 'Communities & Networks',
    description: 'Join vibrant communities of innovators, developers, and creators to learn and collaborate.',
    icon: '👥',
    gradient: 'from-pink-500 to-purple-600',
    tags: ['Networking', 'Community', 'Collaboration', 'Support'],
    resources: [
      {
        id: 'discord-servers',
        name: 'Developer Discord Servers',
        description: 'Active Discord communities for developers, designers, and tech enthusiasts.',
        detailedDescription: 'Discord has become the go-to platform for developer communities. Join servers focused on specific technologies, programming languages, or general development topics to get help, share projects, and network with peers.',
        url: 'https://discord.com',
        tags: ['Discord', 'Real-time', 'Chat', 'Gaming'],
        difficulty: 'beginner',
        type: 'Chat Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-19',
        features: [
          'Real-time messaging',
          'Voice and video calls',
          'Screen sharing',
          'Community servers',
          'Bot integrations',
          'Mobile and desktop apps'
        ],
        pricing: {
          free: 'Free with optional Nitro subscription for premium features'
        }
      },
      {
        id: 'reddit-programming',
        name: 'Reddit Programming Communities',
        description: 'Subreddits for programmers, including r/programming, r/webdev, and more.',
        url: 'https://reddit.com/r/programming',
        tags: ['Reddit', 'Discussion', 'Q&A', 'News'],
        difficulty: 'beginner',
        type: 'Forum',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-17',
        features: [
          'Topic-specific subreddits',
          'Upvoting system',
          'AMA sessions',
          'News and discussions',
          'Code sharing',
          'Career advice'
        ],
        pricing: {
          free: 'Free to use, optional Reddit Premium'
        }
      },
      {
        id: 'stackoverflow',
        name: 'Stack Overflow',
        description: 'The largest online community for programmers to learn and share knowledge.',
        url: 'https://stackoverflow.com',
        tags: ['Q&A', 'Programming', 'Knowledge', 'Reputation'],
        difficulty: 'beginner',
        type: 'Q&A Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Question and answer format',
          'Reputation system',
          'Code snippets',
          'Tag-based organization',
          'Community moderation',
          'Job board integration'
        ],
        pricing: {
          free: 'Free for all users'
        }
      },
      {
        id: 'dev-to',
        name: 'DEV Community',
        description: 'A constructive and inclusive social network for software developers.',
        url: 'https://dev.to',
        tags: ['Blogging', 'Social', 'Articles', 'Inclusive'],
        difficulty: 'beginner',
        type: 'Social Platform',
        isFree: true,
        dateAdded: '2024-01-13',
        features: [
          'Article publishing',
          'Community discussions',
          'Tag-based content',
          'Personal profiles',
          'Job listings',
          'Podcast integration'
        ],
        pricing: {
          free: 'Completely free platform'
        }
      },
      {
        id: 'hashnode',
        name: 'Hashnode',
        description: 'Blogging platform for developers with built-in community features.',
        url: 'https://hashnode.com',
        tags: ['Blogging', 'Developer', 'Community', 'Publishing'],
        difficulty: 'beginner',
        type: 'Blogging Platform',
        isFree: true,
        dateAdded: '2024-01-11',
        features: [
          'Custom domain blogs',
          'Built-in community',
          'SEO optimization',
          'Newsletter integration',
          'Analytics dashboard',
          'Monetization options'
        ],
        pricing: {
          free: 'Free with premium features available'
        }
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Community of entrepreneurs building profitable online businesses.',
        url: 'https://indiehackers.com',
        tags: ['Entrepreneurship', 'Indie', 'Business', 'Revenue'],
        difficulty: 'intermediate',
        type: 'Entrepreneur Community',
        isFree: true,
        dateAdded: '2024-01-09',
        features: [
          'Entrepreneur stories',
          'Revenue transparency',
          'Community discussions',
          'Podcast content',
          'Product launches',
          'Networking events'
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
    description: 'Contribute to open source projects and build your portfolio while helping the community.',
    icon: '🔓',
    gradient: 'from-teal-500 to-green-600',
    tags: ['Open Source', 'Contribution', 'Portfolio', 'Collaboration'],
    resources: [
      {
        id: 'github',
        name: 'GitHub',
        description: 'The world\'s largest platform for open source collaboration and version control.',
        detailedDescription: 'GitHub is the leading platform for hosting and collaborating on code. It provides Git-based version control, issue tracking, project management, and social coding features that make it easy to contribute to open source projects.',
        url: 'https://github.com',
        tags: ['Git', 'Version Control', 'Collaboration', 'Portfolio'],
        difficulty: 'beginner',
        type: 'Development Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Git repositories',
          'Issue tracking',
          'Pull requests',
          'Project management',
          'GitHub Actions (CI/CD)',
          'GitHub Pages hosting'
        ],
        pricing: {
          free: 'Free for public repositories',
          paid: ['Pro: $4/month', 'Team: $4/user/month', 'Enterprise: $21/user/month']
        }
      },
      {
        id: 'gitlab',
        name: 'GitLab',
        description: 'Complete DevOps platform with built-in CI/CD and project management.',
        url: 'https://gitlab.com',
        tags: ['DevOps', 'CI/CD', 'Git', 'Project Management'],
        difficulty: 'intermediate',
        type: 'DevOps Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Git repositories',
          'Built-in CI/CD',
          'Issue boards',
          'Container registry',
          'Security scanning',
          'Kubernetes integration'
        ],
        pricing: {
          free: 'Free tier with 400 CI/CD minutes',
          paid: ['Premium: $19/user/month', 'Ultimate: $99/user/month']
        }
      },
      {
        id: 'first-timers-only',
        name: 'First Timers Only',
        description: 'Curated list of beginner-friendly open source projects.',
        url: 'https://firsttimersonly.com',
        tags: ['Beginner', 'First Contribution', 'Learning', 'Mentorship'],
        difficulty: 'beginner',
        type: 'Resource Directory',
        isFree: true,
        dateAdded: '2024-01-16',
        features: [
          'Beginner-friendly projects',
          'Contribution guidelines',
          'Mentorship opportunities',
          'Learning resources',
          'Community support',
          'Success stories'
        ],
        pricing: {
          free: 'Completely free resource'
        }
      },
      {
        id: 'good-first-issues',
        name: 'Good First Issues',
        description: 'Find good first issues to contribute to open source projects.',
        url: 'https://goodfirstissues.com',
        tags: ['First Issues', 'Contribution', 'Beginner', 'Discovery'],
        difficulty: 'beginner',
        type: 'Issue Finder',
        isFree: true,
        dateAdded: '2024-01-14',
        features: [
          'Curated issue lists',
          'Language filtering',
          'Difficulty levels',
          'Project descriptions',
          'Direct GitHub links',
          'Regular updates'
        ],
        pricing: {
          free: 'Free issue discovery tool'
        }
      },
      {
        id: 'hacktoberfest',
        name: 'Hacktoberfest',
        description: 'Annual event encouraging open source contributions throughout October.',
        url: 'https://hacktoberfest.com',
        tags: ['Event', 'October', 'Contributions', 'Swag'],
        difficulty: 'beginner',
        type: 'Annual Event',
        isFree: true,
        dateAdded: '2024-01-12',
        features: [
          'Month-long event',
          'Contribution tracking',
          'Swag rewards',
          'Global participation',
          'Beginner-friendly',
          'Community building'
        ],
        pricing: {
          free: 'Free participation with swag rewards'
        }
      },
      {
        id: 'opensource-guide',
        name: 'Open Source Guides',
        description: 'Learn how to launch and grow your open source project.',
        url: 'https://opensource.guide',
        tags: ['Guide', 'Best Practices', 'Community', 'Maintenance'],
        difficulty: 'intermediate',
        type: 'Educational Resource',
        isFree: true,
        dateAdded: '2024-01-10',
        features: [
          'Comprehensive guides',
          'Best practices',
          'Community building',
          'Legal considerations',
          'Project maintenance',
          'Real-world examples'
        ],
        pricing: {
          free: 'Free educational content'
        }
      }
    ]
  }
];