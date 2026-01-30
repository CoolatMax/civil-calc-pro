/**
 * Civil Calc Pro - CLI Tool
 * Purpose: Allows site engineers or developers to run quick calculations via terminal.
 * Usage: node src/cli/calc.js <command> [options]
 */

import CivilCalc from '../logic/calculators.js';

const args = process.argv.slice(2);
const command = args[0];

// Help Menu - The basis for your CLI Documentation
const showHelp = () => {
    console.log(`
    🏗️ Civil Calc Pro CLI
    Usage: node src/cli/calc.js <command> [options]

    Commands:
      concrete    Calculate concrete materials (L W D)
      steel       Calculate steel weight (Dia Length)
      convert     Unit conversion (Value From To)
      brick       Calculate bricks needed (Volume)
      
    Examples:
      node src/cli/calc.js concrete 10 5 0.15
      node src/cli/calc.js steel 12 100
      node src/cli/calc.js convert 10 m ft
    `);
};

if (!command || command === '--help') {
    showHelp();
    process.exit();
}

switch (command) {
    case 'concrete':
        const [L, W, D] = args.slice(1).map(Number);
        if (!L || !W || !D) {
            console.error("❌ Error: Please provide Length, Width, and Depth.");
        } else {
            const res = CivilCalc.calculateConcrete(L, W, D);
            console.log(`
    ✅ Concrete Estimate:
    -------------------
    Wet Volume:   ${res.wetVol} m³
    Dry Volume:   ${res.dryVol} m³
    Cement:       ${res.cementBags} Bags
    Sand:         ${res.sand} m³
    Aggregate:    ${res.aggregate} m³
    Water:        ${res.water} Liters
            `);
        }
        break;

    case 'steel':
        const [dia, len] = args.slice(1).map(Number);
        if (!dia || !len) {
            console.error("❌ Error: Please provide Diameter (mm) and Length (m).");
        } else {
            const weight = CivilCalc.calculateSteelWeight(dia, len);
            console.log(`✅ Steel Weight: ${weight} kg`);
        }
        break;

    case 'convert':
        const [val, from, to] = args.slice(1);
        const result = CivilCalc.convertLength(Number(val), from, to);
        console.log(`✅ Result: ${val}${from} = ${result}${to}`);
        break;

    case 'brick':
        const [vol] = args.slice(1).map(Number);
        const brickRes = CivilCalc.calculateBrickwork(vol);
        console.log(`
    ✅ Brickwork Estimate:
    --------------------
    Bricks:      ${brickRes.numBricks} units
    Mortar:      ${brickRes.mortarVol.toFixed(3)} m³
        `);
        break;

    default:
        console.log("❌ Unknown command.");
        showHelp();
}