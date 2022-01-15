import {
    SummaryTable,
    StyledTr,
    SummaryWrapper,
    HeadTd,
    MontTd
  } from './Summary.styled';
  
  export default function Summury() {
    const monthes = [
      { name: "January", amount: 10000.01 },
      { name: "February", amount: 100},
      { name: "March", amount: 10000 },
      { name: "April", amount: 10000 },
      { name: "May", amount: 10000 },
      { name: "June", amount: 10000 },
    ];
  
    return (
      <SummaryWrapper>
        <HeadTd>Summary</HeadTd>
         <SummaryTable>
          <tbody>
            {monthes.length>0&&monthes.map(month => {
              return (
                <StyledTr key={ month.name}>
                  <MontTd>{month.name}</MontTd>
                  <td>{month.amount}</td>
                  </StyledTr>
              );
            })}
          </tbody>
        </SummaryTable>
      </SummaryWrapper>
    );
  }
  