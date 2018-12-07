import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import MyLayout from '../components/MyLayout'

// const Content = withRouter(({ router }) => (
//     <div>
//         <h1>{router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </div>
// ))

// const Page = (props) => (
//     <MyLayout>
//         <Content />
//     </MyLayout>
// )

// export default Page

const Post = ({ show }) => (
  <MyLayout>
    <h1>{ show.name }</h1>
    <p>{ show.summary.replace(/<[/]?p>/g, '') }</p>
    <img src={show.image.medium} />
  </MyLayout>
)

Post.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await response.json()
  console.log(`Fetched show: ${show.name}`)
  return { show }
}

export default Post
