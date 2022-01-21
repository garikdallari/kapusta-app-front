import React, { useEffect, useState } from 'react';
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

import transOperations from '../../redux/transactions/trans-operations';

import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';

export default function TabletDesktopTable() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const transactions = useSelector(transSelectors.getTransactions);
  const type= useSelector(transSelectors.getType);
  // const [description, setDescription] = useState('ytyr');
  // const [category, setCategory] = useState('food');
  // const [amount, setAmount] = useState('4444');

  useEffect(
    () => dispatch(transOperations.getAllByType(type, token)),
    [dispatch, token, type],
  );

  dispatch(transOperations.createTransactions(type, "3000", "food", "water", token))

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
                      {trans.date.day}.{trans.date.month}.{trans.date.year}
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
                        onClick={e =>
                          dispatch(
                            transOperations.deleteTransactions(
                              e.target.id,
                              token,
                            ),
                          )
                        }
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
