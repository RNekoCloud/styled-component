import { Wrapper } from "./Header.style";
import { Title } from "./Header.style";
import CvIcon from "../../../public/img/Cv.svg";

export const Header = () => {
   return (
      <Wrapper>
         <Title>
            <img src={CvIcon} alt='Cv Zaman Now' />
            <h2>CV Zaman Now</h2>
         </Title>
      </Wrapper>
   );
};
