const lords = [
  { id:1,
    name: "Tokugawa Hidetada",
    img: "Tokugawa_Hidetada.jpg",
    status: "2nd Shogun",
    city: "Edo",
    description:
      "He is the third son of Tokugawa Ieyasu, the first shōgun of the Tokugawa shogunate.",
    requirments: [
      { mission: "Protecting the Shogun while he travels to Kyoto from Edo" },
    ],
    seeks: "Samurai",
  },
  { 
    id:2,
    name: "Fukushima Masanori",
    status: "Japanese daimyō",
    img: "Masanori_Fukushima.jpeg",
    city: "Ama, Owari Province",
    description:
      "A retainer of Toyotomi Hideyoshi, he fought in the battle of Shizugatake in 1583, and soon became known as one of Seven Spears of Shizugatake which also included Katō Kiyomasa and others.",
    requirments: [{ mission: "Taking Part in the Kyūshū Expedition" }],
    seeks: "Samurai",
  },
  {
    id:3,
    name: "Hachisuka Iemasa",
    status: "Japanese daimyō",
    img: "Hachisuka_Iemasa.jpg",
    city: "Tokushima",
    description:
      "He served both Oda Nobunaga and Toyotomi Hideyoshi, taking part in Hideyoshi's Korean campaign. Iemasa fought on the side of Tokugawa Ieyasu at the Battle of Sekigahara",
    requirments: [{ mission: "Seeking medicine from the north of Uta" }],
    seeks: "Healer",
  },
  {
    id:4,
    name: "Date Masamune",
    status: "Regional ruler",
    img: "Date_Masamune.jpg",
    city: "Yonezawa",
    description:
      "Heir to a long line of powerful daimyō in the Tōhoku region, he went on to found the modern-day city of Sendai. An outstanding tactician, he was made all the more iconic for his missing eye, as Masamune was often called dokuganryū, or the One-Eyed Dragon of Ōshu",
    requirments: [
      { mission: "Preparation to defend the ancestral land of the Date Clan" },
    ],
    seeks: "Samurai",
  },
  {
    id:5,
    name: "Matsuoka Shoan",
    status: "Japanese Confucianist and herbalist",
    img: "Matsuoka_Shoan.jpg",
    city: "Kyoto",
    description:
      "Matsuoka is a prolific writer and teacher during his time, opening his own school and mentored noted Edo era doctors and scholars Niwa Masahide, Minami Asai, Ono Ranzan, Tanikawa Kotosuga, and Toda Asahiyama. His research of the species, forms, and production of animals and plants lead to great strides in the understanding of herbology and influenced pharmaceutical throughout East Asia.",
    requirments: [
      { mission: "Protection during my travel to Mount Fuji to find herbs" },
    ],
    seeks: "Samurai",
  },
  {
    id:6,
    name: "Watanabe Kazan",
    status: "Japanese painter, scholar",
    img: "Watanabe_Kazan.jpg",
    city: "Tahara",
    description:
      " Watanabe himself served the lord of Tahara as a senior councilor, one of his achievements being said to be protecting the domain from even a single death from starvation during the Tenpō famine. He was heavily influenced by the artistic styles of the West, forming a unique style with elements of Japanese and European art.",
    requirments: [
      {
        mission:
          "Protecting my family during their travel from Tahara Province up until Edo",
      },
    ],
    seeks: "Samurai",
  },
];

export default lords