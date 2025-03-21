import { useNavigate } from "react-router-dom";


type ModalIncomeProps = {
    incomeText: string;
    handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    incomeAmount: number;
    handleChangeNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleIncome: () => void;
    closeModal: () => void;
}

const ModalAddIncome = ({
    incomeText,
    handleChangeText,
    incomeAmount,
    handleChangeNumber,
    handleIncome, 
    closeModal,
}: ModalIncomeProps) => {
    const navigate = useNavigate();

    const goToIncome = () => {
        navigate('/income');
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>REGISTRA TU INGRESO</h2>
                <input
                    className="description-input"
                    type="text"
                    value={incomeText}
                    onChange={handleChangeText}
                    placeholder="Ingresa la descripción del ingreso"
                />
                <input
                    className="value-input"
                    type="number"
                    value={incomeAmount}
                    onChange={handleChangeNumber}
                    placeholder="Ingresa la cantidad"
                />

                <div className="buttons-modal">
                    <button 
                        className="add-button" 
                        onClick={() => {handleIncome(); goToIncome()}}
                    >
                        Agregar
                    </button>

                    <button className="cancel-button" onClick={closeModal}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export { ModalAddIncome };