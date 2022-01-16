import { HiOutlineCalculator } from 'react-icons/hi';
import { theme } from '../../constants/theme';
import { ContainerWallet, ContainerBalance } from './Wallet.styled';

export default function Wallet() {
  const balance = '55000.00';
  return (
    <ContainerWallet>
      <ContainerBalance>{balance} UAH</ContainerBalance>
      <HiOutlineCalculator
        style={{
          color: theme.color.colorCalculator,
          width: '20px',
          height: '20px',
        }}
      />
    </ContainerWallet>
  );
}
