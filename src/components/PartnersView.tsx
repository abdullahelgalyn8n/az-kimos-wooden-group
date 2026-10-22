import React, { useState } from 'react';
import { MapPin, Building2, Globe, Phone, ArrowLeft } from 'lucide-react';
import {
  BRANCHES_LIST,
  GLOBAL_REGIONS,
  RoutePath,
} from '../data/timberData';

interface PartnersSectionProps {
  darkMode: boolean;
  onNavigate: (path: RoutePath) => void;
  isStandalonePage?: boolean;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  darkMode,
  onNavigate,
  isStandalonePage = false,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('all');

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className={`text-sm font-extrabold ${
              darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
            }`}
          >
            فروعنا وشركاؤنا
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold mt-2 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            تواجد عالمي
          </h1>
          <p
            className={`text-base mt-2 font-medium ${
              darkMode ? 'text-[#D0DDD1]' : 'text-[#334235]'
            }`}
          >
            نفتخر بشبكة واسعة من الفروع الإقليمية والشراكات المباشرة مع كبرى المناشر حول العالم
          </p>
        </div>

        {/* 4 Country Branch Cards matching screencapture-kimosgroup-com-partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {BRANCHES_LIST.map((branch) => (
            <div
              key={branch.code}
              className={`rounded-2xl border p-6 text-center shadow-xs transition-transform hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-[#152617] border-[#29422B] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-mono-num text-base font-extrabold shadow-xs ${branch.badgeColor}`}
              >
                {branch.code}
              </div>
              <h2 className="text-xl font-extrabold">{branch.country}</h2>
              <div
                className={`inline-flex items-center justify-center gap-1 text-xs font-bold mt-1 ${
                  darkMode ? 'text-[#C8D6C9]' : 'text-[#425244]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#B45309] dark:text-[#F5A623]" />
                <span>{branch.city}</span>
              </div>
              <p
                className={`text-xs font-bold mt-2 ${
                  darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
                }`}
              >
                {branch.role}
              </p>

              {isStandalonePage && (
                <div className="mt-4 pt-3 border-t border-current/10 text-xs space-y-2">
                  <p
                    className={`leading-relaxed font-medium ${
                      darkMode ? 'text-[#C8D6C9]' : 'text-[#364638]'
                    }`}
                  >
                    {branch.details}
                  </p>
                  {branch.phone && (
                    <a
                      href={`tel:${branch.phone.replace(/[\s()-]+/g, '')}`}
                      dir="ltr"
                      className="inline-flex items-center gap-1.5 font-mono-num font-bold text-[#18341C] dark:text-[#F5A623] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{branch.phone}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Partnerships Container */}
        <div
          className={`rounded-2xl border p-8 text-center shadow-xs ${
            darkMode
              ? 'bg-[#152617] border-[#29422B] text-white'
              : 'bg-white border-[#CFCBC0] text-[#111F13]'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#9A5206] border border-[#F59E0B]/30 mx-auto mb-3 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold">شراكاتنا العالمية</h2>
          <p
            className={`text-sm font-medium mt-1 mb-6 ${
              darkMode ? 'text-[#C8D6C9]' : 'text-[#364638]'
            }`}
          >
            نتعاون مع أفضل المنتجين والموردين في:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GLOBAL_REGIONS.map((region) => {
              const isSelected = selectedRegionId === region.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() =>
                    setSelectedRegionId(isSelected ? 'all' : region.id)
                  }
                  className={`p-3.5 rounded-xl border text-center transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#18341C] border-[#18341C] text-white'
                      : darkMode
                      ? 'bg-[#0F1C10] border-[#253C27] text-white hover:border-[#F5A623]'
                      : 'bg-[#F7F5EE] border-[#D5D1C5] text-[#111F13] hover:bg-[#EDE9DD]'
                  }`}
                >
                  <Globe
                    className={`w-4 h-4 mx-auto mb-1.5 ${
                      isSelected
                        ? 'text-[#F5A623]'
                        : 'text-[#B45309] dark:text-[#F5A623]'
                    }`}
                  />
                  <div className="text-xs font-extrabold whitespace-nowrap">
                    {region.name}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedRegionId !== 'all' && (
            <div
              className={`mt-5 p-4 rounded-xl border text-sm font-bold flex flex-wrap items-center justify-between gap-3 ${
                darkMode
                  ? 'bg-[#0F1C10] border-[#2B442D] text-[#E2ECE2]'
                  : 'bg-[#F8F6EE] border-[#D5D1C5] text-[#18341C]'
              }`}
            >
              <span>
                {GLOBAL_REGIONS.find((r) => r.id === selectedRegionId)?.detail}
              </span>
              <a
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/products');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#B45309] dark:text-[#F5A623] hover:underline"
              >
                <span>عرض أخشاب هذا الإقليم</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
