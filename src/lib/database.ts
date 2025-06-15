interface DetailedProduct {
   id: number;
   name: string;
   category: string;
   price: string;
   images: string[];
   description: string;
   features: string[];
   displayMode?: ("popular" | "featured" | "...Something You might want to add")[];
   specifications: {
      [key: string]: string;
   };
}

export const categories = [
   { id: "all", name: "All Products" },
   { id: "jewellery", name: "Jewellery Items" },
   { id: "crafting", name: "Craftings" },
   { id: "clocks", name: "Wooden Clocks" },
   { id: "others", name: "Others" },
] as const;

export const products: DetailedProduct[] = [
   {
      id: 24,
      name: "WC - 4A11",
      category: "clocks",
      price: "৳650",
      images: ["https://i.postimg.cc/CK78kwDN/2.png"],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      displayMode: ["popular"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 1,
      name: "WC - 4A0",
      category: "clocks",
      price: "৳990",
      displayMode: ["popular"],
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471307482_122100997946696417_2176757133234934279_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG-y4_qyUn0Q816_1bWPl0LqxovZiAfjGOrGi9mIB-MY12Hj5zm3AzsPUItxW2WY6XJqs5edSILACTdlJQlMuW5&_nc_ohc=9hECdNPD99wQ7kNvwFgm_Ip&_nc_oc=AdnfWf5Jv-rxKJOhpLuXxyvhvgEdAAOLi1nQdclPdHs1QipZwG1Au8iLVijaSL5BGWo&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=KvzZGdDAhyhb4y3WoahTXw&oh=00_AfPVPNIi2hkDaoIuR3IgCogvfDb46l7Caok4mIF4UKwonA&oe=684C328E",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 2,
      name: "WC - 4A1",
      category: "clocks",
      displayMode: ["popular"],
      price: "৳1,390",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471165432_122100717080696417_3133648347393880866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGf-MhfY9Sqi5S-QkjD_umspT44QnHQIWalPjhCcdAhZvHVq5RecPMGcTRtBgzCpIeyqQjVH38GtyqallBxdZab&_nc_ohc=stChLZrCGewQ7kNvwExNqi3&_nc_oc=AdkOi9ZyEFenZ3YpYilNMHAuyZQxjGXnVXuLu_M--V_vp4thO17KxfRRbeTJPtog9p0&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=vPYiAjmINJff7Y3NkMpMNw&oh=00_AfOgFW45mwHD41K_pvrJQQYIOTAF4VCz8Ub1bJuGTIymKw&oe=684C1C14",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 3,
      name: "WC - 4A2",
      category: "clocks",
      displayMode: ["popular"],
      price: "৳1,590",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471259743_122101645640696417_6900407314962153247_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGyzVchFx4c6EV-l9YZQXTKzdEaJUqqevPN0RolSqp68xX_HT_LncOTTq1xDBG_Dnwyy2cS6IzQEfrShCJlzwXF&_nc_ohc=7GdrDfrcuBkQ7kNvwEW0pRl&_nc_oc=AdnhSbJFcJPcKASgLZf24EDIbNm-Ey1f4TX1Y6APGnZcio6NdNzxhOcoOto39KzVFUE&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=-Sgr--k2jfNH5wwmnsqOxQ&oh=00_AfMsuMuwuA2AtHgIGkBCMv1Qi1GB1I4DMtkcaqBGr1TIyA&oe=684C1937",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 4,
      name: "WC - 4A3",
      category: "clocks",
      price: "৳1,390",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471628020_122106495980696417_4243098608412261549_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjcvTZg5NNQrKn-rWExufm5qVM1tPJZvjmpUzW08lm-KGf_AKm9r8PCY9mwopS6DAjTJfwdK5yh992VTK-G0AZ&_nc_ohc=SYh-8ETixKQQ7kNvwHw45h7&_nc_oc=Adny33rdEgiy_BAublkC09yrM13EHRLubGgyccaCKy18vVspHV_zzEMyCUVc1Ew7wbM&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=vjlIoNAJhelj2Apcqu8Veg&oh=00_AfO3gBeqqcYM0fHXxhjQejIHyDPCYPh3z9RNB-T9xQJExw&oe=684C1F74",
      ],
      displayMode: ["featured"],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 5,
      name: "WC - 4A4",
      category: "clocks",
      price: "৳1,190",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471158505_122102611730696417_7702242618740819126_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpass9_AjDbge_3em-ymyQQoYZaWg0v8hChhlpaDS_yP2UjCwk34Xn8fid0zudmivCkMN9BpPsOZ_hRvAzlBWQ&_nc_ohc=Vg687V81_igQ7kNvwE328Jx&_nc_oc=AdkH5Z3vcYyIbhFCUaXpEjcpPOL_wWQKtW9D7gzwgTf7Rccv_rbVt3WvK_tBdlX-tDQ&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=nAkPdZwkxWM4O5rYp0y3IQ&oh=00_AfOc6oa5M4qMwRsImBYgwpndq7swG-NFDwTzjLF-XYFS3g&oe=684C3245",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 6,
      name: "WC - 4A5",
      category: "clocks",
      price: "৳1,290",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471290584_122103167576696417_2073228724194031228_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_jdy8Z2nMfxwQkiVTB_zoNBusUlpQ14M0G6xSWlDXg9MKWW1Iqq3Dtu202by8ID7cULfR0N44zbqiLoSZC7eQ&_nc_ohc=EQWQUygXO-cQ7kNvwE2Dr6H&_nc_oc=AdmOe7UfAU9N_1nSf3a6l3rluqDBzJH5KpY3aii57vWjsiyfiuQnbb5Ltar9FVBwcR8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=ly36GEUiJMq75-vjOigMzQ&oh=00_AfM1o2GOFFn8M3XfLOVOetsg3UE7hNV41dFSGPoR5sMwXA&oe=684C27D8",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 7,
      name: "WC - 4A6",
      category: "clocks",
      price: "৳990",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471571907_122104888166696417_5560806094284877619_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqeXSC-ADBiybFrHI6fwcP97T8epIL7YX3tPx6kgvthZRoe7LqDUxNkUdffCvZwPagJ7LafSTx_4Vqk4MgCrNz&_nc_ohc=E7IZ2TaPf9IQ7kNvwGjx4HV&_nc_oc=AdlyBMVAwycVGaDebM9Fb8P88LOgGlLYhqUlTXVMNw0OeG0V0i4xGLczq7jLjKs0BJU&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=ilN8n7pOBocWKjcgRe1AOA&oh=00_AfNZs42zq_0X1kPWZu7UwuYKA0orYKS7OZqavyd4UFmEQw&oe=684C2B9A",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 8,
      name: "WC - 4A7",
      category: "clocks",
      price: "৳990",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/472000735_122106643574696417_8925009377170057142_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGh58H3wscc-vlO7vQQMdP-AFMIFkgB5KcAUwgWSAHkp_b8a_ATF4H656nT_mPpCIz4uyWXhOH2uKIy7H_0zAzV&_nc_ohc=Sc4X0C5w9t8Q7kNvwEimCs_&_nc_oc=AdnJrLwkmnGslSWRPSqbEVR2O0CPxotzM6dgyS637JesQf782dqAK-_ZpBfeAof6BX4&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=ArNTZrJY1Av3ocKGjHzUvw&oh=00_AfMOkdNPUf0ORJvEhbcm90_4cJXksBXdYWG8TN3owbuOcA&oe=684C3FA4",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 9,
      name: "WC - 4A8",
      category: "clocks",
      price: "৳990",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471633333_122104179518696417_1011566076230797079_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzKkkUplKrNXUS8zbVl6g9URAmVEfnc9NRECZUR-dz06Yv8IyHZLwB3E7qWzbosxnYsKJ_IP0IzHoW0i72GdhH&_nc_ohc=L9v3tbPH7Y4Q7kNvwGJFrf_&_nc_oc=AdmXmHNpVIlwVHzA0UVgnoKUAkt2X1FzluHO0tq0MSCVRGo_jK9vo8RoZPa0ywzjhHQ&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=vzq7JQuJQ14j3HKQ1Dl4lg&oh=00_AfNQJEzr_XZK3N71ni2o5PonuG5q23WMBb5zgJuW19goMw&oe=684C0E7B",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 10,
      name: "WC - 4A9",
      category: "clocks",
      price: "৳1,390",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471507924_122105801642696417_3810479010648338497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHk81ZaO-csfo_k4QwSSxGKKI7fRa1IJuAojt9FrUgm4AYNVHjGM0dFjYBJfldpMKbaHTeSplx573FQPCLgCDR-&_nc_ohc=mMOvyWluABwQ7kNvwHjIGe2&_nc_oc=AdlXho_nD6BV60gnj4_Ob_qTgngAy5qLKLnNN0juOGIlTgNMeDE-_64bnIbuMyXlmW8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=4nDkhBVwvjoNSmi0YTr0Ww&oh=00_AfMjAtc0GZ61jlX8_xbdw3N1c60uK6G7SS_G2T0e1N0WLQ&oe=684C22F2",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 11,
      name: "WC - 4A10",
      category: "clocks",
      price: "৳1,590",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/472013073_122106898016696417_5165008041578867123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGp9S3dTv15G40pFYYLqV-rhwRs2hpwjGKHBGzaGnCMYoqM7bYqIiT6OGYVzln7VxJyf1ioq9LzIw9LcXdD72Km&_nc_ohc=vwUP8BQZHWEQ7kNvwGgsMlB&_nc_oc=Adn7g2ljD8IPcPq68exPh1kmow5PULJnQUpnND6Kxb7p8pe0VSyNBiAdgqssqsgy1Xg&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=wYIri8GIzFvWequqZBHJjw&oh=00_AfNV4Ntq7RR7nVOtAK4JFvMIpWD36brLDTPc3eix91gN0g&oe=684C3116",
      ],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "25cm x 25cm",
         Weight: "500g",
      },
   },
   {
      id: 12,
      name: "TC - 4A0",
      category: "clocks",
      price: "৳490",
      images: ["https://i.postimg.cc/W4BL79t3/0.jpg"],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "20cm x 20cm",
         Weight: "400g",
      },
   },
   {
      id: 13,
      name: "TC - 4A1",
      category: "clocks",
      price: "৳590",
      images: ["https://i.postimg.cc/ZR6ksryL/0-1.jpg"],
      description: "Handcrafted wooden clock with brass compass design",
      features: ["Handcrafted", "Wooden", "Brass compass design"],
      specifications: {
         Material: "Wood, Brass",
         Size: "20cm x 20cm",
         Weight: "400g",
      },
   },
   {
      id: 22,
      name: "Triangular Black",
      category: "jewellery",
      price: "৳150",
      images: ["https://i.postimg.cc/pdbCqVmM/7.png"],
      description: "Bold and modern triangular black wooden earrings with a sharp edge.",
      features: ["Handcrafted", "Wooden", "Triangular design"],
      specifications: {
         Material: "Wood",
         Color: "Black",
         Weight: "10g",
      },
   },
   {
      id: 23,
      name: "Mushroom",
      category: "jewellery",
      price: "৳350",
      images: ["https://i.postimg.cc/7L3VcvzG/8-0.png"],
      description: "Cute mushroom-style drop earrings inspired by forest acorns.",
      features: ["Handcrafted", "Wooden", "Mushroom style"],
      specifications: {
         Material: "Wood",
         Color: "Brown",
         Weight: "12g",
      },
   },
   {
      id: 14,
      name: "Rustic Rhombus",
      category: "jewellery",
      price: "৳200",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/504160623_122130851246696417_5967051889734428364_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFOkwh3XI92yxmMSybJbtvWdnxfrB_lgHB2fF-sH-WAcK7GeJdab4nhUbR5r4KXgxFreXxkthVAKZ-UkOEWbicp&_nc_ohc=qO1kpBunBjsQ7kNvwE7U1Vx&_nc_oc=AdlkxvcmGh8CUyw5jP5y3K0kOzqMlghOw9arv5IjQWKhD_rXR7hAfvF57wRDyJiYmhE&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=8TTocozvla_w54vJrwWM2Q&oh=00_AfMPO9AvJHcT10UPfS5q2Izz0zyFLSKVa_rHSLHLhCabqQ&oe=684C469A",
      ],
      description: "Elegant handcrafted dark wood earrings with a sleek angular drop design.",
      features: ["Handcrafted", "Wooden", "Rhombus shape"],
      specifications: {
         Material: "Wood",
         Color: "Dark brown",
         Weight: "11g",
      },
   },
   {
      id: 15,
      name: "Sunset Cascade",
      category: "jewellery",
      price: "৳300",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/503847407_122130851288696417_8527181941080412485_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdm-BPesprcRoZ6AFk6T4V0Tccq-8AHcPRNxyr7wAdw5XQPiZCahKTuGBuFVDAngJIvLrGQ3Zv5HgXTnTcu3Zm&_nc_ohc=SNb0UtaJewoQ7kNvwEM7ml9&_nc_oc=AdmQpfxiRf_VhgmN0yTvuAHH9QJec9BLUUJWK7IuFyIwk8pE6t-RAMl9oPRE7Kv2rps&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=X_S4WcIUpBUAw8mChXg2hg&oh=00_AfN1V3pwFVwhZUNGufXhC0XKr7NxPQOup6B9wyGdOeR2tg&oe=684C4293",
      ],
      description: "Triple-tone fish-scale shaped earrings inspired by sunset hues.",
      features: ["Handcrafted", "Wooden", "Triple-tone"],
      specifications: {
         Material: "Wood",
         Color: "Multi",
         Weight: "13g",
      },
   },
   {
      id: 16,
      name: "Amber Steps",
      category: "jewellery",
      price: "৳200",
      images: [
         "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/503867474_122130851252696417_1096182907720669246_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOTtwSUMyqIw4eWBoDRrSoOVbGt76OYYA5Vsa3vo5hgAXrXMFh6kTp6WVs-hjIQyRMdK5cb4GShlA9we96nA40&_nc_ohc=ppV_L3VbtGAQ7kNvwFCDYWr&_nc_oc=AdmGZvyrZufMygKQYB13oAAaBL-mm_JeSe2oxgHi7wIbK3JzUeca3u9zqVhkynxlKBg&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=A6Wb9chP7WHBHBJ2UFozbg&oh=00_AfMhfQke4wv4TToMQfnSS7VVrZU-1ZOvIRX1CF8tAMzW3Q&oe=684C4475",
      ],
      description: "Brightly striped vertical earrings made with natural wood tones.",
      features: ["Handcrafted", "Wooden", "Striped"],
      specifications: {
         Material: "Wood",
         Color: "Amber",
         Weight: "10g",
      },
   },
   {
      id: 17,
      name: "Minimal Dusk",
      category: "jewellery",
      price: "৳150",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/504103205_122130851390696417_4741515528506965481_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESgEKohYTLQCePqghq9ZFkJ8GZdE51vfAnwZl0TnW98PUYl_QHr1W7TgK6QYCylLWgn1Ops6ZD5Tq8bpBMHkMS&_nc_ohc=rvV56KFoquYQ7kNvwFLxOXl&_nc_oc=AdnHDj7lF4QaPWihyrPf48OX5Xhfyotrt3g9k8j8RZsZnSnnf2o7XZzSB3yMaTcBCzg&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=bVWcAXUzbVT-mrAv0bK6dg&oh=00_AfN9HHaymN20xEpxPfJrZT3Rvdcl-TEfLutZEkRUrKtTiQ&oe=684C3F51",
      ],
      description: "Minimal rectangular bar earrings with a raw, natural wood finish.",
      features: ["Handcrafted", "Wooden", "Minimal design"],
      specifications: {
         Material: "Wood",
         Color: "Natural",
         Weight: "9g",
      },
   },
   {
      id: 18,
      name: "Cocoa Loops",
      category: "jewellery",
      price: "৳350",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/503911765_122130851420696417_8669763959493707537_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFKkamIFl--2r792iGmOV8MToNRm_mvaNhOg1Gb-a9o2IAXgyTrvT5d5_3gEeHHOLb_sVKs8lAg-DuOvYuEWq8-&_nc_ohc=km6EQXW2aQYQ7kNvwFpkPCD&_nc_oc=Adls0Xcdi4DHW31ElAAkYuWSEfTGbjFhjLpjlhjq_12QKnXxxoGEzI24aJaKko3mmFE&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=7tEeeQR60THUg2JnC_kYJw&oh=00_AfO2ieS_ef1CuFv8eJqui9Jw6ba8kjyiVmcJcHxTopucOQ&oe=684C45C2",
      ],
      description: "Smooth oval-shaped earrings crafted from rich walnut wood.",
      features: ["Handcrafted", "Wooden", "Oval shape"],
      specifications: {
         Material: "Walnut wood",
         Color: "Brown",
         Weight: "14g",
      },
   },
   {
      id: 19,
      name: "Harmony Stripes",
      category: "jewellery",
      price: "৳150",
      images: [
         "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/503893053_122130851360696417_4818994349258671636_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFvl3W-Unjjdqv5osODdk9H5y89c8dRdCfnLz1zx1F0JxWUFsLGQxnGlUfji4LQFwN_38ARhEahyBMXNG999NiF&_nc_ohc=7OrNHvx0pAIQ7kNvwH2oIaf&_nc_oc=Adnwn1_nAReU3Jc3NRaO35yYKWz1cz45fEesUsm6Jg-AxFQx5vg7SRf1oZSL31BHaE8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=7d5n0WpPFmTxyb3H2fwqBA&oh=00_AfMYzto6xHOBpAA71204u86R9ARWIifZq9wRl00US0oqrA&oe=684C4B35",
      ],
      description: "Stylish striped earrings featuring alternating shades of light and dark wood.",
      features: ["Handcrafted", "Wooden", "Striped"],
      specifications: {
         Material: "Wood",
         Color: "Light & Dark",
         Weight: "10g",
      },
   },
   {
      id: 20,
      name: "Vintage Circles",
      category: "jewellery",
      price: "৳350",
      images: ["https://i.postimg.cc/zGQLDD9H/9.png"],
      description: "Classic round hoop earrings made from dark polished wood.",
      features: ["Handcrafted", "Wooden", "Hoop design"],
      specifications: {
         Material: "Wood",
         Color: "Dark brown",
         Weight: "13g",
      },
   },
   {
      id: 24,
      name: "Eclipse Duo",
      category: "jewellery",
      price: "৳350",
      images: ["https://i.postimg.cc/yNSDD4HQ/10.png"],
      description: "Double-layered round wooden earrings inspired by the beauty of an eclipse.",
      features: ["Handcrafted", "Wooden", "Double-layered"],
      specifications: {
         Material: "Wood",
         Color: "Brown",
         Weight: "14g",
      },
   },
   {
      id: 21,
      name: "Rack Tool",
      category: "others",
      price: "৳2500",
      images: ["https://i.postimg.cc/ZKTfNNcN/1.png"],
      description: "Personalized wooden storage box with custom engraving",
      features: ["Personalized", "Wooden", "Custom engraving"],
      specifications: {
         Material: "Wood",
         Size: "40cm x 30cm x 20cm",
         Weight: "2kg",
      },
   },
];
