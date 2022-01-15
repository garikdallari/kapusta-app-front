import {
  StyledTd,
  DateTd,
  DeleteBtn,
  BodyTable,
  ScrollBody,
  HeadTable,
  BodyTr,
  StyledFinanceTable,
} from './FinanceTable.styled';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import EllipsisText from 'react-ellipsis-text';
const data = [
  {
    date: '1',
    description: 'World',
    category: 'car',
    amount: 10,
  },
  {
    date: '2',
    description: 'World',
    category: 'car',
    amount: 5,
  },
  {
    date: '3',
    description: 'rtyeityeut ureytuwyte etruetyieu ureyityqewtuy ueriyrq',
    category: 'car',
    amount: 6,
  },
  {
    date: '4',
    description: 'World',
    category: 'car',
    amount: 7,
  },
];

export default function FinanceTable() {
  return (
    <StyledFinanceTable>
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
            {data &&
              data.map(e => {
                return (
                  <BodyTr key={e.date}>
                    <DateTd>{e.date}</DateTd>
                    <td>
                      <EllipsisText
                        text={e.description}
                        tooltip={e.description}
                        length={30}
                      />
                    </td>
                    <StyledTd>{e.category}</StyledTd>
                    <StyledTd>{e.amount}</StyledTd>
                    <StyledTd>
                      <IconContext.Provider
                        size={14}
                        value={{ color: '#52555F' }}
                      >
                        <DeleteBtn>
                          <RiDeleteBinLine />
                        </DeleteBtn>
                      </IconContext.Provider>
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
    </StyledFinanceTable>
  );
}
