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
    // HERO
    heroHeadline:'Emek Ajans',
    heroTaglines:'stratejik, yaratıcı, iletişim ajansı, 1967\'den beri',
    heroCtaPrimary:'HİZMETLERİ KEŞFET', heroCtaSecondary:'HİKÂYEMİZ',
    // HİZMETLER
    servicesLabel:'Hizmetlerimiz', servicesTitle:'Hizmetlerimiz',
    servicesSubtitle:'Dijital pazarlamadan medya planlamasına, web tasarımdan etkinlik yönetimine kadar tüm iletişim hizmetlerini tek çatı altında sunuyoruz.',
    svc1Title:'Dijital Pazarlama', svc1Desc:'Google Ads, sosyal medya, SEO ve performans pazarlama ile ölçülebilir kampanyalar kuruyoruz.',
    svc2Title:'Web Tasarım & Dijital Deneyim', svc2Desc:'Kullanıcı odaklı kurumsal web siteleri, landing page\'ler ve e-ticaret çözümleri tasarlıyoruz.',
    svc3Title:'Kurumsal Kimlik & Yaratıcı', svc3Desc:'Marka stratejisi, logo ve görsel kimlik sistemlerinden kampanya yaratımına kadar eksiksiz hizmet.',
    svc4Title:'Halkla İlişkiler & İletişim', svc4Desc:'Basın ilişkileri, itibar yönetimi, kriz iletişimi ve paydaş iletişimi danışmanlığı sunuyoruz.',
    svc5Title:'Medya Planlaması & Satın Alma', svc5Desc:'TV, radyo, açıkhava, baskı ve dijital mecralarda çok kanallı medya stratejisi ve satın alma.',
    svc6Title:'Etkinlik & Organizasyon Yönetimi', svc6Desc:'Mekân seçiminden prodüksiyona, lojistikten marka aktivasyonuna tam etkinlik yönetimi.',
    // HAKKIMIZDA ŞERİDİ
    aboutLabel:'Hakkımızda', aboutTitle:'1967\'den beri.\nGünümüz için yeniden.',
    aboutP1:'1967\'den bu yana İstanbul\'dan dünyaya uzanan Emek Ajans; köklü pazar deneyimini yeni nesil dijital yeteneklerle harmanlayan 360° entegre iletişim ajansıdır.',
    aboutP2:'Google Partner ve Meta Business Partner sertifikalarımızla, markanız için her kanalda ölçülebilir sonuçlar üretiyoruz.',
    aboutCta:'Hikâyemizi Oku',
    // PORTFÖY
    portfolioLabel:'Çalışmalarımız', portfolioTitle:'Hikâyelerimiz, paylaşmak için.',
    port1Label:'Marka Kampanyası', port2Label:'Sosyal Medya', port3Label:'Medya Planlaması',
    port4Label:'Etkinlik Yönetimi', port5Label:'Web Tasarım', port6Label:'Halkla İlişkiler',
    // BLOG
    blog1Title:'GEO ve Yapay Zeka: Yeni SEO Paradigması',
    blog1Desc:'Generative Engine Optimization dijital pazarlamayı nasıl dönüştürüyor?',
    blog2Title:'Google Ads 2025: Performans Max Kampanyaları',
    blog2Desc:'Yapay zeka destekli bu kampanya tipi neden vazgeçilmez hale geldi?',
    blog3Title:'Web Tasarımda 2025 Trendleri',
    blog3Desc:'Kullanıcı deneyimini merkeze alan yeni tasarım dilleri ve yaklaşımlar.',
    // CTA
    ctaTitle:'Markanızı birlikte büyütelim.', ctaSubtitle:'Projenizi konuşmak ister misiniz?',
    ctaBtn:'İletişime Geç',
    // FOOTER
    footerTagline:'stratejik · yaratıcı · iletişim ajansı · 1967\'den Beri · İstanbul',
    footerServices:'Hizmetler', footerWork:'Çalışmalarımız', footerAbout:'Hakkımızda',
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
    canonical:'https://emekajans.com/services.html',
    hreflangTR:'https://emekajans.com/services.html', hreflangEN:'https://emekajans.com/en/services.html'
  },
  content:{
    heroTitle:'Ölçülebilir sonuçlar\nüreten entegre hizmetler.',
    // Strateji bölümü
    strategyTitle:'Strateji & Analiz', strategyDesc:'Her kampanya, derinlemesine pazar araştırması ve rekabet analiziyle başlar.',
    // 6 hizmet detay
    s1Title:'Dijital Pazarlama', s1Tag:'Performans', s1Desc:'Google Ads, Meta Ads, LinkedIn Ads ve programatik reklamcılık ile hedef kitlenize ulaşın.',s1Detail:'SEO · SEM · Sosyal Medya Reklamları · Remarketing · E-posta Pazarlama',
    s2Title:'Web Tasarım & Dijital Deneyim', s2Tag:'Teknoloji', s2Desc:'Markanızı en etkili şekilde temsil eden, hızlı ve SEO uyumlu dijital deneyimler.',s2Detail:'Kurumsal Site · Landing Page · E-ticaret · UI/UX Tasarım',
    s3Title:'Kurumsal Kimlik & Yaratıcı', s3Tag:'Yaratıcı', s3Desc:'Marka stratejisi, logo ve görsel kimlik sistemleri.',s3Detail:'Logo · Marka Rehberi · Ambalaj · Kampanya Yaratımı',
    s4Title:'Halkla İlişkiler & Kurumsal İletişim', s4Tag:'İletişim', s4Desc:'Stratejik itibar yönetimi ve paydaş iletişimi.',s4Detail:'Basın Bülteni · Medya İlişkileri · Kriz İletişimi · Sözcü Eğitimi',
    s5Title:'Medya Planlaması & Satın Alma', s5Tag:'Medya', s5Desc:'TV, radyo, açıkhava, baskı ve dijitalde çok kanallı strateji.',s5Detail:'TV · Radyo · OOH · Baskı · Dijital Medya',
    s6Title:'Etkinlik & Organizasyon Yönetimi', s6Tag:'Etkinlik', s6Desc:'Mekân seçiminden prodüksiyona tam etkinlik yönetimi.',s6Detail:'Kurumsal Etkinlik · Ürün Lansmanı · Basın Toplantısı · Fuar',
    // Dijital sub-kartlar
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
    {id:'s6-img', label:'Etkinlik Yönetimi', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'},
    {id:'dig1-img', label:'Dijital: Google Ads', url:'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=600&q=80'},
    {id:'dig2-img', label:'Dijital: Sosyal Medya', url:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80'},
    {id:'dig3-img', label:'Dijital: SEO', url:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'},
    {id:'dig4-img', label:'Dijital: Web', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'}
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
    canonical:'https://emekajans.com/about.html',
    hreflangTR:'https://emekajans.com/about.html', hreflangEN:'https://emekajans.com/en/about.html'
  },
  content:{
    heroTitle:'1967\'den bu yana.\nGüven üzerine kurulu bir miras.',
    storyLabel:'Hikayemiz', storyTitle:'Bir ajans değil,\nbir miras.',
    storyP1:'Emek Ajans, 1967 yılında İstanbul\'da kuruldu. On yıllar içinde sürekli büyüyerek tam hizmet 360° entegre iletişim ajansına dönüştük.',
    storyP2:'Derin pazar bilgimizi yeni nesil dijital yeteneklerle harmanlıyor, her müşterimize özel iletişim çözümleri geliştiriyoruz.',
    storyP3:'Google Partner ve Meta Business Partner olarak sektörün önünde ilerliyoruz.',
    missionTitle:'Misyonumuz',
    missionText:'Markalar için ölçülebilir, sürdürülebilir ve yaratıcı iletişim çözümleri üretmek.',
    v1Title:'Güven', v1Desc:'57 yıllık deneyimimiz, her projede temel taşımızdır.',
    v2Title:'Yenilik', v2Desc:'Sektör trendlerinin önünde, teknolojiyi içselleştirerek.',
    v3Title:'Sonuç Odaklılık', v3Desc:'Her kampanya ölçülebilir hedeflerle planlanır.',
    v4Title:'Bütünleşik Yaklaşım', v4Desc:'360° hizmet anlayışıyla tüm kanallarda tutarlı iletişim.',
    teamTitle:'Ekibimiz', teamDesc:'Uzman kadromuzla markanız için en iyi sonuçları üretiyoruz.',
    ctaTitle:'Birlikte çalışalım.', ctaSubtitle:'Projenizi konuşmak için bize ulaşın.',
    ctaBtn:'İletişime Geç'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80'},
    {id:'story-img', label:'Hikaye Bölümü Fotoğraf', url:'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80'},
    {id:'team-bg', label:'Ekip Fotoğrafı', url:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80'},
    {id:'cta-bg', label:'CTA Arka Plan', url:'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80'}
  ]
},
// ─── TR: ÇALIŞMALARIMIZ ──────────────────────────────────────
{
  id:'tr-work', lang:'TR', name:'Çalışmalarımız', path:'../work.html', icon:'💼',
  seo:{
    title:'Çalışmalarımız — Emek Ajans',
    description:'Emek Ajans portföyü — kampanyalar, web tasarım, PR ve etkinlik yönetimi projeleri.',
    keywords:'emek ajans portföy, çalışmalar, kampanya örnekleri, reklam projeleri',
    ogTitle:'Çalışmalarımız — Emek Ajans', ogDesc:'Paylaşmaya değer hikayeler.',
    ogImage:'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    canonical:'https://emekajans.com/work.html',
    hreflangTR:'https://emekajans.com/work.html', hreflangEN:'https://emekajans.com/en/work.html'
  },
  content:{
    heroTitle:'Paylaşmaya değer\nhikayeler.',
    filterAll:'Tümü', filterBrand:'Marka', filterDigital:'Dijital', filterPR:'PR', filterEvent:'Etkinlik',
    w1Title:'Açıkhava Marka Kampanyası', w1Client:'Kurumsal Müşteri', w1Cat:'Marka',
    w2Title:'Kurumsal Kimlik Yenileme', w2Client:'Teknoloji Şirketi', w2Cat:'Marka',
    w3Title:'Dijital Pazarlama Kampanyası', w3Client:'Perakende Markası', w3Cat:'Dijital',
    w4Title:'Kurumsal Etkinlik Yönetimi', w4Client:'Finans Sektörü', w4Cat:'Etkinlik',
    w5Title:'Kurumsal Web Sitesi', w5Client:'Üretim Firması', w5Cat:'Dijital',
    w6Title:'PR & İtibar Yönetimi', w6Client:'Lüks Marka', w6Cat:'PR',
    w7Title:'Sosyal Medya Yönetimi', w7Client:'FMCG Markası', w7Cat:'Dijital',
    w8Title:'SEO & İçerik Stratejisi', w8Client:'E-ticaret', w8Cat:'Dijital'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80'},
    {id:'w1-img', label:'Proje 1: Açıkhava Kampanya', url:'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'},
    {id:'w2-img', label:'Proje 2: Kurumsal Kimlik', url:'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=600&q=80'},
    {id:'w3-img', label:'Proje 3: Dijital Pazarlama', url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'},
    {id:'w4-img', label:'Proje 4: Etkinlik', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'},
    {id:'w5-img', label:'Proje 5: Web Sitesi', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'},
    {id:'w6-img', label:'Proje 6: PR', url:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'},
    {id:'w7-img', label:'Proje 7: Sosyal Medya', url:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80'},
    {id:'w8-img', label:'Proje 8: SEO', url:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'}
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
    canonical:'https://emekajans.com/blog.html',
    hreflangTR:'https://emekajans.com/blog.html', hreflangEN:'https://emekajans.com/en/blog.html'
  },
  content:{
    heroTitle:'İçgörüler &\nperspektifler.',
    featuredTitle:'GEO ve Yapay Zeka: Yeni SEO Paradigması',
    featuredDesc:'Generative Engine Optimization nedir ve markanız için ne anlam ifade ediyor?',
    featuredTag:'Dijital Pazarlama', featuredDate:'15 Mart 2025',
    b1Title:'Google Ads 2025: Performans Max', b1Tag:'Google Ads', b1Date:'10 Mart 2025',
    b1Desc:'Performans Max kampanyaları neden vazgeçilmez hale geldi?',
    b2Title:'PR Kriz Yönetimi Rehberi', b2Tag:'Halkla İlişkiler', b2Date:'5 Mart 2025',
    b2Desc:'Dijital çağda kurumsal itibarı korumak için 8 kritik adım.',
    b3Title:'Web Tasarımda 2025 Trendleri', b3Tag:'Web Tasarım', b3Date:'28 Şubat 2025',
    b3Desc:'Kullanıcı deneyimini merkeze alan yeni tasarım dilleri.',
    b4Title:'Veri Analitiği ile Kampanya Optimizasyonu', b4Tag:'Analitik', b4Date:'20 Şubat 2025',
    b4Desc:'Veri odaklı kararlar nasıl kampanya performansını artırır?',
    b5Title:'Etkinlik Pazarlamasında Dijital Entegrasyon', b5Tag:'Etkinlik', b5Date:'14 Şubat 2025',
    b5Desc:'Fiziksel etkinlikleri dijital dünyaya taşımanın yolları.',
    b6Title:'Sosyal Medya Algoritmaları 2025', b6Tag:'Sosyal Medya', b6Date:'7 Şubat 2025',
    b6Desc:'Instagram, LinkedIn ve TikTok algoritmalarında neler değişti?'
  },
  images:[
    {id:'hero-bg', label:'Hero Arka Plan', url:'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1920&q=80'},
    {id:'featured-img', label:'Öne Çıkan Yazı Görseli', url:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80'},
    {id:'b1-img', label:'Blog 1: Google Ads', url:'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80'},
    {id:'b2-img', label:'Blog 2: PR', url:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80'},
    {id:'b3-img', label:'Blog 3: Web Tasarım', url:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80'},
    {id:'b4-img', label:'Blog 4: Analitik', url:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80'},
    {id:'b5-img', label:'Blog 5: Etkinlik', url:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80'},
    {id:'b6-img', label:'Blog 6: Sosyal Medya', url:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=700&q=80'}
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
    canonical:'https://emekajans.com/contact.html',
    hreflangTR:'https://emekajans.com/contact.html', hreflangEN:'https://emekajans.com/en/contact.html'
  },
  content:{
    heroTitle:'Markanız için\nbir konuşma başlatalım.',
    contactIntro:'Aklınızda belirli bir proje var mı ya da henüz keşif aşamasındanız? Her iki durumda da konuşmaya her zaman açığız.',
    formNameLabel:'Adınız Soyadınız', formEmailLabel:'E-posta Adresiniz',
    formCompanyLabel:'Şirket / Marka', formServiceLabel:'İlgilendiğiniz Hizmet',
    formMessageLabel:'Mesajınız', formSubmit:'Gönder',
    address:'Etiler, Nispetiye Cd. No:40/10\nGürel Apt., D:B, 34340\nBeşiktaş / İstanbul',
    phone:'+90 212 230 09 79', email:'info@emekajans.com',
    hours:'Pzt–Cum: 09:00–18:00',
    addressLabel:'Adres', phoneLabel:'Telefon', emailLabel:'E-posta', hoursLabel:'Çalışma Saatleri'
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
    canonical:'https://emekajans.com/en/services.html',
    hreflangTR:'https://emekajans.com/services.html', hreflangEN:'https://emekajans.com/en/services.html'
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
    canonical:'https://emekajans.com/en/about.html',
    hreflangTR:'https://emekajans.com/about.html', hreflangEN:'https://emekajans.com/en/about.html'
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
    canonical:'https://emekajans.com/en/work.html',
    hreflangTR:'https://emekajans.com/work.html', hreflangEN:'https://emekajans.com/en/work.html'
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
    canonical:'https://emekajans.com/en/blog.html',
    hreflangTR:'https://emekajans.com/blog.html', hreflangEN:'https://emekajans.com/en/blog.html'
  },
  content:{
    heroTitle:'Insights &\nperspectives.',
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
    canonical:'https://emekajans.com/en/contact.html',
    hreflangTR:'https://emekajans.com/contact.html', hreflangEN:'https://emekajans.com/en/contact.html'
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
}
];
