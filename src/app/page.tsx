"use client"
import React, { useState } from 'react';

// Use a CSS import to bring in the Google Font
// A better way in Next.js would be to add this to the head of a layout file.
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    `}
  </style>
);

// Button props interface
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

// Main App component containing the entire single-page website.
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Utility component for a modern button
  const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition-transform transform hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#334155_50%,#E2E8F0_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );

  const phoneNumber = '+905315065536';
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = 'Sitenizden geliyorum';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen font-['Poppins'] selection:bg-cyan-500 selection:text-white">
      <GlobalStyles />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gray-950/80 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">Gökhan Su Arıtma</div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <a href="#hizmetler" className="hover:text-cyan-400 transition-colors">Hizmetler</a>
            <a href="#hakkimizda" className="hover:text-cyan-400 transition-colors">Hakkımızda</a>
            <a href="#neden-biz" className="hover:text-cyan-400 transition-colors">Neden Biz?</a>
            <a href="#galeri" className="hover:text-cyan-400 transition-colors">Galeri</a>
            <a href="#iletisim" className="hover:text-cyan-400 transition-colors">İletişim</a>
            <a href={`tel:${phoneNumber}`} className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors">HEMEN ARAYIN</a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-cyan-400 focus:outline-none transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-4 pb-4 space-y-2`}>
          <a href="#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Hizmetler</a>
          <a href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Hakkımızda</a>
          <a href="#neden-biz" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Neden Biz?</a>
          <a href="#galeri" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Galeri</a>
          <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">İletişim</a>
          <a href={`tel:${phoneNumber}`} className="block px-4 py-2 rounded-lg bg-cyan-600 text-center text-white hover:bg-cyan-500 transition-colors">HEMEN ARAYIN</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-950 to-gray-800 py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0d131a/101a24?text=Su+Damlası')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(5px)' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Bursa'nın Lider <span className="text-cyan-400">Su Arıtma</span> Hizmetleri
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Temiz, güvenli ve sağlıklı suya ulaşmak için doğru adres. Kurulum, bakım, filtre değişimi ve daha fazlası...
            </p>
            <Button onClick={handleCall}>
              Ücretsiz Keşif ve Danışmanlık İçin Hemen Arayın
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Card 1: Kurulum */}
              <div className="bg-gray-950 rounded-xl shadow-lg p-6 text-center border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-3xl text-white">
                  {/* Installation SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 13.9L2.8 19.8l5.8-11.9zM15 15l-3 6.1L.8 13.1l2.4-4.8M21.9 22.1l-1.4-1.4M12.8 11.2l-1.4-1.4"></path><path d="M22 2L15 9l-3 3-3-3l7-7 3 3z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kurulum</h3>
                <p className="text-gray-400 text-sm">Uzman ekibimizle su arıtma cihazınızın kusursuz kurulumunu gerçekleştiriyoruz.</p>
              </div>
              {/* Service Card 2: Satış */}
              <div className="bg-gray-950 rounded-xl shadow-lg p-6 text-center border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-3xl text-white">
                  {/* Sales SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Satış</h3>
                <p className="text-gray-400 text-sm">En kaliteli ve güvenilir su arıtma cihazı modelleri için bizimle iletişime geçin.</p>
              </div>
              {/* Service Card 3: Bakım */}
              <div className="bg-gray-950 rounded-xl shadow-lg p-6 text-center border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-3xl text-white">
                  {/* Maintenance SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bakım</h3>
                <p className="text-gray-400 text-sm">Cihazınızın ömrünü uzatan ve verimli çalışmasını sağlayan periyodik bakım hizmetleri.</p>
              </div>
              {/* Service Card 4: Filtre Değişimi */}
              <div className="bg-gray-950 rounded-xl shadow-lg p-6 text-center border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-3xl text-white">
                  {/* Filter Change SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M18.4 4.6L5.6 17.4"></path><path d="M5.6 4.6L18.4 17.4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Filtre Değişimi</h3>
                <p className="text-gray-400 text-sm">Temiz suyun anahtarı olan filtrelerinizin düzenli değişimini sağlıyoruz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimizda" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hakkımızda</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  Gökhan Su Arıtma olarak, Bursa'da temiz ve sağlıklı suya erişimi kolaylaştırmak için çalışıyoruz. Yılların tecrübesiyle, müşteri memnuniyetini her zaman ön planda tutarak, profesyonel hizmetler sunuyoruz.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Bursanın tüm bölgelerine hızlı ve güvenilir hizmetlerimizle, su arıtma cihazı kurulumundan periyodik bakıma kadar her aşamada yanınızdayız. Sağlığınız bizim için önemli, en iyi hizmeti sunmak için buradayız.
                </p>
              </div>
              <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <img
                  src="t2.jpg"
                  alt="[Gökhan Su Arıtma firması hakkında genel bir fotoğraf]"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="neden-biz" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                  {/* Quality SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kalite Garantisi</h3>
                <p className="text-gray-400 text-sm">En yüksek kalite standartlarında, uzun ömürlü cihazlar ve malzemeler kullanıyoruz.</p>
              </div>
              <div className="bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                  {/* Speed SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M13 2v7h7"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hızlı ve Güvenilir Hizmet</h3>
                <p className="text-gray-400 text-sm">Randevu ve destek taleplerinize en kısa sürede geri dönüş yapıyoruz.</p>
              </div>
              <div className="bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-cyan-500 transition-colors duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                  {/* Customer Satisfaction SVG Icon */}
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M12 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-gray-400 text-sm">Hizmetlerimizle ilgili her türlü sorunuz için 7/24 yanınızdayız.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Galeri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t1.jpg"
                  alt="[Evde su arıtma cihazı kurulumu yapan bir teknisyen]"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t4.jpg"
                  alt="[Bir su arıtma cihazının filtre değişimini gösteren yakın çekim]"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t2.jpg"
                  alt="[Profesyonel su arıtma ekibini gösteren bir fotoğraf]"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t3.jpg"
                  alt="[Su arıtma sisteminin genel bakımı]"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t5.jpg"
                  alt="[Bir ofis ortamında kullanılan su arıtma cihazı]"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="t6.jpg"
                  alt="[Su arıtma hizmetinden memnun bir müşteri gülümsüyor]"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">İletişime Geçin</h2>
            <div className="max-w-xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
              <p className="text-center text-gray-400 mb-6">
                Hizmetlerimiz hakkında daha fazla bilgi almak veya randevu oluşturmak için formu doldurabilirsiniz.
              </p>
              <form onSubmit={handleCall} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefon Numaranız</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition-colors"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Sitenizden geliyorum')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-110 active:scale-90"
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C7.09 2 3.14 6.05 3.14 11c0 2.05.67 4.02 1.9 5.67L3 21l4.57-1.22c1.55.8 3.32 1.25 5.22 1.25 4.95 0 8.9-4.05 8.9-9s-3.95-9-8.9-9zM17.43 15.34c-.2-.09-1.2-.59-1.39-.65-.19-.07-.34-.1-.49.09-.15.19-.58.65-.71.79-.14.15-.28.17-.52.09-.24-.09-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.2-.02-.3-.12-.48-.09-.18-.19-.46-.28-.65-.09-.19-.01-.17-.07-.34-.07-.17-.59-.59-1.07-.94-.48-.36-.93-.3-.93-.3h-.1c-.09 0-.19.04-.3.14s-.4.49-.4.99c0 .5.4.99.45 1.07.05.08.79 1.48 1.9 2.45.92.83 1.71 1.05 2.01 1.18.29.12.48.1.66-.02.19-.11 1.2-1.42 1.44-1.78.2-.34.13-.25.1-.48z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© 2024 Gökhan Su Arıtma. Tüm Hakları Saklıdır.</p>
          <p className="mt-2 text-sm">Bursa'da su arıtma cihazı kurulumu, bakımı ve filtre değişimi hizmetleri.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
