import { ButtonDefault } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { Container, Header, Image, Logo, Text } from "./styles/home";

import keyboardImg from "./assets/keyboard.jpg";

function App() {

  return (
    <>
      <Container>
        <Header>
          <Logo>
            <span>TM</span>
          </Logo>
          <ButtonDefault text={"pre-order now"} />
        </Header>
        <main>
          <section className="highlight">
            <h1 className="title">typemaster keyboard</h1>
            <Text>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</Text>
            <ButtonDefault hightlightButton text={"pre-order now"} />
            <span className="release">release on 8/11</span>
          </section>
          <Image imageSource={keyboardImg} />
        </main>
      </Container>
      
      <GlobalStyle />
    </>
  )
}

export default App;
