import React from "react";
import "./ProductModal.css";

const ProductModal = ({ watch, onClose }) => {
  function handleClick() {
    const successMessage = document.querySelector(".success");
    successMessage.classList.add("successful");

		setTimeout(() => {
				successMessage.classList.remove('successful')
		}, 5000);
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={watch.image} alt={watch.name} className="modal-image" />
        <div className="modal-details">
          <h2>{watch.name}</h2>
          <p><strong>Model:</strong> {watch.model}</p>
          <p><strong>Year:</strong> {watch.year}</p>
          <div className="buy">
          <p><strong>Price:</strong> <span className="price">£{watch.price}</span></p>
           <button onClick={handleClick}>Buy Now</button>
          </div>
          
          <img
							onClick={onClose}
							src="/close-btn.svg"
							className="close-btn"
							alt="close-menu-btn"
						/>
          <div
				class="success"
				data-testid="test-contact-success"
				role="alert"
				aria-label="Succes message"
			>
				✅ You have purchased this watch successfully! <br /> Enjoy and come back for more!
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
