// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-lectures",
          title: "lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lectures/index.html";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Here are some additional materials that may be of use in learning about the theory and practice of computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-first-homework-assignment-released-due-date-febuary-10",
      
        title: "First homework assignment released. Due date Febuary 10.",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2025/01/12/firsthw.html";
        
      },
    },{id: "post-welcome-to-cs-5787",
      
        title: "Welcome to CS 5787!!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2025/01/11/welcome.html";
        
      },
    },{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-welcome-to-cs-5787",
          title: 'Welcome to CS 5787!!',
          description: "",
          section: "News",},{id: "projects-project-1-hybrid-images",
          title: 'project 1: hybrid images',
          description: "coming soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
