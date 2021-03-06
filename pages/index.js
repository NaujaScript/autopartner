import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import About from '../components/About'
import Transport from '../components/Transport'
import Form from '../components/Form'
import Footer from '../components/Footer'
import IndexPage from '../components/IndexPage'

export default function Home() {
  return (
    <body className="bg-gray-900 ">
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <div>
          <IndexPage></IndexPage>
          <Nav></Nav>
          <Showcase></Showcase>
          <About></About>
          <Transport></Transport>
          <Form></Form>
          <Footer></Footer>
        </div>
      </header>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </body>
  )
}
