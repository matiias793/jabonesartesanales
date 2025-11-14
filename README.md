# 🧼 Jabones Artesanales - Muestra de Química

Una aplicación web visual e interactiva para presentar el proceso de elaboración de jabones artesanales. Perfecta para acceder mediante código QR durante tu muestra de química.

## ✨ Características

- **Hero Section**: Página de inicio atractiva con animaciones
- **Procedimiento**: 8 pasos detallados del proceso de saponificación
- **Beneficios**: 6 beneficios principales de los jabones artesanales
- **Galería**: Sección para mostrar imágenes del proceso
- **Diseño Responsive**: Optimizado para móviles (ideal para QR)
- **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 3. Agregar tus imágenes

1. Coloca tus imágenes del proceso en la carpeta `public/jabones/`
2. Abre el archivo `src/components/Galeria.tsx`
3. Reemplaza los valores `null` en el campo `imagen` con las rutas de tus imágenes:

```typescript
{
  id: 1,
  titulo: "Ingredientes Base",
  descripcion: "Aceites naturales seleccionados para la elaboración",
  categoria: "ingredientes",
  placeholder: "🥑",
  imagen: "/jabones/ingredientes.jpg" // ← Agrega tu ruta aquí
}
```

**Ejemplo de nombres de archivos:**
- `public/jabones/ingredientes.jpg`
- `public/jabones/sosa.jpg`
- `public/jabones/mezcla.jpg`
- `public/jabones/aditivos.jpg`
- `public/jabones/moldeo.jpg`
- `public/jabones/resultado.jpg`

### 4. Personalizar contenido

Puedes editar el contenido en los siguientes archivos:
- `src/components/Procedimiento.tsx` - Pasos del procedimiento
- `src/components/Beneficios.tsx` - Lista de beneficios
- `src/components/JabonesHero.tsx` - Texto de la página principal

## 📱 Generar código QR

Una vez que tengas la app desplegada (en Vercel, Netlify, o cualquier hosting), puedes generar un código QR que apunte a la URL de tu aplicación.

**Herramientas recomendadas:**
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)

## 🎨 Personalización de colores

Los colores principales están en tonos cálidos (ámbar, naranja, rosa) que evocan los ingredientes naturales. Puedes cambiarlos editando las clases de Tailwind en los componentes.

## 📦 Desplegar

### Vercel (Recomendado)
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 🔧 Tecnologías utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **React 19** - Biblioteca UI

## 📝 Notas

- La aplicación está optimizada para móviles
- Todas las imágenes tienen placeholders hasta que agregues las reales
- El diseño es completamente responsive
- Incluye scroll suave entre secciones

¡Buena suerte con tu muestra de química! 🧪✨


