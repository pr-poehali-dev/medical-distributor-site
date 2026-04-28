import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

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

export default function Catalog() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="hero-gradient relative overflow-hidden py-14">
        <div className="absolute inset-0 cross-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Каталог</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Каталог товаров
          </h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            Более 3 200 сертифицированных позиций. Запросите прайс-лист для получения актуальных цен.
          </p>
        </div>
      </div>

      {/* CATALOG */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                    <Link
                      to="/contacts"
                      className="text-sm text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 transition-colors"
                    >
                      Запросить <Icon name="ArrowRight" size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Нужен полный прайс-лист?
            </h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Отправьте заявку и мы пришлём актуальный прайс-лист с оптовыми ценами на все категории
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-lg text-sm"
            >
              <Icon name="FileText" size={16} />
              Запросить прайс-лист
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
