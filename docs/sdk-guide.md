# SDK Integration Guide

The `CivilCalc` SDK is a modular JavaScript library that provides high-precision engineering formulas for construction applications. This guide explains how to integrate the engine into your own web or Node.js applications.

---

## 📦 Getting Started

The SDK is located at `src/logic/calculators.js`. It is written as an **ES6 Module**, making it compatible with modern frameworks like React, Vue, and Next.js.

### 1. Manual Integration
Copy the `calculators.js` file into your project's directory and import it:

```javascript
import CivilCalc from './path/to/calculators.js';