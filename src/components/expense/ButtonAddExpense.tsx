import { useIncomeOrExpense } from "../../context/useIncomeOrExpense";
import { useAddExpenseModal } from "../../hooks/useAddExpenseModal";
import { ModalAddExpense } from "./ModalAddExpense";
import "../styles/ButtonAddIncomeOrExpense.css"




const ButtonAddExpense = () => {
    const { 
        isModalOpen, 
        openModal, 
        closeModal, 
        expenseText, 
        setExpenseText, 
        expenseAmount, 
        setExpenseAmount, 
        handleSubmit 
    } = useAddExpenseModal();

    const { addExpense } = useIncomeOrExpense();

    const handleExpense = () => {
        if (!handleSubmit()) return; // Si los datos están vacíos, no cierra el modal
        addExpense(expenseText, Number(expenseAmount));
        closeModal();
    };

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseText(event.target.value);
    };

    const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseAmount(Number(event.target.value));
    };

    return (
        <>
            <button className="buttonAddExpense" onClick={openModal}>
                Agregar Nuevo Gasto
            </button>

            {isModalOpen && (
                <ModalAddExpense 
                    expenseText={expenseText}
                    handleChangeText={handleChangeText}
                    expenseAmount={expenseAmount}
                    handleChangeNumber={handleChangeNumber}
                    handleExpense={handleExpense} 
                    closeModal={closeModal}
                />
            )}
        </>
    );
}

export { ButtonAddExpense }