export type ModalEditExpenseProps = {
    isOpen: boolean;
    handleClose: () => void;
    newExpenseText: string;
    setNewExpenseText: (value: string) => void;
    newExpenseAmount: number;
    setNewExpenseAmount: (value: number) => void;
    handleSubmit: () => boolean;
    onEdit: (newText: string, newAmount: number) => void;
}

export type ModalEditIncomeProps = {
    isOpen: boolean;
    handleClose: () => void;
    newIncomeText: string;
    setNewIncomeText: (value: string) => void;
    newIncomeAmount: number;
    setNewIncomeAmount: (value: number) => void;
    handleSubmit: () => boolean;
    onEdit: (newText: string, newAmount: number) => void;
}


export type EditProps = {
    onEdit: (newText: string, newAmonut: number) => void;
    currentText: string;
    currentAmount: number;
}
