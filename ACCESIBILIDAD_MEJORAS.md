# 🎯 MEJORAS INMEDIATAS DE ACCESIBILIDAD Y CÓDIGO

## 1. ARIA LABELS EN NAVBAR

**Archivo:** `src/components/Navbar.astro`

```astro
<!-- ❌ ACTUAL -->
<button id="menu-toggle" class="md:hidden focus:outline-none">

<!-- ✅ MEJORADO -->
<button
  id="menu-toggle"
  class="md:hidden focus:outline-none"
  aria-label="Abrir menú de navegación"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
```

También actualizar cuando se abre/cierra:

```javascript
menuToggle.onclick = () => {
  mobileMenu.classList.toggle('hidden');
  const isOpen = !mobileMenu.classList.contains('hidden');
  menuToggle.setAttribute('aria-expanded', isOpen);
};
```

---

## 2. MEJORAR SVG ICONS

**Problemas:** SVGs sin role="img" y sin aria-label

```astro
<!-- ❌ INCORRECTO -->
<svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor">
  <path...></path>
</svg>

<!-- ✅ CORRECTO -->
<svg
  class="w-12 h-12 text-blue-600 mb-4"
  fill="none"
  stroke="currentColor"
  role="img"
  aria-label="Icono de validación"
  viewBox="0 0 24 24"
>
  <path...></path>
</svg>
```

---

## 3. ALT TEXT EN IMÁGENES

**Archivo:** `src/pages/combos.astro`

```astro
<!-- ❌ INCORRECTO -->
<img class="rounded-xl w-full h-56 object-cover mb-4"
  src="/components/assets/img/foto8.jpg"
  alt="Salud general"
/>

<!-- ✅ MEJORADO -->
<img
  class="rounded-xl w-full h-56 object-cover mb-4"
  src="/components/assets/img/foto8.jpg"
  alt="Examen de laboratorio - combo de salud general incluye hemograma y análisis de colesterol"
  loading="lazy"
  width="400"
  height="300"
/>
```

---

## 4. BOTONES ACCESIBLES

```astro
<!-- ❌ INCORRECTO -->
<a href="/contacto" class="px-6 py-2 bg-blue-700 text-white...">
  Solicitar combo
</a>

<!-- ✅ MEJORADO -->
<a
  href="/contacto"
  class="px-6 py-2 bg-blue-700 text-white... focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  title="Ir al formulario para solicitar este combo"
>
  Solicitar combo
</a>
```

---

## 5. SKIP TO MAIN CONTENT LINK

**Agregar al inicio de Layout.astro:**

```astro
<a
  href="#main"
  class="sr-only focus:not-sr-only"
>
  Saltar al contenido principal
</a>

<!-- Luego en cada página -->
<main id="main">
  <!-- contenido -->
</main>
```

CSS para sr-only:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 6. FORMA HTML CORRECTA

**Archivo:** `src/pages/contacto.astro`

```astro
<!-- ✅ ESTRUCTURA CORRECTA -->
<form class="flex flex-col gap-6" id="contactForm" novalidate>
  <div class="flex flex-col gap-2">
    <label for="name" class="font-semibold text-gray-700">
      Nombre <span aria-label="requerido">*</span>
    </label>
    <input
      class="border rounded-xl border-gray-300 p-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Tu nombre completo"
      type="text"
      id="name"
      name="name"
      required
      minlength="3"
      maxlength="100"
      aria-describedby="name-error"
    />
    <span id="name-error" class="text-red-600 text-sm hidden"></span>
  </div>

  <div class="flex flex-col gap-2">
    <label for="email" class="font-semibold text-gray-700">
      Correo <span aria-label="requerido">*</span>
    </label>
    <input
      class="border rounded-xl border-gray-300 p-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="tu@email.com"
      type="email"
      id="email"
      name="email"
      required
      aria-describedby="email-error"
    />
    <span id="email-error" class="text-red-600 text-sm hidden"></span>
  </div>

  <div class="flex flex-col gap-2">
    <label for="message" class="font-semibold text-gray-700">
      Mensaje <span aria-label="requerido">*</span>
    </label>
    <textarea
      class="border rounded-xl border-gray-300 p-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
      rows="5"
      maxlength="500"
      placeholder="Cuéntanos cómo podemos ayudarte"
      id="message"
      name="message"
      required
      aria-describedby="message-error message-count"
    ></textarea>
    <span id="message-error" class="text-red-600 text-sm hidden"></span>
    <span id="message-count" class="text-gray-500 text-sm">0/500</span>
  </div>

  <button
    class="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    type="submit"
    id="submitBtn"
    aria-busy="false"
  >
    Enviar
  </button>

  <div
    id="responseMessage"
    class="text-center font-semibold hidden"
    role="alert"
    aria-live="polite"
  ></div>
</form>
```

---

## 7. FOCUS VISIBLE EN TODOS LOS BOTONES

**Agregar a global.css:**

```css
/* Mejorar focus visible */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid #0369a1;
  outline-offset: 2px;
}

/* Mejorar contraste en dark mode */
.dark button:focus-visible,
.dark a:focus-visible {
  outline: 3px solid #60a5fa;
}
```

---

## 8. CONTRASTE DE COLOR

**Validar con WAVE:** https://wave.webaim.org/

Colores actuales parecen bien, pero verificar:

- Texto gris en background gris
- Links en color azul tengan suficiente contraste

---

## 9. LAZY LOADING EN IMÁGENES

```astro
<!-- ✅ MEJORADO -->
<img
  src="/image.jpg"
  alt="Descripción"
  loading="lazy"
  decoding="async"
  width="400"
  height="300"
/>
```

---

## 10. VALIDACIÓN DE FORMULARIO

**Script mejorado para contacto.astro:**

```javascript
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');

// Validar en tiempo real
inputs.forEach((input) => {
  input.addEventListener('blur', () => {
    validateField(input);
  });
});

function validateField(field) {
  const error = document.getElementById(field.id + '-error');

  if (!field.validity.valid) {
    error.classList.remove('hidden');

    if (field.validity.valueMissing) {
      error.textContent = `${field.previousElementSibling.textContent.trim()} es requerido`;
    } else if (field.validity.typeMismatch) {
      error.textContent = `Formato inválido para ${field.name}`;
    } else if (field.validity.tooShort) {
      error.textContent = `Mínimo ${field.minLength} caracteres`;
    }
  } else {
    error.classList.add('hidden');
  }
}
```

---

## 11. HEADINGS JERÁRQUICOS CORRECTOS

**Verificar:**

- Solo UN `<h1>` por página
- `<h2>` sigue a `<h1>`
- No hay saltos de nivel (h2 → h4)

❌ INCORRECTO:

```html
<h1>Título</h1>
<h4>Subtítulo</h4>
<!-- Saltó h2 y h3 -->
```

✅ CORRECTO:

```html
<h1>Título</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
```

---

## ✅ CHECKLIST ACCESIBILIDAD

- [ ] Todos los botones tienen aria-label o texto visible
- [ ] Los formularios tienen labels asociados
- [ ] Las imágenes tienen alt text descriptivo
- [ ] Los enlaces tienen texto descriptivo (no "click aquí")
- [ ] Focus visible en navegación por teclado
- [ ] Contraste de color ≥ 4.5:1
- [ ] SVGs tienen role="img" y aria-label
- [ ] No hay keyboard traps
- [ ] Formulario valida en cliente y servidor
- [ ] Mensajes de error accesibles

---

## 🧪 HERRAMIENTAS PARA AUDITAR

1. **WAVE:** https://wave.webaim.org/
2. **Axe DevTools:** https://www.deque.com/axe/devtools/
3. **Lighthouse:** DevTools → Lighthouse
4. **NVDA (Screen Reader):** https://www.nvaccess.org/
