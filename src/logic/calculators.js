/**
 * Civil Calc Pro - Logic Engine
 * This file contains the core engineering formulas.
 */

const CivilCalc = {
    // 1. Concrete & Ingredients Calculation
    calculateConcrete: (length, width, depth, ratioCement, ratioSand, ratioAggregate) => {
        const wetVolume = length * width * depth;
        
        // Dry Volume Factor is typically 1.54 for concrete
        const dryVolume = wetVolume * 1.54;
        
        const sumOfRatios = ratioCement + ratioSand + ratioAggregate;
        
        const cementVol = (ratioCement / sumOfRatios) * dryVolume;
        const sandVol = (ratioSand / sumOfRatios) * dryVolume;
        const aggregateVol = (ratioAggregate / sumOfRatios) * dryVolume;

        return {
            wetVolume: wetVolume.toFixed(2),
            dryVolume: dryVolume.toFixed(2),
            cementBags: (cementVol / 0.0347).toFixed(2), // 1 bag cement = 0.0347 m3
            sand: sandVol.toFixed(2),
            aggregate: aggregateVol.toFixed(2)
        };
    },

    // 2. Steel Weight Calculation (D^2 / 162)
    calculateSteelWeight: (diameter, length) => {
        // Diameter in mm, Length in meters
        const weight = (Math.pow(diameter, 2) / 162) * length;
        return weight.toFixed(2);
    }
};

// Export for use in UI or CLI
export default CivilCalc;