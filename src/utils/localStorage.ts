export const loadIncomeFromLocalStorage = () => {
    const savedIncome = localStorage.getItem('income');
    return savedIncome ? JSON.parse(savedIncome) : [];
}

export const loadExpenseFromLocalStorage = () => {
    const savedExpense = localStorage.getItem('expense');
    return savedExpense ? JSON.parse(savedExpense) : [];
}

