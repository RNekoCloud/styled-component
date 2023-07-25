interface ButtonProps {
   text: string;
   Click: () => void;
}

export const Buttons = ({ text, Click }: ButtonProps) => {
   return <button onClick={Click}>{text}</button>;
};
