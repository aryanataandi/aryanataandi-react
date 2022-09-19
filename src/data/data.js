import komodoImage from '../assets/project-komodo.png';
import skbImage from '../assets/project-skb.png';
import tgsImage from '../assets/project-tgs.png';

const data = [
  {
    id: 1,
    link: 'https://belanja.skb.salatiga.go.id',
    taglink: 'belanja.skb.salatiga.go.id',
    title: 'Mitra Online Shop',
    img: skbImage,
    desc: `
      Web based Business-to-Consumer e-commerce built with PHP using CodeIgniter.
      Features including user login, shopping cart, shipping cost API, etc.
      `,
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
  },
  {
    id: 2,
    link: 'https://komodo-os.my.id',
    taglink: 'komodo-os.my.id',
    title: 'Komodo OS Website',
    img: komodoImage,
    desc: `
      A simple website about one of the most popular custom AOSP from Indonesia, Komodo OS.
      Provides information & latest releases of many devices by the Komodo OS team.
      `,
    tech: ['SCSS', 'React', 'Bootstrap'],
  },
  {
    id: 3,
    link: 'https://t.me/addstickers/AmpersandChannelDividerID',
    taglink: 'Ampersand Channel Divider',
    title: 'TG Animated Stickers',
    img: tgsImage,
    desc: `
      Animated sticker pack for channel posts divider on <a href="https://en.wikipedia.org/wiki/Telegram_(software)" class="text-decoration-none" target="_blank" rel="noreferrer">Telegram</a>.
      Having 120.000+ total usage for more than 50 android community channels.
      `,
    tech: ['Telegram', 'Bodymovin', 'Illustrator', 'After Effects'],
  },
];

const archive = [
  {
    year: 2022,
    title: 'Komodo OS Website',
    made: 'Personal Project',
    tech: ['SCSS', 'React', 'Bootstrap'],
    link: [
      {
        type: 'external',
        link: 'https://komodo-os.my.id',
      },
      {
        type: 'github',
        link: 'https://github.com/Komodo-OS-Devices/Komodo-OS-Devices.github.io/tree/react',
      },
    ],
  },
  {
    year: 2022,
    title: 'Laboratory Information Management System',
    made: 'Mitra Solusi',
    tech: ['PHP', 'CodeIgniter', 'Firebird'],
    link: [],
  },
  {
    year: 2022,
    title: 'Health Center Information Management System',
    made: 'Mitra Solusi',
    tech: ['PHP', 'CodeIgniter', 'Firebird'],
    link: [
      {
        type: 'external',
        link: 'http://simpus.salatiga.go.id/simpus',
      },
    ],
  },
  {
    year: 2021,
    title: 'Mitra Online Shop',
    made: 'SKB Salatiga',
    tech: ['PHP', 'CodeIgniter', 'jQuery', 'MySQL'],
    link: [
      {
        type: 'external',
        link: 'https://belanja.skb.salatiga.go.id',
      },
      {
        type: 'github',
        link: 'https://github.com/aryanataandi/skb-olshop',
      },
    ],
  },
  {
    year: 2021,
    title: 'Inventory Management System',
    made: 'Personal Project',
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
    link: [
      {
        type: 'github',
        link: 'https://github.com/aryanataandi/inventori-pos',
      },
    ],
  },
  {
    year: 2020,
    title: 'Custom Bootanimation for Android',
    made: 'Personal Project',
    tech: ['After Effects', 'Android'],
    link: [
      {
        type: 'external',
        link: 'https://t.me/addstickers/AmpersandChannelDividerID',
      },
    ],
  },
  {
    year: 2020,
    title: 'TG Animated Stickers',
    made: 'Personal Project',
    tech: ['After Effects', 'Illustrator', 'Lottie'],
    link: [
      {
        type: 'external',
        link: 'https://t.me/addstickers/AmpersandChannelDividerID',
      },
    ],
  },
  {
    year: 2020,
    title: 'Komodo OS Website V1',
    made: 'Personal Project',
    tech: ['SCSS', 'Vue', 'Bootstrap'],
    link: [
      {
        type: 'github',
        link: 'https://github.com/Komodo-OS-Devices/Komodo-OS-Devices.github.io',
      },
    ],
  },
];

export { data, archive };
