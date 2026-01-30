/**
 * Civil Calc Pro - Complete Logic Engine
 * All calculations use standard Metric (SI) units by default.
 */

const CivilCalc = {
    // 1, 4, 5, 14, 15. Concrete Suite (Wet/Dry/Mix/Water)
    calculateConcrete: (L, W, D, ratio = { c: 1, s: 1.5, a: 3 }, wcr = 0.5) => {
        const wetVol = L * W * D;
        const dryVol = wetVol * 1.54; // Item 14 & 15
        const sumRatio = ratio.c + ratio.s + ratio.a;
        
        const cementVol = (ratio.c / sumRatio) * dryVol;
        const cementBags = cementVol / 0.0347;
        const waterLitres = (cementBags * 50) * wcr; // Item 5

        return {
            wetVol, dryVol, cementBags,
            sand: (ratio.s / sumRatio) * dryVol,
            aggregate: (ratio.a / sumRatio) * dryVol,
            water: waterLitres
        };
    },

    // 2. Length Converter
    convertLength: (val, from, to) => {
        const m = { m: 1, cm: 0.01, mm: 0.001, in: 0.0254, ft: 0.3048 };
        return (val * m[from]) / m[to];
    },

    // 3. Earthwork (Excavation with Slope/Pitch)
    calculateEarthwork: (L, W, D, slopeRatio = 0) => {
        // Simple pit: V = L*W*D. If slope, uses Prismoidal formula approximation
        const bottomArea = L * W;
        const topL = L + (2 * slopeRatio * D);
        const topW = W + (2 * slopeRatio * D);
        const topArea = topL * topW;
        return (D / 6) * (bottomArea + topArea + 4 * ((L + slopeRatio * D) * (W + slopeRatio * D)));
    },

    // 6 & 10. Steel Weight & BBS
    calculateSteelWeight: (dia, len) => (Math.pow(dia, 2) / 162) * len,

    // 7. Area Calculation
    calculateArea: (L, W, shape = 'rect') => {
        if (shape === 'circle') return Math.PI * Math.pow(L / 2, 2);
        return L * W;
    },

    // 8. Beam Analysis (Simple Support Moment)
    beamMoment: (w, L) => (w * Math.pow(L, 2)) / 8, // wL²/8

    // 9. Column Design (Axial Load capacity - Basic RCC)
    columnCapacity: (Ag, Asc, fck, fy) => {
        // P = 0.4*fck*Ac + 0.67*fy*Asc
        const Ac = Ag - Asc;
        return (0.4 * fck * Ac + 0.67 * fy * Asc) / 1000; // in kN
    },

    // 11, 12. Brickwork & Mortar
    calculateBrickwork: (vol, brickSize = { l: 0.19, w: 0.09, h: 0.09 }) => {
        const volWithMortar = (brickSize.l + 0.01) * (brickSize.w + 0.01) * (brickSize.h + 0.01);
        const numBricks = vol / volWithMortar;
        const mortarVol = vol - (numBricks * (brickSize.l * brickSize.w * brickSize.h));
        return { numBricks: Math.ceil(numBricks), mortarVol };
    },

    // 13. Steel Wastage
    calculateWastage: (totalWeight, percentage) => totalWeight * (percentage / 100),

    // 16. Rate Analysis (Basic example)
    rateAnalysis: (qty, unitRate, laborCost) => (qty * unitRate) + laborCost
};

export default CivilCalc;