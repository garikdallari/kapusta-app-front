const getTransactions = state => state.transactions.transactions;
const getSummary=state => state.transactions.summary;
const getType= state=>state.transactions.type;

const transSelectors = {
    getTransactions,
    getSummary,
    getType
};

export default transSelectors;