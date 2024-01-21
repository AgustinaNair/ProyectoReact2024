const Product = (props) => {
  return (
    <div>
        <h1>{props.text}</h1>
        <img src={props.img} alt="saludo" />
    </div>
  )
}

export default Product