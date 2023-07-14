
import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

const Header = ({onOpenNewTransactionModal}: HeaderProps) => {



    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

              
            </Content>
        </Container>
    )
}
export default Header