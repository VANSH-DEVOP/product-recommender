function ProductCard({ product, reason }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>{product.name}</h3>

      <p>
        <strong>Brand:</strong> {product.brand}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      {reason && (
        <p>
          <strong>Why AI recommended this:</strong>
          <br />
          {reason}
        </p>
      )}
    </div>
  );
}

export default ProductCard;