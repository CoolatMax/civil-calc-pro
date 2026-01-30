/**
 * Civil Calc Pro - UI Components
 * Integrated with 16-Tool Registry
 */

export const UIComponents = {
    // 1. Material Estimation
    concreteCard: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
            <div class="space-y-4">
                <h4 class="text-sm font-bold text-gray-400 uppercase">Input Dimensions (m)</h4>
                <div class="space-y-3">
                    <input type="number" id="L" placeholder="Length (L)" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('L', this.value)">
                    <input type="number" id="W" placeholder="Width (W)" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('W', this.value)">
                    <input type="number" id="D" placeholder="Thickness/Depth (D)" class="w-full p-3 bg-gray-50 border rounded-xl" oninput="window.updateSchematic('D', this.value)">
                </div>
                <button id="calc-btn" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700">Analyze Mix & Quantities</button>
            </div>
            <div class="flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-6">
                <div class="relative w-48 h-32 bg-blue-500/10 border-2 border-blue-500 rounded-sm">
                    <div id="label-L" class="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-mono font-bold text-gray-500">L</div>
                    <div id="label-W" class="absolute top-1/2 -right-12 -translate-y-1/2 text-xs font-mono font-bold text-gray-500">W</div>
                    <div id="label-D" class="absolute inset-0 flex items-center justify-center text-blue-600 font-bold">D</div>
                </div>
                <p class="mt-8 text-[10px] text-gray-400 uppercase font-bold tracking-widest">Interactive Dimension Schematic</p>
            </div>
        </div>
    `,

    // 2. Unit Converter
    lengthCard: `
        <div class="space-y-6 max-w-lg mx-auto py-4">
            <div class="space-y-2">
                <label class="text-xs font-bold text-gray-400 uppercase">Value to Convert</label>
                <input type="number" id="unit-val" class="w-full p-4 bg-gray-50 border rounded-2xl text-2xl font-mono" placeholder="0.00">
            </div>
            <div class="grid grid-cols-2 gap-4">
                <select id="unit-from" class="p-3 border rounded-xl bg-white"><option value="m">Meters (m)</option><option value="ft">Feet (ft)</option><option value="in">Inches (in)</option></select>
                <select id="unit-to" class="p-3 border rounded-xl bg-white"><option value="ft">Feet (ft)</option><option value="m">Meters (m)</option><option value="mm">Millimeters (mm)</option></select>
            </div>
            <button id="calc-btn" class="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">Convert Dimension</button>
        </div>
    `,

    // 3. Earthwork
    earthworkCard: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
                <h4 class="text-sm font-bold text-gray-400 uppercase">Excavation Pit (m)</h4>
                <input type="number" id="e-L" placeholder="Length" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('L', this.value)">
                <input type="number" id="e-W" placeholder="Width" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('W', this.value)">
                <input type="number" id="e-D" placeholder="Depth" class="w-full p-3 border rounded-xl" oninput="window.updateSchematic('D', this.value)">
                <button id="calc-btn" class="w-full bg-green-600 text-white py-4 rounded-xl font-bold">Calculate Volume</button>
            </div>
            <div class="bg-emerald-50 rounded-2xl flex items-center justify-center">
                 <div class="w-32 h-20 bg-emerald-200 border-b-4 border-emerald-600 relative opacity-60">
                    <span id="label-L" class="absolute -top-6 left-0 text-[10px]">L</span>
                 </div>
            </div>
        </div>
    `,

    // 4. Steel Weight
    steelCard: `
        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-xs font-bold text-gray-400 uppercase">Bar Diameter (mm)</label>
                    <input type="number" id="dia" placeholder="e.g. 12" class="w-full p-3 border rounded-xl">
                </div>
                <div class="space-y-2">
                    <label class="text-xs font-bold text-gray-400 uppercase">Total Length (m)</label>
                    <input type="number" id="len" placeholder="e.g. 100" class="w-full p-3 border rounded-xl">
                </div>
            </div>
            <button id="calc-btn" class="w-full bg-red-600 text-white py-4 rounded-xl font-bold">Calculate Steel Weight</button>
        </div>
    `,

    // 5. Brickwork
    bricksCard: `
        <div class="space-y-4">
            <h4 class="text-sm font-bold text-gray-400 uppercase">Wall Details</h4>
            <input type="number" id="wall-vol" placeholder="Total Wall Volume (m³)" class="w-full p-3 border rounded-xl">
            <div class="p-4 bg-orange-50 rounded-xl text-xs text-orange-700">
                Calculation based on standard modular brick size (190mm x 90mm x 90mm) with 10mm mortar joints.
            </div>
            <button id="calc-btn" class="w-full bg-orange-500 text-white py-4 rounded-xl font-bold">Calculate Bricks & Mortar</button>
        </div>
    `,

    // 6. Plastering
    plasterCard: `
        <div class="space-y-4">
            <input type="number" id="p-area" placeholder="Plaster Area (m²)" class="w-full p-3 border rounded-xl">
            <input type="number" id="p-thick" placeholder="Thickness (mm) - Default 12" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">Estimate Cement & Sand</button>
        </div>
    `,

    // 10. Column Capacity
    columnCard: `
        <div class="space-y-4">
            <h4 class="text-sm font-bold text-gray-400 uppercase">Axial Load Analysis</h4>
            <input type="number" id="col-b" placeholder="Width (mm)" class="w-full p-3 border rounded-xl">
            <input type="number" id="col-d" placeholder="Depth (mm)" class="w-full p-3 border rounded-xl">
            <input type="number" id="col-steel" placeholder="Steel Percentage (%)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-blue-900 text-white py-4 rounded-xl font-bold">Calculate Ultimate Load</button>
        </div>
    `,

    // 12. Tank Capacity
    waterCard: `
        <div class="space-y-4">
            <h4 class="text-sm font-bold text-gray-400 uppercase">Rectangular Tank</h4>
            <input type="number" id="t-L" placeholder="Length (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="t-W" placeholder="Width (m)" class="w-full p-3 border rounded-xl">
            <input type="number" id="t-H" placeholder="Height (m)" class="w-full p-3 border rounded-xl">
            <button id="calc-btn" class="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold">Calculate Liters</button>
        </div>
    `,

    // 16. Rate Analysis
    rateCard: `
        <div class="p-8 text-center bg-slate-50 border-2 border-dashed rounded-2xl">
            <div class="text-slate-400 mb-2 font-mono text-sm">RATE_ANALYSIS_ENGINE_v1.0</div>
            <p class="text-slate-500">Interactive pricing table and labor productivity dashboard.</p>
            <button id="calc-btn" class="mt-4 px-6 py-2 bg-slate-800 text-white rounded-lg">Launch Detailed View</button>
        </div>
    `
};