import { HiOutlineCalculator } from 'react-icons/hi';
import { theme } from '../../constants/theme';
import { ContainerWallet, ContainerBalance } from './Wallet.styled';

export default function Wallet() {
  const balance = '55000.00';
  const balanceLength = balance.length <= 8;
  return (
    <ContainerWallet>
      <ContainerBalance>
        {balance} {balanceLength && '$'}
      </ContainerBalance>
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
