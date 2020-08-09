import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

import "./aboutCompany.scss";

const AboutCompany = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiAbout {
				edges {
					node {
						companyName
						aboutCompany
					}
				}
			}
		}
	`);

	const { companyName, aboutCompany } = data.allStrapiAbout.edges[0].node;

	return (
		<section className="about-company">
			<h2>{companyName}</h2>
			<ReactMarkdown source={aboutCompany} />
		</section>
	);
};

export default AboutCompany;
