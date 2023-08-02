import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

//Styling untuk wrapper item pertanyaan dan jawaban
const ItemWrapper = styled.div`
   border: 1px solid #ccc;
   border-radius: 4px;
   margin-bottom: 8px;
`;

//Styling untuk bagian header item
const ItemHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px;
   background-color: #f1f1f1;
   cursor: pointer;
`;

// Styling untuk bagian konten item (jawaban)
const ItemContent = styled.div<{ isExpanded: boolean }>`
   padding: ${(props) => (props.isExpanded ? "16px" : "0")};
   display: ${(props) => (props.isExpanded ? "block" : "none")};
`;

// Props untuk menerima pertanyaan dan jawaban
interface FaqItemProps {
   question: string;
   answer: string;
}

// Komponen untuk item FAQ Accordion tunggal
export const FaqItem = ({ question, answer }: FaqItemProps) => {
   // State untuk melacak apakah accordion sedang dibuka atau ditutup
   const [isExpanded, setIsExpanded] = useState(false);

   // Fungsi untuk mengubah state ketika header di-klik\
   const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
   };

   return (
      // Wrapper untuk setiap item FAQ
      <ItemWrapper>
         {/* Header item yang bisa di-klik untuk membuka/tutup */}
         <ItemHeader onClick={toggleAccordion}>
            {/* Tampilan pertanyaan di bagian header */}
            <div>{question}</div>
            {/* Tampilkan ikon minus jika item sedang dibuka , ikon plus jika ditutup */}
            {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
         </ItemHeader>
         {/* Konten (jawaban) akan ditampilkan jika item sedang dibuka */}
         <ItemContent isExpanded={isExpanded}>{answer}</ItemContent>
      </ItemWrapper>
   );
};
