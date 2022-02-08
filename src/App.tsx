import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { Container, Header, SectionDefault, Image, Main, Paragraph, Text, Title, Footer, GridLayout } from "./styles/home";

import { Icon } from "./components/Icon";
import { Divider } from "./components/Divider";
import { Logo } from "./components/Logo";

import keyboardImg from "./assets/keyboard.jpg";
import keyboard2Img from "./assets/keyboard-2.jpg";
import keyboard3Img from "./assets/keyboard-3.jpg";

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
          <Button text={"pre-order now"} />
        </Header>

        <Main>
          <SectionDefault className="highlight">
            <Title>typemaster keyboard</Title>
            <Paragraph>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</Paragraph>
            <Button backgroundModifier="var(--highlight-color)" colorModifier="var(--white)" text={"pre-order now"} />
            <Text className="release">release on 8/11</Text>
          </SectionDefault>
          <Image 
            imageSource={keyboardImg}
          />
          <GridLayout>
            <Image 
              imageSource={keyboard2Img}
              className="small" 
            />
            <Image 
              imageSource={keyboard3Img}
              className="medium"
            />
          </GridLayout>
          <SectionDefault>
            <Title className="title-h2">mechanical wireless keyboard</Title>
            <Paragraph className="center">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</Paragraph>
          </SectionDefault>

          <GridLayout className="col-2">
            <GridLayout className="itemBox column-1">
              <Icon children={<RiComputerFill />} />
              <Title className="title-h3">highly compatible</Title>
              <Paragraph className="center">Easy to use and works well with all major computer brands, gaming consoles and mobile device. Plug and play, no installation or driver needed.</Paragraph>
            </GridLayout>
            <GridLayout className="itemBox column-2">
              <Icon children={<RiBluetoothFill />} />
              <Title className="title-h3">wireless with bluetooth</Title>
              <Paragraph className="center">Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</Paragraph>
            </GridLayout>
            <GridLayout className="itemBox column-3">
              <Icon children={<RiBatteryFill />} />
              <Title className="title-h3">high capacity battery</Title>
              <Paragraph className="center">Equipped with a log-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours od usage time between charges.</Paragraph>
            </GridLayout>
            <GridLayout className="itemBox column-4">
              <Icon children={<HiLightBulb />} />
              <Title className="title-h3">rgb backlit modes</Title>
              <Paragraph className="center">Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</Paragraph>
            </GridLayout>
          </GridLayout>
        </Main>

        <Footer>
          <Text className="brand-name capitalize">typemaster 2021</Text>
          <Divider />
          <Text className="capitalize">all rights reserved</Text>
        </Footer>
      </Container>
      
      <GlobalStyle />
    </>
  )
}

export default App;
