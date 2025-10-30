import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

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

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
    } catch (error) {
      setError('email', { type: 'manual', message: error.message });
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
