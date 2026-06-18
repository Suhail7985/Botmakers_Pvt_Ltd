# 🤖 Porus League - Combat Robotics Web Platform

**🔴 Live Demo:** [https://botmakers-pvt-ltd-azure.vercel.app/](https://botmakers-pvt-ltd-azure.vercel.app/)

Welcome to the **Porus League** frontend platform! This is a modern, high-performance web application built to showcase the ultimate combat robotics league. The platform is designed with a premium, dark-themed, cyberpunk-inspired aesthetic, featuring dynamic layouts and responsive design to deliver an immersive experience to combat robotics fans, participants, and sponsors.

---

## 🌟 Key Features

*   **Striking Visual Identity:** A custom dark mode aesthetic with red and gold accents, Orbitron typography, and cyberpunk-style borders and gradients that perfectly match the intense atmosphere of robot combat.
*   **Hero Section & Branding:** A high-impact landing area featuring a dramatic robotic battle arena, instantly drawing users into the action.
*   **Dynamic Event Showcase:** Sections to highlight competition disciplines (like "Robo War" and "Sumo") with distinct visual styling and typography.
*   **User Journey Mapping:** A clean, step-by-step visual guide outlining how users can participate, from team formation and robot building to the ultimate arena battle.
*   **Interactive Leaderboards:** A custom-designed leaderboard system featuring glowing borders, circuit-grid backgrounds, and ranked player lists to showcase top competitors.
*   **Sponsor Ecosystem:** A dedicated, polished section showcasing institutional and corporate sponsors (e.g., NIT Delhi, IIT Bombay, Delhivery Robotics) with precise logo blending and styling.
*   **Fully Responsive:** Pixel-perfect layouts that adapt seamlessly across mobile, tablet, and desktop devices.

---

## 🛠️ Technology Stack

This application is built using modern web development standards to ensure fast load times and an excellent developer experience:

*   **Framework:** [React 18](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for robust, type-safe code.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for highly customizable, utility-first styling without leaving the HTML.
*   **Build Tool:** [Vite](https://vitejs.dev/) for lightning-fast Hot Module Replacement (HMR) and optimized production builds.
*   **Icons:** Custom inline SVGs and [Lucide React](https://lucide.dev/) for crisp, scalable iconography.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your machine.
*   [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd Botmakers_Pvt_Ltd
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **View the app:**
    Open your browser and navigate to `http://localhost:5173` to see the application running.

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will compile and minify the code into the `dist` folder, which is ready to be deployed to any static hosting provider.

---

## 📂 Project Structure

```text
Botmakers_Pvt_Ltd/
├── public/                 # Static assets (images, logos, SVGs)
│   ├── indian-bit.png
│   ├── nit-delhi.png
│   ├── hero-bg.png
│   └── ...
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── EventsSection.tsx
│   │   ├── UserJourney.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WhyRegisterSection.tsx
│   │   └── JoinEcosystemSection.tsx
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and Tailwind directives
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

---

*Designed and built for the future of robotic combat.*
