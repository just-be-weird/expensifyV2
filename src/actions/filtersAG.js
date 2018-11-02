// SET_TEXT_FILTER
export const setTextFilterAG = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDateAG = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmountAG = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDateAG = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDateAG = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
