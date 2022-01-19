import React from 'react';
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


// const data = [
//   {
//     date: '1',
//     description: 'World',
//     category: 'car',
//     amount: 10,
//   },
//   {
//     date: '2',
//     description: 'World',
//     category: 'car',
//     amount: 5,
//   },
//   {
//     date: '3',
//     description:
//       'rtyeityeut ureytuwyte etruetyieu ureyityqewtuy ueriydsfdsfdfdfdfdfdfdffdfdfdfrq',
//     category: 'car',
//     amount: 6,
//   },
//   {
//     date: '4',
//     description: 'World',
//     category: 'car',
//     amount: 7,
//   },
// ];

export default function TabletDesktopTable() {
  const token = useSelector(authSelectors.getToken);
  const transactions=useSelector(transSelectors.getTransactions);
  const dispatch = useDispatch();

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
            {transactions &&
              transactions.map(e => {
                return (
                  <BodyTr key={e.date}>
                    <DateTd>{e.date}</DateTd>
                    <td>
                      <TabletText>
                        <EllipsisText
                          text={e.description}
                          tooltip={e.description}
                          length={35}
                        />
                      </TabletText>
                      <DesktopText>
                        <EllipsisText
                          text={e.description}
                          tooltip={e.description}
                          length={60}
                        />
                      </DesktopText>
                    </td>
                    <StyledTd>{e.category}</StyledTd>
                    <StyledTd>{e.amount}$</StyledTd>
                    <StyledTd>
                      <DeleteBtn id={e.id}  onClick={e =>
                dispatch(transOperations.deleteTransaction(e.target.id,token), [dispatch])
              } >
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
