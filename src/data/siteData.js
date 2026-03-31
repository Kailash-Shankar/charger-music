// ─── NAVIGATION ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Directors',
    href: '/our-directors',
  },
  {
    label: 'Band',
    href: '/band',
    children: [
      { label: 'Leadership', href: '/band/leadership' },
      { label: 'The Vault', href: '/band/the-vault' },
    ],
  },
  { label: 'Percussion', href: '/percussion' },
  {
    label: 'Orchestra',
    href: '/orchestra',
    children: [
      { label: 'Leadership', href: '/orchestra/leadership' },
      { label: 'Photo Gallery', href: '/orchestra/photo-gallery' },
    ],
  },
  { label: 'Color Guard', href: '/color-guard' },
  { label: 'Music Boosters', href: '/music-boosters' },
  { label: 'Sponsors', href: '/sponsors' },
  {
    label: 'Multimedia',
    href: '/multimedia',
    children: [
      { label: 'MPA 2024', href: '/multimedia/mpa-2024' },
      { label: 'Marching Season 2024', href: '/multimedia/marching-season-2024' },
      { label: 'Marching Season 2020', href: '/multimedia/marching-season-2020' },
      { label: 'Marching Season 2019', href: '/multimedia/marching-season-2019' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

// ─── EXTERNAL LINKS ──────────────────────────────────────────────────────────
export const EXTERNAL_LINKS = {
  cuttime: 'https://app.gocuttime.com/login',
  instagram: 'https://www.instagram.com/schs_band/',
  merch: 'https://663922.snap.store/',
  donate: 'https://raise.snap.app/donate/strawberry-crest-band-2025',
  tickets: 'https://chargermusic.ludus.com/index.php',
  schoolWebsite: 'https://www.hillsboroughschools.org/o/strawberrycrest',
  googleMaps: 'https://maps.app.goo.gl/TGeqhbRjeZdJsqiG6',
  bandJoinForm: 'https://forms.gle/FvdZaaWbUZ9WhugQ8',
  colorGuardJoinForm: 'https://forms.gle/G73U85fxugYMzkP8A',
  percussionInfoForm: 'https://forms.gle/NFDo1ixM5JXELQho7',
};

// ─── CONTACT INFO ────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  address: '4691 Gallagher Rd., Dover, FL 33527',
  phone: '813-707-7522 x 282',
  boosterEmail: 'schsmusic@yahoo.com',
  directors: [
    {
      name: 'Timothy Trice',
      title: 'Director of Bands',
      email: 'timothy.trice1@hcps.net',
    },
    {
      name: 'Damian Johnson',
      title: 'Director of Orchestras and Choirs',
      email: 'damian.johnson1@hcps.net',
    },
  ],
};

// ─── DIRECTORS ───────────────────────────────────────────────────────────────
export const DIRECTORS = [
  {
    name: 'Timothy Trice',
    title: 'Band Director',
    image: 'https://static.wixstatic.com/media/407ce4_bd23edac47734965b33b95ff8d21e478~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/tim_trice.jpg',
    bio: `Mr. Timothy Trice is a recent graduate of the University of South Florida, where he earned his Bachelor's Degree in Music Education. During his time at USF, he was involved in a variety of music programs, both as a performer and a leader.

Mr. Trice was a trumpet player in the Herd of Thunder Marching Band and participated in several concert ensembles, gaining experience in both large and small group settings. Outside of teaching, he's also an active musician in the Tampa Bay Area, performing regularly in a variety of settings.

With his background in both performance and education, Mr. Trice strives to create a supportive and engaging environment for his students.`,
  },
  {
    name: 'Damian Johnson',
    title: 'Orchestra/Choir Director',
    image: 'https://static.wixstatic.com/media/407ce4_ad76812a19f843dca34a41e53e9c8c49~mv2.jpeg/v1/fill/w_322,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_ad76812a19f843dca34a41e53e9c8c49~mv2.jpeg',
    bio: `Mr. Johnson's bio coming soon!`,
  },
  {
    name: 'Darla Wing',
    title: 'Color Guard Director',
    image: 'https://static.wixstatic.com/media/407ce4_d77b46e1dcc441bf96bc21114e42ea1a~mv2.jpg/v1/fill/w_264,h_353,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/407ce4_d77b46e1dcc441bf96bc21114e42ea1a~mv2.jpg',
    bio: `Darla Wing is the color guard director at Strawberry Crest High School where she started the program in 2018. Prior she was the director at Lennard High School for 4 years. During her time, Darla's teams has earned the bronze medal in 2015 and gold medals in 2018 and 2024. Also earning the Kevin Paulis Sportsmanship Award in 2024.

Darla is a Lake Gibson High School "Illusion" Alumni where she spun in the inaugural three seasons in the FFCC.

Darla is a proud mother of 3 daughters, one being a guard director herself, and Grandmother of 4 who loves sharing her passion of the sport with the students as well as fellow directors.`,
  },
  {
    name: 'Andres Armijo, Niko Armijo, and Kailash Shankar',
    title: 'Percussion Instructors/Arrangers',
    image: 'https://static.wixstatic.com/media/407ce4_8f11a995ba01490fabf202807355b691~mv2.jpg/v1/crop/x_484,y_631,w_3001,h_1775/fill/w_567,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0116.jpg',
    bio: `Andres, Niko and Kailash are the percussion instructors for the SCHS Drumline. They are all graduates of Strawberry Crest High School, and have been involved at Strawberry Crest for many years, as drum technicians as well as arrangers of the percussion music.`,
    wide: true,
  },
  {
    name: 'Cheri A. Sleeper',
    title: 'Founding Director (2009–2025)',
    image: 'https://static.wixstatic.com/media/407ce4_c811acf2fd5c43e0ab0f447787f51c64~mv2.jpeg/v1/fill/w_480,h_600,al_c,q_80,enc_avif,quality_auto/407ce4_c811acf2fd5c43e0ab0f447787f51c64~mv2.jpeg',
    bio: `Cheri A. Sleeper, recently retired after 39 years, has had a notable career in music education, teaching all grade levels kindergarten through 12th grade in the State of Florida. During her tenure as a music educator, she has led her students to musical excellence performing at the District and State level in both the Florida Orchestra Association and Florida Bandmasters Association as well as performing at the 2024 Florida Music Education Association Clinic/Conference. She continues to serve as an adjudicator for both organizations, serves as a mentor to her colleagues and has been recently appointed to serve as the executive director for the Florida Orchestra Association.`,
    founding: true,
  },
];

// ─── BAND LEADERSHIP ─────────────────────────────────────────────────────────
export const BAND_LEADERSHIP = {
  year: '2025–2026',
  officers: [
    {
      role: 'Drum Majors',
      members: ['Amulya Kuppaa', 'Felicity Burky', 'Ryo Arnoza'],
    },
    {
      role: 'Band Captains',
      members: ['Victor Loerincs', 'Robert Hermida'],
    },
    { role: 'Secretary', members: ['Calvin Kenny'] },
    { role: 'Historian', members: ['Nicole Pulido'] },
    { role: 'Press Secretary', members: ['Sahasra Gubba'] },
    { role: 'Spirit Coordinator', members: ['Daysha Cortez'] },
    { role: 'Librarians', members: ['Saanvi Konda', 'Marissa Pereira'] },
    {
      role: 'Uniform Managers',
      members: ['Abbigail Cobb', 'Natalie Lozano', 'Victoria Myrick', 'Christiana Fields'],
    },
    {
      role: 'Equipment Managers',
      members: ['Rawad Badr', 'Anderson Carpenter', 'Keegan Butler', 'Yair Cabrera-Ambriz'],
    },
  ],
  sectionLeaders: [
    { section: 'Flutes', leaders: ['Drishti Satodiya'] },
    { section: 'Clarinets', leaders: ['Camille Chavarria'] },
    { section: 'Saxophones', leaders: ['Shruti Shankar', 'Saanvi Konda'] },
    { section: 'Trumpets/Horns', leaders: ['Juan Garcia', 'Marissa Pereira'] },
    { section: 'Low Brass', leaders: ['Ryo Arnoza'] },
    { section: 'Percussion', leaders: ['John Brady Ross', 'Macayla Cruz'] },
  ],
};

// ─── MARCHING SHOWS (THE VAULT) ───────────────────────────────────────────────
export const MARCHING_SHOWS = [
  { year: 2009, title: 'Inaugural Season', youtubeUrl: null, image: 'https://static.wixstatic.com/media/407ce4_27de1a2772a04c7799dc33c1cdb2cd2f~mv2.jpg/v1/crop/x_63,y_70,w_441,h_353/fill/w_200,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s1.jpg' },
  { year: 2010, title: 'The Music of Jimmy Buffett', youtubeUrl: 'https://youtu.be/_ufsCJuj5oY', image: 'https://static.wixstatic.com/media/407ce4_f6b38ba5b7d940fba067a91d7609abdb~mv2.jpg/v1/fill/w_177,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s2.jpg' },
  { year: 2011, title: 'Life is a Highway', youtubeUrl: 'https://youtu.be/qVCGynQVMzA', image: 'https://static.wixstatic.com/media/407ce4_509210aed88f44a19a46aed8e6dac457~mv2.png/v1/fill/w_194,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/s3.png' },
  { year: 2012, title: 'Love: Lost and Found / Dreams', youtubeUrl: 'https://youtu.be/PVj9CCnM-OI', image: 'https://static.wixstatic.com/media/407ce4_73edb20cc30d4e728aff9c00b9ddc8c8~mv2.jpg/v1/crop/x_20,y_2,w_373,h_219/fill/w_227,h_133,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s4.jpg' },
  { year: 2013, title: 'Scenes from a Psychotic Circus', youtubeUrl: 'https://youtu.be/6lqZgXwH5tM', image: 'https://static.wixstatic.com/media/407ce4_ad115c3d9297477da4b2c4b26779f89b~mv2.webp/v1/fill/w_200,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s5.webp' },
  { year: 2014, title: 'Balance', youtubeUrl: 'https://youtu.be/1y_jWhx3OuE', image: 'https://static.wixstatic.com/media/407ce4_3444f0fd099c49bea9eadbf55ed70c12~mv2.jpg/v1/fill/w_177,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s6_edited.jpg' },
  { year: 2015, title: 'Chicago 1930', youtubeUrl: 'https://youtu.be/kilxEnFW0V4', image: 'https://static.wixstatic.com/media/407ce4_4b087d466fdc40b4be41ba0ecf2e0a42~mv2.jpg/v1/fill/w_220,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0007_edited.jpg' },
  { year: 2016, title: 'The Genius of Ray Charles', youtubeUrl: 'https://youtu.be/--L-PxUroYo', image: 'https://static.wixstatic.com/media/407ce4_8dffcb50d034420a961a4ab7f5022bbf~mv2.jpg/v1/crop/x_203,y_0,w_1465,h_1765/fill/w_186,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0006_edited.jpg' },
  { year: 2017, title: 'Performance Season', youtubeUrl: null, image: null },
  { year: 2018, title: 'Welcome to the Jungle', youtubeUrl: 'https://youtu.be/FR0LQ8dMnoc', image: 'https://static.wixstatic.com/media/407ce4_a3cff7c2210d47b88d5a76f365aa9d02~mv2.png/v1/fill/w_200,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/s9\'.png' },
  { year: 2018, title: 'The Greatest Showman', youtubeUrl: 'https://youtu.be/BF-VmaJWWR4', image: 'https://static.wixstatic.com/media/407ce4_85cf52ca03c9470a88805b85b2d5ba85~mv2.jpg/v1/fill/w_143,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s10_edited.jpg' },
  { year: 2019, title: 'Legacies', youtubeUrl: 'https://youtu.be/k9x1tGKTd9I', image: 'https://static.wixstatic.com/media/407ce4_7ef67f7fe5054ae4b5716fd44d061237~mv2.jpg/v1/fill/w_220,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9998_edited.jpg' },
  { year: 2020, title: 'The Grand Finale', youtubeUrl: 'https://youtu.be/_9UXp9OVGlI', image: 'https://static.wixstatic.com/media/407ce4_2a7d505e8d5f42fa890d7d41bb69a5d6~mv2.jpg/v1/fill/w_178,h_199,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9999_edited.jpg' },
  { year: 2021, title: 'Performance Season', youtubeUrl: null, image: null },
  { year: 2022, title: 'All You Need is Love', youtubeUrl: 'https://youtu.be/YctnXKqxAWw', image: 'https://static.wixstatic.com/media/407ce4_16766d34af4b49e6b0c169c03d286a4a~mv2.jpg/v1/crop/x_0,y_55,w_1200,h_1090/fill/w_175,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s13_edited.jpg' },
  { year: 2022, title: 'Just Dance', youtubeUrl: 'https://youtu.be/Pf-upLzF1fY', image: 'https://static.wixstatic.com/media/407ce4_cd21d64baee2447082086113fec1be51~mv2.jpg/v1/fill/w_175,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s14_edited.jpg' },
  { year: 2023, title: '4', youtubeUrl: 'https://youtu.be/hFEVimrSYKc', image: 'https://static.wixstatic.com/media/407ce4_881cca7f6597465998b0926d791f46d5~mv2.jpg/v1/fill/w_186,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0005_edited.jpg' },
  { year: 2024, title: 'Yesterday, Today, Tomorrow', youtubeUrl: 'https://youtu.be/-hIlobbIsNM', image: 'https://static.wixstatic.com/media/407ce4_c4bad664e207440aad6938dd4dd914de~mv2.jpg/v1/fill/w_175,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/s16x_edited.jpg' },
];

export const VAULT_HIGHLIGHTS = [
  {
    image: 'https://static.wixstatic.com/media/407ce4_b6f6e0ebfdd84696bd321126ebabb01c~mv2.png/v1/fill/w_349,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3.png',
    caption: 'The Marching Chargers end the "Dreams" (2012) show laying on the floor, as if asleep! Then, the speakers play the final, ominous words: "Do YOU remember your dreams?"',
    link: null,
  },
  {
    image: 'https://static.wixstatic.com/media/407ce4_1cc3468f26914f6084fd5a04cf6f7878~mv2.png/v1/crop/x_0,y_31,w_766,h_491/fill/w_326,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dl3.png',
    caption: 'The SCHS Drumline wins 1st place in the Annual Battle of the Drumlines at the Lion\'s Pride marching band competition.',
    link: 'https://youtu.be/dsXcae_UoFQ',
    linkText: 'Watch their winning performance here.',
  },
  {
    image: 'https://static.wixstatic.com/media/407ce4_d6345e04f8554f31b2549b8cbbf109b6~mv2.webp/v1/fill/w_265,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/p3.webp',
    caption: 'Marcus Werner, a student with Spina Bifida, a rare spinal disease, marches on the field in his wheelchair.',
    link: 'https://www.abcactionnews.com/news/region-hillsborough/student-with-spina-bifida-inspires-strawberry-crest-highs-marching-band',
    linkText: 'Read the full story here.',
  },
  {
    image: 'https://static.wixstatic.com/media/407ce4_2154d93fb4c74a849d62b5bdefed1653~mv2.jpg/v1/crop/x_277,y_13,w_3942,h_2800/fill/w_312,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0436.jpg',
    caption: 'Drum Majors and Leadership get ready to perform the salute for Ms. Sleeper\'s final marching show at Strawberry Crest.',
    link: null,
  },
];

// ─── ORCHESTRA LEADERSHIP ────────────────────────────────────────────────────
export const ORCHESTRA_LEADERSHIP = {
  year: '2025–2026',
  positions: [
    { role: 'Co-Presidents', members: ['Aarushi Pant', 'Breana Thomas'] },
    { role: 'Vice President', members: ['Elizabeth Chettipally'] },
    { role: 'Secretary/Press Secretary', members: ['Sayali Padhye'] },
    { role: 'Equipment/Uniform', members: ['Anish Nelluri', 'Kavish Tejiram'] },
    { role: 'Librarians', members: ['Ayona Bagui', 'Lola Coole', 'Vasudha Rajesh'] },
    { role: 'Historian', members: ['Eesha Venkatesh'] },
    { role: 'Social Coordinator', members: ['Shruthi Selvin'] },
  ],
};

// ─── COLOR GUARD LEADERSHIP ──────────────────────────────────────────────────
export const COLOR_GUARD_LEADERSHIP = [
  { role: 'Overall Captain', name: 'Zoe Maduagwu' },
  { role: 'Co-Captain', name: 'Tania Maldonado-Collado' },
  { role: 'Co-Captain', name: 'Savannah Battson' },
  { role: 'Social Media Coordinator', name: 'Emma Wetherington' },
];

export const COLOR_GUARD_PHOTOS = [
  'https://static.wixstatic.com/media/407ce4_0896e492a751444cadd00c4bc92fb9a9~mv2.jpg/v1/fill/w_211,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5449.jpg',
  'https://static.wixstatic.com/media/407ce4_27f443b2e826466f92e7ff4df1037713~mv2.jpg/v1/fill/w_211,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8820.jpg',
  'https://static.wixstatic.com/media/407ce4_d4272b71ebad4f2c993c7efe70a8d29f~mv2.jpg/v1/fill/w_211,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5466.jpg',
  'https://static.wixstatic.com/media/407ce4_9d4a953727184c4a8433ad757fd868a4~mv2.jpg/v1/fill/w_211,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5462.jpg',
];

// ─── MUSIC BOOSTERS ──────────────────────────────────────────────────────────
export const BOOSTERS_BOARD = [
  { role: 'President', name: 'Sandra Zabala' },
  { role: 'VP Membership', name: 'Matthew Pfleiderer' },
  { role: 'VP Fundraising', name: 'Trent Carpenter' },
  { role: 'Secretary', name: 'Nahomi Kenny' },
  { role: 'Co-Treasurer', name: 'Vera Badr' },
  { role: 'Co-Treasurer', name: 'Cynthia Demeritte' },
  { role: 'Hospitality Coordinator', name: 'Janice Pereira' },
  { role: 'Senior Class Rep', name: 'Sita Kuppaa' },
  { role: 'Junior Class Rep', name: 'Shannon Costine' },
  { role: 'Underclass Rep', name: 'Shannon Burky' },
  { role: 'Alumni Rep', name: 'Zamantha Cortez' },
  { role: 'Orchestra Rep', name: 'Angel Graham' },
  { role: 'Color Guard Rep', name: 'Amy Woodall' },
  { role: 'Webmaster', name: 'Yeggy Easwaran' },
];

// ─── HOME PAGE PHOTOS ────────────────────────────────────────────────────────
export const HOME_GALLERY = [
  'https://static.wixstatic.com/media/407ce4_f2074fbd607949abb369aa7eba44f349~mv2.jpeg/v1/fit/w_919,h_464,q_90,enc_avif,quality_auto/407ce4_f2074fbd607949abb369aa7eba44f349~mv2.jpeg',
  'https://static.wixstatic.com/media/3dd112_d768e29b76c3489183d2589a18444d86~mv2_d_2048_1365_s_2.jpg/v1/fit/w_696,h_464,q_90,enc_avif,quality_auto/3dd112_d768e29b76c3489183d2589a18444d86~mv2_d_2048_1365_s_2.jpg',
  'https://static.wixstatic.com/media/407ce4_8a2f9f20407545c4b182861c9c059672~mv2.jpg/v1/fit/w_824,h_464,q_90,enc_avif,quality_auto/407ce4_8a2f9f20407545c4b182861c9c059672~mv2.jpg',
  'https://static.wixstatic.com/media/407ce4_6fd3714077274358a5e9ab46ae7a545d~mv2.jpg/v1/fit/w_696,h_464,q_90,enc_avif,quality_auto/407ce4_6fd3714077274358a5e9ab46ae7a545d~mv2.jpg',
  'https://static.wixstatic.com/media/407ce4_70fb4b00f9ad45e2b32fe90e7a968c1f~mv2.jpg/v1/fit/w_619,h_464,q_90,enc_avif,quality_auto/407ce4_70fb4b00f9ad45e2b32fe90e7a968c1f~mv2.jpg',
  'https://static.wixstatic.com/media/407ce4_ef4ae65bef074d598f69d6e456fc43c0~mv2.jpg/v1/fit/w_696,h_464,q_90,enc_avif,quality_auto/407ce4_ef4ae65bef074d598f69d6e456fc43c0~mv2.jpg',
  'https://static.wixstatic.com/media/407ce4_40710ccf946a4fc187f812347eeae7a2~mv2.jpg/v1/fit/w_696,h_464,q_90,enc_avif,quality_auto/407ce4_40710ccf946a4fc187f812347eeae7a2~mv2.jpg',
];

// ─── MULTIMEDIA GALLERIES ────────────────────────────────────────────────────
// These are placeholder arrays — fill with your own hosted image URLs later
export const GALLERY_MPA_2024 = [];
export const GALLERY_MARCHING_2024 = [];
export const GALLERY_MARCHING_2020 = [];
export const GALLERY_MARCHING_2019 = [];