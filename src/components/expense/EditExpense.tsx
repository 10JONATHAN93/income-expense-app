import { useEditExpenseModal } from "../../hooks/useEditExpenseModal";
import { EditProps } from "../../types/typeEdit";
import { ModalEditExpense } from "./ModalEditExpense";


const EditExpense = ({ onEdit, currentText, currentAmount }: EditProps) => {
    const { 
        isModalOpen, 
        openModal, 
        closeModal, 
        newExpenseText, 
        setNewExpenseText, 
        newExpenseAmount, 
        setNewExpenseAmount, 
        handleSubmit 
    } = useEditExpenseModal();

    const openEditModal = () => {
        setNewExpenseText(currentText);
        setNewExpenseAmount(currentAmount);
        openModal(currentText, currentAmount); // Abre el modal con los valores actuales
    };


    return (
        <>
            <button className="edit-button" onClick={openEditModal}>✏️</button> 
            {isModalOpen && (
                <ModalEditExpense
                    isOpen={isModalOpen}
                    handleClose={closeModal}
                    newExpenseText={newExpenseText}
                    setNewExpenseText={setNewExpenseText}
                    newExpenseAmount={newExpenseAmount}
                    setNewExpenseAmount={setNewExpenseAmount}
                    handleSubmit={handleSubmit}
                    onEdit={onEdit}
                />
            )}
        </>
    )
}

export { EditExpense };