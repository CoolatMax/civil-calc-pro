# Release Notes: Civil Calc Pro

All notable changes to this project will be documented in this file. Civil Calc Pro adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-01-30
### 🚀 Initial Stable Release
This version marks the completion of the core engineering suite and the integrated technical writing framework.



[Image of a software release lifecycle diagram]


#### Added
- **16 Core Calculators:** Full implementation of concrete, steel, earthwork, and brickwork logic.
- **Sophisticated SPA UI:** Responsive dashboard with sidebar navigation and zero-latency tool switching.
- **Developer Suite:** Launched the CLI tool and modular SDK for third-party integration.
- **Interactive Schematics:** Added CSS-based dimension diagrams for all primary calculators.
- **Documentation Hub:** Completed API Reference, CLI Guide, SDK Integration Manual, and FAQ.

#### Engineering Formulas
- Integrated $V_{dry} = V_{wet} \times 1.54$ for dry volume estimation.
- Integrated $D^2/162$ for reinforcement weight calculation.
- Added $P_u = 0.4 f_{ck} A_c + 0.67 f_y A_{sc}$ for axial column capacity.

---

## [0.2.0] - 2026-01-25
### ✨ Beta Integration
#### Added
- Unit Conversion module supporting `m`, `ft`, `in`, `cm`, and `mm`.
- Rate Analysis interactive table for cost estimation.
- Mobile-responsive navigation toggle for on-site usage.

#### Fixed
- Resolved a floating-point precision error in the steel weight module where results were rounding incorrectly.
- Fixed sidebar overflow issues on small-screen devices (iPhone SE/Mini).

---

## [0.1.0] -