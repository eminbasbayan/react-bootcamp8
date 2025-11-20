import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { setUser, clearUser, setLoading } from '../redux/authSlice';

export const initAuthListener = (store) => {
  onAuthStateChanged(auth, async (user) => {
    console.log('AuthListener - Auth state changed, user:', user ? user.email : 'null');

    if (user) {
      // Kullanıcı var, loading başlat
      console.log('AuthListener - Setting loading true');
      store.dispatch(setLoading(true));

      try {
        // Firestore'dan kullanıcı bilgilerini çek
        console.log('AuthListener - Fetching user data from Firestore...');
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('AuthListener - User data fetched:', userData);
          // setUser içinde loading otomatik false oluyor
          store.dispatch(
            setUser({
              uid: user.uid,
              email: userData.email,
              fullName: userData.fullName,
              role: userData.role,
            })
          );
          console.log('AuthListener - User set in Redux with role:', userData.role);
        } else {
          console.log('AuthListener - No Firestore doc, using default user role');
          // Firestore'da kullanıcı yoksa sadece auth bilgilerini kullan
          store.dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              fullName: user.displayName || '',
              role: 'user', // Default role
            })
          );
        }
      } catch (error) {
        console.error('AuthListener - Error fetching user data:', error);
        // Hata durumunda clearUser çağır (loading false olur)
        store.dispatch(clearUser());
      }
    } else {
      console.log('AuthListener - No user, clearing state');
      // Kullanıcı yok, clearUser çağır (loading false olur)
      store.dispatch(clearUser());
    }
  });
};
