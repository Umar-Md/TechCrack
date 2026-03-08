import React, { useState } from "react";
import PdfStore from "./PdfStore";

const Resources = () => {
  /* Store entered email */
  const [email, setEmail] = useState("");

  return (
    <div className="w-full bg-black py-20" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Interview <span className="text-cyan-500">Resources</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Enter your email to receive purchased PDF.
          </p>
        </div>

        {/* Email input field */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#111] text-white border border-cyan-500 outline-none"
          />
        </div>

        {/* Pass email to store */}
        <PdfStore userEmail={email} />
      </div>
    </div>
  );
};

export default Resources;
