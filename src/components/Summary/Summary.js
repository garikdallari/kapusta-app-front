import {
    SummaryTable,
    StyledTr,
    SummaryWrapper,
    HeadTd
  } from './Summary.styled';
  
  export default function Summury() {
    const monthes = [
      { name: "January", amount: 10000 },
      { name: "February", amount: 10000 },
      { name: "March", amount: 10000 },
      { name: "April", amount: 10000 },
      { name: "May", amount: 10000 },
      { name: "June", amount: 10000 },
    
    ];
  
    return (
      <SummaryWrapper>
        <SummaryTable>
          <thead>
            <StyledTr>
              <HeadTd colspan="2">Summary</HeadTd>
           </StyledTr>
          </thead>
  
          <tbody>
            {monthes.map(month => {
              return (
                <StyledTr key={ month.name}>
                  <td>{month.name}</td>
                  <td>{month.amount}</td>
                  </StyledTr>
              );
            })}
          </tbody>
        </SummaryTable>
      </SummaryWrapper>
    );
  }
  