// ========================================
// CONFIGURACIÓN DE FIREBASE
// Reemplaza estos valores con los de tu
// proyecto en Firebase Console
// ========================================

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// ========================================
// COLECCIONES EN FIRESTORE
// - products: catálogo de productos
// - orders: pedidos de clientes
// - admins: emails con acceso admin
// ========================================
