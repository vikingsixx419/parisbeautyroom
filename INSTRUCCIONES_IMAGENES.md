# 📸 Instrucciones para Agregar las Imágenes del Salón

## 🖼️ Imágenes Necesarias

Para que las fotos se vean en la página web, necesitas agregar estos archivos **exactamente** con estos nombres:

### **📁 Archivos de Imagen Requeridos:**

1. **`photo_2025-10-15_14-54-55.jpg`** - Fachada del salón (imagen principal)
2. **`photo_2025-10-15_15-04-31.jpg`** - Interior - Color y mechas
3. **`photo_2025-10-15_15-04-22.jpg`** - Interior - Corte y forma
4. **`photo_2025-10-15_14-58-18.jpg`** - Manicure clásica
5. **`photo_2025-10-15_14-58-09.jpg`** - Kapping y Soft Gel
6. **`photo_2025-10-15_14-58-03.jpg`** - Nail Art y diseños
7. **`photo_2025-10-15_15-04-28.jpg`** - Peinado y styling

## 📂 Cómo Agregar las Imágenes

### **Paso 1: Preparar las Imágenes**
1. **Descargar** las imágenes desde tu Instagram o teléfono
2. **Renombrar** exactamente como se indica arriba
3. **Optimizar** para web (comprimir si son muy grandes)

### **Paso 2: Ubicación**
- Coloca **todos los archivos** en la carpeta `images/` dentro del proyecto
- La estructura debe quedar así:
```
Paris wanma/
├── index.html
├── images/
│   ├── photo_2025-10-15_14-54-55.jpg  ← Aquí
│   ├── photo_2025-10-15_15-04-31.jpg  ← Aquí
│   ├── photo_2025-10-15_15-04-22.jpg  ← Aquí
│   ├── photo_2025-10-15_14-58-18.jpg  ← Aquí
│   ├── photo_2025-10-15_14-58-09.jpg  ← Aquí
│   ├── photo_2025-10-15_14-58-03.jpg  ← Aquí
│   └── photo_2025-10-15_15-04-28.jpg  ← Aquí
└── (otros archivos...)
```

### **Paso 3: Verificar**
- Abre `index.html` en el navegador
- Las imágenes deberían aparecer automáticamente
- Si no aparecen, verifica que los nombres coincidan exactamente

## 🎯 Ubicación en la Página

### **Hero Section (Imagen Principal):**
- `photo_2025-10-15_14-54-55.jpg` - Fachada del salón
- `photo_2025-10-15_15-04-31.jpg` - Color y mechas (pequeña)
- `photo_2025-10-15_15-04-22.jpg` - Corte y forma (pequeña)

### **Sección Uñas:**
- `photo_2025-10-15_14-58-18.jpg` - Manicure clásica
- `photo_2025-10-15_14-58-09.jpg` - Kapping y Soft Gel
- `photo_2025-10-15_14-58-03.jpg` - Nail Art

### **Sección Pelo:**
- `photo_2025-10-15_15-04-31.jpg` - Color y mechas
- `photo_2025-10-15_15-04-22.jpg` - Corte y forma
- `photo_2025-10-15_15-04-28.jpg` - Peinado y styling

### **Sección Contacto:**
- `photo_2025-10-15_14-54-55.jpg` - Fachada del local

## ⚡ Optimización para Web

### **Tamaños Recomendados:**
- **Imagen principal**: 800x600px (fachada)
- **Imágenes de servicios**: 600x450px
- **Imágenes pequeñas**: 400x300px

### **Formatos:**
- **JPG**: Para fotografías (mejor compresión)
- **WebP**: Si sabes usarlo (mejor calidad/tamaño)

### **Tamaño de Archivo:**
- **Máximo 500KB** por imagen
- **Total aprox. 3-4MB** para toda la página

## 🔧 Solución de Problemas

### **Si las imágenes no se ven:**

1. **Verificar nombres**: Deben coincidir exactamente
2. **Ubicación**: En la carpeta `images/` dentro del proyecto
3. **Extensiones**: .jpg (no .jpeg, .png, etc.)
4. **Espacios**: No debe haber espacios extra en los nombres

### **Si las imágenes se ven muy grandes/pequeñas:**
- El CSS ya está optimizado para responsive
- Las imágenes se ajustarán automáticamente

## 📱 Resultado Final

Una vez que agregues las imágenes, la página se verá profesional con:
- ✅ Imagen real del salón en la portada
- ✅ Fotografías de trabajos realizados
- ✅ Galería visual atractiva
- ✅ Mejor conversión de visitantes a clientes

---

**💡 Tip**: Si tienes las imágenes con nombres diferentes, simplemente renómbralas según la lista de arriba.

---

## 🔄 Cambiar fotos de los servicios fácilmente

Ahora puedes reemplazar las fotos de cada servicio simplemente subiendo archivos a la carpeta `images/` con estos nombres. El sitio detecta automáticamente si existen y las usa (acepta `.webp`, `.jpg` o `.png`). Si no existen, se mantiene la imagen actual.

### 📁 Nombres de archivo por servicio
- `esmaltado-semipermanente.jpg` (o `.webp`) – Esmaltado semipermanente
- `kapping.jpg` (o `.webp`) – Kapping (acrílico, base rubber, polygel)
- `unas-esculpidas.jpg` (o `.webp`) – Uñas esculpidas
- `pedicura.jpg` (o `.webp`) – Pedicura
- `estetica-mantenimiento.jpg` (o `.webp`) – Estética y mantenimiento

### ✅ Cómo hacerlo
1. Prepara tu foto y ponle el nombre del servicio como arriba (minúsculas, sin acentos, con guiones).
2. Copia el archivo dentro de la carpeta `images/` del proyecto.
3. Actualiza la página: al recargar se verá la nueva foto automáticamente.

### ℹ️ Detalles técnicos
- El HTML marca cada imagen con `data-service="…"` y un script intenta cargar primero `images/<servicio>.webp`, luego `.jpg`, luego `.png`.
- Si no encuentra ninguno, deja la imagen original para no romper el diseño.

### 📝 Alt recomendado
- Usa el nombre del servicio como alt, por ejemplo: “Estética y mantenimiento: reparación, retiro seguro y nivelación”.
