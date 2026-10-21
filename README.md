# JINGYI LIAO — 个人作品集网站

React + Vite 个人作品集首版，支持通过 GitHub Actions 自动构建并发布到 GitHub Pages。

## 发布到 GitHub Pages（推荐）

1. 在 GitHub 新建一个**公开**仓库，例如 `jingyi-portfolio`。
2. 将本文件夹里的所有文件和隐藏的 `.github` 文件夹上传到仓库根目录（不要把外层 `portfolio-site` 文件夹再套一层）。
3. 提交到 `main` 分支。
4. 打开仓库 **Settings → Pages**，在 **Build and deployment → Source** 选择 **GitHub Actions**。
5. 打开 **Actions** 标签页，等待 `Deploy portfolio to GitHub Pages` 工作流完成。
6. 完成后，在 **Settings → Pages** 查看网站地址。通常格式为 `https://你的用户名.github.io/仓库名/`。

之后每次把修改提交到 `main` 分支，网站都会自动重新部署。

## 本地运行

需要 Node.js 18 或更高版本：

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 页面结构

- 全屏 Hero：本地循环视频背景、标题动效、导航和探索入口
- About：个人介绍、教育背景、能力方向与项目数据
- Selected Work：四个项目大卡片
- What I Bring：四项个人能力卡片
- Contact：整屏收尾与联系方式

## 发布前务必修改

1. `src/main.jsx` 中的 `jingyi.design@example.com` 是占位邮箱，请替换为实际邮箱。
2. `public/images/` 中的 SVG 是首版占位视觉，请逐步替换为真实作品图。
3. 项目年份是暂定展示信息，发布前请核对。
4. About 区域目前使用抽象视觉作为人物图占位，可换成个人照片或合适的人物视觉。

## 技术说明

- React + Vite
- 桌面端最大内容宽度约 1700px
- 使用 IntersectionObserver 触发模块动效
- 支持 `prefers-reduced-motion`
- `vite.config.js` 中使用相对资源路径，适配 GitHub Pages 的项目子路径
