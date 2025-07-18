import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
	useGSAP(() => {
		gsap.to("#box", {
			x: 900,
			duration: 2,
			rotation: 30,
			// ease: "elastic",
			repeat: -1,
			yoyo: true,
		});
	}, []);
	return (
		<div>
			<div id="box" className="w-[100px] h-[100px] border-4"></div>
		</div>
	);
};

export default GsapTo;
