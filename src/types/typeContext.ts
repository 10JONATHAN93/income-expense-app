export type Income = {
    id: number;
    description: string;
    amount: number;
    type: string;
}

export type Expense = {
    id: number;
    description: string;
    amount: number;
    type: string;
}

export type IncomeOrExpenseContextType = {
    income: Income[];
    expense: Expense[];
    addIncome: (incomeText: string, incomeNumber: number) => void;
    deleteIncome: (incomeId: number) => void;
    editIncome: (incomeId: number, newText: string, newAmmonut: number) => void;
    addExpense: (expenseText: string, expenseNumber: number) => void;
    deleteExpense: (expenseId: number) => void;
    editExpense: (expenseId: number, newText: string, newAmmonut: number) => void;
}
