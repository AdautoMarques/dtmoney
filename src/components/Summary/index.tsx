import { Container } from "./styles";
import IconEntrada from "../../assets/entrada.svg";
import IconSaida from "../../assets/saida.svg";
import IconTotal from "../../assets/Icons.svg";




const Summary = () => {
    return(
        
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IconEntrada} alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={IconSaida} alt="" />
                </header>
                <strong> - R$500,00</strong>
            </div>
           <div className="colorGreen">
            <header>
                <p>Saldo</p>
                <img src={IconTotal} alt="" />
            </header>
            <strong>R$500,00</strong>
        </div>
        </Container>
    )
}

export default Summary