import { useState } from "react";

const useAddIncomeModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [incomeText, setIncomeText] = useState<string>(""); 
    const [incomeAmount, setIncomeAmount] = useState<number>(0);

    const openModal = () => {
        setIncomeText(""); 
        setIncomeAmount(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        if (!incomeText.trim() || !incomeAmount) {
            alert("No has ingresado valores. Por favor, intenta nuevamente.");
            return false; 
        }
        return true; 
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        incomeText,
        setIncomeText,
        incomeAmount,
        setIncomeAmount,
        handleSubmit,
    };
};

export { useAddIncomeModal };
