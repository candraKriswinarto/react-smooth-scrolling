import { useNav } from "../hooks/useNav"

const Hotels = () => {
  const hotelRef = useNav("Hotels")

  return (
    <section ref={hotelRef} id="hotelsSection">
      <h2>Hotels</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default Hotels