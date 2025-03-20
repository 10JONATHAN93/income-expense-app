import { ModalEditIncomeProps } from "../../types/typeEdit";
import "../styles/ModalAddEditIncomeOrExpense.css"

const ModalEditIncome = ({
    isOpen,
    handleClose,
    newIncomeText,
    setNewIncomeText,
    newIncomeAmount,
    setNewIncomeAmount,
    handleSubmit,
    onEdit
}: ModalEditIncomeProps) => {

    const handleIncome = () => {
        if(!handleSubmit()) {
            return;
        }
        onEdit(newIncomeText, newIncomeAmount);
        handleClose();
    }

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewIncomeText(event.target.value);
    }

    const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewIncomeAmount(Number(event.target.value));
    }

    if(!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>EDITA TU INGRESO</h2>

                <input
                    className="description-input"
                    type="text"
                    value={newIncomeText}
                    onChange={handleChangeText}
                    placeholder="Ingresa la descripción de tu ingreso."
                />

                <input 
                    className="value-input"
                    type="number"
                    value={newIncomeAmount}
                    onChange={handleChangeNumber}
                    placeholder="ingresa la cantidad"

                />

                <div className="buttons-modal">
                    <button className="add-button" onClick={handleIncome}>
                        Guardar
                    </button>
                    <button className="cancel-button" onClick={handleClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export { ModalEditIncome };