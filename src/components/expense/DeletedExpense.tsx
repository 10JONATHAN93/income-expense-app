
type DeletedExpenseProps = {
    onDelete: () => void;
}


const DeleteExpense = ({ onDelete }: DeletedExpenseProps) => {
    return (
        <button className="delete-button" onClick={onDelete}>X</button>
    )
}

export { DeleteExpense };