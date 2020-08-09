import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./oferta.scss";

const TestPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiProduct {
				edges {
					node {
						title
						description
						image {
							childImageSharp {
								fluid(maxWidth: 500) {
									...GatsbyImageSharpFluid
								}
							}
						}
						options {
							name
							price
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="Oferta Cosmo" />
			<main>
				{data.allStrapiProduct.edges.map(
					({ node: { title, description, options, image } }) => (
						<article className="product">
							<h2>{title}</h2>
							<div className="product-image">
								<Img fluid={image.childImageSharp.fluid} />
							</div>
							<div>
								<ReactMarkdown source={description} />
							</div>
							<div className="prices">
								<dl>
									{options.map(element => (
										<>
											<dt>{element.name}</dt>
											<dd>{element.price} zł</dd>
										</>
									))}
								</dl>
							</div>
						</article>
					)
				)}
			</main>
		</Layout>
	);
};

export default TestPage;
