import { FaqItem } from "./FaqItem";

//Props untuk menerima data pertanyaan dan jawaban
interface FaqAccordionProps {
   faqData: { question: string; answer: string }[];
}

//Komponen untuk accordion yang menampilkan daftar pertanyaan dan Jawaban
export const FaqAccordion = ({ faqData }: FaqAccordionProps) => {
   return (
      <div>
         {/* Mapping data pertanyaan dan jawaban menjadi komponen FaqItem */}
         {faqData.map((item, index) => (
            <FaqItem
               key={index}
               question={item.question}
               answer={item.answer}
            />
         ))}
      </div>
   );
};
