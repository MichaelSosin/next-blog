import Component from 'next'
import styles from '@/components/layout.module.css';

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{ children }</div>
}

export default Layout