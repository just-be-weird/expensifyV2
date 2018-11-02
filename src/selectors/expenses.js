//get visible expenses 
export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {//if filter returns one line then that will be the result of sort as we can't compare it with itself
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}