import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

const Header = () => {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
export default Header