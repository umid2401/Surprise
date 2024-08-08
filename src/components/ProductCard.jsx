function ProductCard({image, title, about, price}) {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{about}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard