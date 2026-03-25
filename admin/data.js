/* ============================================================
   Emek Ajans Admin — Site Data (all pages, images, content)
   ============================================================ */
const SITE_PAGES = [
// ─── TR: ANA SAYFA ──────────────────────────────────────────
{
  id:'tr-index', lang:'TR', name:'Ana Sayfa', path:'../index.html', icon:'🏠',
  seo:{
    title:'Emek Ajans — Stratejik Yaratıcı İletişim Ajansı',
    description:'1967\'den bu yana İstanbul merkezli 360° entegre iletişim ajansı. Dijital pazarlama, web tasarım, halkla ilişkiler, medya planlaması.',
    keywords:'reklam ajansı, dijital pazarlama, halkla ilişkiler, medya planlaması, istanbul',
    ogTitle:'Emek Ajans — 360° İletişim Ajansı', ogDesc:'1967\'den beri stratejik iletişim çözümleri.',
    ogImage:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    canonical:'https://emekajans.com/', hreflangTR:'https://emekajans.com/', hreflangEN:'https://emekajans.com/en/'
  },
  content:{
    heroHeadline:'Emek Ajans', heroTaglines:'stratejik, yaratıcı, iletişim ajansı, 1967\'den beri',
    heroCtaPrimary:'HİZMETLERİ KEŞFET', heroCtaSecondary:'HİKAYEMİZ',
    servicesLabel:'Hizmetlerimiz', servicesTitle:'Hizmetlerimiz',
    servicesSubtitle:'Dijital pazarlamadan medya planlamasına, web tasarımdan etkinlik yönetimine kadar tüm iletişim hizmetlerini tek çatı altında sunuyoruz.',
    svc1Title:'Dijital Pazarlama', svc1Desc:'Google Ads, sosyal medya, SEO ve performans pazarlama ile ölçülebilir kampanyalar kuruyoruz.',
    svc2Title:'Web Tasarım & Dijital Deneyim', svc2Desc:'Kullanıcı odaklı kurumsal web siteleri, landing page\'ler ve e-ticaret çözümleri tasarlıyoruz.',
    svc3Title:'Kurumsal Kimlik & Yaratıcı', svc3Desc:'Marka stratejisi, logo and görsel kimlik sistemlerinden kampanya yaratımına kadar eksiksiz hizmet.',
    svc4Title:'Halkla İlişkiler & İletişim', svc4Desc:'Basın ilişkileri, itibar yönetimi, kriz iletişimi ve paydaş iletişimi danışmanlığı sunuyoruz.',
    svc5Title:'Medya Planlaması & Satın Alma', svc5Desc:'TV, radyo, açıkhava, baskı ve dijital mecralarda çok kanallı medya stratejisi ve satın alma.',
    svc6Title:'Etkinlik & Organizasyon Yönetimi', svc6Desc:'Mekan seçiminden prodüksiyona, lojistikten marka aktivasyonuna tam etkinlik yönetimi.',
    aboutLabel:'Hakkımızda', aboutTitle:'1967\'den beri.\nGünümüz için yeniden.',
    aboutP1:'1967\'den bu yana İstanbul\'dan dünyaya uzanan Emek Ajans; köklü pazar deneyimini yeni nesil dijital yeteneklerle harmanlayan 360° entegre iletişim ajansıdır.',
    aboutP2:'Google Partner ve Meta Business Partner sertifikalarımızla, markanız için her kanalda ölçülebilir sonuçlar üretiyoruz.',
    aboutCta:'Hikayemizi Oku',
    portfolioLabel:'Projelerimiz', portfolioTitle:'Hikayelerimiz, paylaşmak için.',
    port1Label:'Marka Kampanyası', port2Label:'Sosyal Medya', port3Label:'Medya Planlaması',
    port4Label:'Etkinlik Yönetimi', port5Label:'Web Tasarım', port6Label:'Halkla İlişkiler',
    blog1Title:'GEO ve Yapay Zeka: Yeni SEO Paradigması',
    blog1Desc:'Generative Engine Optimization dijital pazarlamayı nasıl dönüştürüyor?',
    blog2Title:'Google Ads 2025: Performans Max Kampanyaları',
    blog2Desc:'Yapay zeka destekli bu kampanya tipi neden vazgeçilmez hale geldi?',
    blog3Title:'Web Tasarımda 2025 Trendleri',
    blog3Desc:'Kullanıcı deneyimini merkeze alan yeni tasarım dilleri ve yaklaşımlar.',
    ctaTitle:'Markanızı birlikte büyütelim.', ctaSubtitle:'Projenizi konuşmak ister misiniz?',
    ctaBtn:'İletişime Geç',
    footerTagline:'stratejik · yaratıcı · iletişim ajansı · 1967\'den Beri · İstanbul',
    footerServices:'Hizmetler', footerWork:'Projelerimiz', footerAbout:'Hakkımızda',
    footerBlog:'Blog', footerContact:'İletişim',
    footerAddress:'Etiler, Nispetiye Cd. No:40/10\nGürel Apt., D:B, 34340\nBeşiktaş / İstanbul',
    footerPhone:'+90 212 230 09 79', footerEmail:'info@emekajans.com',
    footerCopyright:'© 2025 Emek Ajans. Tüm hakları saklıdır.'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80'},
    {id:'svc1-img', label:'Hizmet: Dijital Pazarlama', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80'},
    {id:'svc2-img', label:'Hizmet: Web Tasarım', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80'},
    {id:'svc3-img', label:'Hizmet: Kurumsal Kimlik', url:'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=700&q=80'},
    {id:'svc4-img', label:'Hizmet: Halkla İlişkiler', url:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80'},
    {id:'svc5-img', label:'Hizmet: Medya Planlaması', url:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80'},
    {id:'svc6-img', label:'Hizmet: Etkinlik Yönetimi', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80'},
    {id:'about-img', label:'Hakkımızda Fotoğraf', url:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'},
    {id:'port1-img', label:'Portföy 1: Marka Kampanyası', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80'},
    {id:'port2-img', label:'Portföy 2: Sosyal Medya', url:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80'},
    {id:'port3-img', label:'Portföy 3: Medya Planlaması', url:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80'},
    {id:'port4-img', label:'Portföy 4: Etkinlik', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'},
    {id:'port5-img', label:'Portföy 5: Web Tasarım', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'},
    {id:'port6-img', label:'Portföy 6: Halkla İlişkiler', url:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'},
    {id:'blog1-img', label:'Blog 1: GEO', url:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80'},
    {id:'blog2-img', label:'Blog 2: Google Ads', url:'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80'},
    {id:'blog3-img', label:'Blog 3: Web Tasarım', url:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80'},
    {id:'cta-bg', label:'CTA Arka Plan', url:'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: HİZMETLER ──────────────────────────────────────────
{
  id:'tr-services', lang:'TR', name:'Hizmetler', path:'../services.html', icon:'⚙️',
  seo:{
    title:'Hizmetler — Emek Ajans',
    description:'Dijital pazarlama, web tasarım, kurumsal kimlik, halkla ilişkiler, medya planlaması ve etkinlik yönetimi hizmetleri.',
    keywords:'dijital pazarlama, web tasarım, halkla ilişkiler, medya planlaması, etkinlik yönetimi',
    ogTitle:'Hizmetler — Emek Ajans', ogDesc:'Ölçülebilir sonuçlar üreten entegre hizmetler.',
    ogImage:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
    canonical:'https://emekajans.com/services.html', hreflangTR:'https://emekajans.com/services.html', hreflangEN:'https://emekajans.com/en/services.html'
  },
  content:{
    heroTitle:'Ölçülebilir sonuçlar\nüreten entegre hizmetler.',
    strategyTitle:'Strateji & Analiz', strategyDesc:'Her kampanya, derinlemesine pazar araştırması ve rekabet analiziyle başlar.',
    s1Title:'Dijital Pazarlama', s1Tag:'Performans', s1Desc:'Google Ads, Meta Ads, LinkedIn Ads ve programatik reklamcılık ile hedef kitlenize ulaşın.',s1Detail:'SEO · SEM · Sosyal Medya Reklamları · Remarketing',
    s2Title:'Web Tasarım & Dijital Deneyim', s2Tag:'Teknoloji', s2Desc:'Markanızı en etkili şekilde temsil eden, hızlı ve SEO uyumlu dijital deneyimler.',s2Detail:'Kurumsal Site · Landing Page · E-ticaret · UI/UX Tasarım',
    s3Title:'Kurumsal Kimlik & Yaratıcı', s3Tag:'Yaratıcı', s3Desc:'Marka stratejisi, logo ve görsel kimlik sistemleri.',s3Detail:'Logo · Marka Rehberi · Ambalaj · Kampanya Yaratımı',
    s4Title:'Halkla İlişkiler & Kurumsal İletişim', s4Tag:'İletişim', s4Desc:'Stratejik itibar yönetimi ve paydaş iletişimi.',s4Detail:'Basın Bülteni · Medya İlişkileri · Kriz İletişimi',
    s5Title:'Medya Planlaması & Satın Alma', s5Tag:'Medya', s5Desc:'TV, radyo, açıkhava, baskı ve dijitalde çok kanallı strate.',s5Detail:'TV · Radyo · OOH · Baskı · Dijital Medya',
    s6Title:'Etkinlik & Organizasyon Yönetimi', s6Tag:'Etkinlik', s6Desc:'Mekan seçiminden prodüksiyona tam etkinlik yönetimi.',s6Detail:'Kurumsal Etkinlik · Ürün Lansmanı · Basın Toplantısı',
    dig1Title:'Google Ads', dig1Desc:'Arama, display ve video kampanyaları.',
    dig2Title:'Sosyal Medya Yönetimi', dig2Desc:'İçerik üretimi ve topluluk yönetimi.',
    dig3Title:'SEO & İçerik', dig3Desc:'Organik görünürlük ve içerik stratejisi.',
    dig4Title:'Web Geliştirme', dig4Desc:'Hızlı, güvenli ve ölçeklenebilir siteler.'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80'},
    {id:'strategy-img', label:'Strateji Bölümü', url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'},
    {id:'s1-img', label:'Dijital Pazarlama', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'},
    {id:'s2-img', label:'Web Tasarım', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'},
    {id:'s3-img', label:'Kurumsal Kimlik', url:'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=900&q=80'},
    {id:'s4-img', label:'Halkla İlişkiler', url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80'},
    {id:'s5-img', label:'Medya Planlaması', url:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80'},
    {id:'s6-img', label:'Etkinlik Yönetimi', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'}
  ]
},
// ─── TR: HAKKIMIZDA ──────────────────────────────────────────
{
  id:'tr-about', lang:'TR', name:'Hakkımızda', path:'../about.html', icon:'👥',
  seo:{
    title:'Hakkımızda — Emek Ajans',
    description:'1967\'den bu yana İstanbul merkezli 360° entegre iletişim ajansı. Köklü deneyim, yeni nesil yetenekler.',
    keywords:'emek ajans hakkında, iletişim ajansı tarihçe, istanbul reklam ajansı',
    ogTitle:'Hakkımızda — Emek Ajans', ogDesc:'1967\'den bu yana güven üzerine kurulu bir miras.',
    ogImage:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200',
    canonical:'https://emekajans.com/about.html', hreflangTR:'https://emekajans.com/about.html', hreflangEN:'https://emekajans.com/en/about.html'
  },
  content:{
    heroTitle:'1967\'den bu yana.\nGüven üzerine kurulu bir miras.',
    storyLabel:'Hikayemiz', storyTitle:'Bir ajans değil,\nbir miras.',
    storyP1:'Emek Ajans, 1967 yılında İstanbul\'da kuruldu. On yıllar içinde sürekli büyüyerek tam hizmet 360° entegre iletişim ajansına dönüştük.',
    storyP2:'Derin pazar bilgimizi yeni nesil dijital yeteneklerle harmanlıyor, her müşterimize özel iletişim çözümleri geliştiriyoruz.',
    missionTitle:'Misyonumuz',
    missionText:'Markalar için ölçülebilir, sürdürülebilir ve yaratıcı iletişim çözümleri üretmek.',
    v1Title:'Güven', v1Desc:'57 yıllık deneyimimiz, her projede temel taşımızdır.',
    v2Title:'Yenilik', v2Desc:'Sektör trendlerinin önünde, teknolojiyi içselleştirerek.',
    v3Title:'Sonuç Odaklılık', v3Desc:'Her kampanya ölçülebilir hedeflerle planlanır.',
    v4Title:'Bütünleşik Yaklaşım', v4Desc:'360° hizmet anlayışıyla tüm kanallarda tutarlı iletişim.',
    teamTitle:'Ekibimiz', teamDesc:'Uzman kadromuzla markanız için en iyi sonuçları üretiyoruz.',
    ctaTitle:'Birlikte çalışalım.', ctaBtn:'İletişime Geç'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80'},
    {id:'story-img', label:'Hikaye Bölümü Fotoğraf', url:'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80'},
    {id:'cta-bg', label:'CTA Arka Plan', url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: PROJELERİMİZ ──────────────────────────────────────
{
  id:'tr-work', lang:'TR', name:'Projelerimiz', path:'../work.html', icon:'💼',
  seo:{
    title:'Projelerimiz — Emek Ajans',
    description:'Emek Ajans portföyü — kampanyalar, web tasarım, PR ve etkinlik yönetimi projeleri.',
    keywords:'emek ajans portföy, projeler, kampanya örnekleri, reklam projeleri',
    ogTitle:'Projelerimiz — Emek Ajans', ogDesc:'Paylaşmaya değer hikayeler.',
    ogImage:'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    canonical:'https://emekajans.com/work.html', hreflangTR:'https://emekajans.com/work.html', hreflangEN:'https://emekajans.com/en/work.html'
  },
  content:{
    heroTitle:'Paylaşmaya değer\nhikayeler.',
    filterAll:'Tümü', filterBrand:'Marka', filterDigital:'Dijital', filterPR:'PR', filterEvent:'Etkinlik',
    w1Title:'Açıkhava Marka Kampanyası', w1Client:'Kurumsal Müşteri',
    w2Title:'Kurumsal Kimlik Yenileme', w2Client:'Teknoloji Şirketi',
    w3Title:'Dijital Pazarlama Kampanyası', w3Client:'Perakende Markası',
    w4Title:'Kurumsal Etkinlik Yönetimi', w4Client:'Finans Sektörü',
    w5Title:'Kurumsal Web Sitesi', w5Client:'Üretim Firması',
    w6Title:'PR & İtibar Yönetimi', w6Client:'Lüks Marka'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80'},
    {id:'w1-img', label:'Proje 1: Açıkhava Kampanya', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'},
    {id:'w2-img', label:'Proje 2: Kurumsal Kimlik', url:'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=600&q=80'},
    {id:'w3-img', label:'Proje 3: Dijital Pazarlama', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'},
    {id:'w4-img', label:'Proje 4: Etkinlik', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'},
    {id:'w5-img', label:'Proje 5: Web Sitesi', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'},
    {id:'w6-img', label:'Proje 6: PR', url:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'}
  ]
},
// ─── TR: BLOG ───────────────────────────────────────────────
{
  id:'tr-blog', lang:'TR', name:'Blog', path:'../blog.html', icon:'📝',
  seo:{
    title:'Blog — Emek Ajans',
    description:'Dijital pazarlama, SEO, PR ve iletişim dünyasından içgörüler ve perspektifler.',
    keywords:'dijital pazarlama blogu, seo ipuçları, pr stratejisi, iletişim trendleri',
    ogTitle:'Blog — Emek Ajans', ogDesc:'Sektörden içgörüler ve perspektifler.',
    ogImage:'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1200',
    canonical:'https://emekajans.com/blog.html', hreflangTR:'https://emekajans.com/blog.html', hreflangEN:'https://emekajans.com/en/blog.html'
  },
  content:{
    heroTitle:'İçgörüler &\nperspektifler.',
    featuredTitle:'GEO ve Yapay Zeka: Yeni SEO Paradigması',
    featuredDesc:'Generative Engine Optimization nedir ve markanız için ne anlam ifade ediyor?',
    featuredTag:'Dijital Pazarlama', featuredDate:'15 Mart 2026',
    b1Title:'Markalar İçin Google Ads Rehberi', b1Tag:'Google Ads', b1Date:'10 Mart 2026',
    b2Title:'PR ve Kurumsal İletişimin Gücü', b2Tag:'Halkla İlişkiler', b2Date:'5 Mart 2026',
    b3Title:'2026 Web Tasarım Trendleri', b3Tag:'Web Tasarım', b3Date:'20 Şubat 2026'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1920&q=80'},
    {id:'featured-img', label:'Öne Çıkan Yazı Görseli', url:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80'}
  ]
},
// ─── TR: İLETİŞİM ───────────────────────────────────────────
{
  id:'tr-contact', lang:'TR', name:'İletişim', path:'../contact.html', icon:'✉️',
  seo:{
    title:'İletişim — Emek Ajans',
    description:'Emek Ajans ile iletişime geçin. İstanbul Etiler, Nispetiye Caddesi No:40/10.',
    keywords:'emek ajans iletişim, reklam ajansı istanbul, iletişim formu, ofis adresi',
    ogTitle:'İletişim — Emek Ajans', ogDesc:'Markanızı konuşmak ister misiniz?',
    ogImage:'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200',
    canonical:'https://emekajans.com/contact.html', hreflangTR:'https://emekajans.com/contact.html', hreflangEN:'https://emekajans.com/en/contact.html'
  },
  content:{
    heroTitle:'Markanız için\nbir konuşma başlatalım.',
    contactIntro:'Aklınızda belirli bir proje var mı ya da henüz keşif aşamasındanız? Her iki durumda da konuşmaya her zaman açığız.',
    formNameLabel:'Adınız Soyadınız', formEmailLabel:'E-posta Adresiniz',
    formCompanyLabel:'Şirket / Marka', formServiceLabel:'İlgilendiğiniz Hizmet',
    formMessageLabel:'Mesajınız', formSubmit:'Gönder',
    address:'Etiler, Nispetiye Cd. No:40/10\nGürel Apt., D:B, 34340\nBeşiktaş / İstanbul',
    phone:'+90 212 230 09 79', email:'info@emekajans.com', hours:'Pzt–Cum: 09:00–18:00'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan (İstanbul)', url:'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── EN: HOMEPAGE ────────────────────────────────────────────
{
  id:'en-index', lang:'EN', name:'Homepage', path:'../en/index.html', icon:'🏠',
  seo:{
    title:'Emek Ajans — Strategic Creative Communications Agency',
    description:'Istanbul-based 360° integrated communications agency founded in 1967. Digital marketing, web design, PR, media planning.',
    keywords:'advertising agency istanbul, digital marketing turkey, pr agency, media planning',
    ogTitle:'Emek Ajans — 360° Communications Agency', ogDesc:'Strategic communications since 1967.',
    ogImage:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    canonical:'https://emekajans.com/en/', hreflangTR:'https://emekajans.com/', hreflangEN:'https://emekajans.com/en/'
  },
  content:{
    heroHeadline:'Emek Ajans', heroTaglines:'strategic, creative, communications agency, Since 1967',
    heroCtaPrimary:'EXPLORE SERVICES', heroCtaSecondary:'OUR STORY',
    servicesTitle:'Our Services', servicesSubtitle:'Communications that create real impact, delivered under one roof.',
    svc1Title:'Digital Marketing', svc1Desc:'Measurable campaigns via Google Ads, social media, SEO and performance marketing.',
    svc2Title:'Web Design & Digital Experience', svc2Desc:'User-centric corporate websites, landing pages and e-commerce solutions.',
    svc3Title:'Brand Identity & Creative', svc3Desc:'Brand strategy, logo and visual identity systems to campaign creation.',
    svc4Title:'Public Relations & Communications', svc4Desc:'Media relations, reputation management, crisis communications and stakeholder advisory.',
    svc5Title:'Media Planning & Buying', svc5Desc:'Multi-channel media strategy across TV, radio, outdoor, print and digital.',
    svc6Title:'Event & Organization Management', svc6Desc:'Full event management from venue selection to production and brand activation.',
    aboutLabel:'About Us', aboutTitle:'Since 1967.\nReimagined for today.',
    aboutP1:'Founded in 1967 in Istanbul, Emek Ajans has evolved into a full-service 360° integrated communications agency.',
    aboutP2:'As a Google Partner and Meta Business Partner, we deliver measurable results across every channel.',
    aboutCta:'Read Our Story',
    ctaTitle:'Let\'s grow your brand together.', ctaSubtitle:'Ready to start a conversation?',
    footerTagline:'strategic · creative · communications agency · Since 1967 · Istanbul',
    footerCopyright:'© 2025 Emek Ajans. All rights reserved.'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80'},
    {id:'about-img', label:'About Section Photo', url:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'}
  ]
},
// ─── EN: SERVICES ────────────────────────────────────────────
{
  id:'en-services', lang:'EN', name:'Services', path:'../en/services.html', icon:'⚙️',
  seo:{
    title:'Services — Emek Ajans',
    description:'Digital marketing, web design, brand identity, PR, media planning and event management services.',
    keywords:'digital marketing agency, web design turkey, public relations istanbul',
    ogTitle:'Services — Emek Ajans', ogDesc:'Results-driven integrated services.',
    ogImage:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
    canonical:'https://emekajans.com/en/services.html', hreflangTR:'https://emekajans.com/services.html', hreflangEN:'https://emekajans.com/en/services.html'
  },
  content:{
    heroTitle:'Integrated services\nthat deliver results.',
    s1Title:'Digital Marketing', s1Desc:'Reach your target audience with Google Ads, Meta Ads, LinkedIn Ads and programmatic advertising.',
    s2Title:'Web Design & Digital Experience', s2Desc:'Fast, SEO-friendly digital experiences that best represent your brand.',
    s3Title:'Brand Identity & Creative', s3Desc:'Brand strategy, logo and visual identity systems.',
    s4Title:'Public Relations & Communications', s4Desc:'Strategic reputation management and stakeholder communications.',
    s5Title:'Media Planning & Buying', s5Desc:'Multi-channel media strategy across TV, radio, outdoor, print and digital.',
    s6Title:'Event & Organization Management', s6Desc:'Full event management from venue to production and brand activation.'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── EN: ABOUT ───────────────────────────────────────────────
{
  id:'en-about', lang:'EN', name:'About', path:'../en/about.html', icon:'👥',
  seo:{
    title:'About — Emek Ajans',
    description:'Istanbul-based 360° integrated communications agency since 1967. Deep market experience meets next-gen digital capabilities.',
    keywords:'emek ajans about, communications agency history, istanbul advertising agency',
    ogTitle:'About — Emek Ajans', ogDesc:'A legacy built on trust since 1967.',
    ogImage:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200',
    canonical:'https://emekajans.com/en/about.html', hreflangTR:'https://emekajans.com/about.html', hreflangEN:'https://emekajans.com/en/about.html'
  },
  content:{
    heroTitle:'Building brands\nsince 1967.',
    storyTitle:'Our Story', storyP1:'Emek Ajans was founded in 1967 in Istanbul. Over the decades we evolved into a full-service 360° integrated communications agency.',
    storyP2:'We combine deep market knowledge with next-generation digital capabilities.',
    v1Title:'Trust', v1Desc:'57 years of experience is the cornerstone of every project.',
    v2Title:'Innovation', v2Desc:'Ahead of industry trends, technology at our core.',
    v3Title:'Results', v3Desc:'Every campaign is planned with measurable goals.',
    v4Title:'Integrated Approach', v4Desc:'Consistent communication across all channels.',
    ctaTitle:'Let\'s work together.', ctaBtn:'Get in Touch'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80'},
    {id:'story-img', label:'Story Section Photo', url:'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80'}
  ]
},
// ─── EN: WORK ─────────────────────────────────────────────
{
  id:'en-work', lang:'EN', name:'Our Work', path:'../en/work.html', icon:'💼',
  seo:{
    title:'Our Work — Emek Ajans', description:'Emek Ajans portfolio — campaigns, web design, PR and events.',
    keywords:'emek ajans portfolio, campaign examples, advertising work turkey',
    ogTitle:'Our Work — Emek Ajans', ogDesc:'Stories worth sharing.',
    ogImage:'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    canonical:'https://emekajans.com/en/work.html', hreflangTR:'https://emekajans.com/work.html', hreflangEN:'https://emekajans.com/en/work.html'
  },
  content:{
    heroTitle:'Stories worth\nsharing.',
    filterAll:'All', filterBrand:'Brand', filterDigital:'Digital', filterPR:'PR', filterEvent:'Event',
    w1Title:'Outdoor Brand Campaign', w2Title:'Corporate Identity Redesign',
    w3Title:'Digital Marketing Campaign', w4Title:'Corporate Event Management',
    w5Title:'Corporate Website', w6Title:'PR & Reputation Management'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── EN: BLOG ─────────────────────────────────────────────
{
  id:'en-blog', lang:'EN', name:'Blog', path:'../en/blog.html', icon:'📝',
  seo:{
    title:'Blog — Emek Ajans', description:'Insights and perspectives from the world of digital marketing, PR and communications.',
    keywords:'digital marketing blog, seo tips, pr strategy, communications trends',
    ogTitle:'Blog — Emek Ajans', ogDesc:'Industry insights and perspectives.',
    ogImage:'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1200',
    canonical:'https://emekajans.com/en/blog.html', hreflangTR:'https://emekajans.com/blog.html', hreflangEN:'https://emekajans.com/en/blog.html'
  },
  content:{
    heroTitle:'Insights &\nperspektifler.',
    featuredTitle:'GEO & AI: The New SEO Paradigm', featuredDesc:'What is Generative Engine Optimization and what does it mean for your brand?',
    b1Title:'Google Ads 2025: Performance Max', b2Title:'PR Crisis Management Guide',
    b3Title:'Web Design Trends 2025', b4Title:'Campaign Optimisation with Data Analytics',
    b5Title:'Digital Integration in Event Marketing', b6Title:'Social Media Algorithms 2025'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1920&q=80'},
    {id:'featured-img', label:'Featured Post Image', url:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80'}
  ]
},
// ─── EN: CONTACT ──────────────────────────────────────────
{
  id:'en-contact', lang:'EN', name:'Contact', path:'../en/contact.html', icon:'✉️',
  seo:{
    title:'Contact — Emek Ajans', description:'Get in touch with Emek Ajans. Istanbul Etiler, Nispetiye Caddesi No:40/10.',
    keywords:'emek ajans contact, advertising agency istanbul, contact form',
    ogTitle:'Contact — Emek Ajans', ogDesc:"Let's have a conversation about your brand.",
    ogImage:'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200',
    canonical:'https://emekajans.com/en/contact.html', hreflangTR:'https://emekajans.com/contact.html', hreflangEN:'https://emekajans.com/en/contact.html'
  },
  content:{
    heroTitle:"Let's start\na conversation.",
    contactIntro:'Whether you have a specific project in mind or are still exploring, we are always open for a conversation.',
    address:'Etiler, Nispetiye Cd. No:40/10\nGürel Apt., D:B, 34340\nBeşiktaş / Istanbul',
    phone:'+90 212 230 09 79', email:'info@emekajans.com', hours:'Mon–Fri: 09:00–18:00'
  },
  images:[
    {id:'hero-bg', label:'Hero Background (Istanbul)', url:'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: KVKK ───────────────────────────────────────────────
{
  id:'tr-kvkk', lang:'TR', name:'KVKK Politikası', path:'../kvkk.html', icon:'⚖️',
  seo:{
    title:'KVKK ve Gizlilik Sözleşmesi — Emek Ajans',
    description:'Emek Ajans Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni.',
    keywords:'kvkk, kişisel verilerin korunması, aydınlatma metni, emek ajans',
    ogTitle:'KVKK ve Gizlilik Sözleşmesi — Emek Ajans', ogDesc:'Kişisel Verilerin Korunması Hakkında Bilgilendirme.',
    ogImage:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    canonical:'https://emekajans.com/kvkk.html', hreflangTR:'https://emekajans.com/kvkk.html', hreflangEN:'https://emekajans.com/en/kvkk.html'
  },
  content:{
    heroLabel:'Yasal', heroTitle:'KVKK ve Gizlilik Sözleşmesi',
    contentTitle:'KVKK ve Gizlilik Sözleşmesi',
    introText:'Bu web sitesini ziyaret etmeniz ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmanız sırasında, size ve talep ettiğiniz hizmetlere ilişkin olarak elde ettiğimiz bilgilerin ne şekilde kullanılacağı ve korunacağı, işbu "Gizlilik Politikası"nda belirtilen şartlara tabidir.',
    sec1Title:'I. Kişisel verilerin korunması ve işlenmesi politikasının amacı',
    sec1Text:'Https://www.emekajans.com sitesindeki her türlü veri EMEK AJANS’ın mülkiyetindedir.',
    sec2Title:'II. Kişisel verilerin korunması ve işlenmesi politikasının kapsamı',
    sec2Text:'Şirketimiz tarafından hazırlanan bu Politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu’na (“KVKK”) uygun olarak hazırlanmıştır.',
    sec3Title:'III. Kişisel verilerin işlenmesi ile ilgili temel kurallar',
    sec3List:'<li><strong>Hukuka ve dürüstlük kurallarına uygun olma:</strong> Şirketimiz verilerin kaynağını sorgular.</li><li><strong>Doğru ve gerektiğinde güncel olma:</strong> Doğru ve güncel veriye önem veririz.</li><li><strong>Belirli, açık ve meşru amaçlar için işlenme:</strong> Sadece onaylanan amaçlarla işlenir.</li>',
    rightsTitle:'İlgili Kişinin Hakları (KVKK m.11)',
    rightsList:'<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li><li>Bilgi talep etme,</li><li>İşlenme amacını öğrenme,</li><li>Aktarılan kişileri bilme,</li>',
    securityTitle:'Gizlilik ve Veri Güvenliği',
    securityText:'Kişisel veriler gizlidir ve tarafımızca korunmaktadır.',
    contactTitle:'İletişim',
    contactText:'<strong>EMEK AJANS LİMİDET ŞİRKETİ</strong><br>Adres: Etiler, Nispetiye Cd. No:40/10, Beşiktaş/İstanbul'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: ÇEREZ POLİTİKASI ────────────────────────────────────
{
  id:'tr-cookies', lang:'TR', name:'Çerez Politikası', path:'../cerez-politikasi.html', icon:'🍪',
  seo:{
    title:'Çerez Politikası — Emek Ajans', description:'Emek Ajans Çerez Politikası.',
    keywords:'çerez politikası, cookies, emek ajans',
    ogTitle:'Çerez Politikası — Emek Ajans', ogDesc:'Çerez kullanım detayları.',
    ogImage:'https://images.unsplash.com/photo-1590059302758-1f19f20e402a?w=1200',
    canonical:'https://emekajans.com/cerez-politikasi.html', hreflangTR:'https://emekajans.com/cerez-politikasi.html', hreflangEN:'https://emekajans.com/en/cookie-policy.html'
  },
  content:{
    heroLabel:'Yasal', heroTitle:'Çerez Politikası',
    contentTitle:'Çerez Politikası',
    introText:'Deneyiminizi geliştirmek için çerezler kullanıyoruz.',
    whatIsTitle:'1. Çerez Nedir?', whatIsText:'Küçük metin dosyalarıdır.',
    purposesTitle:'2. Kullanım Amaçları', purposesList:'<li>Analiz</li><li>Performans</li>',
    controlTitle:'4. Kontrol', controlText:'Tarayıcı ayarlarından yönetilebilir.',
    contactTitle:'İletişim', contactText:'info@emekajans.com'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1590059302758-1f19f20e402a?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── EN: KVKK ───────────────────────────────────────────────
{
  id:'en-kvkk', lang:'EN', name:'KVKK Policy', path:'../en/kvkk.html', icon:'⚖️',
  seo:{
    title:'KVKK and Privacy — Emek Ajans', description:'KVKK and Privacy Policy.',
    ogTitle:'KVKK and Privacy — Emek Ajans',
    ogImage:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    canonical:'https://emekajans.com/en/kvkk.html', hreflangTR:'https://emekajans.com/kvkk.html', hreflangEN:'https://emekajans.com/en/kvkk.html'
  },
  content:{
    heroLabel:'Legal', heroTitle:'KVKK and Privacy Agreement',
    contentTitle:'KVKK and Privacy Agreement',
    introText:'By visiting this site, you accept our privacy terms.',
    contactTitle:'Contact', contactText:'info@emekajans.com'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── EN: COOKIE POLICY ────────────────────────────────────
{
  id:'en-cookies', lang:'EN', name:'Cookie Policy', path:'../en/cookie-policy.html', icon:'🍪',
  seo:{
    title:'Cookie Policy — Emek Ajans', description:'Cookie Policy details.',
    ogTitle:'Cookie Policy — Emek Ajans',
    ogImage:'https://images.unsplash.com/photo-1590059302758-1f19f20e402a?w=1200',
    canonical:'https://emekajans.com/en/cookie-policy.html', hreflangTR:'https://emekajans.com/cerez-politikasi.html', hreflangEN:'https://emekajans.com/en/cookie-policy.html'
  },
  content:{
    heroLabel:'Legal', heroTitle:'Cookie Policy',
    contentTitle:'Cookie Policy',
    introText:'We use cookies to improve your experience.',
    contactTitle:'Contact', contactText:'info@emekajans.com'
  },
  images:[
    {id:'hero-bg', label:'Hero Background', url:'https://images.unsplash.com/photo-1590059302758-1f19f20e402a?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: BLOG DETAY (Template) ──────────────────────────────
{
  id:'tr-blog-detay', lang:'TR', name:'Blog Detay', path:'../blog-detay.html', icon:'📄',
  seo:{ title:'Blog — Emek Ajans', description:'Blog okuma.' },
  content:{}, images:[]
},
// ─── EN: BLOG DETAIL (Template) ─────────────────────────────
{
  id:'en-blog-detail', lang:'EN', name:'Blog Detail', path:'../en/blog-detail.html', icon:'📄',
  seo:{ title:'Blog — Emek Ajans', description:'Blog reading.' },
  content:{}, images:[]
}
];

const BLOG_POSTS = [
  {
    id: 'post-1', lang: 'TR',
    title: 'GEO ve Yapay Zeka: Yeni SEO Paradigması',
    slug: 'geo-ve-yapay-zeka',
    tag: 'Dijital Pazarlama',
    date: '15 Mart 2026',
    author: 'Emek Ajans',
    desc: 'Generative Engine Optimization nedir ve markanız için ne anlam ifade ediyor?',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
    content: `
      <p>Yapay zeka arama motorlarını değiştiriyor. Artık sadece Google'ın mavi linkleri değil, ChatGPT, Gemini ve Perplexity gibi üretken yanıt motorları (Generative Engines) hayatımızda. Bu yeni dönemde markaların görünür kalması için <strong>GEO (Generative Engine Optimization)</strong> kaçınılmaz hale geliyor.</p>
      <blockquote>"Yapay zeka asistanları, kullanıcıya doğrudan yanıt vererek arama deneyimini kişiselleştiriyor."</blockquote>
      <h2>GEO Nedir?</h2>
      <p>GEO, içeriğinizin yapay zeka tarafından taranabilir, anlaşılabilir ve alıntılanabilir/önerilebilir hale getirilmesi sürecidir. Klasik SEO'dan farklı olarak, burada otorite, doğruluk ve bağlam çok daha kritiktir.</p>
      <h3>Markalar ne yapmalı?</h3>
      <ul>
        <li>Veriyi yapılandırılmış formatta sunun (Schema.org).</li>
        <li>Soru-cevap odaklı içerikler üretin.</li>
        <li>Otorite sinyallerini (E-E-A-T) güçlendirin.</li>
      </ul>
    `
  },
  {
    id: 'post-2', lang: 'TR',
    title: 'Markalar İçin Google Ads Rehberi',
    slug: 'google-ads-rehberi',
    tag: 'Google Ads',
    date: '10 Mart 2026',
    author: 'Emek Ajans',
    desc: 'Yapay zeka destekli Performans Max kampanyaları ile dönüşümleri artırma yolları.',
    img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Google Ads ekosistemi tamamen otomasyona dönüyor. Performans Max (PMax), markaların tek bir kampanya ile tüm Google envanterine (YouTube, Search, Display, Gmail, Maps) erişmesini sağlıyor.</p>
      <h2>Yapay Zeka Destekli Reklamcılık</h2>
      <p>PMax, Google'ın makine öğrenimi teknolojisini kullanarak doğru kullanıcıyı, doğru zamanda, doğru mesajla yakalamanıza olanak tanır. Artık anahtar kelime eşleşmelerinden ziyade, niyet ve sinyal odaklı bir yaklaşım ön planda.</p>
      <h3>Başarılı Bir PMax Kampanyası İçin İpuçları:</h3>
      <ul>
        <li>Varlık Gruplarını (Asset Groups) zenginleştirin: Kaliteli görseller ve etkileyici videolar ekleyin.</li>
        <li>Birinci taraf verilerinizi (Müşteri listeleri) sisteme besleyin.</li>
        <li>Dönüşüm değerlerine odaklanın.</li>
      </ul>
    `
  },
  {
    id: 'post-3', lang: 'TR',
    title: 'PR ve Kurumsal İletişimin Gücü',
    slug: 'pr-ve-kurumsal-iletisim',
    tag: 'Halkla İlişkiler',
    date: '5 Mart 2026',
    author: 'Emek Ajans',
    desc: 'Güçlü bir iletişim stratejisi uzun vadeli marka değerini nasıl açığa çıkarır?',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Halkla ilişkiler (PR), bir markanın sadece ne söylediği değil, başkalarının onun hakkında ne düşündüğüdür. Dijital gürültünün arttığı bu dönemde, güvenilir bir ses olmak her zamankinden daha değerli.</p>
      <h2>Stratejik İletişim Sanatı</h2>
      <p>Kurumsal iletişim, markanın DNA'sını tüm paydaşlara doğru şekilde aktarma sanatıdır. İyi bir PR stratejisi sadece kriz anında değil, büyüme ve sürdürülebilirlik yolculuğunda da en büyük destekçinizdir.</p>
      <h3>İtibar Yönetiminin 3 Temel Taşı:</h3>
      <ol>
        <li><strong>Şeffaflık:</strong> Gerçekçi ve dürüst iletişim kurun.</li>
        <li><strong>Süreklilik:</strong> Marka sesinizi her platformda tutarlı kılın.</li>
        <li><strong>Hikaye Anlatıcılığı:</strong> İnsanların bağ kurabileceği gerçek hikayeler anlatın.</li>
      </ol>
    `
  },
  {
    id: 'post-4', lang: 'TR',
    title: '2026 Web Tasarım Trendleri',
    slug: '2026-web-tasarim-trendleri',
    tag: 'Web Tasarım',
    date: '20 Şubat 2026',
    author: 'Emek Ajans',
    desc: 'Kullanıcı deneyimi ve hızın ötesinde, yeni nesil görsel diller.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Modern web tasarımı artık sadece estetik değil, bir performans ve erişilebilirlik yarışıdır. 2026 yılında kullanıcılar daha kişiselleştirilmiş, hızlı ve etkileşimli deneyimler bekliyor.</p>
      <h2>UX ve Psikoloji</h2>
      <p>Kullanıcıların kararlarını etkileyen mikro-interaksiyonlar ve renk teorileri 2026'da ön planda. Karanlık modun evrimi, Bento Grid mizanpajları ve yapay zeka tarafından üretilen dinamik içerik alanları tasarım dünyasını şekillendiriyor.</p>
      <h3>Öne Çıkan Trendler:</h3>
      <ul>
        <li>Bento Grid Layouts: Modüler ve düzenli içerik sunumu.</li>
        <li>Görsel Hiyerarşi ve Tipografi: Daha cesur ve karakteristik fontlar.</li>
        <li>Yapay Zeka Yardımlı Tasarım: Kullanıcı davranışına göre değişen dinamik arayüzler.</li>
      </ul>
    `
  },
  {
    id: 'post-5', lang: 'TR',
    title: 'Birinci Taraf Veri Stratejisi',
    slug: 'birinci-taraf-veri',
    tag: 'Veri · Analitik',
    date: '10 Şubat 2026',
    author: 'Emek Ajans',
    desc: 'Çerezsiz dünyada markaların en büyük kozu: Kendi verileri.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Üçüncü taraf çerezlerin kalkmasıyla beraber, markalar kendi topluluklarından gelen verilere odaklanmalı. Birinci taraf veri (First-party data), müşterilerinizle doğrudan kurduğunuz ilişkilerden elde ettiğiniz en değerli varlıktır.</p>
      <h2>Veri Odaklı Büyüme</h2>
      <p>CRM entegrasyonları, sadakat programları ve doğrudan anketler ile toplanan veriler, pazarlama bütçenizi çok daha verimli kullanmanızı sağlar.</p>
    `
  },
  {
    id: 'post-6', lang: 'TR',
    title: 'Canlı Etkinliklerin Dönüşü',
    slug: 'canlı-etkinlikler',
    tag: 'Etkinlik Yönetimi',
    date: '1 Şubat 2026',
    author: 'Emek Ajans',
    desc: 'Fiziksel deneyimlerin dijitalle harmanlandığı yeni organizasyon çağı.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>İnsanlar artık daha gerçek ve dokunulabilir deneyimler arıyor. Hibrit etkinlikler, fiziksel katılımın enerjisini dijitalin erişilebilirliğiyle birleştiriyor.</p>
      <h2>Deneyim Tasarımı</h2>
      <p>Bir etkinliği unutulmaz kılan şey, katılımcılara hissettirdiği duygulardır. Marka aktivasyonlarında teknoloji ve insan dokunuşu dengesi kritik önem taşıyor.</p>
    `
  },
  {
    id: 'post-7', lang: 'TR',
    title: 'Sosyal Medyada Topluluk Oluşturmak',
    slug: 'sosyal-medya-topluluk',
    tag: 'Sosyal Medya',
    date: '25 Ocak 2026',
    author: 'Emek Ajans',
    desc: 'Takipçi sayısından daha önemlisi: Sadık bir komünite.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Markalar artık sadece yayıncı değil, birer topluluk lideri olmak zorunda. Tek yönlü iletişim devri kapandı; etkileşim ve diyalog devri başladı.</p>
      <h2>Topluluk Yönetimi Stratejileri</h2>
      <p>Kullanıcı tarafından oluşturulan içerikler (UGC), canlı yayınlar ve interaktif hikayeler ile topluluğunuzu markanızın bir parçası haline getirin.</p>
    `
  },
  // ─── EN POSTS ──────────────────────────────────────────────
  {
    id: 'post-1', lang: 'EN',
    title: 'GEO & AI: The New SEO Paradigm',
    slug: 'geo-and-ai',
    tag: 'Digital Marketing',
    date: 'March 15, 2026',
    author: 'Emek Ajans',
    desc: 'What is Generative Engine Optimization and what does it mean for your brand?',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
    content: `
      <p>Artificial intelligence is transforming search engines. We are no longer just living with Google's blue links, but with generative response engines like ChatGPT, Gemini, and Perplexity. In this new era, <strong>GEO (Generative Engine Optimization)</strong> is becoming essential for brands to remain visible.</p>
      <blockquote>"AI assistants are personalizing the search experience by providing direct answers to the user."</blockquote>
      <h2>What is GEO?</h2>
      <p>GEO is the process of making your content crawlable, understandable, and quotable/recommendable by AI. Unlike classic SEO, authority, accuracy, and context are much more critical here.</p>
      <h3>What should brands do?</h3>
      <ul>
        <li>Present data in a structured format (Schema.org).</li>
        <li>Produce question-and-answer oriented content.</li>
        <li>Strengthen authority signals (E-E-A-T).</li>
      </ul>
    `
  },
  {
    id: 'post-2', lang: 'EN',
    title: 'Google Ads Guide for Brands',
    slug: 'google-ads-guide',
    tag: 'Google Ads',
    date: 'March 10, 2026',
    author: 'Emek Ajans',
    desc: 'Ways to increase conversions with AI-powered Performance Max campaigns.',
    img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>The Google Ads ecosystem is turning entirely towards automation. Performance Max (PMax) allows brands to reach the entire Google inventory (YouTube, Search, Display, Gmail, Maps) with a single campaign.</p>
      <h2>AI-Powered Advertising</h2>
      <p>PMax uses Google's machine learning technology to capture the right user, at the right time, with the right message. The trend is moving towards an intent and signal-oriented approach rather than keyword matches.</p>
      <h3>Tips for a Successful PMax Campaign:</h3>
      <ul>
        <li>Enrich Asset Groups: Add high-quality images and engaging videos.</li>
        <li>Feed your first-party data (Customer lists) into the system.</li>
        <li>Focus on conversion values.</li>
      </ul>
    `
  },
  {
    id: 'post-3', lang: 'EN',
    title: 'PR & The Power of Corporate Communication',
    slug: 'pr-and-corporate-communication',
    tag: 'Public Relations',
    date: 'March 5, 2026',
    author: 'Emek Ajans',
    desc: 'How a strong communication strategy unlocks long-term brand value.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Public relations (PR) is not just what a brand says, but what others think of it. In this era of increased digital noise, being a trusted voice is more valuable than ever.</p>
      <h2>The Art of Strategic Communication</h2>
      <p>Corporate communication is the art of correctly conveying the brand's DNA to all stakeholders. A good PR strategy is your greatest supporter not only in times of crisis but also on the journey of growth and sustainability.</p>
      <h3>3 Cornerstones of Reputation Management:</h3>
      <ol>
        <li><strong>Transparency:</strong> Establish realistic and honest communication.</li>
        <li><strong>Continuity:</strong> Make your brand voice consistent on every platform.</li>
        <li><strong>Storytelling:</strong> Tell real stories that people can connect with.</li>
      </ol>
    `
  },
  {
    id: 'post-4', lang: 'EN',
    title: '2026 Web Design Trends',
    slug: '2026-web-design-trends',
    tag: 'Web Design',
    date: 'February 20, 2026',
    author: 'Emek Ajans',
    desc: 'New generation visual languages beyond user experience and speed.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Modern web design is no longer just about aesthetics, but a race for performance and accessibility. In 2026, users expect more personalized, fast, and interactive experiences.</p>
      <h2>UX and Psychology</h2>
      <p>Micro-interactions and color theories influencing user decisions are at the forefront in 2026. The evolution of dark mode, Bento Grid layouts, and dynamic content areas generated by AI are shaping the design world.</p>
      <h3>Highlight Trends:</h3>
      <ul>
        <li>Bento Grid Layouts: Modular and organized content presentation.</li>
        <li>Visual Hierarchy and Typography: Bolder and more characteristic fonts.</li>
        <li>AI-Assisted Design: Dynamic interfaces that change according to user behavior.</li>
      </ul>
    `
  },
  {
    id: 'post-5', lang: 'EN',
    title: 'First Party Data Strategy',
    slug: 'first-party-data',
    tag: 'Data · Analytics',
    date: 'February 10, 2026',
    author: 'Emek Ajans',
    desc: 'The greatest asset for brands in a cookie-less world: Their own data.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>With the removal of third-party cookies, brands must focus on data coming from their own communities. First-party data is the most valuable asset you obtain from the direct relationships you build with your customers.</p>
      <h2>Data-Driven Growth</h2>
      <p>Data collected through CRM integrations, loyalty programs, and direct surveys allows you to use your marketing budget much more efficiently.</p>
    `
  },
  {
    id: 'post-6', lang: 'EN',
    title: 'The Return of Live Events',
    slug: 'live-events',
    tag: 'Event Management',
    date: 'February 1, 2026',
    author: 'Emek Ajans',
    desc: 'The new organization era where physical experiences are blended with digital.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>People are now looking for more real and touchable experiences. Hybrid events combine the energy of physical participation with the accessibility of digital.</p>
      <h2>Experience Design</h2>
      <p>What makes an event unforgettable is the emotions it makes the participants feel. The balance between technology and human touch is critical in brand activations.</p>
    `
  },
  {
    id: 'post-7', lang: 'EN',
    title: 'Building Community in Social Media',
    slug: 'social-media-community',
    tag: 'Social Media',
    date: 'January 25, 2026',
    author: 'Emek Ajans',
    desc: 'More important than the number of followers: A loyal community.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=700&q=80',
    content: `
      <p>Brands now have to be community leaders, not just publishers. The era of one-way communication is over; the era of interaction and dialogue has begun.</p>
      <h2>Community Management Strategies</h2>
      <p>Make your community a part of your brand with user-generated content (UGC), live broadcasts, and interactive stories.</p>
    `
  }
];
