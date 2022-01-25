import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icons from '../Icons/Icons';
import EllipsisText from 'react-ellipsis-text';
import { addNullToNumber } from '../../helpers/monthHelpers';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';
import { getUserBalance } from '../../redux/balance/balance-operations.js';
import { AddMinusToAmount } from '../../helpers/addMinusToAmount';
import {
  DescriptionTd,
  DeleteBtn,
  BodyTr,
  AmountTd,
  StyledMobileTable,
  Table,
  DeleteTd,
  StyledP,
  Date,
  Category,
} from './MobileTable.styled.jsx';

export default function MobileTable() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const transactions = useSelector(transSelectors.getAllTrans);
  

  useEffect(() => {
    dispatch(transOperations.listAllTransactions(token));
    dispatch(getUserBalance());
  }, [token, dispatch]);

  const OnClickDelete = e => {
    dispatch(transOperations.deleteTransactions(e.target.id, token));
    dispatch(getUserBalance());
  };

  return (
    <StyledMobileTable>
      <Table>
        <tbody>
          {transactions.length > 0 &&
            transactions.map(trans => {
              return (
                <BodyTr key={trans._id}>
                  <DescriptionTd>
                    <EllipsisText
                      text={trans.subcategory}
                      tooltip={trans.subcategory}
                      length={20}
                    />
                    <StyledP>
                      <Date>
                        {addNullToNumber(trans.date.day)}.
                        {addNullToNumber(trans.date.month)}.{trans.date.year}
                      </Date>
                      <Category>{trans.category}</Category>
                    </StyledP>
                  </DescriptionTd>
                  <AmountTd type={trans.type==="expense"?true:false}>{AddMinusToAmount(trans.amount, trans.type)} $</AmountTd>
                  <DeleteTd>
                    <DeleteBtn
                      type="button"
                      id={trans._id}
                      onClick={OnClickDelete}
                    >
                      <Icons
                        name="delete"
                        color="#52555F"
                        width="18px"
                        height="18px"
                      />
                    </DeleteBtn>
                  </DeleteTd>
                </BodyTr>
              );
            })}
        </tbody>
      </Table>
    </StyledMobileTable>
  );
}
