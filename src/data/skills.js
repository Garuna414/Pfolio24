let images = [
  "https://img.icons8.com/ios-filled/150/c-plus-plus-logo.png",
  "https://img.icons8.com/ios-glyphs/120/python.png",
  "https://img.icons8.com/ios-filled/150/javascript.png",
  "https://img.icons8.com/ios-filled/150/html-5--v2.png",
  "https://img.icons8.com/ios-filled/150/css3.png",
  "https://img.icons8.com/ios-glyphs/120/react.png",
  "https://img.icons8.com/ios/150/express-js.png",
  "https://user-images.githubusercontent.com/7850794/164965523-3eced4c4-6020-467e-acde-f11b7900ad62.png",
  "https://img.icons8.com/material-outlined/192/tailwind_css.png",
  "https://img.icons8.com/ios-filled/150/mysql-logo.png",
  "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png",
  "https://img.icons8.com/ios-filled/150/git.png",
  "https://img.icons8.com/windows/128/github.png",
  "https://img.icons8.com/ios-glyphs/120/visual-studio.png",
  "https://img.icons8.com/pulsar-line/144/postman-api.png",
];

export default {
  fEnd: {
    stack: "Languages",
    names: ["C++", "Python", "JavaScript", "HTML5", "CSS3"],
    logos: [images[0], images[1], images[2], images[3], images[4]],
  },
  bEnd: {
    stack: "Frameworks & Libraries",
    names: ["React JS", "Express JS", "Framer Motion", "Tailwind CSS"],
    logos: [images[5], images[6], images[7], images[8]],
  },
  dBase: {
    stack: "Database",
    names: ["MySQL", "Mongo DB"],
    logos: [images[9], images[10]],
  },
  other: {
    stack: "Other Tools",
    names: ["Git", "GitHub", "VS Code", "Postman"],
    logos: [images[11], images[12], images[13], images[14]],
  },
};

/*
export default {
  "FrontEnd": {
    cpp: {
      name: "C++",
      link: images[0],
    },
    py: {
      name: "Python",
      link: images[1],
    },
    js: {
      name: "JavaScript",
      link: images[2],
    },
    html: {
      name: "HTML5",
      link: images[3],
    },
    css: {
      name: "CSS3",
      link: images[4],
    },
  },
  "BackEnd": {
    react: {
      name: "React JS",
      link: images[5],
    },
    express: {
      name: "Express JS",
      link: images[6],
    },
    framer: {
      name: "Framer Motion",
      link: images[7],
    },
    tailwind: {
      name: "Tailwind CSS",
      link: images[8],
    },
  },
  "Database": {
    sql: {
      name: "MySQL",
      link: images[9],
    },
    mongo: {
      name: "Mongo DB",
      link: images[10],
    },
  },
  "Other Tools": {
    git: {
      name: "Git",
      link: images[11],
    },
    github: {
      name: "GitHub",
      link: images[12],
    },
    vs: {
      name: "VS Code",
      link: images[13],
    },
    postman: {
      name: "Postman",
      link: images[14],
    },
  },
};


FrontEnd: [
    ["C++", "Python", "JavaScript", "HTML5", "CSS3"],
    [(images[0], images[1], images[2], images[3], images[4])],
  ],
  BackEnd: [
    ["React JS", "Express JS", "Framer Motion", "Tailwind CSS"],
    [images[5], images[6], images[7], images[8]],
  ],
  Database: [
    ["MySQL", "Mongo DB"],
    [images[9], images[10]],
  ],
  "Other Tools": [
    ["Git", "GitHub", "VS Code", "Postman"],
    [images[11], images[12], images[13], images[14]],
  ],

*/
