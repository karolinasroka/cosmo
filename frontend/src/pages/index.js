import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Contact from "../components/contact/contact";
import AboutCompany from "../components/aboutCompany/aboutCompany";
import AboutOwner from "../components/aboutOwner/aboutOwner";

import "./index.scss";

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(
				relativePath: { eq: "main-logo-transparent.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO />
			<main className="start-page">
				<div className="main-logo">
					<Img fluid={data.placeholderImage.childImageSharp.fluid} />
				</div>
				<AboutCompany />
				<Contact />
				<AboutOwner />
			</main>
		</Layout>
	);
};

export default IndexPage;
