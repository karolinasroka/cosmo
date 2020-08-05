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

	return (
		<>
			{data.allStrapiAbout.edges.map(
				({ node: { companyName, aboutCompany } }) => (
					<section className="about-company">
						<h2>{companyName}</h2>
						<p>
							<ReactMarkdown source={aboutCompany} />
						</p>
					</section>
				)
			)}
		</>
	);
};

export default AboutCompany;
