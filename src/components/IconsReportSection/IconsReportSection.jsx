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
import convertName from '../../helpers/convertName';

const IconsReportSection = ({ amount, categoryType }) => {
  return (
    <>
      <Section bgColor={theme.color.buttonWhiteBg}>
        <IncomeExpenseToggle />
        <Wrapper elementoColor={theme.color.lightGray}>
          {amount !== undefined &&
            amount.map(({ category, amount }, idx) => (
              <WrapperElement elementColor={theme.color.lightGray} key={idx}>
                <SvgContainer
                  buttonColor={theme.color.buttonOrangeBg}
                  onClick={() => categoryType(category)}
                >
                  <TextContainer>{amount}</TextContainer>
                  <Icons
                    name={category}
                    color="currentColor"
                    width="56px"
                    height="56px"
                  />
                  <TextContainer>{convertName(category)}</TextContainer>
                </SvgContainer>
              </WrapperElement>
            ))}
        </Wrapper>
      </Section>
    </>
  );
};

export default IconsReportSection;
