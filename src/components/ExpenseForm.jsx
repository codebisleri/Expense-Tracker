import { useState, useRef, useEffect } from 'react';

function ExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: '',
        type: 'expense'
    });

    // useRef for managing focus on the description input
    const descriptionInputRef = useRef(null);
    const amountInputRef = useRef(null);

    // Focus on description input when component mounts
    useEffect(() => {
        descriptionInputRef.current?.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.description.trim() || !formData.amount || !formData.category) {
            alert('Please fill in all fields');
            descriptionInputRef.current?.focus();
            return;
        }

        if (Number(formData.amount) <= 0) {
            alert('Amount must be greater than 0');
            amountInputRef.current?.focus();
            return;
        }

        // Add expense
        onAddExpense({
            description: formData.description.trim(),
            amount: Number(formData.amount),
            category: formData.category,
            type: formData.type
        });

        // Reset form
        setFormData({
            description: '',
            amount: '',
            category: '',
            type: 'expense'
        });

        // Focus back on description input for quick entry
        descriptionInputRef.current?.focus();
    };

    const categories = {
        income: ['Salary', 'Freelance', 'Business', 'Investment', 'Other'],
        expense: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Other']
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Add New Transaction</h2>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        ref={descriptionInputRef}
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description..."
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount" className="form-label">Amount ($)</label>
                    <input
                        ref={amountInputRef}
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select category...</option>
                        {categories[formData.type].map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Add Transaction
            </button>
        </form>
    );
}

export default ExpenseForm;
