import React, { useEffect } from 'react';
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

import transOperations from '../../redux/transactions/trans-operations';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from
'../../redux/auth/auth-selectors';
import transSelectors from
'../../redux/transactions/trans-selectors';

export default function TabletDesktopTable() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  let type="expense"
  const transactions=useSelector(transSelectors.getTransactions);
  useEffect(() => dispatch(transOperations.getAllByType(type,token)),[token,type,dispatch]);

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
            {transactions.length>0 &&
              transactions.map(e => {
                return (
                  <BodyTr key={e._id} id={e._id}>
                    <DateTd>{e.date.day}.{e.date.month}.{e.date.year}</DateTd>
                    <td>
                      <TabletText>
                        <EllipsisText
                          text={e.subcategory}
                          tooltip={e.subcategory}
                          length={35}
                        />
                      </TabletText>
                      <DesktopText>
                        <EllipsisText
                          text={e.subcategory}
                          tooltip={e.subcategory}
                          length={60}
                        />
                      </DesktopText>
                    </td>
                    <StyledTd>{e.category}</StyledTd>
                    <StyledTd>{e.amount}$</StyledTd>
                    <StyledTd>
                      <DeleteBtn id={e._id}  onClick={e =>
                dispatch(transOperations.deleteTransactions(e.target.id, token), [dispatch])
              } >
                        <Icons id={e._id}
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
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
            <BodyTr></BodyTr>
          </tbody>
        </BodyTable>
      </ScrollBody>
    </StyledTable>
  );
}
