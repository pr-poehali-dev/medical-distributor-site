import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "FAQ", href: "/faq" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/86472dcd-13aa-4a9d-bb14-902749b3fd8a/bucket/32b68e0e-aaca-45f7-a2c2-3c8b239a19fa.jpg"
              alt="Ф-Трейд"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contacts"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md"
          >
            <Icon name="Phone" size={15} />
            Связаться
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-blue-50"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              to="/contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-5 py-3 rounded-xl"
            >
              <Icon name="Phone" size={15} />
              Связаться с нами
            </Link>
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img
                  src="https://cdn.poehali.dev/projects/86472dcd-13aa-4a9d-bb14-902749b3fd8a/bucket/32b68e0e-aaca-45f7-a2c2-3c8b239a19fa.jpg"
                  alt="Ф-Трейд"
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
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
                    <Link to={l.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
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
            <p className="text-blue-400 text-xs">© 2024 Ф-Трейд. Все права защищены.</p>
            <p className="text-blue-500 text-xs">ИНН: 7700000000 · ОГРН: 1090000000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
