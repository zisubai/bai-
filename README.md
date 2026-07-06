# AI Bacteria Wiki

一个用 HTML、CSS、JavaScript 和 AI 辅助学习制作的细菌百科项目。

## 项目结构

```text
.
├── index.html              # 网站首页
├── assets/
│   ├── css/styles.css      # 页面样式
│   └── js/script.js        # 页面交互与细菌列表数据
├── pages/
│   └── list.html           # 完整菌类列表页
├── python/
│   ├── ask_bacteria.py     # 命令行细菌查询练习
│   ├── bacteria_data.py    # Python 细菌资料数据
│   └── hello.py            # Python 入门练习
└── docs/
    ├── CHANGELOG.md
    └── AI细菌百科_暑假8周逐日计划.md
```

## 当前目标

- 学习 Git 和 GitHub 的基本使用
- 搭建项目仓库
- 逐步完成可搜索、可展示细菌信息的网页应用

## 运行方式

网页版本：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

Python 练习：

```bash
cd python
python3 ask_bacteria.py
```
