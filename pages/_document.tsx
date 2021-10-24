import Document, { Head, Html, Main, NextScript } from 'next/document';

const debug = false;

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head></Head>
				<body className={`preload Pinpoint ${debug ? 'debug-screens' : ''}`}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
