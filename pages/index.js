import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

import MyLayout from '../components/MyLayout';

// const PostLink = ({ title }) => (
//   <li>
//     <Link href={`/post?title=${title}`}>
//       <a>{title}</a>
//     </Link>
//   </li>
// )

// const PostLink = ({ id, title }) => (
//   <li>
//     <Link as={`/p/${id}`} href={`/post?id=${title}`}>
//       <a>{title}</a>
//     </Link>
//   </li>
// )

const Show = ({ show }) => (
  <li key={show.id}>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{ show.name }</a>
    </Link>
  </li>
)

const Index = (props) => {
  return (
    <MyLayout>
      <h1>Batman TV shows</h1>
      <ul>
        {props.shows.map(({ show }) => (
          <Show show={show} />
        ))}
      </ul>
      <style jsx>{`
        h1 {
          color: red;
        }
        a {
          font-size: 40px;
        }
      `}</style>
    </MyLayout>
  )
}

Index.getInitialProps = async function() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await response.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data
  }
}

export default Index
