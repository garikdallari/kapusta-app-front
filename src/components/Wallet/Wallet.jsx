import { HiOutlineCalculator } from 'react-icons/hi';
import { theme } from '../../constants/theme';
import { ContainerWallet } from './Wallet.styled';

export default function Wallet() {
  return (
    <ContainerWallet>
      <HiOutlineCalculator
        style={{
          color: theme.color.colorCalculator,
          width: '24px',
          height: '24px',
        }}
      />
    </ContainerWallet>
  );
}
