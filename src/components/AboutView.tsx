import React from 'react';
import {
  Target,
  Eye,
  Handshake,
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { COMPANY_INFO, RoutePath } from '../data/timberData';

interface AboutSectionProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  darkMode,
  onNavigate,
  isStandalonePage = false,
}) => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'goal':
        return <Target className="w-5 h-5 text-[#18341C] dark:text-[#F5A623]" />;
      case 'vision':
        return <Eye className="w-5 h-5 text-[#18341C] dark:text-[#F5A623]" />;
      case 'partnerships':
        return <Handshake className="w-5 h-5 text-[#18341C] dark:text-[#F5A623]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#18341C] dark:text-[#F5A623]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Right Column in RTL: Content & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span
                className={`text-sm font-extrabold tracking-wide ${
                  darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                }`}
              >
                من نحن
              </span>
              <h1
                className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight mt-2 ${
                  darkMode ? 'text-white' : 'text-[#111F13]'
                }`}
              >
                رواد تجارة الأخشاب
                <span
                  className={`block mt-1 ${
                    darkMode ? 'text-[#F5A623]' : 'text-[#B45309]'
                  }`}
                >
                  في الشرق الأوسط وأفريقيا
                </span>
              </h1>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed font-medium ${
                darkMode ? 'text-[#D6E2D7]' : 'text-[#263528]'
              }`}
            >
              {COMPANY_INFO.description}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {COMPANY_INFO.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`p-4 rounded-xl border transition-colors ${
                    darkMode
                      ? 'bg-[#152617] border-[#28402A]'
                      : 'bg-white border-[#D5D1C5]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        darkMode
                          ? 'bg-[#213823] text-[#F5A623]'
                          : 'bg-[#EAE7DC] text-[#18341C]'
                      }`}
                    >
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-extrabold ${
                          darkMode ? 'text-white' : 'text-[#111F13]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed mt-1 font-medium ${
                          darkMode ? 'text-[#C6D5C7]' : 'text-[#39493B]'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!isStandalonePage && (
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#18341C] hover:bg-[#0F2312] text-white text-sm font-bold transition-colors"
                >
                  <span>المزيد عن Kimos Wooden Group</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
                <a
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/products');
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-bold transition-colors ${
                    darkMode
                      ? 'border-[#335035] text-white hover:bg-[#1B301D]'
                      : 'border-[#B8B4A6] bg-white text-[#111F13] hover:bg-[#EFECE3]'
                  }`}
                >
                  <span>استكشف منتجاتنا</span>
                </a>
              </div>
            )}
          </div>

          {/* Left Column in RTL: White Credential Card with Stats */}
          <div className="lg:col-span-5">
            <div
              className={`relative rounded-2xl border p-8 sm:p-10 text-center shadow-md ${
                darkMode
                  ? 'bg-[#152617] border-[#2B442D] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              {/* Top High-Contrast Trust Label */}
              <div className="flex items-center justify-between mb-6 text-xs font-bold">
                <span className="text-[#9A5206] dark:text-[#F5A623]">
                  ✓ جودة عالمية معتمدة
                </span>
                <span
                  className={` ${
                    darkMode ? 'text-[#C2D4C3]' : 'text-[#425244]'
                  }`}
                >
                  شريك موثوق منذ +40 عاماً
                </span>
              </div>

              <div className="w-28 h-28 mx-auto mb-5 rounded-2xl bg-white p-2 border border-[#E5E2D9] flex items-center justify-center shadow-xs">
                <img
                  src="/images/logo-tree.png"
                  alt="Kimos Wooden Group Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="font-brand text-2xl sm:text-3xl font-bold tracking-tight">
                Kimos Wooden Group
              </h2>
              <p
                className={`text-sm font-semibold mt-1 ${
                  darkMode ? 'text-[#C2D4C3]' : 'text-[#425244]'
                }`}
              >
                Importing & Timber Trade
              </p>

              <div className="my-7 border-t border-current/10" />

              {/* 3 Stats Row */}
              <div className="grid grid-cols-3 gap-4 divide-x divide-x-reverse divide-current/10">
                {COMPANY_INFO.aboutStats.map((stat) => (
                  <div key={stat.label} className="px-2">
                    <div
                      dir="ltr"
                      className={`font-mono-num text-2xl sm:text-3xl font-extrabold ${
                        darkMode ? 'text-[#F5A623]' : 'text-[#111F13]'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs font-bold mt-1 ${
                        darkMode ? 'text-[#D0DDD1]' : 'text-[#39493B]'
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Corporate Details when viewing /about standalone page */}
        {isStandalonePage && (
          <div className="mt-16 space-y-12">
            {/* Quality & Inspection Standards */}
            <div
              className={`rounded-2xl border p-8 ${
                darkMode
                  ? 'bg-[#152617] border-[#28402A]'
                  : 'bg-white border-[#D5D1C5]'
              }`}
            >
              <div className="max-w-3xl mb-8">
                <span
                  className={`text-xs font-extrabold ${
                    darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                  }`}
                >
                  معايير الجودة والتوريد
                </span>
                <h2 className="text-2xl font-extrabold mt-1">
                  لماذا تثق كبرى المصانع وشركات المقاولات في Kimos Wooden Group؟
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className={`p-5 rounded-xl border ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#253C27]'
                      : 'bg-[#F8F7F2] border-[#DCD8CC]'
                  }`}
                >
                  <ShieldCheck className="w-7 h-7 text-[#B45309] mb-3" />
                  <h3 className="text-base font-extrabold mb-2">
                    1. فحص الرطوبة والتجفيف الحراري (KD)
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#334235]'
                    }`}
                  >
                    نضمن تجفيف جميع الأخشاب اللينة (12%-18%) والأخشاب الصلبة (8%-12%) في أفران حديثة لمنع الالتواء أو التشقق في مناخ الشرق الأوسط وأفريقيا.
                  </p>
                </div>

                <div
                  className={`p-5 rounded-xl border ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#253C27]'
                      : 'bg-[#F8F7F2] border-[#DCD8CC]'
                  }`}
                >
                  <Award className="w-7 h-7 text-[#B45309] mb-3" />
                  <h3 className="text-base font-extrabold mb-2">
                    2. تصنيف قياسي للدرجات العالمية
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#334235]'
                    }`}
                  >
                    التزام تام بمعايير الفرز الاسكندنافية والروسية (US, V, SF, VI, VII) ومعايير الأخشاب الصلبة الأوروبية والأمريكية (FAS, A, B, ABC).
                  </p>
                </div>

                <div
                  className={`p-5 rounded-xl border ${
                    darkMode
                      ? 'bg-[#0F1C10] border-[#253C27]'
                      : 'bg-[#F8F7F2] border-[#DCD8CC]'
                  }`}
                >
                  <CheckCircle2 className="w-7 h-7 text-[#B45309] mb-3" />
                  <h3 className="text-base font-extrabold mb-2">
                    3. سلسلة إمداد مباشرة من المنشأ
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#334235]'
                    }`}
                  >
                    مكاتبنا التمثيلية في بنسلفانيا (أمريكا) وموسكو (روسيا) ودبي والقاهرة تضمن التعاقد المباشر مع المناشر دون وسطاء.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Banner */}
            <div className="rounded-2xl bg-[#162917] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  هل تبحث عن شريك استراتيجي لتوريد الأخشاب لمصنعك أو مشروعك؟
                </h3>
                <p className="text-sm text-[#D6E2D7] mt-1">
                  تصفح كتالوج الأخشاب الكامل أو تواصل مباشرة مع إدارة المبيعات للحصول على قائمة الأسعار المحدثة.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/products');
                  }}
                  className="px-5 py-3 rounded-xl bg-[#D9822B] hover:bg-[#B86B1D] text-[#111F13] font-extrabold text-sm transition-colors"
                >
                  تصفح منتجاتنا (15+ نوع خشب)
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors"
                >
                  تواصل مع المبيعات
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
