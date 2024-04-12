import { Container, Profile } from "./styles";
import { Input } from "../input";


export function Header() {
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

           
                <Input 
                placeholder="Pesquisar pelo título"
                />


                <div className="profile">

                    <strong>Alexandre SoaresRodrigues</strong>
                    
                    <span>Sair</span>
                    </div>

                    <img src="https://github.com/AlexandreSoaresRodrigues.png" alt="foto do usuário" />

                    
            </Profile>
        </Container>
    )
}