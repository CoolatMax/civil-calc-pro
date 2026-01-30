/**
 * Civil Calc Pro - UI Components
 * Standardized templates for all 16 tools.
 */

export const UIComponents = {
    // Template for Concrete, Cement, Water, Dry/Wet Volume (Items 1, 4, 5, 14, 15)
    concreteCard: `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h4 class="font-bold text-gray-700">Formwork Dimensions (m)</h4>
                    <input type="number" id="L" placeholder="Length" class="w-full p-2 border rounded">
                    <input type="number" id="W" placeholder="Width" class="w-full p-2 border rounded">
                    <input type="number" id="D" placeholder="Depth" class="w-full p-2 border rounded">
                    <h4 class="font-bold text-gray-700 mt-4">Mix Ratio (C:S:A)</h4>
                    <div class="flex gap-2">
                        <input type="number" id="rc" value="1" class="w-1/3 p-2 border rounded" title="Cement">
                        <input type="number" id="rs" value="1.5" class="w-1/3 p-2 border rounded" title="Sand">
                        <input type="number" id="ra" value="3" class="w-1/3 p-2 border rounded" title="Aggregate">
                    </div>
                </div>
                <div class="bg-gray-50 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-4">
                    <span class="text-xs text-gray-400 mb-2 font-mono">DIMENSION SCHEMATIC</span>
                    <div class="w-32 h-20 bg-blue-200 border-2 border-blue-400 relative">
                        <div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">L</div>
                        <div class="absolute top-1/2 -right-6 -translate-y-1/2 text-xs">W</div>
                        <div class="absolute bottom-1/2 left-1/2 text-xs font-bold text-blue-600">D</div>
                    </div>
                </div>
            </div>
            <button id="calc-concrete" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Analyze Mix & Quantities</button>
        </div>
    `,

    // Template for Steel Weight & BBS (Items 6, 10, 13)
    steelCard: `
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h4 class="font-bold text-gray-700">Reinforcement Details</h4>
                    <label class="text-sm text-gray-500">Bar Diameter (mm)</label>
                    <select id="dia" class="w-full p-2 border rounded">
                        <option value="8">8mm</option>
                        <option value="10">10mm</option>
                        <option value="12" selected>12mm</option>
                        <option value="16">16mm</option>
                        <option value="20">20mm</option>
                        <option value="25">25mm</option>
                    </select>
                    <label class="text-sm text-gray-500">Total Length (m)</label>
                    <input type="number" id="steel-len" placeholder="e.g. 120" class="w-full p-2 border rounded">
                    <label class="text-sm text-gray-500">Wastage (%)</label>
                    <input type="number" id="wastage" value="5" class="w-full p-2 border rounded">
                </div>
                <div class="bg-gray-50 border-2 border-dashed rounded-lg flex items-center justify-center">
                    <div class="text-center">
                        <div class="w-24 h-2 bg-gray-400 rounded-full mx-auto mb-2"></div>
                        <p class="text-xs text-gray-400 font-mono">D = 12mm | L = Var</p>
                    </div>
                </div>
            </div>
            <button id="calc-steel" class="w-full bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-black transition">Calculate Steel Weight</button>
        </div>
    `,

    // Template for Brickwork & Mortar (Items 11, 12)
    brickCard: `
        <div class="space-y-4">
            <h4 class="font-bold text-gray-700">Wall Volume (m³)</h4>
            <input type="number" id="wall-vol" placeholder="Total Wall Volume" class="w-full p-2 border rounded">
            <p class="text-xs text-gray-400 italic">Uses standard brick size: 190mm x 90mm x 90mm</p>
            <button id="calc-brick" class="w-full bg-orange-600 text-white py-3 rounded-lg font-bold">Calculate Bricks & Mortar</button>
        </div>
    `,

    // Template for Rate Analysis (Item 16) - Interactive Table
    rateTable: `
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left border">
                <thead class="bg-gray-100 uppercase text-xs">
                    <tr>
                        <th class="p-3">Description</th>
                        <th class="p-3">Quantity</th>
                        <th class="p-3">Unit Rate ($)</th>
                        <th class="p-3">Total</th>
                    </tr>
                </thead>
                <tbody id="rate-body">
                    <tr class="border-b">
                        <td class="p-3 font-medium text-blue-600">Material Cost</td>
                        <td class="p-3"><input type="number" id="rate-q" value="1" class="w-16 border rounded p-1"></td>
                        <td class="p-3"><input type="number" id="rate-u" value="100" class="w-20 border rounded p-1"></td>
                        <td class="p-3 font-mono" id="rate-total">$100.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
};