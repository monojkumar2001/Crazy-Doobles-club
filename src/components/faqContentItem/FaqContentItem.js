import { LazyLoadImage } from "react-lazy-load-image-component"

const FaqContentItem = ({img,question,answer}) => {
  return (
    <>
    <div className="faq-q-img">
        <LazyLoadImage
        src={img}
        />
    </div>
    <h4>{question}</h4>
    <p>{answer}</p>
    </>
  )
}

export default FaqContentItem