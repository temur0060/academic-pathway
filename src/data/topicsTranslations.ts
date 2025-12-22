import { Language } from '@/contexts/LanguageContext';

export interface TopicTranslation {
  title: string;
  content: string;
}

export interface SectionTranslation {
  title: string;
  description: string;
  topics: TopicTranslation[];
}

export const sectionsData: Record<Language, SectionTranslation[]> = {
  uz: [
    {
      title: "1-Bo'lim: Akademik Yozuvga Kirish",
      description: "Akademik yozuv asoslari va tushunchalari",
      topics: [
        { title: "Akademik yozuv tushunchasi", content: "Akademik yozuv — bu ilmiy va ta'lim sohasida qo'llaniladigan rasmiy yozuv turi. U aniqlik, mantiqiylik va obyektivlik bilan ajralib turadi. Akademik yozuvning asosiy maqsadi — ilmiy bilimlarni to'g'ri va tushunarli tarzda yetkazishdir. Bu yozuv turi dissertatsiya, maqola, referat, kurs ishi kabi ilmiy ishlarda qo'llaniladi. Akademik yozuvda shaxsiy fikrlar kamroq, faktlar va dalillar ko'proq ishlatiladi. Matnning tuzilishi qat'iy qoidalarga bo'ysunadi: kirish, asosiy qism va xulosa. Til sodda, ammo ilmiy terminlardan foydalaniladi. Gaplar aniq va lo'nda bo'lishi kerak. Emotsional iboralar va badiiy vositalardan qochiladi. Akademik yozuv malakasi har bir talaba va ilmiy xodim uchun zarur." },
        { title: "Akademik yozuv tarixi", content: "Akademik yozuv tarixi antik davrga borib taqaladi. Qadimgi Gretsiya va Rimda faylasuflar o'z fikrlarini yozma shaklda ifodalagan. O'rta asrlarda universitetlar paydo bo'lishi bilan akademik yozuv rivojlandi. Evropada Renesans davrida ilmiy maqolalar yozish an'anasi kuchaydi. XVIII-XIX asrlarda ilmiy jurnallar paydo bo'lib, akademik yozuvning standartlari shakllandi. XX asrda akademik yozuv global miqyosda tarqaldi. Bugungi kunda har bir fan sohasida o'ziga xos yozuv standartlari mavjud. APA, MLA, Chicago kabi formatlar keng qo'llaniladi. Raqamli texnologiyalar akademik yozuvni yanada rivojlantirdi. Elektron jurnallar va ma'lumotlar bazalari ilmiy axborotni tarqatishda muhim rol o'ynaydi." },
        { title: "Akademik yozuv turlari", content: "Akademik yozuv bir necha turlarga bo'linadi: 1) Dissertatsiya — ilmiy daraja olish uchun yoziladigan katta hajmli tadqiqot ishi. 2) Ilmiy maqola — yangi ilmiy natijalarni taqdim etuvchi qisqa asar. 3) Referat — mavzu bo'yicha mavjud ma'lumotlarni umumlashtirish. 4) Kurs ishi — talabalar tomonidan yoziladigan o'quv-tadqiqot ishi. 5) Monografiya — bir mavzuga bag'ishlangan chuqur ilmiy asar. 6) Tezis — qisqa shaklda ilmiy fikrni ifodalash. 7) Annotatsiya — asarning qisqa mazmuni. 8) Retsenziya — boshqa ilmiy ishni baholash. Har bir tur o'ziga xos tuzilish va uslubga ega. Maqsadga qarab tegishli tur tanlanadi." },
        { title: "Akademik yozuv va boshqa yozuv turlari farqi", content: "Akademik yozuv boshqa yozuv turlaridan bir necha jihatlari bilan farqlanadi. Badiiy yozuvda his-tuyg'ular, obrazlar, badiiy vositalar ko'p ishlatiladi. Akademik yozuvda esa aniqlik va mantiqiylik birinchi o'rinda turadi. Publitsistik yozuv keng ommaga mo'ljallangan bo'lsa, akademik yozuv mutaxassislarga qaratilgan. So'zlashuv uslubida norasmiy iboralar ishlatiladi, akademik yozuvda esa rasmiy til qo'llaniladi." },
        { title: "Akademik yozuvning ahamiyati", content: "Akademik yozuv malakasi zamonaviy ta'limda muhim o'rin tutadi. Birinchidan, u ilmiy fikrlash qobiliyatini rivojlantiradi. Talaba ma'lumotlarni tahlil qilish va sintez qilishni o'rganadi. Ikkinchidan, professional karyerada akademik yozuv zarur malaka hisoblanadi. Ko'pgina kasblar hisobot, tahlil va tadqiqot yozishni talab qiladi. Uchinchidan, akademik yozuv kritik fikrlashni shakllantiradi." },
        { title: "Akademik yozuv jarayoni", content: "Akademik yozuv jarayoni bir necha bosqichdan iborat: 1) Mavzuni tanlash — qiziqarli va dolzarb mavzu aniqlash. 2) Ma'lumot yig'ish — turli manbalardan ma'lumot to'plash. 3) Rejalashtirish — yozma ishning tuzilishini belgilash. 4) Qoralama yozish — birinchi versiyani yozish. 5) Qayta ko'rish — matnni tahlil qilish va yaxshilash. 6) Tahrir qilish — grammatik va uslubiy xatolarni tuzatish. 7) Formatlash — standartlarga muvofiq rasmiylashtirish." },
        { title: "Akademik yozuvda mantiqiy tuzilish", content: "Akademik ishning mantiqiy tuzilishi uning samaradorligini belgilaydi. Har bir ish kirish, asosiy qism va xulosadan iborat bo'ladi. Kirish qismida muammoning dolzarbligi, maqsad va vazifalar ko'rsatiladi. Asosiy qism bir necha bob yoki bo'limlardan iborat bo'lishi mumkin. Har bir bob alohida mavzuni yoritadi va mantiqiy ketma-ketlik saqlanadi. Xulosa qismida asosiy natijalar umumlashtiriladi." },
        { title: "Akademik yozuvda til va uslub", content: "Akademik yozuvda maxsus til va uslub qo'llaniladi. Til rasmiy va aniq bo'lishi kerak. Ilmiy terminlar to'g'ri ishlatilishi lozim. Murakkab gaplar oddiy gaplarga nisbatan ko'proq uchraydi. Passiv konstruktsiyalar ko'p ishlatiladi: 'tadqiqot o'tkazildi', 'natijalar olindi'. Shaxsiy olmoshlar ('men', 'biz') kam ishlatiladi." },
        { title: "Manbalar bilan ishlash", content: "Akademik yozuvda manbalar bilan ishlash muhim mahorat hisoblanadi. Manbalar birlamchi va ikkinchi darajali bo'linadi. Birlamchi manbalar — original tadqiqotlar, statistika, hujjatlar. Ikkinchi darajali manbalar — maqolalar, kitoblar, sharhlar. Manbalarni tanlaganda ularning ishonchliligi tekshiriladi." },
        { title: "Sitata va parafraz", content: "Sitata va parafraz — manbalardan foydalanishning ikki asosiy usuli. Sitata — muallifning so'zlarini to'g'ridan-to'g'ri keltirish. Sitata qo'shtirnoq ichida yoziladi va manba ko'rsatiladi. Parafraz — muallifning fikrini o'z so'zlari bilan ifodalash. Parafrazda ham manba ko'rsatilishi shart." },
        { title: "Annotatsiya va abstrakt yozish", content: "Annotatsiya va abstrakt — ilmiy ishning qisqa mazmuni. Annotatsiya odatda 100-150 so'zdan iborat bo'ladi. U ishning maqsadi, usullari va natijalarini qisqacha bayon qiladi. Abstrakt biroz uzunroq bo'lishi mumkin — 150-300 so'z. Abstrakt ilmiy maqolalar uchun ko'proq ishlatiladi." },
        { title: "Kirish qismini yozish", content: "Kirish qismi akademik ishning muhim bo'limi. U o'quvchini mavzuga tayyorlaydi va qiziqtiradi. Kirish qismida quyidagilar bo'lishi kerak: 1) Mavzuning dolzarbligi. 2) Muammoning ta'rifi. 3) Tadqiqot maqsadi. 4) Tadqiqot vazifalari. 5) Tadqiqot obyekti va predmeti. 6) Tadqiqot usullari." },
        { title: "Asosiy qismni yozish", content: "Asosiy qism akademik ishning eng katta bo'limi. U bir necha bob yoki bo'limlardan iborat bo'ladi. Har bir bob alohida mavzuni yoritadi. Birinchi bob odatda nazariy asoslarni taqdim etadi. Ikkinchi bob tadqiqot metodologiyasini tavsiflaydi. Keyingi boblar tadqiqot natijalarini bayon qiladi." },
        { title: "Xulosa yozish", content: "Xulosa akademik ishning yakunlovchi bo'limi. U asosiy natijalarni umumlashtiradi. Xulosada yangi ma'lumot yoki faktlar keltirilmaydi. Quyidagi elementlar mavjud bo'lishi kerak: 1) Tadqiqot natijalari qisqacha. 2) Maqsad va vazifalarga erishilganlik. 3) Amaliy tavsiyalar." },
        { title: "Tahrir va tekshirish", content: "Tahrir va tekshirish — akademik yozuvning muhim bosqichi. Birinchi qoralamani yozgandan so'ng, uni bir necha marta ko'rib chiqish kerak. Birinchi o'qishda mantiqiy tuzilish tekshiriladi. Ikkinchi o'qishda til va uslub tekshiriladi. Uchinchi o'qishda formatlash tekshiriladi." }
      ]
    },
    {
      title: "2-Bo'lim: Ilmiy Tadqiqot Usullari",
      description: "Tadqiqot metodologiyasi va usullari",
      topics: [
        { title: "Ilmiy tadqiqot tushunchasi", content: "Ilmiy tadqiqot — yangi bilimlarni kashf qilish yoki mavjud bilimlarni chuqurlashtirish jarayoni. U sistemali, mantiqiy va obyektiv yondashuvga asoslanadi. Tadqiqotning asosiy maqsadi — ilmiy muammoni hal qilish yoki gipotezani tekshirish. Tadqiqot jarayoni rejalashtirish, ma'lumot yig'ish, tahlil qilish va xulosalar chiqarishdan iborat." },
        { title: "Tadqiqot turlari", content: "Ilmiy tadqiqotlar bir necha turlarga bo'linadi: 1) Fundamental tadqiqot — nazariy bilimlarni rivojlantirish. 2) Amaliy tadqiqot — amaliy muammolarni hal qilish. 3) Empirik tadqiqot — kuzatish va tajribaga asoslangan. 4) Nazariy tadqiqot — mavjud nazariyalarni tahlil qilish. 5) Miqdoriy tadqiqot — raqamli ma'lumotlar bilan ishlash." },
        { title: "Tadqiqot muammosini aniqlash", content: "Tadqiqot muammosi — tadqiqotning boshlang'ich nuqtasi. Muammo mavjud bilimlar va kerakli bilimlar o'rtasidagi bo'shliq. Muammoni aniqlash uchun mavzuga oid adabiyotlarni o'rganish kerak. Yaxshi tadqiqot muammosi aniq va o'lchanadigan bo'lishi kerak." },
        { title: "Gipoteza shakllantirish", content: "Gipoteza — tadqiqot muammosiga taxminiy javob. U tekshiriladigan va rad etiladigan bo'lishi kerak. Yaxshi gipoteza aniq va o'lchanadigan tushunchalarni o'z ichiga oladi. Gipoteza tadqiqot natijalarini bashorat qiladi." },
        { title: "Adabiyotlar tahlili", content: "Adabiyotlar tahlili — mavzu bo'yicha mavjud tadqiqotlarni o'rganish. U tadqiqotning nazariy asosini tashkil qiladi. Tahlil uchun ishonchli manbalar tanlanadi. Akademik jurnallar, kitoblar, dissertatsiyalar ko'rib chiqiladi." },
        { title: "Tadqiqot dizayni", content: "Tadqiqot dizayni — tadqiqotni rejalashtirish va tashkil qilish. U tadqiqotning 'chizmasi' hisoblanadi. Asosiy tadqiqot dizaynlari: eksperimental, kuzatuv, so'rovnoma, holatni o'rganish. Har bir dizaynning afzalliklari va kamchiliklari bor." },
        { title: "Tanlov va namuna", content: "Tanlov (sample) — tadqiqotda qatnashadigan kishilar yoki obyektlar guruhi. Namuna — butun populatsiyani ifodalovchi kichik guruh. To'g'ri namuna tanlash natijalarning ishonchliligini ta'minlaydi." },
        { title: "Ma'lumot yig'ish usullari", content: "Ma'lumot yig'ish — tadqiqotning muhim bosqichi. Asosiy usullar: 1) So'rovnoma. 2) Intervyu. 3) Kuzatish. 4) Eksperiment. 5) Hujjatlar tahlili. 6) Fokus-guruh. 7) Test va o'lchov. Har bir usulning afzalliklari va kamchiliklari bor." },
        { title: "Miqdoriy tahlil", content: "Miqdoriy tahlil — raqamli ma'lumotlarni statistik usullar bilan tahlil qilish. Asosiy statistik usullar: 1) Tavsifiy statistika. 2) Inferensial statistika. 3) Korrelyatsiya. 4) Regressiya. 5) Xi-kvadrat. Statistik dasturlar (SPSS, R, Excel) ishlatiladi." },
        { title: "Sifat tahlili", content: "Sifat tahlili — matnli ma'lumotlarni tushunish va talqin qilish. Asosiy usullar: 1) Kontent-tahlil. 2) Tematik tahlil. 3) Diskurs tahlili. 4) Fenomenologik tahlil. 5) Grounded theory. Sifat tahlili chuqur tushunish imkonini beradi." },
        { title: "Tadqiqot etikasi", content: "Tadqiqot etikasi — ilmiy tadqiqotda axloqiy qoidalarga rioya qilish. Asosiy tamoyillar: 1) Ishtirokchilar roziligi. 2) Maxfiylik. 3) Zarar yetkazmaslik. 4) Halollik. 5) Obyektivlik. 6) Mualliflik huquqi. 7) Natijalarni to'g'ri taqdim etish." },
        { title: "Ishonchlilik va haqiqiylik", content: "Ishonchlilik (reliability) — tadqiqot natijalarining barqarorligi. Haqiqiylik (validity) — tadqiqotning o'lchash kerak bo'lgan narsani o'lchashi. Ishonchlilik va haqiqiylik tadqiqot sifatini belgilaydi." },
        { title: "Tadqiqot cheklovlari", content: "Har bir tadqiqotning cheklovlari bor. Cheklovlar — tadqiqot natijalarining umumlashtirilishini chegaralovchi omillar. Ularni e'tirof etish ilmiy halollik belgisi." },
        { title: "Tadqiqot natijalarini taqdim etish", content: "Tadqiqot natijalari aniq va tushunarli shaklda taqdim etilishi kerak. Jadvallar, grafiklar va diagrammalar ishlatiladi. Raqamli natijalar statistik ahamiyatlilik bilan birga beriladi." },
        { title: "Tadqiqot hisoboti yozish", content: "Tadqiqot hisoboti — tadqiqotning to'liq tavsifi. U standart tuzilishga ega: kirish, adabiyotlar tahlili, metodologiya, natijalar, muhokama, xulosa. Hisobot aniq va professional tilda yoziladi." }
      ]
    },
    {
      title: "3-Bo'lim: Ilmiy Ish Yozish Texnikasi",
      description: "Yozuv jarayoni va qoidalari",
      topics: [
        { title: "Ilmiy ish tuzilishi", content: "Ilmiy ish standart tuzilishga ega: muqova, mundarija, kirish, asosiy qism, xulosa, foydalanilgan adabiyotlar, ilovalar. Har bir qism o'z vazifasini bajaradi. Tuzilish mantiqiy va izchil bo'lishi kerak." },
        { title: "Mavzuni tanlash va shakllantirish", content: "Mavzu tanlash — ilmiy ishning birinchi bosqichi. Yaxshi mavzu qiziqarli, dolzarb va ilmiy ahamiyatga ega bo'lishi kerak. Mavzu juda keng yoki juda tor bo'lmasligi lozim. U aniq va tushunarli ifodalanishi kerak." },
        { title: "Ilmiy ishda abzats tuzilishi", content: "Abzats — matnning asosiy tarkibiy birligi. Har bir abzats bitta asosiy fikrni ifodalaydi. Yaxshi abzats kirish gapi, asosiy gaplar va yakunlovchi gapdan iborat. Abzatslar mantiqiy bog'langan bo'lishi kerak." },
        { title: "Ilmiy matnda bog'lovchilar", content: "Bog'lovchilar — gaplar va abzatslarni bog'laydigan so'zlar. Ular mantiqiy aloqalarni ifodalaydi. Turli bog'lovchilar: qo'shish (shuningdek, bundan tashqari), qarshi qo'yish (biroq, ammo), sabab-oqibat (shuning uchun, natijada)." },
        { title: "Ilmiy ishda dalillar keltirish", content: "Dalil — fikrni qo'llab-quvvatlovchi ma'lumot. Dalillar faktlar, statistika, misollar, ekspert fikrlari bo'lishi mumkin. Dalillar ishonchli manbalardan olinishi kerak. Har bir da'vo dalil bilan isbotlanishi lozim." },
        { title: "Jadval va grafiklar bilan ishlash", content: "Jadvallar va grafiklar ma'lumotlarni vizual tarzda taqdim etadi. Jadvallar raqamli ma'lumotlar uchun ishlatiladi. Grafiklar tendentsiyalarni ko'rsatish uchun qulay. Har bir jadval va grafikka sarlavha va izoh beriladi." },
        { title: "Havola va izohlar", content: "Havolalar — matnda manbalarni ko'rsatish. Turli havola tizimlari mavjud: qavs ichida, pastki izoh, oxirgi izoh. Izohlar qo'shimcha ma'lumot berish uchun ishlatiladi. Barcha manbalar havolada ko'rsatilishi kerak." },
        { title: "Foydalanilgan adabiyotlar ro'yxati", content: "Foydalanilgan adabiyotlar ro'yxati — barcha ishlatilgan manbalar. U alifbo tartibida tuziladi. Har bir manba to'liq bibliografik ma'lumot bilan keltiriladi: muallif, sarlavha, nashr joyi, yili, sahifalar." },
        { title: "Ilmiy ishni formatlash", content: "Formatlash — matnni standartlarga muvofiq rasmiylashtirish. Asosiy elementlar: shrift (odatda Times New Roman, 12pt), qatorlar oralig'i (1.5-2), chetdan chekinish (2.5-3 sm), sahifa raqamlash." },
        { title: "Mundarija tuzish", content: "Mundarija — ishning tuzilishini ko'rsatuvchi ro'yxat. U kirish oldidan joylashadi. Mundarijada barcha bob, bo'lim va kichik bo'limlar sahifa raqamlari bilan ko'rsatiladi." },
        { title: "Kirish yozish qoidalari", content: "Kirish ishni ochib beradi va o'quvchini tayyorlaydi. Unda mavzuning dolzarbligi, muammo, maqsad, vazifalar, obyekt, predmet, usullar ko'rsatiladi. Kirish 2-3 sahifadan oshmasligi kerak." },
        { title: "Xulosa yozish qoidalari", content: "Xulosa asosiy natijalarni umumlashtiradi. Yangi ma'lumot keltirilmaydi. Kirish va xulosa bir-biriga mos kelishi kerak. Maqsadda aytilgan narsalar xulosada javob topishi lozim." },
        { title: "Ilmiy ishni tahrir qilish", content: "Tahrir — ishni yaxshilash jarayoni. Bir necha bosqichda amalga oshiriladi: mazmun tahriri, uslubiy tahrir, texnik tahrir. Har bir bosqichda alohida masalalar tekshiriladi." },
        { title: "Plagiatdan qochish", content: "Plagiat — boshqaning ishini o'zinikidek ko'rsatish. U jiddiy ilmiy jinoyat hisoblanadi. Plagiatdan qochish uchun: barcha manbalarga havola qilish, sitatalarni to'g'ri rasmiylashtirish, o'z so'zlari bilan yozish." },
        { title: "Ilmiy ishni himoya qilish", content: "Himoya — ilmiy ishni taqdimot qilish. Yaxshi taqdimot qisqa va tushunarli bo'ladi. Slaydlar 20-25 tadan oshmasligi kerak. Auditoriya savollarga javob berish muhim." }
      ]
    },
    {
      title: "4-Bo'lim: Ilmiy Nashr va Etika",
      description: "Nashr qilish va ilmiy etika",
      topics: [
        { title: "Ilmiy nashr jarayoni", content: "Ilmiy nashr — tadqiqot natijalarini chop etish. Jarayon: maqola yozish, jurnal tanlash, topshirish, ekspertiza, qayta ko'rib chiqish, chop etish. Nashr ilmiy obro' va karyera uchun muhim." },
        { title: "Ilmiy jurnallar turlari", content: "Jurnallar turli mezonlarga ko'ra tasniflanadi: impact faktori, ochiq kirish, mutaxassislik darajasi. Yaxshi jurnal tanlash maqola muvaffaqiyatiga ta'sir qiladi. H-indeks va iqtibos ko'rsatkichlari muhim." },
        { title: "Peer review jarayoni", content: "Peer review — tengdoshlar tekshiruvi. Ekspertlar maqolani baholaydi. Ular fikr-mulohazalar bildiradi. Muallif tanqidlarga javob beradi va ishni yaxshilaydi. Bu jarayon sifatni ta'minlaydi." },
        { title: "Maqola yozish strategiyasi", content: "Yaxshi maqola strategik yondashuvni talab qiladi. Avval jurnal talablarini o'rganish kerak. Maqola strukturasi: kirish, usullar, natijalar, muhokama (IMRaD). Har bir qism aniq va lo'nda bo'lishi kerak." },
        { title: "Mualliflik va hamkorlik", content: "Mualliflik — ilmiy ishga hissa qo'shganlikni bildiradi. Hammuallif bo'lish mezonlari: tadqiqotga hissa, matn yozishga qatnashish, javobgarlikni qabul qilish. Mualliflik tartibi muhokama qilinishi kerak." },
        { title: "Ilmiy etika asoslari", content: "Ilmiy etika — tadqiqotda axloqiy qoidalar. Asosiy tamoyillar: halollik, haqqoniylik, hurmat, javobgarlik. Etik qoidalar ilmiy ishonchni saqlaydi. Ularni buzish jiddiy oqibatlarga olib keladi." },
        { title: "Ma'lumotlarni boshqarish", content: "Ma'lumotlarni boshqarish — tadqiqot ma'lumotlarini saqlash va himoya qilish. Ma'lumotlar xavfsiz joyda saqlanishi kerak. Zaxira nusxalar yaratilishi lozim. Maxfiy ma'lumotlar himoya qilinadi." },
        { title: "Manfaatlar to'qnashuvi", content: "Manfaatlar to'qnashuvi — shaxsiy manfaatlarning ilmiy obektivlikka ta'siri. U e'lon qilinishi kerak. Moliyalashtirish manbalari ko'rsatiladi. Potensial ta'sirlar ochiq muhokama qilinadi." },
        { title: "Ilmiy suiiste'mol turlari", content: "Ilmiy suiiste'mol: ma'lumotlarni soxtalashtirish, plagiat, mualliflik huquqini buzish. Bu jiddiy qonun buzilishlar hisoblanadi. Oqibatlari: ishdan bo'shatish, maqolani qaytarib olish, obro'ni yo'qotish." },
        { title: "Ochiq kirish nashriyoti", content: "Ochiq kirish — maqolalarga bepul kirish. Bu model keng tarqalmoqda. Afzalliklari: keng auditoriya, ko'proq iqtibos. Kamchiliklari: muallif to'lovlari, sifat muammolari." },
        { title: "Ilmiy kommunikatsiya", content: "Ilmiy kommunikatsiya — ilmiy ma'lumotlarni tarqatish. Turli shakllari: maqolalar, konferensiyalar, ijtimoiy tarmoqlar. Yaxshi kommunikatsiya tadqiqot ta'sirini oshiradi." },
        { title: "Konferensiyalarda ishtirok etish", content: "Konferensiyalar ilmiy almashish uchun muhim. Ular yangi g'oyalar va hamkorliklar uchun imkoniyat beradi. Taqdimot tayyorlash va nutq qilish ko'nikmalar talab qiladi." },
        { title: "Ilmiy tarmoq yaratish", content: "Ilmiy tarmoq — boshqa tadqiqotchilar bilan aloqalar. U hamkorlik va resurslarni almashish uchun muhim. Tarmoq yaratish faol ishtirok va muloqotni talab qiladi." },
        { title: "Ilmiy karyerani rivojlantirish", content: "Ilmiy karyera uzluksiz o'sishni talab qiladi. Nashrlar, grantlar, ta'lim muhim. Mentorlik va professional rivojlanish yordam beradi. Balans saqlash ham muhim." },
        { title: "Ilmiy yozuvning kelajagi", content: "Raqamli texnologiyalar ilmiy yozuvni o'zgartirmoqda. Sun'iy intellekt yozish jarayoniga yordam bermoqda. Ochiq fan va ochiq ma'lumotlar keng tarqalmoqda. Multidisiplinar yondashuvlar muhim bo'lmoqda." }
      ]
    }
  ],
  ru: [
    {
      title: "Раздел 1: Введение в Академическое Письмо",
      description: "Основы и концепции академического письма",
      topics: [
        { title: "Понятие академического письма", content: "Академическое письмо — это официальный вид письма, используемый в научной и образовательной сферах. Оно отличается точностью, логичностью и объективностью. Основная цель академического письма — правильно и понятно передать научные знания. Этот вид письма используется в научных работах: диссертациях, статьях, рефератах, курсовых работах." },
        { title: "История академического письма", content: "История академического письма уходит корнями в античность. В Древней Греции и Риме философы выражали свои мысли в письменной форме. С появлением университетов в Средние века академическое письмо развивалось. В эпоху Возрождения в Европе укрепилась традиция написания научных статей." },
        { title: "Виды академического письма", content: "Академическое письмо делится на несколько видов: 1) Диссертация — крупная исследовательская работа для получения ученой степени. 2) Научная статья — короткое произведение, представляющее новые научные результаты. 3) Реферат — обобщение имеющейся информации по теме. 4) Курсовая работа — учебно-исследовательская работа студентов." },
        { title: "Отличие академического письма от других видов", content: "Академическое письмо отличается от других видов письма по нескольким аспектам. В художественном письме много эмоций, образов, художественных средств. В академическом письме на первом месте точность и логичность. Публицистическое письмо предназначено для широкой аудитории, академическое — для специалистов." },
        { title: "Значение академического письма", content: "Навык академического письма занимает важное место в современном образовании. Во-первых, он развивает способность научного мышления. Студент учится анализировать и синтезировать информацию. Во-вторых, академическое письмо — необходимый навык для профессиональной карьеры." },
        { title: "Процесс академического письма", content: "Процесс академического письма состоит из нескольких этапов: 1) Выбор темы. 2) Сбор информации. 3) Планирование. 4) Написание черновика. 5) Редактирование. 6) Корректура. 7) Форматирование." },
        { title: "Логическая структура академического письма", content: "Логическая структура академической работы определяет её эффективность. Каждая работа состоит из введения, основной части и заключения. Во введении указываются актуальность проблемы, цели и задачи. Основная часть может состоять из нескольких глав или разделов." },
        { title: "Язык и стиль академического письма", content: "В академическом письме используется специальный язык и стиль. Язык должен быть официальным и точным. Научные термины должны использоваться правильно. Сложные предложения встречаются чаще простых. Часто используются пассивные конструкции." },
        { title: "Работа с источниками", content: "Работа с источниками — важный навык в академическом письме. Источники делятся на первичные и вторичные. Первичные источники — оригинальные исследования, статистика, документы. Вторичные источники — статьи, книги, обзоры. При выборе источников проверяется их надёжность." },
        { title: "Цитаты и парафраз", content: "Цитата и парафраз — два основных способа использования источников. Цитата — дословное приведение слов автора. Цитата пишется в кавычках с указанием источника. Парафраз — выражение мысли автора своими словами. При парафразе также необходимо указывать источник." },
        { title: "Написание аннотации и абстракта", content: "Аннотация и абстракт — краткое содержание научной работы. Аннотация обычно составляет 100-150 слов. Она кратко излагает цель, методы и результаты работы. Абстракт может быть немного длиннее — 150-300 слов." },
        { title: "Написание введения", content: "Введение — важная часть академической работы. Оно подготавливает и заинтересовывает читателя. Во введении должны быть: 1) Актуальность темы. 2) Определение проблемы. 3) Цель исследования. 4) Задачи исследования. 5) Объект и предмет исследования." },
        { title: "Написание основной части", content: "Основная часть — самый большой раздел академической работы. Она состоит из нескольких глав или разделов. Каждая глава раскрывает отдельную тему. Первая глава обычно представляет теоретические основы. Вторая глава описывает методологию исследования." },
        { title: "Написание заключения", content: "Заключение — завершающий раздел академической работы. Оно обобщает основные результаты. В заключении не приводятся новые данные или факты. Должны присутствовать: краткие результаты исследования, достижение целей и задач, практические рекомендации." },
        { title: "Редактирование и проверка", content: "Редактирование и проверка — важный этап академического письма. После написания первого черновика его нужно несколько раз пересмотреть. При первом чтении проверяется логическая структура. При втором — язык и стиль. При третьем — форматирование." }
      ]
    },
    {
      title: "Раздел 2: Методы Научного Исследования",
      description: "Методология и методы исследования",
      topics: [
        { title: "Понятие научного исследования", content: "Научное исследование — процесс открытия новых знаний или углубления существующих. Оно основывается на систематическом, логическом и объективном подходе. Основная цель исследования — решение научной проблемы или проверка гипотезы. Процесс исследования состоит из планирования, сбора данных, анализа и выводов." },
        { title: "Виды исследований", content: "Научные исследования делятся на несколько видов: 1) Фундаментальное исследование — развитие теоретических знаний. 2) Прикладное исследование — решение практических проблем. 3) Эмпирическое исследование — основанное на наблюдении и опыте. 4) Теоретическое исследование — анализ существующих теорий." },
        { title: "Определение проблемы исследования", content: "Проблема исследования — начальная точка исследования. Проблема — разрыв между существующими и необходимыми знаниями. Для определения проблемы нужно изучить литературу по теме. Хорошая проблема исследования должна быть четкой и измеримой." },
        { title: "Формулирование гипотезы", content: "Гипотеза — предполагаемый ответ на проблему исследования. Она должна быть проверяемой и опровергаемой. Хорошая гипотеза содержит четкие и измеримые понятия. Гипотеза предсказывает результаты исследования." },
        { title: "Анализ литературы", content: "Анализ литературы — изучение существующих исследований по теме. Он составляет теоретическую основу исследования. Для анализа выбираются надежные источники. Рассматриваются академические журналы, книги, диссертации." },
        { title: "Дизайн исследования", content: "Дизайн исследования — планирование и организация исследования. Это 'чертёж' исследования. Основные дизайны исследования: экспериментальный, наблюдательный, опросный, кейс-стади. У каждого дизайна есть преимущества и недостатки." },
        { title: "Выборка и образец", content: "Выборка — группа людей или объектов, участвующих в исследовании. Образец — небольшая группа, представляющая всю популяцию. Правильный выбор образца обеспечивает надежность результатов." },
        { title: "Методы сбора данных", content: "Сбор данных — важный этап исследования. Основные методы: 1) Опрос. 2) Интервью. 3) Наблюдение. 4) Эксперимент. 5) Анализ документов. 6) Фокус-группа. 7) Тестирование и измерение. У каждого метода есть преимущества и недостатки." },
        { title: "Количественный анализ", content: "Количественный анализ — анализ числовых данных статистическими методами. Основные статистические методы: 1) Описательная статистика. 2) Инференциальная статистика. 3) Корреляция. 4) Регрессия. 5) Хи-квадрат. Используются статистические программы (SPSS, R, Excel)." },
        { title: "Качественный анализ", content: "Качественный анализ — понимание и интерпретация текстовых данных. Основные методы: 1) Контент-анализ. 2) Тематический анализ. 3) Дискурс-анализ. 4) Феноменологический анализ. 5) Grounded theory. Качественный анализ позволяет глубокое понимание." },
        { title: "Этика исследования", content: "Этика исследования — соблюдение моральных норм в научном исследовании. Основные принципы: 1) Согласие участников. 2) Конфиденциальность. 3) Не причинение вреда. 4) Честность. 5) Объективность. 6) Авторское право. 7) Правильное представление результатов." },
        { title: "Надежность и валидность", content: "Надежность (reliability) — стабильность результатов исследования. Валидность (validity) — измерение исследованием того, что нужно измерять. Надежность и валидность определяют качество исследования." },
        { title: "Ограничения исследования", content: "У каждого исследования есть ограничения. Ограничения — факторы, ограничивающие обобщение результатов исследования. Их признание — признак научной честности." },
        { title: "Представление результатов исследования", content: "Результаты исследования должны быть представлены четко и понятно. Используются таблицы, графики и диаграммы. Числовые результаты даются вместе со статистической значимостью." },
        { title: "Написание отчета об исследовании", content: "Отчет об исследовании — полное описание исследования. Он имеет стандартную структуру: введение, обзор литературы, методология, результаты, обсуждение, заключение. Отчет пишется четким и профессиональным языком." }
      ]
    },
    {
      title: "Раздел 3: Техника Написания Научной Работы",
      description: "Процесс написания и правила",
      topics: [
        { title: "Структура научной работы", content: "Научная работа имеет стандартную структуру: обложка, содержание, введение, основная часть, заключение, список литературы, приложения. Каждая часть выполняет свою функцию. Структура должна быть логичной и последовательной." },
        { title: "Выбор и формулирование темы", content: "Выбор темы — первый этап научной работы. Хорошая тема должна быть интересной, актуальной и иметь научное значение. Тема не должна быть слишком широкой или слишком узкой. Она должна быть сформулирована четко и понятно." },
        { title: "Структура абзаца в научной работе", content: "Абзац — основная структурная единица текста. Каждый абзац выражает одну основную мысль. Хороший абзац состоит из вводного предложения, основных предложений и завершающего предложения. Абзацы должны быть логически связаны." },
        { title: "Связующие слова в научном тексте", content: "Связующие слова — слова, связывающие предложения и абзацы. Они выражают логические связи. Различные связующие слова: добавление (также, кроме того), противопоставление (однако, но), причина-следствие (поэтому, в результате)." },
        { title: "Приведение доказательств в научной работе", content: "Доказательство — информация, подтверждающая мысль. Доказательства могут быть фактами, статистикой, примерами, мнениями экспертов. Доказательства должны быть получены из надежных источников. Каждое утверждение должно быть подтверждено доказательством." },
        { title: "Работа с таблицами и графиками", content: "Таблицы и графики визуально представляют данные. Таблицы используются для числовых данных. Графики удобны для показа тенденций. Каждая таблица и график должны иметь заголовок и пояснение." },
        { title: "Ссылки и примечания", content: "Ссылки — указание источников в тексте. Существуют разные системы ссылок: в скобках, сноски, концевые примечания. Примечания используются для предоставления дополнительной информации. Все источники должны быть указаны в ссылках." },
        { title: "Список использованной литературы", content: "Список использованной литературы — все использованные источники. Он составляется в алфавитном порядке. Каждый источник приводится с полной библиографической информацией: автор, название, место издания, год, страницы." },
        { title: "Форматирование научной работы", content: "Форматирование — оформление текста в соответствии со стандартами. Основные элементы: шрифт (обычно Times New Roman, 12pt), межстрочный интервал (1.5-2), поля (2.5-3 см), нумерация страниц." },
        { title: "Составление содержания", content: "Содержание — список, показывающий структуру работы. Оно располагается перед введением. В содержании все главы, разделы и подразделы указаны с номерами страниц." },
        { title: "Правила написания введения", content: "Введение открывает работу и готовит читателя. В нем указываются актуальность темы, проблема, цель, задачи, объект, предмет, методы. Введение не должно превышать 2-3 страницы." },
        { title: "Правила написания заключения", content: "Заключение обобщает основные результаты. Новая информация не приводится. Введение и заключение должны соответствовать друг другу. То, что сказано в цели, должно найти ответ в заключении." },
        { title: "Редактирование научной работы", content: "Редактирование — процесс улучшения работы. Осуществляется в несколько этапов: содержательное редактирование, стилистическое редактирование, техническое редактирование. На каждом этапе проверяются отдельные вопросы." },
        { title: "Избежание плагиата", content: "Плагиат — представление чужой работы как своей. Это серьезное научное преступление. Чтобы избежать плагиата: ссылаться на все источники, правильно оформлять цитаты, писать своими словами." },
        { title: "Защита научной работы", content: "Защита — презентация научной работы. Хорошая презентация должна быть краткой и понятной. Слайдов не должно быть больше 20-25. Важно отвечать на вопросы аудитории." }
      ]
    },
    {
      title: "Раздел 4: Научная Публикация и Этика",
      description: "Публикация и научная этика",
      topics: [
        { title: "Процесс научной публикации", content: "Научная публикация — публикация результатов исследования. Процесс: написание статьи, выбор журнала, подача, экспертиза, доработка, публикация. Публикация важна для научной репутации и карьеры." },
        { title: "Виды научных журналов", content: "Журналы классифицируются по различным критериям: импакт-фактор, открытый доступ, уровень специализации. Правильный выбор журнала влияет на успех статьи. Важны H-индекс и показатели цитирования." },
        { title: "Процесс рецензирования", content: "Рецензирование — экспертная оценка. Эксперты оценивают статью. Они дают замечания и предложения. Автор отвечает на критику и улучшает работу. Этот процесс обеспечивает качество." },
        { title: "Стратегия написания статьи", content: "Хорошая статья требует стратегического подхода. Сначала нужно изучить требования журнала. Структура статьи: введение, методы, результаты, обсуждение (IMRaD). Каждая часть должна быть четкой и краткой." },
        { title: "Авторство и сотрудничество", content: "Авторство — признание вклада в научную работу. Критерии соавторства: вклад в исследование, участие в написании текста, принятие ответственности. Порядок авторства должен быть обсужден." },
        { title: "Основы научной этики", content: "Научная этика — моральные нормы в исследовании. Основные принципы: честность, справедливость, уважение, ответственность. Этические нормы сохраняют научное доверие. Их нарушение ведет к серьезным последствиям." },
        { title: "Управление данными", content: "Управление данными — хранение и защита исследовательских данных. Данные должны храниться в безопасном месте. Необходимо создавать резервные копии. Конфиденциальные данные защищаются." },
        { title: "Конфликт интересов", content: "Конфликт интересов — влияние личных интересов на научную объективность. Он должен быть объявлен. Указываются источники финансирования. Потенциальные влияния открыто обсуждаются." },
        { title: "Виды научных злоупотреблений", content: "Научные злоупотребления: фальсификация данных, плагиат, нарушение авторских прав. Это серьезные правонарушения. Последствия: увольнение, отзыв статьи, потеря репутации." },
        { title: "Издательства открытого доступа", content: "Открытый доступ — бесплатный доступ к статьям. Эта модель широко распространяется. Преимущества: широкая аудитория, больше цитирований. Недостатки: авторские платежи, проблемы качества." },
        { title: "Научная коммуникация", content: "Научная коммуникация — распространение научной информации. Различные формы: статьи, конференции, социальные сети. Хорошая коммуникация увеличивает влияние исследования." },
        { title: "Участие в конференциях", content: "Конференции важны для научного обмена. Они дают возможность для новых идей и сотрудничества. Подготовка презентации и выступление требуют навыков." },
        { title: "Создание научной сети", content: "Научная сеть — связи с другими исследователями. Она важна для сотрудничества и обмена ресурсами. Создание сети требует активного участия и общения." },
        { title: "Развитие научной карьеры", content: "Научная карьера требует непрерывного роста. Важны публикации, гранты, преподавание. Менторство и профессиональное развитие помогают. Важно также сохранять баланс." },
        { title: "Будущее академического письма", content: "Цифровые технологии меняют академическое письмо. Искусственный интеллект помогает в процессе написания. Открытая наука и открытые данные широко распространяются. Мультидисциплинарные подходы становятся важными." }
      ]
    }
  ],
  en: [
    {
      title: "Section 1: Introduction to Academic Writing",
      description: "Basics and concepts of academic writing",
      topics: [
        { title: "Concept of Academic Writing", content: "Academic writing is a formal type of writing used in scientific and educational fields. It is distinguished by precision, logic, and objectivity. The main purpose of academic writing is to convey scientific knowledge correctly and understandably. This type of writing is used in scientific works: dissertations, articles, essays, course papers." },
        { title: "History of Academic Writing", content: "The history of academic writing goes back to ancient times. In ancient Greece and Rome, philosophers expressed their thoughts in written form. With the emergence of universities in the Middle Ages, academic writing developed. During the Renaissance in Europe, the tradition of writing scientific articles strengthened." },
        { title: "Types of Academic Writing", content: "Academic writing is divided into several types: 1) Dissertation — a large-scale research work for obtaining a scientific degree. 2) Scientific article — a short work presenting new scientific results. 3) Essay — summarizing existing information on a topic. 4) Term paper — an educational research work written by students." },
        { title: "Difference Between Academic and Other Types of Writing", content: "Academic writing differs from other types of writing in several aspects. In creative writing, there are many emotions, images, artistic devices. In academic writing, precision and logic come first. Journalistic writing is intended for a wide audience, academic writing is for specialists." },
        { title: "Importance of Academic Writing", content: "Academic writing skills occupy an important place in modern education. First, it develops the ability of scientific thinking. Students learn to analyze and synthesize information. Second, academic writing is an essential skill for a professional career." },
        { title: "Academic Writing Process", content: "The academic writing process consists of several stages: 1) Topic selection. 2) Information gathering. 3) Planning. 4) Writing the draft. 5) Revision. 6) Editing. 7) Formatting." },
        { title: "Logical Structure of Academic Writing", content: "The logical structure of academic work determines its effectiveness. Each work consists of introduction, main body, and conclusion. The introduction indicates the relevance of the problem, goals, and objectives. The main body can consist of several chapters or sections." },
        { title: "Language and Style in Academic Writing", content: "Academic writing uses a special language and style. The language should be formal and precise. Scientific terms should be used correctly. Complex sentences are more common than simple ones. Passive constructions are often used." },
        { title: "Working with Sources", content: "Working with sources is an important skill in academic writing. Sources are divided into primary and secondary. Primary sources are original research, statistics, documents. Secondary sources are articles, books, reviews. When selecting sources, their reliability is checked." },
        { title: "Citation and Paraphrase", content: "Citation and paraphrase are two main ways of using sources. Citation is directly quoting the author's words. Citations are written in quotation marks with the source indicated. Paraphrase is expressing the author's idea in your own words. The source must also be indicated in paraphrasing." },
        { title: "Writing Annotations and Abstracts", content: "Annotation and abstract are brief summaries of a scientific work. An annotation usually consists of 100-150 words. It briefly describes the purpose, methods, and results of the work. An abstract can be slightly longer — 150-300 words." },
        { title: "Writing the Introduction", content: "The introduction is an important part of an academic work. It prepares and interests the reader. The introduction should include: 1) Relevance of the topic. 2) Problem definition. 3) Research purpose. 4) Research objectives. 5) Object and subject of research." },
        { title: "Writing the Main Body", content: "The main body is the largest section of an academic work. It consists of several chapters or sections. Each chapter covers a separate topic. The first chapter usually presents theoretical foundations. The second chapter describes research methodology." },
        { title: "Writing the Conclusion", content: "The conclusion is the final section of an academic work. It summarizes the main results. New information or facts are not presented in the conclusion. Should include: brief research results, achievement of goals and objectives, practical recommendations." },
        { title: "Editing and Proofreading", content: "Editing and proofreading is an important stage of academic writing. After writing the first draft, it needs to be reviewed several times. The first reading checks the logical structure. The second — language and style. The third — formatting." }
      ]
    },
    {
      title: "Section 2: Scientific Research Methods",
      description: "Research methodology and methods",
      topics: [
        { title: "Concept of Scientific Research", content: "Scientific research is the process of discovering new knowledge or deepening existing knowledge. It is based on a systematic, logical, and objective approach. The main purpose of research is to solve a scientific problem or test a hypothesis. The research process consists of planning, data collection, analysis, and conclusions." },
        { title: "Types of Research", content: "Scientific research is divided into several types: 1) Fundamental research — development of theoretical knowledge. 2) Applied research — solving practical problems. 3) Empirical research — based on observation and experience. 4) Theoretical research — analysis of existing theories." },
        { title: "Identifying the Research Problem", content: "The research problem is the starting point of research. A problem is a gap between existing and needed knowledge. To identify a problem, you need to study literature on the topic. A good research problem should be clear and measurable." },
        { title: "Formulating a Hypothesis", content: "A hypothesis is a tentative answer to a research problem. It should be testable and falsifiable. A good hypothesis contains clear and measurable concepts. The hypothesis predicts research results." },
        { title: "Literature Review", content: "Literature review is studying existing research on a topic. It forms the theoretical basis of research. Reliable sources are selected for review. Academic journals, books, dissertations are considered." },
        { title: "Research Design", content: "Research design is planning and organizing research. It is the 'blueprint' of research. Main research designs: experimental, observational, survey, case study. Each design has advantages and disadvantages." },
        { title: "Sampling", content: "A sample is a group of people or objects participating in research. A sample is a small group representing the entire population. Correct sampling ensures the reliability of results." },
        { title: "Data Collection Methods", content: "Data collection is an important stage of research. Main methods: 1) Survey. 2) Interview. 3) Observation. 4) Experiment. 5) Document analysis. 6) Focus group. 7) Testing and measurement. Each method has advantages and disadvantages." },
        { title: "Quantitative Analysis", content: "Quantitative analysis is analyzing numerical data with statistical methods. Main statistical methods: 1) Descriptive statistics. 2) Inferential statistics. 3) Correlation. 4) Regression. 5) Chi-square. Statistical programs (SPSS, R, Excel) are used." },
        { title: "Qualitative Analysis", content: "Qualitative analysis is understanding and interpreting textual data. Main methods: 1) Content analysis. 2) Thematic analysis. 3) Discourse analysis. 4) Phenomenological analysis. 5) Grounded theory. Qualitative analysis provides deep understanding." },
        { title: "Research Ethics", content: "Research ethics is adherence to moral norms in scientific research. Main principles: 1) Participant consent. 2) Confidentiality. 3) Non-harm. 4) Honesty. 5) Objectivity. 6) Copyright. 7) Correct presentation of results." },
        { title: "Reliability and Validity", content: "Reliability is the stability of research results. Validity is the research measuring what it should measure. Reliability and validity determine research quality." },
        { title: "Research Limitations", content: "Every research has limitations. Limitations are factors that limit the generalization of research results. Acknowledging them is a sign of scientific honesty." },
        { title: "Presenting Research Results", content: "Research results should be presented clearly and understandably. Tables, graphs, and diagrams are used. Numerical results are given with statistical significance." },
        { title: "Writing a Research Report", content: "A research report is a complete description of research. It has a standard structure: introduction, literature review, methodology, results, discussion, conclusion. The report is written in clear and professional language." }
      ]
    },
    {
      title: "Section 3: Scientific Writing Techniques",
      description: "Writing process and rules",
      topics: [
        { title: "Structure of Scientific Work", content: "Scientific work has a standard structure: cover, table of contents, introduction, main body, conclusion, references, appendices. Each part serves its function. The structure should be logical and consistent." },
        { title: "Choosing and Formulating a Topic", content: "Choosing a topic is the first stage of scientific work. A good topic should be interesting, relevant, and scientifically significant. The topic should not be too broad or too narrow. It should be formulated clearly and understandably." },
        { title: "Paragraph Structure in Scientific Work", content: "A paragraph is the basic structural unit of text. Each paragraph expresses one main idea. A good paragraph consists of a topic sentence, supporting sentences, and a concluding sentence. Paragraphs should be logically connected." },
        { title: "Transition Words in Scientific Text", content: "Transition words connect sentences and paragraphs. They express logical relationships. Different transitions: addition (also, furthermore), contrast (however, but), cause-effect (therefore, as a result)." },
        { title: "Presenting Evidence in Scientific Work", content: "Evidence is information supporting an idea. Evidence can be facts, statistics, examples, expert opinions. Evidence should come from reliable sources. Each claim should be supported by evidence." },
        { title: "Working with Tables and Graphs", content: "Tables and graphs present data visually. Tables are used for numerical data. Graphs are convenient for showing trends. Each table and graph should have a title and explanation." },
        { title: "References and Notes", content: "References indicate sources in the text. Different reference systems exist: in-text, footnotes, endnotes. Notes are used to provide additional information. All sources must be indicated in references." },
        { title: "Bibliography", content: "Bibliography is all used sources. It is arranged in alphabetical order. Each source is given with full bibliographic information: author, title, place of publication, year, pages." },
        { title: "Formatting Scientific Work", content: "Formatting is styling text according to standards. Main elements: font (usually Times New Roman, 12pt), line spacing (1.5-2), margins (2.5-3 cm), page numbering." },
        { title: "Creating Table of Contents", content: "Table of contents is a list showing the structure of work. It is placed before the introduction. All chapters, sections, and subsections are indicated with page numbers in the table of contents." },
        { title: "Rules for Writing Introduction", content: "Introduction opens the work and prepares the reader. It indicates topic relevance, problem, purpose, objectives, object, subject, methods. Introduction should not exceed 2-3 pages." },
        { title: "Rules for Writing Conclusion", content: "Conclusion summarizes main results. New information is not presented. Introduction and conclusion should correspond. What is said in the purpose should be answered in the conclusion." },
        { title: "Editing Scientific Work", content: "Editing is the process of improving work. Done in several stages: content editing, stylistic editing, technical editing. Different issues are checked at each stage." },
        { title: "Avoiding Plagiarism", content: "Plagiarism is presenting someone else's work as your own. It is a serious scientific offense. To avoid plagiarism: cite all sources, properly format quotations, write in your own words." },
        { title: "Defending Scientific Work", content: "Defense is presenting scientific work. A good presentation should be brief and clear. Slides should not exceed 20-25. Answering audience questions is important." }
      ]
    },
    {
      title: "Section 4: Scientific Publishing and Ethics",
      description: "Publishing and scientific ethics",
      topics: [
        { title: "Scientific Publishing Process", content: "Scientific publishing is publishing research results. Process: writing article, selecting journal, submission, peer review, revision, publication. Publishing is important for scientific reputation and career." },
        { title: "Types of Scientific Journals", content: "Journals are classified by various criteria: impact factor, open access, specialization level. Proper journal selection affects article success. H-index and citation metrics are important." },
        { title: "Peer Review Process", content: "Peer review is expert evaluation. Experts evaluate the article. They provide feedback and suggestions. The author responds to criticism and improves the work. This process ensures quality." },
        { title: "Article Writing Strategy", content: "A good article requires a strategic approach. First, study journal requirements. Article structure: introduction, methods, results, discussion (IMRaD). Each section should be clear and concise." },
        { title: "Authorship and Collaboration", content: "Authorship indicates contribution to scientific work. Coauthorship criteria: contribution to research, participation in writing, accepting responsibility. Author order should be discussed." },
        { title: "Scientific Ethics Fundamentals", content: "Scientific ethics are moral norms in research. Main principles: honesty, fairness, respect, responsibility. Ethical norms preserve scientific trust. Their violation leads to serious consequences." },
        { title: "Data Management", content: "Data management is storing and protecting research data. Data should be stored in a secure place. Backups should be created. Confidential data is protected." },
        { title: "Conflict of Interest", content: "Conflict of interest is the influence of personal interests on scientific objectivity. It should be declared. Funding sources are indicated. Potential influences are openly discussed." },
        { title: "Types of Scientific Misconduct", content: "Scientific misconduct: data falsification, plagiarism, copyright violation. These are serious offenses. Consequences: dismissal, article retraction, loss of reputation." },
        { title: "Open Access Publishing", content: "Open access is free access to articles. This model is spreading widely. Advantages: wide audience, more citations. Disadvantages: author fees, quality issues." },
        { title: "Scientific Communication", content: "Scientific communication is disseminating scientific information. Various forms: articles, conferences, social networks. Good communication increases research impact." },
        { title: "Participating in Conferences", content: "Conferences are important for scientific exchange. They provide opportunities for new ideas and collaboration. Preparing presentations and speaking require skills." },
        { title: "Building Scientific Networks", content: "Scientific network is connections with other researchers. It is important for collaboration and resource sharing. Building a network requires active participation and communication." },
        { title: "Developing Scientific Career", content: "Scientific career requires continuous growth. Publications, grants, teaching are important. Mentorship and professional development help. Maintaining balance is also important." },
        { title: "Future of Academic Writing", content: "Digital technologies are changing academic writing. Artificial intelligence is helping in the writing process. Open science and open data are spreading widely. Multidisciplinary approaches are becoming important." }
      ]
    }
  ]
};