import { useNav } from "../hooks/useNav"

const Destinations = () => {
  const destinationRef = useNav("Destinations")

  return (
    <section ref={destinationRef} id="destinationsSection" className="secondary-section">
      <h2>Destinations</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default Destinations