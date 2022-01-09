import headerStyles from '../styles/Header.module.css'

export default function Layout({ children }){
  return(
    <div>
      <h1 className={headerStyles.title}>
        <span> Newz </span> Blog
      </h1>
      <p className={headerStyles.description}>
        Web development News
      </p>
    </div>
  )
}