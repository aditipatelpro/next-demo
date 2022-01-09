import Navigation from './Navigation'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }){
  return(
    <>
      <Navigation/>
      <div className={styles.container}>
        <main className={styles.main}> {children} </main>
      </div>
    </>
  )
}