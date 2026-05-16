/* Partner crest icons — distinctive SVG marks per sector */
window.FC = window.FC || {};
window.FC.partnerCrests = {
  "el-marakby": `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 26V12L16 4l12 8v14"/><path d="M10 26V18h12v8"/><path d="M14 22h4"/></svg>`,
  "el-amir":    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="14" r="6"/><path d="M16 8l1.5 3 3.5.5-2.5 2.5.5 3.5L16 16l-3 1.5.5-3.5L11 11.5l3.5-.5z" fill="currentColor"/><path d="M10 28l3-6h6l3 6"/></svg>`,
  "academy":    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12L16 5l14 7-14 7z"/><path d="M8 15v6c0 2 4 4 8 4s8-2 8-4v-6"/><path d="M28 12v8"/></svg>`,
  "youssef":    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="24" height="20" rx="2"/><path d="M4 12h24"/><circle cx="9" cy="9" r="0.6" fill="currentColor"/><circle cx="12" cy="9" r="0.6" fill="currentColor"/><path d="M9 18l4 4 10-10"/></svg>`,
  "armed":      `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l11 4v9c0 7-5 11-11 13-6-2-11-6-11-13V7z"/><path d="M11 16l4 4 6-7"/></svg>`,
  "police":     `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l12 4v9c0 7-5 12-12 14-7-2-12-7-12-14V7z"/><path d="M16 10v6"/><circle cx="16" cy="20" r="1.5" fill="currentColor"/></svg>`,
  "interior":   `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><path d="M16 4v24M4 16h24M7 7l18 18M25 7L7 25"/></svg>`,
  "petroleum":  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3c5 6 8 10 8 14a8 8 0 1 1-16 0c0-4 3-8 8-14z" fill="currentColor" fill-opacity=".14"/><path d="M16 3c5 6 8 10 8 14a8 8 0 1 1-16 0c0-4 3-8 8-14z"/><path d="M12 18c0 2 1.5 3.5 4 3.5"/></svg>`,
  "default":    `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><path d="M16 8l2 5 5 1-3.5 4 1 5-4.5-2.5L11.5 23l1-5L9 14l5-1z" fill="currentColor" fill-opacity=".18"/></svg>`,
};

window.FC.crestFor = (i, name) => {
  const keys = ["el-marakby","el-amir","academy","youssef","armed","police","interior","petroleum","default"];
  return window.FC.partnerCrests[keys[i] || "default"] || window.FC.partnerCrests.default;
};
