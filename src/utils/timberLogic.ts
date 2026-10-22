import {
  DimensionMatrixRow,
  RoutePath,
  ROUTES,
  TimberProduct,
} from '../data/timberData';

/**
 * Normalizes a browser pathname into one of the application's dedicated RoutePaths.
 */
export function resolveRoute(pathname: string): RoutePath {
  const clean = pathname.trim().replace(/\/+$/, '') || '/';
  if (clean in ROUTES) {
    return clean as RoutePath;
  }
  if (clean.startsWith('/products/softwood')) return '/products/softwood';
  if (clean.startsWith('/products/hardwood')) return '/products/hardwood';
  if (clean.startsWith('/products')) return '/products';
  if (clean.startsWith('/about')) return '/about';
  if (clean.startsWith('/services')) return '/services';
  if (clean.startsWith('/partners')) return '/partners';
  if (clean.startsWith('/contact')) return '/contact';
  return '/';
}

export interface ProductFilterOptions {
  category?: 'all' | 'softwood' | 'hardwood';
  originRegion?: 'all' | 'russia' | 'europe' | 'north_america' | 'africa' | 'asia';
  search?: string;
  grade?: string;
}

/**
 * Filters the expanded timber product catalog by category, origin region, grade, and search query.
 */
export function filterTimberProducts(
  products: TimberProduct[],
  options: ProductFilterOptions
): TimberProduct[] {
  const {
    category = 'all',
    originRegion = 'all',
    search = '',
    grade = 'all',
  } = options;
  const normalizedQuery = search.trim().toLowerCase();

  return products.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (originRegion !== 'all' && item.originRegion !== originRegion) {
      return false;
    }
    if (grade !== 'all' && !item.grades.includes(grade)) {
      return false;
    }
    if (normalizedQuery) {
      const haystack = [
        item.arabicName,
        item.englishName,
        item.scientificName,
        item.origin,
        item.description,
        ...item.applications,
        ...item.features,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}

export interface DimensionFilterOptions {
  thicknessMm?: number | 'all';
  woodClass?: 'all' | 'redwood' | 'whitewood';
  grade?: 'all' | 'US' | 'V' | 'SF' | 'VI' | 'VII';
  searchWidth?: string;
}

/**
 * Filters the 37-row Softwood Dimension Matrix by thickness, wood class (Redwood/Whitewood), specific grade, or width.
 */
export function filterDimensionMatrix(
  rows: DimensionMatrixRow[],
  options: DimensionFilterOptions
): DimensionMatrixRow[] {
  const {
    thicknessMm = 'all',
    woodClass = 'all',
    grade = 'all',
    searchWidth = '',
  } = options;
  const widthQuery = searchWidth.trim();

  return rows.filter((row) => {
    if (thicknessMm !== 'all' && row.thicknessMm !== thicknessMm) {
      return false;
    }
    if (woodClass === 'redwood') {
      const hasRedwood =
        row.redwood.US ||
        row.redwood.V ||
        row.redwood.SF ||
        row.redwood.VI ||
        row.redwood.VII;
      if (!hasRedwood) return false;
    }
    if (woodClass === 'whitewood') {
      const hasWhitewood = row.whitewood.VI || row.whitewood.VII;
      if (!hasWhitewood) return false;
    }
    if (grade !== 'all') {
      if (grade === 'US' && !row.redwood.US) return false;
      if (grade === 'V' && !row.redwood.V) return false;
      if (grade === 'SF' && !row.redwood.SF) return false;
      if (grade === 'VI' && !(row.redwood.VI || row.whitewood.VI)) return false;
      if (grade === 'VII' && !(row.redwood.VII || row.whitewood.VII)) return false;
    }
    if (widthQuery && !row.widthMm.includes(widthQuery) && !String(row.thicknessMm).includes(widthQuery)) {
      return false;
    }
    return true;
  });
}

export interface VolumeCalculationInput {
  thicknessMm: number;
  widthMm: number;
  lengthM: number;
  piecesCount: number;
}

export interface VolumeCalculationResult {
  singlePlankVolumeM3: number;
  totalVolumeM3: number;
  estimatedWeightKg: number;
  estimatedContainers40ft: number;
}

/**
 * Calculates cubic meter volume (m³), estimated weight, and 40ft container ratio for a timber order.
 */
export function calculateTimberVolume(
  input: VolumeCalculationInput,
  densityKgM3 = 520
): VolumeCalculationResult {
  const tM = Math.max(0, input.thicknessMm) / 1000;
  const wM = Math.max(0, input.widthMm) / 1000;
  const lM = Math.max(0, input.lengthM);
  const count = Math.max(0, Math.floor(input.piecesCount));

  const singlePlankVolumeM3 = Number((tM * wM * lM).toFixed(5));
  const totalVolumeM3 = Number((tM * wM * lM * count).toFixed(2));
  const estimatedWeightKg = Math.round(totalVolumeM3 * densityKgM3);
  const estimatedContainers40ft = Number((totalVolumeM3 / 48).toFixed(2));

  return {
    singlePlankVolumeM3,
    totalVolumeM3,
    estimatedWeightKg,
    estimatedContainers40ft,
  };
}

export interface QuoteFormInput {
  name: string;
  phone: string;
  woodType: string;
  grade: string;
  thickness: string;
  quantity: string;
  notes?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateQuoteForm(input: QuoteFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'يرجى إدخال الاسم الكامل (حرفين على الأقل)';
  }
  const cleanPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanPhone || !/^\+?\d{7,15}$/.test(cleanPhone)) {
    errors.phone = 'يرجى إدخال رقم هاتف / واتساب صحيح';
  }
  if (!input.woodType || !input.woodType.trim()) {
    errors.woodType = 'يرجى اختيار نوع الخشب';
  }
  if (!input.grade || !input.grade.trim()) {
    errors.grade = 'يرجى اختيار الدرجة المطلوبة';
  }
  if (!input.thickness || !input.thickness.trim()) {
    errors.thickness = 'يرجى اختيار السمك المطلوب';
  }
  if (!input.quantity || !input.quantity.trim()) {
    errors.quantity = 'يرجى تحديد الكمية المطلوبة (مثال: 50 متر مكعب)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildQuoteWhatsappUrl(input: QuoteFormInput, whatsappNumber = '201503800581'): string {
  const lines = [
    'مرحباً Kimos Wooden Group، أود طلب عرض سعر:',
    `• الاسم: ${input.name.trim()}`,
    `• الهاتف: ${input.phone.trim()}`,
    `• نوع الخشب: ${input.woodType.trim()}`,
    `• الدرجة: ${input.grade.trim()}`,
    `• السمك / المقاس: ${input.thickness.trim()}`,
    `• الكمية المطلوبة: ${input.quantity.trim()}`,
  ];
  if (input.notes && input.notes.trim()) {
    lines.push(`• ملاحظات إضافية: ${input.notes.trim()}`);
  }
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'يرجى إدخال الاسم الكامل';
  }
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = 'يرجى إدخال بريد إلكتروني صحيح';
  }
  const cleanPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanPhone || !/^\+?\d{7,15}$/.test(cleanPhone)) {
    errors.phone = 'يرجى إدخال رقم هاتف صحيح';
  }
  if (!input.subject || !input.subject.trim()) {
    errors.subject = 'يرجى اختيار موضوع الرسالة';
  }
  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'يرجى كتابة تفاصيل رسالتك (5 أحرف على الأقل)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildContactWhatsappUrl(input: ContactFormInput, whatsappNumber = '201503800581'): string {
  const lines = [
    'مرحباً Kimos Wooden Group، تواصل جديد من الموقع:',
    `• الاسم: ${input.name.trim()}`,
    `• البريد الإلكتروني: ${input.email.trim()}`,
    `• الهاتف: ${input.phone.trim()}`,
    `• الموضوع: ${input.subject.trim()}`,
    `• الرسالة: ${input.message.trim()}`,
  ];
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
