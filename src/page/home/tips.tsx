import { Section } from '@/components/section';
import style from './styles/tips.module.scss';
import { Accordion } from '@szhsin/react-accordion';
import { Item } from '@/components/drop-tips';

interface Cards {
  title: string;
  text: string;
}

export function Tips() {
  const cards: Cards[] = [
    {
      title: 'O que colabora para uma velhice saudável?',
      text: 'Cada fase da vida traz seus desafios e lados positivos, e isso não é diferente na melhor idade. Para que ela chegue de forma mais leve e saudável, é essencial fazer atividades físicas, se alimentar bem, cultivar vínculos com pessoas queridas, caminhar e tomar sol. Essas atividades ajudam a prevenir depressão e ansiedade nessa fase da vida.',
    },
    {
      title: 'Como recomeçar após um divórcio?',
      text: 'Se o divórcio não foi consensual, uma das partes pode sair mais fragilizada. Nesse momento, é importante buscar acolhimento junto a pessoas com quem você tenha vínculo, afastar-se temporariamente de amigos em comum, explorar novos lugares e buscar autoconhecimento através da terapia. ',
    },
    {
      title: 'O que colabora para uma velhice saudável?',
      text: 'Como a terapia pode ajudar? No ambiente terapêutico, você pode desenvolver autoconhecimento para entender qual área mais combina com você, definir metas e objetivos, criar um planejamento – inclusive financeiro – e contar com apoio psicológico para enfrentar os desafios e potencializar suas qualidades na nova carreira.',
    },
    {
      title: 'Como lidar com a ansiedade do dia a dia?',
      text: 'Pequenas práticas, como meditação, exercícios e pausas regulares, ajudam a acalmar a mente e reduzir o estresse diário. Desconectar-se das telas e, se necessário, buscar apoio terapêutico também são formas valiosas de manter o bem-estar e enfrentar a ansiedade.',
    },
  ];

  return (
    <Section classStyle={style.tipsSection}>
      <h2 className={style.tipsTitle}>Dicas</h2>

      <Accordion transition transitionTimeout={100}>
        {cards.map((c, index) => (
          <Item key={index} title={c.title} text={c.text} />
        ))}
      </Accordion>
    </Section>
  );
}
