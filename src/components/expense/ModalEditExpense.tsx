import { ModalEditExpenseProps } from "../../types/typeEdit";
import "../styles/ModalAddEditIncomeOrExpense.css"

const ModalEditExpense = ({
    isOpen,
    handleClose,
    newExpenseText,
    setNewExpenseText,
    newExpenseAmount,
    setNewExpenseAmount,
    handleSubmit,
    onEdit,
}: ModalEditExpenseProps) => {

    const handleExpense = () => {
        if(!handleSubmit()) {
            return;
        }
        onEdit(newExpenseText, newExpenseAmount);
        handleClose();
    }
    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewExpenseText(event.target.value);
    };

    const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewExpenseAmount(Number(event.target.value));
    };

    if(!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>EDITA TU GASTO</h2>
                <input
                    className="description-input"
                    type="text"
                    value={newExpenseText}
                    onChange={handleChangeText}
                    placeholder="Ingresa la descripción del gasto"
                />
                <input
                    className="value-input"
                    type="number"
                    value={newExpenseAmount}
                    onChange={handleChangeNumber}
                    placeholder="Ingresa la cantidad"
                />

                <div className="buttons-modal">
                    <button className="add-button" onClick={handleExpense}>
                        Guardar
                    </button>
        
                    <button className="cancel-button" onClick={handleClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ModalEditExpense };