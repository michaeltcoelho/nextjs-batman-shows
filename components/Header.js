import Link from 'next/link'

const style = {
  marginRight: 15
}

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={style}>Home</a>
      </Link>
      <Link href="/about">
        <a style={style}>About</a>
      </Link>
    </div>
  )
}

export default Header
