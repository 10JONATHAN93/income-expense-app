import React from "react";
import { useIncomeOrExpense } from "../../context/useIncomeOrExpense";
import { useAddIncomeModal } from "../../hooks/useAddIncomeModal"; 
import { ModalIncome } from "./ModalIncome";
import "../styles/ButtonAddIncomeOrExpense.css"

const ButtonAddIncome = () => {
    const { 
        isModalOpen, 
        openModal, 
        closeModal, 
        incomeText, 
        setIncomeText, 
        incomeAmount, 
        setIncomeAmount, 
        handleSubmit 
    } = useAddIncomeModal();

    const { addIncome } = useIncomeOrExpense();

    const handleIncome = () => {
        if (!handleSubmit()) return; // Si los datos están vacíos, no cierra el modal
        addIncome(incomeText, Number(incomeAmount));
        closeModal();
    };

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncomeText(event.target.value);
    };

    const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncomeAmount(Number(event.target.value));
    };

    return (
        <>
            <button className="buttonAddIncome" onClick={openModal}>
                Agregar Nuevo Ingreso
            </button>

            {isModalOpen && (
                <ModalIncome 
                    incomeText={incomeText}
                    handleChangeText={handleChangeText}
                    incomeAmount={incomeAmount}
                    handleChangeNumber={handleChangeNumber}
                    handleIncome={handleIncome} 
                    closeModal={closeModal} 
                />
            )}
        </>
    );
};

export { ButtonAddIncome };
