import React, { useState } from 'react';
import {
  Globe,
  TreePine,
  Building2,
  ArrowLeft,
  Layers,
  Ruler,
  Award,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import {
  COMPANY_INFO,
  TIMBER_PRODUCTS,
  SOFTWOOD_SPECS,
  HARDWOOD_SPECS,
  RoutePath,
} from '../data/timberData';
import { AboutSection } from './AboutView';
import { ServicesSection } from './ServicesView';
import { PartnersSection } from './PartnersView';
import { ContactSection } from './ContactView';

interface HomeViewProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ darkMode, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'softwood' | 'hardwood'>('softwood');

  const softwoodProducts = TIMBER_PRODUCTS.filter((p) => p.category === 'softwood');
  const hardwoodProducts = TIMBER_PRODUCTS.filter((p) => p.category === 'hardwood');
  const previewProducts =
    activeTab === 'softwood' ? softwoodProducts.slice(0, 6) : hardwoodProducts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-8 lg:px-12">
        <img
          src="/images/hero-bg.jpg"
          alt="Kimos Wooden Group Timber Yard"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* High-contrast dark emerald & warm charcoal gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#132215]/85 via-[#162917]/80 to-[#111F13]/92" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Group Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#243B27]/90 border border-[#D98218]/45 text-[#F6AD3C] text-xs sm:text-sm font-bold mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#F6AD3C]" />
            <span>{COMPANY_INFO.parentGroup}</span>
          </div>

          {/* English Serif Title */}
          <h1 className="font-brand text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-sm">
            {COMPANY_INFO.name}
          </h1>

          {/* Arabic Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6AD3C] mb-5">
            {COMPANY_INFO.arabicSubtitle}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#E6EFE6] max-w-2xl mx-auto leading-relaxed mb-9 font-medium">
            نوفر أجود أنواع الأخشاب اللينة والصلبة من أفضل الغابات العالمية في أوروبا وأمريكا الشمالية وآسيا وأفريقيا
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 rounded-xl bg-[#C87312] hover:bg-[#A65B08] text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              تواصل معنا الآن
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              className="px-8 py-3.5 rounded-xl bg-[#1A2E1B]/80 hover:bg-[#243B27] text-white border border-white/30 font-bold text-sm sm:text-base transition-all cursor-pointer"
            >
              منتجاتنا
            </button>
          </div>

          {/* 3 KPI Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#1C2F1E]/85 backdrop-blur-md border border-white/15 p-6 text-center shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#D98218]/20 border border-[#D98218]/40 flex items-center justify-center mx-auto mb-3 text-[#F6AD3C]">
                <Globe className="w-5 h-5" />
              </div>
              <div className="font-mono-num text-3xl font-extrabold text-white mb-1">
                +4
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#D5E2D5]">
                قارات نخدمها
              </div>
            </div>

            <div className="rounded-2xl bg-[#1C2F1E]/85 backdrop-blur-md border border-white/15 p-6 text-center shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#D98218]/20 border border-[#D98218]/40 flex items-center justify-center mx-auto mb-3 text-[#F6AD3C]">
                <TreePine className="w-5 h-5" />
              </div>
              <div className="font-mono-num text-3xl font-extrabold text-white mb-1">
                +21
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#D5E2D5]">
                نوع خشب
              </div>
            </div>

            <div className="rounded-2xl bg-[#1C2F1E]/85 backdrop-blur-md border border-white/15 p-6 text-center shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#D98218]/20 border border-[#D98218]/40 flex items-center justify-center mx-auto mb-3 text-[#F6AD3C]">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="font-mono-num text-3xl font-extrabold text-white mb-1">
                4
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#D5E2D5]">
                فروع دولية
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection darkMode={darkMode} onNavigate={onNavigate} isStandalonePage={false} />

      {/* Home Products Showcase (أخشاب عالية الجودة) */}
      <section
        className={`py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-t ${
          darkMode
            ? 'bg-[#121D14] border-[#263829]'
            : 'bg-[#F0EFE9] border-[#DCD9CE]'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span
              className={`inline-block text-xs font-extrabold tracking-wide px-3.5 py-1.5 rounded-full mb-3 border ${
                darkMode
                  ? 'bg-[#2A2419] text-[#F6AD3C] border-[#F6AD3C]/30'
                  : 'bg-[#FFF3E0] text-[#9A5206] border-[#D98218]/35'
              }`}
            >
              منتجاتنا
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold mb-3 ${
                darkMode ? 'text-white' : 'text-[#111F13]'
              }`}
            >
              أخشاب عالية الجودة
            </h2>
            <p
              className={`text-sm sm:text-base font-medium ${
                darkMode ? 'text-[#C2D1C4]' : 'text-[#28362A]'
              }`}
            >
              نقدم مجموعة واسعة من الأخشاب اللينة والصلبة بمختلف الدرجات والمقاسات لتلبية كافة احتياجات مشاريعكم
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex justify-center mb-10">
            <div
              className={`inline-flex p-1.5 rounded-xl border ${
                darkMode
                  ? 'bg-[#172619] border-[#2C422F]'
                  : 'bg-white border-[#CFCBC0] shadow-xs'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveTab('softwood')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'softwood'
                    ? 'bg-[#1D3520] text-white shadow-xs'
                    : darkMode
                    ? 'text-[#C2D1C4] hover:text-white'
                    : 'text-[#28362A] hover:text-[#111F13]'
                }`}
              >
                <TreePine className="w-4 h-4 text-[#D98218]" />
                <span>الأخشاب اللينة</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hardwood')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'hardwood'
                    ? 'bg-[#1D3520] text-white shadow-xs'
                    : darkMode
                    ? 'text-[#C2D1C4] hover:text-white'
                    : 'text-[#28362A] hover:text-[#111F13]'
                }`}
              >
                <Layers className="w-4 h-4 text-[#D98218]" />
                <span>الأخشاب الصلبة</span>
              </button>
            </div>
          </div>

          {/* Featured Category Card (Matches Home Screenshot with High Contrast) */}
          <div
            className={`rounded-2xl border overflow-hidden mb-12 shadow-sm ${
              darkMode
                ? 'bg-[#172619] border-[#2C422F]'
                : 'bg-white border-[#D6D3C9]'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Right Side in RTL: Spec Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-extrabold mb-1 ${
                          darkMode ? 'text-white' : 'text-[#111F13]'
                        }`}
                      >
                        {activeTab === 'softwood' ? 'الأخشاب اللينة' : 'الأخشاب الصلبة'}
                      </h3>
                      <p
                        className={`text-xs font-bold font-mono-num ${
                          darkMode ? 'text-[#F6AD3C]' : 'text-[#9A5206]'
                        }`}
                      >
                        {activeTab === 'softwood' ? 'Softwood Timber' : 'Hardwood Lumber'}
                      </p>
                    </div>

                    <span
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border ${
                        darkMode
                          ? 'bg-[#213524] text-[#D8E6D9] border-[#355239]'
                          : 'bg-[#EEF3EE] text-[#162917] border-[#C5D4C6]'
                      }`}
                    >
                      {activeTab === 'softwood' ? '7 أصناف متوفرة' : '8 أصناف متوفرة'}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium ${
                      darkMode ? 'text-[#C2D1C4]' : 'text-[#28362A]'
                    }`}
                  >
                    {activeTab === 'softwood'
                      ? 'نستورد أجود الأخشاب اللينة من الغابات الاسكندنافية والروسية والأوروبية والكندية، المجففة فنياً والمصنفة بدقة لأعمال البناء والإنشاءات والنجارة المعمارية.'
                      : 'نوفر نخبة الأخشاب الصلبة الطبيعية والمبخرة من أوروبا وأمريكا الشمالية وأفريقيا وآسيا، المختارة بعناية لصناعة الأثاث الفاخر والأبواب والأرضيات.'}
                  </p>

                  {/* Types Badges */}
                  <div className="mb-5">
                    <div
                      className={`text-xs font-extrabold mb-2.5 flex items-center gap-1.5 ${
                        darkMode ? 'text-[#E2ECE2]' : 'text-[#111F13]'
                      }`}
                    >
                      <TreePine className="w-4 h-4 text-[#B45309]" />
                      <span>الأنواع:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(activeTab === 'softwood'
                        ? [
                            'الصنوبر الاسكندنافي والروسي',
                            'التنوب الأوروبي (Spruce)',
                            'الخشب السويدي (Redwood)',
                            'اللارش السيبيري (Larch)',
                            'الصنوبر الكندي (SPF)',
                            'دوغلاس فير (Douglas Fir)',
                          ]
                        : [
                            'الزان الأوروبي المبخر (Beech)',
                            'البلوط / الأرو (Oak)',
                            'الجوز الأمريكي (Walnut)',
                            'الدردار الأبيض (Ash)',
                            'الماهوجني الأفريقي (Mahogany)',
                            'التيك الطبيعي (Teak)',
                          ]
                      ).map((t) => (
                        <span
                          key={t}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
                            darkMode
                              ? 'bg-[#121D14] text-[#E2ECE2] border-[#2C422F]'
                              : 'bg-[#F7F6F1] text-[#111F13] border-[#D0CBBF]'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Grades Badges */}
                  <div className="mb-6">
                    <div
                      className={`text-xs font-extrabold mb-2.5 flex items-center gap-1.5 ${
                        darkMode ? 'text-[#E2ECE2]' : 'text-[#111F13]'
                      }`}
                    >
                      <Award className="w-4 h-4 text-[#B45309]" />
                      <span>الدرجات المتاحة:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(activeTab === 'softwood'
                        ? SOFTWOOD_SPECS.grades
                        : HARDWOOD_SPECS.grades
                      ).map((grade) => (
                        <span
                          key={grade}
                          className={`font-mono-num text-xs font-extrabold px-3 py-1 rounded-md border ${
                            darkMode
                              ? 'bg-[#2A2419] text-[#F6AD3C] border-[#F6AD3C]/40'
                              : 'bg-[#FFF3E0] text-[#9A5206] border-[#D98218]/45'
                          }`}
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions & Lengths Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    <div
                      className={`p-3.5 rounded-xl border ${
                        darkMode
                          ? 'bg-[#121D14] border-[#263829]'
                          : 'bg-[#F7F6F1] border-[#DCD9CE]'
                      }`}
                    >
                      <div
                        className={`text-xs font-bold mb-1 flex items-center gap-1.5 ${
                          darkMode ? 'text-[#A0B2A2]' : 'text-[#48594A]'
                        }`}
                      >
                        <Ruler className="w-3.5 h-3.5 text-[#B45309]" />
                        <span>{activeTab === 'softwood' ? 'المقاسات القياسية:' : 'السماكات المتاحة:'}</span>
                      </div>
                      <div
                        className={`font-mono-num text-xs sm:text-sm font-extrabold ${
                          darkMode ? 'text-white' : 'text-[#111F13]'
                        }`}
                      >
                        {activeTab === 'softwood'
                          ? 'سماكة 16mm - 75mm | عرض 75mm - 250mm'
                          : HARDWOOD_SPECS.thicknesses.join(' ، ')}
                      </div>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border ${
                        darkMode
                          ? 'bg-[#121D14] border-[#263829]'
                          : 'bg-[#F7F6F1] border-[#DCD9CE]'
                      }`}
                    >
                      <div
                        className={`text-xs font-bold mb-1 flex items-center gap-1.5 ${
                          darkMode ? 'text-[#A0B2A2]' : 'text-[#48594A]'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309]" />
                        <span>الأطوال القياسية:</span>
                      </div>
                      <div
                        className={`font-mono-num text-xs sm:text-sm font-extrabold ${
                          darkMode ? 'text-white' : 'text-[#111F13]'
                        }`}
                      >
                        {activeTab === 'softwood'
                          ? SOFTWOOD_SPECS.lengths
                          : HARDWOOD_SPECS.lengths}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate(
                        activeTab === 'softwood' ? '/products/softwood' : '/products/hardwood'
                      )
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1D3520] hover:bg-[#142616] text-white text-sm font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <span>المزيد من التفاصيل وجدول المقاسات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/products')}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                      darkMode
                        ? 'bg-[#121D14] text-[#E2ECE2] border-[#2C422F] hover:border-[#F6AD3C]'
                        : 'bg-[#F7F6F1] text-[#111F13] border-[#CFCBC0] hover:bg-[#E8E6DF]'
                    }`}
                  >
                    <span>كتالوج المنتجات الكامل (15 صنف)</span>
                  </button>
                </div>
              </div>

              {/* Left Side in RTL: Large Timber Photo */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={
                    activeTab === 'softwood'
                      ? '/images/softwood-main.jpg'
                      : '/images/hardwood-1.jpg'
                  }
                  alt={activeTab === 'softwood' ? 'الأخشاب اللينة' : 'الأخشاب الصلبة'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111F13]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#C87312] text-white text-xs font-bold mb-2">
                      {activeTab === 'softwood' ? 'Softwood Timber' : 'Hardwood Lumber'}
                    </span>
                    <p className="text-sm font-bold text-[#F0F4F0]">
                      {activeTab === 'softwood'
                        ? 'أخشاب لينة مجففة فنياً ومختومة من كبرى المناشر الاسكندنافية والروسية'
                        : 'أخشاب صلبة طبيعية ومبخرة عالية الكثافة لصناعة الأثاث والديكور الفاخر'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick 6-Card Species Preview Grid */}
          <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
            <h3
              className={`text-xl font-extrabold ${
                darkMode ? 'text-white' : 'text-[#111F13]'
              }`}
            >
              أبرز أصناف {activeTab === 'softwood' ? 'الأخشاب اللينة' : 'الأخشاب الصلبة'} المتوفرة
            </h3>
            <button
              type="button"
              onClick={() =>
                onNavigate(
                  activeTab === 'softwood' ? '/products/softwood' : '/products/hardwood'
                )
              }
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold cursor-pointer ${
                darkMode
                  ? 'text-[#F6AD3C] hover:text-[#FFD180]'
                  : 'text-[#9A5206] hover:text-[#783D03]'
              }`}
            >
              <span>استعراض الصفحة الكاملة لـ {activeTab === 'softwood' ? 'الأخشاب اللينة' : 'الأخشاب الصلبة'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewProducts.map((product) => (
              <div
                key={product.id}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-[#172619] border-[#2C422F] hover:border-[#F6AD3C]/50'
                    : 'bg-white border-[#D6D3C9] hover:border-[#B45309] shadow-xs'
                }`}
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.arabicName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#132215]/90 text-white text-xs font-bold">
                      {product.origin}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4
                      className={`text-base font-extrabold mb-1 ${
                        darkMode ? 'text-white' : 'text-[#111F13]'
                      }`}
                    >
                      {product.arabicName}
                    </h4>
                    <p
                      className={`text-xs font-mono-num font-bold mb-2.5 ${
                        darkMode ? 'text-[#F6AD3C]' : 'text-[#9A5206]'
                      }`}
                    >
                      {product.englishName}
                    </p>
                    <p
                      className={`text-xs leading-relaxed mb-4 line-clamp-2 font-medium ${
                        darkMode ? 'text-[#C2D1C4]' : 'text-[#28362A]'
                      }`}
                    >
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.grades.slice(0, 4).map((g) => (
                        <span
                          key={g}
                          className={`font-mono-num text-[11px] font-bold px-2 py-0.5 rounded border ${
                            darkMode
                              ? 'bg-[#121D14] text-[#E2ECE2] border-[#2C422F]'
                              : 'bg-[#F7F6F1] text-[#111F13] border-[#D0CBBF]'
                          }`}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`px-5 py-3 border-t flex items-center justify-between text-xs font-bold ${
                    darkMode
                      ? 'bg-[#121D14]/60 border-[#263829] text-[#A0B2A2]'
                      : 'bg-[#FAF9F5] border-[#E6E4DC] text-[#28362A]'
                  }`}
                >
                  <span className="font-mono-num">كثافة: {product.densityKgM3}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate(
                        product.category === 'softwood'
                          ? '/products/softwood'
                          : '/products/hardwood'
                      )
                    }
                    className={`inline-flex items-center gap-1 font-extrabold cursor-pointer ${
                      darkMode ? 'text-[#F6AD3C]' : 'text-[#9A5206]'
                    }`}
                  >
                    <span>المواصفات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Dark Evergreen with Plus Pattern) */}
      <ServicesSection onNavigate={onNavigate} isStandalonePage={false} darkMode={darkMode} />

      {/* Partners & Branches Section */}
      <PartnersSection darkMode={darkMode} onNavigate={onNavigate} isStandalonePage={false} />

      {/* Contact Section */}
      <div
        className={`border-t ${
          darkMode ? 'bg-[#121D14] border-[#263829]' : 'bg-[#F0EFE9] border-[#DCD9CE]'
        }`}
      >
        <ContactSection darkMode={darkMode} />
      </div>
    </div>
  );
};
