export type IconName =
  | "brain"
  | "files"
  | "users"
  | "video"
  | "target"
  | "calendar"
  | "graduation"
  | "award"
  | "building"
  | "book"
  | "badge"
  | "star"
  | "play"
  | "download"
  | "clipboard"
  | "message"
  | "userCheck"
  | "search"
  | "heart"
  | "sparkles"
  | "lightbulb"
  | "link"
  | "pencil"
  | "trophy";

export interface ContentItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

const defaultWhatsAppMessage =
  "مرحبًا Prof. Suzan، أريد معرفة تفاصيل كورس EST Economics والمجموعة المناسبة لي.";

export const siteConfig = {
  name: "Prof. Suzan Mansour",
  courseName: "EST Economics",
  audience: "طلاب المرحلة الثانوية في الأردن",
  heroBadge: "شرح متخصص لطلاب EST في الأردن منذ يوليو 2023",
  description:
    "تعلّم EST Economics بالفهم والتطبيق مع Prof. Suzan Mansour، وتدرّب على Past Papers داخل مجموعات صغيرة لا تتجاوز 10 طلاب.",
  links: {
    root: "/",
    home: "#home",
    register: "#register",
    roadmap: "#roadmap",
    privacy: "/privacy",
    terms: "/terms",
  },
  contact: {
    // Add the verified number without + or spaces (for example: 9627XXXXXXXX).
    whatsappNumber: "",
    whatsappMessage: defaultWhatsAppMessage,
    // Add the verified public email before launch.
    email: "",
  },
  pricing: {
    mode: "enquiry" as const,
    display: "تواصل لمعرفة الرسوم وخيارات الدفع المتاحة",
  },
  schedule: {
    timeZone: "Asia/Amman",
    label: "جميع المواعيد تُعرض بتوقيت الأردن",
    display: "تُحدَّد المجموعة المناسبة بعد مراجعة بيانات الطالب",
    slots: [] as readonly string[],
  },
  stats: {
    maxGroupSize: 10,
    explanationSessions: 25,
    revisionSessions: 8,
    approximateTotalSessions: 33,
    teachingSince: "يوليو 2023",
    passRate: "100%",
    highScoringStudents: "عشرات الطلاب",
  },
  socialProfiles: [
    { label: "Instagram", handle: "يُضاف الحساب الرسمي", href: "" },
    { label: "YouTube", handle: "يُضاف الحساب الرسمي", href: "" },
    { label: "Facebook", handle: "يُضاف الحساب الرسمي", href: "" },
  ] as const,
  navigation: [
    { label: "الرئيسية", href: "#home" },
    { label: "عن الأستاذة", href: "#about" },
    { label: "نظام الكورس", href: "#roadmap" },
    { label: "آراء الطلاب", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ] as const,
  heroHighlights: [
    {
      title: "شرح قائم على الفهم وليس الحفظ.",
      description: "نبني المفهوم من أساسه قبل الانتقال للحل.",
      icon: "brain",
    },
    {
      title: "حل Past Papers وأسئلة الامتحانات على كل جزء.",
      description: "تطبيق مباشر يربط الشرح بشكل السؤال الحقيقي.",
      icon: "files",
    },
    {
      title: "مجموعات صغيرة لا تتجاوز 10 طلاب.",
      description: "مساحة كافية للسؤال والمتابعة الفردية.",
      icon: "users",
    },
    {
      title: "تسجيل جميع الحصص ورفع المادة العلمية بعد انتهاء الحصة.",
      description: "ترجع للشرح والملفات في وقت المذاكرة.",
      icon: "video",
    },
    {
      title: "تدريب كامل على طريقة التفكير والحل داخل الامتحان.",
      description: "تتدرّب على الدقة والسرعة وإدارة الوقت.",
      icon: "target",
    },
  ] satisfies readonly ContentItem[],
  credentials: [
    {
      title: "تدريس EST Economics منذ يوليو 2023",
      description: "منذ إطلاق الامتحانات لطلاب الأردن.",
      icon: "calendar",
    },
    {
      title: "خريجة تجارة وإدارة أعمال – قسم محاسبة",
      description: "جامعة الإسكندرية.",
      icon: "graduation",
    },
    {
      title: "دبلوم إدارة أعمال",
      description:
        "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (AASTMT).",
      icon: "building",
    },
    {
      title: "دبلوم تربوي",
      description: "جامعة الإسكندرية.",
      icon: "book",
    },
    {
      title: "عشرات الطلاب ذوي العلامات المرتفعة",
      description: "نتائج لطلاب التزموا بالشرح والتدريب.",
      icon: "award",
    },
    {
      title: "نسبة نجاح 100% بين الطلاب الذين درسوا معها",
      description: "بحسب نتائج الطلاب المسجلين لديها.",
      icon: "badge",
    },
    {
      title: "تقييمات ممتازة من أولياء الأمور والطلاب",
      description: "تُعرض الشهادات الموثّقة بعد موافقة أصحابها.",
      icon: "star",
    },
  ] satisfies readonly ContentItem[],
  economicsConcepts: [
    {
      english: "Inflation",
      arabic: "التضخم",
      scenario:
        "ليه نفس المبلغ اللي كان بيكفيك من سنة بقى يشتري حاجات أقل اليوم؟",
      symbol: "↗",
    },
    {
      english: "Supply and Demand",
      arabic: "العرض والطلب",
      scenario:
        "ليه سعر تذكرة أو موبايل أو منتج ترند ممكن يرتفع عندما يزداد الطلب عليه؟",
      symbol: "×",
    },
    {
      english: "Opportunity Cost",
      arabic: "تكلفة الفرصة البديلة",
      scenario:
        "لما تختار تنفق وقتك أو فلوسك على شيء معين، ما البديل الذي تنازلت عنه؟",
      symbol: "↔",
    },
    {
      english: "Interest Rate",
      arabic: "سعر الفائدة",
      scenario:
        "إزاي رفع أو خفض الفائدة يؤثر على الادخار، القروض، الاستثمار والأسعار؟",
      symbol: "%",
    },
    {
      english: "Exchange Rate",
      arabic: "سعر الصرف",
      scenario:
        "ليه تغيّر سعر العملة يؤثر على السفر، الدراسة في الخارج والمنتجات المستوردة؟",
      symbol: "₿",
    },
    {
      english: "Unemployment",
      arabic: "البطالة",
      scenario:
        "ليه توجد وظائف شاغرة في بعض المجالات، بينما يصعب إيجاد فرص في مجالات أخرى؟",
      symbol: "⌁",
    },
  ] as const,
  roadmap: [
    {
      stage: "01",
      title: "شرح المنهج",
      sessions: "~25 حصة",
      items: [
        "مفاهيم EST من الأساس",
        "أمثلة واقعية من الحياة",
        "تبسيط الرسوم البيانية",
        "حل Past Papers فورية لكل درس",
      ],
      icon: "book",
    },
    {
      stage: "02",
      title: "التدريب المستمر",
      sessions: "طوال الرحلة",
      items: [
        "قراءة السؤال بدقة",
        "استخراج الكلمات المفتاحية",
        "استبعاد الإجابات الخاطئة",
        "إدارة الوقت داخل الامتحان",
      ],
      icon: "target",
    },
    {
      stage: "03",
      title: "المراجعة النهائية",
      sessions: "~8 حصص",
      items: [
        "مراجعة شاملة للمنهج",
        "حل امتحانات كاملة",
        "سد الثغرات ونقاط الضعف",
        "تهيئة نفسية وأكاديمية",
      ],
      icon: "clipboard",
    },
  ] as const,
  deliverables: [
    {
      title: "تسجيل كامل للحصة",
      description: "للرجوع إلى الشرح وقت المذاكرة.",
      icon: "video",
    },
    {
      title: "المادة العلمية فورًا",
      description: "ملفات مرتبة تخص الجزء المشروح.",
      icon: "download",
    },
    {
      title: "تدريبات الجزء المشروح",
      description: "أسئلة متدرجة تثبّت الفهم.",
      icon: "pencil",
    },
    {
      title: "حل Past Papers الملحقة",
      description: "حلول مرتبطة بنمط الامتحان.",
      icon: "files",
    },
    {
      title: "خطة المذاكرة للحصة التالية",
      description: "خطوات واضحة لما يجب إنجازه.",
      icon: "calendar",
    },
    {
      title: "نافذة طرح الأسئلة",
      description: "مساحة لإغلاق أي نقطة غير واضحة.",
      icon: "message",
    },
  ] satisfies readonly ContentItem[],
  smallGroupBenefits: [
    {
      title: "تفاعل حقيقي",
      description: "مشاركة مستمرة داخل الحصة.",
      icon: "users",
    },
    {
      title: "فرصة أكبر للأسئلة",
      description: "وقت كافٍ للاستفسار والنقاش.",
      icon: "message",
    },
    {
      title: "متابعة فردية",
      description: "متابعة الأداء والتقدم لكل طالب.",
      icon: "userCheck",
    },
    {
      title: "كشف نقاط الضعف مبكرًا",
      description: "علاج الثغرات قبل تراكمها.",
      icon: "search",
    },
    {
      title: "بيئة مريحة خالية من التوتر",
      description: "مساحة آمنة للتجربة والخطأ.",
      icon: "heart",
    },
    {
      title: "اهتمام شخصي",
      description: "لا يتوفر عادةً في المجاميع الكبيرة.",
      icon: "sparkles",
    },
  ] satisfies readonly ContentItem[],
  methodology: [
    {
      step: "01",
      english: "Understand",
      arabic: "افهم",
      description: "افهم المفهوم ببساطة من الأساس.",
      icon: "brain",
    },
    {
      step: "02",
      english: "Connect",
      arabic: "اربط",
      description: "اربطه بمثال واقعي أو خبر اقتصادي.",
      icon: "link",
    },
    {
      step: "03",
      english: "Apply",
      arabic: "طبّق",
      description: "طبّق فورًا على سؤال امتحان حقيقي.",
      icon: "pencil",
    },
    {
      step: "04",
      english: "Master",
      arabic: "أتقن",
      description: "تدرّب حتى تحل بمفردك وبسرعة.",
      icon: "trophy",
    },
  ] as const,
  audienceProfiles: [
    "طالب في المرحلة الثانوية ويستعد لامتحان EST Economics.",
    "طالب يريد فهمًا عميقًا للاقتصاد بدل حفظ التعريفات.",
    "طالب يستهدف علامة مرتفعة ويحتاج تدريبًا منظمًا.",
    "طالب يحتاج خطة واضحة تربط المنهج بنمط الامتحان.",
    "طالب يريد مجموعة صغيرة وفرصة حقيقية للأسئلة.",
    "طالب بدأ المنهج ويحتاج مراجعة وسد الثغرات.",
    "طالب مستعد للالتزام بالحضور والتدريب والمراجعة.",
  ] as const,
  gradeLevels: [
    "الصف العاشر",
    "الصف الحادي عشر",
    "الصف الثاني عشر",
    "خريج / إعادة امتحان",
  ] as const,
  weakTopics: [
    "لم أحدد بعد",
    "Inflation – التضخم",
    "Supply and Demand – العرض والطلب",
    "Opportunity Cost – تكلفة الفرصة البديلة",
    "Interest Rate – سعر الفائدة",
    "Exchange Rate – سعر الصرف",
    "Unemployment – البطالة",
    "جزء آخر",
  ] as const,
  preferredTimes: ["صباحًا", "بعد الظهر", "مساءً", "مرن حسب المجموعة"] as const,
  contactMethods: ["WhatsApp", "البريد الإلكتروني"] as const,
} as const;

export const faqItems = [
  {
    question: "ما مادة EST Economics؟",
    answer:
      "هو مقرر اقتصاد ضمن مسار EST، يقيس فهم المفاهيم الاقتصادية والقدرة على تطبيقها وتحليل الأسئلة، وليس مجرد تذكّر تعريفات منفصلة.",
  },
  {
    question: "هل المادة تعتمد على الحفظ؟",
    answer:
      "التركيز الأساسي على الفهم وربط المفهوم بمثال واقعي، ثم تطبيقه على أسئلة امتحان حقيقية. الحفظ يقتصر على المصطلحات الأساسية التي تحتاجها لفهم السؤال.",
  },
  {
    question: "كم عدد حصص الكورس؟",
    answer:
      "الخطة التقريبية نحو 25 حصة للشرح والتدريب، ثم نحو 8 حصص للمراجعة النهائية؛ أي قرابة 33 حصة إجمالًا. العدد مرن حسب مستوى المجموعة واحتياجها.",
  },
  {
    question: "ما عدد الطلاب في المجموعة؟",
    answer:
      "لا يتجاوز عدد الطلاب 10، حتى يحصل كل طالب على مساحة للسؤال والمتابعة الفردية.",
  },
  {
    question: "هل يتم حل Past Papers؟",
    answer:
      "نعم. يتم تطبيق كل جزء على أسئلة مرتبطة به، ثم حل امتحانات كاملة خلال مرحلة المراجعة النهائية.",
  },
  {
    question: "هل يتم تسجيل الحصص؟",
    answer:
      "نعم، تُسجَّل الحصص وتُتاح للطلاب المسجلين للرجوع إليها أثناء المذاكرة.",
  },
  {
    question: "هل يتم توفير المادة العلمية؟",
    answer:
      "تحصل بعد كل حصة على المادة العلمية، تدريبات الجزء المشروح، حلول Past Papers الملحقة، وخطة المذاكرة للحصة التالية.",
  },
  {
    question: "ماذا لو لم أفهم نقطة أثناء الحصة؟",
    answer:
      "يمكنك الرجوع إلى تسجيل الحصة والمادة العلمية، ثم طرح سؤالك في نافذة الأسئلة المخصصة حتى لا تبقى نقطة غير واضحة.",
  },
  {
    question: "هل يمكنني الانضمام بعد بداية الكورس؟",
    answer:
      "يعتمد ذلك على ما درسته وموعد امتحانك ومستوى المجموعة الحالية. تواصل معنا بهذه التفاصيل وسنخبرك بوضوح إن كانت المجموعة مناسبة أو تحتاج خطة أخرى.",
  },
  {
    question: "هل الكورس مناسب للطالب الذي لم يدرس Economics من قبل؟",
    answer:
      "نعم؛ يبدأ الشرح من أساس المفهوم. ويُراجع مستوى الطالب قبل تأكيد المجموعة لضمان أن سرعة الشرح مناسبة له.",
  },
  {
    question: "هل الكورس يضمن علامة معينة؟",
    answer:
      "لا توجد علامة مضمونة في أي امتحان. ما نقدمه هو شرح منظم، تدريب مكثف، متابعة، وأفضل إعداد ممكن؛ والنتيجة تعتمد أيضًا على التزام الطالب وتطبيقه.",
  },
  {
    question: "ما مواعيد الحصص؟",
    answer:
      "نعم، جميع المواعيد تُوضح بتوقيت الأردن. تُحدَّد المجموعة المناسبة بعد مراجعة الصف الدراسي وموعد الامتحان والأوقات المفضلة.",
  },
  {
    question: "ما سعر الكورس وطريقة الدفع؟",
    answer:
      "تواصل عبر WhatsApp لمعرفة الرسوم الحالية وخيارات الدفع المتاحة. لا نعرض سعرًا غير مؤكّد على الموقع.",
  },
  {
    question: "كيف يتم التسجيل؟",
    answer:
      "املأ نموذج التسجيل، أرسل الطلب عبر WhatsApp، ثم نراجع مستواك وموعد امتحانك ونقترح المجموعة المناسبة قبل تأكيد الحجز.",
  },
  {
    question: "هل توجد حصة تجريبية؟",
    answer:
      "توافر الجلسات التجريبية يعتمد على المجموعة والمرحلة الحالية. اسأل عبر WhatsApp وسنوضح لك الخيارات المتاحة وقت التواصل.",
  },
] as const;

export function createWhatsAppUrl(
  message: string = siteConfig.contact.whatsappMessage,
): string {
  const recipient = siteConfig.contact.whatsappNumber.trim();
  const encodedMessage = encodeURIComponent(message);

  return recipient
    ? `https://wa.me/${recipient}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function createEmailUrl(subject: string): string {
  const recipient = siteConfig.contact.email.trim();
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
}
