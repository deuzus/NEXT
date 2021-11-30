import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer & Creative based in Athens, Greece. Born in 1999, still evolving. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h1 className="title">
  The {' '}
  <Link href="https://www.deuzus.com">
    <a>Project I am working on</a>
  </Link>
 </h1>
  <h2 className="title">
   The {' '}
  <Link href="https://www.amy.gr">
    <a>Company I am an Intern at</a>
  </Link>
</h2>
  <h3 className="title">
   DO NOT click {' '}
  <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    <a>this</a>
  </Link>
</h3>
<h5 className="title">
  Click{' '}
  <Link href="/posts/first-post">
    <a>This</a>
  </Link>
</h5>
        <h4 className={utilStyles.headingLg}>Blog</h4>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
