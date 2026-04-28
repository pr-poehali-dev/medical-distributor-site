import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="hero-gradient relative overflow-hidden py-14">
        <div className="absolute inset-0 cross-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">О компании</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            О компании
          </h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            15 лет на рынке медицинского снабжения России
          </p>
        </div>
      </div>

      {/* MAIN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">О нас</span>
              <h2 className="text-3xl font-bold text-blue-900 mt-3 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
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
                alt="Склад Ф-Трейд"
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "15+", label: "лет на рынке", icon: "Calendar" },
              { value: "3 200+", label: "наименований", icon: "Package" },
              { value: "500+", label: "клиник-партнёров", icon: "Building2" },
              { value: "120", label: "сотрудников", icon: "Users" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={s.icon} size={18} className="text-blue-600" fallback="Star" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.value}</p>
                <p className="text-slate-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 text-center mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Наши принципы
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "Award",
                  title: "Качество",
                  desc: "Работаем только с сертифицированными производителями. Каждая партия проходит контроль качества перед отправкой клиенту.",
                },
                {
                  icon: "Handshake",
                  title: "Партнёрство",
                  desc: "Строим долгосрочные отношения с клиентами. Индивидуальный подход, персональный менеджер и гибкие условия сотрудничества.",
                },
                {
                  icon: "Clock",
                  title: "Надёжность",
                  desc: "Выполняем обязательства точно в срок. Собственный склад позволяет обеспечивать наличие товара и быструю отгрузку.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={v.icon} size={22} className="text-blue-600" fallback="Star" />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 cross-pattern opacity-20" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Станьте нашим партнёром
          </h2>
          <p className="text-blue-200 mb-8">Свяжитесь с нами, чтобы обсудить условия сотрудничества</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-lg text-sm"
          >
            <Icon name="MessageCircle" size={16} />
            Связаться с нами
          </Link>
        </div>
      </section>
    </Layout>
  );
}
