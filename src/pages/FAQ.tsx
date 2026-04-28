import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

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
  {
    q: "Работаете ли с физическими лицами?",
    a: "Мы работаем преимущественно с юридическими лицами и ИП. Для розничных покупок рекомендуем обратиться в аптечные сети.",
  },
  {
    q: "Какой минимальный объём заказа?",
    a: "Минимальный заказ зависит от категории товара. Для большинства позиций минимальная сумма заказа составляет 5 000 рублей. Уточняйте у менеджера.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="hero-gradient relative overflow-hidden py-14">
        <div className="absolute inset-0 cross-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">FAQ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Частые вопросы
          </h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            Ответы на самые популярные вопросы о работе с нами
          </p>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 mb-14">
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

          {/* Still have questions */}
          <div className="bg-blue-600 rounded-3xl p-8 text-center text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Не нашли ответ?
            </h2>
            <p className="text-blue-100 text-sm mb-6">Задайте вопрос нашему менеджеру — ответим в течение 2 часов</p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-cyan-50 transition-all duration-200 text-sm"
            >
              <Icon name="Send" size={15} />
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
