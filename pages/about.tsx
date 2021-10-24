import { fetchSite, Image, ISite } from '@pinpt/react';
import Page from '../components/Page';
import Social from '../components/Social';
import config from '../pinpoint.config';

interface AboutProps {
	site: ISite;
}

export default function About(props: AboutProps) {
	const { site } = props;

	return (
		<Page site={site} title="About Jeff Haynie" subtitle="A little about me">
			<div className="flex flex-col items-center">
				<Image
					src="https://cdn.pinpoint.com/jhaynie.dev/jeff.jpg"
					alt="Jeff Haynie"
					className="image-cover image-center rounded-md shadow-2xl"
					width={800}
					height={600}
				/>
				<caption className="mt-4 text-sm">In the Austin, TX headquarters of Pinpoint in 2019</caption>
			</div>
			<div className="mt-16 text-lg space-y-10 pb-20">
				<p className="leading-loose font-semibold text-2xl">
					<code>TL;DR</code>: I&apos;m a software engineer, serial entrepreneur, inventor and angel investor
				</p>
				<p className="leading-loose">
					I&apos;m currently serving as the CEO of{' '}
					<a className="!text-blue-600 underline" href="https://pinpoint.com/">
						Pinpoint
					</a>
					, a software company based in Austin, Texas, which I founded in 2017. Pinpoint is a software company
					focused on helping companies better communicate with their customers. In fact, you&apos;re using Pinpoint
					software right now. Pinpoint has raised over $16M in venture capital funding from firms such as Bessemer,
					Boldstart, Storm, Slack, Bloomberg and others.
				</p>
				<div className="flex flex-col items-center">
					<Image
						src="https://cdn.pinpoint.com/jhaynie.dev/jeff-appcelerator.jpeg"
						alt="Jeff Haynie at Appcelerator"
						className="image-cover image-center rounded-md shadow-2xl"
						width={700}
						height={425}
					/>
					<caption className="mt-4 text-sm">
						In front of the Mountain View, CA headquarters of Appcelerator in 2011
					</caption>
				</div>
				<p className="leading-loose">
					Prior to Pinpoint, I was the CEO and co-founder of{' '}
					<a className="!text-blue-600 underline" href="https://appcelerator.com">
						Appcelerator
					</a>{' '}
					which I started in 2007 with Nolan Wright. Appcelerator was acquired by{' '}
					<a className="!text-blue-600 underline" href="https://www.axway.com/">
						Axway
					</a>{' '}
					(NYSE: AXW.PA) in 2016. As part of Appcelerator, I created the popular open source project,{' '}
					<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/Appcelerator_Titanium">
						Titanium
					</a>
					. Titanium is a cross-platform mobile framework which is a predecessor to frameworks such as React
					Native. At it&apos;s peak, Titanium had over 1 million developers in its community, over 150,000
					applications in the Apple iTunes and Google Play stores and had been installed on over 500,000,000 end
					user mobile devices. In 2012, I received the Thomas Edison Innovation Award by the{' '}
					<a className="!text-blue-600 underline" href="https://www.thomasedison.org/">
						Edison Innovation Foundation
					</a>
					. At Appcelerator, I raised $100M in venture capital funding from firms such as Mayfield, Sierra, Storm,
					eBay, RedHat and others prior to exit.
				</p>
				<p className="leading-loose">
					Prior to Appcelerator, I was the CTO (and original CEO) and co-founder of Vocalocity, a
					telecommunications software company acquired in 2006. During my tenure at Vocalocity, I also was the
					co-editor of the VoiceXML standard and worked on both the{' '}
					<a className="!text-blue-600 underline" href="https://www.ietf.org/">
						Internet Engineering Task Force (IETF)
					</a>{' '}
					and{' '}
					<a className="!text-blue-600 underline" href="https://www.w3.org/">
						World Wide Web Consortium (W3C)
					</a>{' '}
					standards bodies focused on Voice and Speech standards. At Vocalocity, I raised $15M in venture capital
					funding from firms such as Sutter Hill, Imlay and others prior to exit.
				</p>
				<div className="flex flex-col items-center">
					<Image
						src="https://cdn.pinpoint.com/jhaynie.dev/edison.jpeg"
						alt="Jeff Haynie after receiving the Edison Innovation award"
						className="image-cover image-center rounded-md shadow-2xl"
						width={433}
						height={400}
					/>
					<caption className="mt-4 text-sm">
						After I was presented the Edison Innovation award in Barcelona by host Russell Brand
					</caption>
				</div>
				<p className="leading-loose">
					During the 1990&apos;s I founded two technology companies. In 1993, while attending college at Southern
					Illinois University I started a company and subsequetly dropped out. Prior to leaving, I was Student Body
					Senator and Secretary for my fraternity,{' '}
					<a className="!text-blue-600 underline" href="https://phisigmakappa.org/">
						Phi Sigma Kappa (Phi Sigs)
					</a>
					.
				</p>
				<p className="leading-loose">
					I also spent a number of years in the U.S. Navy and I am a decorated combat veteran, having served during
					the first{' '}
					<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/Gulf_War">
						Gulf War
					</a>
					. In the Navy, my primary specialty was Aviation Electronic Warfare systems and I served onboard the{' '}
					<a className="!text-blue-600 underline" href="https://www.midway.org/">
						U.S.S. Midway (CV-41)
					</a>{' '}
					and{' '}
					<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/USS_Independence_(CV-62)">
						U.S.S. Independence (CV-62)
					</a>{' '}
					as a flight deck troubleshooter.{' '}
					<span className="italic">
						Fun fact: I was medically evacuated from the Midway while in the Persian Gulf and spent a brief time
						in field hospitals in United Arab Emirates,{' '}
						<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/Diego_Garcia">
							Diego Garcia
						</a>{' '}
						and onboard the{' '}
						<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/USNS_Mercy_(T-AH-19)">
							U.S.N.S Mercy
						</a>
						.
					</span>
				</p>
				<div className="flex flex-col items-center">
					<Image
						src="https://cdn.pinpoint.com/jhaynie.dev/midway_indy.jpeg"
						alt="USS Midway and USS Independence"
						className="image-cover image-center rounded-md shadow-2xl"
						width={1000}
						height={654}
					/>
					<caption className="mt-4 text-sm">
						I was onboard during the handover of the U.S.S. Midway to the U.S.S. Independence in Pearl Harbor in
						August 1991. The Midway is now a museum in San Diego.
					</caption>
				</div>
				<p className="leading-loose">
					I started programming at a very early age (13) and taught myself on a{' '}
					<a className="!text-blue-600 underline" href="https://en.wikipedia.org/wiki/Texas_Instruments_TI-99/4A">
						TI-99/4A
					</a>{' '}
					computer. Since then, I have continued writing software for fun and profit for{' '}
					{new Date().getFullYear() - 1984} years and have enjoyed programming in Basic, C, C++, Pascal, Java,
					Python, Objective-C, JavaScript, Typescript and Golang. I&apos;ve worked on frontend, backend, mobile,
					database, distributed and embedded systems.
				</p>
				<p className="leading-loose">
					In addition to writing code and running software companies, I&apos;m focused on my family. My wife and I
					have been married {new Date().getFullYear() - 1999} years and have three wonderful adult children - Jared
					({new Date().getFullYear() - 2000}), Jack ({new Date().getFullYear() - 2002}) and Jenna (
					{new Date().getFullYear() - 2004}).
				</p>
				<div className="flex flex-col items-center">
					<Image
						src="https://cdn.pinpoint.com/jhaynie.dev/family.jpeg"
						alt="Jeff Haynie and family"
						className="image-cover image-center rounded-md shadow-2xl"
						width={1200}
						height={960}
					/>
					<caption className="mt-4 text-sm">
						Me and my family (I was just recovering from Coronavirus) in December 2020 in Austin, TX
					</caption>
				</div>
			</div>
			<div className="flex lg:!hidden items-center justify-center pb-10">
				<Social />
			</div>
		</Page>
	);
}

export async function getStaticProps() {
	const site = await fetchSite(config);

	return {
		props: {
			site,
		},
	};
}
