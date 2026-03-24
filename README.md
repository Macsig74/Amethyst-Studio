# ✨ Amethyst Studio Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer&logoColor=black)](https://www.framer.com/motion/)

A high-fidelity digital studio portfolio showcasing the dual expertise of **Macsig** (Full-Stack Dev) and **Sharrk0** (Architectural Builder). This project leverages cutting-edge web technologies to deliver a premium, immersive user experience.

![Amethyst Studio Preview](/hero_preview.png)

---

## 💎 Core Specializations

### 💻 Full-Stack Development (Macsig)
- **Web Applications**: Modern, fast, and scalable React-based platforms.
- **Native Applications**: Cross-platform mobile solutions.
- **Backend Architecture**: Robust Java/Python systems and database design.
- **Minecraft Tech**: Advanced server development and custom plugin ecosystems.

### 🏗️ Architectural Building (Sharrk0)
- **Level Design**: Immersive Minecraft spawns and hub environments.
- **Landscaping**: Professional cinematic terrain and organic structures.
- **Thematic Consistency**: Fantasy, Cyberpunk, and Modern architectural mastery.

---

## 🚀 Key Features

- **Liquid Theme Engine**: Seamless, variable-driven dark/light mode transition with zero flash.
- **Three.js Dotted Surface**: Interactive, animated 3D particle background synced with the theme state.
- **High-End Glassmorphism**: Premium frosted-glass layouts with hardware-accelerated micro-interactions.
- **Dynamic Tool Stack**: Continuous-loop carousels highlighting technical proficiencies.
- **Modern Performance**: Built with **Tailwind v4** and OKLCH for state-of-the-art color rendering.

---

## 🛠️ Technical Stack

- **Framework**: Next.js (App Router/React 19)
- **Styling**: Tailwind CSS v4 (Class-based variable isolation)
- **Animations**: Framer Motion & CSS transform acceleration
- **3D Graphics**: Three.js (WebGL particles)
- **Icons**: Lucide React & DevIcon SVG integration
- **Forms**: Server Actions with Discord Webhook integration for persistence

---

## 💻 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment Variables**:
   Create a `.env.local` file with your Discord credentials for the contact form:
   ```env
   DISCORD_WEBHOOK_URL=your_webhook_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## 📦 Workflow Guidelines

To maintain project integrity, we use a structured Git workflow:

### 🛠️ On Feature/Dev branch
```bash
git add .
git commit -m "feat: adding new portfolio section"
git push
```

### 🚢 Deploying to Main
When a feature is verified and ready for production:
```bash
git checkout main
git merge dev
git push
git checkout dev  # Return to development
```

---

<div align="center">
  <p>Built with ❤️ by Amethyst Studio</p>
</div>