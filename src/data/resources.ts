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
    description: 'Cutting-edge AI tools and platforms to supercharge your projects and automate workflows.',
    icon: '🤖',
    gradient: 'from-blue-600 to-purple-600',
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced AI assistant for writing, coding, analysis, and creative tasks.',
        detailedDescription: 'ChatGPT is OpenAI\'s flagship conversational AI that can help with a wide range of tasks including writing, coding, analysis, brainstorming, and learning. It\'s particularly useful for developers, content creators, and anyone looking to enhance their productivity with AI assistance.',
        url: 'https://chat.openai.com',
        tags: ['AI', 'Writing', 'Coding', 'Assistant', 'Productivity'],
        difficulty: 'beginner',
        type: 'AI Assistant',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Writing assistance and editing',
          'Data analysis and visualization',
          'Creative brainstorming',
          'Learning and tutoring'
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
        tags: ['AI', 'Coding', 'Programming', 'IDE', 'Productivity'],
        difficulty: 'intermediate',
        type: 'Development Tool',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-10',
        features: [
          'Real-time code suggestions',
          'Multi-language support',
          'Context-aware completions',
          'IDE integration',
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
        tags: ['AI', 'Design', 'Art', 'Image Generation', 'Creative'],
        difficulty: 'beginner',
        type: 'Design Tool',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'AI writing assistant integrated into the popular productivity platform.',
        url: 'https://notion.so/product/ai',
        tags: ['AI', 'Productivity', 'Writing', 'Organization', 'Collaboration'],
        difficulty: 'beginner',
        type: 'Productivity Tool',
        isFree: true,
        dateAdded: '2024-01-08'
      },
      {
        id: 'claude',
        name: 'Claude',
        description: 'Anthropic\'s AI assistant focused on helpful, harmless, and honest interactions.',
        url: 'https://claude.ai',
        tags: ['AI', 'Assistant', 'Writing', 'Analysis', 'Research'],
        difficulty: 'beginner',
        type: 'AI Assistant',
        isFree: true,
        dateAdded: '2024-01-20'
      },
      {
        id: 'runway-ml',
        name: 'Runway ML',
        description: 'AI-powered creative tools for video editing, image generation, and more.',
        url: 'https://runwayml.com',
        tags: ['AI', 'Video', 'Creative', 'Editing', 'Generation'],
        difficulty: 'intermediate',
        type: 'Creative Tool',
        isFree: true,
        dateAdded: '2024-01-18'
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    description: 'Discover exciting hackathons and coding competitions to showcase your skills and win prizes.',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-600',
    resources: [
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'The home for hackathons. Discover, participate in, and host hackathons.',
        detailedDescription: 'Devpost is the leading platform for hackathons and developer competitions. It connects developers with opportunities to showcase their skills, learn new technologies, and compete for prizes while building innovative solutions.',
        url: 'https://devpost.com',
        tags: ['Hackathons', 'Competitions', 'Networking', 'Projects', 'Community'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Hackathon discovery and registration',
          'Project submission and showcase',
          'Team formation tools',
          'Prize tracking',
          'Portfolio building',
          'Community networking'
        ],
        pricing: {
          free: 'Free for participants and basic organizer features',
          paid: ['Premium organizer features available']
        },
        requirements: [
          'Developer account',
          'Project submission requirements vary by hackathon'
        ],
        alternatives: ['HackerEarth', 'MLH', 'AngelHack']
      },
      {
        id: 'mlh',
        name: 'Major League Hacking',
        description: 'The official student hackathon league with events worldwide.',
        url: 'https://mlh.io',
        tags: ['Hackathons', 'Students', 'Community', 'Events', 'Learning'],
        difficulty: 'beginner',
        type: 'Organization',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-10'
      },
      {
        id: 'kaggle-competitions',
        name: 'Kaggle Competitions',
        description: 'Data science competitions with real-world problems and cash prizes.',
        url: 'https://kaggle.com/competitions',
        tags: ['Data Science', 'Machine Learning', 'Competitions', 'Analytics'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'hackerearth',
        name: 'HackerEarth Hackathons',
        description: 'Programming challenges and hackathons for developers.',
        url: 'https://hackerearth.com/hackathon',
        tags: ['Programming', 'Hackathons', 'Challenges', 'Skills'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-08'
      },
      {
        id: 'junction',
        name: 'Junction',
        description: 'Europe\'s leading hackathon bringing together diverse talent.',
        url: 'https://junction.fi',
        tags: ['Hackathons', 'Europe', 'Innovation', 'Networking'],
        difficulty: 'intermediate',
        type: 'Event',
        isFree: true,
        dateAdded: '2024-01-14'
      },
      {
        id: 'nasa-space-apps',
        name: 'NASA Space Apps Challenge',
        description: 'Global hackathon focused on space exploration and Earth science.',
        url: 'https://spaceappschallenge.org',
        tags: ['Space', 'NASA', 'Science', 'Global', 'Innovation'],
        difficulty: 'intermediate',
        type: 'Event',
        isFree: true,
        dateAdded: '2024-01-16'
      }
    ]
  },
  {
    id: 'funding',
    title: 'Funding & Grants',
    description: 'Find funding opportunities, grants, and investment programs for your startup or project.',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-600',
    resources: [
      {
        id: 'y-combinator',
        name: 'Y Combinator',
        description: 'The world\'s most successful startup accelerator program.',
        detailedDescription: 'Y Combinator is a startup accelerator that has funded over 4,000 companies including Airbnb, Dropbox, and Reddit. They provide seed funding, mentorship, and a strong alumni network to help startups succeed.',
        url: 'https://ycombinator.com',
        tags: ['Accelerator', 'Startup', 'Funding', 'Mentorship', 'Silicon Valley'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          '$500K investment for 7% equity',
          '3-month intensive program',
          'Access to YC alumni network',
          'Demo Day presentation',
          'Ongoing founder support',
          'Office hours with partners'
        ],
        pricing: {
          free: 'No upfront cost - equity-based investment'
        },
        requirements: [
          'Incorporated company',
          'Founding team commitment',
          'Scalable business idea',
          'Application and interview process'
        ],
        alternatives: ['Techstars', '500 Startups', 'Seedcamp']
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Global startup accelerator and venture capital firm.',
        url: 'https://techstars.com',
        tags: ['Accelerator', 'Startup', 'Mentorship', 'Global', 'Venture Capital'],
        difficulty: 'advanced',
        type: 'Accelerator',
        isFree: false,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Crowdfunding platform for creative projects and innovative products.',
        url: 'https://kickstarter.com',
        tags: ['Crowdfunding', 'Creative', 'Products', 'Community'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-10'
      },
      {
        id: 'indiegogo',
        name: 'Indiegogo',
        description: 'Flexible crowdfunding platform for entrepreneurs and creators.',
        url: 'https://indiegogo.com',
        tags: ['Crowdfunding', 'Flexible', 'Innovation', 'Entrepreneurs'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-08'
      },
      {
        id: 'small-business-grants',
        name: 'Grants.gov',
        description: 'Official U.S. government portal for federal grant opportunities.',
        url: 'https://grants.gov',
        tags: ['Grants', 'Government', 'Small Business', 'Federal'],
        difficulty: 'intermediate',
        type: 'Government',
        isFree: true,
        dateAdded: '2024-01-14'
      },
      {
        id: 'angel-list',
        name: 'AngelList',
        description: 'Platform connecting startups with angel investors and VCs.',
        url: 'https://angel.co',
        tags: ['Angel Investors', 'Venture Capital', 'Startups', 'Networking'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-16'
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Platforms',
    description: 'Top-quality educational resources and courses to expand your knowledge and skills.',
    icon: '📚',
    gradient: 'from-indigo-500 to-purple-600',
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'Online courses from top universities and companies worldwide.',
        detailedDescription: 'Coursera partners with leading universities and organizations to offer high-quality online courses, specializations, and degree programs. Learn from experts at Stanford, Yale, Google, IBM, and more.',
        url: 'https://coursera.org',
        tags: ['Education', 'Courses', 'Universities', 'Certificates', 'Skills'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'University-level courses',
          'Professional certificates',
          'Degree programs',
          'Hands-on projects',
          'Peer interaction',
          'Mobile learning'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: [
            'Coursera Plus: $59/month for unlimited access',
            'Individual courses: $39-79',
            'Specializations: $39-79/month',
            'Degree programs: Varies by university'
          ]
        },
        requirements: [
          'Internet connection',
          'Basic computer skills',
          'Course-specific prerequisites may apply'
        ],
        alternatives: ['edX', 'Udacity', 'Khan Academy']
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'Free coding bootcamp with interactive lessons and projects.',
        url: 'https://freecodecamp.org',
        tags: ['Coding', 'Programming', 'Web Development', 'Free', 'Bootcamp'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'khan-academy',
        name: 'Khan Academy',
        description: 'Free world-class education for anyone, anywhere.',
        url: 'https://khanacademy.org',
        tags: ['Education', 'Free', 'Math', 'Science', 'Programming'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-10'
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Marketplace for online learning with courses on every topic.',
        url: 'https://udemy.com',
        tags: ['Courses', 'Skills', 'Professional', 'Marketplace'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: false,
        dateAdded: '2024-01-08'
      },
      {
        id: 'pluralsight',
        name: 'Pluralsight',
        description: 'Technology skills platform for developers and IT professionals.',
        url: 'https://pluralsight.com',
        tags: ['Technology', 'Programming', 'IT', 'Professional'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: false,
        dateAdded: '2024-01-14'
      },
      {
        id: 'codecademy',
        name: 'Codecademy',
        description: 'Interactive coding lessons and programming courses.',
        url: 'https://codecademy.com',
        tags: ['Coding', 'Interactive', 'Programming', 'Web Development'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-16'
      }
    ]
  },
  {
    id: 'communities',
    title: 'Communities & Networking',
    description: 'Connect with like-minded innovators, join communities, and build your professional network.',
    icon: '🌐',
    gradient: 'from-pink-500 to-rose-600',
    resources: [
      {
        id: 'discord-servers',
        name: 'Developer Discord Servers',
        description: 'Active Discord communities for developers, designers, and entrepreneurs.',
        detailedDescription: 'Discord has become a hub for developer communities where you can get real-time help, share projects, participate in events, and network with peers. Popular servers include The Programmer\'s Hangout, Reactiflux, and many language-specific communities.',
        url: 'https://discord.com',
        tags: ['Community', 'Discord', 'Developers', 'Real-time', 'Networking'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Real-time chat and voice',
          'Code sharing and collaboration',
          'Community events and workshops',
          'Job opportunities',
          'Mentorship programs',
          'Project showcases'
        ],
        pricing: {
          free: 'Free to join most communities'
        },
        requirements: [
          'Discord account',
          'Community-specific rules compliance'
        ],
        alternatives: ['Slack communities', 'Reddit', 'Stack Overflow']
      },
      {
        id: 'reddit-programming',
        name: 'Reddit Programming Communities',
        description: 'Active subreddits for programmers, entrepreneurs, and tech enthusiasts.',
        url: 'https://reddit.com/r/programming',
        tags: ['Reddit', 'Programming', 'Community', 'Discussion', 'News'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'stack-overflow',
        name: 'Stack Overflow',
        description: 'The largest online community for programmers to learn and share knowledge.',
        url: 'https://stackoverflow.com',
        tags: ['Programming', 'Q&A', 'Knowledge', 'Community', 'Help'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-10'
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Community of independent entrepreneurs building profitable businesses.',
        url: 'https://indiehackers.com',
        tags: ['Entrepreneurs', 'Indie', 'Business', 'Community', 'Revenue'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-08'
      },
      {
        id: 'product-hunt',
        name: 'Product Hunt',
        description: 'Platform to discover and launch new products.',
        url: 'https://producthunt.com',
        tags: ['Products', 'Launch', 'Discovery', 'Community', 'Feedback'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-14'
      },
      {
        id: 'dev-to',
        name: 'DEV Community',
        description: 'Community of software developers sharing knowledge and experiences.',
        url: 'https://dev.to',
        tags: ['Developers', 'Blogging', 'Community', 'Knowledge', 'Sharing'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        dateAdded: '2024-01-16'
      }
    ]
  },
  {
    id: 'open-source',
    title: 'Open Source Projects',
    description: 'Contribute to open source projects and discover tools to accelerate your development.',
    icon: '🔓',
    gradient: 'from-teal-500 to-cyan-600',
    resources: [
      {
        id: 'github',
        name: 'GitHub',
        description: 'The world\'s largest platform for open source collaboration and code hosting.',
        detailedDescription: 'GitHub is the leading platform for version control and collaboration, hosting millions of open source projects. It\'s essential for developers to showcase their work, contribute to projects, and collaborate with teams worldwide.',
        url: 'https://github.com',
        tags: ['Git', 'Version Control', 'Collaboration', 'Open Source', 'Code Hosting'],
        difficulty: 'beginner',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Git repository hosting',
          'Issue tracking and project management',
          'Pull requests and code review',
          'GitHub Actions for CI/CD',
          'GitHub Pages for static sites',
          'Package registry'
        ],
        pricing: {
          free: 'Free for public repositories and limited private repos',
          paid: [
            'GitHub Pro: $4/month for enhanced features',
            'GitHub Team: $4/user/month for organizations',
            'GitHub Enterprise: Custom pricing'
          ]
        },
        requirements: [
          'Git knowledge (basic)',
          'GitHub account',
          'Command line or Git GUI tool'
        ],
        alternatives: ['GitLab', 'Bitbucket', 'SourceForge']
      },
      {
        id: 'gitlab',
        name: 'GitLab',
        description: 'Complete DevOps platform with built-in CI/CD and project management.',
        url: 'https://gitlab.com',
        tags: ['Git', 'DevOps', 'CI/CD', 'Project Management', 'Open Source'],
        difficulty: 'intermediate',
        type: 'Platform',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-12'
      },
      {
        id: 'first-timers-only',
        name: 'First Timers Only',
        description: 'Curated list of beginner-friendly open source projects.',
        url: 'https://firsttimersonly.com',
        tags: ['Beginners', 'First Contribution', 'Open Source', 'Learning'],
        difficulty: 'beginner',
        type: 'Resource',
        isFree: true,
        featured: true,
        dateAdded: '2024-01-10'
      },
      {
        id: 'good-first-issues',
        name: 'Good First Issues',
        description: 'Find beginner-friendly issues in popular open source projects.',
        url: 'https://goodfirstissues.com',
        tags: ['Beginners', 'Issues', 'Contributions', 'Open Source'],
        difficulty: 'beginner',
        type: 'Resource',
        isFree: true,
        dateAdded: '2024-01-08'
      },
      {
        id: 'awesome-lists',
        name: 'Awesome Lists',
        description: 'Curated lists of awesome resources for various technologies.',
        url: 'https://github.com/sindresorhus/awesome',
        tags: ['Curated', 'Resources', 'Lists', 'Technology', 'Learning'],
        difficulty: 'beginner',
        type: 'Resource',
        isFree: true,
        dateAdded: '2024-01-14'
      },
      {
        id: 'hacktoberfest',
        name: 'Hacktoberfest',
        description: 'Annual event encouraging open source contributions.',
        url: 'https://hacktoberfest.com',
        tags: ['Event', 'Contributions', 'Community', 'Annual', 'Rewards'],
        difficulty: 'beginner',
        type: 'Event',
        isFree: true,
        dateAdded: '2024-01-16'
      }
    ]
  }
];