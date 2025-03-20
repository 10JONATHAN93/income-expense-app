

type ModalAddExpenseProps = {
    expenseText: string;
    handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    expenseAmount: number;
    handleChangeNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleExpense: () => void;
    closeModal: () => void;
}

const ModalAddExpense = ({
    expenseText,
    handleChangeText,
    expenseAmount,
    handleChangeNumber,
    handleExpense, 
    closeModal,
}: ModalAddExpenseProps) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>REGISTRA TU GASTO</h2>
                <input
                    className="description-input"
                    type="text"
                    value={expenseText}
                    onChange={handleChangeText}
                    placeholder="Ingresa la descripción del gasto"
                />
                <input
                    className="value-input"
                    type="number"
                    value={expenseAmount}
                    onChange={handleChangeNumber}
                    placeholder="Ingresa la cantidad"
                />

                <div className="buttons-modal">
                    <button className="add-button" onClick={handleExpense}>
                        Agregar
                    </button>
        
                    <button className="cancel-button" onClick={closeModal}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ModalAddExpense };