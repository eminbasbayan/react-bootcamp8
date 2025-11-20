import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';

const schema = yup.object({
  email: yup
    .string()
    .email('Geçerli bir e-posta girin!')
    .required('E-mail zorunlu!'),
  password: yup
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı!')
    .max(12, 'Şifre en fazla 12 karakter olmalı!')
    .required('Şifre zorunlu!'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      // Firebase Auth ile giriş yap
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Firestore'dan kullanıcı bilgilerini çek
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Redux'a kullanıcı bilgilerini kaydet
        dispatch(
          setUser({
            uid: userCredential.user.uid,
            email: userData.email,
            fullName: userData.fullName,
            role: userData.role,
          })
        );

        toast.success('Başarıyla giriş yapıldı!', {
          position: 'top-right',
          autoClose: 1500,
        });

        // Role'e göre yönlendir
        setTimeout(() => {
          if (userData.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        }, 1500);
      } else {
        throw new Error('Kullanıcı bilgileri bulunamadı');
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage =
        error.code === 'auth/invalid-credential'
          ? 'Email veya şifre hatalı'
          : error.code === 'auth/user-not-found'
          ? 'Kullanıcı bulunamadı'
          : error.code === 'auth/wrong-password'
          ? 'Şifre hatalı'
          : error.message;
      setError('email', { type: 'manual', message: errorMessage });
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Giriş Yap</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="ornek@mail.com"
            {...register('email')}
          />
          {errors?.email && (
            <strong className="text-red-500 text-sm">
              {errors.email?.message}
            </strong>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Şifre
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
            {...register('password')}
          />
          {errors?.password && (
            <strong className="text-red-500 text-sm">
              {errors.password?.message}
            </strong>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
