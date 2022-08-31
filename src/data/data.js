import komodoImage from '../assets/project-komodo.png';
import skbImage from '../assets/project-skb.png';
import tgsImage from '../assets/project-tgs.png';

const data = [
  {
    id: 1,
    link: 'https://belanja.skb.salatiga.go.id',
    taglink: 'belanja.skb.salatiga.go.id',
    title: 'SKB Online Shop',
    img: skbImage,
    desc: `
      Web based B2C <i>e-commerce</i> built with PHP using CodeIgniter.
      Features including user login, cart, shipping cost API, etc.
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
      A simple website about one of the most popular custom AOSP in Indonesia, Komodo OS.
      Provides information & latest releases of many devices by the Komodo OS team.
      `,
    tech: ['SCSS', 'Vue', 'Bootstrap'],
  },
  {
    id: 3,
    link: 'https://t.me/addstickers/AmpersandChannelDividerID',
    taglink: 'Ampersand Channel Divider',
    title: 'TG Animated Stickers',
    img: tgsImage,
    desc: `
      Animated sticker pack for channel posts divider on <a href="https://en.wikipedia.org/wiki/Telegram_(software)" class="text-decoration-none" target="_blank" rel="noreferrer">Telegram</a>.
      Having 120.000+ total usage for more than 50 channels.
      `,
    tech: ['Telegram', 'Bodymovin', 'Illustrator', 'After Effects'],
  },
];

const archive = [
  {
    year: 2022,
    title: 'SIMPUS',
    made: 'Mitra Solusi',
    tech: ['PHP', 'CodeIgniter', 'Firebird'],
    link: {
      external: 'http://simpus.salatiga.go.id/simpus',
    },
  },
  {
    year: 2022,
    title: 'SIMAngkel',
    made: '-',
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
    link: {
      private: '#',
    },
  },
  {
    year: 2021,
    title: 'SKB Online Shop',
    made: 'UPTD SPNF SKB Salatiga',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'RajaOngkir API'],
    link: {
      external: 'https://belanja.skb.salatiga.go.id',
      github: 'https://github.com/aryanataandi/skb-olshop',
    },
  },
  {
    year: 2021,
    title: 'Inventory & POS App',
    made: '-',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
    link: {
      github: 'https://github.com/aryanataandi/inventori-pos',
    },
  },
  {
    year: 2020,
    title: 'TG Animated Stickers',
    made: '-',
    tech: ['After Effects', 'Illustrator', 'Lottie'],
    link: {
      external: 'https://t.me/addstickers/AmpersandChannelDividerID',
    },
  },
  {
    year: 2020,
    title: 'Komodo OS Website',
    made: '-',
    tech: ['SCSS', 'Vue', 'Bootstrap'],
    link: {
      external: 'https://komodo-os.my.id/',
      github:
        'https://github.com/Komodo-OS-Devices/Komodo-OS-Devices.github.io',
    },
  },
];

export { data, archive };
