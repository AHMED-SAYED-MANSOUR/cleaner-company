/* Partner logo wordmarks — typographic treatments in brand colors.
   Each returns SVG sized 120x60 (viewBox) — fits inside .partner-cell. */
window.FC = window.FC || {};

window.FC.partnerLogos = {
  /* Banque Misr — pyramid + wordmark stacked */
  "banque-misr": {
    color: "#E60E2D",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M70 6 L82 24 L58 24 Z" fill="#E60E2D"/>
        <path d="M70 10 L79 23 L61 23 Z" fill="#fff"/>
        <path d="M70 14 L75 22 L65 22 Z" fill="#E60E2D"/>
        <text x="70" y="40" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" font-weight="700" letter-spacing="0.6" fill="#E60E2D">BANQUE</text>
        <text x="70" y="54" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" font-weight="700" letter-spacing="0.6" fill="#0a2540">MISR</text>
      </g>
    </svg>`,
  },

  /* WE Telecom — purple "we" with bullet */
  "we": {
    color: "#7a1c5a",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="70" cy="20" r="3.2" fill="#a91d8a"/>
        <text x="70" y="48" text-anchor="middle" font-family="'Manrope',sans-serif" font-size="32" font-weight="800" fill="#7a1c5a" letter-spacing="-0.04em">we.</text>
      </g>
    </svg>`,
  },

  /* McDonald's — golden M arches */
  "mcdonalds": {
    color: "#DA291C",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M30 48 L30 18 C30 10 38 6 46 14 L54 24 L62 14 C70 6 78 10 78 18 L78 48 L70 48 L70 22 L62 32 L54 32 L46 22 L46 48 Z" fill="#FFC72C" stroke="#FFC72C" stroke-linejoin="round" stroke-width="0.5"/>
        <text x="86" y="38" font-family="'Manrope',sans-serif" font-size="11" font-weight="800" fill="#DA291C">McDonald's</text>
      </g>
    </svg>`,
  },

  /* KFC — red KFC pill */
  "kfc": {
    color: "#E4002B",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="38" y="14" width="64" height="32" rx="4" fill="#E4002B"/>
      <text x="70" y="38" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="20" font-weight="800" fill="#fff" letter-spacing="0.06em">KFC</text>
    </svg>`,
  },

  /* Sheraton — circle S above wordmark, centered */
  "sheraton": {
    color: "#0c2a4f",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="70" cy="14" r="10" fill="#0c2a4f"/>
        <text x="70" y="19" text-anchor="middle" font-family="serif" font-size="15" font-weight="700" fill="#c8a052" font-style="italic">S</text>
        <text x="70" y="40" text-anchor="middle" font-family="serif" font-size="12" font-weight="600" fill="#0c2a4f" letter-spacing="0.22em">SHERATON</text>
        <line x1="38" y1="45" x2="102" y2="45" stroke="#c8a052" stroke-width="0.7"/>
        <text x="70" y="54" text-anchor="middle" font-family="'Manrope',sans-serif" font-size="5.5" font-weight="500" fill="#0c2a4f" letter-spacing="0.3em">HOTELS &amp; RESORTS</text>
      </g>
    </svg>`,
  },

  /* Kempinski — black wordmark with crown accent */
  "kempinski": {
    color: "#1a1a1a",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M58 14 L62 20 L66 14 L70 20 L74 14 L78 20 L82 14 L82 22 L58 22 Z" fill="#c8a052"/>
        <text x="70" y="42" text-anchor="middle" font-family="serif" font-size="13" font-weight="600" fill="#1a1a1a" letter-spacing="0.18em">KEMPINSKI</text>
        <text x="70" y="52" text-anchor="middle" font-family="'Manrope',sans-serif" font-size="6" font-weight="500" fill="#1a1a1a" letter-spacing="0.4em">HOTELIERS SINCE 1897</text>
      </g>
    </svg>`,
  },

  /* Police Hospital — shield + cross */
  "police-hospital": {
    color: "#0d6e6e",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M22 12 L34 16 L34 32 C34 40 28 46 22 48 C16 46 10 40 10 32 L10 16 Z" fill="#0d6e6e"/>
        <path d="M19 24 L25 24 L25 28 L29 28 L29 32 L25 32 L25 38 L19 38 L19 32 L15 32 L15 28 L19 28 Z" fill="#fff"/>
        <text x="42" y="28" font-family="'Manrope',sans-serif" font-size="10" font-weight="700" fill="#0d6e6e">POLICE</text>
        <text x="42" y="42" font-family="'Manrope',sans-serif" font-size="10" font-weight="700" fill="#0d6e6e">HOSPITAL</text>
      </g>
    </svg>`,
  },

  /* Meat Moot — bold red wordmark with butcher accent */
  "meat-moot": {
    color: "#a91b1b",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <text x="70" y="32" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="800" fill="#a91b1b" letter-spacing="0.04em">MEAT MOOT</text>
        <line x1="38" y1="40" x2="60" y2="40" stroke="#a91b1b" stroke-width="2"/>
        <line x1="80" y1="40" x2="102" y2="40" stroke="#a91b1b" stroke-width="2"/>
        <text x="70" y="48" text-anchor="middle" font-family="'Manrope',sans-serif" font-size="6.5" font-weight="600" fill="#a91b1b" letter-spacing="0.3em">PREMIUM CUTS</text>
      </g>
    </svg>`,
  },

  /* Koshary El Tahrir — Arabic wordmark in orange-red */
  "koshary-tahrir": {
    color: "#d83a26",
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <text x="70" y="28" text-anchor="middle" font-family="'IBM Plex Sans Arabic','Tajawal',sans-serif" font-size="16" font-weight="800" fill="#d83a26">كشري التحرير</text>
        <text x="70" y="44" text-anchor="middle" font-family="'Manrope',sans-serif" font-size="9" font-weight="700" fill="#d83a26" letter-spacing="0.2em">KOSHARY EL TAHRIR</text>
      </g>
    </svg>`,
  },
};

/* Map partner index → logo key (matches order in i18n.js cards array) */
window.FC.partnerLogoFor = (i) => {
  const keys = ["banque-misr","sheraton","we","mcdonalds","police-hospital","meat-moot","kempinski","koshary-tahrir","kfc"];
  return window.FC.partnerLogos[keys[i]] || null;
};

/* Backwards compat for any code still calling crestFor */
window.FC.crestFor = (i, name) => {
  const l = window.FC.partnerLogoFor(i);
  return l ? l.svg : "";
};
