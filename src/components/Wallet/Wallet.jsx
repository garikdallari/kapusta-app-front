import { useState } from 'react';
import { HiOutlineCalculator } from 'react-icons/hi';
import { theme } from '../../constants/theme';
import { ContainerWallet } from './Wallet.styled';
import CalcModal from '../CalcModal/CalcModal';

export default function Wallet() {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setModalActive(true);
  };

  return (
    <>
      <ContainerWallet>
        <HiOutlineCalculator
          style={{
            color: theme.color.colorCalculator,
            width: '24px',
            height: '24px',
          }}
          onClick={handleClick}
        />
      </ContainerWallet>
      <CalcModal active={modalActive} setActive={setModalActive}></CalcModal>
    </>
  );
}
