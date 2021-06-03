import Meta from '../components/meta';
import Navbar from '../components/navbar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta/>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}