# API Reference: CivilCalc Logic Engine

The `CivilCalc` module is the core mathematical engine for Civil Calc Pro. It is written in Vanilla JavaScript (ES6) and designed to be stateless and highly performant for real-time construction site calculations.

---

## 1. Concrete & Material Calculations

### `calculateConcrete(L, W, D, ratio, wcr)`
Calculates the total volume and individual material requirements for concrete casting.



**Parameters:**
| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `L` | Number | Required | Length of the formwork (m). |
| `W` | Number | Required | Width/Breadth of the formwork (m). |
| `D` | Number | Required | Depth/Thickness of the formwork (m). |
| `ratio` | Object | `{c:1, s:1.5, a:3}` | The Mix Ratio (Cement:Sand:Aggregate). |
| `wcr` | Number | `0.5` | Water-Cement Ratio. |

**Returns:** `Object`
- `wetVol`: Volume of formwork ($m^3$).
- `dryVol`: Volume adjusted for shrinkage ($wetVol \times 1.54$).
- `cementBags`: Total 50kg bags required.
- `sand`: Sand required in $m^3$.
- `aggregate`: Aggregates required in $m^3$.
- `water`: Total water required in Liters.

---

## 2. Steel & Reinforcement

### `calculateSteelWeight(dia, len)`
Determines the unit weight of reinforcement steel bars.



**Formula:**
$$Weight (kg) = \frac{D^2}{162} \times L$$

**Parameters:**
- `dia`: Diameter of the bar in mm.
- `len`: Total length of the bar in meters.

---

## 3. Earthwork & Excavation

### `calculateEarthwork(L, W, D, slopeRatio)`
Calculates the volume of soil excavation for pits and foundations.



**Parameters:**
- `L`, `W`, `D`: Base dimensions in meters.
- `slopeRatio`: Horizontal run for every 1 unit of vertical rise (e.g., 1.5 for a 1:1.5 slope).

---

## 4. Structural Design (Simplified)

### `columnCapacity(Ag, Asc, fck, fy)`
Estimates the ultimate axial load-carrying capacity of a short RCC column.

**Parameters:**
- `Ag`: Gross area of the column ($mm^2$).
- `Asc`: Area of longitudinal steel ($mm^2$).
- `fck`: Characteristic strength of concrete (e.g., 20 or 25).
- `fy`: Yield strength of steel (e.g., 415 or 500).

---

## 5. Brickwork & Mortar

### `calculateBrickwork(vol)`
Calculates the number of bricks and the volume of mortar needed for a specific masonry volume.

**Constants:**
- Standard Brick Size: $190mm \times 90mm \times 90mm$.
- Mortar Joint: $10mm$.

---

## Error Handling
All functions return `NaN` or `0` if invalid non-numeric strings are provided. It is recommended to sanitize inputs using `parseFloat()` before passing them to the engine.