import style from './section.module.scss';

interface Props {
    children?: React.ReactNode;
    classStyle?: string;
    idElement?: string;
}

export function Section({ children, classStyle, idElement }: Props) {
    return (
        <section className={`${classStyle} ${style.section}`} id={idElement}>
            {children}
        </section>
    )
}