// Real Google Maps embed (keyless "output=embed" form) for the club location.
export default function MapMock() {
  const query = 'Beogradska 15, Beograd'
  return (
    <iframe
      title={`Map showing IRONHAUS Strength Club at ${query}`}
      src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
    />
  )
}
