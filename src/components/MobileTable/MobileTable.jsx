import React from 'react';
import Icons from '../Icons/Icons'
import EllipsisText from 'react-ellipsis-text';
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

const data = [
  {
    date: '11.04.2004',
    description: 'World',
    category: 'car',
    amount: 10000,
  },
  {
    date: '13.08.2004',
    description: 'World',
    category: 'carff',
    amount: 50000,
  },
  {
    date: '14.07.2008',
    description:
      'rtyeityeut ureytuwyte etruetyieu ureyityqewtuy ueriydsfdsfdfdfdfdfdfdffdfdfdfrq',
    category: 'sfscar',
    amount: 60000,
  },
  {
    date: '14.05.2006',
    description: 'World',
    category: 'carss',
    amount: 700000,
  },
];

export default function MobileTable() {
  return (
    <StyledMobileTable>
      <Table>
        <tbody>
          {data &&
            data.map(e => {
              return (
                <BodyTr key={e.date}>
                  <DescriptionTd>
                    <EllipsisText
                      text={e.description}
                      tooltip={e.description}
                      length={20}
                    />
                    <StyledP>
                      <Date>{e.date}</Date>
                      <Category>{e.category}</Category>
                    </StyledP>
                  </DescriptionTd>
                  <AmountTd>{e.amount} $</AmountTd>
                  <DeleteTd>
                  <DeleteBtn>
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
          {/* <BodyTr>
            <DescriptionTd></DescriptionTd>
          </BodyTr>
          <BodyTr></BodyTr>
          <BodyTr></BodyTr> */}
        </tbody>
      </Table>
    </StyledMobileTable>
  );
}
