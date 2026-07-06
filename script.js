const bacteria = [
  {
    name: '乳酸菌',
    category: '益生',
    description: '乳酸菌能把糖分转化为乳酸，广泛参与酸奶、泡菜和发酵食品生产。',
    habitat: '发酵食品和人体肠道',
    funFact: '它们是人类常见且有益的微生物之一。'
  },
  {
    name: '大肠杆菌',
    category: '生态',
    description: '大肠杆菌常见于肠道环境中，也是研究微生物学和分子生物学的重要模型。',
    habitat: '动物肠道和土壤环境',
    funFact: '它是现代生物学中最常见的实验对象之一。'
  },
  {
    name: '枯草芽孢杆菌',
    category: '益生',
    description: '这种细菌能形成芽孢，具有较强的环境适应能力，并可用于生物防治和发酵。',
    habitat: '土壤和植物表面',
    funFact: '它常被用于农业与工业生物技术。'
  },
  {
    name: '幽门螺杆菌',
    category: '致病',
    description: '幽门螺杆菌会影响胃黏膜，可能增加胃炎、溃疡和胃癌风险。',
    habitat: '人类胃部',
    funFact: '它是胃部疾病研究中最受关注的细菌之一。'
  },
  {
    name: '双歧杆菌',
    category: '益生',
    description: '双歧杆菌是肠道中常见的有益细菌，帮助维持肠道微环境平衡。',
    habitat: '人体肠道',
    funFact: '它们常被用于益生菌饮品和保健食品。'
  },
  {
    name: '沙门氏菌',
    category: '致病',
    description: '沙门氏菌可通过污染食物引起肠胃炎和发热，是食物安全的重要监测对象。',
    habitat: '动物肠道和受污染食物',
    funFact: '它是全球范围内常见的食源性致病菌。'
  },
  {
    name: '根瘤菌',
    category: '生态',
    description: '根瘤菌能与豆科植物共生，帮助固氮，提高土壤肥力。',
    habitat: '豆科植物根部',
    funFact: '它们对农业和生态修复都很重要。'
  },
  {
    name: '嗜热菌',
    category: '生态',
    description: '嗜热菌能在高温环境中存活，常见于温泉和热泉沉积物中。',
    habitat: '温泉和热源环境',
    funFact: '它们是研究极端环境生命的关键对象。'
  },
  {
    name: '结核分枝杆菌',
    category: '致病',
    description: '结核分枝杆菌会引起结核病，是全球公共卫生关注的重要病原菌。',
    habitat: '人体呼吸道和肺部',
    funFact: '它的发现推动了现代抗结核治疗和疫苗研究。'
  },
  {
    name: '绿脓杆菌',
    category: '致病',
    description: '绿脓杆菌常见于医院环境，能形成生物膜，部分菌株对多种抗生素耐药。',
    habitat: '水体、医院环境和伤口',
    funFact: '它是临床感染中较难控制的细菌之一。'
  },
  {
    name: '醋酸菌',
    category: '工业',
    description: '醋酸菌能将乙醇氧化为醋酸，在醋的生产中不可或缺。',
    habitat: '发酵醋液和果蔬表面',
    funFact: '它们是传统与现代食品工业的重要微生物。'
  },
  {
    name: '乳酸片球菌',
    category: '工业',
    description: '乳酸片球菌常用于发酵乳制品，具有较好的耐酸能力和风味贡献。',
    habitat: '乳制品和发酵环境',
    funFact: '它们在奶酪和酸奶制造中扮演重要角色。'
  }
];

const cardGrid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchForm = document.getElementById('searchForm');

let activeFilter = 'all';
let searchKeyword = '';

function renderCards() {
  if (!cardGrid) {
    return;
  }

  const filtered = bacteria.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const keyword = searchKeyword.trim().toLowerCase();
    const matchesSearch =
      !keyword ||
      item.name.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.habitat.toLowerCase().includes(keyword);

    return matchesFilter && matchesSearch;
  });

  cardGrid.innerHTML = '';

  if (!filtered.length) {
    cardGrid.innerHTML = '<div class="card"><h3>没有找到相关细菌</h3><p>试试换一个关键词或切换分类。</p></div>';
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <span class="badge">${item.category}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>常见环境：</strong>${item.habitat}</p>
      <p><strong>趣闻：</strong>${item.funFact}</p>
    `;
    cardGrid.appendChild(card);
  });
}

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const keyword = searchInput.value.trim();
    const params = new URLSearchParams();
    if (keyword) {
      params.set('q', keyword);
    }
    window.location.href = `list.html?${params.toString()}`;
  });
}

if (searchInput && cardGrid) {
  const params = new URLSearchParams(window.location.search);
  searchKeyword = params.get('q') || '';
  activeFilter = params.get('filter') || 'all';
  searchInput.value = searchKeyword;

  searchInput.addEventListener('input', (event) => {
    searchKeyword = event.target.value;
    renderCards();
  });

  filterButtons.forEach((button) => {
    if (button.dataset.filter === activeFilter) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter;
      renderCards();
    });
  });

  renderCards();
}
