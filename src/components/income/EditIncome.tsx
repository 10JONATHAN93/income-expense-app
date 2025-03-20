import { useEditIncomeModal } from "../../hooks/useEditIncomeModal";
import { EditProps } from "../../types/typeEdit";
import { ModalEditIncome } from "./ModalEditIncome";
import "../styles/ModalAddEditIncomeOrExpense.css"


const EditIncome = ({onEdit, currentText, currentAmount}: EditProps) => {
    const {
        isModalOpen,
        closeModal,
        openModal,
        handleSubmit,
        newIncomeText, 
        setNewIncomeText,
        newIncomeAmount,
        setNewIncomeAmount
    } = useEditIncomeModal();

    const openEditModal = () => {
        setNewIncomeText(currentText);
        setNewIncomeAmount(currentAmount);
        openModal(currentText, currentAmount);
    }

    return (
        <>
            <button className="edit-button" onClick={openEditModal}>✏️</button>
            { isModalOpen && (
                <ModalEditIncome 
                    isOpen={isModalOpen}
                    handleClose={closeModal}
                    newIncomeText={newIncomeText}
                    setNewIncomeText={setNewIncomeText}
                    newIncomeAmount={newIncomeAmount}
                    setNewIncomeAmount={setNewIncomeAmount}
                    handleSubmit={handleSubmit}
                    onEdit={onEdit}
                />
            )}
        </>
    )
}

export { EditIncome };