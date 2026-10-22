import React, { useState, useEffect } from 'react';
import {
  Send,
  Calculator,
  CheckCircle2,
  AlertCircle,
  Layers,
  ExternalLink,
} from 'lucide-react';
import {
  TIMBER_PRODUCTS,
  HARDWOOD_SPECS,
  SOFTWOOD_SPECS,
  COMPANY_INFO,
} from '../data/timberData';
import {
  calculateTimberVolume,
  validateQuoteForm,
  buildQuoteWhatsappUrl,
} from '../utils/timberLogic';

interface QuoteFormSectionProps {
  category?: 'softwood' | 'hardwood' | 'all';
  preselectedWoodType?: string;
  preselectedGrade?: string;
  preselectedThickness?: string;
  darkMode: boolean;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  category = 'all',
  preselectedWoodType = '',
  preselectedGrade = '',
  preselectedThickness = '',
  darkMode,
}) => {
  const availableWoods = TIMBER_PRODUCTS.filter(
    (p) => category === 'all' || p.category === category
  );

  const availableGrades =
    category === 'hardwood'
      ? HARDWOOD_SPECS.grades
      : category === 'softwood'
      ? ['US', 'V', 'SF', 'VI', 'VII', ...SOFTWOOD_SPECS.grades]
      : ['US', 'V', 'SF', 'VI', 'VII', 'FAS', 'A', 'B', 'AB', 'ABC', 'BC'];

  const availableThicknesses =
    category === 'hardwood'
      ? HARDWOOD_SPECS.thicknesses
      : category === 'softwood'
      ? ['16mm', '19mm', '25mm', '32mm', '38mm', '42mm', '44mm', '47mm', '50mm', '63mm', '70mm', '75mm']
      : ['16mm', '19mm', '25mm', '32mm', '38mm', '40mm', '47mm', '50mm', '60mm', '63mm', '70mm', '75mm'];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [woodType, setWoodType] = useState(preselectedWoodType);
  const [grade, setGrade] = useState(preselectedGrade);
  const [thickness, setThickness] = useState(preselectedThickness);
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedQuote, setSubmittedQuote] = useState<{
    refId: string;
    whatsappUrl: string;
    summary: string;
  } | null>(null);

  // Built-in m3 Volume Calculator state
  const [showCalc, setShowCalc] = useState(false);
  const [calcThickness, setCalcThickness] = useState(50);
  const [calcWidth, setCalcWidth] = useState(150);
  const [calcLength, setCalcLength] = useState(4.0);
  const [calcPieces, setCalcPieces] = useState(500);

  useEffect(() => {
    if (preselectedWoodType) setWoodType(preselectedWoodType);
  }, [preselectedWoodType]);

  useEffect(() => {
    if (preselectedGrade) setGrade(preselectedGrade);
  }, [preselectedGrade]);

  useEffect(() => {
    if (preselectedThickness) setThickness(preselectedThickness);
  }, [preselectedThickness]);

  const calcResult = calculateTimberVolume(
    {
      thicknessMm: calcThickness,
      widthMm: calcWidth,
      lengthM: calcLength,
      piecesCount: calcPieces,
    },
    category === 'hardwood' ? 710 : 520
  );

  const handleApplyCalculatedVolume = () => {
    setQuantity(`${calcResult.totalVolumeM3} متر مكعب (${calcPieces} لوح مقاس ${calcThickness}×${calcWidth} مم × ${calcLength} م)`);
    setThickness(`${calcThickness}mm`);
    setShowCalc(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm({
      name,
      phone,
      woodType,
      grade,
      thickness,
      quantity,
      notes,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedQuote(null);
      return;
    }

    setErrors({});
    const whatsappUrl = buildQuoteWhatsappUrl(
      { name, phone, woodType, grade, thickness, quantity, notes },
      COMPANY_INFO.phones.egyptWhatsapp
    );
    const refId = `KWG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedQuote({
      refId,
      whatsappUrl,
      summary: `${woodType} — الدرجة: ${grade} — السمك: ${thickness} — الكمية: ${quantity}`,
    });
  };

  return (
    <section
      id="quote-request-section"
      className="py-14 px-4 sm:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span
            className={`text-sm font-bold tracking-wide ${
              darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
            }`}
          >
            تسعير مباشر للمصانع والشركات
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            طلب عرض سعر
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              darkMode ? 'text-[#D0DDD1]' : 'text-[#2E3D30]'
            }`}
          >
            املأ البيانات والمواصفات المطلوبة وسنتواصل معك فوراً عبر واتساب أو الهاتف بعرض سعر تفصيلي
          </p>
        </div>

        <div
          className={`rounded-2xl border p-6 sm:p-8 shadow-sm transition-colors ${
            darkMode
              ? 'bg-[#152617] border-[#29422B] text-white'
              : 'bg-white border-[#CFCBC0] text-[#111F13]'
          }`}
        >
          {/* Card Header with Optional Volume Calculator Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-current/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] text-[#9A5206] border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">طلب عرض سعر مخصص</h3>
                <p
                  className={`text-xs font-medium ${
                    darkMode ? 'text-[#C2D4C3]' : 'text-[#425244]'
                  }`}
                >
                  توريد للحاويات الكاملة والطلبيات التجارية بالمتر المكعب
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowCalc(!showCalc)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-[#1E3420] border-[#355437] text-[#F5A623] hover:bg-[#27422A]'
                  : 'bg-[#F7F5EE] border-[#C8C3B5] text-[#18341C] hover:bg-[#EAE6D9]'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#B45309]" />
              <span>{showCalc ? 'إخفاء حاسبة التكعيب' : 'حاسبة تكعيب الأخشاب (m³)'}</span>
            </button>
          </div>

          {/* Interactive Timber Cubic Meter Calculator */}
          {showCalc && (
            <div
              className={`mb-6 p-4 rounded-xl border ${
                darkMode
                  ? 'bg-[#0F1C10] border-[#29422B]'
                  : 'bg-[#F6F4EC] border-[#CFCBC0]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#B45309]" />
                  <span>حاسبة حجم الأخشاب بالمتر المكعب (m³)</span>
                </h4>
                <span className="text-xs font-mono-num font-semibold opacity-80">
                  المعادلة: السمك × العرض × الطول × العدد
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-bold mb-1">السمك (مم)</label>
                  <input
                    type="number"
                    min={10}
                    max={200}
                    value={calcThickness}
                    onChange={(e) => setCalcThickness(Number(e.target.value) || 0)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm font-mono-num font-bold ${
                      darkMode
                        ? 'bg-[#162718] border-[#345036] text-white'
                        : 'bg-white border-[#B8B4A6] text-[#111F13]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">العرض (مم)</label>
                  <input
                    type="number"
                    min={50}
                    max={400}
                    value={calcWidth}
                    onChange={(e) => setCalcWidth(Number(e.target.value) || 0)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm font-mono-num font-bold ${
                      darkMode
                        ? 'bg-[#162718] border-[#345036] text-white'
                        : 'bg-white border-[#B8B4A6] text-[#111F13]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">الطول (متر)</label>
                  <input
                    type="number"
                    step="0.3"
                    min={1}
                    max={6}
                    value={calcLength}
                    onChange={(e) => setCalcLength(Number(e.target.value) || 0)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm font-mono-num font-bold ${
                      darkMode
                        ? 'bg-[#162718] border-[#345036] text-white'
                        : 'bg-white border-[#B8B4A6] text-[#111F13]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">عدد الألواح</label>
                  <input
                    type="number"
                    min={1}
                    max={50000}
                    value={calcPieces}
                    onChange={(e) => setCalcPieces(Number(e.target.value) || 0)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm font-mono-num font-bold ${
                      darkMode
                        ? 'bg-[#162718] border-[#345036] text-white'
                        : 'bg-white border-[#B8B4A6] text-[#111F13]'
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-current/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
                  <span>
                    إجمالي التكعيب:{' '}
                    <strong className="font-mono-num text-sm text-[#B45309] dark:text-[#F5A623]">
                      {calcResult.totalVolumeM3} m³
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    الوزن التقريبي:{' '}
                    <strong className="font-mono-num">
                      {calcResult.estimatedWeightKg.toLocaleString('en-US')} كجم
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    يعادل تقريباً:{' '}
                    <strong className="font-mono-num">
                      {calcResult.estimatedContainers40ft} حاوية 40 قدم
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleApplyCalculatedVolume}
                  className="px-3.5 py-1.5 rounded-lg bg-[#18341C] text-white text-xs font-bold hover:bg-[#0F2312] transition-colors cursor-pointer"
                >
                  اعتماد الكمية في النموذج
                </button>
              </div>
            </div>
          )}

          {/* Main Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-sm font-bold mb-1.5"
                >
                  الاسم الكامل <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="اسمك الكريم أو اسم الشركة"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-sm font-bold mb-1.5"
                >
                  رقم الهاتف / الواتساب <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+20 100 000 0000"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono-num font-medium text-right focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Wood Type */}
              <div>
                <label
                  htmlFor="quote-wood-type"
                  className="block text-sm font-bold mb-1.5"
                >
                  نوع الخشب <span className="text-red-600">*</span>
                </label>
                <select
                  id="quote-wood-type"
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                  }`}
                >
                  <option value="">اختر نوع الخشب</option>
                  {availableWoods.map((wood) => (
                    <option key={wood.id} value={wood.arabicName}>
                      {wood.arabicName} ({wood.origin})
                    </option>
                  ))}
                </select>
                {errors.woodType && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.woodType}</span>
                  </p>
                )}
              </div>

              {/* Grade */}
              <div>
                <label
                  htmlFor="quote-grade"
                  className="block text-sm font-bold mb-1.5"
                >
                  الدرجة <span className="text-red-600">*</span>
                </label>
                <select
                  id="quote-grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                  }`}
                >
                  <option value="">اختر الدرجة</option>
                  {Array.from(new Set(availableGrades)).map((g) => (
                    <option key={g} value={g}>
                      درجة {g}
                    </option>
                  ))}
                </select>
                {errors.grade && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.grade}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Thickness */}
              <div>
                <label
                  htmlFor="quote-thickness"
                  className="block text-sm font-bold mb-1.5"
                >
                  السمك / المقاس <span className="text-red-600">*</span>
                </label>
                <select
                  id="quote-thickness"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                  }`}
                >
                  <option value="">اختر السمك</option>
                  {availableThicknesses.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.thickness && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.thickness}</span>
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label
                  htmlFor="quote-quantity"
                  className="block text-sm font-bold mb-1.5"
                >
                  الكمية المطلوبة <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="مثال: 100 متر مكعب أو حاويتين 40 قدم"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                  }`}
                />
                {errors.quantity && (
                  <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.quantity}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="quote-notes"
                className="block text-sm font-bold mb-1.5"
              >
                ملاحظات إضافية (العرض المطلوب، الطول، ميناء الوصول)
              </label>
              <textarea
                id="quote-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="أي تفاصيل إضافية تريد إضافتها مثل العرض بالمليمتر أو ميناء التسليم (الإسكندرية / دمياط / جبل علي)..."
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                  darkMode
                    ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                    : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#B46519] hover:bg-[#965010] text-white font-bold text-base flex items-center justify-center gap-2.5 transition-colors shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>إرسال عبر واتساب وتأكيد طلب السعر</span>
            </button>
          </form>

          {/* Confirmation Feedback */}
          {submittedQuote && (
            <div
              role="status"
              className={`mt-6 p-5 rounded-xl border ${
                darkMode
                  ? 'bg-[#122B18] border-emerald-600/60 text-white'
                  : 'bg-[#ECFDF5] border-emerald-600 text-[#064E3B]'
              }`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-base">
                      تم تجهيز طلب عرض السعر بنجاح!
                    </h4>
                    <span className="font-mono-num text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-700 text-white">
                      مرجع الطلب: {submittedQuote.refId}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{submittedQuote.summary}</p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={submittedQuote.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition-colors"
                    >
                      <span>فتح محادثة واتساب الآن بالبيانات</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
