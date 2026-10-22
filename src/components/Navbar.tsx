import React, { useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Copy,
  Check,
  Sun,
  Moon,
  ChevronLeft,
  Link2,
} from 'lucide-react';
import { COMPANY_INFO, RoutePath, ROUTES } from '../data/timberData';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (path: RoutePath) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const PRIMARY_NAV_ITEMS: { path: RoutePath; label: string }[] = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'من نحن' },
  { path: '/products', label: 'منتجاتنا' },
  { path: '/services', label: 'خدماتنا' },
  { path: '/partners', label: 'شركاؤنا' },
  { path: '/contact', label: 'اتصل بنا' },
];

const ALL_ROUTE_SHORTCUTS: { path: RoutePath; label: string }[] = [
  { path: '/', label: 'الرئيسية (/)' },
  { path: '/about', label: 'من نحن (/about)' },
  { path: '/products', label: 'منتجاتنا (/products)' },
  { path: '/products/softwood', label: 'الأخشاب اللينة (/products/softwood)' },
  { path: '/products/hardwood', label: 'الأخشاب الصلبة (/products/hardwood)' },
  { path: '/services', label: 'خدماتنا (/services)' },
  { path: '/partners', label: 'شركاؤنا (/partners)' },
  { path: '/contact', label: 'اتصل بنا (/contact)' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  darkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const activeRouteMeta = ROUTES[currentRoute] || ROUTES['/'];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: RoutePath
  ) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const handleCopyPageUrl = () => {
    const fullUrl = `${window.location.origin}${currentRoute}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const isNavHighlighted = (navPath: RoutePath) => {
    if (navPath === '/products') {
      return (
        currentRoute === '/products' ||
        currentRoute === '/products/softwood' ||
        currentRoute === '/products/hardwood'
      );
    }
    return currentRoute === navPath;
  };

  return (
    <div className="sticky top-0 z-40 w-full shadow-sm">
      {/* Main Top Navigation Bar (Strict 3-Zone Contract) */}
      <header
        className={`flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 px-3 sm:px-8 lg:px-12 py-3 sm:py-3.5 border-b transition-colors ${
          darkMode
            ? 'bg-[#111E12] border-[#243826] text-white'
            : 'bg-white border-[#D5D2C6] text-[#111F13]'
        }`}
      >
        {/* Zone 1: Brand Title (One Line) */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <img
            src="/images/logo-tree.png"
            alt="Kimos Wooden Group Logo"
            referrerPolicy="no-referrer"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-md bg-white p-0.5 border border-[#E2DFD5]"
          />
          <span className="font-brand text-base sm:text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap">
            Kimos Wooden Group
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links (Single-line text links) */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden lg:flex items-center gap-7 text-base font-bold"
        >
          {PRIMARY_NAV_ITEMS.map((item) => {
            const active = isNavHighlighted(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? darkMode
                      ? 'text-[#F5A623]'
                      : 'text-[#9A5206]'
                    : darkMode
                    ? 'text-[#E0E7DF] hover:text-white'
                    : 'text-[#1F2E21] hover:text-[#9A5206]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute bottom-0 right-0 left-0 h-0.5 rounded-full ${
                      darkMode ? 'bg-[#F5A623]' : 'bg-[#B45309]'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#18341C] hover:bg-[#0F2312] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623]" />
            <span>تواصل معنا</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className={`lg:hidden p-2 rounded-lg border ${
              darkMode
                ? 'border-[#2B422D] text-white hover:bg-[#1C301E]'
                : 'border-[#D5D2C6] text-[#111F13] hover:bg-[#F3F1EA]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Dedicated Route & Page URL Bar (Shows direct URL per page + quick page switcher + contrast mode) */}
      <div
        className={`border-b px-4 sm:px-8 lg:px-12 py-2 text-xs transition-colors ${
          darkMode
            ? 'bg-[#162718] border-[#243826] text-[#D2DDD3]'
            : 'bg-[#EFECE3] border-[#D5D2C6] text-[#1F2E21]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb & Active Route Path */}
          <div className="flex items-center gap-2 flex-wrap">
            <nav aria-label="مسار الصفحة" className="flex items-center gap-1.5 font-semibold">
              {activeRouteMeta.breadcrumb.map((crumb, idx) => (
                <React.Fragment key={crumb.path}>
                  {idx > 0 && (
                    <ChevronLeft className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  )}
                  <a
                    href={crumb.path}
                    onClick={(e) => handleLinkClick(e, crumb.path)}
                    className={`hover:underline whitespace-nowrap ${
                      idx === activeRouteMeta.breadcrumb.length - 1
                        ? darkMode
                          ? 'text-[#F5A623] font-bold'
                          : 'text-[#9A5206] font-bold'
                        : ''
                    }`}
                  >
                    {crumb.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>

            <span className="opacity-40">|</span>

            {/* Direct URL indicator & copy button */}
            <div className="inline-flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 opacity-75 shrink-0" />
              <span
                dir="ltr"
                className={`font-mono-num text-[11px] font-semibold px-2 py-0.5 rounded border ${
                  darkMode
                    ? 'bg-[#0E1A0F] border-[#2C442E] text-[#A7F3D0]'
                    : 'bg-white border-[#C8C4B7] text-[#111F13]'
                }`}
              >
                kimosgroup.com{currentRoute}
              </span>
              <button
                type="button"
                onClick={handleCopyPageUrl}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-[#243826] hover:bg-[#2F4832] text-white'
                    : 'bg-white hover:bg-[#E4E0D4] text-[#111F13] border border-[#C8C4B7]'
                }`}
                title="نسخ الرابط المباشر لهذه الصفحة"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>نسخ الرابط</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Page Switcher & Theme Contrast Switcher */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5">
              <span className="font-semibold opacity-80">روابط الصفحات:</span>
              {(['/products/softwood', '/products/hardwood'] as RoutePath[]).map(
                (subPath) => (
                  <a
                    key={subPath}
                    href={subPath}
                    onClick={(e) => handleLinkClick(e, subPath)}
                    className={`px-2 py-0.5 rounded font-bold transition-colors whitespace-nowrap ${
                      currentRoute === subPath
                        ? 'bg-[#18341C] text-white'
                        : darkMode
                        ? 'bg-[#203322] text-[#E2ECE3] hover:bg-[#2B432E]'
                        : 'bg-white text-[#18341C] border border-[#C8C4B7] hover:bg-[#E5E1D5]'
                    }`}
                  >
                    {ROUTES[subPath].label}
                  </a>
                )
              )}
            </div>

            <span className="hidden sm:inline opacity-40">|</span>

            <div className="hidden sm:flex items-center gap-3 font-mono-num text-[11px] font-semibold">
              <a
                href={`tel:${COMPANY_INFO.phones.egypt.replace(/\s+/g, '')}`}
                dir="ltr"
                className="hover:underline"
              >
                EG: {COMPANY_INFO.phones.egypt}
              </a>
              <span>•</span>
              <a
                href={`tel:${COMPANY_INFO.phones.usa.replace(/[\s()-]+/g, '')}`}
                dir="ltr"
                className="hover:underline"
              >
                US: {COMPANY_INFO.phones.usa}
              </a>
            </div>

            <button
              type="button"
              onClick={onToggleDarkMode}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-[#F5A623] text-[#111F13] hover:bg-[#F7B543]'
                  : 'bg-[#18341C] text-white hover:bg-[#0F2312]'
              }`}
              aria-label={darkMode ? 'تفعيل الوضع النهاري عالي التباين' : 'تفعيل الوضع الليلي'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>الوضع النهاري</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>الوضع الليلي</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 py-4 space-y-3 ${
            darkMode
              ? 'bg-[#111E12] border-[#243826] text-white'
              : 'bg-white border-[#D5D2C6] text-[#111F13]'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {ALL_ROUTE_SHORTCUTS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                  currentRoute === item.path
                    ? 'bg-[#18341C] text-white'
                    : darkMode
                    ? 'bg-[#1A2C1C] text-[#E0E7DF] hover:bg-[#243B26]'
                    : 'bg-[#F5F3EC] text-[#111F13] hover:bg-[#E8E4D8]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
