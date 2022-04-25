// components/layout.js
import Navbar from './navbar'
import About from './about'

export default function Layout({ children }) {
  return (
    <>
        <Navbar />

        <main>{children}</main>
    </>

  )
}