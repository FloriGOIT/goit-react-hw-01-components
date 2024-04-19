//import PropTypes from 'prop-types'
import css from '../Statistics/Statistics.module.css'

const GetRandomHexColor = () => 
{const letters = "0123456789ABCDEF";
 let color = "#";
  for (let i = 0; i < 6; i++) {color += letters[Math.floor(Math.random() * 16)];}
  return color;}

const Statistics = ({title, stats}) => {

  return (
    <>
      <section className={css.statistics}>
       {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statlist}>
            {stats.map((statsItem) => <li key={statsItem.id} className={css.item} style={{backgroundColor : GetRandomHexColor()}}>
                                         <span className={css.label}>{statsItem.label}</span>
                                         <span className={css.percentage}>{statsItem.percentage}%</span>
                                      </li>)}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
