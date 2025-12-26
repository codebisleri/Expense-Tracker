import { useMemo } from 'react';

function StatsCards({ stats, currency }) {
    // useMemo to format currency values
    const formattedStats = useMemo(() => {
        const locale = currency === 'INR' ? 'en-IN' : 'en-US';
        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        });

        return {
            totalIncome: formatter.format(stats.totalIncome),
            totalExpense: formatter.format(stats.totalExpense),
            balance: formatter.format(stats.balance)
        };
    }, [stats, currency]);

    return (
        <div className="stats-grid">
            <div className="stat-card income">
                <div className="stat-label">Total Income</div>
                <div className="stat-value positive">{formattedStats.totalIncome}</div>
                <div className="stat-icon">💰</div>
            </div>

            <div className="stat-card expense">
                <div className="stat-label">Total Expenses</div>
                <div className="stat-value negative">{formattedStats.totalExpense}</div>
                <div className="stat-icon">💸</div>
            </div>

            <div className="stat-card">
                <div className="stat-label">Balance</div>
                <div className={`stat-value ${stats.balance >= 0 ? 'positive' : 'negative'}`}>
                    {formattedStats.balance}
                </div>
                <div className="stat-icon">{stats.balance >= 0 ? '📈' : '📉'}</div>
            </div>
        </div>
    );
}

export default StatsCards;
