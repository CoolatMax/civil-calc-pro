export const UIComponents = {
    concreteCard: `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h4 class="font-bold text-gray-700">Formwork Dimensions (m)</h4>
                    <input type="number" id="L" placeholder="Length" class="w-full p-2 border rounded" oninput="window.updateSchematic('L', this.value)">
                    <input type="number" id="W" placeholder="Width" class="w-full p-2 border rounded" oninput="window.updateSchematic('W', this.value)">
                    <input type="number" id="D" placeholder="Depth" class="w-full p-2 border rounded" oninput="window.updateSchematic('D', this.value)">
                </div>
                <div class="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl flex items-center justify-center p-10 relative">
                    <div class="w-32 h-20 bg-blue-500/20 border-2 border-blue-500 relative">
                        <span id="label-L" class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono">L</span>
                        <span id="label-W" class="absolute top-1/2 -right-10 -translate-y-1/2 text-xs font-mono">W</span>
                        <span id="label-D" class="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-700">D</span>
                    </div>
                </div>
            </div>
            <button id="calc-btn" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Analyze Quantities</button>
        </div>
    `,
    lengthCard: `
        <div class="space-y-4">
            <h4 class="font-bold text-gray-700">Length Converter</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="number" id="unit-val" placeholder="Value" class="p-2 border rounded">
                <select id="unit-from" class="p-2 border rounded"><option value="m">Meters</option><option value="ft">Feet</option></select>
                <select id="unit-to" class="p-2 border rounded"><option value="ft">Feet</option><option value="m">Meters</option></select>
            </div>
            <button id="calc-btn" class="w-full bg-gray-800 text-white py-3 rounded-lg font-bold">Convert Now</button>
        </div>
    `,
    earthworkCard: `
        <div class="space-y-4">
            <h4 class="font-bold text-gray-700">Excavation Volume</h4>
            <input type="number" id="e-L" placeholder="Length (m)" class="w-full p-2 border rounded">
            <input type="number" id="e-W" placeholder="Width (m)" class="w-full p-2 border rounded">
            <input type="number" id="e-D" placeholder="Depth (m)" class="w-full p-2 border rounded">
            <button id="calc-btn" class="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Calculate Volume</button>
        </div>
    `,
    bricksCard: `
        <div class="space-y-4">
            <h4 class="font-bold text-gray-700">Brickwork (Wall)</h4>
            <input type="number" id="wall-vol" placeholder="Wall Volume (m³)" class="w-full p-2 border rounded">
            <button id="calc-btn" class="w-full bg-orange-600 text-white py-3 rounded-lg font-bold">Calculate Bricks</button>
        </div>
    `
};