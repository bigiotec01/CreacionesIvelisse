// ========================================
// CONFIGURACIÓN DE FIREBASE
// Reemplaza estos valores con los de tu
// proyecto en Firebase Console
// ========================================

const firebaseConfig = {
  apiKey: "AIzaSyCfBTHp9PMjHBqjOcCigGaZlA7c-nEXe-o",
  authDomain: "creacciones-ivelisse.firebaseapp.com",
  projectId: "creacciones-ivelisse",
  storageBucket: "creacciones-ivelisse.firebasestorage.app",
  messagingSenderId: "406396161888",
  appId: "1:406396161888:web:2521645340e2805b965805"
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
