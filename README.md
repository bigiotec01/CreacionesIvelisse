# 🛍️ Tienda Online — Guía de Configuración

## Archivos del proyecto

```
tienda/
├── index.html          → Tienda pública (clientes)
├── admin.html          → Panel de administración
├── firebase-config.js  → Configuración de Firebase
└── README.md           → Esta guía
```

---

## 1. Crear proyecto en Firebase

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Crea un nuevo proyecto
3. En **Configuración del proyecto → General** copia los valores de `firebaseConfig`
4. Pégalos en `firebase-config.js`

---

## 2. Configurar servicios en Firebase

### Firestore Database
- Modo: **Producción**
- Reglas de seguridad sugeridas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Productos: lectura pública, escritura solo admin autenticado
    match /products/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    // Pedidos: cualquiera puede crear, solo admin puede leer/actualizar
    match /orders/{doc} {
      allow create: if true;
      allow read, update: if request.auth != null;
    }
  }
}
```

### Authentication
- Activa **Email/Password**
- Crea un usuario admin con tu email y contraseña

### Storage (para imágenes de productos)
- Activa Firebase Storage
- Reglas sugeridas:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 3. Despliegue en Vercel

1. Sube los 3 archivos a un repo de GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. ¡Listo! Sin build steps, es HTML puro

---

## 4. Configurar pagos con Stripe (opcional)

Para activar pagos con tarjeta real:

1. Crea cuenta en [stripe.com](https://stripe.com)
2. Obtén tu **clave pública** (pk_live_...)
3. Para cobros reales necesitas un backend (Cloud Functions) o Stripe Checkout

**Alternativa más sencilla:** usa Stripe Checkout (redirect) desde una Cloud Function de Firebase.

---

## 5. Flujo de uso

### Admin:
1. Entra a `admin.html`
2. Inicia sesión con tu cuenta de Firebase Auth
3. Agrega productos con nombre, precio, stock e imagen
4. Gestiona pedidos desde la sección "Pedidos"

### Cliente:
1. Entra a `index.html`
2. Navega el catálogo, filtra por categoría
3. Agrega productos al carrito
4. Llena datos de envío y confirma pedido

---

## Personalización rápida

| Qué cambiar | Dónde |
|-------------|-------|
| Nombre de tienda | `index.html` → busca "Mi Tienda" |
| Colores | Variables CSS `:root` en ambos archivos |
| Métodos de pago | Sección `.payment-methods` en `index.html` |
| Envío gratis/costo | Función `getCartTotal()` en `index.html` |

---

## Próximas funcionalidades posibles

- [ ] Notificaciones por email al recibir pedido (SendGrid + Cloud Functions)
- [ ] Integración completa con Stripe Checkout
- [ ] Gestión de descuentos / cupones
- [ ] Historial de pedidos para clientes
- [ ] Múltiples imágenes por producto
- [ ] Reseñas de clientes
