import { Title } from "./Example1";
import { Container } from "./Example1";
import { Paragraph } from "./Example1";
import { Button1 } from "./Example1";
import { Button2 } from "./Example1";
import { ItemsContainer } from "./Example1";

export const HelloWorld = () => {
   return (
      <Container>
         <Title>Hello World</Title>
         <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur libero dignissimos unde rem culpa corrupti laudantium
            voluptatum eligendi, magni soluta iusto vero quas error temporibus
            tempore quo ipsum repudiandae saepe!
         </Paragraph>
         <ItemsContainer>
            <Button1>Click Me!</Button1>
            <Button2>Click Saya!</Button2>
         </ItemsContainer>
      </Container>
   );
};
