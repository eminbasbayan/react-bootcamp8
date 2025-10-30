import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth } from '../../firebase';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Ad soyad zorunludur')
    .min(3, 'Ad soyad en az 3 karakter olmalıdır'),
  email: yup
    .string()
    .required('Email zorunludur')
    .email('Geçerli bir email giriniz'),
  password: yup
    .string()
    .required('Şifre zorunludur')
    .min(6, 'Şifre en az 6 karakter olmalıdır'),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError('email', { type: 'manual', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Kayıt Ol</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Ad Soyad
          </label>
          <input
            type="text"
            {...register('fullName')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none 
              ${errors.fullName ? 'border-red-500' : ''}`}
            placeholder="Adınızı giriniz"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none
              ${errors.email ? 'border-red-500' : ''}`}
            placeholder="ornek@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Şifre
          </label>
          <input
            type="password"
            {...register('password')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none
              ${errors.password ? 'border-red-500' : ''}`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 text-white py-2 rounded-lg transition
            ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
            }`}
        >
          {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
        </button>
      </form>
    </div>
  );
};

export default Register;
