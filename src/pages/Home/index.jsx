import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Header } from "../../components/Header";
import { Section } from "../../components/section";
import { Button } from "../../components/Button"


export function Home(){
    return(
        <Container>
            <Header />

            <Content>
                <div className="header">
                <Section title="Meus Filmes" />

      
                <Button icon={FiPlus} title="Adicionar filmes"  />
              </div>

            </Content>
        </Container>
    )
}