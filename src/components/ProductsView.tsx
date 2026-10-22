import React, { useState } from 'react';
import {
  Package,
  TreePine,
  Layers,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Check,
  FileText,
} from 'lucide-react';
import {
  TIMBER_PRODUCTS,
  TimberProduct,
  RoutePath,
} from '../data/timberData';
import { filterTimberProducts } from '../utils/timberLogic';
import { QuoteFormSection } from './QuoteFormSection';

interface ProductsViewProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  darkMode,
  onNavigate,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'softwood' | 'hardwood'>('all');
  const [originFilter, setOriginFilter] = useState<
    'all' | 'russia' | 'europe' | 'north_america' | 'africa' | 'asia'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<{
    woodType: string;
    grade: string;
    thickness: string;
  }>({
    woodType: '',
    grade: '',
    thickness: '',
  });
  const [detailModalProduct, setDetailModalProduct] = useState<TimberProduct | null>(null);

  const filteredProducts = filterTimberProducts(TIMBER_PRODUCTS, {
    category: categoryFilter,
    originRegion: originFilter,
    search: searchQuery,
  });

  const handleRequestQuoteForProduct = (product: TimberProduct) => {
    setSelectedProductForQuote({
      woodType: product.arabicName,
      grade: product.grades[0] || '',
      thickness: product.thicknessesMm[0] || '',
    });
    const el = document.getElementById('quote-request-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Banner matching screencapture-kimosgroup-com-products */}
      <section
        className={`py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b ${
          darkMode
            ? 'bg-[#142416] border-[#263E28] text-white'
            : 'bg-[#EDEAE0] border-[#D5D1C5] text-[#111F13]'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center border ${
              darkMode
                ? 'bg-[#1E3420] border-[#335236] text-[#F5A623]'
                : 'bg-[#DFDCD0] border-[#C6C2B4] text-[#18341C]'
            }`}
          >
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">منتجاتنا</h1>
          <p
            className={`text-base sm:text-lg mt-3 max-w-2xl mx-auto font-medium ${
              darkMode ? 'text-[#D2E0D3]' : 'text-[#2E3D30]'
            }`}
          >
            نوفر أجود أنواع الأخشاب اللينة والصلبة من مصادر عالمية موثوقة. اختر قسم الأخشاب أو تصفح الكتالوج التفصيلي أدناه.
          </p>
        </div>
      </section>

      {/* 2 Main Category Showcase Cards (Softwood & Hardwood) with dedicated route links */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Softwood Timber (/products/softwood) */}
            <div className="group relative rounded-2xl overflow-hidden border border-[#2C422E] shadow-md min-h-[320px] flex flex-col justify-end">
              <img
                src="/images/softwood-main.jpg"
                alt="الأخشاب اللينة Softwood Timber"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B0F]/95 via-[#0D1B0F]/75 to-[#0D1B0F]/30" />

              <div className="relative z-10 p-7 sm:p-8 text-white space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      الأخشاب اللينة
                    </h2>
                    <p className="text-xs font-mono-num text-[#E2ECE2] font-semibold">
                      Softwood Timber — 7 أنواع متوفرة
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center shrink-0">
                    <TreePine className="w-6 h-6 text-[#F5A623]" />
                  </div>
                </div>

                <p className="text-sm text-[#EDF2ED] leading-relaxed font-medium">
                  أخشاب لينة عالية الجودة مثل الصنوبر الروسي والاسكندنافي والتنوب الأبيض واللاركس السيبيري وSPF. مقاومة للتعفن وسهلة التشكيل، مثالية للبناء والأثاث.
                </p>

                <div className="text-xs text-[#F5A623] font-bold">
                  الصنوبر · التنوب · الصنوبر الأحمر · SPF · اللاركس السيبيري · دوجلاس فير
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="/products/softwood"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/products/softwood');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9822B] hover:bg-[#C06F1E] text-[#111F13] font-extrabold text-sm transition-colors"
                  >
                    <span>استكشف الأخشاب اللينة وجدول المقاسات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                  <span
                    dir="ltr"
                    className="font-mono-num text-[11px] text-[#C8D8C9]"
                  >
                    /products/softwood
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Hardwood Lumber (/products/hardwood) */}
            <div className="group relative rounded-2xl overflow-hidden border border-[#7C3F11] shadow-md min-h-[320px] flex flex-col justify-end">
              <img
                src="/images/hardwood-banner.jpg"
                alt="الأخشاب الصلبة Hardwood Lumber"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241205]/95 via-[#3B1D08]/80 to-[#241205]/35" />

              <div className="relative z-10 p-7 sm:p-8 text-white space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      الأخشاب الصلبة
                    </h2>
                    <p className="text-xs font-mono-num text-[#FDE68A] font-semibold">
                      Hardwood Lumber — 8 أنواع فاخرة
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-[#F5A623]" />
                  </div>
                </div>

                <p className="text-sm text-[#FEF3C7] leading-relaxed font-medium">
                  أخشاب صلبة فاخرة مثل الزان الأوروبي المبخر والأرو والجوز الأمريكي والآش والماهوجني والتيك. متانة استثنائية وجمالية عالية للأثاث الفاخر والأرضيات.
                </p>

                <div className="text-xs text-[#FBBF24] font-bold">
                  الزان · الأرو · الجوز الأمريكي · الدردار (الآش) · الماهوجني · التيك · الإيروكو
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="/products/hardwood"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/products/hardwood');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F5F3EC] text-[#111F13] font-extrabold text-sm transition-colors"
                  >
                    <span>استكشف الأخشاب الصلبة والمواصفات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                  <span
                    dir="ltr"
                    className="font-mono-num text-[11px] text-[#FDE68A]"
                  >
                    /products/hardwood
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Interactive Timber Catalog (15 Wood Varieties Organized with High-Contrast Cards) */}
      <section className="py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? 'bg-[#152617] border-[#29422B] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
          >
            {/* Header & Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-current/10">
              <div>
                <span
                  className={`text-xs font-extrabold ${
                    darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                  }`}
                >
                  دليل الأخشاب المتكامل
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  كتالوج الأخشاب الشامل ({filteredProducts.length} من أصل {TIMBER_PRODUCTS.length} نوع)
                </h2>
                <p
                  className={`text-sm font-medium mt-1 ${
                    darkMode ? 'text-[#C8D6C9]' : 'text-[#39493B]'
                  }`}
                >
                  قارن المواصفات الفنية والكثافة والدرجات والمقاسات لجميع الأخشاب المتوفرة للتوريد الفوري
                </p>
              </div>

              {/* Category Filter Segmented Control */}
              <div
                className={`inline-flex p-1 rounded-xl border self-start ${
                  darkMode
                    ? 'bg-[#0F1C10] border-[#29422B]'
                    : 'bg-[#F3F1EA] border-[#CFCBC0]'
                }`}
              >
                {[
                  { id: 'all', label: `الكل (${TIMBER_PRODUCTS.length})` },
                  { id: 'softwood', label: 'الأخشاب اللينة (7)' },
                  { id: 'hardwood', label: 'الأخشاب الصلبة (8)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setCategoryFilter(tab.id as 'all' | 'softwood' | 'hardwood')
                    }
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap cursor-pointer ${
                      categoryFilter === tab.id
                        ? 'bg-[#18341C] text-white shadow-xs'
                        : darkMode
                        ? 'text-[#D0DDD1] hover:text-white'
                        : 'text-[#263528] hover:text-[#111F13]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search & Origin Filter Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-6">
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 opacity-60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث باسم الخشب أو الاستخدام (مثال: زان، أرو، صنوبر، تيك، باركيه، شدات)..."
                  aria-label="ابحث في كتالوج الأخشاب"
                  className={`w-full pr-10 pl-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B45309] ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                      : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                  }`}
                />
              </div>

              <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto pb-1">
                <SlidersHorizontal className="w-4 h-4 shrink-0 opacity-70 ml-1" />
                {[
                  { id: 'all', label: 'جميع المصادر' },
                  { id: 'russia', label: 'روسيا وسيبيريا' },
                  { id: 'europe', label: 'أوروبا ورومانيا' },
                  { id: 'north_america', label: 'أمريكا وكندا' },
                  { id: 'africa', label: 'أفريقيا' },
                  { id: 'asia', label: 'آسيا' },
                ].map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() =>
                      setOriginFilter(
                        reg.id as
                          | 'all'
                          | 'russia'
                          | 'europe'
                          | 'north_america'
                          | 'africa'
                          | 'asia'
                      )
                    }
                    className={`px-3 py-2 rounded-lg text-xs font-bold border whitespace-nowrap transition-colors cursor-pointer ${
                      originFilter === reg.id
                        ? 'bg-[#B45309] border-[#B45309] text-white'
                        : darkMode
                        ? 'bg-[#0F1C10] border-[#2C462E] text-[#D0DDD1] hover:border-[#F5A623]'
                        : 'bg-[#FAF9F5] border-[#C8C3B5] text-[#1F2E21] hover:bg-[#EFECE3]'
                    }`}
                  >
                    {reg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <p className="text-base font-bold">
                  لا توجد أخشاب مطابقة لبحثك الحالي.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryFilter('all');
                    setOriginFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#18341C] text-white text-xs font-bold cursor-pointer"
                >
                  إعادة ضبط الفلاتر
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all hover:shadow-md ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#29422B] text-white'
                        : 'bg-[#FAF9F5] border-[#CFCBC0] text-[#111F13]'
                    }`}
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden bg-[#1D2D1E]">
                        <img
                          src={product.image}
                          alt={product.arabicName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 right-3 left-3 flex items-end justify-between gap-2 text-white">
                          <div>
                            <div className="text-[11px] font-bold text-[#FBBF24]">
                              {product.category === 'softwood'
                                ? 'الأخشاب اللينة · Softwood'
                                : 'الأخشاب الصلبة · Hardwood'}
                            </div>
                            <h3 className="text-base font-extrabold leading-snug">
                              {product.arabicName}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Body Specs */}
                      <div className="p-5 space-y-3.5">
                        {/* Unboxed Metadata Line */}
                        <div
                          className={`text-xs font-bold flex flex-wrap items-center gap-1.5 ${
                            darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                          }`}
                        >
                          <span>المصدر: {product.origin}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono-num">{product.densityKgM3}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono-num">{product.moistureContent}</span>
                        </div>

                        <p
                          className={`text-xs sm:text-sm leading-relaxed font-medium line-clamp-3 ${
                            darkMode ? 'text-[#D0DDD1]' : 'text-[#28362A]'
                          }`}
                        >
                          {product.description}
                        </p>

                        {/* Specs Table Snippet */}
                        <div
                          className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                            darkMode
                              ? 'bg-[#152617] border-[#263E28]'
                              : 'bg-white border-[#DFDCD2]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold opacity-80">الدرجات المتاحة:</span>
                            <span className="font-mono-num font-extrabold text-[#18341C] dark:text-[#F5A623]">
                              {product.grades.join(' / ')}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold opacity-80">السمك المتوفر:</span>
                            <span className="font-mono-num font-bold truncate max-w-[180px]" dir="ltr">
                              {product.thicknessesMm.slice(0, 5).join(', ')}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold opacity-80">الأطوال:</span>
                            <span className="font-bold">{product.lengthsM}</span>
                          </div>
                        </div>

                        {/* Primary Applications */}
                        <div className="text-xs">
                          <span className="font-extrabold">أبرز الاستخدامات: </span>
                          <span
                            className={`font-medium ${
                              darkMode ? 'text-[#C6D5C7]' : 'text-[#39493B]'
                            }`}
                          >
                            {product.applications.join(' · ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="px-5 pb-5 pt-2 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleRequestQuoteForProduct(product)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#18341C] hover:bg-[#0F2312] text-white text-xs font-extrabold transition-colors cursor-pointer"
                      >
                        اطلب عرض سعر
                      </button>
                      <button
                        type="button"
                        onClick={() => setDetailModalProduct(product)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-extrabold transition-colors cursor-pointer flex items-center gap-1 ${
                          darkMode
                            ? 'border-[#335035] text-white hover:bg-[#1B301D]'
                            : 'border-[#B8B4A6] bg-white text-[#111F13] hover:bg-[#EFECE3]'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>المواصفات</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Our Timber matching screencapture-kimosgroup-com-products */}
      <section className="py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className={`text-2xl sm:text-3xl font-extrabold mb-8 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            لماذا تختار أخشابنا؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '+20', label: 'نوع من الأخشاب اللينة والصلبة' },
              { value: '4', label: 'قارات مصدرة ومناشر معتمدة' },
              { value: '100%', label: 'جودة مضمونة وفحص رطوبة KD' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`p-7 rounded-2xl border shadow-xs ${
                  darkMode
                    ? 'bg-[#152617] border-[#29422B] text-white'
                    : 'bg-white border-[#CFCBC0] text-[#111F13]'
                }`}
              >
                <div
                  dir="ltr"
                  className="font-mono-num text-3xl sm:text-4xl font-extrabold text-[#18341C] dark:text-[#F5A623]"
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm font-bold mt-2 ${
                    darkMode ? 'text-[#D0DDD1]' : 'text-[#334235]'
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <QuoteFormSection
        category="all"
        preselectedWoodType={selectedProductForQuote.woodType}
        preselectedGrade={selectedProductForQuote.grade}
        preselectedThickness={selectedProductForQuote.thickness}
        darkMode={darkMode}
      />

      {/* Expert Assistance Banner */}
      <section className="bg-[#1D311E] text-white py-14 px-4 sm:px-8 lg:px-12 text-center border-t border-[#2C462E]">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            هل تحتاج مساعدة في اختيار نوع الخشب المناسب؟
          </h2>
          <p className="text-sm sm:text-base text-[#D8E5D9] font-medium">
            فريقنا المتخصص جاهز لمساعدتك في اختيار أفضل نوع ودرجة ومقاس خشب يناسب مشروعك أو مصنعك
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#D9822B] hover:bg-[#B86B1D] text-[#111F13] font-extrabold text-sm sm:text-base transition-colors"
            >
              تواصل مع خبرائنا
            </a>
          </div>
        </div>
      </section>

      {/* Product Technical Sheet Modal */}
      {detailModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`مواصفات ${detailModalProduct.arabicName}`}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setDetailModalProduct(null)}
        >
          <div
            className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              darkMode
                ? 'bg-[#152617] border-[#2E4B30] text-white'
                : 'bg-white border-[#CFCBC0] text-[#111F13]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-current/10">
              <div>
                <span className="text-xs font-extrabold text-[#B45309] dark:text-[#F5A623]">
                  بطاقة المواصفات الفنية المعتمدة
                </span>
                <h3 className="text-2xl font-extrabold mt-0.5">
                  {detailModalProduct.arabicName}
                </h3>
                <p className="text-xs font-mono-num opacity-80">
                  {detailModalProduct.englishName} ({detailModalProduct.scientificName})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDetailModalProduct(null)}
                className="px-3 py-1.5 rounded-lg border border-current/20 text-xs font-bold hover:bg-current/5 cursor-pointer"
              >
                إغلاق ✕
              </button>
            </div>

            <div className="my-5 space-y-4 text-sm">
              <p className="leading-relaxed font-medium">
                {detailModalProduct.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-current/15">
                  <div className="opacity-70 font-bold">بلد المنشأ</div>
                  <div className="font-extrabold text-sm mt-0.5">
                    {detailModalProduct.origin}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-current/15">
                  <div className="opacity-70 font-bold">الكثافة القياسية</div>
                  <div className="font-mono-num font-extrabold text-sm mt-0.5">
                    {detailModalProduct.densityKgM3}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-current/15">
                  <div className="opacity-70 font-bold">نسبة الرطوبة والتجفيف</div>
                  <div className="font-mono-num font-extrabold text-sm mt-0.5">
                    {detailModalProduct.moistureContent}
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-current/15">
                  <div className="opacity-70 font-bold">اللون والمظهر</div>
                  <div className="font-extrabold text-sm mt-0.5">
                    {detailModalProduct.colorTone}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-current/15 space-y-2 text-xs">
                <div>
                  <span className="font-extrabold">الدرجات المتوفرة: </span>
                  <span className="font-mono-num font-bold">
                    {detailModalProduct.grades.join(' ، ')}
                  </span>
                </div>
                <div>
                  <span className="font-extrabold">التخانات (السمك): </span>
                  <span className="font-mono-num font-bold" dir="ltr">
                    {detailModalProduct.thicknessesMm.join(' / ')}
                  </span>
                </div>
                <div>
                  <span className="font-extrabold">العروض المتوفرة: </span>
                  <span className="font-mono-num font-bold" dir="ltr">
                    {detailModalProduct.widthsMm.join(' / ')}
                  </span>
                </div>
                <div>
                  <span className="font-extrabold">الأطوال: </span>
                  <span className="font-bold">{detailModalProduct.lengthsM}</span>
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-xs mb-2">المميزات والخصائص:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  {detailModalProduct.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-current/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={
                  detailModalProduct.category === 'softwood'
                    ? '/products/softwood'
                    : '/products/hardwood'
                }
                onClick={(e) => {
                  e.preventDefault();
                  const target =
                    detailModalProduct.category === 'softwood'
                      ? '/products/softwood'
                      : '/products/hardwood';
                  setDetailModalProduct(null);
                  onNavigate(target);
                }}
                className="text-xs font-extrabold text-[#B45309] dark:text-[#F5A623] hover:underline"
              >
                الانتقال لصفحة قسم{' '}
                {detailModalProduct.category === 'softwood'
                  ? 'الأخشاب اللينة (/products/softwood)'
                  : 'الأخشاب الصلبة (/products/hardwood)'}
              </a>

              <button
                type="button"
                onClick={() => {
                  const prod = detailModalProduct;
                  setDetailModalProduct(null);
                  handleRequestQuoteForProduct(prod);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#18341C] hover:bg-[#0F2312] text-white text-xs font-extrabold cursor-pointer"
              >
                اطلب عرض سعر لهذا الخشب
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
