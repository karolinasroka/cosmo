require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Cosmo - Kosmetyka Estetyczna & Makijaż Permanentny`,
		description: `Cosmo to wyjątkowe, kameralne i stylowe miejsce o niepowtarzalnym klimacie, które zapewni Ci poczucie komfortu i bezpieczeństwa.`,
		author: `@karolinasroka`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.API_URL || "http://localhost:1337",
				contentTypes: ["product"],
				singleTypes: ["contact", "about"],
				queryLimit: 1000,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				short_name: `Cosmo`,
				name: `Cosmo - Kosmetyka Estetyczna & Makijaż Permanentny`,
				start_url: `/`,
				background_color: `#b28062`,
				theme_color: `#b28062`,
				display: `minimal-ui`,
				icon: `src/images/lips-square.png`,
			},
		},
		`gatsby-plugin-offline`,
	],
};
