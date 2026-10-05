/* ============================================================
   Translations for the landing page.
   ------------------------------------------------------------
   Keys match the data-i18n attributes in index.html:
     data-i18n="key"        replaces the element's text
     data-i18n-html="key"   replaces innerHTML (for copy with markup)
     data-i18n-tags="key"   splits a comma-separated string into tags
     data-i18n-attr="attr:key"  sets an attribute, e.g. aria-label

   A missing key falls back to English, so a half-finished language
   degrades to readable rather than blank.

   NOTE ON THE NAME: 沈元輔 is the form Wonbo supplied. The simplified
   variant used in mainland China and Singapore is 沈元辅 — worth a
   proofreader's call before changing it.
   ============================================================ */

const LANGS = [
  { code: 'en', label: 'English',  htmlLang: 'en' },
  { code: 'ko', label: '한국어',    htmlLang: 'ko' },
  { code: 'ja', label: '日本語',    htmlLang: 'ja' },
  { code: 'zh', label: '中文',      htmlLang: 'zh-Hans' },
];

const I18N = {

  /* ══ ENGLISH ══════════════════════════════════════════ */
  en: {
    'meta.title': 'Wonbo Shim — Data Scientist & Backend Engineer, Biomedical Informatics',
    'meta.description': 'Wonbo Shim — data scientist and backend engineer, currently an MSc student in Biomedical Informatics at the National University of Singapore.',

    'a11y.skip': 'Skip to content',
    'a11y.nav': 'Primary',
    'a11y.lang': 'Choose language',
    'a11y.theme': 'Switch between light and dark theme',
    'a11y.filters': 'Filter projects by category',

    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
    'nav.contact': 'Contact', 'nav.cv': 'CV',

    'hero.name': 'Wonbo Shim',
    'hero.status': 'MSc in Biomedical Informatics, NUS — graduating Jul 2027',
    'hero.headline': 'Data scientist and backend engineer, now working in <strong>biomedical informatics</strong> — building systems that turn messy data into something clinicians and users can actually act on.',
    'hero.intro': "Between 2020 and 2026 I worked across games, NLP and analytics in Seoul — gameplay and live-ops tooling for a title that reached ten million players, question-answering APIs at an NLP company, and analytics spanning an academy's 80,000-book catalogue, LG Electronics' regional storefronts and a CRM rollout at AmorePacific. I like the unglamorous part: the pipeline, the schema, the thing that has to keep working on a Tuesday.",
    'hero.portraitAlt': 'Wonbo Shim, smiling, wearing a navy jacket over a light shirt',
    'hero.ctaWork': 'See the work',

    'about.eyebrow': 'About',
    'about.title': 'Between the clinic and the codebase',
    'about.lede': 'A computer scientist by training, retraining now in health data.',
    'about.p1': "I read Computer Science at Korea University, after a school career that ran through Dubai and Tashkent and a first year at Stony Brook. The working years since went to places where software meets scale — a live mobile game with players in over 230 countries, an NLP company building question-answering APIs, and analytics across an academy's 80,000-book catalogue, LG Electronics' regional storefronts and a CRM rollout at AmorePacific. The common thread was never the domain. It was that somebody needed a system that made a pile of data legible.",
    'about.p2': 'Healthcare is where that problem gets serious. Clinical data is fragmented, inconsistently coded, and the cost of getting it wrong is not a bad quarter. That is why I moved to Singapore for the MSc in Biomedical Informatics at NUS — to pair the engineering I already have with the clinical and statistical grounding I did not.',
    'about.p3': 'I am most useful somewhere between the two: close enough to the data to know what it will not tell you, close enough to production to ship the thing anyway.',

    'fact.now.k': 'Now',
    'fact.now.v': 'MSc Biomedical Informatics, National University of Singapore — Aug 2026 to Jul 2027',
    'fact.based.k': 'Based in', 'fact.based.v': 'Singapore · Seoul',
    'fact.working.k': 'Working on',
    'fact.working.v': 'Clinical data pipelines, applied NLP, and the analysis that has to survive review',
    'fact.toolkit.k': 'Toolkit',
    'fact.toolkit.v': 'Python · SQL · pandas · PyTorch · FastAPI · React & TypeScript · Docker · AWS',
    'fact.open.k': 'Open to',
    'fact.open.v': 'Roles and research collaborations in Singapore — on-site, hybrid or remote',
    'fact.langs.k': 'Languages',
    'fact.langs.v': 'Korean (native) · English (native) · Japanese (intermediate)',

    'exp.eyebrow': 'Experience',
    'exp.title': 'Where I have worked',
    'exp.lede': 'Six years across games, NLP and analytics — followed by a deliberate turn toward health.',

    'role.nus.when': 'Aug 2026 — Jul 2027', 'role.nus.where': 'Singapore',
    'role.nus.title': 'MSc, Biomedical Informatics', 'role.nus.org': 'National University of Singapore',
    'role.nus.desc': 'Coursework spanning clinical decision support, bioinformatics and the health-sciences grounding that engineers usually skip. Currently building out research projects in this space.',
    'role.nus.tags': 'clinical informatics, bioinformatics, health data',

    'role.aive.when': 'Oct 2025 — Jul 2026', 'role.aive.where': 'Seoul',
    'role.aive.title': 'Data Analyst', 'role.aive.org': 'AIVE Labs',
    'role.aive.desc': "Monitoring and reporting for LG Electronics Global, covering the LG.com home appliance and air conditioner storefronts across several regions. Wrote the monthly read on site health — SEO and GEO competitiveness, content integrity, performance trends — for the global digital marketing and commerce teams. Later worked with AmorePacific's New Commerce team on a CRM application for their sales operation, maintaining the system and turning its usage into daily, weekly and monthly reporting.",
    'role.aive.tags': 'SQL, analytics, reporting, CRM, SEO / GEO',

    'role.purple.when': 'Mar — Jun 2025', 'role.purple.where': 'Seoul',
    'role.purple.title': 'Data Analyst', 'role.purple.org': 'Purple Academy',
    'role.purple.desc': "Consolidated metadata for more than 80,000 books into a structured SQL dataset, cutting retrieval time by over 60%. Designed a department-level data mart joining students, courses and learning resources, which pulled reporting down from days to hours, and laid the groundwork for a book recommendation system. Also tracked KPI metrics for the academy's public platforms.",
    'role.purple.tags': 'SQL, pandas, data modelling, recsys',

    'role.aivle.when': 'Aug 2023 — Jan 2024', 'role.aivle.where': 'Seongnam',
    'role.aivle.title': 'AIVLE School — AI Developer Track', 'role.aivle.org': 'KT (Korea Telecom)',
    'role.aivle.desc': 'A six-month AI development programme run by KT, which I finished by leading the capstone team: requirements, UML, Agile sprints, customer feedback loops, delivered on schedule. The build was an AI onboarding chatbot on the GPT API and BERT that absorbed repetitive HR Q&A, roughly halving HR workload and cutting onboarding time by about a quarter, with KNN and Random Forest models classifying user behaviour to personalise training.',
    'role.aivle.tags': 'GPT API, BERT, scikit-learn, team lead',

    'role.maru.when': 'Oct 2021 — Jul 2022', 'role.maru.where': 'Seoul',
    'role.maru.title': 'Manager, Question Answering', 'role.maru.org': '42Maru',
    'role.maru.desc': "Built RESTful APIs in Python and FastAPI for the company's question-answering solution, improving response times by about 35%. Handled deployment on Docker and AWS, and owned the data formatting and analytics pipelines behind it. Served here as industrial technical personnel for my national service.",
    'role.maru.tags': 'FastAPI, NLP, Docker, AWS',

    'role.kong.when': 'May 2020 — Oct 2021', 'role.kong.where': 'Seoul',
    'role.kong.title': 'Junior Software Engineer', 'role.kong.org': 'Kong Studios',
    'role.kong.desc': "Client-side quest and gameplay development on <em>Guardian Tales</em>, through a global launch across 230+ countries — 10M+ downloads and a 4.9/5 rating in its first months. Built the live-ops tooling behind content updates and real-time events, which cut deployment time by roughly 40% and downtime on urgent fixes by about 25%, plus the data-mining pipelines used to read player behaviour. Also worked on the studio's official and Japanese sites, and coordinated the DB migration for the China launch.",
    'role.kong.tags': 'Lua, live ops, data mining, web',

    'role.ku.when': '2015 — 2023', 'role.ku.where': 'Seoul',
    'role.ku.title': 'B.E. Computer Science and Engineering', 'role.ku.org': 'Korea University',
    'role.ku.desc': 'GPA 86.6/100, with an exchange semester at the Institute of Science Tokyo in 2019 and time out for national service. Spent it in the game development club CATDOG and the information security club KUICS.',
    'role.ku.tags': 'SQLD, AICE Associate, TOEIC 990, OPIc AL',

    'proj.eyebrow': 'Projects',
    'proj.title': 'Things I have built',
    'proj.lede': 'Work pulls in three different directions, so it is sorted that way. Filter by what you came for.',
    'proj.ledeFew': 'A short shelf for now. It fills out as the MSc work lands.',
    'filter.all': 'All',
    'filter.professional': 'Professional', 'filter.academic': 'Academic', 'filter.personal': 'Personal',
    'note.professional': 'Applied work — the projects I would put in front of a hiring manager.',
    'note.academic': 'Research and coursework from the MSc in Biomedical Informatics.',
    'note.personal': 'Built for my own use, shared because they turned out worth sharing.',
    'empty.default': 'Nothing filed here yet.',
    'empty.academic': 'Coursework and research from the NUS programme will land here as it finishes.',
    'more.show': 'Show {n} more', 'more.fewer': 'Show fewer',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in touch',
    'contact.lede': 'Open to research collaborations, internships and roles in health data and applied AI, based in Singapore — on-site, hybrid or remote. The fastest way to reach me is email.',
    'contact.email': 'Email', 'contact.linkedin': 'LinkedIn', 'contact.github': 'GitHub',

    'footer.built': 'Built by hand, hosted on GitHub Pages.',
  },

  /* ══ 한국어 ════════════════════════════════════════════ */
  ko: {
    'meta.title': '심원보 — 데이터 사이언티스트 · 백엔드 엔지니어, 의생명정보학',
    'meta.description': '심원보 — 데이터 사이언티스트이자 백엔드 엔지니어. 현재 싱가포르국립대학교 의생명정보학 석사과정 재학 중입니다.',

    'a11y.skip': '본문으로 건너뛰기',
    'a11y.nav': '주요 메뉴',
    'a11y.lang': '언어 선택',
    'a11y.theme': '밝은 테마와 어두운 테마 전환',
    'a11y.filters': '분야별 프로젝트 필터',

    'nav.about': '소개', 'nav.experience': '경력', 'nav.projects': '프로젝트',
    'nav.contact': '연락', 'nav.cv': '이력서',

    'hero.name': '심원보',
    'hero.status': '싱가포르국립대학교 의생명정보학 석사과정 — 2027년 7월 졸업 예정',
    'hero.headline': '데이터 사이언티스트이자 백엔드 엔지니어입니다. 지금은 <strong>의생명정보학</strong> 분야에서, 정리되지 않은 데이터를 임상의와 사용자가 실제로 판단에 쓸 수 있는 형태로 만드는 시스템을 만들고 있습니다.',
    'hero.intro': '2020년부터 2026년까지 서울에서 게임, 자연어처리, 데이터 분석을 오가며 일했습니다. 천만 명이 플레이한 게임의 콘텐츠와 라이브 운영 도구, NLP 회사의 질의응답 API, 그리고 8만 권 규모의 도서 데이터베이스부터 LG전자의 지역별 스토어와 아모레퍼시픽 CRM 도입까지 이어지는 분석 업무를 맡았습니다. 저는 화려하지 않은 쪽을 좋아합니다. 파이프라인, 스키마, 화요일에도 멀쩡히 돌아가야 하는 것들 말입니다.',
    'hero.portraitAlt': '밝은 셔츠 위에 네이비 재킷을 입고 미소 짓고 있는 심원보',
    'hero.ctaWork': '작업 보기',

    'about.eyebrow': '소개',
    'about.title': '진료실과 코드 사이에서',
    'about.lede': '컴퓨터공학을 전공했고, 지금은 의료 데이터를 다시 배우고 있습니다.',
    'about.p1': '두바이와 타슈켄트에서 학교를 다니고 스토니브룩에서 1년을 보낸 뒤, 고려대학교에서 컴퓨터학을 전공했습니다. 졸업 후의 시간은 소프트웨어가 규모와 만나는 자리에서 보냈습니다. 230개국 이상에서 서비스되는 모바일 게임, 질의응답 API를 만드는 NLP 회사, 그리고 8만 권 규모의 도서 목록과 LG전자의 지역별 스토어, 아모레퍼시픽의 CRM 도입을 아우르는 분석 업무였습니다. 공통점은 분야가 아니었습니다. 누군가에게는 쌓여 있는 데이터를 읽히게 만들어 줄 시스템이 필요했다는 점이었습니다.',
    'about.p2': '의료는 그 문제가 진지해지는 영역입니다. 임상 데이터는 흩어져 있고 코딩 방식도 제각각이며, 틀렸을 때 치르는 대가가 한 분기의 실적에 그치지 않습니다. 이미 가진 엔지니어링에 갖지 못했던 임상적·통계적 기반을 더하기 위해 싱가포르국립대학교 의생명정보학 석사과정을 선택한 이유입니다.',
    'about.p3': '저는 그 둘 사이에 있을 때 가장 쓸모가 있습니다. 데이터가 말해 주지 않는 것을 알아챌 만큼 가까이 있으면서, 그럼에도 결국 제품을 내보낼 만큼 현업에 가까운 자리입니다.',

    'fact.now.k': '현재',
    'fact.now.v': '싱가포르국립대학교 의생명정보학 석사과정 — 2026년 8월 ~ 2027년 7월',
    'fact.based.k': '거점', 'fact.based.v': '싱가포르 · 서울',
    'fact.working.k': '관심 분야',
    'fact.working.v': '임상 데이터 파이프라인, 응용 자연어처리, 그리고 검증을 견디는 분석',
    'fact.toolkit.k': '기술 스택',
    'fact.toolkit.v': 'Python · SQL · pandas · PyTorch · FastAPI · React & TypeScript · Docker · AWS',
    'fact.open.k': '찾고 있는 것',
    'fact.open.v': '싱가포르 기반의 채용 기회와 연구 협업 — 출근, 하이브리드, 원격 모두 가능',
    'fact.langs.k': '언어',
    'fact.langs.v': '한국어(원어민) · 영어(원어민) · 일본어(중급)',

    'exp.eyebrow': '경력',
    'exp.title': '지금까지 일한 곳',
    'exp.lede': '게임, 자연어처리, 데이터 분석을 오간 6년, 그리고 의료로의 방향 전환.',

    'role.nus.when': '2026년 8월 — 2027년 7월', 'role.nus.where': '싱가포르',
    'role.nus.title': '의생명정보학 석사과정', 'role.nus.org': '싱가포르국립대학교',
    'role.nus.desc': '임상 의사결정 지원, 생물정보학, 그리고 엔지니어가 대체로 건너뛰는 보건의학 기초를 아우르는 과정입니다. 현재 이 분야의 연구 프로젝트를 준비하고 있습니다.',
    'role.nus.tags': '임상정보학, 생물정보학, 의료 데이터',

    'role.aive.when': '2025년 10월 — 2026년 7월', 'role.aive.where': '서울',
    'role.aive.title': '데이터 분석가', 'role.aive.org': 'AIVE Labs',
    'role.aive.desc': 'LG전자 글로벌의 모니터링과 리포팅을 담당해, 여러 지역의 LG.com 생활가전 및 에어컨 스토어를 점검했습니다. 사이트 상태에 대한 월간 분석 — SEO·GEO 경쟁력, 콘텐츠 정합성, 성과 추이 — 을 글로벌 디지털 마케팅·커머스 팀에 전달했습니다. 이후 아모레퍼시픽 뉴커머스 팀과 함께 영업 조직을 지원하는 CRM 애플리케이션을 맡아, 시스템을 유지하고 사용 현황을 일간·주간·월간 리포트로 만들었습니다.',
    'role.aive.tags': 'SQL, 데이터 분석, 리포팅, CRM, SEO / GEO',

    'role.purple.when': '2025년 3월 — 6월', 'role.purple.where': '서울',
    'role.purple.title': '데이터 분석가', 'role.purple.org': 'Purple Academy',
    'role.purple.desc': '8만 권이 넘는 도서 메타데이터를 정리해 구조화된 SQL 데이터셋으로 만들었고, 조회 시간을 60% 이상 줄였습니다. 학생·강좌·학습 자료를 연결하는 부서 단위 데이터 마트를 설계해 리포팅 소요를 며칠에서 몇 시간으로 단축했으며, 도서 추천 시스템의 기반 데이터를 마련했습니다. 학원 공개 플랫폼의 KPI 지표도 함께 관리했습니다.',
    'role.purple.tags': 'SQL, pandas, 데이터 모델링, 추천 시스템',

    'role.aivle.when': '2023년 8월 — 2024년 1월', 'role.aivle.where': '성남',
    'role.aivle.title': 'KT 에이블스쿨 — AI 개발자 트랙', 'role.aivle.org': 'KT',
    'role.aivle.desc': 'KT가 운영하는 6개월 과정의 AI 개발 교육으로, 마지막 프로젝트에서 팀을 이끌며 마무리했습니다. 요구사항 정의, UML, 애자일 스프린트, 고객 피드백 루프를 관리해 일정 안에 완료했습니다. 결과물은 GPT API와 BERT를 활용한 온보딩 챗봇으로, 반복적인 인사 문의를 흡수해 담당자 업무를 약 절반으로 줄이고 온보딩 기간을 4분의 1가량 단축했습니다. KNN과 랜덤 포레스트로 사용자 행동을 분류해 교육을 개인화했습니다.',
    'role.aivle.tags': 'GPT API, BERT, scikit-learn, 팀 리드',

    'role.maru.when': '2021년 10월 — 2022년 7월', 'role.maru.where': '서울',
    'role.maru.title': '질의응답 매니저', 'role.maru.org': '42Maru',
    'role.maru.desc': '회사의 질의응답 솔루션을 위한 RESTful API를 Python과 FastAPI로 개발해 응답 속도를 약 35% 개선했습니다. Docker와 AWS 기반 배포를 담당했고, 그 뒤의 데이터 정제와 분석 파이프라인을 맡았습니다. 산업기능요원으로 병역을 이행한 곳이기도 합니다.',
    'role.maru.tags': 'FastAPI, 자연어처리, Docker, AWS',

    'role.kong.when': '2020년 5월 — 2021년 10월', 'role.kong.where': '서울',
    'role.kong.title': '주니어 소프트웨어 엔지니어', 'role.kong.org': '콩스튜디오',
    'role.kong.desc': '<em>가디언 테일즈</em>의 퀘스트와 게임플레이 클라이언트 개발을 맡아 230개국 이상 글로벌 출시를 함께했습니다. 초기 몇 달 만에 1천만 건 이상 다운로드와 4.9/5 평점을 기록했습니다. 콘텐츠 업데이트와 실시간 이벤트를 뒷받침하는 라이브 운영 도구를 만들어 배포 시간을 약 40%, 긴급 대응 시 다운타임을 약 25% 줄였고, 플레이어 행동을 읽는 데이터 마이닝 파이프라인도 함께 구축했습니다. 스튜디오 공식 사이트와 일본 사이트 작업, 중국 출시를 위한 DB 마이그레이션 조율도 담당했습니다.',
    'role.kong.tags': 'Lua, 라이브 운영, 데이터 마이닝, 웹',

    'role.ku.when': '2015년 — 2023년', 'role.ku.where': '서울',
    'role.ku.title': '컴퓨터학과 공학사', 'role.ku.org': '고려대학교',
    'role.ku.desc': '학점 86.6/100. 2019년 도쿄과학대학교 교환학생을 다녀왔고, 중간에 병역으로 휴학했습니다. 게임 개발 동아리 CATDOG과 정보보안 동아리 KUICS에서 활동했습니다.',
    'role.ku.tags': 'SQLD, AICE Associate, TOEIC 990, OPIc AL',

    'proj.eyebrow': '프로젝트',
    'proj.title': '만들어 온 것들',
    'proj.lede': '작업은 서로 다른 세 방향을 향하고 있어, 그렇게 나누어 두었습니다. 찾으시는 쪽으로 걸러 보세요.',
    'proj.ledeFew': '아직은 단출합니다. 석사 과정 작업이 나오는 대로 채워 나갈 예정입니다.',
    'filter.all': '전체',
    'filter.professional': '실무', 'filter.academic': '학술', 'filter.personal': '개인',
    'note.professional': '채용 담당자에게 먼저 보여 드리고 싶은 실무 작업입니다.',
    'note.academic': '의생명정보학 석사과정의 연구와 수업 과제입니다.',
    'note.personal': '제가 쓰려고 만들었고, 나눌 만해서 공개한 것들입니다.',
    'empty.default': '아직 등록된 항목이 없습니다.',
    'empty.academic': 'NUS 과정에서 나온 과제와 연구를 마치는 대로 이곳에 올릴 예정입니다.',
    'more.show': '{n}개 더 보기', 'more.fewer': '접기',

    'contact.eyebrow': '연락',
    'contact.title': '연락 주세요',
    'contact.lede': '싱가포르를 기반으로 의료 데이터와 응용 AI 분야의 연구 협업, 인턴십, 채용 기회를 찾고 있습니다. 출근·하이브리드·원격 모두 가능합니다. 이메일이 가장 빠릅니다.',
    'contact.email': '이메일', 'contact.linkedin': '링크드인', 'contact.github': '깃허브',

    'footer.built': '직접 만들었고, GitHub Pages로 운영합니다.',
  },

  /* ══ 日本語 ════════════════════════════════════════════ */
  ja: {
    'meta.title': 'シム・ウォンボ — データサイエンティスト／バックエンドエンジニア、生物医学情報学',
    'meta.description': 'シム・ウォンボ — データサイエンティスト兼バックエンドエンジニア。現在シンガポール国立大学の生物医学情報学修士課程に在籍しています。',

    'a11y.skip': '本文へスキップ',
    'a11y.nav': 'メインメニュー',
    'a11y.lang': '言語を選択',
    'a11y.theme': 'ライトテーマとダークテーマを切り替える',
    'a11y.filters': '分野でプロジェクトを絞り込む',

    'nav.about': '紹介', 'nav.experience': '経歴', 'nav.projects': '作品',
    'nav.contact': '連絡先', 'nav.cv': '履歴書',

    'hero.name': 'シム・ウォンボ',
    'hero.status': 'シンガポール国立大学 生物医学情報学 修士課程 — 2027年7月修了予定',
    'hero.headline': 'データサイエンティスト兼バックエンドエンジニアです。現在は<strong>生物医学情報学</strong>の領域で、整っていないデータを臨床医や利用者が実際に判断に使える形にするシステムをつくっています。',
    'hero.intro': '2020年から2026年まで、ソウルでゲーム・自然言語処理・データ分析を横断して働いてきました。一千万人がプレイしたタイトルのコンテンツとライブ運用ツール、NLP企業での質問応答API、そして8万冊規模の蔵書データからLGエレクトロニクスの地域別ストア、アモーレパシフィックのCRM導入までを含む分析業務です。私は地味な部分が好きです。パイプライン、スキーマ、火曜日にもきちんと動き続けなければならないものたちです。',
    'hero.portraitAlt': '明るいシャツにネイビーのジャケットを着て微笑むシム・ウォンボ',
    'hero.ctaWork': '仕事を見る',

    'about.eyebrow': '紹介',
    'about.title': '診療とコードのあいだで',
    'about.lede': '情報工学を修め、いまは医療データを学び直しています。',
    'about.p1': 'ドバイとタシケントで学校に通い、ストーニーブルックで1年を過ごしたのち、高麗大学校で情報工学を専攻しました。卒業後の年月は、ソフトウェアが規模と出会う場所で過ごしています。230か国以上で配信されるモバイルゲーム、質問応答APIを開発するNLP企業、そして8万冊の蔵書目録からLGエレクトロニクスの地域別ストア、アモーレパシフィックのCRM導入までを横断する分析業務でした。共通していたのは分野ではありません。積み上がったデータを読めるようにする仕組みを、誰かが必要としていたということです。',
    'about.p2': '医療は、その課題が切実になる領域です。臨床データは分断され、コーディングも統一されておらず、誤りの代償は一四半期の業績では済みません。すでに持っている工学に、持っていなかった臨床と統計の基礎を重ねるために、シンガポール国立大学の生物医学情報学修士課程を選びました。',
    'about.p3': '私はその二つのあいだにいるときにいちばん役に立ちます。データが語らないことに気づける距離にいて、それでも最後にはものを世に出せるだけ現場に近い場所です。',

    'fact.now.k': '現在',
    'fact.now.v': 'シンガポール国立大学 生物医学情報学 修士課程 — 2026年8月〜2027年7月',
    'fact.based.k': '拠点', 'fact.based.v': 'シンガポール · ソウル',
    'fact.working.k': '取り組んでいること',
    'fact.working.v': '臨床データパイプライン、応用自然言語処理、そして検証に耐える分析',
    'fact.toolkit.k': '技術スタック',
    'fact.toolkit.v': 'Python · SQL · pandas · PyTorch · FastAPI · React & TypeScript · Docker · AWS',
    'fact.open.k': '探しているもの',
    'fact.open.v': 'シンガポールを拠点とする求人と研究協働 — 出社・ハイブリッド・リモートいずれも可',
    'fact.langs.k': '言語',
    'fact.langs.v': '韓国語（母語）· 英語（母語）· 日本語（中級）',

    'exp.eyebrow': '経歴',
    'exp.title': 'これまで働いた場所',
    'exp.lede': 'ゲーム・自然言語処理・データ分析を横断した6年、そして医療への意識的な転換。',

    'role.nus.when': '2026年8月 — 2027年7月', 'role.nus.where': 'シンガポール',
    'role.nus.title': '生物医学情報学 修士課程', 'role.nus.org': 'シンガポール国立大学',
    'role.nus.desc': '臨床意思決定支援、バイオインフォマティクス、そしてエンジニアが通常は飛ばしてしまう保健医学の基礎までを扱う課程です。現在この領域での研究プロジェクトを進めています。',
    'role.nus.tags': '臨床情報学, バイオインフォマティクス, 医療データ',

    'role.aive.when': '2025年10月 — 2026年7月', 'role.aive.where': 'ソウル',
    'role.aive.title': 'データアナリスト', 'role.aive.org': 'AIVE Labs',
    'role.aive.desc': 'LGエレクトロニクス・グローバルのモニタリングとレポーティングを担当し、複数地域のLG.com生活家電・エアコンのストアを点検しました。サイト状態に関する月次分析 — SEO・GEO競争力、コンテンツ整合性、パフォーマンス推移 — をグローバルのデジタルマーケティングおよびコマース部門に提供しました。その後はアモーレパシフィックのニューコマースチームと、営業活動を支えるCRMアプリケーションを担当し、システムを維持しながら利用状況を日次・週次・月次のレポートにまとめました。',
    'role.aive.tags': 'SQL, データ分析, レポーティング, CRM, SEO / GEO',

    'role.purple.when': '2025年3月 — 6月', 'role.purple.where': 'ソウル',
    'role.purple.title': 'データアナリスト', 'role.purple.org': 'Purple Academy',
    'role.purple.desc': '8万冊を超える書籍メタデータを整理し、構造化されたSQLデータセットにまとめて、検索時間を60%以上短縮しました。学生・講座・教材を結ぶ部門単位のデータマートを設計し、レポート作成を数日から数時間に縮めたうえで、書籍推薦システムの基盤データを整えました。学院の公開プラットフォームのKPI指標も管理しました。',
    'role.purple.tags': 'SQL, pandas, データモデリング, 推薦システム',

    'role.aivle.when': '2023年8月 — 2024年1月', 'role.aivle.where': '城南',
    'role.aivle.title': 'KT AIVLEスクール — AI開発者トラック', 'role.aivle.org': 'KT（韓国テレコム）',
    'role.aivle.desc': 'KTが運営する6か月のAI開発プログラムで、最終プロジェクトではチームを率いて完了させました。要件定義、UML、アジャイルスプリント、顧客フィードバックの循環を管理し、予定どおりに納めています。成果物はGPT APIとBERTを用いたオンボーディング用チャットボットで、繰り返しの人事問い合わせを引き受け、担当者の業務を約半分に、オンボーディング期間を約4分の1短縮しました。KNNとランダムフォレストで利用者の行動を分類し、研修を個別化しています。',
    'role.aivle.tags': 'GPT API, BERT, scikit-learn, チームリード',

    'role.maru.when': '2021年10月 — 2022年7月', 'role.maru.where': 'ソウル',
    'role.maru.title': '質問応答 マネージャー', 'role.maru.org': '42Maru',
    'role.maru.desc': '同社の質問応答ソリューション向けにPythonとFastAPIでRESTful APIを開発し、応答速度を約35%改善しました。DockerとAWSでのデプロイを担当し、その背後のデータ整形と分析パイプラインを受け持ちました。兵役を産業技能要員として勤めた職場でもあります。',
    'role.maru.tags': 'FastAPI, 自然言語処理, Docker, AWS',

    'role.kong.when': '2020年5月 — 2021年10月', 'role.kong.where': 'ソウル',
    'role.kong.title': 'ジュニアソフトウェアエンジニア', 'role.kong.org': 'Kong Studios',
    'role.kong.desc': '<em>ガーディアンテイルズ</em>のクエストとゲームプレイのクライアント開発を担当し、230か国以上でのグローバル配信に携わりました。最初の数か月で1,000万以上のダウンロードと4.9/5の評価を記録しています。コンテンツ更新とリアルタイムイベントを支えるライブ運用ツールを構築し、デプロイ時間を約40%、緊急対応時のダウンタイムを約25%削減したほか、プレイヤー行動を読むためのデータマイニング基盤も整えました。スタジオ公式サイトと日本語サイトの制作、中国配信に向けたDB移行の調整も担当しています。',
    'role.kong.tags': 'Lua, ライブ運用, データマイニング, ウェブ',

    'role.ku.when': '2015年 — 2023年', 'role.ku.where': 'ソウル',
    'role.ku.title': '情報工学 学士', 'role.ku.org': '高麗大学校',
    'role.ku.desc': 'GPA 86.6/100。2019年に東京科学大学へ交換留学し、途中で兵役のため休学しました。ゲーム開発サークルCATDOGと情報セキュリティサークルKUICSで活動しています。',
    'role.ku.tags': 'SQLD, AICE Associate, TOEIC 990, OPIc AL',

    'proj.eyebrow': 'プロジェクト',
    'proj.title': 'つくってきたもの',
    'proj.lede': '仕事は三つの異なる方向を向いているので、そのように分けています。目的に合わせて絞り込んでください。',
    'proj.ledeFew': '今はまだ少数です。修士課程の成果が出るたびに増えていきます。',
    'filter.all': 'すべて',
    'filter.professional': '実務', 'filter.academic': '学術', 'filter.personal': '個人',
    'note.professional': '採用担当の方にまずお見せしたい実務の仕事です。',
    'note.academic': '生物医学情報学修士課程での研究と課題です。',
    'note.personal': '自分のためにつくり、共有する価値があったので公開したものです。',
    'empty.default': 'まだ登録がありません。',
    'empty.academic': 'NUSの課程で仕上がった課題と研究を、順次ここに掲載します。',
    'more.show': 'さらに{n}件', 'more.fewer': '折りたたむ',

    'contact.eyebrow': '連絡先',
    'contact.title': 'ご連絡ください',
    'contact.lede': 'シンガポールを拠点に、医療データと応用AIの分野で研究協働・インターンシップ・就業の機会を探しています。出社・ハイブリッド・リモートいずれも可能です。メールがいちばん早く届きます。',
    'contact.email': 'メール', 'contact.linkedin': 'LinkedIn', 'contact.github': 'GitHub',

    'footer.built': '手づくりで、GitHub Pages で公開しています。',
  },

  /* ══ 中文 ══════════════════════════════════════════════ */
  zh: {
    'meta.title': '沈元輔 — 数据科学家兼后端工程师，生物医学信息学',
    'meta.description': '沈元輔 — 数据科学家兼后端工程师，现于新加坡国立大学攻读生物医学信息学硕士。',

    'a11y.skip': '跳至正文',
    'a11y.nav': '主导航',
    'a11y.lang': '选择语言',
    'a11y.theme': '切换浅色与深色主题',
    'a11y.filters': '按类别筛选项目',

    'nav.about': '关于', 'nav.experience': '经历', 'nav.projects': '项目',
    'nav.contact': '联系', 'nav.cv': '简历',

    'hero.name': '沈元輔',
    'hero.status': '新加坡国立大学 生物医学信息学硕士 — 预计2027年7月毕业',
    'hero.headline': '我是数据科学家兼后端工程师，目前专注于<strong>生物医学信息学</strong>，构建能把杂乱数据转化为临床医生与使用者真正可据以行动的系统。',
    'hero.intro': '2020年至2026年间，我在首尔横跨游戏、自然语言处理与数据分析工作：为一款触达千万玩家的游戏开发玩法与线上运营工具，在一家NLP公司构建问答API，并负责从八万册图书目录到LG电子各区域商店、再到爱茉莉太平洋CRM落地的分析工作。我喜欢不起眼的那部分——数据管道、数据结构，以及那些在周二也必须照常运转的东西。',
    'hero.portraitAlt': '沈元輔，身着浅色衬衫与藏青色外套，面带微笑',
    'hero.ctaWork': '查看作品',

    'about.eyebrow': '关于',
    'about.title': '在临床与代码之间',
    'about.lede': '计算机科学出身，如今重新学习医疗数据。',
    'about.p1': '我在迪拜与塔什干读中学，在石溪大学度过一年，之后于高丽大学攻读计算机科学。毕业后的这些年，都待在软件与规模相遇的地方：一款在230多个国家运营的手机游戏、一家开发问答API的NLP公司，以及横跨八万册图书目录、LG电子各区域商店与爱茉莉太平洋CRM落地的分析工作。它们的共同点从来不是行业，而是总有人需要一套系统，把堆积的数据变得可读。',
    'about.p2': '医疗正是这个问题变得严肃的领域。临床数据分散、编码方式不一，而出错的代价远不止一个季度的业绩。这正是我来到新加坡、攻读新加坡国立大学生物医学信息学硕士的原因——把已有的工程能力，与此前欠缺的临床和统计基础结合起来。',
    'about.p3': '我最能派上用场的位置，正在两者之间：离数据够近，知道它不会告诉你什么；也离生产够近，仍然能把东西做出来。',

    'fact.now.k': '现在',
    'fact.now.v': '新加坡国立大学 生物医学信息学硕士 — 2026年8月至2027年7月',
    'fact.based.k': '所在地', 'fact.based.v': '新加坡 · 首尔',
    'fact.working.k': '关注方向',
    'fact.working.v': '临床数据管道、应用自然语言处理，以及经得起审阅的分析',
    'fact.toolkit.k': '技术栈',
    'fact.toolkit.v': 'Python · SQL · pandas · PyTorch · FastAPI · React & TypeScript · Docker · AWS',
    'fact.open.k': '正在寻找',
    'fact.open.v': '新加坡的工作机会与研究合作 — 驻场、混合或远程皆可',
    'fact.langs.k': '语言',
    'fact.langs.v': '韩语（母语）· 英语（母语）· 日语（中级）',

    'exp.eyebrow': '经历',
    'exp.title': '工作经历',
    'exp.lede': '横跨游戏、自然语言处理与数据分析的六年，以及一次转向医疗的选择。',

    'role.nus.when': '2026年8月 — 2027年7月', 'role.nus.where': '新加坡',
    'role.nus.title': '生物医学信息学硕士', 'role.nus.org': '新加坡国立大学',
    'role.nus.desc': '课程涵盖临床决策支持、生物信息学，以及工程师通常会跳过的医学基础。目前正在推进该领域的研究项目。',
    'role.nus.tags': '临床信息学, 生物信息学, 医疗数据',

    'role.aive.when': '2025年10月 — 2026年7月', 'role.aive.where': '首尔',
    'role.aive.title': '数据分析师', 'role.aive.org': 'AIVE Labs',
    'role.aive.desc': '负责LG电子全球业务的监测与报告，覆盖多个区域的LG.com家电及空调商店页面。为全球数字营销与电商团队撰写站点健康度的月度分析，包括SEO与GEO竞争力、内容一致性及表现趋势。之后与爱茉莉太平洋新商务团队合作，负责支撑销售运营的CRM应用，维护系统并将使用情况整理为日报、周报与月报。',
    'role.aive.tags': 'SQL, 数据分析, 报告, CRM, SEO / GEO',

    'role.purple.when': '2025年3月 — 6月', 'role.purple.where': '首尔',
    'role.purple.title': '数据分析师', 'role.purple.org': 'Purple Academy',
    'role.purple.desc': '将八万余册图书的元数据整理为结构化SQL数据集，检索时间缩短超过60%。设计了连接学生、课程与学习资源的部门级数据集市，使报表从数天缩短到数小时，并为图书推荐系统打下数据基础。同时跟踪机构公开平台的KPI指标。',
    'role.purple.tags': 'SQL, pandas, 数据建模, 推荐系统',

    'role.aivle.when': '2023年8月 — 2024年1月', 'role.aivle.where': '城南',
    'role.aivle.title': 'KT AIVLE School — AI开发者方向', 'role.aivle.org': 'KT（韩国电信）',
    'role.aivle.desc': 'KT开设的六个月AI开发课程，我在结业项目中带领团队完成：需求定义、UML、敏捷冲刺与客户反馈循环，按期交付。成果是一个基于GPT API与BERT的入职引导聊天机器人，承接了重复的人力资源问答，使相关工作量减少约一半，入职周期缩短约四分之一；并用KNN与随机森林对用户行为分类，实现培训的个性化。',
    'role.aivle.tags': 'GPT API, BERT, scikit-learn, 团队负责人',

    'role.maru.when': '2021年10月 — 2022年7月', 'role.maru.where': '首尔',
    'role.maru.title': '问答业务经理', 'role.maru.org': '42Maru',
    'role.maru.desc': '为公司的问答解决方案用Python与FastAPI开发RESTful API，响应速度提升约35%。负责基于Docker与AWS的部署，并承担其背后的数据整理与分析管道。此处亦为我以产业技能要员身份服兵役的单位。',
    'role.maru.tags': 'FastAPI, 自然语言处理, Docker, AWS',

    'role.kong.when': '2020年5月 — 2021年10月', 'role.kong.where': '首尔',
    'role.kong.title': '初级软件工程师', 'role.kong.org': 'Kong Studios',
    'role.kong.desc': '负责《<em>坎特伯雷公主与骑士唤醒冠军之剑</em>》（Guardian Tales）的任务与玩法客户端开发，参与其在230多个国家的全球发行；上线最初几个月即录得逾千万次下载与4.9/5评分。构建了支撑内容更新与实时活动的线上运营工具，使部署时间减少约40%、紧急修复的停机时间减少约25%，并搭建了解读玩家行为的数据挖掘管道。此外参与工作室官网与日文网站的开发，并协调了中国发行的数据库迁移。',
    'role.kong.tags': 'Lua, 线上运营, 数据挖掘, 网页开发',

    'role.ku.when': '2015年 — 2023年', 'role.ku.where': '首尔',
    'role.ku.title': '计算机科学与工程 学士', 'role.ku.org': '高丽大学',
    'role.ku.desc': '成绩86.6/100。2019年赴东京科学大学交换，其间因兵役休学。曾参与游戏开发社团CATDOG与信息安全社团KUICS。',
    'role.ku.tags': 'SQLD, AICE Associate, TOEIC 990, OPIc AL',

    'proj.eyebrow': '项目',
    'proj.title': '做过的东西',
    'proj.lede': '这些工作面向三个不同方向，因此也按此分类。请按需要筛选。',
    'proj.ledeFew': '目前还不多。随着硕士阶段的工作完成，这里会陆续增加。',
    'filter.all': '全部',
    'filter.professional': '实务', 'filter.academic': '学术', 'filter.personal': '个人',
    'note.professional': '最想先呈现给招聘方的实务工作。',
    'note.academic': '生物医学信息学硕士课程中的研究与作业。',
    'note.personal': '为自己而做，因为值得分享而公开。',
    'empty.default': '暂无内容。',
    'empty.academic': 'NUS课程中的作业与研究完成后会陆续放在这里。',
    'more.show': '再看{n}项', 'more.fewer': '收起',

    'contact.eyebrow': '联系',
    'contact.title': '欢迎联系',
    'contact.lede': '以新加坡为基地，寻找医疗数据与应用AI领域的研究合作、实习与工作机会，驻场、混合或远程皆可。电子邮件是最快的方式。',
    'contact.email': '邮箱', 'contact.linkedin': '领英', 'contact.github': 'GitHub',

    'footer.built': '手工打造，托管于 GitHub Pages。',
  },
};
