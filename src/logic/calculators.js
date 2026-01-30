const CivilCalc = {
    // 1. Concrete logic
    calculateConcrete: (l, w, d, ratio = { c: 1, s: 1.5, a: 3 }) => {
        const wetVol = l * w * d;
        const dryVol = wetVol * 1.54;
        const totalParts = ratio.c + ratio.s + ratio.a;
        
        const cementM3 = (ratio.c / totalParts) * dryVol;
        const sand = (ratio.s / totalParts) * dryVol;
        const aggregate = (ratio.a / totalParts) * dryVol;
        const cementBags = cementM3 / 0.0347;

        return { cementBags, sand, aggregate, wetVol };
    },

    // 2. Length Converter logic
    convertLength: (val, from, to) => {
        const factors = { m: 1, ft: 3.28084, in: 39.3701, mm: 1000, cm: 100 };
        const valInMeters = val / factors[from];
        return valInMeters * factors[to];
    },

    // 3. Earthwork logic
    calculateEarthwork: (l, w, d) => {
        return { volume: l * w * d };
    },

    // 11. Brickwork logic
    calculateBricks: (wallVol) => {
        // Standard brick with mortar: 0.2m x 0.1m x 0.1m
        const brickWithMortarVol = 0.002; 
        const totalBricks = wallVol / brickWithMortarVol;
        const mortarVol = wallVol * 0.25; // Approx 25% mortar
        return { totalBricks: Math.ceil(totalBricks), mortarVol };
    }
};

export default CivilCalc;