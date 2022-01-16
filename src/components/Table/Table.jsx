import {
  TableConteiner,
  TableCategory,
  Data,
  Note,
  Sum,
  Colum,
} from './Table.styled';

export default function Table({ children }) {
  return (
    <>
      <TableConteiner>
        <TableCategory>
          <Data>Дата</Data>
          <Note>Описание</Note>
          <Note>Категория</Note>
          <Sum>Сумма</Sum>
          <Colum></Colum>
        </TableCategory>
        {children}
      </TableConteiner>
    </>
  );
}
