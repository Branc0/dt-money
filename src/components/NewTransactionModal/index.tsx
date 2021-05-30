import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modaloverlay"
            className="react=modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>

            <h2>Cadastrar transação</h2>
            <Container>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainer>
                    <button>
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </button>
                    <button>
                        <span>Saída</span>
                        <img src={outcomeImg} alt="saída" />
                    </button>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )
}