import { useState } from "react";

const useAddExpenseModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [expenseText, setExpenseText] = useState<string>(""); 
    const [expenseAmount, setExpenseAmount] = useState<number>(0);

    const openModal = () => {
        setExpenseText(""); 
        setExpenseAmount(0); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        if (!expenseText.trim() || !expenseAmount) {
            alert("No has ingresado valores. Por favor, intenta nuevamente.");
            return false; 
        }
        return true; 
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        expenseText,
        setExpenseText,
        expenseAmount,
        setExpenseAmount,
        handleSubmit,
    };
};

export { useAddExpenseModal };
