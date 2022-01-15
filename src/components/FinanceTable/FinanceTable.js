import {
    StyledTd,
    DateTd,
    DeleteBtn,
    BodyTable,
    ScrollBody,
    HeadTable,
    BodyTr,
    StyledFinanceTable,
    TabletText,
    DesktopText
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
      description: 'rtyeityeut ureytuwyte etruetyieu ureyityqewtuy ueriydsfdsfdfdfdfdfdfdffdfdfdfrq',
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
                      <TabletText><EllipsisText
                          text={e.description}
                          tooltip={e.description}
                          length={35}
                        /></TabletText> 
                       <DesktopText> <EllipsisText
                          text={e.description}
                          tooltip={e.description}
                          length={60}
                        /></DesktopText> 
                      </td>
                      <StyledTd>{e.category}</StyledTd>
                      <StyledTd>{e.amount}</StyledTd>
                      <StyledTd>
                        <IconContext.Provider
                          value={{ color: '#52555F', size: '18px' }}>
                          <DeleteBtn>
                            <RiDeleteBinLine/>
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
  