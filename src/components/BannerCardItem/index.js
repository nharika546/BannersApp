import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <li key={id}>
        <h1 key={id}>{headerText}</h1>
        <p key={id}>{description}</p>
        <button>Show More</button>
      </li>
    </li>
  )
}
export default BannerCardItem
