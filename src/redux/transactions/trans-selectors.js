const getTransactions = state => state.transactions.transactions;
const getSummary=state => state.transactions.summary;

const transSelectors = {
    getTransactions,
    getSummary
};

export default transSelectors;