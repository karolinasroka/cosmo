import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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

	const {
		addressName,
		address,
		mapsUrl,
		phone,
		email,
		facebookUrl,
		instagramUrl,
	} = data.allStrapiContact.edges[0].node;

	return (
		<footer>
			<div className="container">
				<section className="address">
					<div>{addressName}</div>
					<div>
						<FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
						<a href={mapsUrl}>{address}</a>
					</div>
				</section>
				<section className="contact">
					<div>
						<FontAwesomeIcon icon={faPhone} fixedWidth />
						<a href={"tel:" + phone}>{phone}</a>
					</div>
					<div>
						<FontAwesomeIcon icon={faEnvelope} fixedWidth />
						<a href={"mailto:" + email}>{email}</a>
					</div>
				</section>
				<section className="socials">
					<div>
						<FontAwesomeIcon icon={faFacebook} fixedWidth />
						<a href={facebookUrl}>Facebook</a>
					</div>
					<div>
						<FontAwesomeIcon icon={faInstagram} fixedWidth />
						<a href={instagramUrl}>Instagram</a>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
