import styles from './milk.module.scss';

/* eslint-disable-next-line */
export interface MilkProps {}

export function Milk(props: MilkProps) {
  return (
    <div className={styles['container']}>
      <h1 style={{fontSize: '24px'}}>🍉 Milk only in Latte 🥛!</h1>
    </div>
  );
}

export default Milk;
