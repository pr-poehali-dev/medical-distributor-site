import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

export default function Contacts() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="hero-gradient relative overflow-hidden py-14">
        <div className="absolute inset-0 cross-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Контакты</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Контакты
          </h1>
          <p className="text-blue-200 mt-3">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
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

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-blue-100 p-8 md:p-10">
            <h2 className="font-bold text-blue-900 text-2xl mb-2 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Оставить заявку
            </h2>
            <p className="text-slate-500 text-sm text-center mb-8">Менеджер свяжется с вами в течение 2 часов</p>

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
    </Layout>
  );
}
