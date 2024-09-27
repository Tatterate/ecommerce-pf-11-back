let categories = [
  { name: "Powerbank" },
  { name: "wireless network card" },
  { name: "videocard" },
  { name: "Harddrive" },
  { name: "Monitor" },
  { name: "Mouse pad" },
  { name: "coolers" },
  { name: "processors" },
  { name: "mouse" },
  { name: "motherboard" },
  { name: "memory RAM" },
  { name: "Powerbank" },
  { name: "Tower" },
  { name: "SSD" },
  { name: "GAMING CHAIR" },
  { name: "keyboard" },
  { name: "Headset" },
];

let products = [
  {
    id: 1,
    name: "GeForce RTX 3060",
    price: 398,
    imageurl:
      "https://static.gigabyte.com/StaticFile/Image/Global/be5b8bdfd5493363bd773d09e1476a86/Product/15336/Png",
    category: "videocard",
    trademark: "Gigabyte",
    description:
      "NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX 3060 Integrated with 12GB GDDR6 192-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans RGB Fusion 2.0 Protection metal back plate 2x HDMI 2.1, 2x DisplayPort 1.4 Core Clock: 1837 MHz Limited Hash Rate version. Get the ultimate gaming performance with GIGABYTE RTX 3060 Graphics Cards. Powered by NVIDIA's 2nd gen RTX architecture and refined with WINDFORCE cooling technology, the GeForce RTX 3060 GAMING OC 12G (rev. 2.0) brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores.",
  },
  {
    id: 2,
    name: "GeForce GTX 1660",
    price: 239,
    imageurl:
      "http://pcboutique.com.ar/content/images/thumbs/0004084_zotac-geforce-rtx-3060-dual-fan-12gb-mineria_550.jpeg",
    category: "videocard",
    trademark: "Zotac",
    description:
      "	The all-new generation of ZOTAC gaming GeForce GTX graphics cards are here. Based on the new NVIDIA Turing architecture, it's packed with GDDR5 Fast memory. Get ready to get fast and game strong features",
  },
  {
    id: 3,
    name: "GeForce RTX 3060 Twin Edge",
    price: 359,
    imageurl:
      "http://pcboutique.com.ar/content/images/thumbs/0004084_zotac-geforce-rtx-3060-dual-fan-12gb-mineria_550.jpeg",
    category: "videocard",
    trademark: "Zotac",
    description:
      "Get Amplified with the ZOTAC GAMING GeForce RTX 30 Series based on the NVIDIA Ampere architecture. Built with enhanced RT Core and Tensor Cores, new streaming multiprocessors, and high-speed GDDR6 memory, the ZOTAC GAMING GeForce RTX 3060 Twin Edge OC gives rise to amplified gaming with high fidelity. FEATURES: GDDR6 Graphics Memory, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores, VR Ready, IceStorm 2.0 Advanced Cooling, Active Fan Control with Freeze Fan Stop, Metal Backplate, NVIDIA DLSS, NVIDIA G-SYNC compatible. SPECIFICATIONS: NVIDIA GeForce RTX 3060 GPU, 3584 CUDA cores, 12GB GDDR6 memory, 192-bit memory bus, Engine boost clock: 1807 MHz, Memory clock: 15.0 Gbps, PCI Express 4.0 16x. SOFTWARE COMPATIBILITY: Game Ready Drivers and NVIDIA Studio Drivers, Microsoft DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6, Windows 10 64-bit (build 2004 or later). CONNECTIONS: 3 x DisplayPort 1.4a (up to 7680x4320@60Hz), 1 x HDMI 2.1 (up to 7680x4320@60Hz), HDCP 2.3 support, Quad simultaneous display capable. POWER REQUIREMENTS: 600-watt power supply recommended, 170-watt max power consumption, 8-pin power connector. INSIDE THE BOX: ZOTAC GAMING GeForce RTX 3060 Twin Edge OC, user manual. DIMENSIONS: Length: 224.1mm (8.8in), Height: 116.3mm (4.6in), Width: Dual slot (39.2mm) (1.5in) BOX: Height: 283mm (11.1in), Width: 218mm (8.6in), Depth: 83mm (3.3in).",
  },
  {
    id: 4,
    name: "NVIDIA GeForce GT 730",
    price: 88,
    imageurl:
      "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Asus_GT_730.png",
    category: "videocard",
    trademark: "Asus",
    description:
      "The ASUS GeForce GT 730 is a passively-cooled single-slot graphics card that enables quiet multi-monitor productivity. Auto-Extreme Technology ensures premium build quality and a more reliable graphics card.",
  },
  {
    id: 5,
    name: "Speedster SWFT 210 ",
    price: 249,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_914183-MLA45048236262_032021-O.webp",
    category: "videocard",
    trademark: "Radeon",
    description:
      "The Speedster series exemplifies a modern aerodynamic style though clean and elegant design. It is a thoughtful design with the sole purpose of maximizing airflow to improve cooling and performance.",
  },
  {
    id: 6,
    name: "Dual NVIDIA GeForce RTX 3050",
    price: 319,
    imageurl:
      "data:image/jpeg;base64,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",
    category: "videocard",
    trademark: "Asus",
    description:
      "ASUS Dual GeForce RTX 3050 fuses dynamic thermal performance with broad compatibility. Advanced cooling solutions from flagship graphics cards — including two Axial-tech fans for maximizing airflow to the heatsink — are packed into the 20 cm long, 2-slot card, delivering more power in less space.",
  },
  {
    id: 7,
    name: "Geforce 210",
    price: 44,
    imageurl:
      "http://d2r9epyceweg5n.cloudfront.net/stores/001/145/180/products/pic_20200518_001359-1620f492ee812dc67c15897716945299-640-0.jpg",
    category: "videocard",
    trademark: "Msi",
    description:
      "MSI N210 1024MB DDR3 PCI-Express 2.0 Graphics Card MD1G/D3, Dual-link DVI x 1 D-Subx 1, HDMI x 1.",
  },
  {
    id: 8,
    name: "GeForce RTX 4070 ",
    price: 899,
    imageurl:
      "https://static.gigabyte.com/StaticFile/Image/Global/a251c4a029e27ad0398af9c3799e4495/Product/33432/Png",
    category: "videocard",
    trademark: "Gygabite",
    description:
      "Powered by NVIDIA DLSS 3 NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2x AI performance 3rd Generation RT Cores: Up to 2x ray tracing performance Powered by GeForce RTX 4070 Ti 12GB Integrated with 12GB GDDR6X 192-bit memory interface WINDFORCE Cooling System, RGB Fusion, Dual BIOS, Protection metal back plate, Anti-Sag Bracket. Ahead of its time, ahead of the game is the GIGABYTE GeForce RTX 4070Ti GAMING OC 12G Graphics Cards. Powered by NVIDIA's new RTX architecture, the GIGABYTE GeForce RTX 4070Ti GAMING OC 12G brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores, along with a staggering 12 GB of GDDR6X memory.",
  },
  {
    id: 9,
    name: "Gaming GeForce RTX 2060",
    price: 279,
    imageurl:
      "https://gorilagames.com/img/Public/1019-producto-placa-video-msi-ventus-rtx-2060-super-oc-8gb-1-9266.jpg",
    category: "videocard",
    trademark: "Msi",
    description:
      "This revolutionary architecture, combined with our all-new GeForce RTX platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before. Ray tracing is the definitive solution for lifelike lighting, reflections, and shadows, offering a level of realism far beyond what’s possible using traditional rendering techniques. NVIDIA Turing is the first GPU capable of real-time ray tracing. GeForce RTX gaming GPUs come loaded with next-generation GDDR6 memory, support for DirectX 12 features, and more. This is graphics reinvented.",
  },
  {
    id: 10,
    name: "Gaming GeForce RTX 4080",
    price: 1259,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_715452-MLA52128257957_102022-O.jpg",
    category: "videocard",
    trademark: "Zotac",
    description:
      "everaging an all-new aerodynamic inspired design, the ZOTAC GAMING GeForce RTX 4080 16GB Trinity OC utilizes the world’s most advanced gaming GPU powered by the NVIDIA Ada Lovelace architecture. Using cutting-edge cooling technologies derived from the flagship model, the Trinity OC packs the punch to offer gamers the needed blistering FPS in the latest titles. FEATURES • NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency •",
  },
  {
    id: 11,
    name: "Video Graphics Cards GV-N710D3-2GL",
    price: 49,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_780108-MLA25908850134_082017-O.jpg",
    category: "videocard",
    trademark: "Gygabite",
    description:
      "Power by GeForce get 710 and integrated with 2GB DDR3 64bit memory. Featuring low profile design. Dual-link DVI-D/D-Sub/HDMI.",
  },
  {
    id: 12,
    name: "GeForce GT 1030",
    price: 99,
    imageurl: "https://i.ytimg.com/vi/yc4HuhRYt9Q/maxresdefault.jpg",
    category: "videocard",
    trademark: "Zotac",
    description:
      "Experience a faster PC and accelerate performance with the ZOTAC GeForce GT 1030 graphics card. Delivering superior performance over integrated graphics, get more oomph from your PC. The blend of performance and effciency make for great video experiences and photoediting.",
  },
  {
    id: 13,
    name: "Speedster MERC319",
    price: 449,
    imageurl: "https://m.media-amazon.com/images/I/61Br1R-ZbeL._AC_SL1000_.jpg",
    category: "videocard",
    trademark: "Radeon",
    description:
      "The Speedster series exemplifies a modern aerodynamic style though clean and elegant design. It is a thoughtful design with the sole purpose of maximizing airflow to improve cooling and performance.",
  },
  {
    id: 14,
    name: "Phoenix AMD RX 550 ",
    price: 139,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_985183-MLA44482450195_012021-O.jpg",
    category: "videocard",
    trademark: "Asus",
    description:
      "IP5X dust resistance offers protection against the ingress of particles for better durability.Double fan ball bearings can last up to twice as long as sleeve bearing designs. Auto-Extreme technology uses automation to improve reliability. A compact design maximizes compatibility. AMD Radeon FreeSync delivers stutter-free, tear-free gaming with FreeSync monitors. A 144-hour validation program puts cards through a series of rigorous tests to ensure compatibility with the latest games.",
  },
  {
    id: 15,
    name: "Gaming GeForce GTX 1630",
    price: 160,
    imageurl:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/002/278/419/products/912-v809-42041-22f5296bf387db313a16616075990658-640-0.jpg",
    category: "videocard",
    trademark: "Msi",
    description:
      "A fresh new dual fan design, VENTUS proudly displays its industrial shapes in neutral colors to fit any build. Aluminum extruded heat sink maximizes direct contact area with the GPU and memory in order to transfer heat efficiently. Enhances heat dissipation by guiding the airflow to PCB through heat sink sections.",
  },
  {
    id: 16,
    name: "4TB WD Purple Surveillance Internal Hard Drive HDD ",
    price: 86,
    imageurl:
      "https://www.venex.com.ar/products_images/1585584038_hd_3_tb_sata_iii_64mb_wd_purple_2.jpg",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "The Right Drive for the Right Job. WD Purple drives are engineered specifically for surveillance to help withstand the elevated heat fluctuations and equipment vibrations within NVR environments. An average desktop drive is built to run for only short intervals, not the harsh 24/7 always-on environment of a high-definition surveillance system. With WD Purple, you get reliable, surveillance-class storage that’s tested for compatibility in a wide range of security systems, and some of our latest models (WD22PURZ, WD42PURZ, and WD63PURZ) have improved power efficiency. Exclusive AllFrame technology helps reduce frame loss and improve overall video playback.",
  },
  {
    id: 17,
    name: "4TB WD Red Plus NAS Internal Hard Drive HDD ",
    price: 86,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_927495-MLA49119250665_022022-O.webp",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "The Right Drive for the Right Job. WD Purple drives are engineered specifically for surveillance to help withstand the elevated heat fluctuations and equipment vibrations within NVR environments. An average desktop drive is built to run for only short intervals, not the harsh 24/7 always-on environment of a high-definition surveillance system. With WD Purple, you get reliable, surveillance-class storage that’s tested for compatibility in a wide range of security systems, and some of our latest models (WD22PURZ, WD42PURZ, and WD63PURZ) have improved power efficiency. Exclusive AllFrame technology helps reduce frame loss and improve overall video playback.",
  },
  {
    id: 18,
    name: "16TB WD Red Pro NAS Internal Hard Drive HDD",
    price: 279,
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeTyk8n5ycNRnqsL9-Ab29QJ63udX4ZgSZiX3_YYVYXOrf1G2Zp3RODVGC95_O0jsJtg&usqp=CAU",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "Designed specifically with medium or large scale business customers in mind, WD Red Pro drives are available for up to 24-bay NAS systems. Engineered to handle high-intensity workloads in 24x7 environments, WD Red Pro is ideal for archiving and sharing, as well as RAID array rebuilding on extended operating systems such as ZFS or other file systems. These drives add value to your business by enabling your employees to quickly share their files and back-up folders reliably in your NAS solution.",
  },
  {
    id: 19,
    name: "10TB External Hard Drive - GFORCE 3 Pro 7200RPM",
    price: 299,
    imageurl: "https://m.media-amazon.com/images/I/41RNXVK1FAL._AC_SY350_.jpg",
    category: "Harddrive",
    trademark: "Fantom Drives",
    description:
      "GFORCE 3 is a market tested product and is proven for reliability and quality. The Pro version of GFORCE 3 uses 7200RPM hard drives that are generally 33% faster than 5400RPM drives. Using high quality aluminum, the GFORCE 3 does not need a fan and as it doubles at a heat sink. Versatile sleek design makes it a must have complement to any home or office environments.",
  },
  {
    id: 20,
    name: "Portable 2TB External Hard Drive HDD",
    price: 61,
    imageurl: "https://m.media-amazon.com/images/I/91HwuuD8HeL._AC_SL1500_.jpg",
    category: "Harddrive",
    trademark: "Seagate",
    description:
      "Easily store and access 2TB of content on the go with the Seagate Portable Drive, a great laptop hard drive. Designed to work with Windows or Mac computers, this compact external hard drive makes backup a snap. Just drag and drop To get set up, connect the portable hard drive to a computer for automatic recognition—no software required—and enjoy plug and play simplicity with the included 18 inch USB 3.0 cable.",
  },
  {
    id: 21,
    name: "Canvio Basics 2TB Portable External Hard Drive",
    price: 59,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_727747-MLA44164090277_112020-O.webp",
    category: "Harddrive",
    trademark: "Toshiba",
    description:
      "The Canvio Basics portable external hard drive allows you to collect your files and take them anywhere, offering high storage capacity, simple plug and play operation, and reliable performance. It features a compact design with a classic matte, black finish that is USB 3.0 and USB 2.0 compatible. [Note]: (1) One Terabyte (1TB) means 10{12] = 1,000,000,000,000 bytes using powers of 10. Actual formatted storage capacity may vary. For details, please visit Toshiba's Consumer HDD website (2) Drive formatted NTFS for Windows PC. Reformatting required for Mac computers. Compatibility may vary depending on user‘s hardware configuration and operating system. s Consumer HDD website. (4) Product specifications, colors, features, software, and availability are subject to change without notice.Max. transfer rate: ~ 5.0 Gbit/s.",
  },
  {
    id: 22,
    name: "5TB Elements Portable HDD, External Hard Drive",
    price: 109,
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFY4AFnAA365ozAglxAtAtSkyLpXPux-D-yYro7OFneRAM4L6zfXClzkYPQmLTIpmP0M&usqp=CAU",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "Western Digital elements portable hard drives offer reliable, high-capacity storage, fast data transfer rates and universal connectivity with USB 3.0 and USB 2.0 devices to back up your photos, videos and files on the go. The small, lightweight design offers up to 5TB capacity.",
  },
  {
    id: 23,
    name: "IronWolf Pro 20TB NAS Internal Hard Drive",
    price: 399,
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCgt8kPVNwmt4lFIqhrDiTue0ivTU_9RjjLLVX7lFY_B1eYQoSDsymkuSJG8AcD3z7w8&usqp=CAU",
    category: "Harddrive",
    trademark: "Seagate",
    description:
      "Harness the power of IronWolf Pro 20TB HDDs, optimized for NAS, offering swift performance, high workload, and unsurpassed capacity to support your SMB. Built tough and always ready—with conventional magnetic recording technology (CMR) to store and protect crucial data and AgileArray firmware for exceptional RAID reliability and NAS compatibility—peace of mind is yours even during the heaviest workloads with 24x7 accessibility to store and protect crucial data, and a five-year limited warranty that includes three years of Rescue Data Recovery Services.",
  },
  {
    id: 24,
    name: "2TB WD Blue PC Internal Hard Drive - 7200 RPM Class",
    price: 49,
    imageurl: "https://m.media-amazon.com/images/I/514DyIKQYYL.jpg",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "WD Blue internal hard drives deliver reliability for office and web applications. They are ideal for use as primary drives in desktop PCs and for office applications. With a range of capacities and cache sizes, there’s a WD Blue internal hard drive that’s just right for you.",
  },
  {
    id: 25,
    name: "My Passport for Mac, Portable External Hard Drive",
    price: 69,
    imageurl: "https://m.media-amazon.com/images/I/61FquLut8zL.jpg",
    category: "Harddrive",
    trademark: "Western Digital",
    description:
      "Every journey needs a passport. The My Passport for Mac drive is trusted, portable storage that perfectly complements your on-the-go lifestyle. Compatible with USB-C and USB-A, the My Passport for Mac drive comes equipped to connect with today's latest technology. With a stylish design that fits in the palm of your hand, there's space to store, organize, and share all the photos, videos, music and documents that fill your life. Perfectly paired with backup software and password protection, the My Passport for Mac drive helps keep your files safe and your life Driving forward. ChromeOS - May require reformatting for other operating systems and Compatibility may vary depending on user’s hardware configuration and operating system.",
  },
  {
    id: 26,
    name: "DUAL MONITORS",
    price: 129.88,
    imageurl: "https://i.ebayimg.com/images/g/YIwAAOSwsXxjYaQ4/s-l1600.png",
    category: "Monitor",
    trademark: "SAMSUNG",
    description:
      "LOT 2 DUAL Samsung Monitor 24' 1920X1200 DVI DP USB S24A850DW w/ Stand GRADE B",
  },
  {
    id: 27,
    name: "DUAL MONITORS",
    price: 189.99,
    imageurl: "https://i.ebayimg.com/images/g/IwUAAOSw8J5iUv~t/s-l1600.jpg",
    category: "Monitor",
    trademark: "HP",
    description:
      "HP EliteDisplay E232 23' Widescreen HDMI LED Dual Monitors 1920 x 1080 (Grade A)",
  },
  {
    id: 28,
    name: "UltraSharp U2719D",
    price: 185.0,
    imageurl: "https://i.ebayimg.com/images/g/UAsAAOSwBXJjYB7n/s-l640.jpg",
    category: "Monitor",
    trademark: "DELL",
    description:
      "Dell UltraSharp U2719D - LED Monitor - 27', U2719DSAP - Grade A",
  },
  {
    id: 29,
    name: "MSI Optix MAG301CR2",
    price: 315.24,
    imageurl: "https://i.ebayimg.com/images/g/WncAAOSwhWJj2cZu/s-l1600.jpg",
    category: "Monitor",
    trademark: "Msi",
    description:
      "MSI Optix MAG301CR2 Monitor Gaming Curvo 30' Display 21:9 (WFHD) 200Hz 2560x1080",
  },
  {
    id: 30,
    name: "EliteDisplay E243I",
    price: 92.86,
    imageurl: "https://i.ebayimg.com/images/g/ZYwAAOSwc3Jj0VAO/s-l640.jpg",
    category: "Monitor",
    trademark: "HP",
    description: "Monitor Display HP EliteDisplay E243I 24' IPS FullHD",
  },
  {
    id: 31,
    name: "Curved Gaming Monitor",
    price: 191.13,
    imageurl: "https://i.ebayimg.com/images/g/e98AAOSw1bBjyC22/s-l1600.jpg",
    category: "Monitor",
    trademark: "KOGAN",
    description:
      "Kogan 30' Curved Ultrawide 200Hz FreeSync Gaming Monitor (2560 x 1080)",
  },
  {
    id: 32,
    name: "LED Monitor",
    price: 185.7,
    imageurl: "https://i.ebayimg.com/images/g/NykAAOSwCKNieRpy/s-l640.jpg",
    category: "Monitor",
    trademark: "DELL",
    description:
      "BRAND NEW, Unopened Box. Dell P2422HE USB-C 24 Inch FHD (1920x1080) Monitor, 60Hz. Perfect for office or home working",
  },
  {
    id: 33,
    name: "LCD Monitor",
    price: 336.76,
    imageurl: "https://i.ebayimg.com/images/g/aNEAAOSw~nxjAePg/s-l640.jpg",
    category: "Monitor",
    trademark: "SAMSUNG",
    description:
      "Samsung Odyssey G5 32 inch 1ms Gaming Curved Monitor - 2560 x 1440, 1ms, HDMI. Samsung Odyssey G5 32' QHD VA 165Hz Curved Monitor 2560 x 1440 Resolution Lightning 1ms Response Time 300cd/m2 Brightness VESA Mount Support 165Hz Refresh Rate FreeSync Support Inputs: HDMI and Display Port. Opened to test then packed back up perfect for any gamer",
  },
  {
    id: 34,
    name: "Black Hawk TN LED",
    price: 148.57,
    imageurl: "https://i.ebayimg.com/images/g/mpEAAOSwCN5h2Cuj/s-l640.jpg",
    category: "Monitor",
    trademark: "IIyama",
    description:
      "iiyama G-Master G2230HS-B1 Black Hawk TN LED 21 In Resolution 1920 x 1080 - Matte Black",
  },
  {
    id: 35,
    name: "LED Monitor",
    price: 204.29,
    imageurl: "https://i.ebayimg.com/images/g/QvoAAOSwTq5joxz9/s-l1600.jpg",
    category: "Monitor",
    trademark: "SAMSUNG",
    description: "Samsung LC34J791WTRXXU 34 inch Widescreen LED Monitor",
  },
  {
    id: 36,
    name: "LED LCD IPS Monitor",
    price: 195.0,
    imageurl: "https://i.ebayimg.com/images/g/r4IAAOSwxHtj1uie/s-l640.jpg",
    category: "Monitor",
    trademark: "DELL",
    description: "Dell U2419H UltraSharp 24' 16:9 IPS Monitor 1920 X 1080 NEW",
  },
  {
    id: 37,
    name: "MONITOR FHD VGA/HDMI",
    price: 85.0,
    imageurl: "https://i.ebayimg.com/images/g/SJkAAOSw4-xj2bUk/s-l1600.jpg",
    category: "Monitor",
    trademark: "ONN",
    description:
      "onn. 22' 1080p VGA/HDMI 75hz FHD Monitor, includes 6ft HDMI cable.",
  },
  {
    id: 38,
    name: "Monitor LED",
    price: 151.09,
    imageurl: "https://i.ebayimg.com/images/g/MowAAOSwPo9j2aNO/s-l1600.png",
    category: "Monitor",
    trademark: "PANELLO",
    description:
      "24B1H Monitor LED Da 23.6', Pannello MVA, FHD, 1920 X 1080, No VESA, VGA, HDMI",
  },
  {
    id: 39,
    name: "Monitor LED CURVE",
    price: 260.0,
    imageurl: "https://i.ebayimg.com/images/g/3NYAAOSwj9Zj2Th2/s-l1600.jpg",
    category: "Monitor",
    trademark: "SAMSUNG",
    description:
      "Samsung TV clase curva 1920x1080 VGA HDMI 60hz 4ms AMD FREESYNC HD monitor LED",
  },
  {
    id: 40,
    name: "Full HD LED IPS Monitor",
    price: 266.19,
    imageurl: "https://i.ebayimg.com/images/g/XYYAAOSwtEZgVHVe/s-l640.jpg",
    category: "Monitor",
    trademark: "HP",
    description:
      "HP EliteDisplay E273m 27' 1920 x 1080 Full HD LED IPS Monitor -Silver - web cam",
  },
  {
    id: 41,
    name: "Belkin Large Mouse Pad",
    price: 2.83,
    imageurl: "https://m.media-amazon.com/images/I/710L1ewi8YL._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "BELKIN",
    description:
      "8 Inch by 9 Inch, for Computer or Gaming Mouse Pad, Non-slip Base, Neoprene Backing and Jersey Surface for Smooth Mouse Control and Pinpoint Accuracy (Black)",
  },
  {
    id: 42,
    name: "Gel Mouse Pad",
    price: 7.19,
    imageurl: "https://m.media-amazon.com/images/I/71mbxPIMl1S._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "Amazon",
    description:
      "Basics Gel Computer Mouse Pad with Wrist Support Rest - Black",
  },
  {
    id: 43,
    name: "Precise Mouse Pad",
    price: 7.34,
    imageurl: "https://m.media-amazon.com/images/I/91mu+TVDy9L._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "3M",
    description:
      "Precise Mouse Pad Enhances The Precision Of Optical Mice At Fast Speeds, Easy To Clean, Stays In Place, 9 In X 8 In (MP114-BSD1)",
  },
  {
    id: 44,
    name: "Mouse Pad (Blue)",
    price: 1.99,
    imageurl: "https://m.media-amazon.com/images/I/81o+wPRNFCL._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "BELKIN",
    description: "Premium 7.9''x9.9'' Mouse Pad (Blue), 7.9'' x 9.9''",
  },
  {
    id: 45,
    name: "Cloth Mouse Pad",
    price: 29.99,
    imageurl: "https://m.media-amazon.com/images/I/31wehlPTQnL._AC_SL1010_.jpg",
    category: "Mouse pad",
    trademark: "CORSAIR",
    description:
      "MM200 - Cloth Mouse Pad - High-Performance Mouse Pad Optimized for Gaming Sensors - Designed for Maximum Control - Extended",
  },
  {
    id: 46,
    name: "Leather Mousepad",
    price: 22.99,
    imageurl: "https://m.media-amazon.com/images/I/71pn7z0g4zL._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "LONDO",
    description:
      "EXQUISITE LEATHER CRAFTSMANSHIP - The Londo Mousepad is crafted with high quality, Top Grain cowhide leather attached with fine and durable stitching, giving it a sleek look and a slim body. An exemplary model of artisanal craft combining the pleasant feel and the handsome look of leather without sacrificing versatility and convenience.",
  },
  {
    id: 47,
    name: "Mouse Pad - Studio Series",
    price: 8.99,
    imageurl: "https://m.media-amazon.com/images/I/81H3yFbTApL._AC_SL1500_.jpg",
    category: "Mouse pad",
    trademark: "LOGITECH",
    description:
      "Mouse Pad - Studio Series, Computer Mouse Mat with Anti-Slip Rubber Base, Easy Gliding, Spill-Resistant Surface, Durable Materials, Portable, in a Fresh Modern Design, Blue Grey",
  },
  {
    id: 48,
    name: "Goliathus Mouse Pad",
    price: 19.03,
    imageurl: "https://m.media-amazon.com/images/I/6128-Vgs1OL._AC_SL1300_.jpg",
    category: "Mouse pad",
    trademark: "RAZER",
    description:
      "The Razer Goliathus Speed Edition provides a slick and seamless surface for zero-hindrance gliding under your gaming mouse.",
  },
  {
    id: 49,
    name: "Schleudertrauma Mousepad",
    price: 38.05,
    imageurl: "https://i.ebayimg.com/images/g/7zYAAOSwkDBiWqxq/s-l1600.jpg",
    category: "Mouse pad",
    trademark: "BANG JUICE",
    description:
      "Verkaufe hier ein Bang Juice Mousepad, Ich glaube es gab nur 25 Stück davon, Die Maße sind 38x26 cm, Bei Fragen, einfach fragen.",
  },
  {
    id: 50,
    name: "Mouse Pad Razor",
    price: 17.5,
    imageurl: "https://i.ebayimg.com/images/g/WSMAAOSwpm5j0Or~/s-l1600.jpg",
    category: "Mouse pad",
    trademark: "RAGE",
    description:
      "Soft polyester surface, Natural rubber base, Rounded edges, 2.8 oz (79.4 g), Size: 8.7″ x 7.1″ x 0.12″ (220 x 180 x 3 mm), Blank product sourced from China",
  },
  {
    id: 51,
    name: "Keyboard gamer Corsair K68 QWERTY Cherry MX Red Black with RGB",
    price: 320,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_629804-MLA45341007590_032021-O.webp",
    category: "keyboard",
    trademark: "CORSAIR",
    description:
      "Ergonomic and suitable for various uses. It has a wrist rest. Splash resistant.Contains numeric keypad. Built-in anti-ghosting function.",
  },
  {
    id: 52,
    name: "Keyboard gamer Marvo KG901 QWERTY Jixian Blue Black with RGB",
    price: 42,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_617052-MLA43557667432_092020-O.webp",
    category: "keyboard",
    trademark: "Marvo",
    description:
      "Built-in anti-ghosting function.Keyboard Type: MechanicalCylindrical key.With USB 2.0 connector. ",
  },
  {
    id: 53,
    name: "Keyboard bluetooth Redragon Fizz Pro K616-RGB QWERTY Red white and pink with RGB",
    price: 73,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_600029-MLA50059074113_052022-O.webp",
    category: "keyboard",
    trademark: "Redragon",
    description:
      "Connectivity with multiple devices.Splash resistant.Built-in anti-ghosting function.Keyboard Type: MechanicalCylindrical key.With USB-C 2.4 connector.With removable cable.",
  },
  {
    id: 54,
    name: "Keyboard gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red Black",
    price: 110,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_975656-MLA45340981382_032021-O.webp",
    category: "keyboard",
    trademark: "HyperX",
    description:
      "Compatible consoles: ps4, ps5, xbox series xis and xbox one. Built-in anti-ghosting function. Keyboard Type: MechanicalCylindrical key. With USB-C connector. With removable cable.",
  },
  {
    id: 55,
    name: "Keyboard gamer bluetooth Keychron K6 QWERTY Gateron Brown Hot-swappable black white RGB",
    price: 253,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_944449-MLA50305077491_062022-O.webp",
    category: "keyboard",
    trademark: "KeyChron",
    description:
      "Connectivity with multiple devices. Ergonomic and suitable for various uses. Keyboard Type: MechanicalCylindrical key. With USB-C connector.",
  },
  {
    id: 56,
    name: "Keyboard gamer Logitech G G413 series QWERTY Romer-G Tactile Black Red RGB",
    price: 128,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_975656-MLA45340981382_032021-O.webp",
    category: "keyboard",
    trademark: "LOGITECH",
    description:
      "Contains numeric keypad. Built-in anti-ghosting function.Keyboard Type: MechanicalCylindrical key. With USB-A connector.",
  },
  {
    id: 57,
    name: "Keyboard Gamer mechanic Fantech Maxpower Mk853 Pink Sw Blue",
    price: 141,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_635720-MLA51631816591_092022-O.webp",
    category: "keyboard",
    trademark: "Fantech",
    description:
      "RGB lighting with 22 Spectrum modes to enhance your gaming experience. Keys-antighosting on all your switches. To ensure that every key you press is simultaneously and accurately registered in the game. Volume knob. Double shot keys. Media keys. 1.5m reinforced nylon braided cable",
  },
  {
    id: 58,
    name: "Keyboard mechanic Gamer Corsair K60 Pro Cherry Red Viola Sp F",
    price: 155,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_990178-MLA51373819202_092022-O.webp",
    category: "keyboard",
    trademark: "CORSAIR",
    description:
      "K60 PRO Mechanical Gaming Keyboard Red LED. CHERRY MV Mechanical Key Switches. BlackThe CORSAIR K60 PRO mechanical gaming keyboard is designed with a durable brushed aluminum frame and CHERRY MV key switches that allow brilliant red LED backlighting to shine on each key.",
  },
  {
    id: 59,
    name: "Keyboard Corsair Gamer K65 Mini Cherry Mx Speed Rgb",
    price: 155,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_857077-MLA53157456198_012023-O.webp",
    category: "keyboard",
    trademark: "CORSAIR",
    description:
      "Keyboard Type: MechanicalWith USB 3.0 connector. With removable cable. Indispensable for your activities. Images may be illustrative.",
  },
  {
    id: 60,
    name: "Keyboard gamer Corsair K100 QWERTY Corsair OPX Black RGB",
    price: 491,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_770985-MLA46516796706_062021-O.webp",
    category: "keyboard",
    trademark: "Redragon",
    description:
      "Ergonomic and suitable for various uses.It has a wrist rest.Contains numeric keypad. Built-in anti-ghosting function. Cylindrical key. With USB-A connector.",
  },
  {
    id: 61,
    name: "Keyboard gamer Redragon Kumara K552 QWERTY Outemu Red Black RGB",
    price: 80,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_636746-MLA52350707355_112022-O.webp",
    category: "keyboard",
    trademark: "Redragon",
    description:
      "Ergonomic and suitable for various uses. Splash resistant. Built-in anti-ghosting function. Keyboard Type: MechanicalCylindrical key. With USB connector.",
  },
  {
    id: 62,
    name: "Keyboard mechanic Gamer Redragon Vata Pro K580 Rgb Pc",
    price: 106,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_790272-MLA44145960148_112020-O.webp",
    category: "keyboard",
    trademark: "Redragon",
    description:
      "A model designed to be compact, with extras that will help you in your games and with normal use, and with the Redragon style.The new optical switch technology takes the gaming experience of Redragon keyboards to another level, reducing the response time (0.2ms) and increasing its useful life (100 million clicks).",
  },
  {
    id: "63",
    name: "Keyboard Logitech K835 TKL QWERTY GL Blue Clicky Black",
    price: 74,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_757868-MLA46516796332_062021-O.webp",
    category: "keyboard",
    trademark: "LOGITECH",
    description:
      "Built-in anti-ghosting function. Keyboard Type: MechanicalCylindrical key. With USB connector.",
  },
  {
    id: 64,
    name: "Keyboard mechanic Logitech G413 White Light Usb Pc Ps4",
    price: 101,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_616028-MLA50247586517_062022-O.webp",
    category: "keyboard",
    trademark: "LOGITECH",
    description:
      "The G413 SE keyboard offers the performance and ruggedness that the competitive environment demands, from tactile mechanical switches to a 6-key run with anti-ghosting and PBT keycaps with white LED lighting, designed to improve focus and clarity.",
  },
  {
    id: 65,
    name: "Keyboard Gamer Logitech G Prodigy series G213 Qwerty Light Rgb",
    price: 95,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_640406-MLA32722390709_102019-O.webp",
    category: "keyboard",
    trademark: "LOGITECH",
    description:
      "The G213 gaming keyboard features specially tuned Logitech G Mech-Dome keys for superior tactile feedback and an overall performance profile similar to that of a mechanical keyboard. Mech-Dome keys are standard height, offer 4mm total travel, 50g actuation force, and quiet operation.",
  },
  {
    id: 66,
    name: "Headsets gamer Razer Blackshark V2 X classic black",
    price: 120,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_799188-MLA45812996972_052021-O.webp",
    category: "Headset",
    trademark: "RAZER",
    description:
      "With noise cancellation.Built-in flexible microphone. The length of the cable is 1.3 m. Superior sound without limits. Comfortable and practical.",
  },
  {
    id: 67,
    name: "Headsets gamer Razer Kraken X Lite black",
    price: 82,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_650755-MLA40807371233_022020-O.webp",
    category: "Headset",
    trademark: "RAZER,",
    description:
      "With built-in microphone.The length of the cable is 1.3 m. Superior sound without limits. Comfortable and practical.",
  },
  {
    id: 68,
    name: "Headsets gamer HyperX Cloud Stinger Core black",
    price: 66,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_887967-MLA44385438089_122020-O.webp",
    category: "Headset",
    trademark: "HyperX",
    description:
      "With noise cancellation.Built-in flexible microphone. Superior sound without limits. Comfortable and practical.",
  },
  {
    id: 69,
    name: "Headsets gamer JBL Quantum 100 black",
    price: 66,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_645628-MLA46244880490_062021-O.webp",
    category: "Headset",
    trademark: "JBL",
    description:
      "With built-in microphone. The length of the cable is 1.2 m. Superior sound without limits. Comfortable and practical.",
  },
  {
    id: 70,
    name: "Headsets gamer Razer Kraken Kitty Quartz with light rgb",
    price: 394,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_800892-MLA41372451121_042020-O.webp",
    category: "Headset",
    trademark: "RAZER",
    description:
      "With built-in microphone. The length of the cable is 1.3 m.Superior sound without limits. Comfortable and practical.",
  },
  {
    id: 71,
    name: "Headsets Gamer Razer Opus X Quartz Bluetooth 5.0 Anc Pink",
    price: 236,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_623656-MLA48572741081_122021-O.webp",
    category: "Headset",
    trademark: "RAZER",
    description:
      "Active Noise Cancellation (ANC) technology for a seamless audio experience wherever you are, Bluetooth 5.0 for greater reliability with energy efficiency and range. 60ms low latency connection for more synchronized gameplay on Bluetooth devices. Optimized 40mm drivers for clear, immersive sound. Contains integrated microphones for greater vocal clarity on video and phone calls",
  },
  {
    id: 72,
    name: "Headsets Gamer Logitech G332 Mic Pc Max Xbox Ps4 Switch",
    price: 75,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_749809-MLA40413309396_012020-O.webp",
    category: "Headset",
    trademark: "LOGITECH",
    description:
      "6mm mic ensures your squadmates can hear you, with flip-up boom to mute.Compatible with PC or Mac or with PlayStation 4™, Xbox One™, Nintendo Switch™ video game consoles and mobile devices via auxiliary.",
  },
  {
    id: 73,
    name: "Headsets gamer Logitech G Series G335 black with light rgb",
    price: 89,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_946205-MLA47921982115_102021-O.webp",
    category: "Headset",
    trademark: "LOGITECH",
    description:
      "Experience the adrenaline of immersing yourself in the scene in another way! Having specific headphones to play completely changes your experience in each game. With the Logitech G335 you don't miss any detail and you hear the audio as it was designed by the creators.",
  },
  {
    id: 74,
    name: "Headsets gamer wireless Logitech G G935 series black with light rgb LED",
    price: 217,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_758605-MLA41084580001_032020-O.webp",
    category: "Headset",
    trademark: "LOGITECH",
    description:
      "15 m wireless range. Hands-free mode included. With built-in microphone.The length of the cable is 1.5 m.Superior sound without limits.Comfortable and practical.",
  },
  {
    id: 75,
    name: "Headsets wireless Corsair Virtuoso RGB white",
    price: 137,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_818821-MLA41084580136_032020-O.webp",
    category: "Headset",
    trademark: "CORSAIR",
    description:
      "18 m wireless range.The battery lasts 20 hours.Hands-free mode included.With built-in microphone. Superior sound without limits. Comfortable and practical. The duration of the battery depends on the use that is given to the product.",
  },
  {
    id: "76",
    name: "COOLER FAN XFX RGB AF-01",
    price: 12,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-xfx-rgb-af01-0.jpg",
    category: "coolers",
    trademark: "Kaze",
    description:
      "Our Kaze Coolers, as the Japanese call the wind, are specifically designed to keep your hardware refrigerated at an optimal temperature so that it can function as normal, without setbacks. Combined with our cabinets, these coolers are the best option to fully exploit the performance of your equipment without fear of overheating of the components",
  },

  {
    id: "77",
    name: "COOLER FAN XFX RGB AF-02",
    price: 12,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-xfx-rgb-af02-0.jpg",
    category: "coolers",
    trademark: "Kaze",
    description:
      "Our Kaze Coolers, as the Japanese call the wind, are specifically designed to keep your hardware refrigerated at an optimal temperature so that it can function as normal, without setbacks. Combined with our cabinets, these coolers are the best option to fully exploit the performance of your equipment without fear of overheating of the components.",
  },

  {
    id: "78",
    name: "COOLER FAN GABINETE 120 MM XIGMATEK X20F FIXED RGB",
    price: 14,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-gabinete-120-mm-xigmatek-x20f-fixed-rgb-0.jpg",
    category: "coolers",
    trademark: "xigmatek",
    description:
      "Connector: Molex, male/female to cascade and occupy a single molex. It has anti- vibration stops in the 4 stops of each corner. Airflow: 40.60 CFM RPM: 900RPM  Noise : < 18.71dBA  Bearing: Hydro Bearing, has no physical wear.",
  },

  {
    id: "79",
    name: "CPU COOLER AEROCOOL VERKHO A AM4",
    price: 17,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-aerocool-verkho-a-am4-0.jpg",
    category: "coolers",
    trademark: "Aerocool",
    description:
      "Base Material Aluminum,  Dimensions (L x W x H) 112 x 112 x 55mm,  TDP (Thermal Design Power) 100,  Fan Speed 1000-2300 rpm,  Connector Type PWM 4-Pin,  Fan Dimensions (L x W x H) 90 x 90 x 25mm,  Fan Bearing Type Hydraulic Bearing,  Fan Starting Voltage 6 V,  Rated Voltage 12 V,  Rated Current 0.24 A,  Power Consumption 2.88 Watts (One Fan),  Air Pressure 0.59  1.34 mm-H2O,  Fan Noise Level 10.85  28.9 dBA,  Air Flow 26.51  61.32 CFM,  MTBF (Mean Time Before Failure) 60000 hrs,  Socket AM4 / AM3+ / AM3 / AM2+ / AM2 / FM2 / FM1",
  },
  {
    id: "80",
    name: "WATERCOOLER COOLERMASTER MASTERLIQUID ML240L V2 ARGB",
    price: 326,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/watercooler-coolermaster-masterliquid-ml240l-v2-argb-0.jpg",
    category: "coolers",
    trademark: "Intel",
    description:
      "Purpose: Processor,  Integrated fan: Yes,  Radiator: Yes,  Fan noise level (min): 8 dB,  Fan noise level (max): 27 dB,  Pump noise level: 15 dB,  Bearing Technology: Rifle,  Pulse Width Modulation (PWM) Compatible: Yes,  Fan connector: 4-pin,  Pump connector: 3 pin,  Number of fans: 2 Fan(s),  Fan Speed (min): 650RPM,  Fan Speed (max): 1800 RPM,  Maximum Airflow: 62 cfm,  Supported processor sockets: LGA 1150 (Socket H3), LGA 1151 (Socket H4), LGA 1155 (Socket H2), LGA 1156 (Socket H), LGA 1200, LGA 2011 (Socket R), LGA 2011-v3 (Socket R) ), LGA 2066, Socket AM2, Socket AM3, Socket AM3, Socket AM3+, Socket AM4, Socket FM1, Socket FM2, Socket FM2+,  Max air pressure: 2.5mmH2O,  Mean Time to Failure (MTTF) of the pump: 70000 h",
  },

  {
    id: "81",
    name: "FAN COOLER GABINETE AEROCOOL MIRAGE 12 ARGB",
    price: 22,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fan-cooler-gabinete-aerocool-mirage-12-argb-0.jpg",
    category: "coolers",
    trademark: "Aerocool",
    description:
      "120mm fan with 6-pin connector with Infinity Mirror RGB design to bring a fascinating look to your rig. Access 16.8 million colors using compatible addressable RGB motherboards, including ASUS Aura Sync, MSI Mystic Light Sync, and Gigabyte RGB Fusion. Requires addressable RGB motherboard or hubs (H66F / H106C). It comes with a 6-pin adapter cable to connect your fan with compatible addressable RGB motherboards.",
  },

  {
    id: "82",
    name: "COOLER FAN AEROCOOL ECLIPSE 12 RGB PARA GABINETE",
    price: 22,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-aerocool-eclipse-12-rgb-para-gabinete-0.jpg",
    category: "coolers",
    trademark: "Aerocool",
    description:
      "20mm fan with 6-pin connector with a stylish dual RGB LED slim ring lighting design. Access 16.8 million colors using compatible addressable RGB motherboards including ASUS Aura Sync, MSI Mystic Light Sync, and Gigabyte RGB Fusion. It comes with a 6-pin adapter cable to connect your fan with compatible addressable RGB motherboards.",
  },
  {
    id: "83",
    name: "COOLER FAN AEROCOOL ASTRO ARGB 120MM",
    price: 25,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-aerocool-astro-argb-120mm-0.jpg",
    category: "coolers",
    trademark: "Aerocool",
    description:
      "120mm fan with 6-pin connector with a unique and elegant Omni RGB LED lighting design. The carbon fiber-style finish adds a futuristic touch to your kit. Access 16.8 million colors using compatible addressable RGB motherboards including ASUS Aura Sync, MSI Mystic Light Sync, and Gigabyte RGB Fusion. It comes with a 6-pin adapter cable to connect your fan with compatible addressable RGB motherboards.",
  },

  {
    id: "84",
    name: "FAN COOLERMASTER MASTERFAN MF120 S2 ARGB",
    price: 26,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fan-coolermaster-masterfan-mf120-s2-argb-0.jpg",
    category: "coolers",
    trademark: "Masterfan",
    description:
      "Fan Profiles Addressable RGB,  Fan Speed 1200 RPM ± 10%,  Fan Airflow 32 CFM (Max),  Fan Air Pressure 0.6 mmH2O (Max),  Fan Noise Level 15 dBA,  Fan Dimensions (L x W x H) 120 x 120 x 25 mm / 4.7 x 4.7 x 1 inch,  Fan MTTF 160,000 Hours,  Fan Bearing Type Rifle Bearing,  Fan Power Connector 3-Pin,  Fan Rated Voltage 12VDC,  Fan Rated Current 0.1A,  Fan Safety Current 0.16A,  RGB Connector 3-Pin,  RGB Rated Voltage 5V DC,  RGB Rated Current 0.45A,  Fan Power Consumption 1.2W,  Fan Weight 153g / 0.34 lbs,  Warranty 2 years,  Cooler Type Case Fan,  Series MasterFan,  Fan Size 120,  Fan - LED Lighting ARGB",
  },

  {
    id: "85",
    name: "COOLER FAN SICKLEFLOW 120 RGB COOLERMASTER",
    price: 39,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cooler-fan-sickleflow-120-rgb-coolermaster-0.jpg",
    category: "coolers",
    trademark: "Sickleflow",
    description:
      "Fan Profile RGB,  Fan Bearing Type,  Rifle Bearing,  Fan Speed,  650-1800 RPM ± 10%,  Fan Airflow,  62 CFM ± 10%,  Fan Air Pressure,  2.5 mmH2O ± 10%,  Fan Noise Level,  8 - 27 dBA,  Fan Dimensions (L x W x H),  120 x 120 x 25 mm / 4.7 x 4.7 x 1 inch,  Fan MTTF,  160,000 Hours,  RGB Connector,  4-Pin RGB,  RGB Rated Voltage,  12VDC,  RGB Rated Current,  0.09A,  Fan Rated Voltage,  12VDC,  Fan Rated Current,  0.15A,  Fan Safety Current,  0.37A,  Fan Power Consumption,  1.8W,  Fan Power Connector,  4-Pin (PWM),  Fan Weight,  156g / 0.34 lbs,  Warranty,  2 years,  Cooler Type,  Case Fan,  Series,  SickleFlow,  Fan Size,  120,  Fan - LED Lighting,  RGB",
  },

  {
    id: "86",
    name: "FAN COOLERMASTER MASTERFAN MF120 S3",
    price: 41,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fan-coolermaster-masterfan-mf120-s3-0.jpg",
    category: "coolers",
    trademark: "MasterFan",
    description:
      "Fan Profiles Addressable RGB,  Fan Speed 650-1800 RPM ± 10%,  Fan Airflow 52 CFM (Max),  Fan Air Pressure 1.82 mmH2O (Max),  Fan Noise Level 8 - 27 dBA,  Fan Dimensions (L x W x H) 120 x 120 x 25 mm,  Fan MTTF 160,000 Hours,  Fan Bearing Type Rifle Bearing,  Fan Power Connector 4-Pin (PWM),  Fan Rated Voltage 12VDC,  Fan Rated Current 0.22A,  Fan Safety Current 0.37A,  RGB Connector 3-Pin ARGB,  RGB Rated Voltage 5V DC,  RGB Rated Current 0.65A,  Fan Power Consumption 2.64W,  Fan Weight 156g / 0.34 lbs,  Warranty 2 years,  Cooler Type Case Fan,  Series MasterFan,  Fan Size 120,  Fan - LED Lighting ARGB",
  },

  {
    id: "87",
    name: "FAN COOLER CORSAIR ML120 PRO 120MM RED MAGNETIC LEVITATION",
    price: 42,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fan-cooler-corsair-ml120-pro-120mm-red-magnetic-levitation-0.jpg",
    category: "coolers",
    trademark: "CORSAIR",
    description:
      "Fan Size 120mm x 25mm,  Bearing Type Magnetic Levitation,  Flow Type Static Pressure,  LED Color Red,  Operating Voltage 10.8V - 13.2V,  PWM Control YES,  CORSAIR iCUE Compatibility NO,  Fan Model ML Series,  Weight .192,  Package Quantity 1,  Speed 400 - 2400 RPM,  Sound Level 37 dBA,  Power Draw 0.299 A,  Static Pressure 0.2 - 4.2 mm-H2O,  Fan Airflow 75 CFM",
  },

  {
    id: "88",
    name: "CPU COOLER THERMALTAKE UX200 ARGB",
    price: 72,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-thermaltake-ux200-argb-0.jpg",
    category: "coolers",
    trademark: "Thermaltake",
    description:
      "[Support 5V RGB sync enabled motherboards] - Sync with 5V RGB enabled motherboards from as US, ASROCK Gigabyte and MSI to customize lighting effect // [Build-in ARGB LED] - 15 High lumen addressable LEDs with 16 8 million colors // [4 x Ø6mm high Performance U-shape copper heatpipies] - heat pipes are in continuous Direct Contact with CPU to ensure fast ande efficient heat dissipation. Support up to 130W // [High volume airflow Design] - 9 High air-flow Blade generate a large volume of air passing through the aluminum heatsink and U-shape copper heatpipies for steady air flow and cooling quality // [Reliable hydraulic Bearing] - self-lubricated Bearing and friction-reducied substance lowers operation noise and enhance thermal efficiency // [Universal Intel/AMD Socket] - hassle-free installation with all-in-one back plate to be compatible with all latest Intel and AMD CPU Sockets // [Compatible Sockets] - Intel LGA 1156/1155/1151/1150/775 & AMD AM4/FM2/FM1/AM3+/AM3/AM2+/AM2 // 2 year Warranty //",
  },

  {
    id: "89",
    name: "CPU COOLER AEROCOOL CYLON 4F WHITE ARGB",
    price: 94,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-aerocool-cylon-4f-white-argb-0.jpg",
    category: "coolers",
    trademark: "Aerocool",
    description:
      "Fin material Aluminum,  Heat pipe Dia. 6mm x 4,  Dimension 126.5 x 76 x 160mm,  TDP 145,  Speed 800-1800rpm,  4-Pin PWM Connector,  Dimension 120 x 120 x 25mm,  Rated voltage 12V,  starting voltage 5V,  Rated current 0.6A,  Power consumption 7.2W,  Fan Air Pressure 0.72-1.21 mm/H2O,  Airflow 26.1-52.5 CFM,  Fan Noise 14-26 dBA,  MTBF 60,000 hrs.,  Socket LGA 2066/2011/115X/1200/775 AM4/AM3+/AM3/AM2+/AM2/FM2/FM1",
  },

  {
    id: "90",
    name: "WATERCOOLER THERMALTAKE TH120 AIO ARGB",
    price: 201,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/watercooler-thermaltake-th120-aio-argb-0.jpg",
    category: "coolers",
    trademark: "Thermaltake",
    description:
      "P/N,  CL-W285-PL12SW-A,  PUMP,  Rated Voltage: 12 V / 5V,  Rated Current : 0.38A & 0.25A,  Motor Speed : 3300 R.P.M,  WATER BLOCK,  Material: Copper,  Fan,  Dimension: 120 x 120 x 25 mm,  Speed: 1500 RPM,  Noise Level: 28.2 dB-A,  Rated Voltage: 12 V & 5 V,  Max. Air Flow: 59.28 CFM,  Max. Pressure: 1.31 mm-H2O,  Connector: 25103 Pin , 5 V ARGB header3 Pin,  Tube,  Length: 400 mm,  Material: Rubber,  Radiator,  Dimension: 153x 120 x 27 mm,  COMPATIBILITY,  Intel LGA 1200/1156/1155/1151/1150,  AMD FM2/FM1/AM4/AM3+/AM3/AM2+/AM2",
  },

  // PROCESADORES
  {
    id: "91",
    name: "MICRO INTEL CELERON G5905 DC 3.5GHZ IDEAL MINERIA",
    price: 69,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g5905-dc-35ghz-ideal-mineria-0.jpg",
    category: "processors",
    trademark: "Intel",
    description:
      "Number of cores 2,  Number of threads 2,  Basic processor frequency 3.50 GHz,  Cache 4 MB Intel® Smart Cache,  Bus speed 8 GT/s,  TDP 58W",
  },

  {
    id: "92",
    name: "MICRO INTEL CELERON G5925 S1200 IDEAL MINERIA",
    price: 84,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g5925-s1200-ideal-mineria-0.jpg",
    category: "processors",
    trademark: "Intel",
    description:
      "Supported RAM types: DDR4,  Supported sockets: 1200,  Architecture: x86-64,  Application: Desktop computers,  Graphics processor: Intel HD Graphics 610,  Number of CPU cores: 2,  Maximum supported RAM size: 128 GB,  Is it a gamer: No",
  },

  {
    id: "93",
    name: "MICRO INTEL CELERON G6900 S1700",
    price: 106,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g6900-s1700-0.jpg",
    category: "processors",
    trademark: "Intel",
    description:
      "Processor,  Intel® Celeron® G Processor Family,  Intel processor manufacturer,  Processor codename Alder Lake,  Processor model G6900,  Number of processor cores 2,  Performance Cores 2,  Number of execution threads 2,  Performance core base frequency 3.4 GHz,  Processor cache 4 MB,  Cache type in Smart Cache processor,  Processor base power 46 W,  Maximum number of DMI lanes 8,  64-bit operating processor mode,  LGA 1700 processor socket,  Box Yes,  Stepping H0",
  },

  {
    id: "94",
    name: "MICRO INTEL CORE I5 10400F",
    price: 248,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10400f-0.jpg",
    category: "processors",
    trademark: "Intel",
    description:
      "- Line : Comet Lake,  - Model : i5-10400F,  -UPC 735858445948,  - Integrated GPU : Not included,  - Cache : 12MB,  - Number of CPU cores : 6,  - Threads : 12,  - Types of RAM supported: DDR4,  - Amount of RAM supported: 128 GB,  - Socket: LGA 1200,  - Minimum clock frequency: 2.90 GHz,  - Maximum clock frequency: 4.30 GHz,  - Unlocked for OC : No,  - TDP : 65W",
  },

  {
    id: "95",
    name: "MICRO AMD RYZEN 5 4500 S/VIDEO BOX AM4",
    price: 257,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-4500-svideo-box-am4-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "Platform Desktop computer,  AMD Ryzen™ Processors Product Family,  AMD Ryzen™ 5 Desktop Processors Product Line,  # of CPU cores 6,  # of threads 12,  Max Magnification Clock Up to 4.1GHz,  Base Clock 3.6GHz,  Total L1 cache 384KB,  Total L2 cache 3MB,  Total L3 cache 8MB,  TDP/default TDP 65W,  Processor Technology for CPU Cores TSMC 7nm FinFET,  Unlocked Yes,  Socket AM4 CPU,  Number of sockets 1P,  AMD Wraith Stealth Thermal Solution (PIB),  Temp. max 95°C,  Launch Date 4/4/2022",
  },

  {
    id: "96",
    name: "MICRO AMD RYZEN 5 3600",
    price: 276,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-3600-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "- # of CPU cores: 6,  - # of threads: 12,  - Base Clock: 3.6GHz,  - Max Boost Clock: 4.2GHz,  - Total L2 cache: 3MB,  - Total L3 cache: 32MB,  - Unlocked: Yes,  - CMOS: TSMC 7nm FinFET,  - Package: AM4,  - PCI Express version: PCIe 4.0 x16,  - Thermal fix: Wraith Stealth,  - TDP/Default TDP: 65W,  - Maximum memory speed: 3200MHz,  - Memory type: DDR4,  - Memory channels: 2",
  },

  {
    id: "97",
    name: "MICRO AMD RYZEN 5 5500 S/VIDEO C/COOLER",
    price: 292,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-5500-svideo-ccooler-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "Platform Desktop computer,  AMD Ryzen™ Processors Product Family,  AMD Ryzen™ 5 Desktop Processors Product Line,  # of CPU cores 6,  # of threads 12,  Max Magnification Clock up to 4.2GHz,  Base Clock 3.6GHz,  Total L1 cache 384KB,  Total L2 cache 3MB,  Total L3 cache 16MB,  TDP/default TDP 65W,  Processor Technology for CPU Cores TSMC 7nm FinFET,  Unlocked Yes,  Socket AM4 CPU,  Number of sockets 1P,  AMD Wraith Stealth Thermal Solution (PIB),  Temp. max 90°C,  Launch Date 4/4/2022",
  },

  {
    id: "98",
    name: "MICRO AMD RYZEN 5 4600G C/VIDEO",
    price: 329,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-4600g-cvideo-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "General Specifications,  Platform Desktop,  Product Family AMD Ryzen™ Processors,  Product Line AMD Ryzen™ 5 4000 G-Series Desktop Processors with Radeon™ Graphics,  Former Codename Renoir,  Architecture Zen 2,  # of CPU Cores 6,  Multithreading (SMT) Yes,  # of Threads 12,  Max. Boost Clock Up to 4.2GHz,  Base Clock 3.7GHz,  L1 Cache 384KB,  L2 Cache 3MB,  L3 Cache 8MB,  Default TDP 65W,  AMD Configurable TDP (cTDP) 45-65W",
  },

  {
    id: "99",
    name: "MICRO AMD RYZEN 3 3200G VEGA 8",
    price: 361,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-3-3200g-vega-8-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "-# of CPU cores: 4,  -# of Threads: 4,  -# of GPU cores: 8,  -Base Clock: 3.6GHz,  -Max boost clock: 4GHz,  -Total L1 cache: 384KB,  -Total L2 cache: 2MB,  -Total L3 cache: 4MB,  -Unlocked: Yes,  -CMOS: 12nm FinFET,  -Package: AM4,  -PCI Express version: PCIe 3.0 x8,  -TDP/Default TDP: 65W cTDP: 45-65W,  -Temp. Max: 95°C,  -Maximum memory speed: 2933MHz,  -Memory type: DDR4,  -Memory channels: 2,  -Graphics Frequency: 1250 MHz,  -Graphics model: Radeon™ Vega 8 Graphics,- Number of graphics cores: 8",
  },

  {
    id: "100",
    name: "MICRO AMD RYZEN 5 PRO 4650G C/VIDEO C/COOLER",
    price: 378,
    imageurl:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-pro-4650g-cvideo-ccooler-0.jpg",
    category: "processors",
    trademark: "Ryzen",
    description:
      "Socket: AM4,  Processor family: AMD Ryzen 5 Pro,  Model: 4650G,  L3 cache: 8MB,  Clock speed: 3.7GHz,  Turbo Frequency: 4.2GHz,  L2 cache: 3MB,  Number of processor threads: 12,  Number of cores: 6,  Manufacturing technology: 7nm,  Memory Channel Support: Dual,  Supported memory: DDR4, SDRAM,  Memory Clock Speed: 3200 MHz Graphics Adapter: Yes,  Graphics Base Frequency:,  Graphics: AMD Radeon Graphics",
  },

  {
    id: 101,
    name: "Logitech G203",
    price: "25",
    imageurl: "https://m.media-amazon.com/images/I/519Xke4dPdL._AC_SL1500_.jpg",
    category: "mouse",
    trademark: "LOGITECH",
    description:
      "It has six buttons that can be configured according to the user's favorite actions, and that also offer precise and fast performance throughout the game. All the profiles that you configure can be saved and used whenever you want. As for the design, it has classic lines, is light and durable.",
  },
  {
    id: 102,
    name: "Logitech Lightspeed G502 HERO",
    price: "40",
    imageurl: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SY450_.jpg",
    category: "mouse",
    trademark: "LOGITECH",
    description:
      "A device that with a 16,000 DPI HERO optical sensor achieves high tracking precision and an almost instantaneous response speed (1000 Hz). It has 11 fast scroll buttons that you can program to your favorite commands like jump or crouch. You can set up and save up to 5 game profiles.",
  },
  {
    id: 103,
    name: "Logitech G Pro",
    price: "33",
    imageurl: "https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SY355_.jpg",
    category: "mouse",
    trademark: "LOGITECH",
    description:
      "In addition to its design, this gamer mouse stands out for its technology, since it has the precision, speed and power of the PMW3366 optical sensor of up to 12,000 DPI to play at the highest competitive level. It also comes with six easy-touch programmable buttons that you can configure to your liking and associate with game commands.",
  },
  {
    id: 104,
    name: "Razer Mamba HyperFlux + Firefly",
    price: "42",
    imageurl: "https://m.media-amazon.com/images/I/71h73jWVqqL._AC_SX679_.jpg",
    category: "mouse",
    trademark: "RAZER",
    description:
      "Possibly the most ambitious experiment of the brand in recent years. Great potential for the time of his release, but a very little understood idea. Since it is a wireless mouse with the efficient '5G Advanced Optical Sensor', but it does not have a battery. That is why this mouse needs the special FireFly mat to work.",
  },
  {
    id: 105,
    name: "Razer LanceHead Tournament Edition",
    price: "40",
    imageurl:
      "https://images-na.ssl-images-amazon.com/images/I/61uSmW2mSBL._AC_UL600_SR600,600_.jpg",
    category: "mouse",
    trademark: "RAZER",
    description:
      "The Razer Lanchead Tournament Edition mouse (a somewhat long name), is a mouse that has received several visits from Razer. It is the ambidextrous mouse par excellence in the house and in its latest iterations they have added the RGB stripes that some like so much.",
  },
  {
    id: 106,
    name: "Razer Basilisk",
    price: "65",
    imageurl: "https://m.media-amazon.com/images/I/71eXWvF3bEL._AC_SL1500_.jpg",
    category: "mouse",
    trademark: "RAZER",
    description:
      "The mouse has eight programmable buttons with Razer Omrom switches and the most peculiar of all of them is located under the left button. It is a detachable button that serves mainly to temporarily control the DPI. With this feature we can choose on the fly between two profiles, an excellent functionality for shooters. In addition, it has a button at the base to control the hardness of the wheel turn, so we can choose how resistant it will be.",
  },
  {
    id: 107,
    name: "Razer Mamba Wireless",
    price: "39",
    imageurl: "https://m.media-amazon.com/images/I/71BmQQjvFmL.jpg",
    category: "mouse",
    trademark: "RAZER",
    description:
      "It is a very well balanced mouse with a quite respectable autonomy. Benefiting the right-handed grip the most, this mouse offers an excellent grip for claw-grip users and, to a lesser extent, a good experience for fingertip-grip users. The device offers the aforementioned Razer Omron switches with a guaranteed 50 million keystrokes.",
  },
  {
    id: 108,
    name: "Razer DeathAdder Elite",
    price: "40",
    imageurl: "https://m.media-amazon.com/images/I/41SgqZ2X9ZL.jpg",
    category: "mouse",
    trademark: "RAZER",
    description:
      "The Razer Deathadder mouse has triumphed due to its ergonomic shape that has captivated thousands of gamers for years. The Deathadder Elite is Razer's latest iteration of this mouse and all it does is bring the snake into the new times with features like the best sensor they have.",
  },
  {
    id: 109,
    name: "SENSEI 310",
    price: "43",
    imageurl: "https://m.media-amazon.com/images/I/5131QYM9oEL._AC_SL1500_.jpg",
    category: "mouse",
    trademark: "SteelSeries",
    description:
      "The world's first true 1 to 1 esports sensor. Exclusive split-trigger mouse button design. Omron 50-million click mechanical switches. Ambidextrous design with pure silicone side grips",
  },
  {
    id: 110,
    name: "FPS M65 RGB ELITE",
    price: "55",
    imageurl: "https://m.media-amazon.com/images/I/61W9P9ZaeeL._AC_SY355_.jpg",
    category: "mouse",
    trademark: "CORSAIR",
    description:
      "The CORSAIR M65 RGB ELITE Tunable Gaming Mouse is the most advanced CORSAIR FPS gaming mouse yet, crafted from a durable aluminum frame and equipped with a state-of-the-art 18,000 DPI optical sensor.",
  },
  {
    id: 111,
    name: "Pulsefire Surge RGB",
    price: "60",
    imageurl: "https://m.media-amazon.com/images/I/51U6cxD6KIL._AC_SY355_.jpg",
    category: "mouse",
    trademark: "HyperX",
    description:
      "HyperX Pulsefire Surge™ ofrece a los jugadores lo mejor en estilo y tecnología gracias al revolucionario sensor Pixart 3389, que proporciona una precisión increíble, y a los espectaculares efectos de luz RGB de 360° con su anillo de luz exclusivo. ",
  },
  {
    id: 112,
    name: "HyperX Pulsefire Core RGB",
    price: "26",
    imageurl:
      "https://elektra.vtexassets.com/arquivos/ids/2136864-800-450?v=637169673811370000&width=800&height=450&aspect=true",
    category: "mouse",
    trademark: "HyperX",
    description:
      "Comfortable symmetrical design, Seven programmable buttons (Ambidextrous, Optical, USB, 6200 dpi, 123 g, Black) HX-MC004B.",
  },
  {
    id: 113,
    name: "HyperX Pulsefire Haste",
    price: "45",
    imageurl: "https://m.media-amazon.com/images/I/41R--RDHZAL._AC_.jpg",
    category: "mouse",
    trademark: "HyperX",
    description:
      "Ultralight Gaming Mouse, 59 g, Honey Comb Hex Design, RGB, HyperFlex USB Cable, up to 16000 DPI, 6 Programmable Buttons, HMSH1-A-BK/G.",
  },
  {
    id: 114,
    name: "Lenovo Legion M200",
    price: "44",
    imageurl:
      "https://defabrica.com.mx/defabrica/wp-content/uploads/2020/09/b6788d73-d8e5-4f91-a890-b3f97178d918_1.14bb4cb53e422045ed43e9a88ab9a8ed.jpeg",
    category: "mouse",
    trademark: "Lenovo",
    description:
      "The Lenovo Legion M200 RGB Gaming Mouse is designed for beginners and hobbyist PC gamers. With a comfortable, ambidextrous design, it's affordably priced but uncompromised in functionality and performance. Legion M200 features a 5-button layout, up to 2400 DPI with a 4-level DPI switch, 7-color circulation backlighting, and a braided cable. It is easy to use and configure without any extra complicated software.",
  },
  {
    id: 115,
    name: "MSI B550-A Pro",
    price: "210",
    imageurl: "https://m.media-amazon.com/images/I/91nx+MhjjwL._AC_SL1500_.jpg",
    category: "motherboard",
    trademark: "Msi",
    description:
      "Powered by AMD Ryzen AM4 processors, the MSI B550-A PRO combines stable functionality and high-quality assembly to solve professional workflows. Extended Heatsink Design and Core boost keep critical components operating reliably. PCIe 4.0 slots and M.2 with Shield Frozr provides the latest in device connectivity.",
  },
  {
    id: 116,
    name: "AMD B550 ROG Strix B550-A Gaming",
    price: "240",
    imageurl: "https://m.media-amazon.com/images/I/91LqAWWBgSL._AC_SL1500_.jpg",
    category: "motherboard",
    trademark: "Asus",
    description:
      "AMD B550 Ryzen AM4 Gaming ATX motherboard with PCIe® 4.0, teamed power stages, Intel® 2.5Gb Ethernet, dual M.2 with heatsinks, SATA 6 Gbps, USB 3.2 Gen 2 and Aura Sync RGB.",
  },
  {
    id: 117,
    name: "ASUS ATX ROG Maximus Z690 HERO EVA",
    price: "859",
    imageurl:
      "https://ddtech.mx/assets/uploads/415a7cb8b75d9ccb2741a64486d7eee9.png",
    category: "motherboard",
    trademark: "Asus",
    description:
      "The ROG Maximus Z690 Hero EVA Edition is covered in the classic purple and green of the EVA-01 and is also well equipped. Solid cooling and power delivery are primed to push the latest 12th Gen Intel® Core™ processors to the max. A field layout A.T. around the CPU socket and the polymorphic lighting on the I/O cover that switches between the EVA-01's normal and berserk modes is an added aesthetic treat.",
  },
  {
    id: 118,
    name: "NZXT ATX N7 Z490",
    price: "250",
    imageurl:
      "https://coregaming.com.mx/assets/uploads/sw_00_1616.jpg?1657923975",
    category: "motherboard",
    trademark: "NZXT",
    description:
      "The N7 Z490 includes key features of our RGB controller and fans, allowing intuitive control of four RGB lighting channels and seven fan channels via CAM software. Lighting fixtures from all manufacturers are supported.",
  },
  {
    id: 119,
    name: "B450 GAMING PLUS MAX ATX - Socket AM4",
    price: "340",
    imageurl: "https://m.media-amazon.com/images/I/91CmbbP8aNL._AC_SL1500_.jpg",
    category: "motherboard",
    trademark: "Msi",
    description:
      "Satisfying gamers with what they really need, B450 GAMING PLUS MAX is equipped with Core Boost, Turbo M.2, DDR4 Boost and USB 3.2 Gen2 connector.",
  },
  {
    id: 120,
    name: "AORUS B450",
    price: "210",
    imageurl: "https://m.media-amazon.com/images/I/81n-PqaOr+L.jpg",
    category: "motherboard",
    trademark: "AORUS",
    description:
      "AMD B450 AORUS Motherboard with Hybrid Digital PWM, M.2 with Thermal Protection, GIGABYTE Gaming LAN with 25KV ESD Protection, Anti-Sulfur Design, CEC 2019 Ready, RGB FUSION 2.0.",
  },
  {
    id: 121,
    name: "Asus ROG Strix Z590-E Gaming WiFi",
    price: "300",
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_683116-MLM48031649229_102021-O.webp",
    category: "motherboard",
    trademark: "Asus",
    description:
      "Intel® Z590 LGA 1200 ATX Motherboard with PCIe® 4.0, 14 + 2 Teamed Power Phases, Bi-Directional AI Noise-Cancellation, AI Overclocking, AI Cooling, AI Networking, WIFI 6E (802.11ax), Dual Intel® 2.5 Ethernet Gb, Quad M.2 with heatsinks, USB 3.2 Gen 2, SATA and AURA Sync RGB lighting.",
  },
  {
    id: 122,
    name: "Motherboard GIGABYTE H610M H DDR4",
    price: "40",
    imageurl:
      "https://med.greatecno.com/436966/gigabyte-ga-h610m-h-ddr4-1700.jpg",
    category: "motherboard",
    trademark: "Gigabyte",
    description:
      "Intel® H610 Motherboard with 6+1+1 Hybrid Phases Digital VRM Design, PCIe 4.0* Design, Gen3 x4 M.2 , Intel® GbE with cFosSpeed ​​, Anti-Sulfur Resistor, Smart Fan 6.",
  },
  {
    id: 123,
    name: "ASUS PRIME H610M-E",
    price: "40",
    imageurl:
      "https://ddtech.mx/assets/uploads/a40e0f3e851ac5e2ee627f152382b21a.png",
    category: "motherboard",
    trademark: "Asus",
    description:
      "ASUS Prime series motherboards are expertly designed to unleash the full potential of 12th Gen Intel® processors. With a robust power design, comprehensive cooling solutions, and intelligent tuning options, Prime H610 offers users and PC builders a range of performance tuning options through intuitive software and firmware features.",
  },
  {
    id: 124,
    name: "ASUS ATX PRIME Z690-P D4",
    price: "40",
    imageurl:
      "https://ddtech.mx/assets/uploads/32437954bda60547a5c72d7f9733aac4.jpg",
    category: "motherboard",
    trademark: "Asus",
    description:
      "Engineers have designed the ASUS Prime series to harness the full potential of 12th Gen Intel® processors. Equipped with a powerful power design, comprehensive cooling solutions, and intelligent tuning options, the PRIME Z690-P WIFI D4 includes options very intuitive performance tuning for DIY lovers.",
  },
  {
    id: 125,
    name: "ASUS ATX PRIME Z690-P D4",
    price: "40",
    imageurl:
      "https://ddtech.mx/assets/uploads/32437954bda60547a5c72d7f9733aac4.jpg",
    category: "motherboard",
    trademark: "Asus",
    description:
      "Engineers have designed the ASUS Prime series to harness the full potential of 12th Gen Intel® processors. Equipped with a powerful power design, comprehensive cooling solutions, and intelligent tuning options, the PRIME Z690-P WIFI D4 includes options very intuitive performance tuning for DIY lovers.",
  },
  {
    id: 126,
    name: "Corsair Vengeance Performance",
    price: 79.99,
    imageurl: "https://m.media-amazon.com/images/I/71jEe1WNewL._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "Ryzen",
    description:
      "32GB DDR4 SODIMM Kit (2 x 16GB) for 8th generation or newer Intel Core i7 and AMD Ryzen 4000 Series laptops.",
  },
  {
    id: 127,
    name: "Kingston FURY Impact ",
    price: 39.99,
    imageurl: "https://m.media-amazon.com/images/I/71ecOJDxBSS._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "Kingston",
    description:
      "Maximize your memory and get a boost to your gaming, multitasking and rendering. ",
  },
  {
    id: 128,
    name: "Corsair Vengeance CMW16GX4M2C3200C16 16GB",
    price: 45,
    imageurl: "https://m.media-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "CORSAIR",
    description:
      "CORSAIR VENGEANCE RGB PRO Series DDR4 overclocked memory illuminates your PC to mesmerizing effect with dynamic multi-zone RGB lighting, while delivering the best performance features of DDR4.",
  },
  {
    id: 129,
    name: "Kingston Fury Beast RGB DDR4 8GB",
    price: 35,
    imageurl: "https://m.media-amazon.com/images/I/61D5qoqV2hS._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "Kingston",
    description:
      "Gamer Memory For PC, Capacity: 8GB, Frequency: 3200Mhz, Latency: CL 16, Form Factor: DIMM 288-Pin, Color: RGB, Part Number: KF432C16BBA/8",
  },
  {
    id: 130,
    name: "XPG Spectrix D50 8GB",
    price: 9,
    imageurl: "https://m.media-amazon.com/images/I/41N4OrHMbML._AC_SL1200_.jpg",
    category: "Memory RAM",
    trademark: "XPG",
    description:
      "Reaching speeds of up to 4133 MHz and with a maximum capacity of 32 GB, the XPG SPECTRIX D50 module is a monster of a memory module. It also looks striking with a sleek geometric style and a stunning triangular RGB light bar.",
  },
  {
    id: 131,
    name: "XPG DIMM ADATA GAMMIX D10 8GB DDR4 3200Mhz",
    price: 30,
    imageurl: "https://m.media-amazon.com/images/I/51I2NTd76ZL._AC_SL1000_.jpg",
    category: "Memory RAM",
    trademark: "XPG",
    description:
      "XPG GAMMIX D10 DDR4 memory modules are designed for gamers and PC enthusiasts and support the new Intel X299 implementation plus SPD 2666MHz, with speeds up to 3600MHz out of the box out of the box.",
  },
  {
    id: 132,
    name: "Deepcool 500W DA500 80 Plus Bronze",
    price: 52,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33804_Fuente_Deepcool_500W_DA500_80_Plus_Bronze_c1debc82-grn.jpg",
    category: "Powerbank",
    trademark: "Deepcool",
    description: "PCMOD",
  },
  {
    id: 133,
    name: "Gamemax 800W 80 Plus Bronze VP-800",
    price: 67,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17855_Fuente_Gamemax_800W_80_Plus_Bronze_VP-800_effe4fa6-grn.jpg",
    category: "Powerbank",
    trademark: "Gamemax",
    description:
      "With the GameMax VP-800 power supply you can ensure continuous and stable power to your desktop computer and optimize the operation of its components. Temperature control. Through its cooling system, you will be able to maintain the ideal temperature of its components and avoid overheating. No noise or distractions. Due to its silent operation, your equipment will operate minimizing the noise level, so that your day is more pleasant.",
  },
  {
    id: 134,
    name: "PNY 8GB XLR8 Gaming EPIC-X RGB",
    price: 9,
    imageurl: "https://m.media-amazon.com/images/I/41+tgelxf5S._AC_SL1000_.jpg",
    category: "Memory RAM",
    trademark: "PNY",
    description:
      "Overview. A PNY XLR8 Gaming EPIC-X RGB Memory Upgrade offers a brilliant RGB design combined with extreme overclocked performance, taking your PC to the extreme. Not only can you destroy the competition, but your system can look good while doing so.",
  },
  {
    id: 135,
    name: "Thermaltake Smart BX1 650W RGB 80 Plus Bronze",
    price: 63,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15520_Fuente_Thermaltake_Smart_BX1_650W_RGB_80_Plus_Bronze_6b9f2601-grn.jpg",
    category: "Memory RAM",
    trademark: "Thermaltake",
    description:
      "Smart BX1 RGB 650W (230V) The Smart BX1 RGB series features high-quality components, stable continuous output at 40 C and a 5-year warranty, virtually silent operation, easy installation, and reliable performance. The pre-installed 256 RGB colors 10 RGB LED fan offers excellent airflow, 3 lighting modes, 7 color options, power LED and onboard memory. For users looking for a power supply with advanced features and aesthetic appeal.",
  },
  {
    id: 136,
    name: " Vengeance RGB Pro 32GB",
    price: 94.99,
    imageurl: "https://m.media-amazon.com/images/I/51gCXtjJKhL._AC_SL1138_.jpg",
    category: "Memory RAM",
    trademark: "CORSAIR",
    description:
      "Iluminación RGB dinámica multizona: 10 LED RGB ultrabrillantes por módulo. Toma el control en el software CORSAIR iCUE y sincroniza la iluminación con otros productos CORSAIR RGB, incluyendo enfriadores de CPU, teclados y ventiladores.",
  },
  {
    id: 137,
    name: "Crucial RAM 32GB Kit (2x16GB)",
    price: 80.49,
    imageurl: "https://m.media-amazon.com/images/I/61F3iyHZd0L._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "Crucial",
    description:
      "La RAM de 3200 MHz puede bajar a 2933 MHz o 2666 MHz si la especificación del sistema solo soporta 2933 MHz o 2666. Mejora la capacidad de respuesta de tu sistema, ejecuta aplicaciones más rápido y realiza múltiples tareas con facilidad",
  },
  {
    id: 138,
    name: "Crucial RAM 8GB DDR5 4800MHz",
    price: 36,
    imageurl: "https://m.media-amazon.com/images/I/71-UXUaZUrL._AC_SL1500_.jpg",
    category: "Memory RAM",
    trademark: "Crucial",
    description:
      "Desbloquea el potencial de tus procesadores Intel Core de 12ª generación Aprovecha velocidades de ardiente y ancho de banda de memoria masivo Juega a velocidades de fotogramas más altas, ejecuta software exigente y potencia a través de cargas de trabajo pesadas",
  },
  {
    id: 139,
    name: "Gigabyte 650W 80 Plus Bronze P650B",
    price: 65,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9751_Fuente_Gigabyte_650W_80_Plus_Bronze_P650B__4d80c52d-grn.jpg",
    category: "Powerbank",
    trademark: "Gigabyte",
    description:
      "With the Giga-Byte Technology P650B power supply you can ensure continuous and stable power to your desktop computer and optimize the operation of its components. Temperature control. Through its cooling system, you will be able to maintain the ideal temperature of its components and avoid overheating. Without noise or distractions due to its silent operation, your equipment will operate minimizing the noise level, so that your day is more pleasant.",
  },
  // gabinetes
  {
    id: 140,
    name: "Thermaltake Core P3 ATX",
    price: 129.99,
    imageurl: "https://m.media-amazon.com/images/I/61zE5QFHYLL._AC_SL1200_.jpg",
    category: "Tower",
    trademark: "ASIN",
    description:
      "Compatible with Mini ITX, Micro ATX, ATX Open frame widescreen display: 5mm thick tempered glass on the front 3-way placement design: wall mount, vertical and horizontal placement GPU vertical mount: one PCI riser cable and included",
  },
  {
    id: 141,
    name: "Corsair 4000D Airflow",
    price: 104.99,
    imageurl: "https://m.media-amazon.com/images/I/81hL4tPkXZL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "ATX",
    description:
      "Combining innovative cable management, focused airflow, and proven CORSAIR build quality, the 4000D is a trim choice for an immaculate high-performance PC. The CORSAIR RapidRoute cable management system makes it quick and easy to route your main cables through a single channel, with ample 0.98-inch (25mm) of clearance behind the motherboard for all your cables. It includes two 4.72-inch (120mm) Corsair AirGuide fans, with anti-swirl blades to focus airflow and improve cooling. The spacious interior can accommodate a maximum of 6 x 4.72-inch (120mm) or 4 x 5.51-inch (140mm) fans, as well as multiple radiators, including one 14.1-inch (360mm) on the front and one 11-inch. (280mm) on top (depending on RAM height) Put modern connections within easy reach with a front panel I/O that includes a USB 3.1 Type-C port, USB 3.0 port, and a microphone and audio jack",
  },
  {
    id: 142,
    name: "Bgears b-Voguish ",
    price: 60.99,
    imageurl: "https://m.media-amazon.com/images/I/51g7EnEs5BL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Voguish",
    description:
      "Smart BX1 RGB 650W (230V) The Smart BX1 RGB series features high-quality components, stable continuous output at 40 C and a 5-year warranty, virtually silent operation, easy installation, and reliable performance. The pre-installed 256 RGB colors 10 RGB LED fan offers excellent airflow, 3 lighting modes, 7 color options, power LED and onboard memory. For users looking for a power supply with advanced features and aesthetic appeal.",
  },
  {
    id: 143,
    name: "Antec Torque Black",
    price: 80,
    imageurl: "https://m.media-amazon.com/images/I/61ua+mQs3YL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Aluminium",
    description:
      "Precision-Cut Craftsmanship: Comprised of 14 aluminum panels, ensures perfection around every curve and edge Unmatched Performance and Beauty: 4mm tempered glass panels on both sides, showcase your gear Extensive Liquid Cooling Support: Allows for 1080p installation 365mm with ease front and top",
  },
  {
    id: 144,
    name: "AeroCool Cylon RGB",
    price: 53.99,
    imageurl: "https://m.media-amazon.com/images/I/81ktljmAa4L._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "AeroCoo",
    description:
      "ventilation. Supports liquid cooling: 240mm radiator on the front panel. Support Air Cooling: 120mm fan on top to improve cooling performance. Supports high-end graphics cards up to 14.6 inches.",
  },
  {
    id: 145,
    name: "Cooler Master MasterBox TD500",
    price: 149.99,
    imageurl: "https://m.media-amazon.com/images/I/81nRifUlMEL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Cooler Master ",
    description:
      "The polygonal mesh features a three-dimensional contour and is also capable of simultaneously providing high airflow and dust filtration. A crystal-clear tempered glass side panel has a crystal-clear design, precision-engineered for strength and aesthetics. Materials: Steel, Plastic Three included addressable RGB fans flood the build with illumination while providing considerable airflow.",
  },
  {
    id: 146,
    name: "Cylon RXM",
    price: 63,
    imageurl:
      "https://imgs.search.brave.com/0e7DNCp3ilE--sNAhFc36E_T8TEX7yZ0vrC_otdZLSw/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuZG9vY2Fjb21t/ZXJjZS5jb20uYnIv/Y2hpcGJ5dGUvcHJv/ZHVjdC9nYWJpbmV0/ZS1nYW1lci14dHJp/a2UtYmktdHVyYm8t/NjM2Yi0xNDc2OTg1/MzQxNzk5OF8xMDAw/eDEwMDArZmlsbF9m/ZmZmZmYuanBn",
    category: "Tower",
    trademark: "Cylon",
    description:
      "Rgb Ready Mid Tower Side Window Full Acrylic Case. Stylish LED backlight with 13 lighting modes on the front panel. 6 RGB flow lighting modes. 7 solid color modes. Supports liquid cooling: 240mm radiator on the front panel. Support Air Cooling: 120mm fan on top to improve cooling performance. Supports high-end graphics cards up to 365mm.",
  },
  {
    id: 147,
    name: "ASUS TUF Gaming GT301",
    price: 99.99,
    imageurl: "https://m.media-amazon.com/images/I/81anm+VxFKL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Asus",
    description:
      "Sleek Design: Perforated honeycomb front panel to aid airflow and features a tempered glass side panel to show off the insides of your build in the compact case. Efficient cooling: Equipped with three 120mm Aura Sync addressable RGB illuminated fans and one 120mm rear fan, plus up to six fan mounting points for targeted airflow.",
  },
  {
    id: 148,
    name: "Cooler Master Caja enfriadora micro-ATX",
    price: 67,
    imageurl: "https://m.media-amazon.com/images/I/81I9Ef0fOIL._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Cooler Master",
    description:
      "The I/O panel can be adjusted in 6 different places and the case can be positioned: vertical or horizontal Edge-to-edge acrylic clear side panel offers a full view inside Body depth height: can support power supply full-size ATX",
  },
  {
    id: 149,
    name: "Cooler Master CMP 510 ATX",
    price: 99.99,
    imageurl: "https://m.media-amazon.com/images/I/81K-Bh-RKZS._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "Cooler Master",
    description:
      "ARGB Strip: A bright ARGB border is cut into the clean geometry of the front panel design.",
  },
  {
    id: 150,
    name: "CORSAIR 7000D Airflow",
    price: 269.99,
    imageurl: "https://m.media-amazon.com/images/I/81Fun8OWgPS._AC_SL1500_.jpg",
    category: "Tower",
    trademark: "CORSAIR",
    description:
      "Build your legacy with the 7000D AIRFLOW, a tower case for your most ambitious PC builds, offering easy cable management, a spacious interior, and massive cooling potential with room for up to three simultaneous 14.1-inch (360mm) radiators. ). A high airflow optimized steel front panel delivers massive airflow to your system for maximum cooling.",
  },
  {
    id: 151,
    name: "A400 480GB SSD SATA 2.5",
    price: 75,
    imageurl: "https://mesajil.com/wp-content/uploads/2022/10/15920-1.jpg",
    category: "SSD",
    trademark: "Kingston",
    description:
      "Kingston's A400 solid-state drive offers huge improvements in response speed, without additional hardware upgrades. It provides incredibly faster boot, load and file transfer times compared to mechanical hard drives. 	Supported by its latest-generation controller, which delivers read and write speeds of up to 500 MB/s and 450 MB/s, respectively, this SSD is 10 times faster than traditional hard drives and provides improved performance, ultra-fast response speed in multitasking processing and overall system acceleration.",
  },
  {
    id: 152,
    name: "240GB M2 NVME GREEN SN350",
    price: 35,
    imageurl:
      "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-green-sn350-nvme-ssd/gallery/new/wd-green-sn350-nvme-ssd-240gb-hero.png.wdthumb.1280.1280.webp",
    category: "SSD",
    trademark: "Western Digital",
    description:
      "The WD Green SN350 WD Green NVMe SSD can revitalize your old computer for everyday use. Whether you're in class', shopping, chatting or surfing the web, this drive can work up to four times faster2 than SATA drives. 		Because SSDs have no moving parts, they offer an impact-resistant design to protect important data from accidental bumps and drops.",
  },
  {
    id: 153,
    name: "2TB BLUE SSD 2.5",
    price: 185,
    imageurl:
      "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-3d-nand-sata-ssd/gallery/2tb/wd-blue-3d-nand-sata-ssd-2tb-front.png.wdthumb.1280.1280.webp",
    category: "SSD",
    trademark: "Western Digital",
    description:
      "Ready to meet your high-performance computing needs, the WD Blue SATA SSD offers high capacity, enhanced reliability and ultra-fast speed.",
  },
  {
    id: 154,
    name: "BLACK 500GB SN770",
    price: 98,
    imageurl:
      "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn770-nvme-ssd/gallery/wd-black-sn770-nvme-ssd-front.png.wdthumb.1280.1280.webp",
    category: "SSD",
    trademark: "Western Digital",
    description:
      "Get in on the action now with the WD_Black SN770 NVMe4 SSD. This purpose-built drive has a PCIe Gen42 interface that delivers ultra-fast speeds up to 5,150 MB/s2 .",
  },
  {
    id: 155,
    name: "T-FORCE VULCAN Z, 1TB, SATA 6GB/S, 2.5",
    price: 95,
    imageurl:
      "https://imagenes.deltron.com.pe/images/productos/on-line/items/large/ss/d1/ssd1ttfvulcanz.jpg",
    category: "SSD",
    trademark: "TEAMGROUP",
    description:
      "Equipped with a 3D flash memory chip for a fast and smooth gaming experience superior to traditional hard drives, making it the best entry-level SSD for new gamers venturing into the world of gaming.",
  },
  {
    id: 156,
    name: "M.2 Interfaz (NVME Protocol PCIe 4.0 x4) 980 Pro",
    price: 138,
    imageurl:
      "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v8p500bw/gallery/es-980-pro-nvme-m2-ssd-mz-v8p500bw-503500075?$650_519_PNG$",
    category: "SSD",
    trademark: "SAMSUNG",
    description:
      "Unleash the power of the Samsung PCIe 4.0 NVMe SSD 980 PRO for next-level performance. Leveraging the PCIe 4.0 interface, the 980 PRO offers twice the data transfer speed of PCIe 3.0 while supporting PCIe 3.0 for greater versatility.",
  },
  {
    id: 157,
    name: "PNY CS900, 1TB, SATA 6.0 GB/S, 2.5",
    price: 80,
    imageurl:
      "https://imagenes.deltron.com.pe/images/productos/on-line/items/large/ss/d1/ssd1tpycs900.jpg",
    category: "SSD",
    trademark: "PNY",
    description:
      "The CS900 offers all the most sought-after features at an excellent price and is designed for easy and cost-effective HDD replacement in the PC system to help achieve faster boot times, faster application launches and better overall system performance.",
  },
  {
    id: 158,
    name: "SA2000M8/250G 250GB",
    price: 35,
    imageurl:
      "https://http2.mlstatic.com/D_NQ_NP_938908-MLA41049310783_032020-O.webp",
    category: "SSD",
    trademark: "Kingston",
    description:
      "Kingston's A2000 line is the ideal storage solution for you, achieving read/write speeds of up to 2,200/2,000MB/sec. In addition, it offers 3 times the performance of a SATA SSD with faster load times, lower power and less heat.",
  },
  {
    id: 159,
    name: "FURY Renegade PCIe 4.0 NVMe M.2 SSD",
    price: 175,
    imageurl:
      "https://media.kingston.com/kingston/features/ktc-features-ssd-renegade.jpg",
    category: "SSD",
    trademark: "Kingston",
    description:
      "Kingston FURY Renegade SSD achieves blazing speeds of up to 7,300/7,000 MB/s1 read/write, and up to 1,000,000 IOPS1, resulting in remarkable smoothness and an exceptional gaming experience.",
  },
  {
    id: 160,
    name: "HP SSD S650 2.5 480 GB SATA III 6GB/S",
    price: 45,
    imageurl:
      "https://i.linio.com/p/1e3194df6e4ccdfefd572c905fe314a5-product.webp",
    category: "SSD",
    trademark: "HP",
    description:
      "HP SSD S650 2.5 480GB SATA III 6Gb/s Solid State Drive HP SSD S650 2.5  480GB SATA III 6Gb/s Write speed 490MB/s, read speed 560MB/s.",
  },
  {
    id: 161,
    name: "GIGABYTE SSD 1TB",
    price: 95,
    imageurl:
      "https://static.gigabyte.com/StaticFile/Image/Global/4820f8b97052173a885d412cd85ca48e/Product/21625/png/500",
    category: "SSD",
    trademark: "Gigabyte",
    description:
      "The recently updated SSD is a software that provides users with an overview of SSD status and various aspects, such as model name, FW version, health status and sensor temperature. In addition, users can erase all data with the Secure Erase function.",
  },
  {
    id: 162,
    name: "SSD 480GB Crucial Bx500 2.5 SATA",
    price: 65,
    imageurl: "https://mesajil.com/wp-content/uploads/2023/01/19862-1.jpg",
    category: "SSD",
    trademark: "Crucial",
    description:
      "With thousands of hours of pre-launch validation from Micron, dozens of SSD qualification tests and a heritage of award-winning solid state drives, the Crucial BX500 has been thoroughly tested, tested and tested.",
  },
  {
    id: 163,
    name: "SA100 240GB SSD SATA 2.5″",
    price: 34,
    imageurl:
      "https://techpointperu.com/image/cache/catalog/2021/SA100-Acer-400x400.jpg",
    category: "SSD",
    trademark: "ACER",
    description:
      "The 2.5″ SA100 SSD achieves a read speed of up to 560 MB/s. It is capable of fast booting PCs and accelerating application loading. More reliable and durable than a hard drive.",
  },
  {
    id: 164,
    name: "GREEN SN350, 480GB, NVME, M.2 2280, PCIE GEN3",
    price: 65,
    imageurl:
      "https://imagenes.deltron.com.pe/images/productos/on-line/items/large/ss/dw/ssdwds480g2g0c.jpg",
    category: "SSD",
    trademark: "Western Digital",
    description:
      "Western Digital's SSD Dashboard is free, downloadable software that monitors current performance, space availability and temperature, among other factors, to ensure maximum performance.",
  },
  {
    id: 165,
    name: "500GB M2 NVME PCI 2280 HP EX900",
    price: 65,
    imageurl:
      "https://i.linio.com/p/f8c5a6e434e26223ad236cf14b2e6991-product.webp",
    category: "SSD",
    trademark: "HP",
    description:
      "The EX900 series supports full-speed NCQ command queuing and TRIM instructions to provide continuous and fast response to laptops and PCs.",
  },
  {
    id: 166,
    name: "Apolo Series Black Pro 180°",
    price: 185,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/18889135_1?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "DREIZT",
    description:
      "Sitting in this chair is from another galaxy. in the Dreizt Apollo Series Gamer Chair you will travel around the universe in comfort and style. it's on your new ship. Designed with the highest quality. with fine details and finishes that will make you the envy of your colleagues.",
  },
  {
    id: 167,
    name: "Extingtion 155° Lumbar Massager and Black Footres",
    price: 95,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/gsc_116558625_1537372_1?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "EXTINGTION",
    description:
      "The Extingtion Gamer Chairs with their ergonomic and extra padded system, reclining from 90º to 155º and their weight support up to 120 Kg, will make you experience the best comfort in home office hours, games or virtual classes.",
  },
  {
    id: 168,
    name: "Stile Mica",
    price: 80,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/882429378_1?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "MICA",
    description:
      "Designed under the most rigorous quality standards. Ergonomic. soft and with adjustable head and back cushions, this gaming chair keeps you comfortable and relaxed at all times.",
  },
  {
    id: 169,
    name: "LED light",
    price: 195,
    imageurl:
      "https://sodimac.scene7.com/is/image/SodimacPeru/8789339_01?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "JUST HOME COLLECTION",
    description:
      "Gamer chair in black with details of led lights; height and adjustable armrests; with gas lift mechanism. Its upholstery is made of wear-resistant polyurethane and has two cushions of the same material; in the area of the head and neck; and lumbar area.",
  },
  {
    id: 170,
    name: "Blue Gamer Chair",
    price: 85,
    imageurl:
      "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42188415_1-c4I1g2_9.jpg?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "CASA JOVEN",
    description:
      "The blue gamer chair by Casa Joven has been designed exclusively to provide comfort to the back while working on the computer or using video game consoles. The seat is made of leather, the base is made of nylon and the padding is made of foam to give comfortable support to the body. ",
  },
  {
    id: 171,
    name: "Blazze Pro",
    price: 124,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/gsc_114158407_904528_1?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "BLAZZE",
    description:
      "Blazze Pro Gamer Chairs with its ergonomic and extra padded system, reclining from 90º to 150º and its weight support up to 120 Kg, will make you experience the best comfort in home office hours, games or virtual classes.",
  },
  {
    id: 172,
    name: "Technisport Clasic bLACK",
    price: 190,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/17404767_2?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "TECHNISPORT",
    description:
      "The chair is extremely comfortable, just like the picture, it is super easy to assemble. It has to tilt 180°, it is sturdy, has lumbar support, armrests, seat depth, mobility via casters and for your feet to rest. You can place your head and neck in an upright position with your shoulders relaxed.",
  },
  {
    id: 173,
    name: "King Series Dorado Premium",
    price: 355,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/18889142_1?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "DREIZT",
    description:
      "You are the king of the world, that's why the Dreizt King Series Gamer Chair is for you; robust, elegant, sophisticated and comfortable. It came to accompany you in your best moments. Part of our Premium line. manufactured with the highest quality seal for this type of gamer chairs.",
  },
  {
    id: 174,
    name: "180° SGBL ",
    price: 315,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/17898845_2?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "TECHNISPORT",
    description:
      "The product consists of a TECHNISPORT 180° White Gamer Chair and a Carbon Fiber Desk, both sealed in boxes.",
  },
  {
    id: 175,
    name: "PRO RGB y BLUETOOTH",
    price: 405,
    imageurl:
      "https://falabella.scene7.com/is/image/FalabellaPE/19514745_2?wid=1500&hei=1500&qlt=70",
    category: "GAMING CHAIR",
    trademark: "Jiqiao",
    description:
      "Remote control includes 5 massage modes. intensity control. timer. localized massage selection. wireless remote control for lighting system. power plug.",
  },
  {
    id: 176,
    name: "ASUS TUF 550W 80 Plus Bronze 550B",
    price: 65,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23310_Fuente_ASUS_TUF_550W_80_Plus_Bronze_550B_cfcb396e-grn.jpg",
    category: "Powerbank",
    trademark: "Asus",
    description:
      "The ASUS TUF Gaming 550W Bronze PSU is the leader in durability. Built to Last TUF Gaming Series power supplies bring together military-grade components and a robust cooling solution to create a power platform you can count on. High-quality capacitors and chokes are put through a wide variety of tests, including extreme temperatures and vibration tests, to ensure they meet rigorous military specifications. 80 PLUS Certification: 80 PLUS Bronze, Format: ATX, EPS, Output Power: 650 W",
  },

  {
    id: 177,
    name: "Thermaltake Smart 500W 80 Plus White",
    price: 55,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9093_Fuente_Thermaltake_Smart_500W_80_Plus_White__2800b77a-grn.jpg",
    category: "Powerbank",
    trademark: "Thermaltake",
    description:
      "Incorporating various components, the Smart Series models are rated from 430W to 700W, save energy with high efficiency of up to 86%, and fit any mainstream build with the most demanding requirements. An integrated smart cooling fan delivers excellent airflow at an exceptionally low noise level. 80 PLUS Certification: 80 PLUS, Form Factor: ATX, EPS, Power Output: 700 W",
  },

  {
    id: 178,
    name: "Gigabyte 650W 80 Plus Bronze P650B",
    price: 65,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9751_Fuente_Gigabyte_650W_80_Plus_Bronze_P650B__4d80c52d-grn.jpg",
    category: "Powerbank",
    trademark: "Gigabyte",
    description:
      "With the Giga-Byte Technology P650B power supply you can ensure continuous and stable power to your desktop computer and optimize the operation of its components. Temperature control. Through its cooling system, you will be able to maintain the ideal temperature of its components and avoid overheating. Without noise or distractions due to its silent operation, your equipment will operate minimizing the noise level, so that your day is more pleasant.",
  },

  {
    id: 179,
    name: "Deepcool 500W DA500 80 Plus Bronze",
    price: 52,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33804_Fuente_Deepcool_500W_DA500_80_Plus_Bronze_c1debc82-grn.jpg",
    category: "Powerbank",
    trademark: "Depcool",
    description: "PCMODD POWERBANK ATX DEEPCOOL DA500 80 PLUS BRONZE",
  },

  {
    id: 180,
    name: "Deepcool 600W DA600 80 Plus Bronze",
    price: 59,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33805_Fuente_Deepcool_600W_DA600_80_Plus_Bronze_31685e6c-grn.jpg",
    category: "Powerbank",
    trademark: "Depcool",
    description: "PCMODD POWERBANK ATX DEEPCOOL DA600 80 PLUS BRONZE",
  },

  {
    id: 181,
    name: "Deepcool 700W DA700 80 Plus Bronze",
    price: 62,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33806_Fuente_Deepcool_700W_DA700_80_Plus_Bronze_65a49133-grn.jpg",
    category: "Powerbank",
    trademark: "Depcool",
    description: "PCMODD POWERBANK ATX DEEPCOOL DA700 80 PLUS BRONZE",
  },

  {
    id: 182,
    name: "Thermaltake Smart BX1 650W RGB 80 Plus Bronze",
    price: 63,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15520_Fuente_Thermaltake_Smart_BX1_650W_RGB_80_Plus_Bronze_6b9f2601-grn.jpg",
    category: "Powerbank",
    trademark: "Thermaltake",
    description:
      "Smart BX1 RGB 650W (230V) The Smart BX1 RGB series features high-quality components, stable continuous output at 40 C and a 5-year warranty, virtually silent operation, easy installation, and reliable performance. The pre-installed 256 RGB colors 10 RGB LED fan offers excellent airflow, 3 lighting modes, 7 color options, power LED and onboard memory. For users looking for a power supply with advanced features and aesthetic appeal.",
  },

  {
    id: 183,
    name: "Thermaltake Smart BX1 750W RGB 80 Plus Bronze",
    price: 70,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15525_Fuente_Thermaltake_Smart_BX1_750W_RGB_80_Plus_Bronze_d527ed93-grn.jpg",
    category: "Powerbank",
    trademark: "Thermaltake",
    description:
      "Smart BX1 RGB 750W (230V) The Smart BX1 RGB series features high-quality components, stable continuous output at 40 C and a 5-year warranty, virtually silent operation, easy installation, and reliable performance. The pre-installed 256 RGB colors 10 RGB LED fan offers excellent airflow, 3 lighting modes, 7 color options, power LED and onboard memory. For users looking for a power supply with advanced features and aesthetic appeal.",
  },

  {
    id: 184,
    name: "Gamemax 800W 80 Plus Bronze VP-800",
    price: 67,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17855_Fuente_Gamemax_800W_80_Plus_Bronze_VP-800_effe4fa6-grn.jpg",
    category: "Powerbank",
    trademark: "Gamemax",
    description:
      "With the GameMax VP-800 power supply you can ensure continuous and stable power to your desktop computer and optimize the operation of its components. Temperature control. Through its cooling system, you will be able to maintain the ideal temperature of its components and avoid overheating. No noise or distractions. Due to its silent operation, your equipment will operate minimizing the noise level, so that your day is more pleasant.",
  },

  {
    id: 185,
    name: "Redragon 500W 80 Plus Bronze GC-PS001",
    price: 52,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18024_Fuente_Redragon_500W_80_Plus_Bronze_GC-PS001_b55ab0d7-grn.jpg",
    category: "Powerbank",
    trademark: "Redragon",
    description:
      "With the GameMax VP-800 power supply you can ensure continuous and stable power to your desktop computer and optimize the operation of its components. Temperature control. Through its cooling system, you will be able to maintain the ideal temperature of its components and avoid overheating. No noise or distractions. Due to its silent operation, your equipment will operate minimizing the noise level, so that your day is more pleasant.",
  },

  {
    id: 186,
    name: "Corsair CV650 650W 80 Plus Bronze No incluye cable de poder",
    price: 50,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18488_Fuente_Corsair_CV650_650W_80_Plus_Bronze_No_incluye_cable_de_poder_04ab6d16-grn.jpg",
    category: "Powerbank",
    trademark: "CORSAIR",
    description:
      "trademark: CORSAIR, MODEL: CV650 CP-9020236-AR, CV Series CV650 - 80 Certified 650 Watt PSU, PLUS Bronze, CORSAIR CV power supplies are perfect for powering your new PC at home or in the office, with 80 PLUS Bronze efficiency guaranteed to continuously deliver full power to the system.",
  },

  {
    id: 187,
    name: "Corsair 550W CV550 80 Plus Bronze",
    price: 48,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19533_Fuente_Corsair_550W_CV550_80_Plus_Bronze_7fa2fbc5-grn.jpg",
    category: "Powerbank",
    trademark: "CORSAIR",
    description:
      "trademark: CORSAIR, MODEL: CV550 CP-9020236-AR, CV Series CV550 - 80 Certified 550 Watt PSU, PLUS Bronze, CORSAIR CV power supplies are perfect for powering your new PC at home or in the office, with 80 PLUS Bronze efficiency guaranteed to continuously deliver full power to the system.",
  },

  {
    id: 188,
    name: "Corsair 550W CV450 80 Plus Bronze",
    price: 50,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20117_Fuente_Corsair_450W_80_Plus_Bronze_CV450_0adbe0de-grn.jpg",
    category: "Powerbank",
    trademark: "CORSAIR",
    description:
      "trademark: CORSAIR, MODEL: CV450 CP-9020236-AR, CV Series CV450 - 80 Certified 450 Watt PSU, PLUS Bronze, CORSAIR CV power supplies are perfect for powering your new PC at home or in the office, with 80 PLUS Bronze efficiency guaranteed to continuously deliver full power to the system.",
  },

  {
    id: 189,
    name: "Seasonic 850W 80 Plus Gold Focus GX-850 ",
    price: 50,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20231_Fuente_Seasonic_850W_80_Plus_Gold_Focus_GX-850_df11f28f-grn.jpg",
    category: "Powerbank",
    trademark: "Seasonic",
    description:
      "If you are looking for ideas for your compact equipment, Seasonic's 850 Watt FOCUS+ Gold power supplies may be the ideal choice for you with their reliable and efficient power supply, fully modular cables and efficiently regulated quiet operation. The high-quality 120mm Dynamic Bearing (FDB) fans are very quiet and have proven to be very stable over the long term.",
  },

  {
    id: 190,
    name: "Be Quiet! 600W 80 Plus Bronze U9",
    price: 54,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23729_Fuente_Be_Quiet__600W_80_Plus_Bronze_U9_06c10bd9-grn.jpg",
    category: "Powerbank",
    trademark: "BeQuiet",
    description:
      "If you are looking for ideas for your compact equipment, Seasonic's 850 Watt FOCUS+ Gold power supplies may be the ideal choice for you with their reliable and efficient power supply, fully modular cables and efficiently regulated quiet operation. The high-quality 120mm Dynamic Bearing (FDB) fans are very quiet and have proven to be very stable over the long term.",
  },

  {
    id: 191,
    name: "Wifi USB Mercusys Wireless MW150US Nano",
    price: 3,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33669_Placa_Wifi_USB_Mercusys_Wireless_MW150US_Nano_e0b4aaee-grn.jpg",
    category: "wireless network card",
    trademark: "Mercusys",
    description: "Mercusys Wifi Usb N150 Mw150us Nano adapter",
  },

  {
    id: 192,
    name: "Wifi USB Mercusys Wireless MW300UM",
    price: 4,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33672_Placa_Wifi_USB_Mercusys_Wireless_MW300UM_3d843197-grn.jpg",
    category: "wireless network card",
    trademark: "Mercusys",
    description:
      "N300 Mini Wireless USB adapter, Provides fast 300 Mbps Wi-Fi connections for wired devices. Ideal for online gaming, HD streaming, web browsing and more",
  },

  {
    id: 193,
    name: "WIFI USB Tp-Link TL-WN725N 150Mbps",
    price: 5,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30465_Placa_WIFI_USB_Tp-Link_TL-WN725N_150Mbps_d2d955dd-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description: "Wifi TP-LINK TL-WN725N 150Mbps Nano adaptator.",
  },

  {
    id: 194,
    name: "Mercusys MW300UH Wireless White 300Mbps",
    price: 7,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34312_Adaptador_de_Red_Mercusys_MW300UH_Wireless_White_300Mbps_34a7376d-grn.jpg",
    category: "wireless network card",
    trademark: "Mercusys",
    description: "300 Mbps High Gain Wireless USB adapter",
  },

  {
    id: 195,
    name: "Ethernet PCIe Tp-Link TG-3468 1000Mbps",
    price: 6,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12586_Adaptador_Ethernet_PCIe_Tp-Link_TG-3468_1000Mbps_38025fac-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description:
      "-PCIe 10/100/1000 Mbps adapter, 32-bit PCIe interface: saving space inside the equipment, Wake-on-LAN function, remote management via local network",
  },

  {
    id: 196,
    name: "WiFi PCIe Tp-Link TL-WN781ND 150Mbps",
    price: 6,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_1469_Placa_WiFi_PCIe_Tp-Link_TL-WN781ND_150Mbps_0a1802b2-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description: "TP-LINK PCI EXPRESS 150MBPS WIRELESS NETWORK CARD",
  },

  {
    id: 197,
    name: "WIFI USB Mercusys MU6H 200Mbps",
    price: 8,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33676_Placa_WIFI_USB_Mercusys_MU6H_200Mbps_d0992ae2-grn.jpg",
    category: "wireless network card",
    trademark: "Mercusys",
    description:
      "Mercusys MU6H wifi adapter dual band 5ghz usb network card MU6H (V.1)",
  },

  {
    id: 198,
    name: "Tp-Link UE200 USB 2.0",
    price: 10,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34328_Adaptador_de_Red_Tp-Link_UE200_USB_2.0_da516d84-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description: "Usb 2.0 Network Adapter Tp-link Ue200 Ethernet 10/100 mbps",
  },

  {
    id: 199,
    name: "WiFi USB Tp-Link TL-WN822N Hi Power 300Mbps",
    price: 9,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11907_Placa_WiFi_USB_Tp-Link_TL-WN822N_Hi_Power_300Mbps_8e4ba45b-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description: "300Mbps High Gain Wireless USB Adapter",
  },

  {
    id: 200,
    name: "WiFi USB Tp-Link TL-WN8200ND 300Mbps",
    price: 12,
    imageurl:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18887_Placa_WiFi_USB_Tp-Link_TL-WN8200ND_300Mbps_c8538526-grn.jpg",
    category: "wireless network card",
    trademark: "TP-Link",
    description: "TP Link TL-WN8200ND 300mbps Wireless WiFi USB Adapter",
  },
  {
    id: 201,
    name: "Logitech Lightspeed G604",
    price: "55",
    imageurl:
      "https://i.pinimg.com/736x/2d/24/84/2d2484cc3a9fa0ab800d77fc1d044cdd.jpg",
    category: "mouse",
    trademark: "LOGITECH",
    description:
      "The Logitech Lightspeed G604 is the most advanced mouse on the entire list and therefore has a slightly higher price. It is wireless and has a strategic design, designed to control games such as MOBA, MMO and Battle Royale. It has 15 programmable controls, tactically incorporated so that you can configure them in the most convenient way.",
  },
];

module.exports = products;
