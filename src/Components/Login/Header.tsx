import { Wrapper } from "./Header.style";
import { Title } from "./Header.style";
import { Text1 } from "./Header.style";
import { Text2 } from "./Header.style";
import CvIcon from "../../../public/img/Cv.svg";

export const Header = () => {
   return (
      <Wrapper>
         <Title>
            <img src={CvIcon} alt='Cv Zaman Now' />
            <h2>CV Zaman Now</h2>
         </Title>
         <Text1>
            <p>
               Dapatkan Kesempatan <span>Berkarier</span> Lebih Baik.
            </p>
         </Text1>
         <Text2>
            <p>
               Dengan menggunakan CV Zaman Now, dapat membantu mewujudkan impian
               Anda untuk diterima di perusahaan favorit.
            </p>
         </Text2>
      </Wrapper>
   );
};
