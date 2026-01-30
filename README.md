# Civil Calc Pro 🏗️
**A High-Precision Engineering Suite & Technical Writing Showcase**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-green.svg)

Civil Calc Pro is a sophisticated, mobile-responsive web suite built for **Site Engineers** and **Project Managers**. It streamlines 16 critical construction calculations—from concrete mix design to Bar Bending Schedules (BBS)—while maintaining a "seamlessly efficient" user experience.

---

## 📘 Documentation Portfolio
This repository serves as a comprehensive showcase of **Technical Writing** deliverables. Explore the links below to see how I document complex systems:

* [**API Reference**](./docs/api-ref.md): Detailed documentation for the `CivilCalc` JavaScript engine.
* [**CLI Usage Guide**](./docs/cli-usage.md): Instructions for the terminal-based calculation tool.
* [**SDK Integration**](./docs/sdk-guide.md): A guide for developers to integrate our logic into third-party apps.
* [**Release Notes**](./docs/release-notes.md): Version history and structural update logs.
* [**FAQ**](./docs/faq.md): Technical explanations of engineering constants and formulas.

---

## 🛠️ Key Features
The suite includes 16 specialized modules designed for on-site utility:

1.  **Concrete & Steel:** Calculate quantities for Column, Beam, Foundation, and Slab.
2.  **BBS Generator:** Automate Bar Bending Schedules with weight calculations.
3.  **Earthwork:** Excavation and backfilling volume estimation with slope logic.
4.  **Brickwork & Mortar:** Precise unit counts and wet/dry volume for binders.
5.  **Rate Analysis:** Interactive tables for cost estimation and labor budgeting.
6.  **Design Tools:** Beam analysis (Moments) and Column axial load capacity.

---

## 📐 Engineering Logic
We prioritize accuracy by using standardized engineering constants. 
- **Dry Volume Factor:** $V_{dry} = V_{wet} \times 1.54$
- **Steel Weight Formula:** $W = \frac{D^2}{162} \times L$
- **Column Capacity:** $P_u = 0.4 f_{ck} A_c + 0.67 f_y A_{sc}$

---

## 💻 Developer Quickstart

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- GitHub Codespaces (Optional)

### Installation
```bash
# Clone the repository
git clone [https://github.com/yourusername/civil-calc-pro.git](https://github.com/yourusername/civil-calc-pro.git)

# Navigate to directory
cd civil-calc-pro

# Start the local server
npm start