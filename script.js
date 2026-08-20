/*
  Laboratorio de Retos de JavaScript (20)
  --------------------------------------
  Instrucciones:
  1. Cada tarjeta en index.html tiene elementos que debes manipular.
  2. Implementa la lógica en las funciones (orden y numeración sincronizados con index.html).
*/

// 1 Duplicar
function reto1Duplicar() {

}
// 2 Modo oscuro
function reto3ModoOscuro() {

}
// 3 Habilitar botón
function reto17Habilitar() {

}
// 4 Número aleatorio (1-10)
function reto20NumeroAleatorio() {

}
// 5 Contador
function reto4Incrementar() {

}
function reto4Decrementar() {

}
// 6 Mostrar / Ocultar
function reto10ToggleTexto() {

}
// 7 Mayúsculas
function reto2OrdenarFrutas() {

}
// 8 Invertir texto
function reto6Invertir() {

}
// 9 Filtrar
function reto5Filtrar() {

}
function reto5Limpiar() {

}
// 10 Sumar números
function reto7Sumar() {

}
// 11 Contar caracteres
function reto11Contar() {

}
// 12 Ciclar color
let _cicloIndex = 0;
const _cicloColores = ["#ff595e", "#1982c4", "#6a4c93", "#8ac926"];
function reto8CiclarColor() {

}
// 13 Alternar forma
function reto9ColorAleatorio() {

}
// 14 Agregar elemento
function reto12Agregar() {

}
// 15 Eliminar último
function reto13EliminarUltimo() {

}
// 16 No vacío
function reto14ValidarEmail() {

}
// 17 Celsius a Fahrenheit
function reto16Convertir() {

}
// 18 Divisible
function reto15SeleccionActiva() {

}
// 19 Ordenar números
function reto18OrdenarNumeros() {

}
// 20 Rotar lista
function reto19Mezclar() {

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
      const afterOne = container.children.length;
      btn.click();
      const afterTwo = container.children.length;
      const lastIsBox =
        !!container.lastElementChild &&
        container.lastElementChild.classList.contains("box");
      const pass =
        afterOne === before + 1 && afterTwo === before + 2 && lastIsBox;
      return {
        pass,
        message: pass
          ? "Duplicated successfully"
          : `Expected growth of 1 per click (got ${before}->${afterOne}->${afterTwo}), last child .box: ${lastIsBox}`,
      };
    },
  },
  // 2 Modo oscuro
  {
    id: "dark-mode",
    run: () => {
      const btn = document.getElementById("darkModeBtn");
      if (!btn) return { pass: false, message: "Missing button" };
      const validLabels = [
        "Dark Mode",
        "Light Mode",
        "Modo Oscuro",
        "Modo Claro",
      ];
      const initialDark = document.body.classList.contains("dark");
      const initialLabel = btn.textContent.trim();
      btn.click();
      const toggledDark = document.body.classList.contains("dark");
      const toggledLabel = btn.textContent.trim();
      btn.click();
      const backDark = document.body.classList.contains("dark");
      const backLabel = btn.textContent.trim();
      const pass =
        toggledDark !== initialDark &&
        validLabels.includes(toggledLabel) &&
        backDark === initialDark &&
        backLabel === initialLabel;
      return {
        pass,
        message: pass
          ? "Toggled and reverted correctly"
          : "Toggle/label did not round-trip correctly",
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
      const enabledWhenChecked = btn.disabled === false;
      chk.checked = false;
      chk.dispatchEvent(new Event("change"));
      const disabledWhenUnchecked = btn.disabled === true;
      const pass = enabledWhenChecked && disabledWhenUnchecked;
      return {
        pass,
        message: pass
          ? "Enables and disables correctly"
          : `Checked->enabled: ${enabledWhenChecked}, unchecked->disabled: ${disabledWhenUnchecked}`,
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
      let ok = true;
      let lastN;
      for (let i = 0; i < 10; i++) {
        btn.click();
        lastN = Number(span.textContent);
        if (!Number.isInteger(lastN) || lastN < 1 || lastN > 10) {
          ok = false;
          break;
        }
      }
      return { pass: ok, message: ok ? "Values are valid integers 1-10" : "Got invalid value " + lastN };
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
      dec.click();
      const staysAtZero = Number(valEl.textContent) === 0;
      inc.click();
      inc.click();
      const afterInc = Number(valEl.textContent);
      dec.click();
      dec.click();
      dec.click();
      const value = Number(valEl.textContent);
      const pass = staysAtZero && afterInc === 2 && value === 0;
      return {
        pass,
        message: `From 0, decrementing stayed non-negative: ${staysAtZero}; after +2 got ${afterInc}, counter ended at ${value}`,
      };
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
      const afterOne = p.classList.contains("hidden");
      btn.click();
      const afterTwo = p.classList.contains("hidden");
      const pass = afterOne !== wasHidden && afterTwo === wasHidden;
      return {
        pass,
        message: pass
          ? "Visibility toggles both ways"
          : "Visibility did not toggle consistently",
      };
    },
  },
  // 7 Mayúsculas
  {
    id: "sort-list",
    run: () => {
      const list = document.getElementById("fruitList");
      const btn = document.getElementById("sortListBtn");
      if (!list || !btn) return { pass: false, message: "Missing elements" };
      const before = Array.from(list.children).map((li) => li.textContent);
      btn.click();
      const after = Array.from(list.children).map((li) => li.textContent);
      const sameLength = after.length === before.length;
      const matchesOriginal =
        sameLength && after.every((t, i) => t === before[i].toUpperCase());
      return {
        pass: matchesOriginal,
        message: matchesOriginal
          ? "All uppercased, order and count preserved"
          : "Not all uppercased, or order/count changed",
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
      const first = out.textContent === "aloh";
      input.value = "Javascript 2024";
      btn.click();
      const second = out.textContent === "4202 tpircsavaJ";
      const pass = first && second;
      return {
        pass,
        message: pass ? "Reverses correctly" : `Got "${out.textContent}"`,
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
      const items = Array.from(list.children);
      input.value = "o";
      filterBtn.click();
      const visible = items.filter((li) => li.style.display !== "none");
      const hidden = items.filter((li) => li.style.display === "none");
      const allVisibleContain =
        visible.length > 0 &&
        visible.every((li) => li.textContent.toLowerCase().includes("o"));
      const allHiddenExclude = hidden.every(
        (li) => !li.textContent.toLowerCase().includes("o")
      );
      clearBtn.click();
      const restored = items.every((li) => li.style.display !== "none");
      const pass = allVisibleContain && allHiddenExclude && restored;
      return {
        pass,
        message: pass
          ? "Filter works"
          : `Visible: ${visible.length}, Hidden: ${hidden.length}, restored: ${restored}`,
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
      const first = res.textContent === "12";
      a.value = "-3";
      b.value = "1.5";
      btn.click();
      const second = Number(res.textContent) === -1.5;
      const pass = first && second;
      return {
        pass,
        message: pass ? "Sums correctly" : `Got "${res.textContent}"`,
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
      const first = span.textContent === "4";
      ta.value = "";
      ta.dispatchEvent(new Event("input"));
      const second = span.textContent === "0";
      const pass = first && second;
      return {
        pass,
        message: pass ? "Counts correctly" : "Count " + span.textContent,
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
      const seen = [];
      for (let i = 0; i < _cicloColores.length + 1; i++) {
        btn.click();
        seen.push(box.style.backgroundColor);
      }
      const allDefined = seen.every((c) => !!c);
      const wraps = seen[0] === seen[_cicloColores.length];
      const varies =
        new Set(seen.slice(0, _cicloColores.length)).size ===
        _cicloColores.length;
      const pass = allDefined && wraps && varies;
      return {
        pass,
        message: pass
          ? "Cycles through all colors and wraps around"
          : "Did not cycle through all colors / did not wrap",
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
      const validShapes = ["50%", "6px"];
      const initial = box.style.borderRadius;
      btn.click();
      const afterOne = box.style.borderRadius;
      btn.click();
      const afterTwo = box.style.borderRadius;
      const pass =
        validShapes.includes(afterOne) &&
        afterOne !== initial &&
        afterTwo === initial;
      return {
        pass,
        message: pass ? "Shape toggles both ways" : "No consistent toggle",
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
      const afterOne = list.children.length;
      const textOk =
        !!list.lastElementChild && list.lastElementChild.textContent === "Nuevo";
      input.value = "Otro";
      btn.click();
      const afterTwo = list.children.length;
      const pass = afterOne === before + 1 && afterTwo === before + 2 && textOk;
      return {
        pass,
        message: pass
          ? "Adds items with correct text"
          : `Counts ${before}->${afterOne}->${afterTwo}, text ok: ${textOk}`,
      };
    },
  },
  // 15 Eliminar último
  {
    id: "remove-last",
    run: () => {
      const list = document.getElementById("removeList");
      const btn = document.getElementById("removeLastBtn");
      if (!list || !btn) return { pass: false, message: "Missing" };
      const before = Array.from(list.children).map((li) => li.textContent);
      btn.click();
      const afterOne = Array.from(list.children).map((li) => li.textContent);
      const removedLast =
        afterOne.length === before.length - 1 &&
        afterOne.every((t, i) => t === before[i]);
      let noErrorOnEmpty = true;
      for (let i = 0; i < before.length; i++) {
        try {
          btn.click();
        } catch (e) {
          noErrorOnEmpty = false;
        }
      }
      const emptied = list.children.length === 0;
      const pass = removedLast && noErrorOnEmpty && emptied;
      return {
        pass,
        message: pass
          ? "Removes the last item safely down to empty"
          : `Removed correct item: ${removedLast}, safe when empty: ${noErrorOnEmpty}, emptied: ${emptied}`,
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
      const invalid =
        input.classList.contains("invalido") &&
        !input.classList.contains("valido");
      input.value = "algo";
      btn.click();
      const valid =
        input.classList.contains("valido") &&
        !input.classList.contains("invalido");
      input.value = "";
      btn.click();
      const invalidAgain =
        input.classList.contains("invalido") &&
        !input.classList.contains("valido");
      const pass = invalid && valid && invalidAgain;
      return {
        pass,
        message: pass
          ? "Validates and re-validates correctly"
          : "Validation failed or classes overlap",
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
      const first = out.textContent === "212.0";
      input.value = "0";
      btn.click();
      const second = out.textContent === "32.0";
      const pass = first && second;
      return {
        pass,
        message: pass ? "Converts correctly" : `Got "${out.textContent}"`,
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
      const before = Array.from(list.children).map((li) =>
        Number(li.textContent)
      );
      btn.click();
      const after = Array.from(list.children).map((li) =>
        Number(li.textContent)
      );
      const expected = [...before].sort((a, b) => a - b);
      const pass = JSON.stringify(after) === JSON.stringify(expected);
      return {
        pass,
        message: pass
          ? "Sorted correctly"
          : `Expected ${expected} got ${after}`,
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
    if (t.id === "remove-last") {
      const list = document.getElementById("removeList");
      if (list) list.innerHTML = "<li>A</li><li>B</li><li>C</li>";
    }
    if (t.id === "add-item") {
      const list = document.getElementById("addItemList");
      if (list) list.innerHTML = "<li>Uno</li><li>Dos</li>";
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
