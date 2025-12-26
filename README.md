# asaiw.github.io — 现代技术博客

这是一个基于纯 HTML/CSS/JS 的现代、响应式技术博客，适合作为 GitHub Pages 首页使用。包含完整的博客功能，支持文章搜索、标签过滤、分页等高级特性。

在线预览：在 main 分支启用 GitHub Pages 后，可通过 https://asaiw.github.io/ 访问。

## ✨ 特性

### 博客功能
- **文章管理**：支持多篇博客文章，每篇包含标题、摘要、日期、阅读时间和标签
- **搜索功能**：实时搜索文章标题、内容和标签
- **标签过滤**：按技术标签筛选文章（如 React、TypeScript、DevOps 等）
- **分页显示**：自动分页，每页显示 6 篇文章
- **阅读时间**：自动显示每篇文章的预估阅读时间
- **RSS 订阅**：支持 RSS feed，方便读者订阅更新

### 设计特性
- **响应式布局**：完美适配桌面、平板和手机
- **深色/浅色主题**：支持系统主题自动切换和手动切换
- **优雅动效**：平滑的页面滚动和元素入场动画
- **高可访问性**：完全键盘可导航，符合 WCAG AA 标准
- **高性能**：纯静态网站，无需构建工具，加载速度极快

## 📁 结构

- `index.html` — 主页，包含 Hero、Blog、About、Skills、Projects、Contact 等区块
- `styles.css` — 样式：CSS 变量、浅/深色主题、响应式布局、博客专用样式
- `script.js` — 交互：主题切换、移动端导航、博客文章渲染、搜索、过滤、分页
- `feed.xml` — RSS 订阅源
- `assets/` — 占位图片与图标（头像、文章封面、favicon、OG 图）
- `404.html` — 404 未找到页
- `robots.txt`、`sitemap.xml` — 基本 SEO 配置
- `.nojekyll` — 禁用 Jekyll 处理

## 🚀 快速开始

### 1. 自定义个人信息

打开 `index.html`，搜索并替换：
- `Your Name` — 你的名字
- `全栈开发者 / 技术博主` — 你的职位/角色
- 自我介绍段落
- 联系方式：`you@example.com`、GitHub/LinkedIn 链接

### 2. 添加博客文章

在 `script.js` 中的 `blogPosts` 数组中添加你的文章：

\`\`\`javascript
{
  id: 10,
  title: '你的文章标题',
  excerpt: '文章摘要，简短描述文章内容...',
  date: '2024-03-20',
  readingTime: 10,
  tags: ['标签1', '标签2'],
  image: 'assets/your-image.jpg'
}
\`\`\`

### 3. 更新技能标签

在 `index.html` 的技能区块中，更新技术栈列表以反映你的实际技能。

### 4. 替换图片

- 头像：替换 `assets/avatar-placeholder.svg`
- 文章封面：替换 `assets/project-placeholder-*.svg` 或添加你自己的图片
- Favicon：替换 `assets/favicon.svg`
- 社交分享图：替换 `assets/og-image.png`

### 5. 更新 RSS Feed

编辑 `feed.xml`，添加你的实际文章信息，确保与 `script.js` 中的内容同步。

### 6. 发布到 GitHub Pages

1. 推送到仓库 `main` 分支
2. 在仓库 Settings → Pages 中启用 GitHub Pages
3. 选择 Source: `Deploy from a branch`，Branch: `main`

## 🎨 自定义主题

在 `styles.css` 的 `:root` 部分修改颜色变量：

\`\`\`css
:root {
  --color-accent: #2563eb; /* 主题色 */
  --color-bg: #ffffff;      /* 背景色 */
  --color-text: #121417;    /* 文字色 */
  /* ...更多变量 */
}
\`\`\`

## 📱 响应式设计

- **桌面**：博客文章 3 列网格布局
- **平板**：2 列布局
- **手机**：1 列布局，优化的导航菜单

## 🔍 博客功能使用

- **搜索**：在搜索框输入关键词，实时筛选文章
- **标签过滤**：点击任意标签按钮，只显示该标签的文章
- **分页**：使用页面底部的分页按钮浏览更多文章
- **主题切换**：点击顶部的主题切换按钮在深色/浅色/系统模式间切换

## 🌐 浏览器支持

支持所有现代浏览器：
- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- 移动浏览器

## 📄 许可

该模板以 MIT 许可证开源，欢迎自由修改与分发。
