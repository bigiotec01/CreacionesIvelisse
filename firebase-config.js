// ========================================
// CONFIGURACIÓN DE FIREBASE
// Reemplaza estos valores con los de tu
// proyecto en Firebase Console
// ========================================

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyCfBTHp9PMjHBqjOcCigGaZlA7c-nEXe-o",
  authDomain: "creacciones-ivelisse.firebaseapp.com",
  projectId: "creacciones-ivelisse",
  storageBucket: "creacciones-ivelisse.firebasestorage.app",
  messagingSenderId: "406396161888",
  appId: "1:406396161888:web:2521645340e2805b965805"
=======
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
>>>>>>> 064e8e93553bf1f8df49181c6bf4ea729f7c7835
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
