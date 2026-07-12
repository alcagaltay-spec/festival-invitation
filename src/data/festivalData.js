export const festivalData = {
  municipality: {
    name: "Tosya Belediye Başkanlığı",
    mayor: {
      name: "Volkan Kavaklıgil",
      title: "Tosya Belediye Başkanı",
    },
  },

  festival: {
    edition: "24.",
    name: "Tosya Kültür ve Pirinç Festivali",
    shortName: "Kültür ve Pirinç Festivali",
    date: "28 — 30 Ağustos 2026",
    location: "Cumhuriyet Meydanı",
    district: "Tosya",
    city: "Kastamonu",
  },

  invitation: {
    recipientTitle: "Sayın Cumhurbaşkanımız",
    recipientName: "Recep Tayyip Erdoğan",

    message:
      "Tosya’mızın kültürel değerlerini, köklü geleneklerini ve bereketli topraklarını bir araya getiren 24. Tosya Kültür ve Pirinç Festivali’ni teşriflerinizle onurlandırmanızdan büyük memnuniyet duyacağız.",

    signatureName: "Volkan Kavaklıgil",
    signatureTitle: "Tosya Belediye Başkanı",
  },

  opening: {
    label: "Resmî Davet",
    buttonText: "Daveti Görüntüle",
    scrollText: "Festival programını keşfedin",
  },

  program: [
    {
      id: 1,
      date: "28 Ağustos 2026",
      day: "Cuma",
      events: [
        {
          time: "13.30",
          title: "Resmî Açılış Töreni",
          type: "ceremony",
        },
        {
          time: "20.00",
          title: "Hande Ünsal",
          subtitle: "Konser",
          type: "concert",
        },
        {
          time: "22.00",
          title: "Berkay",
          subtitle: "Konser",
          type: "concert",
        },
      ],
    },

    {
      id: 2,
      date: "29 Ağustos 2026",
      day: "Cumartesi",
      events: [
        {
          time: "Gün Boyu",
          title: "Kültürel Etkinlikler",
          subtitle: "Festival programları ve etkinlikler",
          type: "activity",
        },
        {
          time: "20.00",
          title: "Tuğba Yurt",
          subtitle: "Konser",
          type: "concert",
        },
        {
          time: "22.00",
          title: "Murat Boz",
          subtitle: "Konser",
          type: "concert",
        },
      ],
    },

    {
      id: 3,
      date: "30 Ağustos 2026",
      day: "Pazar",
      events: [
        {
          time: "Gün Boyu",
          title: "Geleneksel Sünnet Şöleni",
          type: "activity",
        },
        {
          time: "20.00",
          title: "Ceza",
          subtitle: "Konser",
          type: "concert",
        },
        {
          time: "22.00",
          title: "Hadise",
          subtitle: "Konser",
          type: "concert",
        },
        {
          time: "Program Sonu",
          title: "Festival Kapanışı",
          type: "closing",
        },
      ],
    },
  ],
};