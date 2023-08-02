import React from "react";
import FAQAccordion from "./FaqAccordion";

const faqData = [
   {
      question: "Pertanyaan 1",
      answer: "Jawaban pertanyaan 1...",
   },
   {
      question: "Pertanyaan 2",
      answer: "Jawaban pertanyaan 2...",
   },
   // Tambahkan lebih banyak data pertanyaan dan jawaban di sini jika diperlukan
];

export const UseFaq: React.FC = () => {
   return (
      <div>
         <h1>FAQ Accordion</h1>
         <FAQAccordion faqData={faqData} />
      </div>
   );
};
