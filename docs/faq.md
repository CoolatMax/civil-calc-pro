# Frequently Asked Questions (FAQ)

This document addresses common technical queries regarding the engineering formulas and software logic used in Civil Calc Pro.

---

## 🏗️ Engineering Calculations

### Q: Why is a factor of 1.54 used for Dry Volume of concrete?
**A:** When mixing concrete, the volume of dry materials (cement, sand, and aggregate) reduces when water is added because the finer particles (cement and sand) fill the voids between the larger aggregates. To achieve 1.0 $m^3$ of finished (wet) concrete, approximately 1.54 $m^3$ of dry ingredients are required.



### Q: What steel density is used for weight calculations?
**A:** The software uses the standard density of $7850$ kg/$m^3$. This is reflected in the simplified formula used in the engine:
$$Weight = \frac{D^2}{162} \times L$$
where $D$ is the diameter in mm and $L$ is the length in meters.

### Q: Does the earthwork calculator account for soil swell?
**A:** Currently, the Earthwork module calculates the **bank volume** (the volume of the hole). It does not automatically add a "swell factor" for loose soil. Users should manually adjust the output based on local soil type (typically 15-30% for loose soil).

---

## 💻 Software & Integration

### Q: Can I use the logic engine in my own project?
**A:** Yes. The core math is decoupled from the UI. You can import the `CivilCalc` object from `src/logic/calculators.js` into any JavaScript project. Refer to the [SDK Guide](./sdk-guide.md) for integration steps.

### Q: Is the app functional offline?
**A:** Since the application is built using Vanilla JavaScript and CSS, it can be cached by your browser. Once loaded, the core calculators do not require an active internet connection to perform math, making it ideal for remote construction sites.



### Q: How do I report a calculation error or a bug?
**A:** Please refer to our [Release Notes](./release-notes.md) to see if the issue is a known limitation. If not, you can open an "Issue" on the GitHub repository.

---

## 📏 Units & Standards

### Q: What codes of practice are followed?
**A:** The Column Design and Beam Analysis modules are based on **Limit State Design** principles. While simplified for field estimation, the formulas generally align with **IS 456:2000** and **Eurocode 2** standards.

### Q: Can I change the default brick size?
**A:** The current version uses a standard modular brick size of $190 \times 90 \times 90$ mm. To use a custom size, you can modify the constants in the `calculateBrickwork` function within `src/logic/calculators.js`.