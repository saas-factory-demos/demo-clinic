// 由 SaaS Factory 自動生成，請勿手動編輯（升級時會被覆蓋）。
// 客戶：示範診所客戶（晨光牙醫診所）
// subdomain：demo-clinic

export const projectConfig = {
  client: {
  "clientName": "示範診所客戶",
  "brandName": "晨光牙醫診所",
  "contactEmail": "demo-clinic@saas-factory.dev",
  "subdomain": "demo-clinic"
},
  siteTypes: {
  "enabled": [
    "cms",
    "lp"
  ],
  "lpCount": 1
},
  modules: {
    enabled: [
  "cms.contact",
  "cms.faq",
  "cms.locations",
  "cms.team"
] as const,
  },
  integrations: {
  "payments": [
    "newebpay"
  ],
  "shipping": [],
  "invoice": {
    "providers": [
      "ezpay"
    ],
    "mode": "trigger"
  },
  "notifications": [
    "email",
    "line",
    "sms"
  ]
},
  theme: {
  "presetId": "medical-clinical",
  "primaryColor": "#2a6fb0",
  "accentColor": "#7bbfd6",
  "radius": "subtle",
  "font": "sans",
  "density": "normal",
  "darkMode": "light",
  "motionLevel": 2
},
  i18n: {
  "defaultLocale": "zh-TW",
  "enabledLocales": [
    "zh-TW"
  ],
  "multiCurrency": false,
  "multiTimezone": false
},
  deploy: {
  "target": "vercel",
  "repoName": "demo-clinic",
  "environments": [
    "production"
  ],
  "privateRepo": false
},
} as const;

export type ProjectConfig = typeof projectConfig;
