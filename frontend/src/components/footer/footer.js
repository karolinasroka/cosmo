import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./footer.scss";

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiContact {
				edges {
					node {
						addressName
						address
						mapsUrl
						phone
						email
						facebookUrl
						instagramUrl
					}
				}
			}
		}
	`);

	return (
		<footer>
			<div className="container">
				{data.allStrapiContact.edges.map(
					({
						node: {
							addressName,
							address,
							mapsUrl,
							phone,
							email,
							facebookUrl,
							instagramUrl,
						},
					}) => (
						<>
							<section className="address">
								<div>
									<p>{addressName}</p>
								</div>
								<div>
									<a href={mapsUrl}>{address}</a>
								</div>
							</section>
							<section className="contact">
								<div>
									<a href={"tel:" + phone}>{phone}</a>
								</div>
								<div>
									<a href={"mailto:" + email}>{email}</a>
								</div>
							</section>
							<section className="socials">
								<div>
									<a href={facebookUrl}>Facebook</a>
								</div>
								<div>
									<a href={instagramUrl}>Instagram</a>
								</div>
							</section>
						</>
					)
				)}
			</div>
		</footer>
	);
};

export default Footer;
