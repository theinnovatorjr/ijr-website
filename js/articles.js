const articles = [
  {
    id: 1,
    title: "The Innovator Jr.'s Newspaper",
    date: "2025-06-10",
    image: "public/Newspaper Pubmat.png",
    summary: "Issue 1 Volume 1 | The official newspaper of the Innovator Jr. for S.Y. 2024-2025. Access the full issue by clicking this section.",
    tags: ["Publication", "Newspaper"],
    author: "by IJR Editorial Board",
    content: `<p>Issue 1 Volume 1 | The official newspaper of the Innovator Jr. for S.Y. 2024-2025. Access the full issue by clicking this section.</p>`
  },
  {
    id: 2,
    title: "A LEGACY PENNED IN INK",
    date: "2025-07-09",
    image: "public/Legacy.jpg",
    summary: "In a span of only one school year, what began as a modest collective of young journalists evolved into a rising vanguard of truth-seeking and principled storytelling.",
    tags: ["Feature"],
    author: "by Jamie Anne Manejero",
    content: `<p>In a span of only one school year, what began as a modest collective of young journalists evolved into a rising vanguard of truth-seeking and principled storytelling.</p>`
  },
  {
    id: 3,
    title: "UP Diliman hosts Love Laban Pride Festival",
    date: "2025-06-29",
    image: "public/Lovelaban.jpg",
    summary: "The University of the Philippines (UP) Diliman held the 2025 Pride PH Festival, titled “Love Laban,” on June 28 in celebration of International Pride Day.",
    tags: ["News"],
    author: "by Kaitlin Dionisio",
    content: `<p>The University of the Philippines (UP) Diliman held the 2025 Pride PH Festival, titled “Love Laban,” on June 28 in celebration of International Pride Day.</p>`
  },
  {
    id: 4,
    title: "Twinkling Unapologetically",
    date: "2025-06-28",
    image: "public/Pride.jpg",
    summary: "The river never asked to be poured all the way to the sea, yet it settled there unapologetically. The trees never asked to grow this tall.",
    tags: ["Feature"],
    author: "by Francheska Rasonabe",
    content: `<p>The river never asked to be poured all the way to the sea, yet it settled there unapologetically. The trees never asked to grow this tall.</p>`
  },
  {
    id: 5,
    title: "For the Man of Our Beginning",
    date: "2025-06-15",
    image: "public/Fathers-day.jpg",
    summary: "Have you already given your father a kiss and a big hug today? If not, there's still time—because this is his day! Even a simple greeting can mean the world to him.",
    tags: ["Feature"],
    author: "by Santino J-Lord Bejogan",
    content: `<p>Have you already given your father a kiss and a big hug today? If not, there's still time—because this is his day! Even a simple greeting can mean the world to him.</p>`
  },
  {
    id: 6,
    title: "Mula sa Balkonahe ng Kawit",
    date: "2025-06-12",
    image: "public/kalayaan.jpg",
    summary: "127 taon na ang nakararaan nang unang iniangat at iwinagayway ni Heneral Emilio Aguinaldo ang watawat ng Pilipinas sa balkonahe ng kaniyang tahanan sa Kawit, Cavite.",
    tags: ["Feature"],
    author: "by Robin Nicole Constantino",
    content: `<p>127 taon na ang nakararaan nang unang iniangat at iwinagayway ni Heneral Emilio Aguinaldo ang watawat ng Pilipinas sa balkonahe ng kaniyang tahanan sa Kawit, Cavite.</p>`
  },
  {
    id: 7,
    title: "Silence Meets Faith",
    date: "2025-06-06",
    image: "public/Eid al-adha.jpg",
    summary: "What if you were asked to give up something you love most—without explanation, just faith? Discover the quiet power and deep meaning of Eid al-Adha, a sacred day marked not by noise, but by silent obedience, reflection, and unseen sacrifice.",
    tags: ["Feature"],
    author: "by Ciree Carillo",
    content: `<p>What if you were asked to give up something you love most—without explanation, just faith? Discover the quiet power and deep meaning of Eid al-Adha, a sacred day marked not by noise, but by silent obedience, reflection, and unseen sacrifice.</p>`
  },
  {
    id: 8,
    title: "FEU-D HS students head to polls for TAMHalalan 2025",
    date: "2024-05-05",
    image: "public/HSSCC-Halalan.jpg",
    summary: "Hundreds of FEU Diliman Junior High School and Grade 11 students cast their ballots for TAMHalalan 2025...",
    tags: ["News"],
    author: "by Seleeya Rumbaoa",
    content: `<p>Hundreds of FEU Diliman Junior High School and Grade 11 students cast their ballots for TAMHalalan 2025...</p>`
  },
  {
    id: 9,
    title: "Halalan o Hangalan?",
    date: "2024-05-05",
    image: "public/Halalan.png",
    summary: "Exploring how technology is reshaping education for the next generation of learners.",
    tags: ["Editorial"],
    author: "ni Jamie Anne Manejero",
    content: `<p>Exploring how technology is reshaping education for the next generation of learners.</p>`
  },
  {
    id: 10,
    title: "Sa Piling ni Nanay",
    date: "2025-05-11",
    image: "public/Mothers-day.jpg",
    summary: `<p>Mula sa aking hibla ng buhok, at pagtatago ng pagmumukmok, wala akong takas kahit ano pang gawin kong pag-aamok. Kilalang-kilala mo ako, na para bang kahit anong gawin kong bago, ako pa rin ang dalawang-taong gulang na anak mo.
Kilala mo ako, sa paraang hindi ko matamo. Kahit wala akong bigkasin—alam mo kung saan ako hahanapin. Alam mong kailangan ko ng kasama sa aking mga haharapin. Lagi kang handang iabot ang iyong kamay maramdaman ko lamang na ako ay may karamay. Handa kang ibuwis ang iyong buhay, at iparamdam sa akin ang pag-ibig mong walang humpay. Sinisigurado mong maikikintal ko sa isip ko na hindi ko mararamdaman na ako ay mag-isa, ano man ang maging hatol ng madla, nandito ka—nag-aalaga.
Ang pag-aalaga ng isang ina ay hindi nagsasawa. Ito ay puno ng pag-uunawa, puno ng pagpapasensiya, ipararamdam nito sa’yo ang pagmamahal na walang kakumpetensya. Sa kaniyang mundo, nag-iisa ka. Sa kaniyang mundo, ikaw ang bida.
Kaya sa araw na ito, gusto ko namang ipagdiwang ang presensiya mo. Ang isang tulad mong hindi nakalimutang unahin ako. Ang isang katulad mong naniwala sa kung anong makakaya ko, bago ko nakita ang potensiyal sa sarili ko. 
Karapat-dapat mong madama na ikaw ay nag-iisa, hindi lamang sa araw na ito—araw-araw dapat ginugunita ang isang katulad mo. Ang lahat ng iyong paghihirap ay nakikita ko, hindi ko man ibuka ang bibig ko. Lahat ng iyong isinakripisyo ay ibabalik ko sa iyo nang buong-buo. 
Nay, mahal kita higit pa sa sinasabi ko. At hindi ko man masabi ang lahat ng ito, ang pagsisikap ko ngayon ay iniaalay ko sa iyo. Ang magandang buhay na ipinangarap mong makuha ko—ay para din sa iyo. 
Lumalaban ako hindi lang para sa sarili ko—lumalaban ako dahil nagtiwala kang lahat ng ito ay kaya ko.</p>`,
    tags: ["Feature"],
    author: "by Trisha Go",
    content: `<p>Mula sa aking hibla ng buhok, at pagtatago ng pagmumukmok, wala akong takas kahit ano pang gawin kong pag-aamok. Kilalang-kilala mo ako, na para bang kahit anong gawin kong bago, ako pa rin ang dalawang-taong gulang na anak mo.
Kilala mo ako, sa paraang hindi ko matamo. Kahit wala akong bigkasin—alam mo kung saan ako hahanapin. Alam mong kailangan ko ng kasama sa aking mga haharapin. Lagi kang handang iabot ang iyong kamay maramdaman ko lamang na ako ay may karamay. Handa kang ibuwis ang iyong buhay, at iparamdam sa akin ang pag-ibig mong walang humpay. Sinisigurado mong maikikintal ko sa isip ko na hindi ko mararamdaman na ako ay mag-isa, ano man ang maging hatol ng madla, nandito ka—nag-aalaga.
Ang pag-aalaga ng isang ina ay hindi nagsasawa. Ito ay puno ng pag-uunawa, puno ng pagpapasensiya, ipararamdam nito sa’yo ang pagmamahal na walang kakumpetensya. Sa kaniyang mundo, nag-iisa ka. Sa kaniyang mundo, ikaw ang bida.
Kaya sa araw na ito, gusto ko namang ipagdiwang ang presensiya mo. Ang isang tulad mong hindi nakalimutang unahin ako. Ang isang katulad mong naniwala sa kung anong makakaya ko, bago ko nakita ang potensiyal sa sarili ko. 
Karapat-dapat mong madama na ikaw ay nag-iisa, hindi lamang sa araw na ito—araw-araw dapat ginugunita ang isang katulad mo. Ang lahat ng iyong paghihirap ay nakikita ko, hindi ko man ibuka ang bibig ko. Lahat ng iyong isinakripisyo ay ibabalik ko sa iyo nang buong-buo. 
Nay, mahal kita higit pa sa sinasabi ko. At hindi ko man masabi ang lahat ng ito, ang pagsisikap ko ngayon ay iniaalay ko sa iyo. Ang magandang buhay na ipinangarap mong makuha ko—ay para din sa iyo. 
Lumalaban ako hindi lang para sa sarili ko—lumalaban ako dahil nagtiwala kang lahat ng ito ay kaya ko.</p>`
  },
  {
    id: 11,
    title: "",
    date: "tara g!",
    image: "public/Labor-day.jpg",
    summary: "Sobrang sikip, sobrang sarap, sobrang latina",
    tags: ["Features"],
    author: "by ",
    content: `<p>Sobrang sikip, sobrang sarap, sobrang latina</p>`
  },
  // Placeholder for your 3-5 paragraph article
  {
    id: 12,
    title: "[Your Article Title Here]",
    date: "[YYYY-MM-DD]",
    image: "public/placeholder.jpg",
    summary: "[Short summary of your article goes here.]",
    tags: ["[Tag1]", "[Tag2]"],
    author: "[Your Name]",
    content: `<p>[First paragraph]</p><p>[Second paragraph]</p><p>[Third paragraph]</p>`
  }
];

export default articles; 