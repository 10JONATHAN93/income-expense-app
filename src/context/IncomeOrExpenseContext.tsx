import React, { createContext, useEffect, useState } from "react";
import { Expense, Income, IncomeOrExpenseContextType } from "../types/typeContext";
import { loadExpenseFromLocalStorage, loadIncomeFromLocalStorage } from "../utils/localStorage";

//creando contexto
const IncomeOrExpenseContext = createContext<IncomeOrExpenseContextType | undefined>(undefined);

// creando estado global
const IncomeOrExpenseProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {

    //creando estado local
    const [income, setIncome] = useState<Income[]>(loadIncomeFromLocalStorage); // estado de ingresos
    const [expense, setExpense] = useState<Expense[]>(loadExpenseFromLocalStorage); // estado de gastos

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(income));
        localStorage.setItem('expense', JSON.stringify(expense));
    }, [income, expense]);

    // agregando ingresos
    const addIncome = (incomeText: string, incomeNumber: number) => {
        if(!incomeText.trim() && !incomeNumber) {
            alert('no has ingresado ninguna descripción o valor.');
            return;
        }
        const newIncome: Income = {
            id: Date.now(), // crea un id unico
            description: incomeText,
            amount: incomeNumber,
            type: 'income',
        }
        // actualizamos el estado con los valores anteriores y un nuevo ingreso = income
        setIncome([...income, newIncome])
    }

    const deleteIncome = (incomeId: number) => {
        setIncome(income.filter(incom => incom.id !== incomeId))
    }

    const editIncome = (incomeId: number, newText: string, newAmonut: number) => {
        setIncome(income.map(income =>
            income.id === incomeId ? {...income, description: newText, amount: newAmonut} : income
        ));
    }




    // agregando gastos
    const addExpense = (expenseText: string, expenseNumber: number) => {
        if(!expenseText.trim() && !expenseNumber) {
            alert('no has ingresado ninguna descripción o valor.');
            return;
        }
        const newExpense: Expense = {
            id: Date.now(), // crea un id unico
            description: expenseText,
            amount: expenseNumber,
            type: 'expense',
        }
        // actualizamos el estado con los valores anteriores y un nuevo ingreso = income
        setExpense([...expense, newExpense])
    }

    const deleteExpense = (expenseId: number) => {
        setExpense(expense.filter(expens => expens.id !== expenseId))
    }

    const editExpense = (expenseId: number, newText: string, newAmonut: number) => {
        setExpense(expense.map(expens =>
            expens.id === expenseId ? {...expens, description: newText, amount: newAmonut} : expens
        ));
    }


    return (
        <IncomeOrExpenseContext.Provider 
            value={{ 
                income, 
                expense, 
                addIncome,
                editIncome,
                deleteIncome,
                addExpense,
                deleteExpense,
                editExpense
            }}
        >
            {children}
        </IncomeOrExpenseContext.Provider>
    );
};

export { IncomeOrExpenseContext, IncomeOrExpenseProvider };