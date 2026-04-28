import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const STATS = [
  { value: "15+", label: "лет на рынке" },
  { value: "3 200+", label: "наименований товаров" },
  { value: "500+", label: "клиник-партнёров" },
  { value: "48 ч", label: "среднее время доставки" },
];

const CATALOG_PREVIEW = [
  { icon: "Stethoscope", title: "Диагностическое оборудование", count: "240+ позиций" },
  { icon: "Syringe", title: "Расходные материалы", count: "1200+ позиций" },
  { icon: "Pill", title: "Фармацевтика", count: "850+ позиций" },
  { icon: "Microscope", title: "Лабораторное оборудование", count: "380+ позиций" },
];

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden">
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
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-lg text-sm"
              >
                <Icon name="LayoutGrid" size={16} />
                Смотреть каталог
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200 text-sm"
              >
                <Icon name="MessageCircle" size={16} />
                Получить прайс-лист
              </Link>
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

        {/* Stats bar */}
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

      {/* CATALOG PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Наша продукция</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Широкий ассортимент
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Более 3 200 сертифицированных позиций для медицинских учреждений любого профиля
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {CATALOG_PREVIEW.map((item) => (
              <div key={item.title} className="card-hover bg-white rounded-2xl border border-blue-50 p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={22} className="text-blue-600" fallback="Package" />
                </div>
                <h3 className="font-bold text-blue-900 text-sm mb-2 leading-snug">{item.title}</h3>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.count}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md text-sm"
            >
              <Icon name="LayoutGrid" size={16} />
              Смотреть весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cross-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Почему выбирают Ф-Трейд
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Готовы начать сотрудничество?
          </h2>
          <p className="text-slate-500 mb-8">Оставьте заявку — менеджер свяжется с вами в течение 2 часов</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg text-base"
          >
            <Icon name="Send" size={18} />
            Оставить заявку
          </Link>
        </div>
      </section>
    </Layout>
  );
}
