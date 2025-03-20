import { useState } from "react";

const useEditExpenseModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newExpenseText, setNewExpenseText] = useState<string>(""); 
    const [newExpenseAmount, setNewExpenseAmount] = useState<number>(0);

    const openModal = (text: string, amount: number) => {
        setNewExpenseText(text); 
        setNewExpenseAmount(amount); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        if (!newExpenseText.trim() || !newExpenseAmount) {
            alert("No has ingresado valores. Por favor, intenta nuevamente.");
            return false; 
        }
        return true; 
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        newExpenseText,
        setNewExpenseText,
        newExpenseAmount,
        setNewExpenseAmount,
        handleSubmit,
    };
};

export { useEditExpenseModal };
