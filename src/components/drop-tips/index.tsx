import { AccordionItem } from '@szhsin/react-accordion';
import style from './drop-tips.module.scss'

interface AccordionProps {
  header: string;
  children: React.ReactNode;
}

interface Props {
    title: string;
    text: string
}

const ItemModel = ({ header, ...rest }: AccordionProps) => (
  <AccordionItem
    {...rest}
    header={
      <>
        <h3 className={style.dropTipTitle}>{header}</h3>
        <i className="fa-solid fa-chevron-down"></i>
      </>
    }
    className={style.dropTipsItem}
    buttonProps={{
      className: ({ isEnter }) => `${style.btn} ${isEnter ? style.itemBtnExpanded : ""}`,
    }}
    contentProps={{ className: style.dropTipsContent }}
  />
);

export function Item({ title, text }: Props) {
  return (
    <ItemModel header={title}>
      <p className={style.conteudo}>
        {text}
      </p>
    </ItemModel>
  );
}
