const products = [
  {
    id: 1,
    name: "iPhone 16",
    keywords: ["smartphone", "apple", "phone", "iphone13"],
    image:
      "https://inspireonline.in/cdn/shop/files/iPhone_16_White_PDP_Image_Position_1__en-IN_0679870b-7ec2-48f4-ab75-f3526247d913.jpg?v=1727247838",
    price: 70000,
    default:"yes",
    home:'yes',
    description:
      "The iPhone 13 features a 6.1-inch Super Retina XDR display, A17 Bionic chip, and improved battery life. It has a dual-camera system with Night mode and cinematic mode for video recording, providing stunning photography capabilities.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    keywords: ["smartphone", "samsung", "phone", "samsung galaxy s21"],
    image:
      "https://m.media-amazon.com/images/I/51M7fgmGRFL.SX300_SY300_QL70_FMwebp.jpg",
    price: 32999,
    description:
      "The Samsung Galaxy S21 FE features a 6.4-inch 120Hz Dynamic AMOLED display with HDR10+ support and is powered by either the Snapdragon 888 or Exynos 2100 chipset, offering high-end performance. It includes a triple rear camera setup and a 32MP front camera.",
  },
  {
    id: 3,
    name: "MacBook Pro",
    keywords: ["laptop", "apple", "macbook", "macbook pro"],
    image:
      "https://m.media-amazon.com/images/I/31PGPjaOAZL.SY445_SX342_QL70_FMwebp.jpg",
    price: 155990,
    default:"yes",
    home:'yes',
    description:
      "The MacBook Pro features Apple's M1 chip, delivering exceptional performance and efficiency. It has a 13.3-inch Retina display, a Magic Keyboard, and a battery life of up to 20 hours.",
  },
  {
    id: 4,
    name: "Sony Headphones",
    keywords: ["headphones", "sony", "audio", "sony headphones"],
    image:
      "https://m.media-amazon.com/images/I/314WspGErEL.SX300_SY300_QL70_FMwebp.jpg",
    price: 19988,
    default:"yes",
    home:'yes',
    description:
      "Sony headphones offer high-resolution audio and noise cancellation technology. With comfortable ear pads and long battery life, they are perfect for immersive listening experiences.",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    keywords: ["laptop", "dell", "computer", "dell xps 13"],
    image:
      "https://m.media-amazon.com/images/I/317I6rdgVzL.SX300_SY300_QL70_FMwebp.jpg",
    price: 168599,
    default:"yes",
    description:
      "The Dell XPS 13 features a stunning InfinityEdge display, 11th Gen Intel processors, and an ultra-thin design, making it ideal for professionals and students alike.",
  },
  {
    id: 6,
    name: "Google Pixel 6",
    keywords: ["smartphone", "google", "phone", "google pixel 6"],
    image: "https://m.media-amazon.com/images/I/41yAKVGw9CL.jpg",
    price: 38999,
    default:"yes",
    description:
      "The Google Pixel 6 is powered by Google's custom Tensor chip, featuring a 6.4-inch AMOLED display and a dual-camera system for stunning photos.",
  },
  {
    id: 7,
    name: "Lenovo ThinkPad X1",
    keywords: ["laptop", "lenovo", "computer", "lenovo thinkpad x1"],
    image:
      "https://m.media-amazon.com/images/I/41Z-n6cmsiL.SX300_SY300_QL70_FMwebp.jpg",
    price: 67590,
    description:
      "The Lenovo ThinkPad X1 is a business-class laptop featuring a robust design, exceptional keyboard, and long battery life, making it perfect for professionals.",
  },
  {
    id: 8,
    name: "Bose QuietComfort 35",
    keywords: ["headphones", "bose", "audio", "bose quietcomfort 35"],
    image: "https://m.media-amazon.com/images/I/31FgRhyNo+L.SY300_SX300.jpg",
    price: 15999,
    description:
      "Bose QuietComfort 35 headphones are renowned for their active noise cancellation and superior sound quality. With up to 20 hours of wireless playtime, they provide comfort and performance.",
  },
  {
    id: 9,
    name: "iPad Air",
    keywords: ["tablet", "apple", "ipad", "ipad air"],
    image:
      "https://m.media-amazon.com/images/I/415dGcORn2L.SY445_SX342_QL70_FMwebp.jpg",
    price: 58999,
    description:
      "The iPad Air features a 10.9-inch Liquid Retina display, A14 Bionic chip, and support for the Apple Pencil, ideal for both productivity and creativity.",
  },
  {
    id: 10,
    name: "Microsoft Surface Pro 7",
    keywords: ["tablet", "microsoft", "surface", "microsoft surface pro 7"],
    image:
      "https://m.media-amazon.com/images/I/41XQTF-mheL.SY300_SX300_QL70_FMwebp.jpg",
    price: 749,
    default:"yes",
    description:
      "The Microsoft Surface Pro 7 is a versatile 2-in-1 device with a high-resolution touchscreen, powered by Intel processors, great for work and play.",
  },
  {
    id: 11,
    name: "Asus ROG Zephyrus G14",
    keywords: ["laptop", "asus", "gaming", "asus rog zephyrus g14"],
    image:
      "https://m.media-amazon.com/images/I/41cRVAJoqZL.SX300_SY300_QL70_FMwebp.jpg",
    price: 129990,
    description:
      "The Asus ROG Zephyrus G14 is a powerful gaming laptop featuring an AMD Ryzen 9 processor and NVIDIA GeForce RTX graphics, delivering an exceptional gaming experience.",
  },
  {
    id: 12,
    name: "OnePlus 9",
    keywords: ["smartphone", "oneplus", "phone", "oneplus 9"],
    image:
      "https://m.media-amazon.com/images/I/41iiRrNUMTL.SX300_SY300_QL70_FMwebp.jpg",
    price: 22999,
    description:
      "The OnePlus 9 features a 6.55-inch Fluid AMOLED display and a Hasselblad camera system, supporting 5G connectivity and fast charging capabilities.",
  },
  {
    id: 13,
    name: "HP Spectre x360",
    keywords: ["laptop", "hp", "convertible", "hp spectre x360"],
    image: "https://m.media-amazon.com/images/I/71Sq9WQoZ4L.SX679.jpg",
    price: 164990,
    description:
      "The HP Spectre x360 is a premium convertible laptop with a vibrant display and powerful performance, ideal for creators and professionals.",
  },
  {
    id: 14,
    name: "JBL Flip 5",
    keywords: ["speaker", "jbl", "audio", "jbl flip 5"],
    image:
      "https://m.media-amazon.com/images/I/31H4Fpr8nRL.SX300_SY300_QL70_FMwebp.jpg",
    price: 5499,
    description:
      "The JBL Flip 5 is a portable Bluetooth speaker that delivers powerful sound and deep bass, with a waterproof design and up to 12 hours of playtime.",
  },
  {
    id: 15,
    name: "Oculus Quest 3",
    keywords: ["vr", "oculus", "gaming", "oculus quest 3"],
    image:
      "https://m.media-amazon.com/images/I/21X1YPVBThL.SY300_SX300_QL70_FMwebp.jpg",
    price: 45999,
    description:
      "The Oculus Quest 3 is a standalone VR headset featuring advanced processing power and immersive graphics, providing a wireless VR experience.",
  },
  {
    id: 16,
    name: "Apple Watch Series 7",
    keywords: ["watch", "apple", "smartwatch", "apple watch series 7"],
    image:
      "https://m.media-amazon.com/images/I/41LqDeIPWJL.SY300_SX300_QL70_FMwebp.jpg",
    price: 39900,
    description:
      "The Apple Watch Series 7 offers a larger display, improved durability, and a suite of health tracking features, making it perfect for fitness enthusiasts.",
  },
  {
    id: 17,
    name: "Fitbit Charge 5",
    keywords: ["fitness tracker", "fitbit", "health", "fitbit charge 5"],
    image:
      "https://m.media-amazon.com/images/I/41tBpu+d4AL.SX300_SY300_QL70_FMwebp.jpg",
    price: 14999,
    description:
      "The Fitbit Charge 5 tracks your heart rate, sleep, and activities with built-in GPS and a vibrant display, ideal for health-conscious individuals.",
  },
  {
    id: 18,
    name: "Kindle Paperwhite",
    keywords: ["ebook reader", "amazon", "kindle", "kindle paperwhite"],
    image:
      "https://m.media-amazon.com/images/I/51CkCE+VRML.SX300_SY300_QL70_FMwebp.jpg",
    price: 12999,
    description:
      "The Kindle Paperwhite features a glare-free display and adjustable warm light, allowing you to read comfortably in any environment.",
  },
  {
    id: 19,
    name: "GoPro Hero 10",
    keywords: ["camera", "gopro", "action camera", "gopro hero 10"],
    image:
      "https://gppro.in/wp-content/uploads/2021/10/GO-PRO-HERO-10-BLACK-2.jpg",
    price: 32999,
    description:
      "The GoPro Hero 10 captures stunning 5.3K video and 23MP photos, designed for adventurers and creators who want to capture their experiences.",
  },
  {
    id: 20,
    name: "Nikon D3500",
    keywords: ["camera", "nikon", "dslr", "nikon d3500"],
    image:
    "https://m.media-amazon.com/images/I/71bDGZMrZEL.jpg",
    price: 36990,
    description:
      "The Nikon D3500 is an entry-level DSLR camera featuring a 24.2MP sensor and a variety of creative modes for capturing high-quality images.",
  },
  {
    id: 21,
    name: "Samsung Galaxy Buds Pro",
    keywords: ["earbuds", "samsung", "audio", "galaxy buds pro"],
    image:
      "https://m.media-amazon.com/images/I/61KVX-MbIUL.jpg",
    price: 14999,
    description:
      "Samsung Galaxy Buds Pro deliver superior sound quality with active noise cancellation and a comfortable fit for all-day wear.",
  },
  {
    id: 22,
    name: "Razer Blade 15",
    keywords: ["laptop", "razer", "gaming", "razer blade 15"],
    image:
      "https://images-cdn.ubuy.co.in/66a2ce9ac907cf412b442848-razer-blade-15-6-fhd-i7-10875h-16-512.jpg",
    price: 229990,
    description:
      "The Razer Blade 15 is a high-performance gaming laptop featuring an NVIDIA GeForce RTX graphics card, ideal for gamers seeking power and portability.",
  },
  {
    id: 23,
    name: "Sony A7 III",
    keywords: ["camera", "sony", "mirrorless", "sony a7 iii"],
    image:
      "https://m.media-amazon.com/images/I/517CEyCXIHL._AC_UF1000,1000_QL80_.jpg",
    price: 139990,
    description:
      "The Sony A7 III is a versatile mirrorless camera with a 24.2MP full-frame sensor, offering outstanding performance in low light and high-speed shooting.",
  },
  {
    id: 24,
    name: "Huawei MateBook X Pro",
    keywords: ["laptop", "huawei", "matebook", "huawei matebook x pro"],
    image:
      "https://www.zdnet.com/a/img/resize/3bcce22829176be09aa6b842faec44cb57bbc836/2022/09/30/4f14b6e4-ec2a-4e43-bf02-89a973e673eb/huawei-matebook-x-pro-2022-770x433.jpg?auto=webp&fit=crop&height=172.5&width=294",
    price: 134990,
    description:
      "The Huawei MateBook X Pro features a stunning 3K touchscreen display and powerful performance, suitable for professionals and creatives.",
  },
  {
    id: 25,
    name: "Apple AirPods Pro",
    keywords: ["earbuds", "apple", "audio", "airpods pro"],
    image:
      "https://m.media-amazon.com/images/I/51emillNpWL._AC_UF350,350_QL80_.jpg",
    price: 24999,
    description:
      "Apple AirPods Pro feature active noise cancellation and a customizable fit, delivering exceptional sound quality and seamless connectivity with Apple devices.",
  },
  {
    id: 26,
    name: "LG OLED TV",
    keywords: ["tv", "lg", "oled", "lg oled tv"],
    image:
      "https://m.media-amazon.com/images/I/41PTskBz5YL.SX300_SY300_QL70_FMwebp.jpg",
    price: 159990,
    description:
      "The LG OLED TV offers stunning picture quality with deep blacks and vibrant colors, perfect for an immersive viewing experience.",
  },
  {
    id: 27,
    name: "Amazon Echo Dot (4th Gen)",
    keywords: ["smart speaker", "amazon", "echo dot", "echo dot 4th gen"],
    image:
      "https://m.media-amazon.com/images/I/41bws1KDcmL.SX300_SY300_QL70_FMwebp.jpg",
    price: 4999,
    description:
      "The Amazon Echo Dot (4th Gen) is a compact smart speaker with Alexa, allowing you to control smart home devices and play music with voice commands.",
  },
  {
    id: 28,
    name: "Samsung Galaxy Tab S7",
    keywords: ["tablet", "samsung", "galaxy tab", "galaxy tab s7"],
    image:
      "https://m.media-amazon.com/images/I/91r1NdBM6NL._AC_UF1000,1000_QL80_.jpg",
    price: 55999,
    description:
      "The Samsung Galaxy Tab S7 features a stunning 11-inch display and S Pen support, ideal for productivity and entertainment on the go.",
  },
  {
    id: 29,
    name: "Canon EOS R",
    keywords: ["camera", "canon", "mirrorless", "canon eos r"],
    image:
      "https://m.media-amazon.com/images/I/8115pNkutkL._AC_UF1000,1000_QL80_.jpg",
    price: 179990,
    description:
      "The Canon EOS R is a full-frame mirrorless camera featuring a 30.3MP sensor, offering versatility and high performance for photography enthusiasts.",
  },
  {
    id: 30,
    name: "Microsoft Xbox Series X",
    keywords: ["gaming console", "microsoft", "xbox", "xbox series x"],
    image:
      "https://m.media-amazon.com/images/I/41ZBUs+qB4L.SX300_SY300_QL70_FMwebp.jpg",
    price: 49999,
    description:
      "The Microsoft Xbox Series X is a next-gen gaming console with powerful hardware, delivering stunning graphics and fast load times for an immersive gaming experience.",
  },
  {
    id: 31,
    name: "Apple Pencil (2nd Gen)",
    keywords: ["accessory", "apple", "ipad", "apple pencil 2"],
    image:
      "https://m.media-amazon.com/images/I/41J6Dgjg3XL.SX300_SY300_QL70_FMwebp.jpg",
    price: 9499,
    description:
      "The Apple Pencil (2nd Gen) provides precision and fluidity for drawing and writing on your iPad, making it perfect for artists and note-takers.",
  },
  {
    id: 32,
    name: "Raspberry Pi 4",
    keywords: ["computer", "raspberry pi", "development", "raspberry pi 4"],
    image:
      "https://m.media-amazon.com/images/I/51PcBPNn1tL.SX300_SY300_QL70_FMwebp.jpg",
    price: 4999,
    description:
      "The Raspberry Pi 4 is a small, affordable computer perfect for learning programming, building projects, and exploring technology.",
  },
  {
    id: 33,
    name: "DJI Mini 2",
    keywords: ["drone", "dji", "aerial photography", "dji mini 2"],
    image:
      "https://m.media-amazon.com/images/I/41tZoUExYPL.SX300_SY300_QL70_FMwebp.jpg",
    price: 54990,
    description:
      "The DJI Mini 2 is a compact drone that captures 12MP photos and 4K videos, offering exceptional aerial photography capabilities.",
  },
  {
    id: 34,
    name: "Apple HomePod mini",
    keywords: ["smart speaker", "apple", "homepod", "homepod mini"],
    image:
      "https://m.media-amazon.com/images/I/41IjT-aATmL.SX300_SY300_QL70_FMwebp.jpg",
    price: 9999,
    description:
      "The Apple HomePod mini is a smart speaker that delivers high-quality audio and integrates seamlessly with your Apple devices and smart home.",
  },
  {
    id: 35,
    name: "Anker PowerCore 20100",
    keywords: ["power bank", "anker", "accessory", "powercore 20100"],
    image:
      "https://m.media-amazon.com/images/I/41Bj7-UGF2L.SX300_SY300_QL70_FMwebp.jpg",
    price: 2499,
    description:
      "The Anker PowerCore 20100 is a portable power bank with high capacity, allowing you to charge your devices multiple times on the go.",
  },
  {
    id: 36,
    name: "Logitech MX Master 3",
    keywords: ["mouse", "logitech", "accessory", "mx master 3"],
    image:
      "https://m.media-amazon.com/images/I/41Ir8UZWu3L.SX300_SY300_QL70_FMwebp.jpg",
    price: 9999,
    description:
      "The Logitech MX Master 3 is a premium wireless mouse designed for productivity, featuring customizable buttons and fast scrolling.",
  },
  {
    id: 37,
    name: "Seagate Portable Hard Drive",
    keywords: ["hard drive", "seagate", "storage", "portable hard drive"],
    image:
      "https://m.media-amazon.com/images/I/51M9S15tX9L.SX300_SY300_QL70_FMwebp.jpg",
    price: 7499,
    description:
      "The Seagate Portable Hard Drive provides extra storage for your files, offering reliable performance and easy plug-and-play connectivity.",
  },
  {
    id: 38,
    name: "Philips Hue White and Color Ambiance",
    keywords: ["smart lighting", "philips", "home", "hue"],
    image:
      "https://m.media-amazon.com/images/I/41IoP9+TbAL.SX300_SY300_QL70_FMwebp.jpg",
    price: 4999,
    description:
      "The Philips Hue White and Color Ambiance bulbs allow you to customize your home lighting with millions of colors and smart home integration.",
  },
  {
    id: 39,
    name: "BenQ 27 inch Monitor",
    keywords: ["monitor", "benq", "display", "27 inch monitor"],
    image:
      "https://m.media-amazon.com/images/I/51G9iqD4LGL.SX300_SY300_QL70_FMwebp.jpg",
    price: 21990,
    description:
      "The BenQ 27 inch monitor features 1440p resolution and HDR support, ideal for both work and entertainment.",
  },
  {
    id: 40,
    name: "Corsair K95 RGB Keyboard",
    keywords: ["keyboard", "corsair", "gaming", "k95 rgb keyboard"],
    image:
      "https://m.media-amazon.com/images/I/51Vt+Ul0HUL.SX300_SY300_QL70_FMwebp.jpg",
    price: 13990,
    description:
      "The Corsair K95 RGB keyboard features customizable RGB lighting and programmable keys, designed for gamers who seek performance and aesthetics.",
  },
  {
    id: 41,
    name: "Anker Soundcore Bluetooth Speaker",
    keywords: ["speaker", "anker", "audio", "soundcore"],
    image:
      "https://m.media-amazon.com/images/I/61y+b4M0RZL.jpg",
    price: 3499,
    description:
      "The Anker Soundcore Bluetooth speaker delivers powerful sound in a compact design, perfect for outdoor use with long battery life.",
  },
  {
    id: 42,
    name: "Sennheiser HD 280 Pro",
    keywords: ["headphones", "sennheiser", "audio", "hd 280 pro"],
    image:
      "https://m.media-amazon.com/images/I/51Z1TYJpXQL._AC_UF1000,1000_QL80_.jpg",
    price: 8999,
    description:
      "Sennheiser HD 280 Pro headphones offer excellent sound isolation and clarity, making them suitable for both professional and casual listening.",
  },
  {
    id: 43,
    name: "ZOTAC Gaming GeForce RTX 3080",
    keywords: ["graphics card", "zotac", "gaming", "rtx 3080"],
    image:
      "https://m.media-amazon.com/images/I/51KfGsu8QeL.SX300_SY300_QL70_FMwebp.jpg",
    price: 73990,
    description:
      "The ZOTAC Gaming GeForce RTX 3080 is a powerful graphics card designed for gamers, supporting real-time ray tracing and high-resolution gaming.",
  },
  {
    id: 44,
    name: "MSI Gaming Laptop",
    keywords: ["laptop", "msi", "gaming", "msi gaming laptop"],
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/s/n/d/katana-17-b13vfk-253in-gaming-laptop-msi-original-imagmmhgf9gjkhzf.jpeg?q=90&crop=false",
    price: 129990,
    description:
      "The MSI Gaming Laptop features high-end specifications with NVIDIA GeForce graphics, perfect for serious gamers.",
  },
  {
    id: 45,
    name: "NVIDIA Shield TV",
    keywords: ["streaming device", "nvidia", "shield", "nvidia shield tv"],
    image:
      "https://m.media-amazon.com/images/I/41aIhT+IAFL.SX300_SY300_QL70_FMwebp.jpg",
    price: 13999,
    description:
      "The NVIDIA Shield TV is a powerful streaming device with 4K HDR support, offering access to a wide range of streaming services.",
  },
  {
    id: 46,
    name: "TP-Link Archer AX50",
    keywords: ["router", "tp-link", "networking", "archer ax50"],
    image:
      "https://m.media-amazon.com/images/I/51iRTsC3GOL.SX300_SY300_QL70_FMwebp.jpg",
    price: 9499,
    description:
      "The TP-Link Archer AX50 is a dual-band Wi-Fi 6 router, providing high-speed internet access and improved connectivity for smart home devices.",
  },
  {
    id: 47,
    name: "Google Nest Hub",
    keywords: ["smart display", "google", "nest hub", "smart home"],
    image:
      "https://m.media-amazon.com/images/I/41QG5R+bdwL.SX300_SY300_QL70_FMwebp.jpg",
    price: 8999,
    description:
      "The Google Nest Hub is a smart display that allows you to control your smart home devices and access Google Assistant with ease.",
  },
  {
    id: 48,
    name: "Smart Wi-Fi Plugs",
    keywords: ["smart home", "plug", "smart plugs", "wifi plugs"],
    image:
      "https://m.media-amazon.com/images/I/41byXbgGvcL.SX300_SY300_QL70_FMwebp.jpg",
    price: 2999,
    description:
      "Smart Wi-Fi plugs allow you to control your devices remotely through an app, enabling automation and scheduling for your home.",
  },
  {
    id: 49,
    name: "Samsung Galaxy S21 Ultra",
    keywords: ["smartphone", "samsung", "galaxy", "galaxy s21 ultra"],
    image: "https://m.media-amazon.com/images/I/71wNGcG06YL._SL1500_.jpg",
    price: 99999,
    description:
      "The Samsung Galaxy S21 Ultra features a stunning 6.8-inch AMOLED display, powerful camera capabilities, and S Pen support for enhanced productivity.",
  },
  {
    id: 50,
    name: "Xiaomi Mi 11",
    keywords: ["smartphone", "xiaomi", "phone", "mi 11"],
    image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1619082747.31483931!400x400!85.png",
    price: 45999,
    description:
      "The Xiaomi Mi 11 features a 6.81-inch AMOLED display, Snapdragon 888 processor, and a triple camera system, offering premium features at an affordable price.",
  },
  {
    id: 51,
    name: "Fitbit Versa 3",
    keywords: ["smartwatch", "fitbit", "health", "versa 3"],
    image:
      "https://m.media-amazon.com/images/I/51U+ViX3FqL.SX300_SY300_QL70_FMwebp.jpg",
    price: 19999,
    description:
      "The Fitbit Versa 3 is a smartwatch that tracks your fitness and health, offering built-in GPS and voice assistant support.",
  },
  {
    id: 52,
    name: "Razer Kraken Gaming Headset",
    keywords: ["headset", "razer", "gaming", "kraken"],
    image:
      "https://m.media-amazon.com/images/I/51b9s45cGtL.SX300_SY300_QL70_FMwebp.jpg",
    price: 10999,
    description:
      "The Razer Kraken Gaming Headset delivers immersive sound and comfort for long gaming sessions, featuring customizable RGB lighting.",
  },
  {
    id: 53,
    name: "Acer Aspire 5",
    keywords: ["laptop", "acer", "affordable", "aspire 5"],
    image:
      "https://m.media-amazon.com/images/I/61NPqJky+cL._AC_UF1000,1000_QL80_.jpg",
    price: 49990,
    default:"yes",
    description:
      "The Acer Aspire 5 is an affordable laptop featuring AMD Ryzen processors, great for everyday tasks and light gaming.",
  },
  {
    id: 54,
    name: "TCL 55 inch 4K TV",
    keywords: ["tv", "tcl", "4k", "tcl 55 inch tv"],
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/12/370807365/SY/TT/MU/72090224/55-inch-tcl-smart-4k-android-led-tv.jpg",
    price: 54990,
    home:'yes',
    default:"yes",
    description:
      "The TCL 55 inch 4K TV offers vibrant colors and detailed visuals, perfect for movie nights and gaming.",
  },
  {
    id: 55,
    name: "Google Chromecast with Google TV",
    keywords: ["streaming device", "google", "chromecast", "google tv"],
    image:
      "https://m.media-amazon.com/images/I/41GvYuR5LcL.SX300_SY300_QL70_FMwebp.jpg",
    price: 6499,
    description:
      "Google Chromecast with Google TV allows you to stream your favorite content in 4K, with an easy-to-use interface and voice control.",
  },

  {
    id: 56,
    name: "Samsung Galaxy A52",
    keywords: ["smartphone", "samsung", "phone", "samsung galaxy a52"],
    image:
      "https://www.favobliss.com/image/cache/catalog/Galaxy-A52-Black-550x550.jpg",
    price: 24599,
  },
  {
    id: 57,
    name: "OnePlus Nord 2",
    keywords: ["smartphone", "oneplus", "phone", "oneplus nord 2"],
    image:
      "https://m.media-amazon.com/images/I/41Gsj-Q-zOS.SX300_SY300_QL70_FMwebp.jpg",
    price: 23999,
  },
  {
    id: 58,
    name: "Huawei P40 Lite",
    keywords: ["smartphone", "huawei", "phone", "huawei p40 lite"],
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXwHvHznQ_Ha7jQZtOiA3u6xMmEbTxZ8Uw_SIT3Rm2pNK_gakR2baQysjMEwVuFyypzpCejIQTaqULUYnK1mi-ey9EehHljsrStaNV8aJLe-cwGYoYMeAh",
    price: 11999,
  },
  {
    id: 59,
    name: "Google Pixel 5a",
    keywords: ["smartphone", "google", "phone", "google pixel 5a"],
    image:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-59199/google_pixel_5_frontback-1024x768.jpeg",
    price: 13999,
  },
  {
    id: 60,  
    name: "Motorola Moto G Power",
    keywords: ["smartphone", "motorola", "phone", "motorola moto g power"],
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxHCDK0IDiL6m2iuh5yYJvmqxZqhORLokjjkzSL-yNuy-ES8eTqibPMNgn6NRtAZ0Tkasvdvwc_CkhTtfyB5IITUVB8O1HGQm7fhO96P3zZIzgozjpn6hc4Q",
    price: 5999,
  },
];

export default products;
// let Name = "iPhone 13"
// products.map((product)=>{
//   if(product.name==Name){
//     console.log(product)
//   }
// })
