/**
 * Civil Calc Pro - Logic Engine
 * 16-Tool Functional Implementation
 */

const CivilCalc = {
    // 1. Concrete & Steel Quantity
    calculateConcrete: (l, w, d) => {
        const wetVol = l * w * d;
        const dryVol = wetVol * 1.54; // Standard shrinkage factor
        const ratioSum = 1 + 1.5 + 3; // Standard M20 Mix
        const cementM3 = (1 / ratioSum) * dryVol;
        return {
            cementBags: (cementM3 / 0.0347).toFixed(2),
            sand: ((1.5 / ratioSum) * dryVol).toFixed(3),
            aggregate: ((3 / ratioSum) * dryVol).toFixed(3)
        };
    },

    // 2. Length Converter
    convertLength: (val, from, to) => {
        const factors = { m: 1, ft: 3.28084, in: 39.3701, mm: 1000, cm: 100 };
        const result = (val / factors[from]) * factors[to];
        return result.toFixed(3);
    },

    // 3. Earthwork
    calculateEarthwork: (l, w, d) => {
        return { volume: (l * w * d).toFixed(3) };
    },

    // 4. Steel Weight
    calculateSteel: (dia, len) => {
        // Formula: D^2 / 162 per meter
        const weight = (Math.pow(dia, 2) / 162) * len;
        return weight.toFixed(2);
    },

    // 5. Brickwork & Mortar
    calculateBricks: (vol) => {
        const brickCount = Math.ceil(vol / 0.002); // Standard brick with mortar
        const mortarVol = (vol * 0.25).toFixed(3); // 25% mortar assumption
        return { bricks: brickCount, mortar: mortarVol };
    },

    // 6. Plastering
    calculatePlaster: (area, thick) => {
        const vol = area * (thick / 1000);
        const dryVol = vol * 1.33; // Bulking factor
        return { cement: (dryVol / 4).toFixed(2), sand: (dryVol * 0.75).toFixed(3) };
    },

    // 7. Flooring/Tiling
    calculateFlooring: (area, tileSize) => {
        const tiles = Math.ceil(area / (tileSize * tileSize));
        return { count: tiles, waste: Math.ceil(tiles * 0.05) };
    },

    // 8. Woodwork
    calculateWood: (l, b, h) => {
        return (l * b * h).toFixed(4);
    },

    // 9. Painting
    calculatePaint: (area) => {
        return (area / 10).toFixed(2); // Avg 10m2 per liter
    },

    // 10. Column Capacity
    calculateColumn: (b, d, steelPercent) => {
        // Pu = 0.4fck.Ac + 0.67fy.Asc
        const ag = b * d;
        const asc = (steelPercent / 100) * ag;
        const ac = ag - asc;
        const pu = (0.4 * 20 * ac + 0.67 * 415 * asc) / 1000; // Result in kN
        return pu.toFixed(2);
    },

    // 11. Shuttering Area
    calculateShuttering: (l, w, d) => {
        return (2 * (l * d + w * d)).toFixed(2);
    },

    // 12. Tank Capacity
    calculateTank: (l, w, h) => {
        const m3 = l * w * h;
        return (m3 * 1000).toFixed(0); // 1m3 = 1000 Liters
    },

    // 13. Slope/Gradient
    calculateSlope: (rise, run) => {
        return ((rise / run) * 100).toFixed(2);
    },

    // 14. Material Weights
    calculateWeight: (vol, density) => {
        return (vol * density).toFixed(2);
    },

    // 15. Manpower Estimator
    calculateLabor: (vol, productivity) => {
        return Math.ceil(vol / productivity);
    },

    // 16. Rate Analysis
    calculateRate: (qty, unitRate) => {
        const base = qty * unitRate;
        const tax = base * 0.18; // 18% GST/Tax
        return (base + tax).toFixed(2);
    }
};

export default CivilCalc;