import React, { useState } from 'react';
import {
  TreePine,
  ArrowRight,
  Ruler,
  Check,
  Search,
  Maximize2,
  X,
} from 'lucide-react';
import {
  TIMBER_PRODUCTS,
  SOFTWOOD_SPECS,
  SOFTWOOD_GRADES,
  SOFTWOOD_DIMENSION_MATRIX,
  SOFTWOOD_GALLERY,
  RoutePath,
} from '../data/timberData';
import { filterDimensionMatrix } from '../utils/timberLogic';
import { QuoteFormSection } from './QuoteFormSection';

interface SoftwoodViewProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
}

const THICKNESS_FILTERS: (number | 'all')[] = [
  'all',
  75,
  70,
  63,
  50,
  47,
  44,
  42,
  38,
  36,
  34,
  32,
  25,
  19,
];

export const SoftwoodView: React.FC<SoftwoodViewProps> = ({
  darkMode,
  onNavigate,
}) => {
  const softwoodProducts = TIMBER_PRODUCTS.filter(
    (p) => p.category === 'softwood'
  );

  // Interactive Dimension Matrix filters
  const [selectedThickness, setSelectedThickness] = useState<number | 'all'>('all');
  const [selectedWoodClass, setSelectedWoodClass] = useState<
    'all' | 'redwood' | 'whitewood'
  >('all');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<
    'all' | 'US' | 'V' | 'SF' | 'VI' | 'VII'
  >('all');
  const [widthSearch, setWidthSearch] = useState('');

  // Pre-fill Quote state
  const [quotePreselect, setQuotePreselect] = useState({
    woodType: 'الصنوبر الاسكندنافي والروسي (ريد وود)',
    grade: 'SF',
    thickness: '50mm',
  });

  // Lightbox image
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const filteredMatrix = filterDimensionMatrix(SOFTWOOD_DIMENSION_MATRIX, {
    thicknessMm: selectedThickness,
    woodClass: selectedWoodClass,
    grade: selectedGradeFilter,
    searchWidth: widthSearch,
  });

  const handleSelectDimensionForQuote = (
    thicknessMm: number,
    widthMm: string,
    defaultGrade: string
  ) => {
    setQuotePreselect({
      woodType: 'الصنوبر الاسكندنافي والروسي (ريد وود)',
      grade: defaultGrade,
      thickness: `${thicknessMm}mm`,
    });
    const el = document.getElementById('quote-request-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Top Intro Header matching screencapture-kimosgroup-com-products-softwood */}
      <section className="pt-10 pb-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <a
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/products');
              }}
              className={`inline-flex items-center gap-1.5 text-xs font-extrabold hover:underline ${
                darkMode ? 'text-[#D0DDD1]' : 'text-[#334235]'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>العودة للمنتجات (/products)</span>
            </a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E5EAE4] text-[#18341C] border border-[#C5D1C4] flex items-center justify-center shrink-0">
              <TreePine className="w-7 h-7" />
            </div>
            <div>
              <h1
                className={`text-3xl sm:text-4xl font-extrabold ${
                  darkMode ? 'text-white' : 'text-[#111F13]'
                }`}
              >
                الأخشاب اللينة
              </h1>
              <p
                className={`text-sm font-mono-num font-bold ${
                  darkMode ? 'text-[#F5A623]' : 'text-[#526354]'
                }`}
              >
                Softwood Timber — Russian & Scandinavian Redwood / Whitewood / SPF
              </p>
            </div>
          </div>

          <p
            className={`text-base sm:text-lg leading-relaxed max-w-3xl font-medium ${
              darkMode ? 'text-[#D6E2D7]' : 'text-[#263528]'
            }`}
          >
            الأخشاب اللينة مقاومة جداً للتعفن، ولها لون وملمس موحد، وسهلة القطع، ويمكن صقلها ولصقها. يمكن ملء تجاويفها الخلوية بالراتنج، وهي مفضلة كمواد بناء وهياكل إنشائية وأثاث.
          </p>
        </div>
      </section>

      {/* High-Contrast Full-Width Banner (Fixes the broken banner in original screenshot!) */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden border-y border-[#2C422E]">
        <img
          src="/images/softwood-main.jpg"
          alt="أجود أنواع الأخشاب اللينة"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E10]/90 via-[#0E1E10]/55 to-black/30" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            أجود أنواع الأخشاب اللينة
          </h2>
          <p className="text-sm sm:text-base text-[#E2ECE2] font-semibold mt-1">
            من مصادر عالمية موثوقة في روسيا والسويد وفنلندا وكندا وأمريكا الشمالية
          </p>
        </div>
      </section>

      {/* Dimensions & Lengths Summary Cards */}
      <section className="py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Thickness x Width */}
          <div
            className={`md:col-span-8 rounded-2xl border p-6 shadow-xs ${
              darkMode
                ? 'bg-[#152617] border-[#29422B] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
          >
            <div className="flex items-center gap-2 text-base font-extrabold mb-4">
              <Ruler className="w-4 h-4 text-[#B45309] dark:text-[#F5A623]" />
              <span>السمك × العرض القياسي (مم)</span>
            </div>
            <div className="flex flex-wrap gap-2.5" dir="ltr">
              {SOFTWOOD_SPECS.crossSections.map((dim) => (
                <span
                  key={dim}
                  className={`font-mono-num text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-lg border ${
                    darkMode
                      ? 'bg-[#1D331F] border-[#355437] text-[#E6F0E6]'
                      : 'bg-[#E9EFE8] border-[#BDC9BC] text-[#142916]'
                  }`}
                >
                  {dim}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Length */}
          <div
            className={`md:col-span-4 rounded-2xl border p-6 shadow-xs flex flex-col justify-between ${
              darkMode
                ? 'bg-[#152617] border-[#29422B] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
          >
            <div className="flex items-center gap-2 text-base font-extrabold mb-3">
              <Ruler className="w-4 h-4 text-[#B45309] dark:text-[#F5A623]" />
              <span>الطول المتاح</span>
            </div>
            <div
              className={`px-4 py-3 rounded-xl border text-center font-extrabold text-sm sm:text-base ${
                darkMode
                  ? 'bg-[#2B2313] border-[#6B4E1B] text-[#FDE68A]'
                  : 'bg-[#FEF3C7] border-[#F59E0B] text-[#78350F]'
              }`}
            >
              {SOFTWOOD_SPECS.lengths}
            </div>
            <p className="text-xs font-semibold opacity-80 mt-2">
              متوفر بتدرج أطوال كل 30 سم (2.10م حتى 6.00م)
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Softwood Varieties (7 Detailed Types) */}
      <section className="py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span
              className={`text-xs font-extrabold ${
                darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
              }`}
            >
              تشكيلة واسعة لجميع الاستخدامات الإنشائية والصناعية
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                darkMode ? 'text-white' : 'text-[#111F13]'
              }`}
            >
              أنواع الأخشاب اللينة المتوفرة ({softwoodProducts.length} أنواع)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softwoodProducts.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                  darkMode
                    ? 'bg-[#152617] border-[#29422B] text-white'
                    : 'bg-white border-[#CFCBC0] text-[#111F13]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold">
                        {item.arabicName}
                      </h3>
                      <p
                        className={`text-xs font-mono-num font-semibold mt-0.5 ${
                          darkMode ? 'text-[#B8CBB9]' : 'text-[#4A5A4C]'
                        }`}
                      >
                        {item.englishName}
                      </p>
                      <div
                        className={`text-xs font-extrabold mt-1 ${
                          darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                        }`}
                      >
                        المصدر: {item.origin} · الكثافة: {item.densityKgM3}
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#E8EFE7] text-[#18341C] border border-[#C5D1C4] flex items-center justify-center shrink-0">
                      <TreePine className="w-5 h-5" />
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed font-medium mb-4 ${
                      darkMode ? 'text-[#D0DDD1]' : 'text-[#28362A]'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold mb-4">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-current/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold opacity-80">الدرجات: </span>
                    <span className="font-mono-num font-extrabold">
                      {item.grades.join(' / ')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setQuotePreselect({
                        woodType: item.arabicName,
                        grade: item.grades[0] || 'SF',
                        thickness: item.thicknessesMm[0] || '50mm',
                      });
                      const el = document.getElementById('quote-request-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-[#18341C] hover:bg-[#0F2312] text-white font-extrabold transition-colors cursor-pointer"
                  >
                    اطلب عرض سعر لهذا النوع
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Softwood Photo Gallery */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            معرض صور الأخشاب اللينة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFTWOOD_GALLERY.map((img) => (
              <button
                key={img.title}
                type="button"
                onClick={() => setLightboxImg(img)}
                className={`group relative rounded-2xl overflow-hidden border text-right cursor-pointer ${
                  darkMode ? 'border-[#29422B]' : 'border-[#CFCBC0]'
                }`}
              >
                <div className="aspect-square w-full overflow-hidden bg-[#1D2D1E]">
                  <img
                    src={img.src}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-bold text-[#FBBF24]">
                    {img.tag}
                  </span>
                  <div className="text-xs sm:text-sm font-bold flex items-center justify-between gap-2 mt-0.5">
                    <span>{img.title}</span>
                    <Maximize2 className="w-4 h-4 shrink-0 opacity-80" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Softwood Grades Guide matching screencapture-kimosgroup-com-products-softwood */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-center mb-10 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            درجات الأخشاب اللينة المعتمدة
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Right in RTL: Scandinavian Pine (Redwood) Grades */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 shadow-xs ${
                darkMode
                  ? 'bg-[#152617] border-[#29422B] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-current/10">
                <h3 className="text-lg font-extrabold">
                  الصنوبر الاسكندنافي والروسي (Redwood)
                </h3>
                <span className="text-xs font-bold text-[#B45309] dark:text-[#F5A623]">
                  5 درجات قياسية
                </span>
              </div>

              <div className="space-y-3.5">
                {SOFTWOOD_GRADES.map((g) => (
                  <div
                    key={g.code}
                    className={`p-4 rounded-xl border flex items-start justify-between gap-4 ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#253C27]'
                        : 'bg-[#F5F4EE] border-[#DCD8CC]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-extrabold">{g.name}</div>
                      <div
                        className={`text-xs font-bold ${
                          darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                        }`}
                      >
                        {g.arabicTitle}
                      </div>
                      <p
                        className={`text-xs leading-relaxed font-medium ${
                          darkMode ? 'text-[#C8D6C9]' : 'text-[#364638]'
                        }`}
                      >
                        {g.knotProfile} — <strong>الاستخدام:</strong> {g.bestUse}
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#18341C] text-white font-mono-num text-sm font-extrabold flex items-center justify-center shrink-0">
                      {g.code}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left in RTL: Scandinavian Spruce (Whitewood) + Real Grading Planks Visual */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 shadow-xs space-y-6 ${
                darkMode
                  ? 'bg-[#152617] border-[#29422B] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-current/10">
                <h3 className="text-lg font-extrabold">
                  التنوب الاسكندنافي (Whitewood) ودليل الفرز البصري
                </h3>
              </div>

              <div className="space-y-3">
                {SOFTWOOD_GRADES.filter((g) =>
                  g.woodTypes.includes('whitewood')
                ).map((g) => (
                  <div
                    key={g.code}
                    className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#253C27]'
                        : 'bg-[#F5F4EE] border-[#DCD8CC]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-extrabold">{g.name}</div>
                      <div
                        className={`text-xs font-bold ${
                          darkMode ? 'text-[#D0DDD1]' : 'text-[#39493B]'
                        }`}
                      >
                        {g.arabicTitle}
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#2E4631] text-white font-mono-num text-sm font-extrabold flex items-center justify-center shrink-0">
                      {g.code}
                    </div>
                  </div>
                ))}
              </div>

              {/* Real Visual Comparison Image of Scandinavian Pine & Spruce Grades */}
              <div className="rounded-xl overflow-hidden border border-[#DCD8CC] bg-white p-3">
                <img
                  src="/images/scandinavian-grades.jpg"
                  alt="مقارنة درجات الصنوبر والتنوب الاسكندنافي US, V, SF, VI, VII"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain mx-auto max-h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detailed Dimensions Matrix Table (جدول المقاسات التفصيلي) */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className={`rounded-2xl border p-6 sm:p-8 shadow-sm ${
              darkMode
                ? 'bg-[#152617] border-[#29422B] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                جدول المقاسات التفصيلي للأخشاب اللينة
              </h2>
              <p
                className={`text-xs sm:text-sm font-medium mt-1 ${
                  darkMode ? 'text-[#C8D6C9]' : 'text-[#364638]'
                }`}
              >
                اختر السمك أو الدرجة لتصفية الجدول، أو اضغط على أي مقاس لطلبه مباشرة في عرض السعر
              </p>
            </div>

            {/* Interactive Table Filters */}
            <div className="space-y-4 mb-6">
              {/* Thickness Filter Pills */}
              <div>
                <label className="block text-xs font-extrabold mb-2">
                  تصفية حسب السمك (T in mm):
                </label>
                <div className="flex flex-wrap gap-1.5" dir="ltr">
                  {THICKNESS_FILTERS.map((t) => (
                    <button
                      key={String(t)}
                      type="button"
                      onClick={() => setSelectedThickness(t)}
                      className={`px-3 py-1.5 rounded-lg font-mono-num text-xs font-extrabold border transition-colors cursor-pointer ${
                        selectedThickness === t
                          ? 'bg-[#D9822B] border-[#D9822B] text-[#111F13]'
                          : darkMode
                          ? 'bg-[#0F1C10] border-[#2B442D] text-[#D0DDD1] hover:border-[#F5A623]'
                          : 'bg-[#F6F4EC] border-[#CFCBC0] text-[#111F13] hover:bg-[#E8E4D8]'
                      }`}
                    >
                      {t === 'all' ? 'الكل (37 مقاس)' : `${t} mm`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wood Class & Grade & Width Search */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-extrabold mb-1">
                    نوع الخشب في الجدول:
                  </label>
                  <select
                    value={selectedWoodClass}
                    onChange={(e) =>
                      setSelectedWoodClass(
                        e.target.value as 'all' | 'redwood' | 'whitewood'
                      )
                    }
                    aria-label="تصفية حسب نوع الخشب في الجدول"
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-bold ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#314D33] text-white'
                        : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                    }`}
                  >
                    <option value="all">الكل (Red Wood + White Wood)</option>
                    <option value="redwood">الصنوبر (Red Wood)</option>
                    <option value="whitewood">التنوب (White Wood)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold mb-1">
                    تصفية حسب الدرجة المتاحة:
                  </label>
                  <select
                    value={selectedGradeFilter}
                    onChange={(e) =>
                      setSelectedGradeFilter(
                        e.target.value as 'all' | 'US' | 'V' | 'SF' | 'VI' | 'VII'
                      )
                    }
                    aria-label="تصفية حسب الدرجة المتاحة"
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-bold ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#314D33] text-white'
                        : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                    }`}
                  >
                    <option value="all">جميع الدرجات (US, V, SF, VI, VII)</option>
                    <option value="US">درجة US متاحة</option>
                    <option value="V">درجة V متاحة</option>
                    <option value="SF">درجة SF متاحة</option>
                    <option value="VI">درجة VI متاحة</option>
                    <option value="VII">درجة VII متاحة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold mb-1">
                    بحث بالعرض (W in mm):
                  </label>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 opacity-60" />
                    <input
                      type="text"
                      value={widthSearch}
                      onChange={(e) => setWidthSearch(e.target.value)}
                      placeholder="مثال: 150 أو 200..."
                      className={`w-full pr-8 pl-3 py-2 rounded-lg border text-xs font-mono-num font-bold ${
                        darkMode
                          ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                          : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Structured HTML Table matching the exact orange/gold specification matrix */}
            <div className="overflow-x-auto rounded-xl border border-[#8B5E2B]">
              <table
                dir="ltr"
                className="w-full text-center border-collapse font-mono-num text-xs sm:text-sm"
              >
                <thead>
                  <tr className="bg-[#D9822B] text-[#111F13] font-extrabold border-b border-[#8B5E2B]">
                    <th
                      colSpan={2}
                      className="py-2.5 px-3 border-r border-[#8B5E2B]"
                    >
                      Dimension (المقاس مم)
                    </th>
                    <th
                      colSpan={5}
                      className="py-2.5 px-3 border-r border-[#8B5E2B]"
                    >
                      Red Wood (الصنوبر)
                    </th>
                    <th
                      colSpan={2}
                      className="py-2.5 px-3 border-r border-[#8B5E2B]"
                    >
                      White Wood (التنوب)
                    </th>
                    <th className="py-2.5 px-3">طلب سريع</th>
                  </tr>
                  <tr className="bg-[#F3C68F] text-[#111F13] font-extrabold border-b border-[#8B5E2B] text-xs">
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">
                      T in mm
                    </th>
                    <th className="py-2 px-3 border-r border-[#8B5E2B]">
                      W in mm
                    </th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">US</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">V</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">SF</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">VI</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">VII</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">VI</th>
                    <th className="py-2 px-2 border-r border-[#8B5E2B]">VII</th>
                    <th className="py-2 px-2">Quote</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMatrix.map((row, idx) => {
                    const defaultGrade = row.redwood.SF
                      ? 'SF'
                      : row.redwood.V
                      ? 'V'
                      : 'VI';
                    return (
                      <tr
                        key={`${row.thicknessMm}-${row.widthMm}-${idx}`}
                        className={`border-b border-[#D5CFC2] transition-colors ${
                          darkMode
                            ? idx % 2 === 0
                              ? 'bg-[#122114] text-white hover:bg-[#1C321E]'
                              : 'bg-[#172919] text-white hover:bg-[#1C321E]'
                            : idx % 2 === 0
                            ? 'bg-white text-[#111F13] hover:bg-[#FEF3C7]/50'
                            : 'bg-[#FAF8F2] text-[#111F13] hover:bg-[#FEF3C7]/50'
                        }`}
                      >
                        <td className="py-2 px-2 font-extrabold bg-[#F7D7AD] text-[#111F13] border-r border-[#8B5E2B]">
                          {row.thicknessMm}
                        </td>
                        <td className="py-2 px-3 font-bold border-r border-[#D5CFC2]">
                          {row.widthMm}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#D5CFC2]">
                          {row.redwood.US ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#D5CFC2]">
                          {row.redwood.V ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#D5CFC2]">
                          {row.redwood.SF ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#D5CFC2]">
                          {row.redwood.VI ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#8B5E2B]">
                          {row.redwood.VII ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#D5CFC2]">
                          {row.whitewood.VI ? 'X' : ''}
                        </td>
                        <td className="py-2 px-2 font-extrabold border-r border-[#8B5E2B]">
                          {row.whitewood.VII ? 'X' : ''}
                        </td>
                        <td className="py-1.5 px-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleSelectDimensionForQuote(
                                row.thicknessMm,
                                row.widthMm,
                                defaultGrade
                              )
                            }
                            className="px-2.5 py-1 rounded bg-[#18341C] hover:bg-[#B45309] text-white text-[11px] font-sans font-bold transition-colors cursor-pointer"
                          >
                            اطلب المقاس
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-center text-xs font-bold opacity-85">
              T = السمك (مم) | W = العرض (مم) | X = متوفر للتوريد المباشر
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <QuoteFormSection
        category="softwood"
        preselectedWoodType={quotePreselect.woodType}
        preselectedGrade={quotePreselect.grade}
        preselectedThickness={quotePreselect.thickness}
        darkMode={darkMode}
      />

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="max-w-3xl w-full bg-[#152617] text-white rounded-2xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <span className="font-bold text-sm">{lightboxImg.title}</span>
              <button
                type="button"
                onClick={() => setLightboxImg(null)}
                aria-label="إغلاق الصورة"
                className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
};
