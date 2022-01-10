import { server } from '../config/index'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Meta/>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}