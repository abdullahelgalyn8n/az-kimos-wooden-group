import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Share2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/timberData';
import {
  validateContactForm,
  buildContactWhatsappUrl,
} from '../utils/timberLogic';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    whatsappUrl: string;
    ticketId: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm({
      name,
      email,
      phone,
      subject,
      message,
    });
    if (!result.valid) {
      setErrors(result.errors);
      setSubmittedData(null);
      return;
    }
    setErrors({});
    const whatsappUrl = buildContactWhatsappUrl(
      { name, email, phone, subject, message },
      COMPANY_INFO.phones.egyptWhatsapp
    );
    setSubmittedData({
      whatsappUrl,
      ticketId: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
    });
  };

  const contactCards = [
    {
      title: 'مصر',
      subtitle: 'المقر الرئيسي',
      value: COMPANY_INFO.phones.egypt,
      href: `tel:${COMPANY_INFO.phones.egypt.replace(/\s+/g, '')}`,
      icon: <Phone className="w-5 h-5 text-[#18341C]" />,
      iconBg: 'bg-[#E6EAE6]',
      isMono: true,
    },
    {
      title: 'أمريكا (بنسلفانيا)',
      subtitle: 'المكتب الأمريكي',
      value: COMPANY_INFO.phones.usa,
      href: `tel:${COMPANY_INFO.phones.usa.replace(/[\s()-]+/g, '')}`,
      icon: <Phone className="w-5 h-5 text-[#18341C]" />,
      iconBg: 'bg-[#E6EAE6]',
      isMono: true,
    },
    {
      title: 'البريد العام',
      subtitle: 'للاستفسارات العامة والمعلومات',
      value: COMPANY_INFO.emails.general,
      href: `mailto:${COMPANY_INFO.emails.general}`,
      icon: <Mail className="w-5 h-5 text-[#9A5206]" />,
      iconBg: 'bg-[#FDEFD9]',
      isMono: true,
    },
    {
      title: 'الشراكات',
      subtitle: 'للموردين والوكالات التجارية',
      value: COMPANY_INFO.emails.partnerships,
      href: `mailto:${COMPANY_INFO.emails.partnerships}`,
      icon: <Mail className="w-5 h-5 text-[#9A5206]" />,
      iconBg: 'bg-[#FDEFD9]',
      isMono: true,
    },
    {
      title: 'المبيعات',
      subtitle: 'لطلبات الأسعار والتعاقدات',
      value: COMPANY_INFO.emails.sales,
      href: `mailto:${COMPANY_INFO.emails.sales}`,
      icon: <Mail className="w-5 h-5 text-[#9A5206]" />,
      iconBg: 'bg-[#FDEFD9]',
      isMono: true,
    },
    {
      title: 'فروعنا الدولية',
      subtitle: 'شبكة التواجد الإقليمي والدولي',
      value: COMPANY_INFO.locationsSummary,
      icon: <MapPin className="w-5 h-5 text-[#9A5206]" />,
      iconBg: 'bg-[#FDEFD9]',
      isMono: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className={`text-sm font-extrabold ${
              darkMode ? 'text-[#F5A623]' : 'text-[#9A5206]'
            }`}
          >
            اتصل بنا
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold mt-1 ${
              darkMode ? 'text-white' : 'text-[#111F13]'
            }`}
          >
            نحن هنا لخدمتكم
          </h1>
          <p
            className={`text-base mt-2 font-medium ${
              darkMode ? 'text-[#D0DDD1]' : 'text-[#334235]'
            }`}
          >
            تواصل معنا للحصول على أفضل عروض الأسعار والاستشارات الفنية المجانية
          </p>
        </div>

        {/* 2-Column Split matching screencapture-kimosgroup-com-contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Right Column in RTL: Contact Information Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            <h2
              className={`text-lg font-extrabold mb-3 ${
                darkMode ? 'text-white' : 'text-[#111F13]'
              }`}
            >
              معلومات التواصل
            </h2>

            {contactCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl border p-4 flex items-center justify-between gap-4 transition-colors ${
                  darkMode
                    ? 'bg-[#152617] border-[#28402A] text-white'
                    : 'bg-white border-[#CFCBC0] text-[#111F13]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold">{card.title}</div>
                    <div
                      className={`text-xs font-medium ${
                        darkMode ? 'text-[#B8CBB9]' : 'text-[#4A5A4C]'
                      }`}
                    >
                      {card.subtitle}
                    </div>
                    {card.href ? (
                      <a
                        href={card.href}
                        dir={card.isMono ? 'ltr' : 'rtl'}
                        className={`block mt-0.5 text-sm font-bold hover:underline truncate ${
                          card.isMono ? 'font-mono-num text-right' : ''
                        } ${darkMode ? 'text-[#F5A623]' : 'text-[#111F13]'}`}
                      >
                        {card.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-sm font-bold">{card.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Follow Us */}
            <div className="pt-3 flex items-center justify-between">
              <span className="text-sm font-extrabold">تابعنا وتواصل مباشرة:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phones.egyptWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="واتساب Kimos Wooden Group"
                  className="w-10 h-10 rounded-lg bg-[#16A34A] text-white flex items-center justify-center hover:bg-[#15803D] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.emails.sales}`}
                  aria-label="مراسلة قسم المبيعات"
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                    darkMode
                      ? 'bg-[#152617] border-[#29422B] text-white hover:bg-[#1E3420]'
                      : 'bg-white border-[#CFCBC0] text-[#111F13] hover:bg-[#EFECE3]'
                  }`}
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Send Us a Message Form */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl border p-6 sm:p-8 shadow-sm ${
                darkMode
                  ? 'bg-[#152617] border-[#28402A] text-white'
                  : 'bg-white border-[#CFCBC0] text-[#111F13]'
              }`}
            >
              <h2 className="text-xl font-extrabold mb-6">أرسل لنا رسالة</h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-extrabold mb-1.5"
                    >
                      الاسم <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اسمك الكامل"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#18341C] ${
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

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-extrabold mb-1.5"
                    >
                      البريد الإلكتروني <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      dir="ltr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono-num font-medium text-right focus:outline-none focus:ring-2 focus:ring-[#18341C] ${
                        darkMode
                          ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                          : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-extrabold mb-1.5"
                  >
                    رقم الهاتف <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+20 xxx xxx xxxx"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono-num font-medium text-right focus:outline-none focus:ring-2 focus:ring-[#18341C] ${
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

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-extrabold mb-1.5"
                  >
                    الموضوع <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#18341C] ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#314D33] text-white'
                        : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13]'
                    }`}
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="طلب عرض سعر أخشاب لينة (Softwood)">
                      طلب عرض سعر أخشاب لينة (Softwood)
                    </option>
                    <option value="طلب عرض سعر أخشاب صلبة (Hardwood)">
                      طلب عرض سعر أخشاب صلبة (Hardwood)
                    </option>
                    <option value="تعاقد توريد للمصانع والمقاولات">
                      تعاقد توريد للمصانع والمقاولات
                    </option>
                    <option value="شراكة تجارية أو وكالة">
                      شراكة تجارية أو وكالة
                    </option>
                    <option value="استفسار عام">استفسار عام</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-extrabold mb-1.5"
                  >
                    الرسالة <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب رسالتك هنا (النوع، المقاسات، الكمية المطلوبة)..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#18341C] ${
                      darkMode
                        ? 'bg-[#0F1C10] border-[#314D33] text-white placeholder-[#8FA390]'
                        : 'bg-[#FAF9F5] border-[#B8B4A6] text-[#111F13] placeholder-[#5B685C]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>إرسال عبر واتساب</span>
                </button>
              </form>

              {submittedData && (
                <div
                  role="status"
                  className={`mt-5 p-4 rounded-xl border ${
                    darkMode
                      ? 'bg-[#122B18] border-emerald-600/60 text-white'
                      : 'bg-[#ECFDF5] border-emerald-600 text-[#064E3B]'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <div className="text-sm font-bold">
                        تم تجهيز رسالتك بنجاح (رقم التذكرة: {submittedData.ticketId})
                      </div>
                      <a
                        href={submittedData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#16A34A] text-white text-xs font-bold hover:bg-[#15803D]"
                      >
                        <span>متابعة الإرسال عبر واتساب</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
