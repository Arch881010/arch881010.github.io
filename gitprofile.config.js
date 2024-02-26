// gitprofile.config.js
const config = {
  github: {
    username: 'Arch881010', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'andrew-archer-419607283',
    //twitter: 'arif_szn',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    stackoverflow: '22493247/arch1010', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://arch.is-a.dev',
    phone: '',
    //email: 'arifulalamszn@gmail.com',
  },
  
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  
  skills: [
    'JavaScript',
    'Node.js',
    'Sqlite3',
    'Git',
    'Docker',
    'CSS',
    'Python',
  ],
  /*
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  */
  certifications: [
    {
      name: 'Microsoft Office Specialist 2016 Master',
      body: 'Completed MS Outlook, MS Excel Expert, MS Powerpoint, MS Word Expert exams on Certiport',
      year: 'March 2023',
     // link: 'https://example.com'
    },
    {
      name: 'Information Technology Specialist in JavaScript',
      body: 'Completed the JavaScript certification test on Certiport.',
      year: 'May 2023'
    }
  ], 
  education: [
    {
      institution: 'Harmony Grove School District',
      degree: 'High School Diploma',
      from: 2014,
      to: 2026,
    },
    /*
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
    */
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Expo Post',
      description: 'A work in progress social media platform.',
      //imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://expo-post.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;