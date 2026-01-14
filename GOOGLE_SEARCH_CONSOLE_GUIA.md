# 🚀 GUÍA PASO A PASO: GOOGLE SEARCH CONSOLE

## ¿Por qué es importante?

Google Search Console te dice:

- Cómo ve Google tu sitio
- Dónde apareces en búsquedas
- Qué palabras clave te traen tráfico
- Errores técnicos que hay
- Cómo mejorar

---

## PASO 1: Acceder a Google Search Console

1. Ve a: https://search.google.com/search-console
2. Inicia sesión con tu Google Account
3. Si no tienes, crea una en: https://accounts.google.com

---

## PASO 2: Agregar tu propiedad

### Opción A: Con dominio (Recomendado)

1. Haz clic en "Agregar propiedad"
2. Selecciona "Dominio"
3. Escribe tu dominio: `laboratoriorosarioarnedo.com`
4. Haz clic en "Continuar"

### Opción B: Con URL de sitio

1. Haz clic en "Agregar propiedad"
2. Selecciona "URL de sitio web"
3. Escribe: `https://laboratoriorosarioarnedo.com`
4. Haz clic en "Continuar"

---

## PASO 3: Verificar la propiedad

### Método recomendado: HTML Tag

1. Google te dará un código como:

```html
<meta name="google-site-verification" content="xxx_codigo_largo_xxx" />
```

2. **Opción A: Astro (Recomendado)**

   - Abre: `src/layouts/Layout.astro`
   - En el `<head>`, agrega:

   ```html
   <meta name="google-site-verification" content="tu_codigo_aqui" />
   ```

   - Guarda y haz deploy

3. **Opción B: Sin modificar código**

   - Descarga el archivo HTML que proporciona Google
   - Sube a la carpeta `public/` de tu proyecto
   - Haz deploy

4. En Google Search Console, haz clic en "Verificar"

---

## PASO 4: Enviar Sitemap

1. En el menú izquierdo, ve a "Sitemaps"
2. En la caja de texto, escribe: `sitemap.xml`
3. Haz clic en "Enviar"
4. Deberías ver "Éxito" en el listado

---

## PASO 5: Verificar que funciona

1. Ve a "Cobertura"
2. Debería mostrar tus páginas indexadas
3. Si hay errores, investiga en esa sección

---

## PASO 6: Configuración de URL canónica

Esto ya lo hemos hecho, pero verifica:

1. Ve a "Configuración"
2. Bajo "URL canónica preferida", selecciona:
   ```
   https:// (usa HTTPS)
   www. (con o sin www, elige uno)
   ```

---

## PASO 7: Keywords y posiciones

Una vez indexado (2-4 semanas):

1. Ve a "Rendimiento"
2. Verás:
   - Consultas (palabras clave por las que te encuentran)
   - Clics (cuánta gente hace clic en tu link)
   - Impresiones (cuántas veces apareces)
   - CTR (porcentaje que hace clic)

---

## PASO 8: Validar Structured Data

1. Ve a "Mejoras"
2. Deberías ver tus datos estructurados
3. Si hay errores, revisa el código JSON-LD

---

## 📊 PANELES IMPORTANTES

### Cobertura

```
✅ Válido: Páginas indexadas correctamente
⚠️ Válido con advertencias: Funciona pero con problemas
❌ Error: No se indexó
```

### Enhancements

```
Muestra si tus structured data (Schema) está bien
- MedicalBusiness: Debe mostrar como "válido"
```

### Core Web Vitals

```
Velocidad y experiencia de usuario:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
```

### Mobile Usability

```
Verifica si es mobile-friendly
Deberías ver "Sin problemas"
```

---

## 🔍 INTERPRETAR LOS DATOS

### Ejemplo de Rendimiento

```
Consulta: "laboratorio clínico cartagena"
├─ Impresiones: 45 (apareciste 45 veces)
├─ Clics: 5 (5 personas hicieron clic)
├─ CTR: 11% (11 de cada 100 clicks)
└─ Posición promedio: 23 (página 3 de Google)

Objetivo:
├─ CTR > 3% (mejorar con mejor title/description)
├─ Posición < 10 (subir con SEO)
└─ Clics > 20/mes (cuando subas de posición)
```

---

## ⚠️ ERRORES COMUNES Y SOLUCIONES

### Error: "Sitemap no encontrado"

❌ **Problema:** No existe public/sitemap.xml
✅ **Solución:** Crea el archivo (ya lo hicimos)

### Error: "Páginas no indexadas"

❌ **Problema:** Google no puede acceder
✅ **Soluciones:**

1. Revisa robots.txt (no bloquees tu sitio)
2. Verifica que no esté en noindex
3. Envía URL manualmente para crawl

### Error: "Structured Data inválido"

❌ **Problema:** JSON-LD tiene errores
✅ **Soluciones:**

1. Valida en: https://validator.schema.org/
2. Revisa comillas y comas en el JSON
3. Usa el JSON-LD que dejé en Layout.astro

### Error: "Mobile Usability Issues"

❌ **Problema:** No es mobile-friendly
✅ **Soluciones:**

1. Verifica viewport meta tag
2. Prueba en: https://search.google.com/test/mobile-friendly
3. Tu sitio está bien, no debería suceder

---

## 📅 TIMELINE ESPERADO

```
Día 1: Agregar propiedad a Search Console
  └─ Verificar

Día 1-3: Google visita tu sitio
  └─ Ve las páginas

Día 7-14: Indexación inicial
  └─ Apareces en búsquedas

Día 30: Primeros datos en Rendimiento
  └─ Ves keywords y posiciones

Mes 3: Datos consistentes
  └─ Puedes ver tendencias
```

---

## 🎯 KEYWORDS PARA MONITOREAR

Estas son las que deberías ver aparecer:

### Principales

- laboratorio clínico cartagena
- examen de sangre cartagena
- análisis médico cartagena
- diagnosticos cartagena

### Secundarias

- laboratorio turbaco
- análisis clínicos cartagena
- exámenes médicos rápidos
- servicio a domicilio laboratorio

### Locales

- laboratorio cerca de mí
- análisis en cartagena
- exámenes sin cita cartagena

---

## 📈 METAS POR MES

### Mes 1-2

```
Impresiones: 100-500
Clics: 10-50
CTR: 5-10%
Posición: 20-50
```

### Mes 3-6

```
Impresiones: 500-2000
Clics: 50-200
CTR: 8-15%
Posición: 5-20
```

### Mes 6-12

```
Impresiones: 1000-5000
Clics: 200-500
CTR: 15-25%
Posición: 1-5
```

---

## 🚀 ACCIONES PARA MEJORAR POSICIONES

1. **Mejor content:**

   - Escribe posts largos (1500+ palabras)
   - Responde preguntas específicas
   - Usa keywords naturalmente

2. **Más enlaces:**

   - Pide reseñas en Google
   - Contacta sitios locales
   - Publica en directorios

3. **Mejorar CTR:**

   - Escribe titles atractivos
   - Descriptions claras (150 caracteres)
   - Agrega números o emojis en title

4. **Actualizar contenido:**
   - Revisa periódicamente
   - Agrega información nueva
   - Mantén actualizado

---

## 💡 TIPS PRO

### Exportar Datos

1. Ve a "Rendimiento"
2. Haz clic en el ícono de descargar
3. Analiza en Excel

### Compartir acceso

1. Ve a "Configuración" > "Usuarios"
2. Agrega tu equipo
3. Puedes dar permisos específicos

### Alertas

1. Ve a "Configuración"
2. Activa notificaciones por email
3. Recibe alertas de problemas

### Historial

1. Google guarda datos de 16 meses
2. Descarga regularmente para histórico
3. Crea reportes mensuales

---

## 📞 PREGUNTAS FRECUENTES

**P: ¿Por qué no aparezco en búsquedas?**
R: 2-4 semanas es normal. Revisa que no esté bloqueado en robots.txt

**P: ¿Cómo subo mi posición?**
R: Contenido mejor, más enlaces, y espera. No es inmediato.

**P: ¿Debo pagar para aparecer?**
R: No. Google Search Console es gratis. Google Ads cuesta si quieres (SEM).

**P: ¿Cada cuánto revisar?**
R: Semanalmente al principio, luego mensualmente.

**P: ¿Por qué tengo errores de indexación?**
R: Revisa robots.txt, redirects, y que el sitio sea accesible.

---

## ✅ CHECKLIST

- [ ] Crear Google Account (si no tienes)
- [ ] Ir a Search Console
- [ ] Agregar propiedad
- [ ] Verificar propiedad (meta tag)
- [ ] Agregar sitemap.xml
- [ ] Configurar URL canónica preferida
- [ ] Validar Structured Data
- [ ] Esperar 2-4 semanas
- [ ] Revisar Rendimiento
- [ ] Monitorear keywords
- [ ] Mejorar contenido según datos
- [ ] Revisar mensualmente

---

**¡Listo! Ya tienes tu sitio listo para Google. Ahora a esperar y a crear contenido 🚀**
