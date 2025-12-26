import { useMemo } from 'react';

function ExpenseItem({ expense, onDelete }) {
    // useMemo to format the date (optimization)
    const formattedDate = useMemo(() => {
        const date = new Date(expense.date);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }, [expense.date]);

    // useMemo to format the amount
    const formattedAmount = useMemo(() => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(expense.amount);
    }, [expense.amount]);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${expense.description}"?`)) {
            onDelete(expense.id);
        }
    };

    return (
        <div className={`expense-item ${expense.type}`}>
            <div className="expense-info">
                <div className="expense-description">{expense.description}</div>
                <div className="expense-meta">
                    <span className="expense-category">
                        {getCategoryIcon(expense.category)} {expense.category}
                    </span>
                    <span className="expense-date">📅 {formattedDate}</span>
                </div>
            </div>

            <div className="expense-actions">
                <span className={`expense-amount ${expense.type}`}>
                    {expense.type === 'income' ? '+' : '-'}{formattedAmount}
                </span>
                <button
                    onClick={handleDelete}
                    className="btn btn-danger"
                    aria-label="Delete transaction"
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
}

// Helper function to get category icons
function getCategoryIcon(category) {
    const icons = {
        'Salary': '💼',
        'Freelance': '💻',
        'Business': '🏢',
        'Investment': '📈',
        'Food': '🍔',
        'Transport': '🚗',
        'Utilities': '💡',
        'Entertainment': '🎬',
        'Shopping': '🛍️',
        'Healthcare': '🏥',
        'Education': '📚',
        'Other': '📌'
    };
    return icons[category] || '📌';
}

export default ExpenseItem;
