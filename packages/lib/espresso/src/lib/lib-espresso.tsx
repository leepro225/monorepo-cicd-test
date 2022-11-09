import styles from './lib-espresso.module.scss';

/* eslint-disable-next-line */
export interface LibEspressoProps {}

export function LibEspresso(props: LibEspressoProps) {
  return (
    <div className={styles['container']}>
      <h1 style={{fontSize: '24px'}}>I'm 2 Espresso Shots Component ☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️!</h1>
    </div>
  );
}

export default LibEspresso;
