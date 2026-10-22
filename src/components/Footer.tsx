import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle, Share2 } from 'lucide-react';
import { COMPANY_INFO, RoutePath } from '../data/timberData';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#162917] text-white border-t border-[#264028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-tree.png"
                alt="Kimos Wooden Group"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain rounded-lg bg-white p-1"
              />
              <div>
                <div className="font-brand text-xl font-bold text-white tracking-tight">
                  Kimos Wooden
                </div>
                <div className="text-xs text-[#D5DFD5] font-semibold">
                  Group — Importing & Timber Trade
                </div>
              </div>
            </div>
            <p className="text-sm text-[#E0EAE0] leading-relaxed">
              شركة رائدة في استيراد وتصدير الأخشاب، جزء من مجموعة Kimos Group. نخدم أسواق شمال أفريقيا والخليج وآسيا بأعلى معايير الجودة العالمية.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${COMPANY_INFO.phones.egyptWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
                className="w-9 h-9 rounded-lg bg-[#233B25] hover:bg-[#D9822B] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                onClick={(e) => handleNav(e, '/contact')}
                aria-label="صفحة التواصل"
                className="w-9 h-9 rounded-lg bg-[#233B25] hover:bg-[#D9822B] text-white flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (All dedicated URLs) */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white border-b border-[#2A452C] pb-2">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#E0EAE0]">
              <li>
                <a href="/" onClick={(e) => handleNav(e, '/')} className="hover:text-[#F5A623] transition-colors">
                  الرئيسية (/)
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNav(e, '/about')} className="hover:text-[#F5A623] transition-colors">
                  من نحن (/about)
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-[#F5A623] transition-colors">
                  منتجاتنا (/products)
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleNav(e, '/services')} className="hover:text-[#F5A623] transition-colors">
                  خدماتنا (/services)
                </a>
              </li>
              <li>
                <a href="/partners" onClick={(e) => handleNav(e, '/partners')} className="hover:text-[#F5A623] transition-colors">
                  شركاؤنا (/partners)
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="hover:text-[#F5A623] transition-colors">
                  اتصل بنا (/contact)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white border-b border-[#2A452C] pb-2">
              تواصل معنا
            </h3>
            <ul className="space-y-3 text-sm text-[#E0EAE0]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-[#B9CBB9]">مصر (المقر الرئيسي)</div>
                  <a
                    href={`tel:${COMPANY_INFO.phones.egypt.replace(/\s+/g, '')}`}
                    dir="ltr"
                    className="font-mono-num font-bold text-white hover:text-[#F5A623]"
                  >
                    {COMPANY_INFO.phones.egypt}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-[#B9CBB9]">أمريكا (بنسلفانيا)</div>
                  <a
                    href={`tel:${COMPANY_INFO.phones.usa.replace(/[\s()-]+/g, '')}`}
                    dir="ltr"
                    className="font-mono-num font-bold text-white hover:text-[#F5A623]"
                  >
                    {COMPANY_INFO.phones.usa}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" />
                <a
                  href={`mailto:${COMPANY_INFO.emails.general}`}
                  className="font-mono-num text-xs text-white hover:text-[#F5A623] break-all"
                >
                  {COMPANY_INFO.emails.general}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" />
                <span className="font-medium text-white">
                  {COMPANY_INFO.locationsSummary}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Products Direct Pages */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white border-b border-[#2A452C] pb-2">
              منتجاتنا وأقسام الأخشاب
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#E0EAE0]">
              <li>
                <a
                  href="/products/softwood"
                  onClick={(e) => handleNav(e, '/products/softwood')}
                  className="hover:text-[#F5A623] transition-colors flex items-center justify-between"
                >
                  <span>الأخشاب اللينة (Softwood)</span>
                  <span className="font-mono-num text-xs text-[#F5A623]">7 أنواع</span>
                </a>
              </li>
              <li>
                <a
                  href="/products/hardwood"
                  onClick={(e) => handleNav(e, '/products/hardwood')}
                  className="hover:text-[#F5A623] transition-colors flex items-center justify-between"
                >
                  <span>الأخشاب الصلبة (Hardwood)</span>
                  <span className="font-mono-num text-xs text-[#F5A623]">8 أنواع</span>
                </a>
              </li>
              <li>
                <a
                  href="/products/softwood"
                  onClick={(e) => handleNav(e, '/products/softwood')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  جدول المقاسات التفصيلي (Redwood / Whitewood)
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => handleNav(e, '/products')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  تصفح الكتالوج الكامل والمقارنة
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[#264028] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C8D8C9]">
          <div>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</div>
          <div className="flex items-center gap-4">
            <span>{COMPANY_INFO.parentGroup}</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="العودة لأعلى الصفحة"
              className="w-9 h-9 rounded-full bg-[#D9822B] hover:bg-[#B46519] text-[#111F13] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
