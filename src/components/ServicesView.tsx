import React from 'react';
import {
  Ship,
  Package,
  ShieldCheck,
  Headphones,
  Globe,
  Truck,
  Check,
} from 'lucide-react';
import { SERVICES_LIST, RoutePath } from '../data/timberData';

interface ServicesSectionProps {
  onNavigate: (path: RoutePath) => void;
  isStandalonePage?: boolean;
  darkMode?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  isStandalonePage = false,
  darkMode = false,
}) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ship':
        return <Ship className="w-6 h-6 text-[#111F13]" />;
      case 'package':
        return <Package className="w-6 h-6 text-[#111F13]" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-[#111F13]" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 text-[#111F13]" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-[#111F13]" />;
      default:
        return <Truck className="w-6 h-6 text-[#111F13]" />;
    }
  };

  return (
    <div>
      {/* Main Evergreen Services Showcase matching screencapture-kimosgroup-com-services */}
      <section className="bg-[#23331D] bg-plus-pattern text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-extrabold text-[#F5A623]">
              خدماتنا
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
              خدمات متكاملة في تجارة الأخشاب
            </h1>
            <p className="text-base text-[#E2ECE2] mt-3 font-medium">
              نقدم مجموعة شاملة من الخدمات اللوجستية والتجارية لتلبية جميع احتياجاتكم من الأخشاب اللينة والصلبة
            </p>
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-[#2D3E27] border border-[#44593C] p-6 sm:p-7 hover:border-[#D9822B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D9822B] flex items-center justify-center mb-5 shadow-xs">
                    {renderIcon(service.iconName)}
                  </div>
                  <h2 className="text-xl font-extrabold text-white mb-2.5">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#E2ECE2] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {isStandalonePage && (
                  <ul className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-[#D6E4D6]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#D9822B] hover:bg-[#C06F1E] text-[#111F13] font-extrabold text-base transition-colors shadow-sm"
            >
              اطلب عرض سعر
            </a>
          </div>
        </div>
      </section>

      {/* Extra Supply Chain Workflow when viewing /services standalone page */}
      {isStandalonePage && (
        <section className="py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span
                className={`text-sm font-extrabold ${
                  darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                }`}
              >
                منهجية العمل والتوريد
              </span>
              <h2
                className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                  darkMode ? 'text-white' : 'text-[#111F13]'
                }`}
              >
                كيف نضمن وصول شحنتك بأعلى جودة وفي الموعد المحدد؟
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01.',
                  title: 'تحديد المواصفات والدرجة',
                  desc: 'مراجعة المقاسات المطلوبة (السمك × العرض × الطول) والدرجة المناسبة لطبيعة الاستخدام.',
                },
                {
                  step: '02.',
                  title: 'الفرز والتجفيف في المنشأ',
                  desc: 'انتقاء الأخشاب من المناشر المعتمدة في روسيا وأوروبا وأمريكا وفحص نسبة الرطوبة (KD).',
                },
                {
                  step: '03.',
                  title: 'التحميل والشحن البحري',
                  desc: 'تغليف قياسي مقاوم للرطوبة البحرية وشحن سريع عبر الحاويات أو بواخر الصب (Bulk).',
                },
                {
                  step: '04.',
                  title: 'التسليم في الميناء أو المخزن',
                  desc: 'إنهاء كافة الوثائق والشهادات الجمركية والتسليم المباشر لمستودعات العميل.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`p-6 rounded-2xl border ${
                    darkMode
                      ? 'bg-[#152617] border-[#29422B] text-white'
                      : 'bg-white border-[#CFCBC0] text-[#111F13]'
                  }`}
                >
                  <div className="font-mono-num text-xl font-extrabold text-[#B45309] dark:text-[#F5A623] mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-base font-extrabold mb-2">{item.title}</h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#364638]'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
