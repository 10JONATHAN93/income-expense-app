import { useState } from "react"

const useEditIncomeModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newIncomeText, setNewIncomeText] = useState<string>("");
    const [newIncomeAmount, setNewIncomeAmount] = useState<number>(0);

    const openModal = (text: string, amount: number) => {
        setNewIncomeText(text);
        setNewIncomeAmount(amount);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmit = () => {
        if(!newIncomeText || !newIncomeAmount) {
            alert("No has ingresado valores. Por favor, intenta nuevamente.");
            return false;
        }
        return true;
    }

    return {
        isModalOpen,
        openModal,
        closeModal,
        handleSubmit,
        newIncomeText,
        setNewIncomeText,
        newIncomeAmount,
        setNewIncomeAmount
    };
};

export { useEditIncomeModal };