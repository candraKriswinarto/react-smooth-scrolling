import { useNav } from "../hooks/useNav"

const Flights = () => {
  const flightRef = useNav("Flights")

  return (
    <section ref={flightRef} id="flightsSection" className="secondary-section">
      <h2>Flights</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default Flights