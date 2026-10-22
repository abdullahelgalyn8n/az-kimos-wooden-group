import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import { ROUTES, RoutePath, COMPANY_INFO } from './data/timberData';
import { resolveRoute } from './utils/timberLogic';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutSection } from './components/AboutView';
import { ProductsView } from './components/ProductsView';
import { SoftwoodView } from './components/SoftwoodView';
import { HardwoodView } from './components/HardwoodView';
import { ServicesSection } from './components/ServicesView';
import { PartnersSection } from './components/PartnersView';
import { ContactSection } from './components/ContactView';
import { QuoteFormSection } from './components/QuoteFormSection';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() =>
    resolveRoute(window.location.pathname)
  );
  // Default to high-contrast Light Mode ("White mode") as requested by the user
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const navigate = useCallback((path: RoutePath) => {
    const resolved = resolveRoute(path);
    if (window.location.pathname !== resolved) {
      window.history.pushState({ path: resolved }, '', resolved);
    }
    setCurrentRoute(resolved);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(resolveRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title with active route
  useEffect(() => {
    const routeMeta = ROUTES[currentRoute];
    if (routeMeta) {
      document.title = routeMeta.title;
    } else {
      document.title = `${COMPANY_INFO.name} | ${COMPANY_INFO.arabicSubtitle}`;
    }
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomeView darkMode={darkMode} onNavigate={navigate} />;

      case '/about':
        return (
          <div>
            {/* Page Hero Banner */}
            <div className="bg-[#162917] text-white py-14 px-4 sm:px-8 lg:px-12 border-b border-[#264028]">
              <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#D98218]/20 border border-[#D98218]/40 text-[#F6AD3C] text-xs font-bold mb-3">
                  تعرف على مجموعتنا
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">من نحن</h1>
                <p className="text-sm sm:text-base text-[#D8E6D9] max-w-2xl mx-auto">
                  خبرة دولية ممتدة في استيراد وتجارة الأخشاب اللينة والصلبة عبر 4 فروع إقليمية وعالمية
                </p>
              </div>
            </div>
            <AboutSection darkMode={darkMode} onNavigate={navigate} isStandalonePage={true} />
            <QuoteFormSection darkMode={darkMode} />
          </div>
        );

      case '/products':
        return <ProductsView darkMode={darkMode} onNavigate={navigate} />;

      case '/products/softwood':
        return <SoftwoodView darkMode={darkMode} onNavigate={navigate} />;

      case '/products/hardwood':
        return <HardwoodView darkMode={darkMode} onNavigate={navigate} />;

      case '/services':
        return (
          <div>
            <div className="bg-[#162917] text-white py-14 px-4 sm:px-8 lg:px-12 border-b border-[#264028]">
              <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#D98218]/20 border border-[#D98218]/40 text-[#F6AD3C] text-xs font-bold mb-3">
                  حلول متكاملة لقطاع الأخشاب
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">خدماتنا اللوجستية والتجارية</h1>
                <p className="text-sm sm:text-base text-[#D8E6D9] max-w-2xl mx-auto">
                  من اختيار الغابات والمناشر المعتمدة وحتى التسليم المباشر في موانئكم ومستودعاتكم
                </p>
              </div>
            </div>
            <ServicesSection onNavigate={navigate} isStandalonePage={true} darkMode={darkMode} />
            <QuoteFormSection darkMode={darkMode} />
          </div>
        );

      case '/partners':
        return (
          <div>
            <div className="bg-[#162917] text-white py-14 px-4 sm:px-8 lg:px-12 border-b border-[#264028]">
              <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#D98218]/20 border border-[#D98218]/40 text-[#F6AD3C] text-xs font-bold mb-3">
                  حضور عالمي وشبكة توريد موثوقة
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">شركاؤنا وفروعنا الدولية</h1>
                <p className="text-sm sm:text-base text-[#D8E6D9] max-w-2xl mx-auto">
                  نخدم عملاءنا من خلال 4 مكاتب إقليمية وشراكات استراتيجية مع كبرى المناشر في 6 أقاليم عالمية
                </p>
              </div>
            </div>
            <PartnersSection darkMode={darkMode} onNavigate={navigate} isStandalonePage={true} />
            <QuoteFormSection darkMode={darkMode} />
          </div>
        );

      case '/contact':
        return (
          <div>
            <div className="bg-[#162917] text-white py-14 px-4 sm:px-8 lg:px-12 border-b border-[#264028]">
              <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#D98218]/20 border border-[#D98218]/40 text-[#F6AD3C] text-xs font-bold mb-3">
                  فريق المبيعات والتصدير بخدمتكم
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">تواصل معنا</h1>
                <p className="text-sm sm:text-base text-[#D8E6D9] max-w-2xl mx-auto">
                  يسعدنا الرد على كافة استفساراتكم وطلبات عروض الأسعار عبر مكاتبنا في مصر والإمارات وأمريكا وروسيا
                </p>
              </div>
            </div>
            <ContactSection darkMode={darkMode} />
            <QuoteFormSection darkMode={darkMode} />
          </div>
        );

      default:
        return <HomeView darkMode={darkMode} onNavigate={navigate} />;
    }
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        darkMode
          ? 'bg-[#0F1810] text-[#F2F6F2]'
          : 'bg-[#F7F6F1] text-[#111F13]'
      }`}
    >
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer onNavigate={navigate} />

      {/* Floating WhatsApp Direct Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phones.egyptWhatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#1E8E3E] hover:bg-[#166E2F] text-white font-bold text-xs sm:text-sm shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">واتساب مباشر</span>
      </a>
    </div>
  );
}
