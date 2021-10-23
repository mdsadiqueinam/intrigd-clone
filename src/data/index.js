//features
import simplification from "images/features/Simplification.png";
import selection from "images/features/Selection.png";
import aggregation from "images/features/Aggregation.png";

// screenshots
import first from 'images/screenshot/14.jpg';
import second from 'images/screenshot/17.jpg';
import third from 'images/screenshot/11.jpg';
import fourth from 'images/screenshot/9.jpg';
import fifth from 'images/screenshot/8.jpg';
import sixth from 'images/screenshot/12.jpg';

// profiles
import jame from 'images/profiles/jame_sir.jpg';
import ayush from 'images/profiles/ayush.jpeg';
import shubham from 'images/profiles/shubham.jpeg';

const features = [
  {
    title: "Selection",
    description: "Cut out the clutter with curated content handpicked especially for you.",
    image: selection,
  },
  {
    title: "Aggregation",
    description: "Differing opinions aggregated in an easy-to-consume fashion.",
    image: aggregation,
  },
  {
    title: "Simplification",
    description: "Diverse range of complex topics simplified for you.",
    image: simplification,
  },
];


const menuItems = [
  {
    name: "home",
    to: "slider",
  },
  {
    name: "about",
    to: "about",
  },
  {
    name: "feature",
    to: "feature",
  },
  {
    name: "screenshot",
    to: "screenshot",
  },
  {
    name: "testimonial",
    to: "testimonial",
  },
  {
    name: "contact",
    to: "contact",
  },
];

const screenshots = [first, second, third, fourth, fifth, sixth];

const profiles = [
  {
    name: "James Joel",
    image: jame,
    stars: 4,
    description: "The best ever news app in the world I would say!!!. I mean it. Delivers exactly what you need"
  },
  {
    name: "Shubham Gupta",
    image: shubham,
    stars: 4,
    description: "Great thought and perfect implementation. App is very good with its content."
  },
  {
    name: "Ayush Maheshwari",
    image: ayush,
    stars: 4,
    description: "Best app with future requirements of youth."
  }
]

const links = {
  appStore: "https://apps.apple.com/in/app/intrigd-complex-news-made-easy/id1534920447",
  playStore: "https://play.google.com/store/apps/details?id=com.intrigd",
  tel :"tel:+91-8025043077",
  email: "mailto:info@intrigd.co",
  contact: "https://intrigd.co/mail.php",
  terms: "https://intrigd.co/terms.php",
  privacy: "https://intrigd.co/privacy.php",
  facebook: "https://www.facebook.com/Intrigdapp",
  twitter: "https://twitter.com/intrigd_",
  linkedin: "https://in.linkedin.com/company/intrigd",
  instagram: "https://instagram.com/intrigd_",
};

export { features, menuItems, screenshots, profiles, links };