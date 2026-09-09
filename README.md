# 破茧

一个极简的学习类网站：**名人讲稿 / 经典名篇 / 中华诗词** 三个栏目，每周一、三、五晚上 8 点各更新一篇。

## 特性

- **定时解锁**：每篇文章自带 `publishAt` 发布时间，到点自动在主页出现，纯静态站实现"定时更新"，零后端、零成本
- **文章页**：题目、作者简介、创作背景、原文（外文附中文译文、古文附白话译文）
- **阅读笔记**：题目右侧"阅读笔记"按钮，页面分为左右两栏，右侧编辑器支持加粗/斜体/标题/引用/列表/链接、字数统计、自动保存、导出 Markdown
- **响应式**：适配桌面与手机

## 运行

纯静态站，直接双击 `index.html` 即可浏览；推荐用本地服务器（保证文章页参数与笔记功能完整）：

```bash
python -m http.server 8080
# 或
npx serve .
```

访问 `http://localhost:8080`。

## 目录结构

```
├── index.html          # 主页
├── article.html        # 文章页（数据驱动渲染，?id=文章id）
├── css/style.css       # 全站样式（Ocean Gradient 浅色主题）
└── js/
    ├── data.js         # 全部文章数据（核心）
    ├── app.js          # 共享工具
    ├── home.js         # 主页逻辑
    └── article.js      # 文章页 + 阅读笔记编辑器
```

## 如何更新文章

只需在 `js/data.js` 的 `ARTICLES` 数组末尾追加一个文章对象，把 `publishAt` 设为某个周一/三/五的 20:00 即可，页面代码无需改动：

```js
{
  id: 'unique-id',            // 唯一标识
  cat: 'speeches',            // speeches / classics / poems
  title: '文章标题',
  author: '作者', authorShort: '作者', authorRole: '身份', era: '年代',
  excerpt: '主页卡片摘要',
  authorIntro: '作者简介',
  facts: ['速览事实1', '速览事实2'],
  background: '创作背景',
  original: '原文（中文≤800字，外文≤400词）',
  translation: '译文（外文/古文）',
  lang: 'zh',                 // zh / en / fr ...
  type: 'prose',              // prose / poem / speech
  publishAt: '2026-09-11T20:00:00+08:00',
}
```

## 数据存储现状

- 文章：`js/data.js`（代码即数据，随站发布）
- 笔记：浏览器 localStorage（键名 `pojian:note:{文章id}`），仅本机可见，支持导出 Markdown

后续演进路线（JSON → Markdown 文章库 → 账号系统 + 云端数据库）见项目讨论记录。

## License

内容仅供学习交流。
