import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { setUser, clearUser } from '../redux/authSlice';

export const initAuthListener = (store) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(
        setUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } else {
      store.dispatch(clearUser());
    }
  });
};
