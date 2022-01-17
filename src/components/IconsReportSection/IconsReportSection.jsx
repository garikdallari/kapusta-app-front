import {
  Wrapper,
  WrapperElement,
  TextContainer,
  SvgContainer,
  Section,
} from './IconsReportSection.styled';
import Icons from '../Icons/Icons';
import { theme } from '../../constants/theme';

const IconsReportSection = ({ amount }) => {
  return (
    <>
      <Section bgColor={theme.color.buttonWhiteBg}>
        <Wrapper elementoColor={theme.color.lightGray}>
          {amount &&
            amount.map(({ name, price, key }) => (
              <WrapperElement key={key} elementColor={theme.color.lightGray}>
                <SvgContainer buttonColor={theme.color.buttonOrangeBg}>
                  <TextContainer>{price}</TextContainer>
                  <Icons
                    name={name}
                    color="currentColor"
                    width="56px"
                    height="56px"
                  />
                  <TextContainer>{name}</TextContainer>
                </SvgContainer>
              </WrapperElement>
            ))}
        </Wrapper>
      </Section>
    </>
  );
};

export default IconsReportSection;
