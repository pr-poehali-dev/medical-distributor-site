import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Каталог", href: "#catalog" },
  { label: "О компании", href: "#about" },
  { label: "Контакты", href: "#contacts" },
  { label: "FAQ", href: "#faq" },
];

const CATALOG_ITEMS = [
  {
    icon: "Stethoscope",
    title: "Диагностическое оборудование",
    desc: "Стетоскопы, тонометры, пульсоксиметры, ЭКГ-аппараты ведущих производителей",
    count: "240+ позиций",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Syringe",
    title: "Расходные материалы",
    desc: "Шприцы, иглы, катетеры, системы для инфузий, перчатки и защитные средства",
    count: "1200+ позиций",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: "Pill",
    title: "Фармацевтика",
    desc: "Лекарственные препараты, витамины, БАДы от сертифицированных поставщиков",
    count: "850+ позиций",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: "BedDouble",
    title: "Медицинская мебель",
    desc: "Кушетки, каталки, кресла для процедурных и смотровых кабинетов",
    count: "120+ позиций",
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: "Microscope",
    title: "Лабораторное оборудование",
    desc: "Микроскопы, центрифуги, реактивы, лабораторная посуда и расходники",
    count: "380+ позиций",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: "Shield",
    title: "Средства защиты",
    desc: "Маски, халаты, бахилы, шапочки, защитные экраны и антисептики",
    count: "95+ позиций",
    color: "from-teal-400 to-cyan-600",
  },
];

const STATS = [
  { value: "15+", label: "лет на рынке" },
  { value: "3 200+", label: "наименований товаров" },
  { value: "500+", label: "клиник-партнёров" },
  { value: "48 ч", label: "среднее время доставки" },
];

const FAQ_ITEMS = [
  {
    q: "Как сделать заказ?",
    a: "Свяжитесь с нами по телефону или электронной почте. Менеджер подберёт нужные позиции, сформирует коммерческое предложение и согласует условия поставки.",
  },
  {
    q: "Какие условия оплаты?",
    a: "Работаем по безналичному расчёту с юридическими лицами. Доступна отсрочка платежа для постоянных клиентов. Первичным клиентам — 100% предоплата.",
  },
  {
    q: "Есть ли доставка по России?",
    a: "Да, осуществляем доставку во все регионы России. Собственный автопарк в Москве и Московской области, для других регионов — транспортные компании.",
  },
  {
    q: "Нужна ли лицензия для закупки?",
    a: "Для медицинских изделий требуется лицензия на медицинскую деятельность. Мы помогаем оформить все необходимые документы и сертификаты.",
  },
  {
    q: "Предоставляете ли сертификаты качества?",
    a: "Да, все товары сопровождаются сертификатами соответствия, регистрационными удостоверениями и иными обязательными документами.",
  },
  {
    q: "Возможен ли возврат товара?",
    a: "Возврат возможен при ненадлежащем качестве или несоответствии заказу в течение 14 дней с момента поставки. Условия прописаны в договоре.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>+</span>
            </div>
            <span className="font-bold text-xl text-blue-900" style={{ fontFamily: "Montserrat, sans-serif" }}>
              МедСнаб
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-300/50"
          >
            <Icon name="Phone" size={15} />
            Связаться
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-blue-50"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 px-4 py-3 flex flex-col gap-1 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-5 py-3 rounded-xl"
            >
              <Icon name="Phone" size={15} />
              Связаться с нами
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="hero-gradient relative overflow-hidden pt-16">
        <div className="absolute inset-0 cross-pattern opacity-40" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Официальный дистрибьютор · Россия
            </div>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Медицинское
              <br />
              <span className="text-cyan-300">снабжение</span>
              <br />
              без лишних хлопот
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
              Поставляем оборудование, расходные материалы и фармацевтику для клиник, больниц и аптек по всей России. Более 3 200 наименований.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-lg text-sm"
              >
                <Icon name="LayoutGrid" size={16} />
                Смотреть каталог
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200 text-sm"
              >
                <Icon name="MessageCircle" size={16} />
                Получить прайс-лист
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-fade-up delay-400">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/20 to-blue-300/20 rounded-3xl blur-xl" />
              <img
                src="https://cdn.poehali.dev/projects/86472dcd-13aa-4a9d-bb14-902749b3fd8a/files/e92da930-76d0-466e-878b-80b3af35b3eb.jpg"
                alt="Медицинские товары"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-white/10"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon name="Truck" size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Доставка по России</p>
                  <p className="text-sm font-bold text-slate-800">от 48 часов</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white/8 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.value}</p>
                <p className="text-blue-200 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Наша продукция</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Каталог товаров
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              Широкий ассортимент сертифицированной продукции для медицинских учреждений любого профиля
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOG_ITEMS.map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-2xl border border-blue-50 overflow-hidden shadow-sm"
              >
                <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={22} className="text-blue-600" fallback="Package" />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.count}</span>
                    <button className="text-sm text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 transition-colors">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md text-sm"
            >
              <Icon name="FileText" size={16} />
              Запросить полный прайс-лист
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">О нас</span>
              <h2
                className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Надёжный партнёр в сфере медицинского снабжения
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                С 2009 года мы обеспечиваем медицинские учреждения России качественными расходными материалами, оборудованием и фармацевтикой. Работаем напрямую с производителями и официальными дистрибьюторами.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Наша команда — 120 специалистов: менеджеры по работе с клиентами, логисты, медицинские консультанты. Мы сертифицированы по ISO 13485 и соответствуем всем требованиям российского законодательства.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "BadgeCheck", text: "Все товары сертифицированы" },
                  { icon: "Truck", text: "Доставка по всей России" },
                  { icon: "Headphones", text: "Поддержка 7 дней в неделю" },
                  { icon: "RefreshCw", text: "Гарантия возврата" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                      <Icon name={item.icon} size={16} className="text-cyan-600" fallback="CheckCircle" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/86472dcd-13aa-4a9d-bb14-902749b3fd8a/files/82cf9685-17ea-4eff-84c2-4b84712177bc.jpg"
                alt="Склад МедСнаб"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="ShieldCheck" size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Сертификация</p>
                  <p className="text-sm font-bold text-slate-800">ISO 13485</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cross-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Почему выбирают МедСнаб
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Zap", title: "Быстро", desc: "Обработка заявки за 2 часа, доставка от 48 часов" },
              { icon: "Tag", title: "Выгодно", desc: "Оптовые цены и индивидуальные условия для постоянных клиентов" },
              { icon: "ClipboardList", title: "Документы", desc: "Полный пакет документации: СТ, РУ, декларации соответствия" },
              { icon: "Users", title: "Экспертиза", desc: "Медицинские консультанты помогут подобрать нужный ассортимент" },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={22} className="text-cyan-300" fallback="Star" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Вопросы и ответы</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mt-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-blue-50/50 transition-colors"
                >
                  <span className="font-semibold text-blue-900 text-sm md:text-base">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-blue-400 shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <div className="h-px bg-blue-100 mb-4" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Свяжитесь с нами</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mt-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Контакты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (495) 000-00-00", "+7 (800) 000-00-00 (бесплатно)"],
                accent: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: "Mail",
                title: "Электронная почта",
                lines: ["info@medsnab.ru", "zakaz@medsnab.ru"],
                accent: "text-cyan-600",
                bg: "bg-cyan-50",
              },
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["г. Москва, ул. Медицинская, д. 1", "Пн–Пт: 9:00 – 18:00"],
                accent: "text-teal-600",
                bg: "bg-teal-50",
              },
            ].map((c) => (
              <div key={c.title} className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={c.icon} size={24} className={c.accent} fallback="Info" />
                </div>
                <h3 className="font-bold text-blue-900 mb-3">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-slate-600 text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-blue-100 p-8 md:p-10">
            <h3 className="font-bold text-blue-900 text-xl mb-6 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Оставить заявку
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Организация</label>
              <input
                type="text"
                placeholder="Название клиники или аптеки"
                className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Сообщение</label>
              <textarea
                rows={4}
                placeholder="Опишите, что вам нужно..."
                className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white resize-none"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2">
              <Icon name="Send" size={16} />
              Отправить заявку
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>+</span>
                </div>
                <span className="font-bold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>МедСнаб</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                Надёжный дистрибьютор медицинского оборудования и расходных материалов с 2009 года.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Разделы</h4>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-blue-200 hover:text-white text-sm transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Контакты</h4>
              <ul className="flex flex-col gap-2 text-sm text-blue-200">
                <li>+7 (495) 000-00-00</li>
                <li>info@medsnab.ru</li>
                <li>г. Москва, ул. Медицинская, д. 1</li>
                <li className="text-blue-300 pt-1">Пн–Пт: 9:00 – 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-blue-400 text-xs">© 2024 МедСнаб. Все права защищены.</p>
            <p className="text-blue-500 text-xs">ИНН: 7700000000 · ОГРН: 1090000000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
