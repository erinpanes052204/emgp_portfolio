// ============================================================
// EVERYTHING YOU EDIT LIVES IN THIS FILE.
//   SITE        your details
//   PROJECTS    code projects: image + text, alternating left/right
//   PIXEL_ART   art carousel
// ============================================================

const SITE = {
  name: "Erin Matthew Panes",
  role: "I'm a programmer and pixel artist.",
  about: [
    "Computer Science graduate and certified Customer Service Representative with experience in T-Mobile account management, OCR development, and data analytics. Background spans technical development, data processing, and customer-facing roles. Detail-oriented with strong analytical thinking and communication skills.",
    "Outside of code, I make pixel art",
  ],
  heroImage: "https://i.imgur.com/8RJE6rj.png",
  heroStyle: "photo",   // "photo" = smooth, framed. "pixel" = crisp pixel art that bobs up and down
  skills: ["HTML", "CSS", "JavaScript", "React", "Python", "Git"], // add or remove freely
  contactText: "Contact me through",
  // The buttons in the Contact section, in this order.
  // Leave a url as "" and that button is hidden, so you can fill in only what you use.
  // For email you can just write the address, e.g. "me@example.com".
  contact: [
    { label: "GitHub",   url: "https://github.com/erinpanes052204" },
    { label: "Facebook", url: "https://www.facebook.com/matthew.gamboa.7758" },
    { label: "paneserinmateo@gmail.com",    url: "paneserinmateo@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/erin-matthew-panes-3b3021324/" },
    // { label: "Itch.io", url: "https://your-name.itch.io" },
  ],
};

// ------------------------------------------------------------
// PROJECTS
// Each project is an image on one side and text on the other.
// They alternate automatically: image left, then right, etc.
//
// ===== TEMPLATE: copy this block into the list below =====
// {
//   title: "Project name",
//   description: "A sentence or two about what it does and what it's built with.",
//   image: "images/project-name.png",       // screenshot, ~1280x720 works well
//   live: "https://your-username.github.io/your-repo/",   // "Live app" button
//   code: "https://github.com/your-username/your-repo",   // "Learn more" button
//   imageSide: "left",                      // optional: "left" or "right" (overrides alternating)
//   color: "#3b5dc9",                       // optional: colour of the panel behind the image
// },
//
// Shortcut: a plain link also works. The title, description and
// "Learn more" button are then pulled from GitHub (no image):
//   "https://your-username.github.io/your-repo/",
// ------------------------------------------------------------
const PROJECTS = [
  {
    title: "WebGBA",
    description: "A simple project I made which is a Game Boy Advance emulator that runs entirely in your browser. The emulation is mGBA 0.10.5 compiled to WebAssembly; the interface is React.",
    image: "https://i.imgur.com/OVpPRM9.png",
    live: "https://erinpanes052204.github.io/WebGBA/",
    code: "https://github.com/erinpanes052204/WebGBA",
  },
  {
    title: "Yt-Dlp GUI",
    description: "A simple, minimalist Windows app for yt-dlp made using python. Paste a link, pick the quality, click Download. No command line.",
    image: "https://i.imgur.com/ClNZhZL.png",
    live: "#",
    code: "https://github.com/erinpanes052204/YT-DLP-GUI",
  },
];

// ------------------------------------------------------------
// PIXEL ART CAROUSEL
// Visitors swipe or use the arrows. Click a piece to enlarge.
//
// ===== TEMPLATE: copy this line into the list below =====
//   { title: "Piece name", src: "images/art/piece-name.png", note: "32x32, 2026" },
//
// (`note` is optional.) Save your PNGs in images/art/.
// ------------------------------------------------------------
const PIXEL_ART = [
  { title: "Burgess & Kuzan",    src: "https://i.imgur.com/YjpfE8b.jpeg" },
  { title: "Page One",    src: "https://i.imgur.com/uIz1Fsk.png" },
  { title: "Ulti",    src: "https://i.imgur.com/45ibA5U.png" },
  { title: "Black Maria",      src: "https://i.imgur.com/XC2C1ID.png" },
  { title: "Sasaki",   src: "https://i.imgur.com/6fWC6C7.png" },
  { title: "Law and Bepo", src: "https://i.imgur.com/esGdjHS.jpeg" },
  { title: "Heart Pirates",    src: "https://i.imgur.com/Q7wsnzv.jpeg" },
  { title: "Legends",     src: "https://i.imgur.com/l7VzEUW.jpeg" },
  { title: "CP0",     src: "https://i.imgur.com/BGZ3nsb.jpeg" },
  { title: "Strawhats Egghead p1",     src: "https://i.imgur.com/HQwQ6xN.jpeg" },
  { title: "Strawhats Egghead p2",     src: "https://i.imgur.com/KMrZ2xd.jpeg" },
  { title: "Seraphims",     src: "https://i.imgur.com/w9om5VT.jpeg" },
];

const PIXEL_INTRO = "Pixel art is my favourite thing to make outside of code. Swipe through a few pieces, and click one to see it bigger.";
