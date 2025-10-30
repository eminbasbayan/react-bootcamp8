import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Counter from '../components/Counter';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      title: 'Ücretsiz Kargo',
      description: 'Tüm siparişlerde ücretsiz ve hızlı teslimat',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Güvenli Alışveriş',
      description: 'SSL sertifikalı güvenli ödeme sistemi',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: '14 Gün İade',
      description: 'Koşulsuz 14 gün içinde iade garantisi',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: '7/24 Destek',
      description: 'Her zaman yanınızda müşteri hizmetleri',
    },
  ];

  const categories = [
    {
      name: 'Elektronik',
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop',
      count: '120+ Ürün',
    },
    {
      name: 'Giyim',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop',
      count: '250+ Ürün',
    },
    {
      name: 'Aksesuar',
      image:
        'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=500&fit=crop',
      count: '180+ Ürün',
    },
    {
      name: 'Ev & Yaşam',
      image:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=500&fit=crop',
      count: '90+ Ürün',
    },
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Counter />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Alışverişin
                <span className="block text-yellow-300">Yeni Adresi</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                En kaliteli ürünleri en uygun fiyatlarla keşfedin. Binlerce ürün
                arasından size en uygun olanı bulun.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/products')}
                  className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Alışverişe Başla
                </button>
                <button
                  onClick={() => navigate('/products')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all"
                >
                  Ürünleri Keşfet
                </button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <p className="text-3xl font-bold">5000+</p>
                  <p className="text-gray-200">Mutlu Müşteri</p>
                </div>
                <div className="h-12 w-px bg-white opacity-30"></div>
                <div>
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-gray-200">Ürün Çeşidi</p>
                </div>
                <div className="h-12 w-px bg-white opacity-30"></div>
                <div>
                  <p className="text-3xl font-bold">99%</p>
                  <p className="text-gray-200">Memnuniyet</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop"
                  alt="Shopping"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">%50'ye Varan</p>
                  <p className="text-lg">İndirimler!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popüler Kategoriler
            </h2>
            <p className="text-xl text-gray-600">
              İlgi alanınıza göre kategorileri keşfedin
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate('/products')}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-200">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hemen Alışverişe Başlayın!
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Binlerce ürün arasından sizin için en uygun olanları seçin. Güvenli
            ödeme, hızlı teslimat ve mükemmel müşteri hizmetiyle yanınızdayız.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Tüm Ürünleri Görüntüle
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Kampanyalardan Haberdar Olun
              </h2>
              <p className="text-gray-300 text-lg">
                E-bültene abone olun, özel fırsatları ve indirim kuponlarını
                kaçırmayın!
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Abone Ol
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">
                Verileriniz güvendedir. Spam göndermiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                <span className="text-teal-400">Shop</span>Logo
              </h3>
              <p className="text-sm">
                En kaliteli ürünleri en uygun fiyatlarla sizlere sunuyoruz.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/products" className="hover:text-teal-400">
                    Ürünler
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-teal-400">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-teal-400">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                Müşteri Hizmetleri
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Sipariş Takibi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    İade & Değişim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    SSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@shoplogo.com</li>
                <li>Tel: +90 (555) 123 45 67</li>
                <li>Adres: İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 ShopLogo. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
