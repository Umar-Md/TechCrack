import React from "react";
import PurchaseButton from "./PurchaseButton";
const PdfCard = ({ product, userEmail }) => {

  return (

    <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-3xl hover:border-cyan-500/30 transition-all group">

      <div
        className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${product.color}`}
      >
        <product.icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        {product.title}
      </h3>

      <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
        {product.desc}
      </p>

      <div className="flex items-center justify-between border-t border-white/5 pt-6">

        <span className="text-2xl font-black text-white">
          ₹{product.price}
        </span>

        {/* Pass user email */}
        <PurchaseButton
          product={product}
          userEmail={userEmail}
        />

      </div>

    </div>

  );

};

export default PdfCard;
