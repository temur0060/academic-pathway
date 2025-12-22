import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.topics': 'Mavzular',
    'nav.test': 'Test',
    'nav.menu': 'Menyu',
    'nav.login': 'Ustoz kirish',
    'nav.logout': 'Chiqish',
    'nav.admin': 'Admin',
    'nav.academicWriting': 'Akademik Yozuv',

    // Home page
    'home.title': 'Akademik Yozuv Fani',
    'home.subtitle': 'Ilmiy yozuv san\'atini o\'rganing va professional darajaga ko\'tariling',
    'home.learnTopics': 'Mavzularni o\'rganing',
    'home.startTest': 'Testni boshlash',
    'home.professorName': 'Professor Bazarov',
    'home.professorTitle': 'Akademik Yozuv Fani O\'qituvchisi',
    'home.professorDesc': 'Ko\'p yillik tajribaga ega mutaxassis. Talabalarga ilmiy yozuv san\'atini o\'rgatish va ularni professional darajaga olib chiqish ustida ishlaydi.',
    'home.aboutSubject': 'Fan Haqida',
    'home.topics': 'ta Mavzu',
    'home.topicsDesc': '4 bo\'limda to\'liq ma\'lumotlar',
    'home.tests': 'ta Test',
    'home.testsDesc': 'Bilimingizni sinab ko\'ring',
    'home.minutes': 'Daqiqa',
    'home.minutesDesc': 'Test uchun ajratilgan vaqt',
    'home.certificate': 'Sertifikat',
    'home.certificateDesc': 'Muvaffaqiyatli tugatganlar uchun',
    'home.startNow': 'Hoziroq Boshlang!',
    'home.testYourKnowledge': 'Akademik yozuv bo\'yicha bilimingizni sinab ko\'ring',
    'home.footer': '© 2024 Akademik Yozuv Platformasi. Barcha huquqlar himoyalangan.',

    // Topics page
    'topics.title': 'Mavzular',
    'topics.subtitle': 'Akademik yozuv bo\'yicha barcha mavzularni o\'rganing',
    'topics.section1': '1-Bo\'lim: Akademik Yozuvga Kirish',
    'topics.section1Desc': 'Akademik yozuv asoslari va tushunchalari',
    'topics.section2': '2-Bo\'lim: Ilmiy Tadqiqot Usullari',
    'topics.section2Desc': 'Tadqiqot metodologiyasi va usullari',
    'topics.section3': '3-Bo\'lim: Ilmiy Ish Yozish Texnikasi',
    'topics.section3Desc': 'Yozuv jarayoni va qoidalari',
    'topics.section4': '4-Bo\'lim: Ilmiy Nashr va Etika',
    'topics.section4Desc': 'Nashr qilish va ilmiy etika',
    'topics.topicCount': 'ta mavzu',

    // Topic detail
    'topic.back': 'Mavzularga qaytish',
    'topic.keyPoints': 'Muhim nuqtalar',
    'topic.introduction': 'Kirish',
    'topic.mainContent': 'Asosiy mazmun',

    // Test page
    'test.title': 'Akademik Yozuv Testi',
    'test.timeRemaining': 'Qolgan vaqt',
    'test.question': 'Savol',
    'test.of': '/',
    'test.submit': 'Testni yakunlash',
    'test.next': 'Keyingi',
    'test.prev': 'Oldingi',
    'test.result': 'Natija',
    'test.correct': 'To\'g\'ri javoblar',
    'test.percentage': 'Foiz',
    'test.tryAgain': 'Qayta urinish',
    'test.questionNav': 'Savollar',
    'test.answered': 'javob berildi',
    'test.timeUp': 'Vaqt tugadi!',
    'test.confirmSubmit': 'Testni yakunlashni tasdiqlaysizmi?',
    'test.yes': 'Ha',
    'test.no': 'Yo\'q',

    // Admin page
    'admin.title': 'Admin Panel',
    'admin.testSettings': 'Test sozlamalari',
    'admin.timeLimit': 'Vaqt chegarasi (daqiqa)',
    'admin.questions': 'Savollar',
    'admin.save': 'Saqlash',
    'admin.saved': 'Saqlandi!',
    'admin.question': 'Savol',
    'admin.options': 'Variantlar',
    'admin.correctAnswer': 'To\'g\'ri javob',
    'admin.addQuestion': 'Savol qo\'shish',
    'admin.deleteQuestion': 'O\'chirish',
    'admin.unsavedChanges': 'Saqlanmagan o\'zgarishlar mavjud',

    // Login page
    'login.title': 'Ustoz kirish',
    'login.username': 'Foydalanuvchi nomi',
    'login.password': 'Parol',
    'login.submit': 'Kirish',
    'login.error': 'Foydalanuvchi nomi yoki parol noto\'g\'ri',
    'login.welcome': 'Xush kelibsiz!',

    // Theme
    'theme.light': 'Yorug\'',
    'theme.dark': 'Qorong\'i',

    // Language
    'lang.uz': 'O\'zbekcha',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.topics': 'Темы',
    'nav.test': 'Тест',
    'nav.menu': 'Меню',
    'nav.login': 'Вход для учителя',
    'nav.logout': 'Выход',
    'nav.admin': 'Админ',
    'nav.academicWriting': 'Академическое Письмо',

    // Home page
    'home.title': 'Академическое Письмо',
    'home.subtitle': 'Изучите искусство научного письма и достигните профессионального уровня',
    'home.learnTopics': 'Изучить темы',
    'home.startTest': 'Начать тест',
    'home.professorName': 'Профессор Базаров',
    'home.professorTitle': 'Преподаватель Академического Письма',
    'home.professorDesc': 'Специалист с многолетним опытом. Работает над обучением студентов искусству научного письма и выводом их на профессиональный уровень.',
    'home.aboutSubject': 'О предмете',
    'home.topics': 'Тем',
    'home.topicsDesc': 'Полная информация в 4 разделах',
    'home.tests': 'Тестов',
    'home.testsDesc': 'Проверьте свои знания',
    'home.minutes': 'Минут',
    'home.minutesDesc': 'Время на тест',
    'home.certificate': 'Сертификат',
    'home.certificateDesc': 'Для успешно завершивших',
    'home.startNow': 'Начните сейчас!',
    'home.testYourKnowledge': 'Проверьте свои знания по академическому письму',
    'home.footer': '© 2024 Платформа Академического Письма. Все права защищены.',

    // Topics page
    'topics.title': 'Темы',
    'topics.subtitle': 'Изучите все темы по академическому письму',
    'topics.section1': 'Раздел 1: Введение в Академическое Письмо',
    'topics.section1Desc': 'Основы и концепции академического письма',
    'topics.section2': 'Раздел 2: Методы Научного Исследования',
    'topics.section2Desc': 'Методология и методы исследования',
    'topics.section3': 'Раздел 3: Техника Написания Научной Работы',
    'topics.section3Desc': 'Процесс написания и правила',
    'topics.section4': 'Раздел 4: Научная Публикация и Этика',
    'topics.section4Desc': 'Публикация и научная этика',
    'topics.topicCount': 'тем',

    // Topic detail
    'topic.back': 'Вернуться к темам',
    'topic.keyPoints': 'Ключевые моменты',
    'topic.introduction': 'Введение',
    'topic.mainContent': 'Основное содержание',

    // Test page
    'test.title': 'Тест по Академическому Письму',
    'test.timeRemaining': 'Оставшееся время',
    'test.question': 'Вопрос',
    'test.of': '/',
    'test.submit': 'Завершить тест',
    'test.next': 'Следующий',
    'test.prev': 'Предыдущий',
    'test.result': 'Результат',
    'test.correct': 'Правильных ответов',
    'test.percentage': 'Процент',
    'test.tryAgain': 'Попробовать снова',
    'test.questionNav': 'Вопросы',
    'test.answered': 'отвечено',
    'test.timeUp': 'Время вышло!',
    'test.confirmSubmit': 'Подтвердите завершение теста?',
    'test.yes': 'Да',
    'test.no': 'Нет',

    // Admin page
    'admin.title': 'Панель Администратора',
    'admin.testSettings': 'Настройки теста',
    'admin.timeLimit': 'Ограничение времени (минуты)',
    'admin.questions': 'Вопросы',
    'admin.save': 'Сохранить',
    'admin.saved': 'Сохранено!',
    'admin.question': 'Вопрос',
    'admin.options': 'Варианты',
    'admin.correctAnswer': 'Правильный ответ',
    'admin.addQuestion': 'Добавить вопрос',
    'admin.deleteQuestion': 'Удалить',
    'admin.unsavedChanges': 'Есть несохраненные изменения',

    // Login page
    'login.title': 'Вход для учителя',
    'login.username': 'Имя пользователя',
    'login.password': 'Пароль',
    'login.submit': 'Войти',
    'login.error': 'Неверное имя пользователя или пароль',
    'login.welcome': 'Добро пожаловать!',

    // Theme
    'theme.light': 'Светлая',
    'theme.dark': 'Темная',

    // Language
    'lang.uz': 'O\'zbekcha',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.topics': 'Topics',
    'nav.test': 'Test',
    'nav.menu': 'Menu',
    'nav.login': 'Teacher Login',
    'nav.logout': 'Logout',
    'nav.admin': 'Admin',
    'nav.academicWriting': 'Academic Writing',

    // Home page
    'home.title': 'Academic Writing',
    'home.subtitle': 'Learn the art of scientific writing and reach a professional level',
    'home.learnTopics': 'Learn Topics',
    'home.startTest': 'Start Test',
    'home.professorName': 'Professor Bazarov',
    'home.professorTitle': 'Academic Writing Instructor',
    'home.professorDesc': 'An expert with many years of experience. Works on teaching students the art of scientific writing and helping them reach a professional level.',
    'home.aboutSubject': 'About the Subject',
    'home.topics': 'Topics',
    'home.topicsDesc': 'Complete information in 4 sections',
    'home.tests': 'Tests',
    'home.testsDesc': 'Test your knowledge',
    'home.minutes': 'Minutes',
    'home.minutesDesc': 'Time allocated for test',
    'home.certificate': 'Certificate',
    'home.certificateDesc': 'For those who complete successfully',
    'home.startNow': 'Start Now!',
    'home.testYourKnowledge': 'Test your knowledge of academic writing',
    'home.footer': '© 2024 Academic Writing Platform. All rights reserved.',

    // Topics page
    'topics.title': 'Topics',
    'topics.subtitle': 'Learn all topics about academic writing',
    'topics.section1': 'Section 1: Introduction to Academic Writing',
    'topics.section1Desc': 'Basics and concepts of academic writing',
    'topics.section2': 'Section 2: Scientific Research Methods',
    'topics.section2Desc': 'Research methodology and methods',
    'topics.section3': 'Section 3: Scientific Writing Techniques',
    'topics.section3Desc': 'Writing process and rules',
    'topics.section4': 'Section 4: Scientific Publishing and Ethics',
    'topics.section4Desc': 'Publishing and scientific ethics',
    'topics.topicCount': 'topics',

    // Topic detail
    'topic.back': 'Back to Topics',
    'topic.keyPoints': 'Key Points',
    'topic.introduction': 'Introduction',
    'topic.mainContent': 'Main Content',

    // Test page
    'test.title': 'Academic Writing Test',
    'test.timeRemaining': 'Time Remaining',
    'test.question': 'Question',
    'test.of': '/',
    'test.submit': 'Finish Test',
    'test.next': 'Next',
    'test.prev': 'Previous',
    'test.result': 'Result',
    'test.correct': 'Correct Answers',
    'test.percentage': 'Percentage',
    'test.tryAgain': 'Try Again',
    'test.questionNav': 'Questions',
    'test.answered': 'answered',
    'test.timeUp': 'Time\'s up!',
    'test.confirmSubmit': 'Confirm test completion?',
    'test.yes': 'Yes',
    'test.no': 'No',

    // Admin page
    'admin.title': 'Admin Panel',
    'admin.testSettings': 'Test Settings',
    'admin.timeLimit': 'Time Limit (minutes)',
    'admin.questions': 'Questions',
    'admin.save': 'Save',
    'admin.saved': 'Saved!',
    'admin.question': 'Question',
    'admin.options': 'Options',
    'admin.correctAnswer': 'Correct Answer',
    'admin.addQuestion': 'Add Question',
    'admin.deleteQuestion': 'Delete',
    'admin.unsavedChanges': 'You have unsaved changes',

    // Login page
    'login.title': 'Teacher Login',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.error': 'Invalid username or password',
    'login.welcome': 'Welcome!',

    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',

    // Language
    'lang.uz': 'O\'zbekcha',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}