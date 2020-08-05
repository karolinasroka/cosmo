import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import "./aboutOwner.scss";

const AboutOwner = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiAbout {
				edges {
					node {
						ownerImage {
							childImageSharp {
								fluid(maxWidth: 500) {
									...GatsbyImageSharpFluid
								}
							}
						}
						ownerName
						aboutOwner
					}
				}
			}
		}
	`);

	return (
		<>
			{data.allStrapiAbout.edges.map(
				({ node: { ownerImage, ownerName, aboutOwner } }) => (
					<section className="about-joanna" id="joanna">
						<div className="picture">
							<Img fluid={ownerImage.childImageSharp.fluid} />
						</div>
						<div className="description">
							<h2>{ownerName}</h2>
							<p>
								<ReactMarkdown source={aboutOwner} />
							</p>
						</div>
					</section>
				)
			)}
		</>
	);
};

export default AboutOwner;
