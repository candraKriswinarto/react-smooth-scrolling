import { useNav } from "../hooks/useNav"

const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection">
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default Home