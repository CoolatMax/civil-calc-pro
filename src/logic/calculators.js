/**
 * Civil Calc Pro - Final Engineering Logic Engine
 * Synchronized with 16-Tool UI Registry
 */

const CivilCalc = {
    // 1. Concrete & Steel
    calculateConcrete: (l, w, d) => {
        const wetVol = l * w * d;
        const dryVol = wetVol * 1.54; // Shrinkage/Wastage factor
        const ratioSum = 5.5; // M20 (1:1.5:3)
        return {
            cementBags: ((1 / ratioSum) * dryVol / 0.0347).toFixed(2),
            sand: ((1.5 / ratioSum) * dryVol).toFixed(3),
            aggregate: ((3 / ratioSum) * dryVol).toFixed(3)
        };
    },

    // 2. Length Converter
    convertLength: (val, from, to) => {
        const factors = { m: 1, ft: 3.28084, in: 39.3701, mm: 1000, cm: 100 };
        return ((val / factors[from]) * factors[to]).toFixed(3);
    },

    // 3. Earthwork (Matches e-L, e-W, e-D in Cards)
    calculateEarthwork: (l, w, d) => {
        return { volume: (l * w * d).toFixed(3) };
    },

    // 4. Steel Weight (D^2 / 162)
    calculateSteel: (dia, len) => {
        return ((Math.pow(dia, 2) / 162) * len).toFixed(2);
    },

    // 5. Brickwork & Mortar
    calculateBricks: (vol) => {
        return {
            bricks: Math.ceil(vol / 0.002), // Brick + Mortar volume
            mortar: (vol * 0.25).toFixed(3)
        };
    },

    // 6. Plastering
    calculatePlaster: (area, thick) => {
        const vol = area * (thick / 1000);
        const dryVol = vol * 1.33; // Bulking factor
        return {
            cement: (dryVol / 4 / 0.0347).toFixed(2),
            sand: (dryVol * 0.75).toFixed(3)
        };
    },

    // 7. Flooring/Tiling
    calculateFlooring: (area, tileSize) => {
        const count = Math.ceil(area / (tileSize * tileSize));
        return { count: count + Math.ceil(count * 0.05) }; // 5% wastage
    },

    // 8. Woodwork
    calculateWood: (l, b, h) => {
        return (l * b * h).toFixed(4);
    },

    // 9. Painting
    calculatePaint: (area) => {
        return (area / 9.5).toFixed(2); // Avg coverage in Liters
    },

    // 10. Column Capacity (IS 456 formula)
    calculateColumn: (b, d, steelPercent) => {
        const ag = b * d;
        const asc = (steelPercent / 100) * ag;
        const ac = ag - asc;
        // Pu = 0.4.fck.Ac + 0.67.fy.Asc
        return ((0.4 * 20 * ac + 0.67 * 415 * asc) / 1000).toFixed(2);
    },

    // 11. Shuttering Area
    calculateShuttering: (l, w, d) => {
        return (2 * (l * d + w * d)).toFixed(2);
    },

    // 12. Tank Capacity
    calculateTank: (l, w, h) => {
        return (l * w * h * 1000).toFixed(0); // m3 to Liters
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
    calculateLabor: (vol, prod) => {
        return Math.ceil(vol / prod);
    },

    // 16. Rate Analysis
    calculateRate: (qty, rate) => {
        const total = qty * rate;
        return (total + (total * 0.18)).toFixed(2); // Incl 18% Tax
    }
};

export default CivilCalc;