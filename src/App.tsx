import { ButtonDefault } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { Container, Header, Highlight, Image, Logo, Main, Paragraph, Text, Title } from "./styles/home";

import keyboardImg from "./assets/keyboard.jpg";
import keyboard2Img from "./assets/keyboard-2.jpg";
import keyboard3Img from "./assets/keyboard-3.jpg";

function App() {

  return (
    <>
      <Container>
        <Header>
          <Logo>
            TM
          </Logo>
          <ButtonDefault text={"pre-order now"} />
        </Header>
        <Main>
          <Highlight>
            <Title>typemaster keyboard</Title>
            <Paragraph>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</Paragraph>
            <ButtonDefault hightlightButton text={"pre-order now"} />
            <Text className="release">release on 8/11</Text>
          </Highlight>
          <Image 
            imageSource={keyboardImg}
            sizeWidth="100vw"
            sizeHeight="340px" 
          />
          <Image 
            imageSource={keyboard2Img}
            sizeWidth="100px"
            sizeHeight="150px" 
          />
          <Image 
            imageSource={keyboard3Img}
            sizeWidth="100px"
            sizeHeight="150px" 
          />
        </Main>
      </Container>
      
      <GlobalStyle />
    </>
  )
}

export default App;
