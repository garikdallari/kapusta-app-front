import {
  Calculator,
  CalculatorButtons,
  Button,
  Btn,
  ModalContent,
} from '../CalcModal/CalcModal.styled';
import Calc from '../CalcModal/Calc.css';

export default function CalcModal({ active, setActive, onClick }) {
  const handleClickOverlay = e => {
    e.preventDefault();
    setActive(false);
  };
  const handleClickModal = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={active ? 'modalActive' : 'modal'}
      onClick={handleClickOverlay}
    >
      <ModalContent>
        <Calculator onClick={handleClickModal}>
          <CalculatorButtons>
            <Button onClick={() => this.props.handleClick}>
              <Btn>0</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>1</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>2</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>3</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>4</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>5</Btn>
            </Button>
            <Button>
              <Btn>6</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>7</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>8</Btn>
            </Button>
            <Button onClick={() => this.props.handleClick}>
              <Btn>9</Btn>
            </Button>
            <Button onClick={() => this.props.handleClearForm}>
              <Btn>c</Btn>
            </Button>
          </CalculatorButtons>
        </Calculator>
      </ModalContent>
    </div>
  );
}
