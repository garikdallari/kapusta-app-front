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
  AmountTd,
  AmountHeadTd,
} from './TabletDesktopTable.styled';

import { AddMinusToAmount } from '../../helpers/addMinusToAmount';
import { addNullToNumber } from '../../helpers/monthHelpers';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';
import { getUserBalance } from '../../redux/balance/balance-operations.js';
import TransConfirmModal from '../TransConfirmModal/TransConfirmModal';
import convertName from '../../helpers/convertName';

export default function TabletDesktopTable() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const transactions = useSelector(transSelectors.getTransByType);
  const type = useSelector(transSelectors.getType);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(transOperations.getAllByType(type, token));
    dispatch(getUserBalance());
  }, [token, type, dispatch]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = e => {
    setId(e.target.id);
    setModal(true);
  };

  return (
    <StyledTable>
      <HeadTable>
        <thead>
          <tr>
            <DateTd>date</DateTd>
            <td>description</td>
            <StyledTd>category </StyledTd>
            <AmountHeadTd>amount</AmountHeadTd>
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
                      {addNullToNumber(trans.date.day)}.
                      {addNullToNumber(trans.date.month)}.{trans.date.year}
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
                    <StyledTd>{convertName(trans.category)}</StyledTd>
                    <AmountTd textColor={trans.type === 'expense' ? true : false}>
                      {AddMinusToAmount(trans.amount, trans.type)} $
                    </AmountTd>
                    <StyledTd>
                      <DeleteBtn
                        type="button"
                        id={trans._id}
                        onClick={handleClick}
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
            {transactions.length < 9 && <BodyTr></BodyTr>}
            {transactions.length < 8 && <BodyTr></BodyTr>}
            {transactions.length < 7 && <BodyTr></BodyTr>}
            {transactions.length < 6 && <BodyTr></BodyTr>}
            {transactions.length < 5 && <BodyTr></BodyTr>}
            {transactions.length < 4 && <BodyTr></BodyTr>}
            {transactions.length < 3 && <BodyTr></BodyTr>}
            {transactions.length < 2 && <BodyTr></BodyTr>}
          </tbody>
        </BodyTable>
      </ScrollBody>
      {modal && (
        <TransConfirmModal
          id={id}
          onClick={closeModal}
          text="Are you sure?"
          cancelOperation={() => setModal(prevState => !prevState)}
        />
      )}
    </StyledTable>
  );
}
