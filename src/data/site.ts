export const site = {
  name: 'Denge Psikoloji & Terapi',
  shortName: 'Denge Psikoloji',
  tagline: 'Güvenli bir alan, kendine dönüş',
  description:
    'Denge Psikoloji & Terapi — bireysel terapi, çift terapisi, çocuk-ergen ve online terapi. Gizlilik odaklı, sıcak ve güven veren bir terapi alanı.',
  url: 'https://psikolog.demo.dijifa.com',
  email: 'merhaba@dengepsikoloji.com',
  phone: '+90 212 000 00 00',
  phoneHref: '+902120000000',
  whatsapp: '+90 555 000 00 00',
  address: {
    street: 'Bağdat Caddesi No. 124, Kat 3',
    district: 'Kadıköy',
    city: 'İstanbul',
    full: 'Bağdat Caddesi No. 124, Kat 3, Kadıköy / İstanbul',
  },
  hours: 'Pazartesi – Cumartesi, 09.00 – 19.00',
  founder: {
    name: 'Uzm. Klinik Psk. Elif Doğan',
    title: 'Uzman Klinik Psikolog',
  },
};

export const nav = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Uzmanlık Alanları', href: '/uzmanlik-alanlari' },
  { label: 'Terapi Yaklaşımı', href: '/terapi-yaklasimi' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export type Specialty = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // bkz. components/Icon.astro
  signs: string[];
};

export const specialties: Specialty[] = [
  {
    slug: 'kaygi',
    title: 'Kaygı & Stres',
    short: 'Sürekli endişe, panik, tükenmişlik',
    description:
      'Yoğun kaygı, panik atak ve kronik stresle başa çıkmak; bedeninizi ve zihninizi yeniden dengeye kavuşturmak için sakin, kademeli bir çalışma.',
    icon: 'wave',
    signs: ['Sürekli endişe hâli', 'Panik atak', 'Uyku düzensizliği', 'Tükenmişlik'],
  },
  {
    slug: 'depresyon',
    title: 'Depresyon & Mood',
    short: 'İsteksizlik, çökkünlük, anlam kaybı',
    description:
      'Çökkün ruh hâli, isteksizlik ve anlam kaybıyla nazikçe çalışırken; küçük ama gerçek adımlarla yeniden enerji ve yön bulmanıza eşlik ederiz.',
    icon: 'sun',
    signs: ['Sürekli yorgunluk', 'İlgi kaybı', 'Umutsuzluk', 'Konsantrasyon güçlüğü'],
  },
  {
    slug: 'iliski',
    title: 'İlişki & Çift Terapisi',
    short: 'İletişim, güven, bağ kurma',
    description:
      'Çiftler için güvenli bir masa: birbirini gerçekten duymak, tekrar eden çatışma kalıplarını çözmek ve bağı yeniden onarmak üzerine bir süreç.',
    icon: 'link',
    signs: ['Tekrarlayan tartışmalar', 'İletişim kopukluğu', 'Güven sorunları', 'Uzaklaşma'],
  },
  {
    slug: 'travma',
    title: 'Travma & Kayıp',
    short: 'Geçmiş yükler, yas, iyileşme',
    description:
      'Travmatik deneyimler ve yas süreçleriyle, sizi asla zorlamadan, kendi hızınızda çalışırız. Güvenlik hissi her zaman önce gelir.',
    icon: 'shield-heart',
    signs: ['Geçmişe takılı kalma', 'Yas süreci', 'Ani tetiklenmeler', 'Duygusal uyuşma'],
  },
  {
    slug: 'cocuk-ergen',
    title: 'Çocuk & Ergen',
    short: 'Gelişim, okul, ebeveyn desteği',
    description:
      'Çocuk ve ergenlerin duygusal dünyasına oyun ve konuşma temelli, yaşa uygun yaklaşımlarla; ailelere de yol gösteren bir destek modeli.',
    icon: 'sprout',
    signs: ['Okul kaygısı', 'Davranış değişiklikleri', 'İçe kapanma', 'Ergenlik zorlukları'],
  },
  {
    slug: 'oz-deger',
    title: 'Öz-değer & Gelişim',
    short: 'Kendini tanıma, sınırlar, denge',
    description:
      'Kendinizi daha iyi tanımak, sağlıklı sınırlar koymak ve hayatınızın farklı alanları arasında denge kurmak için kişisel bir gelişim yolculuğu.',
    icon: 'compass',
    signs: ['Düşük öz-değer', 'Sınır koyamama', 'Mükemmeliyetçilik', 'Yön arayışı'],
  },
];

export type FaqItem = { q: string; a: string; category: string };

export const faqs: FaqItem[] = [
  {
    category: 'Gizlilik',
    q: 'Görüşmelerimiz tamamen gizli mi kalıyor?',
    a: 'Evet. Tüm görüşmeler etik ilkeler ve mesleki sır kapsamında kesinlikle gizli tutulur. Paylaştıklarınız, yasal istisnalar dışında, sizin açık onayınız olmadan hiçbir üçüncü kişiyle paylaşılmaz. Kayıtlarınız güvenli biçimde saklanır.',
  },
  {
    category: 'Gizlilik',
    q: 'Yakınlarım terapiye geldiğimi öğrenir mi?',
    a: 'Hayır. Terapiye başvurmanız ve sürecinizle ilgili hiçbir bilgi sizin onayınız olmadan paylaşılmaz. Randevu ve iletişim bilgileriniz yalnızca süreç için kullanılır; mahremiyetiniz her aşamada korunur.',
  },
  {
    category: 'Ücret',
    q: 'Seans ücretleri nasıl belirleniyor?',
    a: 'Seans ücretleri görüşme türüne (bireysel, çift, çocuk-ergen) göre belirlenir ve ilk görüşmede şeffaf biçimde paylaşılır. Güncel ücret bilgisi için iletişim formundan veya telefonla bize ulaşabilirsiniz.',
  },
  {
    category: 'Ücret',
    q: 'Online ve yüz yüze seans ücretleri farklı mı?',
    a: 'Online ve yüz yüze seanslar genellikle aynı kalitede yürütülür ve ücretlendirme de buna göre yapılır. Detaylı bilgiyi randevu öncesi netleştiriyoruz, sürpriz ücretle karşılaşmazsınız.',
  },
  {
    category: 'Süreç',
    q: 'Bir seans ne kadar sürüyor ve ne sıklıkla görüşürüz?',
    a: 'Bireysel seanslar genellikle 50 dakika sürer. Görüşme sıklığı ihtiyaçlarınıza göre belirlenir; çoğu süreçte başlangıçta haftada bir görüşme önerilir ve ilerledikçe sıklık birlikte ayarlanır.',
  },
  {
    category: 'Süreç',
    q: 'Terapi ne kadar sürer?',
    a: 'Bu tamamen size ve hedeflerinize bağlıdır. Bazı konular birkaç seansta hafifler, bazı süreçler daha uzun bir yolculuk gerektirir. Size baskı yapmadan, ihtiyaç duyduğunuz kadar yanınızda oluruz.',
  },
  {
    category: 'Süreç',
    q: 'İlk görüşmede ne olur?',
    a: 'İlk görüşme bir tanışma alanıdır. Sizi neyin getirdiğini dinler, beklentilerinizi konuşur ve birlikte çalışmanın size uygun olup olmadığını değerlendiririz. Hiçbir şey paylaşmaya zorlanmazsınız.',
  },
  {
    category: 'Online',
    q: 'Online terapi yüz yüze kadar etkili mi?',
    a: 'Araştırmalar online terapinin birçok konuda yüz yüze terapiyle benzer etkinlikte olduğunu gösteriyor. Güvenli ve şifreli bir görüşme ortamında, evinizin konforunda destek alabilirsiniz.',
  },
];

export const approachSteps = [
  {
    no: '01',
    title: 'Tanışma & Güven',
    text: 'İlk adım güvenli bir bağ kurmak. Acele etmeden tanışır, sizi neyin getirdiğini birlikte anlamaya başlarız.',
  },
  {
    no: '02',
    title: 'Anlama & Haritalama',
    text: 'Yaşadıklarınızı yargısız bir alanda keşfeder, tekrar eden kalıpları ve ihtiyaçlarınızı birlikte görünür kılarız.',
  },
  {
    no: '03',
    title: 'Çalışma & Dönüşüm',
    text: 'Size uygun yöntemlerle, kendi hızınızda çalışırız. Küçük ama gerçek değişimler zamanla kalıcı dengeye dönüşür.',
  },
  {
    no: '04',
    title: 'Pekiştirme & Kapanış',
    text: 'Kazandıklarınızı günlük hayata taşır, hazır olduğunuzda süreci nazikçe ve birlikte sonlandırırız.',
  },
];
