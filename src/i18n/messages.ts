export const locales = ["en", "hi", "es", "ja"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  hi: "हि",
  es: "ES",
  ja: "日",
};

export const messages = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend engineer and product-minded design technologist",
      title: "I build premium interfaces that make complex products feel inevitable.",
      body: "Yuvraj crafts fast, accessible, motion-rich web applications with the discipline of an engineer and the eye of a product designer.",
      primary: "View projects",
      secondary: "Contact me",
      status: "Building at Kansoft — full-stack developer",
    },
    about: {
      title: "A portfolio built like a product surface.",
      body: "I work at the intersection of frontend architecture, interaction design, and performance. My sweet spot is turning ambiguous product ideas into interfaces that feel calm, precise, and deeply usable.",
    },
    labels: {
      years: "Years building",
      tenants: "Tenants scaled",
      setup: "Setup time cut",
      onboarding: "Onboarding automated",
      featured: "Featured work",
      stack: "Core stack",
      timeline: "Timeline",
      github: "GitHub signal",
      resume: "Resume",
      contact: "Contact",
    },
    sections: {
      experience: "Experience engineered for scale",
      skills: "Capabilities",
      projects: "Selected projects",
      github: "Tools I ship with",
      contact: "Let’s build something sharp.",
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send inquiry",
      sending: "Sending…",
      success: "Message sent — I’ll get back to you soon.",
      error: "Something went wrong. Please try again or email me directly.",
    },
  },
  hi: {
    nav: { about: "परिचय", experience: "अनुभव", skills: "कौशल", projects: "प्रोजेक्ट", contact: "संपर्क" },
    hero: {
      eyebrow: "फ्रंटएंड इंजीनियर और प्रोडक्ट-फोकस्ड डिजाइन टेक्नोलॉजिस्ट",
      title: "मैं जटिल उत्पादों को सहज महसूस कराने वाले प्रीमियम इंटरफेस बनाता हूं।",
      body: "युवराज तेज, सुलभ और मोशन-समृद्ध वेब ऐप बनाते हैं जहां इंजीनियरिंग अनुशासन और डिजाइन दृष्टि साथ चलते हैं।",
      primary: "प्रोजेक्ट देखें",
      secondary: "संपर्क करें",
      status: "Kansoft में कार्यरत — फुल-स्टैक डेवलपर",
    },
    about: {
      title: "एक पोर्टफोलियो जो प्रोडक्ट सतह जैसा बना है।",
      body: "मैं फ्रंटएंड आर्किटेक्चर, इंटरैक्शन डिजाइन और परफॉर्मेंस के संगम पर काम करता हूं। मेरा फोकस अस्पष्ट विचारों को शांत, सटीक और उपयोगी इंटरफेस में बदलना है।",
    },
    labels: { years: "वर्ष", tenants: "टेनेंट्स स्केल किए", setup: "सेटअप समय घटाया", onboarding: "ऑनबोर्डिंग स्वचालित", featured: "मुख्य कार्य", stack: "मुख्य स्टैक", timeline: "समयरेखा", github: "GitHub संकेत", resume: "रिज्यूमे", contact: "संपर्क" },
    sections: { experience: "स्केल के लिए बना अनुभव", skills: "क्षमताएं", projects: "चयनित प्रोजेक्ट", github: "जिन टूल्स के साथ मैं बनाता हूं", contact: "कुछ बेहतरीन बनाते हैं।" },
    contact: { name: "नाम", email: "ईमेल", message: "संदेश", send: "भेजें", sending: "भेजा जा रहा है…", success: "संदेश भेज दिया गया — मैं जल्द ही आपसे संपर्क करूंगा।", error: "कुछ गलत हो गया। कृपया पुनः प्रयास करें या मुझे सीधे ईमेल करें।" },
  },
  es: {
    nav: { about: "Perfil", experience: "Experiencia", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero frontend y tecnólogo de diseño con mentalidad de producto",
      title: "Construyo interfaces premium que hacen que productos complejos se sientan inevitables.",
      body: "Yuvraj crea aplicaciones web rápidas, accesibles y ricas en movimiento con disciplina de ingeniería y sensibilidad de diseño.",
      primary: "Ver proyectos",
      secondary: "Contactar",
      status: "Trabajando en Kansoft — desarrollador full-stack",
    },
    about: { title: "Un portfolio construido como una superficie de producto.", body: "Trabajo entre arquitectura frontend, diseño de interacción y rendimiento. Mi punto fuerte es convertir ideas ambiguas en interfaces tranquilas, precisas y muy usables." },
    labels: { years: "Años creando", tenants: "Tenants escalados", setup: "Tiempo de setup reducido", onboarding: "Onboarding automatizado", featured: "Trabajo destacado", stack: "Stack central", timeline: "Cronología", github: "Señal GitHub", resume: "CV", contact: "Contacto" },
    sections: { experience: "Experiencias diseñadas para escalar", skills: "Capacidades", projects: "Proyectos seleccionados", github: "Herramientas con las que construyo", contact: "Construyamos algo preciso." },
    contact: { name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar", sending: "Enviando…", success: "Mensaje enviado — te responderé pronto.", error: "Algo salió mal. Inténtalo de nuevo o escríbeme directamente." },
  },
  ja: {
    nav: { about: "紹介", experience: "経験", skills: "スキル", projects: "作品", contact: "連絡" },
    hero: {
      eyebrow: "プロダクト志向のフロントエンドエンジニア / デザインテクノロジスト",
      title: "複雑なプロダクトを自然に感じさせる上質なインターフェイスを作ります。",
      body: "Yuvraj は、設計力とデザイン感覚を合わせて、高速でアクセシブルなモーション豊かなWebアプリを構築します。",
      primary: "作品を見る",
      secondary: "連絡する",
      status: "Kansoft に勤務中 — フルスタックエンジニア",
    },
    about: { title: "プロダクト画面として設計されたポートフォリオ。", body: "フロントエンドアーキテクチャ、インタラクションデザイン、パフォーマンスの交差点で仕事をしています。曖昧なアイデアを静かで精密なUIへ変えるのが得意です。" },
    labels: { years: "構築年数", tenants: "対応テナント数", setup: "セットアップ時間短縮", onboarding: "オンボーディング自動化", featured: "注目作品", stack: "主要スタック", timeline: "タイムライン", github: "GitHub 指標", resume: "履歴書", contact: "連絡" },
    sections: { experience: "スケールする体験設計", skills: "能力", projects: "選定プロジェクト", github: "使用しているツール", contact: "研ぎ澄まされたものを作りましょう。" },
    contact: { name: "名前", email: "メール", message: "メッセージ", send: "送信", sending: "送信中…", success: "メッセージを送信しました — 近日中にご連絡します。", error: "エラーが発生しました。もう一度お試しいただくか、直接メールしてください。" },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function resolveLocale(language?: string): Locale {
  const short = language?.slice(0, 2).toLowerCase();
  return locales.find((locale) => locale === short) ?? "en";
}
