import Modal from "react-modal"
import { Container } from "./styles";
import closeImg from "../../assets/x.svg"


interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const NewTransactionsModal = ({isOpen, onRequestClose}: NewTransactionsModalProps ) => {
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="" />
            </button>
            <Container>
            <h2>Cadastrar transação</h2>

            <input placeholder="Título" />

            <input placeholder="Valor" type="number" />

            <input placeholder="Categoria" type="text" />

            <button type="submit">Cadastrar</button>

            </Container>
            

        </Modal>

    )
}
export default NewTransactionsModal