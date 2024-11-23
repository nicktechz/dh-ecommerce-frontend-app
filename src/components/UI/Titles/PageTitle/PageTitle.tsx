import styles from './PageTitle.module.css';

interface IPageTitleProps {
  title: string;
}

function PageTitle({ title }: IPageTitleProps) {
  return <h1 className={styles.page_title}>{title}</h1>;
}

export default PageTitle;
