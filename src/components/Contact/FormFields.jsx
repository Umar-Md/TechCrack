import React from 'react';

export const InputField = ({ label, type = "text", name, placeholder, required = true }) => (
  <div className="flex flex-col gap-2 mb-4">
    <label className="text-s font-black text-cyan-500/80">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
    />
  </div>
);
