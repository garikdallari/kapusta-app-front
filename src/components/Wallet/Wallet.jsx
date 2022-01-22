import { useState, useEffect } from 'react';
import { HiOutlineCalculator } from 'react-icons/hi';
import { theme } from '../../constants/theme';
import {
  ContainerWallet,
  ModalContainer,
  ModalContent,
  ButtonOpen,
} from './Wallet.styled';
import './styles.css';

export default function Wallet() {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', onOpenModalClick);
    return () => {
      window.removeEventListener('keydown', onOpenModalClick);
    };
  });

  useEffect(() => {
    window.addEventListener('keydown', onClosenModalClick);
    return () => {
      window.removeEventListener('keydown', onClosenModalClick);
    };
  });

  const onOpenModalClick = e => {
    e.preventDefault();
    openModal();
  };

  const onClosenModalClick = e => {
    e.preventDefault();
    if (e.currentTarget === e.target && e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    modalActive(false);
  };

  const openModal = () => {
    modalActive(true);
  };

  return (
    <>
      {/* modalActive && ( */}
      <ModalContainer onClick={closeModal}>
        <ModalContent>
          kjkjkmkm
          {/* <div class="container">
              <div class="calculator">
                <div class="calculator-buttons">
                  <button onClick={handleClick} name="0" class="btn span-3">
                    0
                  </button>
                  <button onClick={handleClick} name="1" class="btn">
                    1
                  </button>
                  <button onClick={handleClick} name="2" class="btn">
                    2
                  </button>
                  <button onClick={handleClick} name="3" class="btn">
                    3
                  </button>
                  <button onClick={handleClick} name="4" class="btn">
                    4
                  </button>
                  <button onClick={handleClick} name="5" class="btn">
                    5
                  </button>
                  <button onClick={handleClick} name="6" class="btn">
                    6
                  </button>
                  <button onClick={handleClick} name="7" class="btn">
                    7
                  </button>
                  <button onClick={handleClick} name="8" class="btn">
                    8
                  </button>
                  <button onClick={handleClick} name="9" class="btn">
                    9
                  </button>
                  <button onClick={handleClearForm} class="btn clear span-2">
                    C
                  </button>
                </div>
              </div>
            </div> */}
        </ModalContent>
      </ModalContainer>
      <ContainerWallet>
        <ButtonOpen type="button" onClick={onOpenModalClick}>
          <HiOutlineCalculator
            style={{
              color: theme.color.colorCalculator,
              width: '24px',
              height: '24px',
            }}
            type="button"
          />
        </ButtonOpen>
      </ContainerWallet>
      {/* ) */}
    </>
  );
}
