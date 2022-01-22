import {
  Wrapper,
  WrapperElement,
  TextContainer,
  SvgContainer,
  Section,
} from './IconsReportSection.styled';
import Icons from '../Icons/Icons';
import IncomeExpenseToggle from '../../components/Balance/IncomeExpenseToggle';
import { theme } from '../../constants/theme';
// import { useEffect } from 'react';

const IconsReportSection = ({ amount }) => {
  return (
    <>
      <Section bgColor={theme.color.buttonWhiteBg}>
        <IncomeExpenseToggle />
        <Wrapper elementoColor={theme.color.lightGray}>
          {amount &&
            amount.map(el => (
              <WrapperElement elementColor={theme.color.lightGray}>
                <SvgContainer buttonColor={theme.color.buttonOrangeBg}>
                  <TextContainer>{el[1]}</TextContainer>
                  <Icons
                    name={el[0]}
                    color="currentColor"
                    width="56px"
                    height="56px"
                  />
                  <TextContainer>
                    {el[0] === 'utility_bills' ? 'bills' : el[0]}
                  </TextContainer>
                </SvgContainer>
              </WrapperElement>
            ))}
        </Wrapper>
      </Section>
    </>
  );
};

export default IconsReportSection;
