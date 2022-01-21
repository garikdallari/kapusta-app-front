import {
  Wrapper,
  WrapperElement,
  TextContainer,
  SvgContainer,
  Section,
} from './IconsReportSection.styled';
import Icons from '../Icons/Icons';
import CurrentPeriod from '../../components/Balance/CurrentPeriod';
import { theme } from '../../constants/theme';
import { Context } from '../Context/Context';
import { useEffect } from 'react';

const IconsReportSection = ({ amount }) => {
  useEffect(() => {}, [amount]);
  return (
    <>
      <Section bgColor={theme.color.buttonWhiteBg}>
        <CurrentPeriod />
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
                    {el[0] === 'extra_income' ? 'extra' : el[0]}
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
