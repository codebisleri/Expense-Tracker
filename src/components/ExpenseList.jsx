import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense, filter, onFilterChange }) {
    return (
        <div className="expense-list">
            <div className="list-header">
                <h2 className="list-title">Transaction History</h2>

                <div className="filter-group">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => onFilterChange('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'income' ? 'active' : ''}`}
                        onClick={() => onFilterChange('income')}
                    >
                        Income
                    </button>
                    <button
                        className={`filter-btn ${filter === 'expense' ? 'active' : ''}`}
                        onClick={() => onFilterChange('expense')}
                    >
                        Expenses
                    </button>
                </div>
            </div>

            {expenses.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📊</div>
                    <p className="empty-text">
                        {filter === 'all'
                            ? 'No transactions yet. Add your first transaction above!'
                            : `No ${filter} transactions found.`}
                    </p>
                </div>
            ) : (
                <div className="expense-items">
                    {expenses.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onDelete={onDeleteExpense}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExpenseList;
