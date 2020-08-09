import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
		<section className="contact">
			<div className="anchor" id="kontakt"></div>
			<h2>Kontakt</h2>
			<p>{addressName}</p>
			<ul>
				<li>
					<FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
					<a href={mapsUrl}>{address}</a>
				</li>

				<li>
					<FontAwesomeIcon icon={faPhone} fixedWidth />
					<a href={"tel:" + phone}>{phone}</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faEnvelope} fixedWidth />
					<a href={"mailto:" + email}>{email}</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faFacebook} fixedWidth />
					<a href={facebookUrl}>Facebook</a>
				</li>
				<li>
					<FontAwesomeIcon icon={faInstagram} fixedWidth />
					<a href={instagramUrl}>Instagram</a>
				</li>
			</ul>
		</section>
	);
};

export default Contact;
