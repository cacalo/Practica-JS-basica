/*
  Laboratorio de Retos de JavaScript (20)
  --------------------------------------
  Instrucciones:
  1. Cada tarjeta en index.html tiene elementos que debes manipular.
  2. Implementa la lógica en las funciones (orden y numeración sincronizados con index.html).
*/

// 1 Duplicar
function reto1Duplicar() {
  const container = document.getElementById("duplicateBoxContainer");
  const newBox = container.children[0].cloneNode(true);
  container.appendChild(newBox);
}
// 2 Modo oscuro
function reto3ModoOscuro() {
  document.body.classList.toggle("dark");
  const button = document.getElementById("darkModeBtn");
  button.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Oscuro";
}
// 3 Habilitar botón
function reto17Habilitar() {
  const termsCheckbox = document.getElementById("termsChk");
  const acceptBtn = document.getElementById("acceptBtn");
  acceptBtn.disabled = !termsCheckbox.checked;
}
// 4 Número aleatorio (1-10)
function reto20NumeroAleatorio() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomNumberSpan = document.getElementById("randomNumberSpan");
  randomNumberSpan.textContent = randomNumber;
}
// 5 Contador
function reto4Incrementar() {
  const counterValue = document.getElementById("counterValue");
  counterValue.textContent = Math.min(parseInt(counterValue.textContent) + 1,100);
}
function reto4Decrementar() {
  const counterValue = document.getElementById("counterValue");
  counterValue.textContent = Math.max(parseInt(counterValue.textContent) - 1,0);
}
// 6 Mostrar / Ocultar
function reto10ToggleTexto() {
  const textP = document.getElementById("toggleTextP");
  const button = document.getElementById("toggleTextBtn");
  textP.classList.toggle("hidden");
  button.textContent = textP.classList.contains("hidden")
    ? "Mostrar"
    : "Ocultar";
}
// 7 Mayúsculas
function reto2OrdenarFrutas() {
  const list = document.getElementById("fruitList");
  Array.from(list.children).forEach((li) => {
    li.textContent = li.textContent.toUpperCase();
  });
}
// 8 Invertir texto
function reto6Invertir() {
  const input = document.getElementById("reverseInput");
  const output = document.getElementById("reverseOutput");
  output.textContent = input.value.split("").reverse().join("");
}
// 9 Filtrar
function reto5Filtrar() {
  const filterInput = document.getElementById("filterInput");
  const filterText = filterInput.value.toLowerCase();
  const animalList = document.getElementById("animalList");
  Array.from(animalList.children).forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(filterText)
      ? ""
      : "none";
  });
}
function reto5Limpiar() {
  const filterInput = document.getElementById("filterInput");
  filterInput.value = "";
  reto5Filtrar();
}
// 10 Sumar números
function reto7Sumar() {
  const a = document.getElementById("sumA");
  const b = document.getElementById("sumB");
  const res = document.getElementById("sumResult");
  if (!a || !b || !res) return;
  const va = parseFloat(a.value) || 0;
  const vb = parseFloat(b.value) || 0;
  res.textContent = String(va + vb);
}
// 11 Contar caracteres
function reto11Contar() {
  const textarea = document.getElementById("charTextarea");
  const countSpan = document.getElementById("charCountSpan");
  countSpan.textContent = textarea.value.length;
}
// 12 Ciclar color
let _cicloIndex = 0;
const _cicloColores = ["#ff595e", "#1982c4", "#6a4c93", "#8ac926"];
function reto8CiclarColor() {
  const box = document.getElementById("colorCycleBox");
  _cicloIndex = (_cicloIndex + 1) % _cicloColores.length;
  box.style.backgroundColor = _cicloColores[_cicloIndex];
}
// 13 Alternar forma
function reto9ColorAleatorio() {
  const box = document.getElementById("shapeBox");
  const state = document.getElementById("shapeState");
  if (!box || !state) return;
  const isCircle = box.style.borderRadius === "50%";
  if (isCircle) {
    box.style.borderRadius = "6px";
    state.textContent = "Cuadrado";
  } else {
    box.style.borderRadius = "50%";
    state.textContent = "Círculo";
  }
}
// 14 Agregar elemento
function reto12Agregar() {
  const input = document.getElementById("addItemInput");
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  document.getElementById("addItemList").appendChild(newItem);
  input.value = "";
}
// 15 Eliminar último
function reto13EliminarUltimo() {
  const removeList = document.getElementById("removeList");
  const lastItem = removeList.lastElementChild;
  if (lastItem) removeList.removeChild(lastItem);
}
// 16 No vacío
function reto14ValidarEmail() {
  const input = document.getElementById("emailInput");
  if (!input) return;
  const ok = input.value.trim().length > 0;
  input.classList.toggle("valido", ok);
  input.classList.toggle("invalido", !ok);
}
// 17 Celsius a Fahrenheit
function reto16Convertir() {
  const celsiusInput = document.getElementById("celsiusInput");
  const fahrenheitResult = document.getElementById("fahrenheitResult");
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitResult.textContent = fahrenheit.toFixed(1);
}
// 18 Divisible
function reto15SeleccionActiva() {
  const numEl = document.getElementById("divNum");
  const denEl = document.getElementById("divDen");
  const resEl = document.getElementById("divideResult");
  if (!numEl || !denEl || !resEl) return;
  const n = parseFloat(numEl.value);
  const d = parseFloat(denEl.value);
  if (!isFinite(d) || d === 0) {
    resEl.textContent = "Error";
    return;
  }
  resEl.textContent = n % d === 0 ? "SI" : "NO";
}
// 19 Ordenar números
function reto18OrdenarNumeros() {
  const numberList = document.getElementById("numberList");
  const items = Array.from(numberList.children);
  items.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
  items.forEach((item) => numberList.appendChild(item));
}
// 20 Rotar lista
function reto19Mezclar() {
  const list = document.getElementById("shuffleList");
  if (!list || !list.lastElementChild) return;
  list.insertBefore(list.lastElementChild, list.firstElementChild);
}
// =============================
// Listeners (uno por ejercicio)
// =============================
const _btnDuplicate = document.getElementById("duplicateBtn"); if (_btnDuplicate) _btnDuplicate.addEventListener("click", reto1Duplicar); // 1
const _btnDark = document.getElementById("darkModeBtn"); if (_btnDark) _btnDark.addEventListener("click", reto3ModoOscuro); // 2
const _chkTerms = document.getElementById("termsChk"); if (_chkTerms) _chkTerms.addEventListener("change", reto17Habilitar); // 3
const _btnRandomNumber = document.getElementById("randomNumberBtn"); if (_btnRandomNumber) _btnRandomNumber.addEventListener("click", reto20NumeroAleatorio); // 4
const _btnInc = document.getElementById("incrementBtn"); if (_btnInc) _btnInc.addEventListener("click", reto4Incrementar); // 5
const _btnDec = document.getElementById("decrementBtn"); if (_btnDec) _btnDec.addEventListener("click", reto4Decrementar); // 5
const _btnToggleText = document.getElementById("toggleTextBtn"); if (_btnToggleText) _btnToggleText.addEventListener("click", reto10ToggleTexto); // 6
const _btnSortList = document.getElementById("sortListBtn"); if (_btnSortList) _btnSortList.addEventListener("click", reto2OrdenarFrutas); // 7
const _btnReverse = document.getElementById("reverseBtn"); if (_btnReverse) _btnReverse.addEventListener("click", reto6Invertir); // 8
const _btnFilter = document.getElementById("filterBtn"); if (_btnFilter) _btnFilter.addEventListener("click", reto5Filtrar); // 9
const _btnClearFilter = document.getElementById("clearFilterBtn"); if (_btnClearFilter) _btnClearFilter.addEventListener("click", reto5Limpiar); // 9
const _btnSum = document.getElementById("sumBtn"); if (_btnSum) _btnSum.addEventListener("click", reto7Sumar); // 10
const _txtChar = document.getElementById("charTextarea"); if (_txtChar) _txtChar.addEventListener("input", reto11Contar); // 11
const _btnCycle = document.getElementById("colorCycleBtn"); if (_btnCycle) _btnCycle.addEventListener("click", reto8CiclarColor); // 12
const _btnShape = document.getElementById("randomColorBtn"); if (_btnShape) _btnShape.addEventListener("click", reto9ColorAleatorio); // 13
const _btnAddItem = document.getElementById("addItemBtn"); if (_btnAddItem) _btnAddItem.addEventListener("click", reto12Agregar); // 14
const _btnRemoveLast = document.getElementById("removeLastBtn"); if (_btnRemoveLast) _btnRemoveLast.addEventListener("click", reto13EliminarUltimo); // 15
const _btnValidateEmail = document.getElementById("validateEmailBtn"); if (_btnValidateEmail) _btnValidateEmail.addEventListener("click", reto14ValidarEmail); // 16
const _btnConvert = document.getElementById("convertBtn"); if (_btnConvert) _btnConvert.addEventListener("click", reto16Convertir); // 17
const _btnDivide = document.getElementById("divideCheckBtn"); if (_btnDivide) _btnDivide.addEventListener("click", reto15SeleccionActiva); // 18
const _btnSortNumbers = document.getElementById("sortNumbersBtn"); if (_btnSortNumbers) _btnSortNumbers.addEventListener("click", reto18OrdenarNumeros); // 19
const _btnShuffle = document.getElementById("shuffleBtn"); if (_btnShuffle) _btnShuffle.addEventListener("click", reto19Mezclar); // 20
const tests = [
  // 1 Duplicar
  {
    id: "duplicate",
    run: () => {
      const container = document.getElementById("duplicateBoxContainer");
      const btn = document.getElementById("duplicateBtn");
      if (!container || !btn)
        return { pass: false, message: "Missing elements" };
      const before = container.children.length;
      btn.click();
      const after = container.children.length;
      return {
        pass: after === before + 1,
        message:
          after === before + 1
            ? "Duplicated successfully"
            : "Expected " + (before + 1) + " got " + after,
      };
    },
  },
  // 2 Modo oscuro
  {
    id: "dark-mode",
    run: () => {
      const btn = document.getElementById("darkModeBtn");
      if (!btn) return { pass: false, message: "Missing button" };
      const before = document.body.classList.contains("dark");
      btn.click();
      const toggled = document.body.classList.contains("dark") !== before;
      const labelCorrect = [
        "Dark Mode",
        "Light Mode",
        "Modo Oscuro",
        "Modo Claro",
      ].includes(btn.textContent.trim());
      return {
        pass: toggled && labelCorrect,
        message: toggled ? "Toggled" : "Did not toggle",
      };
    },
  },
  // 3 Habilitar botón
  {
    id: "enable-btn",
    run: () => {
      const chk = document.getElementById("termsChk");
      const btn = document.getElementById("acceptBtn");
      if (!chk || !btn) return { pass: false, message: "Missing" };
      chk.checked = true;
      chk.dispatchEvent(new Event("change"));
      return {
        pass: btn.disabled === false,
        message: "Enabled " + !btn.disabled,
      };
    },
  },
  // 4 Número aleatorio
  {
    id: "random-number",
    run: () => {
      const btn = document.getElementById("randomNumberBtn");
      const span = document.getElementById("randomNumberSpan");
      if (!btn || !span) return { pass: false, message: "Missing" };
      btn.click();
      const n = Number(span.textContent);
      return { pass: n >= 1 && n <= 10, message: "Value " + n };
    },
  },
  // 5 Contador
  {
    id: "counter",
    run: () => {
      const inc = document.getElementById("incrementBtn");
      const dec = document.getElementById("decrementBtn");
      const valEl = document.getElementById("counterValue");
      if (!inc || !dec || !valEl)
        return { pass: false, message: "Missing elements" };
      valEl.textContent = "0";
      inc.click();
      inc.click();
      dec.click();
      dec.click();
      dec.click();
      const value = Number(valEl.textContent);
      return { pass: value === 0, message: "Counter ended at " + value };
    },
  },
  // 6 Mostrar/Ocultar
  {
    id: "toggle-text",
    run: () => {
      const p = document.getElementById("toggleTextP");
      const btn = document.getElementById("toggleTextBtn");
      if (!p || !btn) return { pass: false, message: "Missing" };
      const wasHidden = p.classList.contains("hidden");
      btn.click();
      const nowHidden = p.classList.contains("hidden");
      return { pass: wasHidden !== nowHidden, message: "Visibility toggled" };
    },
  },
  // 7 Mayúsculas
  {
    id: "sort-list",
    run: () => {
      const list = document.getElementById("fruitList");
      const btn = document.getElementById("sortListBtn");
      if (!list || !btn) return { pass: false, message: "Missing elements" };
      btn.click();
      const texts = Array.from(list.children).map((li) => li.textContent);
      const allUpper = texts.every((t) => t === t.toUpperCase());
      return {
        pass: allUpper,
        message: allUpper ? "All uppercased" : "Not all uppercased",
      };
    },
  },
  // 8 Invertir texto
  {
    id: "reverse-text",
    run: () => {
      const input = document.getElementById("reverseInput");
      const btn = document.getElementById("reverseBtn");
      const out = document.getElementById("reverseOutput");
      if (!input || !btn || !out)
        return { pass: false, message: "Missing elements" };
      input.value = "hola";
      btn.click();
      return {
        pass: out.textContent === "aloh",
        message: "Expected aloh got " + out.textContent,
      };
    },
  },
  // 9 Filtrar
  {
    id: "filter",
    run: () => {
      const input = document.getElementById("filterInput");
      const filterBtn = document.getElementById("filterBtn");
      const clearBtn = document.getElementById("clearFilterBtn");
      const list = document.getElementById("animalList");
      if (!input || !filterBtn || !clearBtn || !list)
        return { pass: false, message: "Missing elements" };
      input.value = "o";
      filterBtn.click();
      const items = Array.from(list.children);
      const visible = items
        .filter((li) => li.style.display !== "none")
        .map((li) => li.textContent.toLowerCase());
      const allContain = visible.every((t) => t.includes("o"));
      clearBtn.click();
      const restored = items.every((li) => li.style.display !== "none");
      return {
        pass: allContain && restored,
        message: allContain ? "Filter works" : "Filter failed",
      };
    },
  },
  // 10 Sumar
  {
    id: "sumar",
    run: () => {
      const a = document.getElementById("sumA");
      const b = document.getElementById("sumB");
      const btn = document.getElementById("sumBtn");
      const res = document.getElementById("sumResult");
      if (!a || !b || !btn || !res)
        return { pass: false, message: "Missing elements" };
      a.value = "7";
      b.value = "5";
      btn.click();
      return {
        pass: res.textContent === "12",
        message: "Result " + res.textContent,
      };
    },
  },
  // 11 Contar caracteres
  {
    id: "char-count",
    run: () => {
      const ta = document.getElementById("charTextarea");
      const span = document.getElementById("charCountSpan");
      if (!ta || !span) return { pass: false, message: "Missing elements" };
      ta.value = "abcd";
      ta.dispatchEvent(new Event("input"));
      return {
        pass: span.textContent === "4",
        message: "Count " + span.textContent,
      };
    },
  },
  // 12 Ciclar color
  {
    id: "ciclar-color",
    run: () => {
      const box = document.getElementById("colorCycleBox");
      const btn = document.getElementById("colorCycleBtn");
      if (!box || !btn) return { pass: false, message: "Missing elements" };
      const before = box.style.backgroundColor;
      btn.click();
      return {
        pass: box.style.backgroundColor !== before,
        message: "Color changed",
      };
    },
  },
  // 13 Alternar forma
  {
    id: "color-aleatorio",
    run: () => {
      const box = document.getElementById("shapeBox");
      const btn = document.getElementById("randomColorBtn");
      if (!box || !btn) return { pass: false, message: "Missing elements" };
      const before = box.style.borderRadius;
      btn.click();
      const after = box.style.borderRadius;
      const toggled = before !== after && (after === "50%" || after === "6px");
      return {
        pass: toggled,
        message: toggled ? "Shape toggled" : "No toggle",
      };
    },
  },
  // 14 Agregar item
  {
    id: "add-item",
    run: () => {
      const input = document.getElementById("addItemInput");
      const btn = document.getElementById("addItemBtn");
      const list = document.getElementById("addItemList");
      if (!input || !btn || !list)
        return { pass: false, message: "Missing elements" };
      const before = list.children.length;
      input.value = "Nuevo";
      btn.click();
      return { pass: list.children.length === before + 1, message: "Added" };
    },
  },
  // 15 Eliminar último
  {
    id: "remove-last",
    run: () => {
      const list = document.getElementById("removeList");
      const btn = document.getElementById("removeLastBtn");
      if (!list || !btn) return { pass: false, message: "Missing" };
      const before = list.children.length;
      btn.click();
      return {
        pass: list.children.length === Math.max(0, before - 1),
        message: "Removed",
      };
    },
  },
  // 16 No vacío
  {
    id: "email",
    run: () => {
      const input = document.getElementById("emailInput");
      const btn = document.getElementById("validateEmailBtn");
      if (!input || !btn) return { pass: false, message: "Missing" };
      input.value = "";
      btn.click();
      const invalid = input.classList.contains("invalido");
      input.value = "algo";
      btn.click();
      const valid = input.classList.contains("valido");
      return {
        pass: invalid && valid,
        message: invalid && valid ? "Validated" : "Validation failed",
      };
    },
  },
  // 17 Celsius
  {
    id: "celsius",
    run: () => {
      const input = document.getElementById("celsiusInput");
      const btn = document.getElementById("convertBtn");
      const out = document.getElementById("fahrenheitResult");
      if (!input || !btn || !out) return { pass: false, message: "Missing" };
      input.value = "100";
      btn.click();
      return {
        pass: out.textContent === "212.0",
        message: "Conv " + out.textContent,
      };
    },
  },
  // 18 Divisible
  {
    id: "active-item",
    run: () => {
      const num = document.getElementById("divNum");
      const den = document.getElementById("divDen");
      const btn = document.getElementById("divideCheckBtn");
      const res = document.getElementById("divideResult");
      if (!num || !den || !btn || !res)
        return { pass: false, message: "Missing" };
      num.value = "10";
      den.value = "2";
      btn.click();
      const first = res.textContent === "SI";
      num.value = "7";
      den.value = "2";
      btn.click();
      const second = res.textContent === "NO";
      den.value = "0";
      btn.click();
      const third = res.textContent === "Error";
      return {
        pass: first && second && third,
        message: first && second && third ? "Divisible OK" : "Divisible fallo",
      };
    },
  },
  // 19 Orden números
  {
    id: "sort-numbers",
    run: () => {
      const list = document.getElementById("numberList");
      const btn = document.getElementById("sortNumbersBtn");
      if (!list || !btn) return { pass: false, message: "Missing" };
      btn.click();
      const nums = Array.from(list.children).map((li) =>
        Number(li.textContent)
      );
      const sorted = [...nums].sort((a, b) => a - b);
      return {
        pass: JSON.stringify(nums) === JSON.stringify(sorted),
        message: "Sorted",
      };
    },
  },
  // 20 Rotar lista
  {
    id: "shuffle",
    run: () => {
      const list = document.getElementById("shuffleList");
      const btn = document.getElementById("shuffleBtn");
      if (!list || !btn) return { pass: false, message: "Missing" };
      const beforeArr = Array.from(list.children).map((li) => li.textContent);
      const last = beforeArr[beforeArr.length - 1];
      const expected = [last, ...beforeArr.slice(0, beforeArr.length - 1)].join(
        ""
      );
      btn.click();
      const after = Array.from(list.children)
        .map((li) => li.textContent)
        .join("");
      return {
        pass: after === expected,
        message: after === expected ? "Rotated" : "Not rotated",
      };
    },
  },
];

function runTests() {
  // Reset states per specific tests
  tests.forEach((t) => {
    if (t.id === "duplicate") {
      const container = document.getElementById("duplicateBoxContainer");
      while (container && container.children.length > 1)
        container.removeChild(container.lastElementChild);
    }
    if (t.id === "counter") {
      const valEl = document.getElementById("counterValue");
      if (valEl) valEl.textContent = "0";
    }
  });
  let passed = 0;
  tests.forEach((test) => {
    let result;
    try {
      result = test.run();
    } catch (e) {
      result = { pass: false, message: e.message };
    }
    if (result.pass) passed++;
    const statusEl = document.getElementById("status-" + test.id);
    if (statusEl) {
      statusEl.textContent =
        (result.pass ? "OK: " : "FALLO: ") + result.message;
      statusEl.className = "test-status " + (result.pass ? "pass" : "fail");
    }
  });
  const total = tests.length;
  const global = document.getElementById("globalTestStatus");
  if (global) {
    const remaining = total - passed;
    if (remaining === 0) {
      global.textContent =
        "✅ Todas las pruebas superadas (" + passed + "/" + total + ")";
      global.className = "global-test-status ok";
    } else {
      global.textContent =
        "Pruebas aprobadas: " +
        passed +
        "/" +
        total +
        " | Restantes: " +
        remaining;
      global.className = "global-test-status " + (passed ? "" : "fail");
    }
  }
}

// Button actions
const runTestsBtn = document.getElementById("runTestsBtn");
runTestsBtn.addEventListener("click", runTests);
