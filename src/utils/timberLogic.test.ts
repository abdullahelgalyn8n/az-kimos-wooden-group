import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveRoute,
  filterTimberProducts,
  filterDimensionMatrix,
  calculateTimberVolume,
  validateQuoteForm,
  validateContactForm,
  buildQuoteWhatsappUrl,
} from './timberLogic';
import { TIMBER_PRODUCTS, SOFTWOOD_DIMENSION_MATRIX } from '../data/timberData';

test('resolveRoute normalizes all 8 dedicated URL paths accurately', () => {
  assert.equal(resolveRoute('/'), '/');
  assert.equal(resolveRoute('/about'), '/about');
  assert.equal(resolveRoute('/about/'), '/about');
  assert.equal(resolveRoute('/products'), '/products');
  assert.equal(resolveRoute('/products/softwood'), '/products/softwood');
  assert.equal(resolveRoute('/products/hardwood'), '/products/hardwood');
  assert.equal(resolveRoute('/services'), '/services');
  assert.equal(resolveRoute('/partners'), '/partners');
  assert.equal(resolveRoute('/contact'), '/contact');
  assert.equal(resolveRoute('/unknown-page'), '/');
});

test('filterTimberProducts filters by category, origin region, and Arabic/English search query', () => {
  const softwoods = filterTimberProducts(TIMBER_PRODUCTS, { category: 'softwood' });
  const hardwoods = filterTimberProducts(TIMBER_PRODUCTS, { category: 'hardwood' });

  assert.equal(softwoods.length, 7);
  assert.equal(hardwoods.length, 8);

  const russianSoftwoods = filterTimberProducts(TIMBER_PRODUCTS, {
    category: 'softwood',
    originRegion: 'russia',
  });
  assert.ok(russianSoftwoods.length >= 3);

  const beechSearch = filterTimberProducts(TIMBER_PRODUCTS, { search: 'الزان' });
  assert.equal(beechSearch.length, 1);
  assert.equal(beechSearch[0].id, 'hardwood-beech');
});

test('filterDimensionMatrix filters by thickness, woodClass, and grade', () => {
  const thickness50 = filterDimensionMatrix(SOFTWOOD_DIMENSION_MATRIX, { thicknessMm: 50 });
  assert.equal(thickness50.length, 11);

  const usGrade = filterDimensionMatrix(SOFTWOOD_DIMENSION_MATRIX, { grade: 'US' });
  assert.ok(usGrade.length > 0);
  assert.ok(usGrade.every((r) => r.redwood.US));

  const whitewoodOnly = filterDimensionMatrix(SOFTWOOD_DIMENSION_MATRIX, {
    woodClass: 'whitewood',
  });
  assert.ok(whitewoodOnly.every((r) => r.whitewood.VI || r.whitewood.VII));
});

test('calculateTimberVolume computes accurate cubic meters and container estimate', () => {
  // 50mm x 200mm x 4.0m = 0.04 m3 per plank; 1000 planks = 40 m3
  const result = calculateTimberVolume({
    thicknessMm: 50,
    widthMm: 200,
    lengthM: 4,
    piecesCount: 1000,
  });
  assert.equal(result.singlePlankVolumeM3, 0.04);
  assert.equal(result.totalVolumeM3, 40);
  assert.equal(result.estimatedWeightKg, 20800);
});

test('validateQuoteForm and validateContactForm reject invalid inputs and accept valid inputs', () => {
  const invalidQuote = validateQuoteForm({
    name: '',
    phone: '123',
    woodType: '',
    grade: '',
    thickness: '',
    quantity: '',
  });
  assert.equal(invalidQuote.valid, false);
  assert.ok(invalidQuote.errors.name);
  assert.ok(invalidQuote.errors.phone);

  const validQuote = validateQuoteForm({
    name: 'أحمد محمود',
    phone: '+201503800581',
    woodType: 'خشب الزان الأوروبي المبخر',
    grade: 'AB',
    thickness: '50mm',
    quantity: '100 متر مكعب',
  });
  assert.equal(validQuote.valid, true);
  assert.ok(buildQuoteWhatsappUrl({
    name: 'أحمد محمود',
    phone: '+201503800581',
    woodType: 'خشب الزان الأوروبي المبخر',
    grade: 'AB',
    thickness: '50mm',
    quantity: '100 متر مكعب',
  }).includes('wa.me/201503800581'));

  const validContact = validateContactForm({
    name: 'شركة النيل للمقاولات',
    email: 'info@nile.com',
    phone: '+201001234567',
    subject: 'طلب عرض سعر أخشاب لينة',
    message: 'نرجو إرسال عرض أسعار للصنوبر الروسي مقاس 50×150 مم.',
  });
  assert.equal(validContact.valid, true);
});
