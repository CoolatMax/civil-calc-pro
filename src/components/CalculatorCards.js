/**
 * Civil Calc Pro - UI Components
 */
export const UIComponents = {
    // 1. Concrete Template
    concreteCard: `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h4 class="font-bold text-gray-700">Formwork Dimensions (m)</h4>
                    <input type="number" id="L" placeholder="Length" class="w-full p-2 border rounded" oninput="updateSchematic('L', this.value)">
                    <input type="number" id="W" placeholder="Width" class="w-full p-2 border rounded" oninput="updateSchematic('W', this.value)">
                    <input type="number" id="D" placeholder="Depth" class="w-full p-2 border rounded" oninput="updateSchematic('D', this.value)">
                    <h4 class="font-bold text-gray-700 mt-4">Mix Ratio (C:S:A)</h4>
                    <div class="flex gap-2">
                        <input type="number" id="rc" value="1" class="w-1/3 p-2 border rounded">
                        <input type="number" id="rs" value="1.5" class="w-1/3 p-2 border rounded">
                        <input type="number" id="ra" value="3" class="w-1/3 p-2 border rounded">
                    </div>
                </div>
                <div class="bg-gray-50 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-4">
                    <div class="w-32 h-20 bg-blue-200 border-2 border-blue-400 relative">
                        <div id="label-L" class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono">L</div>
                        <div id="label-W" class="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-mono">W</div>
                        <div id="label-D" class="absolute bottom-1/2 left-1/2 text-xs font-bold text-blue-600">D</div>
                    </div>
                </div>
            </div>
            <button id="calc-concrete" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">Analyze Mix & Quantities</button>
        </div>
    `,

    // 2. Length Converter Template
    lengthCard: `
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="number" id="unit-val" placeholder="Value" class="p-2 border rounded">
                <select id="unit-from" class="p-2 border rounded"><option value="m">Meters</option><option value="ft">Feet</option></select>
                <select id="unit-to" class="p-2 border rounded"><option value="ft">Feet</option><option value="m">Meters</option></select>
            </div>
            <button id="calc-length" class="w-full bg-gray-800 text-white py-3 rounded-lg font-bold">Convert Now</button>
        </div>
    `,

    // 3. Earthwork Template
    earthworkCard: `
        <div class="space-y-4">
            <h4 class="font-bold">Excavation Pit Dimensions</h4>
            <input type="number" id="e-L" placeholder="Length" class="w-full p-2 border rounded">
            <input type="number" id="e-W" placeholder="Width" class="w-full p-2 border rounded">
            <input type="number" id="e-D" placeholder="Depth" class="w-full p-2 border rounded">
            <button id="calc-earthwork" class="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Calculate Excavation</button>
        </div>
    `,

    // 11. Brickwork Template
    bricksCard: `
        <div class="space-y-4">
            <h4 class="font-bold">Wall Volume (m³)</h4>
            <input type="number" id="wall-vol" placeholder="Enter Total Volume" class="w-full p-2 border rounded">
            <button id="calc-brick" class="w-full bg-orange-600 text-white py-3 rounded-lg font-bold">Calculate Bricks</button>
        </div>
    `
};

// Global helper for schematic updates
window.updateSchematic = function(id, val) {
    const label = document.getElementById('label-' + id);
    if (label) label.innerText = val ? val + 'm' : id;
};