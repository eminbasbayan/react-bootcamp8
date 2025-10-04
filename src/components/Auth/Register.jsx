import React from 'react'

const Register = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Kayıt Ol</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Ad Soyad</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Adınızı giriniz" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="ornek@mail.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Şifre</label>
          <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Kayıt Ol</button>
      </form>
    </div>
  )
}

export default Register