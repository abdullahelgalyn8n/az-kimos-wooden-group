import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  Ruler,
  Check,
  Maximize2,
  X,
} from 'lucide-react';
import {
  TIMBER_PRODUCTS,
  HARDWOOD_SPECS,
  HARDWOOD_GALLERY,
  RoutePath,
} from '../data/timberData';
import { QuoteFormSection } from './QuoteFormSection';

interface HardwoodViewProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
}

export const HardwoodView: React.FC<HardwoodViewProps> = ({
  darkMode,
  onNavigate,
}) => {
  const hardwoodProducts = TIMBER_PRODUCTS.filter(
    (p) => p.category === 'hardwood'
  );

  const [quotePreselect, setQuotePreselect] = useState({
    woodType: 'خشب الزان الأوروبي المبخر',
    grade: 'A',
    thickness: '50mm',
  });

  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <div>
      {/* Top Header matching screencapture-kimosgroup-com-products-hardwood */}
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
            <div className="w-14 h-14 rounded-2xl bg-[#FDEFD9] text-[#9A5206] border border-[#F59E0B]/40 flex items-center justify-center shrink-0">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <h1
                className={`text-3xl sm:text-4xl font-extrabold ${
                  darkMode ? 'text-white' : 'text-[#111F13]'
                }`}
              >
                الأخشاب الصلبة
              </h1>
              <p
                className={`text-sm font-mono-num font-bold ${
                  darkMode ? 'text-[#F5A623]' : 'text-[#78350F]'
                }`}
              >
                Hardwood Lumber — Beech, Oak, Walnut, Ash, Mahogany & Teak
              </p>
            </div>
          </div>

          <p
            className={`text-base sm:text-lg leading-relaxed max-w-3xl font-medium ${
              darkMode ? 'text-[#D6E2D7]' : 'text-[#263528]'
            }`}
          >
            الأخشاب الصلبة تأتي من الأشجار عريضة الأوراق وتتميز بكثافتها العالية ومتانتها الاستثنائية. تُستخدم في صناعة الأثاث الفاخر والأرضيات والأبواب والديكورات الداخلية عالية الجودة.
          </p>
        </div>
      </section>

      {/* Full-Width Red-Stacked Hardwood Warehouse Banner matching screencapture-kimosgroup-com-products-hardwood */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden border-y border-[#7C3F11]">
        <img
          src="/images/hardwood-banner.jpg"
          alt="أجود أنواع الأخشاب الصلبة"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            أجود أنواع الأخشاب الصلبة
          </h2>
          <p className="text-sm sm:text-base text-[#FDE68A] font-semibold mt-1">
            جودة فائقة ومتانة استثنائية — مجففة بالفرن (KD 8%-12%) ومفروزة بدقة
          </p>
        </div>
      </section>

      {/* Grades, Thicknesses & Lengths Cards */}
      <section className="py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Available Grades + Lengths */}
          <div className="space-y-6">
            <div
              className={`rounded-2xl border p-6 shadow-xs ${
                darkMode
                  ? 'bg-[#152617] border-[#29422B] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <div className="flex items-center gap-2 text-base font-extrabold mb-4">
                <Layers className="w-4 h-4 text-[#B45309] dark:text-[#F5A623]" />
                <span>الدرجات المتاحة</span>
              </div>
              <div className="flex flex-wrap gap-2" dir="ltr">
                {HARDWOOD_SPECS.grades.map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => {
                      setQuotePreselect((prev) => ({ ...prev, grade }));
                      const el = document.getElementById('quote-request-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`font-mono-num text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                      darkMode
                        ? 'bg-[#2B2313] border-[#6B4E1B] text-[#FDE68A] hover:bg-[#D9822B] hover:text-[#111F13]'
                        : 'bg-[#FDEFD9] border-[#E5B879] text-[#78350F] hover:bg-[#D9822B] hover:text-white'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border p-6 shadow-xs flex items-center justify-between gap-4 ${
                darkMode
                  ? 'bg-[#152617] border-[#29422B] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <div className="flex items-center gap-2 text-base font-extrabold">
                <Ruler className="w-4 h-4 text-[#B45309] dark:text-[#F5A623]" />
                <span>الطول القياسي</span>
              </div>
              <span
                className={`px-4 py-2 rounded-xl border text-sm font-extrabold ${
                  darkMode
                    ? 'bg-[#1D331F] border-[#355437] text-white'
                    : 'bg-[#EFECE3] border-[#C8C3B5] text-[#111F13]'
                }`}
              >
                {HARDWOOD_SPECS.lengths}
              </span>
            </div>
          </div>

          {/* Available Thicknesses */}
          <div
            className={`rounded-2xl border p-6 shadow-xs flex flex-col justify-between ${
              darkMode
                ? 'bg-[#152617] border-[#29422B] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-base font-extrabold mb-4">
                <Ruler className="w-4 h-4 text-[#B45309] dark:text-[#F5A623]" />
                <span>التخانات / السمك المتوفر (مم)</span>
              </div>
              <div className="flex flex-wrap gap-2.5" dir="ltr">
                {HARDWOOD_SPECS.thicknesses.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setQuotePreselect((prev) => ({ ...prev, thickness: t }));
                      const el = document.getElementById('quote-request-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`font-mono-num text-sm font-extrabold px-4 py-2 rounded-xl border transition-colors cursor-pointer ${
                      darkMode
                        ? 'bg-[#1D331F] border-[#355437] text-[#E6F0E6] hover:border-[#F5A623]'
                        : 'bg-[#E9EFE8] border-[#BDC9BC] text-[#142916] hover:bg-[#18341C] hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <p
              className={`text-xs font-medium mt-4 pt-3 border-t border-current/10 ${
                darkMode ? 'text-[#C8D6C9]' : 'text-[#425244]'
              }`}
            >
              اضغط على أي درجة أو سمك لاختياره تلقائياً في نموذج طلب عرض السعر أدناه.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Available Hardwood Types (8 Species) */}
      <section className="py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span
              className={`text-xs font-extrabold ${
                darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
              }`}
            >
              توريد مباشر للأثاث الفاخر والديكورات والأرضيات
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                darkMode ? 'text-white' : 'text-[#111F13]'
              }`}
            >
              أنواع الأخشاب الصلبة المتوفرة ({hardwoodProducts.length} أنواع)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardwoodProducts.map((item) => (
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
                    <div className="w-11 h-11 rounded-xl bg-[#FDEFD9] text-[#9A5206] border border-[#F59E0B]/40 flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
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

                  <div
                    className={`text-xs font-semibold mb-3 ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#39493B]'
                    }`}
                  >
                    <strong>اللون:</strong> {item.colorTone}
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
                        grade: item.grades[0] || 'A',
                        thickness: item.thicknessesMm[0] || '50mm',
                      });
                      const el = document.getElementById('quote-request-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-[#B46519] hover:bg-[#965010] text-white font-extrabold transition-colors cursor-pointer"
                  >
                    اطلب عرض سعر لهذا الخشب
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardwood Gallery matching screencapture-kimosgroup-com-products-hardwood */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            معرض صور الأخشاب الصلبة
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HARDWOOD_GALLERY.map((img) => (
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

      {/* Quote Request Form */}
      <QuoteFormSection
        category="hardwood"
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
