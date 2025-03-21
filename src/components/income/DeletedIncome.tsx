
type deleteIncomeProps = {
    onDelete: () => void;
}

const DeletedIncome = ({ onDelete }: deleteIncomeProps) => {
    return (
        <button className="delete-button" onClick={onDelete}>X</button>
    );
}

export { DeletedIncome };