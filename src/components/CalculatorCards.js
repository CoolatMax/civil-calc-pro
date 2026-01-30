/**
 * Civil Calc Pro - Full 16-Tool UI Suite
 * Optimized for real-time calculation and schematic updates.
 */

export const UIComponents = {
    // 1. Concrete & Steel
    concreteCard: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div class="space-y-4">
                <h4 class="text-sm font-bold text-gray-400 uppercase">Formwork Dimensions (m)</h4>
                <input type="number" id="L" placeholder="Length" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('L', this.value)">
                <input type="number" id="W" placeholder="Width" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('W', this.value)">
                <input type="number" id="D" placeholder="Depth" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('D', this.value)">
                <button id="calc-btn" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg">Analyze Mix</button>
            </div>
            <div class="flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed p-6">
                <div class="relative w-40 h-24 bg-blue-500/20 border-2 border-blue-500">
                    <div id="label-L" class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">L</div>
                    <div id="label-W" class="absolute top-1/2 -right-10 -translate-y-1/2 text-xs font-bold text-gray-500">W</div>
                    <div id="label-D" class="absolute inset-0 flex items-center justify-center text-blue-700 font-bold">D</div>
                </div>
            </div>
        </div>`,

    // 2. Length Converter
    lengthCard: `
        <div class="p-6 space-y-6">
            <input type="number" id="unit-val" placeholder="Enter Value" class="w-full p-4 bg-gray-50 border rounded-2xl text-2xl font-mono">
            <div class="grid grid-cols-2 gap-4">
                <select id="unit-from" class="p-3 border rounded-xl"><option value="m">Meters</option><option value="ft">Feet</option><option value="in">Inches</option></select>
                <select id="unit-to" class="p-3 border rounded-xl"><option value="ft">Feet</option><option value="m">Meters</option><option value="mm">Millimeters</option></select>
            </div>
            <button id="calc-btn" class="w-full bg-gray-800 text-white py-4 rounded-xl font-bold">Convert Now</button>
        </div>`,

    // 3. Earthwork
    earthworkCard: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div class="space-y-4">
                <h4 class="text-sm font-bold text-gray-400 uppercase">Excavation Pit (m)</h4>
                <input type="number" id="e-L" placeholder="Length" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('L', this.value)">
                <input type="number" id="e-W" placeholder="Width" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('W', this.value)">
                <input type="number" id="e-D" placeholder="Depth" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('D', this.value)">
                <button id="calc-btn" class="w-full bg-green-600 text-white py-4 rounded-xl font-bold">Calculate Volume</button>
            </div>
            <div class="bg-emerald-50 rounded-2xl flex items-center justify-center">
                <div class="w-32 h-16 bg-emerald-200 border-b-4 border-emerald-600 relative">
                    <span id="label-L" class="absolute -top-5 left-0 text-[10px] font-bold">L</span>
                </div>
            </div>
        </div>`,

    // 4. Steel Weight
    steelCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="dia" placeholder="Bar Diameter (mm)" class="w-full p-3 border rounded-xl">
            <input type="number" id="len" placeholder="Total Length (m)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-red-600 text-white py-4 rounded-xl font-bold">Calculate Weight (kg)</button>
        </div>`,

    // 5. Brickwork & Mortar
    bricksCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="wall-vol" placeholder="Wall Volume (m³)" class="w-full p-3 border rounded-xl">
            <div class="text-xs text-gray-400 italic">Standard brick size: 190 x 90 x 90 mm</div>
            <button id="calc-btn" class="w-full bg-orange-500 text-white py-4 rounded-xl font-bold">Estimate Quantities</button>
        </div>`,

    // 6. Plastering
    plasterCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="p-area" placeholder="Wall Area (m²)" class="w-full p-3 border rounded-xl">
            <input type="number" id="p-thick" placeholder="Thickness (mm)" class="w-full p-3 border rounded-xl" value="12">
            <button id="calc-btn" class="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">Estimate Cement & Sand</button>
        </div>`,

    // 7. Flooring/Tiling
    flooringCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="area" placeholder="Floor Area (m²)" class="w-full p-3 border rounded-xl">
            <input type="number" id="tileSize" placeholder="Tile Side Length (m)" class="w-full p-3 border rounded-xl" value="0.6">
            <button id="calc-btn" class="w-full bg-teal-600 text-white py-4 rounded-xl font-bold">Calculate Tiles</button>
        </div>`,

    // 8. Woodwork
    woodCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="w-l" placeholder="Length (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="w-b" placeholder="Breadth (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="w-h" placeholder="Height (m)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-amber-700 text-white py-4 rounded-xl font-bold">Calculate Timber Volume</button>
        </div>`,

    // 9. Painting
    paintCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="paint-area" placeholder="Total Surface Area (m²)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-pink-500 text-white py-4 rounded-xl font-bold">Estimate Paint Liters</button>
        </div>`,

    // 10. Column Capacity
    columnCard: `
        <div class="p-6 space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="col-b" placeholder="Width (mm)" class="p-3 border rounded-xl">
                <input type="number" id="col-d" placeholder="Depth (mm)" class="p-3 border rounded-xl">
            </div>
            <input type="number" id="col-steel" placeholder="Steel % (e.g., 1.5)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-blue-900 text-white py-4 rounded-xl font-bold">Calculate Axial Load</button>
        </div>`,

    // 11. Shuttering Area
    shutteringCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="s-l" placeholder="Length (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="s-w" placeholder="Width (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="s-d" placeholder="Depth (m)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-stone-600 text-white py-4 rounded-xl font-bold">Calculate Surface Area</button>
        </div>`,

    // 12. Tank Capacity
    waterCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="t-L" placeholder="Length (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="t-W" placeholder="Width (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="t-H" placeholder="Height (m)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold">Calculate Liters</button>
        </div>`,

    // 13. Slope/Gradient
    slopeCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="rise" placeholder="Vertical Rise" class="w-full p-3 border rounded-xl">
            <input type="number" id="run" placeholder="Horizontal Run" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-violet-600 text-white py-4 rounded-xl font-bold">Calculate % Gradient</button>
        </div>`,

    // 14. Material Weights
    weightCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="m-vol" placeholder="Volume (m³)" class="w-full p-3 border rounded-xl">
            <select id="m-density" class="w-full p-3 border rounded-xl">
                <option value="1600">Sand (1600 kg/m³)</option>
                <option value="2400">Concrete (2400 kg/m³)</option>
                <option value="7850">Steel (7850 kg/m³)</option>
            </select>
            <button id="calc-btn" class="w-full bg-slate-600 text-white py-4 rounded-xl font-bold">Calculate Total Weight</button>
        </div>`,

    // 15. Manpower Estimator
    manpowerCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="work-vol" placeholder="Total Work Volume" class="w-full p-3 border rounded-xl">
            <input type="number" id="prod" placeholder="Productivity (Units/Day)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold">Estimate Labors</button>
        </div>`,

    // 16. Rate Analysis
    rateCard: `
        <div class="p-6 space-y-4">
            <input type="number" id="qty" placeholder="Quantity" class="w-full p-3 border rounded-xl">
            <input type="number" id="u-rate" placeholder="Unit Rate ($)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold">Estimate Total Cost</button>
        </div>`
};