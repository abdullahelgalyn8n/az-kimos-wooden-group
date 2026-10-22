export type RoutePath =
  | '/'
  | '/about'
  | '/products'
  | '/products/softwood'
  | '/products/hardwood'
  | '/services'
  | '/partners'
  | '/contact';

export interface RouteMeta {
  path: RoutePath;
  label: string;
  englishLabel: string;
  title: string;
  description: string;
  breadcrumb: { label: string; path: RoutePath }[];
}

export const ROUTES: Record<RoutePath, RouteMeta> = {
  '/': {
    path: '/',
    label: 'الرئيسية',
    englishLabel: 'Home',
    title: 'Kimos Wooden Group — استيراد وتصدير الأخشاب عالمياً',
    description: 'شريكك الموثوق في تجارة الأخشاب اللينة والصلبة بجميع الدرجات والمقاسات من أمريكا وأوروبا وروسيا إلى شمال أفريقيا والخليج وآسيا.',
    breadcrumb: [{ label: 'الرئيسية', path: '/' }],
  },
  '/about': {
    path: '/about',
    label: 'من نحن',
    englishLabel: 'About Us',
    title: 'من نحن — رواد تجارة الأخشاب في الشرق الأوسط وأفريقيا | Kimos Wooden Group',
    description: 'تعرف على Kimos Wooden Group، خبرة تمتد لأكثر من 40 عاماً في استيراد وتجارة الأخشاب ضمن مجموعة Kimos Group.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'من نحن', path: '/about' },
    ],
  },
  '/products': {
    path: '/products',
    label: 'منتجاتنا',
    englishLabel: 'Products',
    title: 'منتجاتنا — كتالوج الأخشاب اللينة والصلبة | Kimos Wooden Group',
    description: 'استكشف تشكيلة واسعة من الأخشاب اللينة (الصنوبر، التنوب، اللاركس، SPF) والأخشاب الصلبة (الزان، الأرو، الجوز، الآش، الماهوجني، التيك).',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'منتجاتنا', path: '/products' },
    ],
  },
  '/products/softwood': {
    path: '/products/softwood',
    label: 'الأخشاب اللينة',
    englishLabel: 'Softwood Timber',
    title: 'الأخشاب اللينة (Softwood Timber) — المواصفات والدرجات وجدول المقاسات | Kimos Wooden Group',
    description: 'أجود أنواع الأخشاب اللينة (الصنوبر الروسي والاسكندنافي، التنوب، الصنوبر الأحمر، SPF، اللاركس) مع جدول المقاسات التفصيلي والدرجات US, V, SF, VI, VII.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'منتجاتنا', path: '/products' },
      { label: 'الأخشاب اللينة', path: '/products/softwood' },
    ],
  },
  '/products/hardwood': {
    path: '/products/hardwood',
    label: 'الأخشاب الصلبة',
    englishLabel: 'Hardwood Lumber',
    title: 'الأخشاب الصلبة (Hardwood Lumber) — الزان والأرو والجوز والتيك | Kimos Wooden Group',
    description: 'أخشاب صلبة فاخرة للأثاث والديكورات والأرضيات: الزان الأوروبي، الأرو الأمريكي والأوروبي، الجوز، الدردار، الماهوجني، والتيك بدرجات A, B, C, ABC.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'منتجاتنا', path: '/products' },
      { label: 'الأخشاب الصلبة', path: '/products/hardwood' },
    ],
  },
  '/services': {
    path: '/services',
    label: 'خدماتنا',
    englishLabel: 'Services',
    title: 'خدماتنا — حلول متكاملة في استيراد وتصدير وشحن الأخشاب | Kimos Wooden Group',
    description: 'خدمات استيراد وتصدير الأخشاب، الفحص وضمان الجودة، الشحن البحري والبري، التغطية العالمية، ودعم العملاء للشركات والمصانع.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'خدماتنا', path: '/services' },
    ],
  },
  '/partners': {
    path: '/partners',
    label: 'شركاؤنا',
    englishLabel: 'Partners & Branches',
    title: 'شركاؤنا وفروعنا — تواجد عالمي في مصر ودبي وأمريكا وروسيا | Kimos Wooden Group',
    description: 'شبكة واسعة من الفروع الدولية في القاهرة ودبي وبنسلفانيا وموسكو وشراكات استراتيجية مع كبرى المناشر والموردين حول العالم.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'شركاؤنا وفروعنا', path: '/partners' },
    ],
  },
  '/contact': {
    path: '/contact',
    label: 'اتصل بنا',
    englishLabel: 'Contact Us',
    title: 'اتصل بنا — اطلب عرض سعر واستشارة مجانية | Kimos Wooden Group',
    description: 'تواصل مع فريق مبيعات وخبراء Kimos Wooden Group في مصر والولايات المتحدة والإمارات وروسيا للحصول على عروض أسعار تنافسية.',
    breadcrumb: [
      { label: 'الرئيسية', path: '/' },
      { label: 'اتصل بنا', path: '/contact' },
    ],
  },
};

export const COMPANY_INFO = {
  name: 'Kimos Wooden Group',
  shortName: 'Kimos Wooden',
  subtitle: 'IMPORTING & TIMBER TRADE',
  arabicSubtitle: 'استيراد وتصدير الأخشاب عالمياً',
  parentGroup: 'جزء من مجموعة Kimos Group',
  description:
    'Kimos Wooden Group هي شركة ذات رؤية محلية ودولية تعمل في تسويق وبيع الأخشاب لسوق شمال أفريقيا والسوق الخليجي والآسيوي. نحن أحد الفروع التجارية الاستثمارية لمجموعة Kimos Group المتخصصة في المقاولات والبناء والتوكيلات التجارية والزراعة وتجارة الأخشاب.',
  phones: {
    egypt: '+20 150 380 0581',
    egyptWhatsapp: '201503800581',
    usa: '+1 (267) 538-9633',
  },
  emails: {
    general: 'kimoswoodgroup@kimosgroup.com',
    partnerships: 'partnershipskimosgroup@kimosgroup.com',
    sales: 'saleskimosgroup@kimosgroup.com',
  },
  locationsSummary: 'مصر • دبي • أمريكا • روسيا',
  heroStats: [
    { value: '+4', label: 'قارات نخدمها', detail: 'أفريقيا، آسيا، أوروبا، أمريكا' },
    { value: '+21', label: 'نوع خشب', detail: 'أخشاب لينة وصلبة معتمدة' },
    { value: '4', label: 'فروع دولية', detail: 'مصر • دبي • أمريكا • روسيا' },
  ],
  aboutStats: [
    { value: '+40', label: 'سنة خبرة', detail: 'ريادة منذ تأسيس المجموعة' },
    { value: '+4657', label: 'عميل سعيد', detail: 'مصانع وشركات مقاولات ومستوردون' },
    { value: '+23', label: 'دول نصدر إليها', detail: 'شمال أفريقيا والخليج وآسيا' },
  ],
  pillars: [
    {
      id: 'goal',
      title: 'هدفنا',
      description: 'تسهيل وتوفير السلع المناسبة من الأخشاب للمستهلكين الدوليين في الأسواق المختلفة بأسعار تنافسية وتوريد منتظم.',
    },
    {
      id: 'vision',
      title: 'رؤيتنا',
      description: 'تطوير تجارة الأخشاب لتتناسب مع احتياجات الأسواق المختلفة محلياً ودولياً وفق أعلى معايير الاستدامة والجودة.',
    },
    {
      id: 'partnerships',
      title: 'شراكاتنا',
      description: 'شراكات استراتيجية مع منتجين دوليين ومناشر معتمدة في أمريكا وروسيا وأوروبا وأفريقيا لضمان استمرارية الإمداد.',
    },
    {
      id: 'group',
      title: 'مجموعتنا',
      description: 'جزء من مجموعة Kimos Group العاملة في المقاولات والبناء والتوكيلات التجارية والزراعة وتجارة الأخشاب.',
    },
  ],
};

export interface TimberProduct {
  id: string;
  category: 'softwood' | 'hardwood';
  arabicName: string;
  englishName: string;
  scientificName: string;
  origin: string;
  originRegion: 'russia' | 'europe' | 'north_america' | 'africa' | 'asia';
  description: string;
  densityKgM3: string;
  moistureContent: string;
  grades: string[];
  thicknessesMm: string[];
  widthsMm: string[];
  lengthsM: string;
  colorTone: string;
  features: string[];
  applications: string[];
  image: string;
  featured?: boolean;
}

export const TIMBER_PRODUCTS: TimberProduct[] = [
  // ================= SOFTWOOD TIMBER (الأخشاب اللينة) =================
  {
    id: 'softwood-pine',
    category: 'softwood',
    arabicName: 'الصنوبر الاسكندنافي والروسي (ريد وود)',
    englishName: 'Scandinavian & Russian Pine (Redwood)',
    scientificName: 'Pinus sylvestris',
    origin: 'روسيا / السويد / فنلندا',
    originRegion: 'russia',
    description:
      'خشب الصنوبر خفيف الوزن ومقاوم جداً للتعفن، يجف جيداً ويسهل معالجته وتشكيله. يُستخدم على نطاق واسع في تصنيع عوارض السكك الحديدية وأعمدة خطوط الاتصالات ومواد البناء والمنتجات الخشبية والأثاث.',
    densityKgM3: '510 - 550 كجم/م³',
    moistureContent: 'KD 12% - 16% (مجفف فرن)',
    grades: ['US', 'V', 'SF', 'VI', 'VII'],
    thicknessesMm: ['16mm', '19mm', '25mm', '32mm', '38mm', '44mm', '47mm', '50mm', '63mm', '75mm'],
    widthsMm: ['75mm', '100mm', '125mm', '150mm', '175mm', '200mm', '225mm', '250mm'],
    lengthsM: 'من 2.10 متر إلى 6.00 متر',
    colorTone: 'أصفر دافئ مائل للاحمرار في القلب',
    features: ['مقاوم للتعفن', 'سهل القطع والصقل', 'ثبات عالي للأبعاد', 'عقد متماسكة'],
    applications: ['الإنشاءات والمقاولات', 'الأبواب والنوافذ', 'الأثاث الداخلي والخارجي', 'عوارض السكك الحديدية'],
    image: '/images/softwood-1.jpg',
    featured: true,
  },
  {
    id: 'softwood-spruce',
    category: 'softwood',
    arabicName: 'خشب التنوب الأبيض (وايت وود)',
    englishName: 'European & Russian Spruce (Whitewood)',
    scientificName: 'Picea abies',
    origin: 'روسيا / أوروبا / كندا',
    originRegion: 'russia',
    description:
      'مقاومة خشب التنوب أقل قليلاً من خشب الصنوبر، لكنه أفتح لوناً (أبيض كريمي متجانس)، وله بنية ألياف صغيرة وموحدة، ويحافظ على لونه الطبيعي لفترة أطول دون اصفرار.',
    densityKgM3: '450 - 480 كجم/م³',
    moistureContent: 'KD 14% - 18% (مجفف فرن)',
    grades: ['US', 'V', 'SF', 'VI', 'VII'],
    thicknessesMm: ['19mm', '22mm', '25mm', '32mm', '38mm', '47mm', '50mm', '63mm', '75mm'],
    widthsMm: ['75mm', '100mm', '125mm', '150mm', '175mm', '200mm', '225mm'],
    lengthsM: 'من 2.40 متر إلى 6.00 متر',
    colorTone: 'أبيض كريمي فاتح موحد',
    features: ['لون أبيض ناصع', 'ألياف ناعمة متجانسة', 'خفيف الوزن وقوي', 'قليل الراتنج'],
    applications: ['الشدات الخشبية والخرسانة', 'التجاليد الداخلية', 'الهياكل الإنشائية', 'صناعة المنصات والتغليف'],
    image: '/images/softwood-2.jpg',
    featured: true,
  },
  {
    id: 'softwood-red-pine',
    category: 'softwood',
    arabicName: 'الصنوبر الأحمر الفاخر',
    englishName: 'Eastern European Red Pine',
    scientificName: 'Pinus resinosa',
    origin: 'أوروبا الشرقية / شمال روسيا',
    originRegion: 'europe',
    description:
      'خشب صنوبر أحمر بلون مميز ومقاومة ميكانيكية عالية وكثافة ممتازة. يُستخدم في الأثاث الفاخر والديكورات الداخلية والأبواب والنجارة المعمارية المتقدمة.',
    densityKgM3: '540 - 580 كجم/م³',
    moistureContent: 'KD 10% - 14% (مجفف فرن)',
    grades: ['US', 'V', 'SF', 'I', 'II', 'III'],
    thicknessesMm: ['25mm', '38mm', '42mm', '47mm', '50mm', '63mm', '75mm'],
    widthsMm: ['100mm', '125mm', '150mm', '175mm', '200mm', '225mm'],
    lengthsM: 'من 2.10 متر إلى 6.00 متر',
    colorTone: 'بني محمر طبيعي دافئ',
    features: ['عروق خشبية جذابة', 'مقاومة عالية للرطوبة', 'سهولة قبول الدهانات والورنيش', 'متانة فائقة'],
    applications: ['الأثاث الكلاسيكي والحديث', 'الديكورات الخشبية', 'الأرضيات والأسقف', 'الأبواب الخارجية'],
    image: '/images/softwood-4.jpg',
    featured: true,
  },
  {
    id: 'softwood-spf',
    category: 'softwood',
    arabicName: 'أخشاب SPF (صنوبر - تنوب - شوح)',
    englishName: 'SPF (Spruce - Pine - Fir)',
    scientificName: 'Picea / Pinus / Abies',
    origin: 'كندا / أمريكا الشمالية',
    originRegion: 'north_america',
    description:
      'مزيج هندسي معتمد من ثلاثة أنواع من الأخشاب اللينة الشمالية الكندية والأمريكية. يُستخدم على نطاق واسع في البناء والتأطير الهيكلي نظراً لخصائصه الميكانيكية الممتازة واستقامته القياسية.',
    densityKgM3: '420 - 490 كجم/م³',
    moistureContent: 'KD-HT 15% - 19% (معالج حرارياً)',
    grades: ['J-Grade', 'No.1 / No.2', 'Stud', 'SF', 'VI'],
    thicknessesMm: ['19mm', '38mm', '42mm', '47mm', '50mm'],
    widthsMm: ['89mm', '100mm', '125mm', '140mm', '150mm', '184mm', '235mm'],
    lengthsM: 'من 2.40 متر إلى 6.00 متر',
    colorTone: 'أشقر فاتح إلى أبيض مصفر',
    features: ['ممسوح الحواف (S4S)', 'نسبة قوة إلى وزن عالية', 'معالج حرارياً ومختوم', 'مثالي للتأطير السريع'],
    applications: ['الهياكل الخشبية والمباني', 'الجملونات والأسقف', 'الفواصل الجدارية', 'مشاريع المقاولات الكبرى'],
    image: '/images/softwood-3.jpg',
    featured: true,
  },
  {
    id: 'softwood-larch',
    category: 'softwood',
    arabicName: 'اللاركس السيبيري (Siberian Larch)',
    englishName: 'Siberian Larch Timber',
    scientificName: 'Larix sibirica',
    origin: 'روسيا (سيبيريا)',
    originRegion: 'russia',
    description:
      'يُعد اللاركس السيبيري من أصلب وأكثر الأخشاب اللينة كثافة ومقاومة طبيعية للمياه والعوامل الجوية القاسية دون الحاجة لمعالجة كيميائية، مما يجعله الخيار الأول للواجهات والبرجولات.',
    densityKgM3: '640 - 680 كجم/م³',
    moistureContent: 'KD 12% - 16%',
    grades: ['US', 'I', 'II', 'III', 'IV', 'SF'],
    thicknessesMm: ['25mm', '32mm', '38mm', '47mm', '50mm', '63mm'],
    widthsMm: ['100mm', '125mm', '150mm', '175mm', '200mm'],
    lengthsM: 'من 3.00 متر إلى 6.00 متر',
    colorTone: 'ذهبي عسلي مائل للبني الفاتح',
    features: ['كثافة تقارب الأخشاب الصلبة', 'مقاومة طبيعية للمياه والحشرات', 'عمر افتراضي طويل جداً', 'ثبات حراري ممتاز'],
    applications: ['الواجهات الخارجية (Cladding)', 'أرضيات المسابح والحدائق (Decking)', 'البرجولات والمنشآت الساحلية', 'الأعمال البحرية'],
    image: '/images/softwood-5.jpg',
  },
  {
    id: 'softwood-douglas-fir',
    category: 'softwood',
    arabicName: 'صنوبر دوجلاس فير الأمريكي',
    englishName: 'North American Douglas Fir',
    scientificName: 'Pseudotsuga menziesii',
    origin: 'الولايات المتحدة / كندا',
    originRegion: 'north_america',
    description:
      'يمتاز بأطواله الكبيرة وخلوه من العقد في الدرجات العالية، مع قدرة استثنائية على تحمل الأحمال الإنشائية الثقيلة والشد والانحناء في المشاريع الهندسية والمعمارية.',
    densityKgM3: '530 - 570 كجم/م³',
    moistureContent: 'KD 12% - 15%',
    grades: ['Clear', 'Select Structural', 'No.1', 'SF'],
    thicknessesMm: ['25mm', '38mm', '50mm', '63mm', '75mm'],
    widthsMm: ['100mm', '150mm', '200mm', '250mm'],
    lengthsM: 'من 3.00 متر إلى 6.00 متر',
    colorTone: 'وردي برتقالي فاتح بعروق مستقيمة',
    features: ['أعلى معامل مرونة في الأخشاب اللينة', 'ألياف مستقيمة تماماً', 'ثبات ممتاز بعد التجفيف'],
    applications: ['العوارض الإنشائية المكشوفة', 'الأبواب والنوافذ الفاخرة', 'النجارة المعمارية', 'الجسور الخشبية'],
    image: '/images/softwood-main.jpg',
  },
  {
    id: 'softwood-syp',
    category: 'softwood',
    arabicName: 'الصنوبر الأصفر الجنوبي (بيتش باين)',
    englishName: 'Southern Yellow Pine (Pitch Pine)',
    scientificName: 'Pinus palustris / Pinus echinata',
    origin: 'الولايات المتحدة الأمريكية',
    originRegion: 'north_america',
    description:
      'خشب أمريكي عالي الكثافة والصلابة، مشهور باسم (الخشب العزيزي / بيتش باين)، يتميز بعروقه الواضحة ومقاومته العالية للاحتكاك والرطوبة.',
    densityKgM3: '600 - 660 كجم/م³',
    moistureContent: 'KD 10% - 14%',
    grades: ['C & Better (Clear)', 'D', 'No.1', 'No.2'],
    thicknessesMm: ['25mm', '38mm', '50mm', '63mm', '75mm'],
    widthsMm: ['100mm', '125mm', '150mm', '200mm', '225mm'],
    lengthsM: 'من 2.40 متر إلى 6.00 متر',
    colorTone: 'أصفر ذهبي غني بعروق داكنة',
    features: ['مقاومة استثنائية للتآكل', 'مثالي للمعالجة بالضغط', 'تاريخ طويل في النجارة التراثية والحديثة'],
    applications: ['الأبواب والشبابيك الفاخرة', 'الأرضيات الخشبية والسلالم', 'الأثاث الثقيل', 'المنشآت الخارجية'],
    image: '/images/softwood-4.jpg',
  },

  // ================= HARDWOOD LUMBER (الأخشاب الصلبة) =================
  {
    id: 'hardwood-beech',
    category: 'hardwood',
    arabicName: 'خشب الزان الأوروبي المبخر',
    englishName: 'European Steamed Beech',
    scientificName: 'Fagus sylvatica',
    origin: 'رومانيا / أوروبا',
    originRegion: 'europe',
    description:
      'خشب الزان صلب ومتين مع حبيبات دقيقة وموحدة. يتم تبخيره بعناية لمنحه لوناً وردياً محمراً متجانساً وثباتاً عالياً، ويُستخدم على نطاق واسع في صناعة الأثاث الفاخر والأرضيات وأدوات المطبخ.',
    densityKgM3: '710 - 750 كجم/م³',
    moistureContent: 'KD 8% - 12% (مجفف فرن)',
    grades: ['A', 'B', 'C', 'AB', 'ABC', 'BC'],
    thicknessesMm: ['25mm', '32mm', '38mm', '40mm', '50mm', '60mm', '70mm', '80mm'],
    widthsMm: ['100mm+', '120mm+', '150mm+ (أعراض حرة ومقاسات خاصة)'],
    lengthsM: 'من 2.10 متر إلى 4.20 متر (متوفر أيضاً أطوال قصيرة 1.00 - 1.70 م)',
    colorTone: 'وردي فاتح إلى بني محمر دافئ',
    features: ['صلابة عالية', 'حبيبات موحدة وناعمة', 'سهل التشغيل والحفر والخرط', 'تقبل ممتاز للدهانات والأستر'],
    applications: ['الأثاث الكلاسيكي والدمياطي الفاخر', 'الصالونات والكراسي والطاولات', 'الأرضيات والسلالم', 'المشغولات الخشبية الدقيقة'],
    image: '/images/hardwood-4.jpg',
    featured: true,
  },
  {
    id: 'hardwood-oak',
    category: 'hardwood',
    arabicName: 'خشب الأرو (البلوط الأوروبي والأمريكي)',
    englishName: 'European & American Oak (Oro)',
    scientificName: 'Quercus robur / Quercus alba',
    origin: 'أوروبا / الولايات المتحدة الأمريكية',
    originRegion: 'europe',
    description:
      'خشب الأرو يتميز بمتانته العالية وجمال نقوشه وثمرته الطبيعية البارزة. مثالي للأثاث الفاخر والأرضيات (الباركيه) والأبواب المصفحة والديكورات الداخلية الراقية.',
    densityKgM3: '720 - 770 كجم/م³',
    moistureContent: 'KD 8% - 10% (مجفف فرن)',
    grades: ['FAS', '1Com', 'A', 'B', 'AB', 'ABC'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm', '70mm'],
    widthsMm: ['120mm - 300mm'],
    lengthsM: 'من 2.10 متر إلى 4.20 متر',
    colorTone: 'بني فاتح ذهبي إلى بني داكن (متوفر أرو أبيض وأرو أحمر)',
    features: ['صلابة ومتانة فائقة', 'نقوش وثمرة طبيعية جميلة', 'مقاوم للتآكل والرطوبة', 'قيمة جمالية واستثمارية عالية'],
    applications: ['الأثاث الفاخر والمطابخ الحديثة', 'أرضيات الباركيه الصلبة', 'الأبواب الرئيسية والتجاليد الجدارية', 'طاولات الاجتماعات والفنادق'],
    image: '/images/hardwood-5.jpg',
    featured: true,
  },
  {
    id: 'hardwood-walnut',
    category: 'hardwood',
    arabicName: 'خشب الجوز الأمريكي الأسود',
    englishName: 'American Black Walnut',
    scientificName: 'Juglans nigra',
    origin: 'الولايات المتحدة الأمريكية',
    originRegion: 'north_america',
    description:
      'قمة الفخامة في الأخشاب الصلبة العالمية؛ يتميز الجوز الأمريكي بلونه البني الشوكولاتي الغني وعروقه المتموجة الساحرة مع سهولة تشكيل وصقل استثنائية.',
    densityKgM3: '610 - 650 كجم/م³',
    moistureContent: 'KD 8% - 10%',
    grades: ['FAS / Prime', '1Com', '2Com', 'A'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm'],
    widthsMm: ['125mm - 280mm'],
    lengthsM: 'من 2.10 متر إلى 3.65 متر',
    colorTone: 'بني داكن غني بلمسات أرجوانية دافئة',
    features: ['لون طبيعي فاخر دون صبغات', 'ثبات أبعاد ممتاز', 'ملمس حريري بعد الصقل', 'مقاومة عالية للصدمات'],
    applications: ['الأثاث التنفيذي والملكي', 'الديكورات الفندقية الفاخرة', 'التطعيمات الخشبية والآلات الموسيقية', 'الأبواب والوحدات المعمارية'],
    image: '/images/hardwood-6.jpg',
    featured: true,
  },
  {
    id: 'hardwood-ash',
    category: 'hardwood',
    arabicName: 'خشب الدردار / الآش (Ash Wood)',
    englishName: 'American & European White Ash',
    scientificName: 'Fraxinus americana / excelsior',
    origin: 'أمريكا الشمالية / أوروبا',
    originRegion: 'north_america',
    description:
      'خشب صلب يجمع بين القوة العالية والمرونة الفائقة، يتميز بلونه الأشقر الفاتح ونقوشه الواضحة الجريئة التي تشبه خشب الأرو مع وزن مثالي وتقبل رائع للألوان العصرية.',
    densityKgM3: '670 - 710 كجم/م³',
    moistureContent: 'KD 8% - 12%',
    grades: ['FAS', '1Com', 'A', 'AB', 'ABC'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm', '70mm'],
    widthsMm: ['120mm - 260mm'],
    lengthsM: 'من 2.10 متر إلى 4.20 متر',
    colorTone: 'أشقر كريمي فاتح إلى بني فاتح جداً',
    features: ['مرونة عالية وقابلية للثني بالبخار', 'مقاومة ممتازة للصدمات', 'نقوش خشبية واضحة وعصرية', 'مثالي للتشطيبات المودرن'],
    applications: ['الأثاث المودرن والاسكندنافي', 'الأرضيات والسلالم الخشبية', 'المطابخ والتجاليد', 'الأدوات الرياضية والمقابض'],
    image: '/images/hardwood-2.jpg',
    featured: true,
  },
  {
    id: 'hardwood-mahogany',
    category: 'hardwood',
    arabicName: 'خشب الماهوجني الأفريقي (سابيلي / كايا)',
    englishName: 'African Mahogany (Sapele & Khaya)',
    scientificName: 'Entandrophragma cylindricum / Khaya',
    origin: 'غرب ووسط أفريقيا',
    originRegion: 'africa',
    description:
      'خشب أفريقي فاخر ذو لون بني محمر ذهبي ولمعة طبيعية مميزة، يتمتع بثبات عالٍ ومقاومة ممتازة للرطوبة والحشرات والعوامل الجوية.',
    densityKgM3: '620 - 670 كجم/م³',
    moistureContent: 'KD 10% - 12%',
    grades: ['FAS', 'A', 'AB'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm', '70mm'],
    widthsMm: ['150mm - 350mm (أعراض عريضة متوفرة)'],
    lengthsM: 'من 2.40 متر إلى 4.20 متر',
    colorTone: 'بني محمر عميق بلمعة ذهبية متداخلة',
    features: ['أعراض وأطوال كبيرة متاحة', 'مقاوم للرطوبة والتسوس', 'ثبات ممتاز في الأجواء الحارة', 'مظهر كلاسيكي ملكي'],
    applications: ['الأبواب الخارجية الفاخرة', 'بناء وتجهيز اليخوت والقوارب', 'الأثاث الكلاسيكي والمكتبي', 'النوافذ والواجهات الخشبية'],
    image: '/images/hardwood-1.jpg',
  },
  {
    id: 'hardwood-teak',
    category: 'hardwood',
    arabicName: 'خشب التيك الطبيعي (Teak Wood)',
    englishName: 'Natural Burma & African Teak',
    scientificName: 'Tectona grandis',
    origin: 'آسيا / أفريقيا',
    originRegion: 'asia',
    description:
      'الذهب البني في عالم الأخشاب؛ يحتوي خشب التيك على زيوت طبيعية تحميه من المياه المالحة والشمس الحارقة والرطوبة والأرضة، مما يجعله الخيار الأفضل للأثاث الخارجي والبحري.',
    densityKgM3: '650 - 700 كجم/م³',
    moistureContent: 'KD 10% - 12%',
    grades: ['FEQ (First European Quality)', 'A', 'AB'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm'],
    widthsMm: ['100mm - 250mm'],
    lengthsM: 'من 2.10 متر إلى 4.00 متر',
    colorTone: 'ذهبي بني غني بالزيوت الطبيعية',
    features: ['مقاومة مطلقة للمياه والعوامل الجوية', 'غني بالزيوت والسيليكا الطبيعية', 'لا يتشقق ولا يلتوي', 'فخامة استثنائية'],
    applications: ['أثاث الحدائق والمنتجعات السياحية', 'أرضيات اليخوت والسفن', 'حمامات السباحة والسبا', 'الأبواب والواجهات الفاخرة'],
    image: '/images/hardwood-3.jpg',
  },
  {
    id: 'hardwood-poplar',
    category: 'hardwood',
    arabicName: 'خشب الحور الأمريكي (البوبلار)',
    englishName: 'American Yellow Poplar (Tulipwood)',
    scientificName: 'Liriodendron tulipifera',
    origin: 'الولايات المتحدة الأمريكية',
    originRegion: 'north_america',
    description:
      'خشب صلب متوسط الكثافة ذو سطح ناعم جداً ومسام مغلقة، يشتهر بقدرته المثالية على تقبل الدهانات (الدوكو واللاكيه) والتشغيل الآلي الدقيق دون تشقق.',
    densityKgM3: '450 - 500 كجم/م³',
    moistureContent: 'KD 8% - 10%',
    grades: ['FAS', '1Com', 'Whitewood', 'AB'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm'],
    widthsMm: ['120mm - 250mm'],
    lengthsM: 'من 2.10 متر إلى 4.20 متر',
    colorTone: 'أبيض كريمي مع تدرجات زيتونية فاتحة',
    features: ['أفضل خشب لدهانات الدوكو والملون', 'سهل القطع والتفريز (CNC)', 'وزن متوازن وثبات عالي', 'تكلفة اقتصادية مقارنة بالأرو'],
    applications: ['المطابخ المدهونة وغرف النوم', 'الكرانيش والبانوهات الجدارية', 'هياكل الأثاث المنجد', 'الأبواب الداخلية'],
    image: '/images/hardwood-4.jpg',
  },
  {
    id: 'hardwood-iroko',
    category: 'hardwood',
    arabicName: 'خشب الإيروكو الأفريقي (التيك الأفريقي)',
    englishName: 'African Iroko Hardwood',
    scientificName: 'Milicia excelsa',
    origin: 'ساحل العاج / الكاميرون / أفريقيا',
    originRegion: 'africa',
    description:
      'يُعرف باسم (التيك الأفريقي) لخصائصه المشابهة جداً لخشب التيك الآسيوي في مقاومة المياه والرطوبة والحشرات مع صلابة عالية وتكلفة أكثر تنافسية للمشاريع الكبرى.',
    densityKgM3: '640 - 680 كجم/م³',
    moistureContent: 'KD 10% - 14%',
    grades: ['FAS', 'A', 'AB'],
    thicknessesMm: ['25mm', '32mm', '40mm', '50mm', '60mm', '70mm'],
    widthsMm: ['150mm - 300mm'],
    lengthsM: 'من 2.40 متر إلى 4.20 متر',
    colorTone: 'أصفر ذهبي يتحول إلى بني غني مع الوقت',
    features: ['مقاومة ممتازة للعوامل الخارجية', 'بديل اقتصادي قوي للتيك', 'كثافة وصلابة عالية', 'مناسب للأجواء الساحلية والخليجية'],
    applications: ['الأرضيات الخارجية والبرجولات', 'واجهات الفلل والفنادق', 'الأبواب الخارجية والسلالم', 'المشاريع البحرية'],
    image: '/images/hardwood-2.jpg',
  },
];

export interface SoftwoodGradeInfo {
  code: string;
  name: string;
  arabicTitle: string;
  woodTypes: ('redwood' | 'whitewood')[];
  knotProfile: string;
  bestUse: string;
}

export const SOFTWOOD_GRADES: SoftwoodGradeInfo[] = [
  {
    code: 'US',
    name: 'Unsorted (درجة أولى نخب أول)',
    arabicTitle: 'أعلى درجة - خالي من العيوب تقريباً',
    woodTypes: ['redwood'],
    knotProfile: 'عقد صغيرة جداً وسليمة، ألياف متوازية منتظمة، سطح نقي للنجارة الفاخرة.',
    bestUse: 'الأبواب، الشبابيك، الأثاث الفاخر، الديكورات الظاهرة.',
  },
  {
    code: 'V',
    name: 'Fifth Quality (الدرجة الخامسة الممتازة)',
    arabicTitle: 'درجة ممتازة - عيوب بسيطة جداً',
    woodTypes: ['redwood'],
    knotProfile: 'عقد صحية متماسكة بحجم متوسط، استقامة عالية، جودة تصديرية قياسية.',
    bestUse: 'النجارة المعمارية، الأثاث، الأرضيات، التجاليد الخشبية.',
  },
  {
    code: 'SF',
    name: 'Sawfalling (درجة شاملة US + V)',
    arabicTitle: 'درجة جيدة - مناسب للاستخدامات العامة',
    woodTypes: ['redwood'],
    knotProfile: 'مزيج متوازن من درجات الإنتاج، يجمع بين المتانة العالية والمظهر الجيد.',
    bestUse: 'البناء العام، الهياكل الخشبية، تصنيع الأثاث، المقاولات.',
  },
  {
    code: 'VI',
    name: 'Sixth Quality (الدرجة السادسة)',
    arabicTitle: 'درجة متوسطة - للاستخدامات الصناعية',
    woodTypes: ['redwood', 'whitewood'],
    knotProfile: 'يسمح بعقد أكبر مع احتفاظ اللوح بكامل قوته الميكانيكية والإنشائية.',
    bestUse: 'الشدات الخشبية، الهياكل المخفية، التغليف الصناعي، الإنشاءات.',
  },
  {
    code: 'VII',
    name: 'Seventh Quality (الدرجة السابعة)',
    arabicTitle: 'درجة اقتصادية - للاستخدامات البسيطة',
    woodTypes: ['redwood', 'whitewood'],
    knotProfile: 'درجة اقتصادية للأغراض غير الظاهرة والشدات المؤقتة والطبالي.',
    bestUse: 'الطبالي (Pallets)، الصناديق، الشدات الخرسانية الاقتصادية.',
  },
];

export const HARDWOOD_SPECS = {
  grades: ['A', 'B', 'C', 'D', 'Whitewood', 'ABC', 'BC', 'CD'],
  thicknesses: ['25mm', '32mm', '40mm', '50mm', '60mm', '70mm'],
  lengths: 'من 2.10 متر إلى 4.20 متر',
};

export const SOFTWOOD_SPECS = {
  grades: ['SF', 'I', 'II', 'III', 'IV', 'V', 'VL', 'VLL'],
  crossSections: [
    '100/125×16',
    '75/100/125/150×19',
    '100/125/150×25',
    '100/125/150×38',
    '100/125/150×42',
    '100/125/150×47',
    '100/125/150×50',
  ],
  lengths: 'من 2.10 متر إلى 6 متر',
};

export interface DimensionMatrixRow {
  thicknessMm: number;
  widthMm: string;
  redwood: {
    US: boolean;
    V: boolean;
    SF: boolean;
    VI: boolean;
    VII: boolean;
  };
  whitewood: {
    VI: boolean;
    VII: boolean;
  };
}

// Complete 37-row dimension table matching the exact Kimos Wooden Group specification matrix
export const SOFTWOOD_DIMENSION_MATRIX: DimensionMatrixRow[] = [
  // 75 mm
  { thicknessMm: 75, widthMm: '150-200', redwood: { US: false, V: true, SF: false, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 75, widthMm: '75', redwood: { US: false, V: false, SF: false, VI: true, VII: false }, whitewood: { VI: true, VII: false } },
  // 70 mm
  { thicknessMm: 70, widthMm: '70-90', redwood: { US: false, V: false, SF: false, VI: true, VII: false }, whitewood: { VI: true, VII: false } },
  // 63 mm
  { thicknessMm: 63, widthMm: '150-175-200-225', redwood: { US: false, V: true, SF: false, VI: true, VII: false }, whitewood: { VI: true, VII: false } },
  // 50 mm
  { thicknessMm: 50, widthMm: '250', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '225', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '200', redwood: { US: true, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: true } },
  { thicknessMm: 50, widthMm: '175', redwood: { US: true, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '150', redwood: { US: true, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '140', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '131', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '125', redwood: { US: true, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '115', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 50, widthMm: '100', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: true } },
  { thicknessMm: 50, widthMm: '98', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: false } },
  // 47 mm
  { thicknessMm: 47, widthMm: '250', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 47, widthMm: '225', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: true } },
  { thicknessMm: 47, widthMm: '200', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 47, widthMm: '175', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 47, widthMm: '150', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: true } },
  { thicknessMm: 47, widthMm: '125', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 47, widthMm: '100', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: true } },
  // 44 mm & 42 mm
  { thicknessMm: 44, widthMm: '125-150', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  { thicknessMm: 42, widthMm: '125-150', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  // 38 mm
  { thicknessMm: 38, widthMm: '175-200-225', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: false } },
  { thicknessMm: 38, widthMm: '150', redwood: { US: true, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: false } },
  { thicknessMm: 38, widthMm: '100-125', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  // 36 mm & 34 mm
  { thicknessMm: 36, widthMm: '150', redwood: { US: false, V: false, SF: false, VI: true, VII: false }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 34, widthMm: '112-127', redwood: { US: false, V: false, SF: false, VI: true, VII: false }, whitewood: { VI: false, VII: false } },
  // 32 mm
  { thicknessMm: 32, widthMm: '175-200-225', redwood: { US: false, V: true, SF: false, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  { thicknessMm: 32, widthMm: '125-150', redwood: { US: false, V: true, SF: false, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  // 25 mm
  { thicknessMm: 25, widthMm: '225', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 25, widthMm: '200', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 25, widthMm: '175', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 25, widthMm: '150', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 25, widthMm: '125', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  { thicknessMm: 25, widthMm: '100', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  // 19 mm
  { thicknessMm: 19, widthMm: '150', redwood: { US: false, V: false, SF: true, VI: true, VII: false }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 19, widthMm: '125', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: false, VII: false } },
  { thicknessMm: 19, widthMm: '100', redwood: { US: false, V: false, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
  { thicknessMm: 19, widthMm: '75', redwood: { US: false, V: true, SF: true, VI: true, VII: true }, whitewood: { VI: true, VII: true } },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: 'ship' | 'package' | 'shield-check' | 'headphones' | 'globe' | 'truck';
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'import',
    title: 'استيراد الأخشاب',
    description: 'نستورد أجود أنواع الأخشاب من أمريكا وروسيا وأوروبا وأفريقيا مباشرة من المنتجين والمناشر المعتمدة.',
    highlights: ['تعاقد مباشر مع المناشر الكبرى', 'توريد مستمر طوال العام', 'أسعار منشأ تنافسية'],
    iconName: 'ship',
  },
  {
    id: 'export',
    title: 'تصدير الأخشاب',
    description: 'نصدر إلى أسواق شمال أفريقيا والخليج وآسيا بمعايير جودة عالمية وتغليف قياسي مقاوم للعوامل البحرية.',
    highlights: ['شحن حاويات وسفن صب (Bulk)', 'تخليص جمركي وشهادات منشأ', 'تغطية +23 دولة'],
    iconName: 'package',
  },
  {
    id: 'quality',
    title: 'ضمان الجودة',
    description: 'جميع منتجاتنا تخضع لفحوصات جودة صارمة وفرز دقيق وقياس نسبة الرطوبة (KD) قبل الشحن.',
    highlights: ['فحص الرطوبة والتجفيف الحراري', 'فرز الدرجات بدقة (US, V, SF, FAS)', 'شهادات الصحة النباتية (Phytosanitary)'],
    iconName: 'shield-check',
  },
  {
    id: 'support',
    title: 'دعم العملاء والاستشارات',
    description: 'فريق متخصص لخدمتكم والرد على استفساراتكم ومساعدتكم في اختيار الدرجة والمقاس الأنسب لمشروعكم على مدار الساعة.',
    highlights: ['استشارات فنية مجانية للمصانع', 'متابعة لحظية للشحنات', 'مدير حساب مخصص للشركات'],
    iconName: 'headphones',
  },
  {
    id: 'coverage',
    title: 'تغطية عالمية',
    description: 'شبكة واسعة من الشركاء والموردين والفروع اللوجستية في جميع أنحاء العالم لضمان سرعة التوريد.',
    highlights: ['فروع في 4 دول استراتيجية', 'شراكات في 6 مناطق قارية', 'مرونة في شروط التعاقد (FOB / CIF)'],
    iconName: 'globe',
  },
  {
    id: 'shipping',
    title: 'الشحن والتوصيل',
    description: 'خدمات شحن بحري وبري موثوقة وتوصيل سريع وآمن لجميع الوجهات والموانئ والمستودعات.',
    highlights: ['خطوط ملاحية عالمية سريعة', 'تأمين شامل على البضائع', 'توصيل للمخازن والمواقع'],
    iconName: 'truck',
  },
];

export interface BranchItem {
  code: string;
  country: string;
  city: string;
  role: string;
  details: string;
  phone?: string;
  badgeColor: string;
}

export const BRANCHES_LIST: BranchItem[] = [
  {
    code: 'EG',
    country: 'مصر',
    city: 'القاهرة',
    role: 'المقر الرئيسي والإدارة العامة',
    details: 'إدارة المبيعات الإقليمية، المستودعات الرئيسية، وعمليات الاستيراد والتوزيع في مصر وشمال أفريقيا.',
    phone: '+20 150 380 0581',
    badgeColor: 'bg-[#D97706] text-white',
  },
  {
    code: 'AE',
    country: 'الإمارات',
    city: 'دبي',
    role: 'مكتب الخليج والشرق الأوسط',
    details: 'مركز التوزيع والتصدير الإقليمي لخدمة أسواق دول مجلس التعاون الخليجي وآسيا.',
    badgeColor: 'bg-[#059669] text-white',
  },
  {
    code: 'US',
    country: 'أمريكا',
    city: 'بنسلفانيا',
    role: 'شراكات المنتجين الأمريكيين',
    details: 'مكتب التوريد المباشر للأخشاب الصلبة واللينة الأمريكية والكندية من أرقى الغابات المعتمدة.',
    phone: '+1 (267) 538-9633',
    badgeColor: 'bg-[#2563EB] text-white',
  },
  {
    code: 'RU',
    country: 'روسيا',
    city: 'موسكو',
    role: 'شراكات الأخشاب الروسية',
    details: 'إدارة التعاقدات والفحص المباشر لأخشاب الصنوبر والتنوب واللاركس السيبيري من المناشر الروسية.',
    badgeColor: 'bg-[#DC2626] text-white',
  },
];

export const GLOBAL_REGIONS = [
  { id: 'na', name: 'أمريكا الشمالية', detail: 'الولايات المتحدة وكندا — الأرو، الجوز، الآش، SPF، دوجلاس فير' },
  { id: 'eu', name: 'أوروبا', detail: 'رومانيا والسويد وفنلندا — الزان المبخر، الأرو الأوروبي، الصنوبر الاسكندنافي' },
  { id: 'ru', name: 'روسيا', detail: 'سيبيريا وكاريليا — الصنوبر الروسي، التنوب الأبيض، اللاركس السيبيري' },
  { id: 'af', name: 'أفريقيا', detail: 'غرب ووسط وشمال أفريقيا — الماهوجني، الإيروكو، وأسواق التصدير الكبرى' },
  { id: 'me', name: 'الشرق الأوسط', detail: 'مصر والخليج العربي — مراكز التوزيع الإقليمية وتوريد المشاريع الكبرى' },
  { id: 'as', name: 'آسيا', detail: 'جنوب وشرق آسيا — التيك الطبيعي وتجارة الأخشاب الدولية' },
];

export const SOFTWOOD_GALLERY = [
  { src: '/images/softwood-1.jpg', title: 'ربطات الصنوبر الاسكندنافي والروسي الجاهزة للشحن', tag: 'الصنوبر (Pine)' },
  { src: '/images/softwood-2.jpg', title: 'ألواح التنوب الأبيض (Whitewood) المجففة بالفرن', tag: 'التنوب (Spruce)' },
  { src: '/images/softwood-3.jpg', title: 'مستودعات الأخشاب اللينة المفروزة حسب المقاس والدرجة', tag: 'تخزين قياسي' },
  { src: '/images/softwood-4.jpg', title: 'مقطع عرضي يوضح نقاء الألياف وحلقات النمو المتقاربة', tag: 'جودة الألياف' },
  { src: '/images/softwood-5.jpg', title: 'ألواح اللاركس والصنوبر بمقاسات إنشائية دقيقة', tag: 'مقاسات متعددة' },
  { src: '/images/softwood-main.jpg', title: 'أخشاب لينة فاخرة ممسوحة ومصقولة بدقة عالية', tag: 'درجة أولى US/V' },
];

export const HARDWOOD_GALLERY = [
  { src: '/images/hardwood-1.jpg', title: 'عمليات مناولة ونقل جذوع الأخشاب الصلبة من الغابات المعتمدة', tag: 'المصدر والغابات' },
  { src: '/images/hardwood-2.jpg', title: 'جذوع الزان والأرو المختارة قبل النشر والتبخير', tag: 'جذوع منتقاة' },
  { src: '/images/hardwood-3.jpg', title: 'خطوط النشر الأوتوماتيكية الحديثة لضمان دقة السمك', tag: 'نشر وتصنيع دقيق' },
  { src: '/images/hardwood-4.jpg', title: 'ألواح خشب الزان الأوروبي المبخر (Steamed Beech) بعد التجفيف', tag: 'خشب الزان' },
  { src: '/images/hardwood-5.jpg', title: 'رصات الأخشاب الصلبة الجاهزة للتصدير بعلامات الجودة', tag: 'تجهيز التصدير' },
  { src: '/images/hardwood-6.jpg', title: 'التجفيف الطبيعي والفرني المتدرج لمنع الالتواء والتشقق', tag: 'معالجة وتجفيف' },
];
