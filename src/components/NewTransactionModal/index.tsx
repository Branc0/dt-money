import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction() {
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>

            <h2>Cadastrar transação</h2>
            <Container onSubmit={handleCreateNewTransaction}>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainer>
                    <RadioBox
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => { setType('deposit'); }}
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => { setType('withdraw'); }}>
                        <img src={outcomeImg} alt="saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )
}