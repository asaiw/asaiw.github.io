# asaiw.github.io — 现代个人主页（占位模板）

这是一个基于纯 HTML/CSS/JS 的现代、响应式个人主页模板，适合作为 GitHub Pages 首页使用。当前包含占位内容，便于后续替换为你的真实信息。

在线预览：在 main 分支启用 GitHub Pages 后，可通过 https://asaiw.github.io/ 访问。

## 结构

- `index.html` — 主页，包含 Hero、About、Skills、Projects、Contact 等区块
- `styles.css` — 样式：CSS 变量、浅/深色主题、响应式布局、动效与可访问性
- `script.js` — 交互：主题切换、移动端导航、入场动效、平滑滚动
- `assets/` — 占位图片与图标（头像、项目图、favicon、OG 图）
- `404.html` — 404 未找到页
- `robots.txt`、`sitemap.xml` — 基本 SEO 配置
- `.nojekyll` — 禁用 Jekyll 处理

## 替换指引（几分钟上手）

1. 文案信息
   - 打开 `index.html`，搜索并替换：
     - `Your Name`、`Software Engineer / Web Developer`
     - 自我介绍段落、技能徽章文案、项目卡片标题与简介
   - 联系方式：将 `you@example.com`、GitHub/LinkedIn 链接替换为你的真实链接
   - 结构化数据（页面底部 JSON-LD）同样保持字段一致并替换占位值

2. 图片与图标
   - 头像：替换 `assets/avatar-placeholder.svg`
   - 项目封面：替换 `assets/project-placeholder-*.svg`（或使用你自己的图片路径）
   - Favicon：可替换 `assets/favicon.svg`（推荐 SVG），如需 `.ico` 可另行生成并覆盖根目录 `favicon.ico`
   - 社交分享图：替换 `assets/og-image.png`（当前为 SVG 占位内容，已命名为 .png）

3. 主题与样式
   - 调整 `styles.css` 中的 `:root` 颜色变量（`--color-*`）即可定制风格
   - 可在 HTML 标签的 `data-theme` 设为 `light` / `dark` / `system`，默认跟随系统

4. 导航与锚点
   - 确保导航链接 `#about`、`#skills`、`#projects`、`#contact` 与对应区块 id 一致

5. 发布到 GitHub Pages
   - 推送到仓库 `main` 分支
   - 在仓库 Settings → Pages 中启用 GitHub Pages（Source: `Deploy from a branch`，Branch: `main`）

## 可访问性与性能

- 完全键盘可导航，焦点可见；对比度满足 WCAG AA
- 尊重“减少动态效果”系统设置：会禁用平滑滚动与入场动效
- 使用系统字体栈，无外部网络依赖，加载更快

## 本地预览

直接双击 `index.html` 或使用任意静态服务器（例如 `python -m http.server`）都可离线预览。

## 许可

该模板以 MIT 许可证开源，欢迎自由修改与分发。
