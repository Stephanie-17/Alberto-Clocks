import React from "react";
import "./Technology.css";
const Technology = () => {
	return (
		<div className="tech-container">
			<div className="tech-header">
				<h1 className="heading tech-head">The Art of Innovation</h1>
				<p className="tech-pg">
					At Alberto, we fuse centuries-old watchmaking traditions with
					cutting-edge technology. Discover the innovations that make our
					timepieces exceptional.
				</p>
			</div>

			<div className="tech-grid">
				<div class="watch-details">
					<h3>Caliber A-01 Movement</h3>
					<p>
						The heart of our watches, the Caliber A-01 is a self-winding
						mechanical movement entirely developed and manufactured by Alberto.
						It features a proprietary escapement for unparalleled precision and
						a 72-hour power reserve, ensuring reliability and performance.
					</p>
				</div>
				<img
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfGiFnaSb8jyDkTOBS1olzpVfbVLYooV5uXbgTQ7yKl2V8plA02w2mZ2duSLAnBOo0JQj32vtpQSJ4rodJc9DysQB4TA9H0gU6-3KPv40LZSzbDd9a4znDpgjoZN9xIyVdM87bhyoC71JFbe5sePWGufcefANPUJYoszZINaMNnEFazHu2YrcZUtuaUBQ4zTk7e_HUQ5JtC8T_c8df48ULmSg2556qoWXkrYw2lHWIn2QJZWhSpoRqp0y8SFVsxHyh2r1n1FUTogZX"
					alt="Watch movement diagram"
					class="watch-image"
				/>

				<img
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ67rpVDD0uHWfXJBUBd4zkwDfQXswKjPXxWSvWRe79b8ETHg9iABritZPg_i9iiLFMoZ3hcy_sKMGb_i4eq96krNjE3-haPr4IEMUswaH7FvhZT1MSgySXX_EB62wy0gP_j6Fx88NZ5mAJPPoK0IrpwDkdub_w8KpOD0eT07qNjky8cIJLsEXPHYfsBPv2h8hIxp_vHAJDwElkVGAoxuFevIBqJEmYLioTDkUWteCZEk0zggFSm9fHLTV4RGIERaxs2fgLR3lLcTS"
					alt="Close-up of a watch case made of advanced ceramic"
					class="watch-image"
				/>

				<div class="watch-details">
					<h3>Materials Science</h3>
					<p>
						We utilize advanced materials to enhance both durability and
						aesthetics. Our signature Ceratanium® case is as light as titanium
						but as hard and scratch-resistant as ceramic, finished in a striking
						matte black that defines our modern luxury aesthetic.
					</p>
					<div className="list">
						<ul className="materials-list">
							<li>
								<img src="/check-mark.png" alt="photo of checkmark" /> High-tech
								ceramic for scratch resistance
							</li>
							<li>
								<img src="/check-mark.png" alt="photo of checkmark" /> Sapphire
								crystal with anti-reflective coating
							</li>
							<li>
								<img src="/check-mark.png" alt="photo of checkmark" />{" "}
								Sustainable and ethically sourced materials
							</li>
						</ul>
					</div>
				</div>

				<div class="watch-details">
					<h3>Smart Integration</h3>
					<p>
						Bridging classic horology with modern needs. Our optional smart
						module, concealed within the clasp, provides essential connectivity
						features without compromising the timeless design of your analog
						timepiece.
					</p>
				</div>
				<img
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZYOHOLiKgFD5ULf9gIaw-Ta3rLNCy3Pawa6TDgWB62zWfWE7yenzTZ4nboWQSWj-DlnNFwG1he3E3q6l9ynJiUbTpHWyDxBszxsQpFLCM8XMlbs7VpBjyuu-SqtW0yoEPNhgph6JDWUur_LKQwtcv6gvp_HgXGxY6ZCcIOekEBedrLWBdR_jjgdRqZtTTzVAn1Gvr_iO2WCYFfgOUeS3UHIIdXjBK9ZXzAiYrxvy9fUOKY9Rfiiu2JdRRXs70qXFz1IzrG6HNKjJE"
					alt="Watch with smart features display"
					class="watch-image"
				/>
			</div>
		</div>
	);
};

export default Technology;
