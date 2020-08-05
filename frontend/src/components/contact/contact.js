import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./contact.scss";

const Contact = () => {
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
		<>
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
					<section className="contact">
						<div className="anchor" id="kontakt"></div>
						<h2>Kontakt</h2>
						<p>{addressName}</p>
						<p>
							<a href={mapsUrl}>{address}</a>
						</p>
						<p className="number">
							<a href="tel:+48696767818">{phone}</a>
						</p>
						<p className="mail">
							<a href="mailto:info@cosmopila.pl">{email}</a>
						</p>
						<p>
							<a href={facebookUrl}>Facebook</a>
						</p>
						<p>
							<a href={instagramUrl}>Instagram</a>
						</p>
					</section>
				)
			)}
		</>
	);
};

export default Contact;
