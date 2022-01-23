const getTransByType = state => state.transactions.byType;
const getAllTrans = state => state.transactions.all;
const getSummary = state => state.transactions.summary;
const getAllByMonth = state => state.transactions.allByMonth;
const getType = state => state.transactions.type;

const transSelectors = {
  getTransByType,
  getAllTrans,
  getSummary,
  getAllByMonth,
  getType,
};
export default transSelectors;
