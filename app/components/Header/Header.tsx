import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
	return (
		<header className="h-24 mx-10 flex items-center justify-between">
			<button className="logo">
				<Link href={"/"}>
					<Image src={"/images/logo.svg"} alt="logo" width={150} height={100} />
				</Link>
			</button>

			<button className="menu-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
					<g fill="#242D52" fill-rule="evenodd">
						<path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
					</g>
				</svg>
			</button>

		</header>
	)
}

export default Header
