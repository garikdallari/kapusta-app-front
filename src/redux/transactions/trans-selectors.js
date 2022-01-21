const getTransactions = state => state.transactions.transactions;
const getSummary = state => state.transactions.summary;
const getAllByMonth = state => state.transactions.allByMonth;

const transSelectors = {
  getTransactions,
  getSummary,
  getAllByMonth,
};

export default transSelectors;
