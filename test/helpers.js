const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Katrina Delos Reyes',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Katrina Delos Reyes',
    heading: 'ABOUT ME',
  },
  // {
  //   route: '/endeavors',
  //   title: 'Endeavors | Katrina Delos Reyes',
  //   heading: 'ENDEAVORS',
  // },
  // {
  //   route: '/blog',
  //   title: 'Blog | Katrina Delos Reyes',
  //   heading: 'BLOG',
  // },
  {
    route: '/contact',
    title: 'Contact | Katrina Delos Reyes',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
