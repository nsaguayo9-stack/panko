# Panko San Fernando

Sitio estático listo para publicar en Vercel desde un repositorio de GitHub.

## Publicación

1. Sube esta carpeta completa al repositorio.
2. En Vercel selecciona el repositorio. El archivo `vercel.json` configura **Build Command** `npm run build` y **Output Directory** `dist`. Si ya habías fijado manualmente `public` como carpeta de salida en la configuración del proyecto de Vercel, cámbiala a `dist` o restablécela para que use `vercel.json`.
3. No necesita variables de entorno ni servicios de servidor.

El catálogo consulta el CSV público de Google Sheets al abrir la página y al volver a ella. Mientras la pestaña permanece visible, vuelve a consultarlo cada minuto. El enlace está en `app.js` bajo `CSV_URL`. Si el enlace falla, se presenta la copia de la carta incluida en `assets/catalogo-respaldo.csv` con un aviso. Esa copia requiere republicar el sitio para actualizarse; los datos en línea vienen del Sheet.

Columnas: `id,categoria,nombre,descripcion,opciones,precio,stock,foto,observaciones`. El precio admite formato `$3,990` o `3990`. `stock=sí` habilita el producto; `stock=no` lo deshabilita. La columna `foto` admite URL pública `https://...`; vacía o fallida, la tarjeta se muestra sin marco de imagen. Los valores de `observaciones` son internos y no aparecen en el catálogo.

Las imágenes de portada y secciones son fotografías generales proporcionadas por el negocio y están guardadas en `assets/`; no representan todas las variantes del catálogo. El icono es una versión tipográfica simplificada de la marca basada en la carta. Para sustituirlo por el logotipo original en alta calidad, reemplaza `favicon.svg` y `apple-touch-icon.svg`.

Número configurado para el pedido: `+56 9 3742 6043`.
