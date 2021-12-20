import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<title>Pedro Barbosa</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<Head>
					<meta charSet="UTF-8" />
					<meta name="author" content="Pedro Barbosa" />
					<meta
						name="keywords"
						content="#react #nextsjs #front-end #frontend #developer #desenvolvedor # typescript #javascript"
					></meta>
					<meta name="description" content="Portifolio Pedro Barbosa" />
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/web.svg" type="image/x-icon" />

					{/* Twitter */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="⚡ Pedro Barbosa" />
					<meta name="twitter:description" content="Portifolio Pedro Barbosa" />
					<meta name="twitter:site" content="@" />
					<meta name="twitter:creator" content="@" />
					<meta name="twitter:image" content="https://pedroab.com/social.png" />

					{/* Open Graph general (Facebook, Pinterest) */}
					<meta property="og:title" content="⚡ Pedro Barbosa" />
					<meta property="og:description" content="Portifolio Pedro Barbosa" />
					<meta property="og:url" content="https://pedroab.com" />
					<meta property="og:site_name" content="pedroab.com" />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="https://pedroab.com/social.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
