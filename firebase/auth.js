import {auth} from './index'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';


const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Inicio de sesión exitoso');
    return {status: 'ok', user};
  } catch (error) {
    return {status: 'error', error: error.code};
  }
};

const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {status: 'ok', user};
  } catch (error) {
    return {status: 'error', error: error.code};
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log('Cierre de sesión exitoso');
  } catch (error) {
    console.error('Error al cerrar sesión', error);
  }
};

export { loginWithEmailAndPassword, signUpWithEmailAndPassword, logout}