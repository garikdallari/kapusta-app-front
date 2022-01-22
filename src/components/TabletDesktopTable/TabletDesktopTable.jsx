import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icons from '../Icons/Icons';
import EllipsisText from 'react-ellipsis-text';
import {
  StyledTd,
  DateTd,
  DeleteBtn,
  BodyTable,
  ScrollBody,
  HeadTable,
  BodyTr,
  StyledTable,
  TabletText,
  DesktopText,
} from './TabletDesktopTable.styled';
import { addNullToNumber } from '../../helpers/monthHelpers';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';

export default function TabletDesktopTable() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
 const transactions = useSelector(transSelectors.getTransactions);
  const type= useSelector(transSelectors.getType);

  const OnClickDelete=(e)=>{
  dispatch(transOperations.deleteTransactions(e.target.id,token));
  dispatch(transOperations.getBalanceBy6Month(type,token));
 }

  useEffect(
    () => dispatch(transOperations.getAllByType(type, token)),
    [token, type, dispatch],
  );
  return (
    <StyledTable>
      <HeadTable>
        <thead>
          <tr>
            <DateTd>date</DateTd>
            <td>description</td>
            <StyledTd>category </StyledTd>
            <StyledTd>amount</StyledTd>
            <StyledTd>&nbsp;</StyledTd>
          </tr>
        </thead>
      </HeadTable>
      <ScrollBody>
        <BodyTable>
          <tbody>
            {transactions.length > 0 &&
              transactions.map(trans => {
                return (
                  <BodyTr key={trans._id} id={trans._id}>
                    <DateTd>
                      {addNullToNumber(trans.date.day)}.{addNullToNumber(trans.date.month)}.
                      {trans.date.year}
                    </DateTd>
                    <td>
                      <TabletText>
                        <EllipsisText
                          text={trans.subcategory}
                          tooltip={trans.subcategory}
                          length={35}
                        />
                      </TabletText>
                      <DesktopText>
                        <EllipsisText
                          text={trans.subcategory}
                          tooltip={trans.subcategory}
                          length={60}
                        />
                      </DesktopText>
                    </td>
                    <StyledTd>{trans.category}</StyledTd>
                    <StyledTd>{trans.amount}$</StyledTd>
                    <StyledTd>
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
                    </StyledTd>
                  </BodyTr>
                );
              })}
            <BodyTr>
              <StyledTd></StyledTd>
            </BodyTr>
          {transactions.length<9&&<BodyTr></BodyTr>}
          {transactions.length<8&&<BodyTr></BodyTr>}
          {transactions.length<7&&<BodyTr></BodyTr>}
          {transactions.length<6&&<BodyTr></BodyTr>}
          {transactions.length<5&&<BodyTr></BodyTr>}
          {transactions.length<4&&<BodyTr></BodyTr>}
          {transactions.length<3&&<BodyTr></BodyTr>}
          {transactions.length<2&&<BodyTr></BodyTr>}
             </tbody>
        </BodyTable>
      </ScrollBody>
    </StyledTable>
  );
}
