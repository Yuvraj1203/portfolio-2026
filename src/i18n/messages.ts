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
      status: "Available for selective product engineering roles",
    },
    about: {
      title: "A portfolio built like a product surface.",
      body: "I work at the intersection of frontend architecture, interaction design, and performance. My sweet spot is turning ambiguous product ideas into interfaces that feel calm, precise, and deeply usable.",
    },
    labels: {
      years: "Years building",
      projects: "Shipped projects",
      lighthouse: "Perf target",
      systems: "Design systems",
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
      github: "Open-source footprint",
      contact: "Let’s build something sharp.",
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send inquiry",
      success: "Draft validated. Connect this form to your mail endpoint when ready.",
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
      status: "चुनिंदा प्रोडक्ट इंजीनियरिंग भूमिकाओं के लिए उपलब्ध",
    },
    about: {
      title: "एक पोर्टफोलियो जो प्रोडक्ट सतह जैसा बना है।",
      body: "मैं फ्रंटएंड आर्किटेक्चर, इंटरैक्शन डिजाइन और परफॉर्मेंस के संगम पर काम करता हूं। मेरा फोकस अस्पष्ट विचारों को शांत, सटीक और उपयोगी इंटरफेस में बदलना है।",
    },
    labels: { years: "वर्ष", projects: "शिप्ड प्रोजेक्ट", lighthouse: "परफॉर्मेंस लक्ष्य", systems: "डिजाइन सिस्टम", featured: "मुख्य कार्य", stack: "मुख्य स्टैक", timeline: "समयरेखा", github: "GitHub संकेत", resume: "रिज्यूमे", contact: "संपर्क" },
    sections: { experience: "स्केल के लिए बना अनुभव", skills: "क्षमताएं", projects: "चयनित प्रोजेक्ट", github: "ओपन-सोर्स फुटप्रिंट", contact: "कुछ बेहतरीन बनाते हैं।" },
    contact: { name: "नाम", email: "ईमेल", message: "संदेश", send: "भेजें", success: "ड्राफ्ट वैध है। तैयार होने पर इसे मेल एंडपॉइंट से जोड़ें।" },
  },
  es: {
    nav: { about: "Perfil", experience: "Experiencia", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero frontend y tecnólogo de diseño con mentalidad de producto",
      title: "Construyo interfaces premium que hacen que productos complejos se sientan inevitables.",
      body: "Yuvraj crea aplicaciones web rápidas, accesibles y ricas en movimiento con disciplina de ingeniería y sensibilidad de diseño.",
      primary: "Ver proyectos",
      secondary: "Contactar",
      status: "Disponible para roles selectivos de ingeniería de producto",
    },
    about: { title: "Un portfolio construido como una superficie de producto.", body: "Trabajo entre arquitectura frontend, diseño de interacción y rendimiento. Mi punto fuerte es convertir ideas ambiguas en interfaces tranquilas, precisas y muy usables." },
    labels: { years: "Años creando", projects: "Proyectos lanzados", lighthouse: "Objetivo perf", systems: "Sistemas de diseño", featured: "Trabajo destacado", stack: "Stack central", timeline: "Cronología", github: "Señal GitHub", resume: "CV", contact: "Contacto" },
    sections: { experience: "Experiencias diseñadas para escalar", skills: "Capacidades", projects: "Proyectos seleccionados", github: "Huella open-source", contact: "Construyamos algo preciso." },
    contact: { name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar", success: "Borrador validado. Conecta este formulario a tu endpoint de correo cuando esté listo." },
  },
  ja: {
    nav: { about: "紹介", experience: "経験", skills: "スキル", projects: "作品", contact: "連絡" },
    hero: {
      eyebrow: "プロダクト志向のフロントエンドエンジニア / デザインテクノロジスト",
      title: "複雑なプロダクトを自然に感じさせる上質なインターフェイスを作ります。",
      body: "Yuvraj は、設計力とデザイン感覚を合わせて、高速でアクセシブルなモーション豊かなWebアプリを構築します。",
      primary: "作品を見る",
      secondary: "連絡する",
      status: "厳選されたプロダクトエンジニアリング職に対応可能",
    },
    about: { title: "プロダクト画面として設計されたポートフォリオ。", body: "フロントエンドアーキテクチャ、インタラクションデザイン、パフォーマンスの交差点で仕事をしています。曖昧なアイデアを静かで精密なUIへ変えるのが得意です。" },
    labels: { years: "構築年数", projects: "公開プロジェクト", lighthouse: "性能目標", systems: "デザインシステム", featured: "注目作品", stack: "主要スタック", timeline: "タイムライン", github: "GitHub 指標", resume: "履歴書", contact: "連絡" },
    sections: { experience: "スケールする体験設計", skills: "能力", projects: "選定プロジェクト", github: "オープンソース活動", contact: "研ぎ澄まされたものを作りましょう。" },
    contact: { name: "名前", email: "メール", message: "メッセージ", send: "送信", success: "下書きは検証済みです。準備ができたらメールエンドポイントに接続してください。" },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function resolveLocale(language?: string): Locale {
  const short = language?.slice(0, 2).toLowerCase();
  return locales.find((locale) => locale === short) ?? "en";
}
