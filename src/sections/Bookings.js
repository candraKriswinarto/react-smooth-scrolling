import { useNav } from "../hooks/useNav"

const Bookings = () => {
  const bookingRef = useNav("Bookings")

  return (
    <section ref={bookingRef} id="bookingsSection">
      <h2>Bookings</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
    </section>
  )
}

export default Bookings