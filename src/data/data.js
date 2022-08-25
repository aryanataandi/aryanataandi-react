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

export default data;
