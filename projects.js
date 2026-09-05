/* ============================================================
   Project shelf data.
   ------------------------------------------------------------
   ADD A PROJECT: copy a block, paste it at the TOP of the list,
   fill it in. Nothing else needs to change — the page builds the
   cards, the filters and the counts from this array.

   category  'professional' | 'academic' | 'personal'
             professional -> what recruiters should see first
             academic     -> NUS / research / coursework
             personal     -> built for fun; still fair game to show

   featured  true  -> visible immediately on page load
             false -> tucked behind the "Show all" button

   TRANSLATIONS: title, blurb and status take an object keyed by
   language. Only `en` is required — any language you leave out
   falls back to English, so a new project is publishable straight
   away and can be translated later. `tags` and `links` are shared
   across languages; link labels are translated in LINK_LABELS at
   the bottom of this file.
   ============================================================ */

const PROJECTS = [
  {
    title: {
      en: 'tefoma — Terraforming Mars guide',
      ko: 'tefoma — 테라포밍 마스 가이드',
      ja: 'tefoma — テラフォーミング・マーズ ガイド',
      zh: 'tefoma — 《火星改造》攻略',
    },
    year: '2026',
    category: 'personal',
    featured: true,
    blurb: {
      en: 'A living strategy reference for a board game I play too much: card ratings, ' +
          'corporation difficulty, and per-player-count rules. Built as a React + TypeScript ' +
          'single-page app, content-driven from Markdown and JSON so anyone can propose an ' +
          'edit through a GitHub pull request without touching code.',
      ko: '제가 너무 자주 하는 보드게임의 전략 자료입니다. 카드 평가, 기업별 난이도, 인원수별 규칙을 ' +
          '정리했습니다. React와 TypeScript로 만든 단일 페이지 앱이며, 내용은 Markdown과 JSON에서 ' +
          '불러오기 때문에 누구나 코드를 건드리지 않고 GitHub 풀 리퀘스트로 수정을 제안할 수 있습니다.',
      ja: '遊びすぎているボードゲームの戦略資料です。カード評価、企業ごとの難易度、人数別ルールをまとめています。' +
          'ReactとTypeScriptによるシングルページアプリで、内容はMarkdownとJSONから読み込むため、' +
          '誰でもコードに触れずGitHubのプルリクエストで修正を提案できます。',
      zh: '一份持续更新的桌游策略参考：卡牌评分、公司难度，以及不同人数下的规则。使用React与TypeScript构建的单页应用，' +
          '内容由Markdown和JSON驱动，任何人无需改动代码即可通过GitHub拉取请求提出修改。',
    },
    tags: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    links: [
      { label: 'visit', href: 'https://wonbo.site/tefoma/', external: true },
      { label: 'source', href: 'https://github.com/zaGamer95/tefoma', external: true },
    ],
  },
  {
    title: {
      en: 'Customer shopping trends analysis',
      ko: '고객 구매 트렌드 분석',
      ja: '顧客購買トレンド分析',
      zh: '顾客购物趋势分析',
    },
    year: '2025',
    category: 'professional',
    featured: true,
    blurb: {
      en: 'Exploratory analysis of a public retail dataset — segmenting customers by ' +
          'spend, category preference and season, then pulling the same cuts in SQL to ' +
          'sanity-check the notebook. A compact end-to-end look at how I go from raw ' +
          'table to a claim I am willing to defend.',
      ko: '공개 리테일 데이터셋을 탐색적으로 분석했습니다. 지출액, 카테고리 선호, 계절을 기준으로 고객을 ' +
          '나눈 뒤 동일한 구간을 SQL로 다시 뽑아 노트북의 결과를 교차 검증했습니다. 원본 테이블에서 ' +
          '변호할 수 있는 결론까지 가는 과정을 압축해 보여 주는 작업입니다.',
      ja: '公開されている小売データセットの探索的分析です。支出額・カテゴリ嗜好・季節で顧客を分類し、' +
          '同じ切り口をSQLでも取り直してノートブックの結果を検証しました。生のテーブルから' +
          '自分で擁護できる結論に至るまでの流れを、簡潔にまとめたものです。',
      zh: '对公开零售数据集的探索性分析：按消费金额、品类偏好与季节对顾客分层，再用SQL取出相同切面，' +
          '以交叉验证notebook中的结果。这是一次从原始数据表走到可被辩护的结论的完整演示。',
    },
    tags: ['Python', 'pandas', 'SQL', 'Jupyter'],
    links: [
      { label: 'source', href: 'https://github.com/zaGamer95/portfolio1', external: true },
    ],
  },
  {
    title: {
      en: 'Argo — AI onboarding assistant',
      ko: 'Argo — AI 온보딩 어시스턴트',
      ja: 'Argo — AIオンボーディング・アシスタント',
      zh: 'Argo — AI 入职助手',
    },
    year: '2024',
    category: 'professional',
    featured: true,
    blurb: {
      en: 'Capstone for the KT AIVLE School AI track, where I led the project team. A chatbot that ' +
          'absorbed the repetitive half of HR onboarding Q&A using the GPT API and BERT, ' +
          'with KNN and Random Forest models classifying user behaviour to personalise ' +
          'training paths. Cut onboarding time by roughly a quarter.',
      ko: 'KT 에이블스쿨 AI 트랙의 최종 프로젝트로, 팀을 이끌며 진행했습니다. GPT API와 BERT를 활용해 ' +
          '반복되는 인사 온보딩 문의를 흡수하는 챗봇이며, KNN과 랜덤 포레스트로 사용자 행동을 분류해 ' +
          '교육 과정을 개인화했습니다. 온보딩 기간을 약 4분의 1 줄였습니다.',
      ja: 'KT AIVLEスクールAIトラックの最終プロジェクトで、チームを率いて取り組みました。GPT APIとBERTを用いて、' +
          '繰り返しの多い人事オンボーディングの問い合わせを引き受けるチャットボットです。KNNとランダムフォレストで' +
          '利用者の行動を分類し、研修を個別化しました。オンボーディング期間を約4分の1短縮しています。',
      zh: 'KT AIVLE School AI方向的结业项目，由我带领团队完成。这是一个基于GPT API与BERT的聊天机器人，' +
          '承接了入职人力资源问答中重复的部分，并用KNN与随机森林对用户行为分类，实现培训路径的个性化，' +
          '使入职周期缩短约四分之一。',
    },
    tags: ['GPT API', 'BERT', 'scikit-learn', 'Agile'],
    links: [],
    status: {
      en: 'Private repository — happy to walk through it on request.',
      ko: '비공개 저장소입니다. 요청하시면 기꺼이 설명해 드리겠습니다.',
      ja: '非公開リポジトリです。ご希望があれば喜んでご説明します。',
      zh: '私有仓库 — 如有需要，我很乐意当面讲解。',
    },
  },
];

/* Shared labels for the links on each card. */
const LINK_LABELS = {
  visit:  { en: 'Visit the site', ko: '사이트 보기', ja: 'サイトを見る', zh: '访问网站' },
  source: { en: 'Source',         ko: '소스 코드',   ja: 'ソースコード',   zh: '源代码' },
};
