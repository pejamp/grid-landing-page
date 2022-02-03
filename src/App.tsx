import { ButtonDefault } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { Container, Header, SectionDefault, Image, Logo, Main, Paragraph, Text, Title } from "./styles/home";

import keyboardImg from "./assets/keyboard.jpg";
import keyboard2Img from "./assets/keyboard-2.jpg";
import keyboard3Img from "./assets/keyboard-3.jpg";
import { Icon } from "./components/Icon";
import { RiComputerFill } from "react-icons/ri";
import { RiBluetoothFill } from "react-icons/ri";
import { RiBatteryFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";

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
          <SectionDefault className="highlight">
            <Title>typemaster keyboard</Title>
            <Paragraph>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</Paragraph>
            <ButtonDefault hightlightButton text={"pre-order now"} />
            <Text className="release">release on 8/11</Text>
          </SectionDefault>
          <Image 
            imageSource={keyboardImg}
          />
          <Image 
            imageSource={keyboard2Img}
            className="small" 
          />
          <Image 
            imageSource={keyboard3Img}
            className="medium"
          />
          <SectionDefault>
            <Title className="title-h2">mechanical wireless keyboard</Title>
            <Paragraph className="center">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</Paragraph>
          </SectionDefault>

          <SectionDefault>
            <Icon children={<RiComputerFill />} />
            <Title className="title-h3">highly compatible</Title>
            <Paragraph className="center">Easy to use and works well with all major computer brands, gaming consoles and mobile device. Plug and play, no installation or driver needed.</Paragraph>
          </SectionDefault>
          <SectionDefault>
            <Icon children={<RiBluetoothFill />} />
            <Title className="title-h3">wireless with bluetooth</Title>
            <Paragraph className="center">Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</Paragraph>
          </SectionDefault>
          <SectionDefault>
            <Icon children={<RiBatteryFill />} />
            <Title className="title-h3">high capacity battery</Title>
            <Paragraph className="center">Equipped with a log-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours od usage time between charges.</Paragraph>
          </SectionDefault>
          <SectionDefault>
            <Icon children={<HiLightBulb />} />
            <Title className="title-h3">rgb backlit modes</Title>
            <Paragraph className="center">Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</Paragraph>
          </SectionDefault>
        </Main>
      </Container>
      
      <GlobalStyle />
    </>
  )
}

export default App;
