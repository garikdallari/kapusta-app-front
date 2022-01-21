const getTransactions = state => state.transactions.transactions;
const getSummary = state => state.transactions.summary;
const getAllByMonth = state => state.transactions.allByMonth;
const getType = state => state.transactions.type;

const transSelectors = {
  getTransactions,
  getSummary,
  getAllByMonth,
  getType
};
export default transSelectors;
