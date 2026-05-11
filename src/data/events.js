// All Kalakriti'26 event data — edit names, descriptions, links, and categories here.

export const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'videography', label: 'Videography' },
  { key: 'photography', label: 'Photography' },
  { key: 'visual', label: 'Visual Arts' },
  { key: 'writing', label: 'Literary' },
  { key: 'performing', label: 'Performing Arts' },
];

export const EVENTS = [
  // — Videography —
  { 
    id: 1, 
    name: 'Kalpachitra', 
    category: 'videography', 
    poster: '/Posters/KALPACHITRA.png', 
    link: 'https://docs.google.com/forms/d/1N9YNwKCe2u72cc6caD5g65URfJ3T1my7qYnlOPz3DY8/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#17',
    badge: 'Online / Offline Scr.',
    tagline: 'Short-Film Competition',
    guidelines: [
      "Duration shouldn't be less than 5 mins and exceed 10 minutes [including credits].",
      "Subtitles MUST be included in English.",
      "MUST provide proper Thumbnail, or Trailer.",
      "NO vulgar scenes will be allowed.",
      "Foul language MUST be bleeped/censored.",
      "Day of screening, every team should bring their movie on a pendrive and have the movie in a folder of same name.",
      "Atleast 1 member from each team should be present the day of screening.",
      "Content must comply with ethical and community standards.",
      "Participants must upload BTS to verify originality.",
      "Late submissions will be disqualified."
    ],
    rules: [
      "Reg. Fees : ₹350/- per entry",
      "No. of participants in one team : 3-7.",
      "Mode : Participants must upload their submissions Online, however top 5 films will be screened Offline."
    ],
    coordinators: [
      { name: "Anindra Talukder", phone: "8240129237" },
      { name: "Subham Puhan", phone: "9874809936" },
      { name: "Rajanya Sengupta", phone: "7439486798" }
    ]
  },
  { 
    id: 2, 
    name: 'Cine-Charcha', 
    category: 'videography', 
    poster: '/Posters/CINE-CHARCHA.png', 
    link: 'https://docs.google.com/forms/d/1BXGDqECg3dcB3fk3AR3LITswxffIGl_b1NmwYhvIfBA/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#18',
    badge: 'Offline',
    tagline: 'Movie & Anime Quiz',
    guidelines: [
      "The quiz will consist of three rounds : MCQ Round, Visual & Audio Round, Rapid Fire Round.",
      "Use of Mobile Phones, Smartwatches, Earphones or any Electronic Devices are strictly prohibited. Any team found using any electronic devices or trying to search answers will be immediately disqualified.",
      "Once an answer is submitted, it cannot be altered.",
      "Participants must maintain discipline and sportsmanship throughout the quiz.",
      "Any form of misconduct or disturbance may lead to deduction of points or disqualification."
    ],
    rules: [
      "Reg. Fees : ₹100/- per team",
      "No. of participants in one team : 1-2"
    ],
    coordinators: [
      { name: "Shreya Das", phone: "9123627173" },
      { name: "Md. Nehal Sahin Mollah", phone: "9735260204" }
    ]
  },
  { 
    id: 3, 
    name: 'Abhivyakti', 
    category: 'videography', 
    poster: '/Posters/ABHIVYAKTI.png', 
    link: 'https://docs.google.com/forms/d/1wuUzj-6sqiT4jEFZ6prGP03z0EzK7W6ijRvwgxCwqLo/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#19',
    badge: 'Online',
    tagline: 'Vertical Short-Film Competition',
    guidelines: [
      "Subtitles ARE preferred and have to be in English, they are not mandatory though.",
      "Content MUST be Original, Plagiarism will lead to immediate disqualification.",
      "Aspect Ratio : 9:16, 1:1, 4:3, 3:4, 16:9 [if submitting in any other format than 9:16, it must be converted into 9:16 format].",
      "Content must comply with ethical and community standards.",
      "NO Vulgarity or Profane Language is allowed.",
      "Atleast 1 member from the team must be present day of event.",
      "Late submissions will be disqualified."
    ],
    rules: [
      "Reg. Fees : ₹150 per entry",
      "No. of participants in one team : 1-4",
      "Duration shouldn't exceed 2 mins."
    ],
    coordinators: [
      { name: "Nilava Ghosh", phone: "6291412283" },
      { name: "Rajlakshmi Biswas", phone: "7980517929" },
      { name: "Sahita Chakraborty", phone: "9748423622" }
    ]
  },

  // — Photography —
  { 
    id: 4, 
    name: 'Shutter Hunt', 
    category: 'photography', 
    poster: '/Posters/SHUTTER HUNT.png', 
    link: 'https://docs.google.com/forms/d/1X2qkPng1cw4WHyOwc-jTq5bHCNlq8K-2s8C92s8XdY0/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#22',
    badge: 'Offline',
    tagline: 'Photography Scavenger Hunt',
    guidelines: [
      "What It Is : You have to capture photographs based on given themes within a limited time, of about 25-40 mins.",
      "The participants must submit only original photos, no reused or edited photos [basic light and exposure edit allowed].",
      "No AI use allowed. Plagiarism will lead to immediate disqualification.",
      "All photographs must be captured during the event using their own mobile or DSLRs.",
      "Participants are required to cover all the given themes.",
      "All submissions must be completed within the specified time limit."
    ],
    rules: [
      "Reg. Fees : ₹75/-",
      "No. of participants in one team : 1.",
      "Theme : To Be Revealed Day Of"
    ],
    coordinators: [
      { name: "Atashi", phone: "7439136387" },
      { name: "Supratik Saha", phone: "7044752795" }
    ]
  },
  { 
    id: 6, 
    name: 'Lens Gallery', 
    category: 'photography', 
    poster: '/Posters/LENS GALLERY.png', 
    link: 'https://docs.google.com/forms/d/1Y3EGKck6kPMVg0PsqaUgBqS5_6Cpv63zFKPuzPAwzLE/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#23',
    badge: 'Online / Offline Exhib.',
    tagline: 'Photography Exhibition',
    guidelines: [
      "What It Is : You have to showcase your best photographs in a creative exhibition.",
      "Participants must complete a pre-event submission; only selected entries will be displayed.",
      "Basic editing only, no heavily manipulated or AI generated images permitted.",
      "All submitted photos must be in printed format.",
      "Plagiarism or use of non-original content is strictly prohibited.",
      "Registration is open for everyone, and there is no fee at the time of registration.",
      "After participants will be selected, a fee of 100 will be taken only from those who are selected.",
      "Judges decision will be final."
    ],
    rules: [
      "Reg. Fees : ₹100/-",
      "No. of participants in one team : 1 [maximum 3 photo submissions per participant; only one best entry will be judged.]."
    ],
    coordinators: [
      { name: "Supratik Saha", phone: "7044752795" },
      { name: "Atanu Mondal", phone: "9836980726" }
    ]
  },
  { 
    id: 7, 
    name: 'Trilogy', 
    category: 'photography', 
    poster: '/Posters/TRILOGY.png', 
    link: 'https://docs.google.com/forms/d/1EFHHu7-GkPUsqYQEgmnmUMdok0yqo_qTBLJErZEZFqM/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#20',
    badge: 'Online / Offline Scr.',
    tagline: 'Photography Storytelling',
    guidelines: [
      "What It Is : You have to capture and present a sequence of photos that tells a compelling story.",
      "Participants must submit exactly three original photos arranged in a sequence that tells a story.",
      "All submissions must be made before the fest; late entries will not be accepted.",
      "Basic editing is allowed, but plagiarism or use of non-original content is strictly prohibited."
    ],
    rules: [
      "Reg. Fees : ₹50/-",
      "No. of participants : 1.",
      "Theme : Beginning–Middle–End."
    ],
    coordinators: [
      { name: "Debojit Das", phone: "8583929386" },
      { name: "Indranil Panda", phone: "7864877002" }
    ]
  },
  { 
    id: 8, 
    name: 'ReFrame', 
    category: 'photography', 
    poster: '/Posters/REFRAME.png', 
    link: 'https://docs.google.com/forms/d/1TGto5xqd4Xqip0pwiOc5r1ATfZh1aiDDU2Reuy5IRnU/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#21',
    badge: 'Online / Offline Scr.',
    tagline: 'Photo Editing Competition',
    guidelines: [
      "What It Is : You have to transform a raw image into a striking final piece.",
      "Raw images will be shared with participants via Google Drive, and only the provided images must be used for editing.",
      "Each participant is allowed to submit a maximum of one edited image.",
      "All submissions must be in PNG format.",
      "Use of external images is strictly prohibited.",
      "Participants may perform basic editing such as colour grading, cropping, and retouching only.",
      "The use of AI-generated content is strictly not allowed.",
      "All participants must adhere strictly to the submission deadline; late entries will not be accepted."
    ],
    rules: [
      "Reg. Fees : ₹80/-",
      "No. of participants in one team : 1."
    ],
    coordinators: [
      { name: "Sayan Sarkar", phone: "7003767930" },
      { name: "Srijoni Roy", phone: "9875553143" }
    ]
  },

  // — Visual Arts —
  { 
    id: 9, 
    name: 'Easel', 
    category: 'visual', 
    poster: '/Posters/EASEL.png', 
    link: '#', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#9',
    badge: 'Offline',
    tagline: 'On-Spot Painting / Sketching Competition',
    guidelines: [
      "What It Is : Participants sit and paint or sketch according to the theme.",
      "Participants will be provided paper.",
      "Colours, pencils, etc. must be brought by them.",
      "Colour Mediums : Sketch, Oil Pastel, Watercolour."
    ],
    rules: [
      "Reg. Fees : ₹50/-",
      "No. of participants in one team : 1.",
      "Theme : To be revealed day of.",
      "Time Limit : 1 hr 45 mins, 15 mins thinking time."
    ],
    coordinators: [
      { name: "Aindrila Ghosh", phone: "7998367250" },
      { name: "Shreosi Kundu", phone: "9064485811" }
    ]
  },
  { 
    id: 10, 
    name: 'Masquerade', 
    category: 'visual', 
    poster: '/Posters/MASQUERADE.png', 
    link: '#', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#13',
    badge: 'Offline',
    tagline: 'Face Painting Competition',
    guidelines: [
      "What It Is : The painter paints their artwork on the model's face.",
      "This is a team competition, with 1 model and 1 painter.",
      "Participants must bring their own products to participate.",
      "Exhibition : There is no particular theme, participants may choose one."
    ],
    rules: [
      "Reg. Fees : ₹100/- per team.",
      "No. of participants in one team : 2.",
      "Theme : The theme is Art."
    ],
    coordinators: [
      { name: "Titir Sen", phone: "8697948832" },
      { name: "Swapnendu Mandal", phone: "8250444543" }
    ]
  },
  { 
    id: 11, 
    name: 'Lights, Camera, Recreate!', 
    category: 'visual', 
    poster: '/Posters/LIGHTS CAMERA RECREATE.png', 
    link: '#', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#11',
    badge: 'Online',
    tagline: 'Bollywood Poster Remaking Competition',
    guidelines: [
      "What It Is : Participants will be provided a Bollywood Movie at random and must recreate the poster of that movie, keeping in place the vibe of it.",
      "Participants may use any designing/editing software to make the poster, like Canva, Photoshop, etc.",
      "AI generated elements maybe used, but making of entire poster using AI will lead to immediate disqualification."
    ],
    rules: [
      "Reg. Fees : ₹50/-",
      "No. of participants in one team : 1."
    ],
    coordinators: [
      { name: "Tanima Basak", phone: "8250051009" },
      { name: "Archisman Mallick", phone: "9836817876" }
    ]
  },
  { 
    id: 12, 
    name: 'Laugh Lines', 
    category: 'visual', 
    poster: '/Posters/LAUGH LINES.png', 
    link: '#', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#12',
    badge: 'Offline',
    tagline: 'Caricature Making Competition',
    guidelines: [
      "What It Is : Participants will be provided a papercup on which they must draw a caricature of the model.",
      "Pencils and erasers will be provided, anything other than that must be brought by the participants."
    ],
    rules: [
      "Reg. Fees : ₹70/-",
      "No. of participants in one team : 1."
    ],
    coordinators: [
      { name: "Arpan Kumar Paul", phone: "9330981752" },
      { name: "Monalisa Roy", phone: "9831258993" }
    ]
  },
  { 
    id: 13, 
    name: 'Craftopia', 
    category: 'visual', 
    poster: '/Posters/CRAFTOPIA.png', 
    link: '#', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#10',
    badge: 'Online / Offline Exhib.',
    tagline: 'Craft Making Competition',
    guidelines: [
      "What It Is : Participants make and upload pictures of their craft and also a video of 15 secs of them preparing it.",
      "Craft Guidelines: Participants are free to use any craft technique or medium [paper craft, recycled materials, DIY models, etc.].",
      "Theme : There is no particular theme, participants may choose one.",
      "Use of hazardous or unsafe materials is strictly prohibited."
    ],
    rules: [
      "Reg. Fees : ₹80/-",
      "No. of participants in one team : 1-2.",
      "Participants can participate individually or in groups [maximum 1-2 members].",
      "Top 5 craft will be exhibited."
    ],
    coordinators: [
      { name: "Ahana Karmakar", phone: "6291479718" },
      { name: "Satarupa Dey", phone: "9875435946" }
    ]
  },

  // — Literary (Writing) —
  { 
    id: 14, 
    name: 'Impromptu', 
    category: 'writing', 
    poster: '/Posters/IMPROMPTU.png', 
    link: 'https://docs.google.com/forms/d/1_AsxksblvOnH1gwIqZ0Cbu-ULj-t5zhAPmsJstWT0YA/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#4',
    badge: 'Offline',
    tagline: 'Creative Writing Competition',
    guidelines: [
      "What It Is : Participants will be given a topic to write on.",
      "Participants are free to explore any writing style or format on the given topic [poetry or prose], as long as it is not plagiarised.",
      "Writeups should not directly or indirectly target or offend any community or culture.",
      "Participants aren't allowed to keep mobile phones or other devices during the competition."
    ],
    rules: [
      "Reg. Fees : ₹80/-",
      "No. of participants in one team : 1.",
      "Topic : To be revealed on the day of.",
      "Language : English."
    ],
    coordinators: [
      { name: "Dwaipayan Maitra", phone: "6290572827" },
      { name: "Sayan Das", phone: "9836340011" }
    ]
  },
  { 
    id: 15, 
    name: 'Clashpoint', 
    category: 'writing', 
    poster: '/Posters/CLASHPOINT.png', 
    link: 'https://docs.google.com/forms/d/1aw6vvPSf21xh9fVMFuvaobUBZhrhxMh-FaZ-eGo7Mtw/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#5',
    badge: 'Offline',
    tagline: 'Debate Competition',
    guidelines: [
      "What It Is : Two teams argue for and against a motion. You speak, rebut, and try to out-argue the other side.",
      "Arguments must remain respectful and should not directly or indirectly target or offend any individual, community, or culture.",
      "The competition will be held in Oxford-Style.",
      "The debate runs across four rounds — an Opening Round eliminates 4 teams, a Dynamic Round narrows it to 4, and a Rebuttal Round selects the top 2 finalists.",
      "The final is a Turncoat Debate, where teams switch sides mid-speech on a new topic."
    ],
    rules: [
      "Reg. Fees : ₹200/- Per Team",
      "No. of participants in one team : 2.",
      "Topic : Will be revealed 2 days before the competition.",
      "Language : English."
    ],
    coordinators: [
      { name: "Kojagori Sen", phone: "9874611476" },
      { name: "Lopamudra Behuria", phone: "7980808935" }
    ]
  },
  { 
    id: 16, 
    name: 'Oratoria', 
    category: 'writing', 
    poster: '/Posters/ORATORIA.png', 
    link: 'https://docs.google.com/forms/d/14-GeGI92IsUjdVijZfZbyVLF24yNWHaMTcyCra_bwUg/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#6',
    badge: 'Offline',
    tagline: 'Recitation Competition',
    guidelines: [
      "What It Is : You step up and perform a poem or piece.",
      "Participants may choose existing works or present self-composed pieces; proper credit must be given where applicable.",
      "The selected piece should be appropriate for a formal academic setting and must not directly or indirectly offend any individual, community, or culture."
    ],
    rules: [
      "Reg. Fees : ₹100/-",
      "No. of participants in one team : 1.",
      "Time Limit : 4 + 1 mins, from empty stage to empty stage.",
      "Language : English, Bengali, and Hindi."
    ],
    coordinators: [
      { name: "Archita Mandal", phone: "8777068643" },
      { name: "Somtirtho Banerjee", phone: "7439718671" }
    ]
  },
  { 
    id: 17, 
    name: 'Extempo', 
    category: 'writing', 
    poster: '/Posters/EXTEMPO.png', 
    link: 'https://docs.google.com/forms/d/1CbDf7balJ9oy-ICEUPcLl69H4LToo80Mrcl-hWpAiNs/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#7',
    badge: 'Offline',
    tagline: 'Extempore Competition',
    guidelines: [
      "What It Is : You get a topic on the spot. A few seconds to think, then you speak. No prep, no notes.",
      "Participants will deliver a spontaneous speech on a given topic without prior preparation."
    ],
    rules: [
      "Reg. Fees : ₹100/-",
      "No. of participants in one team : 1.",
      "Time Limit : 30 secs[thinking time] + 1 min[speaking time].",
      "Topic : To be revealed on the spot at the time of participation.",
      "Language : English."
    ],
    coordinators: [
      { name: "MD Arsalan Khan", phone: "7501526395" },
      { name: "Anwesha Hazra", phone: "7439186088" }
    ]
  },
  { 
    id: 18, 
    name: 'Sonance', 
    category: 'writing', 
    poster: '/Posters/SONANCE.png', 
    link: 'https://docs.google.com/forms/d/1aFrphyBHO7WZ-Hh8dKFF-Jcfl1tei4I2F5BNfJtgmIw/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#8',
    badge: 'Offline',
    tagline: 'Audio Drama Competition',
    guidelines: [
      "What It Is : You perform a live audio drama using voices and sound effects.",
      "Participants may perform original scripts or adaptations; proper credit must be given for any adapted content.",
      "The script should be suitable for a formal academic setting and must not directly or indirectly offend any individual, community, or culture.",
      "Participants can perform with their script in-hand."
    ],
    rules: [
      "Reg. Fees : ₹250/- Per Team",
      "No. of participants in one team : 3-5 voice artist Per Team, and one sound accompanist. Sound Accompanist wouldn't be performing.",
      "Time Limit : 10 mins [performance time] + 2 mins [soundcheck], empty stage to empty stage.",
      "Language : English, Bengali, and Hindi."
    ],
    coordinators: [
      { name: "Debarghya Sikdar", phone: "9123763032" },
      { name: "Debayan Das", phone: "6290577123" }
    ]
  },

  // — Performing Arts —
  { 
    id: 19, 
    name: 'Act it Out', 
    category: 'performing', 
    poster: '/Posters/ACT IT OUT.png', 
    link: 'https://docs.google.com/forms/d/1-xjdt6f08e9vXh3785clzb1JbfEWn8rHhDKF3Bfmv74/viewform?ts=69f0b887', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#16',
    badge: 'Offline',
    tagline: 'Impromptu Acting & Mimicry Competition',
    guidelines: [
      "Judges and organising committee decisions are final.",
      "Even number of participants advances to the next round.",
      "Semi-finals and finals will be of 2 rounds.",
      "Format : 1v1 Faceoff, immediate elemination."
    ],
    rules: [
      "Reg. Fees : ₹70/-",
      "No. of participants in one team : 1.",
      "Type you can select : Either Situation-based acting or Mimicry/Impersonation.",
      "Acting Time : 2 + 1 mins.",
      "Theme : To be revealed on spot.",
      "Language : English, Hindi, Bengali."
    ],
    coordinators: [
      { name: "Sulochana", phone: "8100214686" }
    ]
  },
  { 
    id: 20, 
    name: 'I Laugh You', 
    category: 'performing', 
    poster: '/Posters/I LAUGH YOU.png', 
    link: 'https://docs.google.com/forms/d/1tlK2bQUL251PGbdW7snEGe0IiFbZvZy3axkcR5t_cmA/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#14',
    badge: 'Offline',
    tagline: 'Stand-up Comedy Competition',
    guidelines: [
      "It is strictly a comedy event.",
      "Any form of vulgar words or inappropriate gestures will lead to disqualification."
    ],
    rules: [
      "Reg. Fees : ₹100/person",
      "No. of participants in one team : 1-6.",
      "Theme : Stand-up comedy, Ventriloquism, Mime acting, Mono-act.",
      "Time Limit : 3 + 1 min.",
      "Language : English, Hindi, Bengali."
    ],
    coordinators: [
      { name: "Rupanjana Das", phone: "9804336719" },
      { name: "Debayan Das", phone: "6290577123" }
    ]
  },
  { 
    id: 21, 
    name: 'N 2 SMOKE', 
    category: 'performing', 
    poster: '/Posters/N 2 SMOKE.png', 
    link: 'https://docs.google.com/forms/d/1cfLt5VtvaurV3d7zPORJuG7LS47ZkJ7QqkcL-KGft4M/viewform', 
    brochure: 'https://www.canva.com/design/DAHIXDXBqZw/AVsmf6vPyFxxhntkcokprw/view?utm_content=DAHIXDXBqZw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2684944354#15',
    badge: 'Offline',
    tagline: 'Question Battle Competition',
    guidelines: [
      "What It Is : A Face Off Question Battle, where you only have to ask questions related to the topic provided and SMOKE others taking continuous turns until you've beaten N others.",
      "Each round is a 1v1 Face Off. Participants come and one random topic is picked up. They have to keep on saying sentences-Related to the Topic and HAS to end with a question.",
      "First to break the format loses the round and joins the queue at the last till his turn comes again. Likewise everyone takes one turn.",
      "If in the course of the interaction one participant happens to roast the other on his follow up sentence by STAYING in the format then an extra point is allotted to the person.",
      "This format continues till one participant attains the figure N. The event comes to an end at that instant."
    ],
    rules: [
      "Reg. Fees : ₹100/-",
      "No. of participants in one team : 1.",
      "Participants can participate individually : OTSE registration allowed.",
      "Language : English, Hindi, Bengali."
    ],
    coordinators: [
      { name: "Rajlakshmi Biswas", phone: "7980517929" },
      { name: "Payel Santra", phone: "7602923077" }
    ]
  },
];
