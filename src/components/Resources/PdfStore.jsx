import React from 'react';
import { PDF_PRODUCTS } from './ResourcesData';
import PdfCard from './pdfCard';
const PdfStore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {PDF_PRODUCTS.map(pdf => (
        <PdfCard key={pdf.id} product={pdf} />
      ))}
    </div>
  );
};

export default PdfStore;