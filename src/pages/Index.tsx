export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ВИЗУАЛИЗАЦИЯ
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Работы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обо мне
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              3D
              <br />
              <span className="text-red-600">VIZ</span>
            </h1>
            <p className="text-xl max-w-xl">
              Фотореалистичные 3D визуализации интерьеров и экстерьеров. Превращаю архитектурные идеи в живые образы ещё до начала строительства.
            </p>
            <a
              href="#work"
              className="inline-block mt-8 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors duration-300"
            >
              Смотреть работы
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/84e13f21-3d6f-4a22-a141-51506dab3e61/files/68fff3d7-a83a-4a58-94ec-f0ad6df7ade3.jpg"
                alt="3D визуализация интерьера"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">РАБОТЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/84e13f21-3d6f-4a22-a141-51506dab3e61/files/68fff3d7-a83a-4a58-94ec-f0ad6df7ade3.jpg"
                  alt="Жилой интерьер"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Жилой интерьер</h3>
              <p className="text-neutral-400">Фотореалистичная визуализация гостиной в стиле современного минимализма</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/84e13f21-3d6f-4a22-a141-51506dab3e61/files/cea591a3-90a8-4b7b-b41e-96c034a24df7.jpg"
                  alt="Экстерьер коттеджа"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Экстерьер коттеджа</h3>
              <p className="text-neutral-400">Архитектурная визуализация загородного дома в сумерках с драматическим освещением</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/84e13f21-3d6f-4a22-a141-51506dab3e61/files/e1570dcb-b1a3-468f-b9c7-5018dc2efc65.jpg"
                  alt="Кухня люкс"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Кухня класса люкс</h3>
              <p className="text-neutral-400">3D визуализация кухонного пространства с проработкой материалов и освещения</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ОБО МНЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/84e13f21-3d6f-4a22-a141-51506dab3e61/files/68fff3d7-a83a-4a58-94ec-f0ad6df7ade3.jpg"
                  alt="Портфолио 3D визуализаций"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white opacity-30"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Создаю фотореалистичные 3D визуализации интерьеров и экстерьеров, которые помогают клиентам увидеть результат ещё до начала строительства или ремонта.
              </p>
              <p className="mb-6">
                Работаю с архитекторами, дизайнерами интерьера и застройщиками. Каждый проект — это детальная проработка материалов, освещения и атмосферы, максимально близкая к реальности.
              </p>
              <p className="mb-6">
                Использую современные инструменты рендеринга: 3ds Max, V-Ray, Corona Renderer. Сдаю проекты в срок и дорабатываю до полного одобрения клиента.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Специализация</h3>
                  <ul className="space-y-2">
                    <li>Интерьеры</li>
                    <li>Экстерьеры</li>
                    <li>Архитектурные объекты</li>
                    <li>Продуктовые визуализации</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Инструменты</h3>
                  <ul className="space-y-2">
                    <li>3ds Max</li>
                    <li>V-Ray / Corona</li>
                    <li>Blender</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Есть проект? Расскажите о задаче — рассчитаю стоимость и сроки бесплатно.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@example.com" className="hover:underline">
                    hello@example.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Telegram</span>
                  <a href="https://t.me/username" className="hover:underline">
                    @username
                  </a>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Проект
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Опишите вашу задачу"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 3D Визуализация. Все права защищены.</p>
          <p className="text-sm mt-4 md:mt-0 uppercase tracking-widest">
            Интерьеры · Экстерьеры · Архитектура
          </p>
        </div>
      </footer>
    </main>
  );
}
