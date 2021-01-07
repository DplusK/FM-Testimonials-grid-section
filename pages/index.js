import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-blue-background h-full w-full flex justify-center align-center">
			<Head>
				<title>Dplusk Frontend Mentor Testimonials Grid Section</title>
				<link rel="icon" href="/public/favicon.ico" />
			</Head>
			{/* <style jsx global>{`
        body, #__next {
          height:100vh;
          width:100vw;
          background-color:#EDF2F8;
        }
      `}</style> */}
			<div className="container grid grid-cols-1 lg:grid-cols-4 auto-rows-min gap-5 max-w-7xl m-auto max-h-10xl text-base px-4 py-5 lg:p-10">
				<div className="card rounded-xl text-white flex flex-col p-8 bg-violet-bg lg:col-span-2 relative overflow-hidden justify-between">
					<div className="profile flex">
						<div className="image-container mr-3 rounded-full p-0.5 bg-violet-light w-round h-round flex justify-center my-auto">
							<Image
								className="rounded-full "
								src="/image-daniel.jpg"
								alt="profile"
								width="35"
								height="35"
							/>
						</div>
						<div className="text-container h-full flex flex-col justify-center">
							<div className="name text-xl font-semibold">Daniel Clifford</div>
							<div className="title opacity-50">Verified Graduate</div>
						</div>
					</div>
					<div className="quote-title text-2xl font-semibold my-2">
						I received a job offer mid-course, and the subjects I learned were
						current, if not more so, in the company I joined. I honestly feel I
						got every penny’s worth.
					</div>
					<div className="inner-text opacity-70">
						“ I was an EMT for many years before I joined the bootcamp. I’ve
						been looking to make a transition and have heard some people who had
						an amazing experience here. I signed up for the free intro course
						and found it incredibly fun! I enrolled shortly thereafter. The next
						12 weeks was the best - and most grueling - time of my life. Since
						completing the course, I’ve successfully switched careers, working
						as a Software Engineer at a VR startup. ”
					</div>
					<div className="absolute text-4xl right-10 lg:right-20 top-0 opacity-40 quote">
						“
					</div>
				</div>

				<div className="card rounded-xl text-white flex align-center flex-col p-8 bg-blue-light justify-between">
					<div className="profile flex align-center">
						<div className="image-container mr-3 rounded-full  w-round h-round flex justify-center my-auto">
							<Image
								className="rounded-full"
								src="/image-jonathan.jpg"
								alt="profile"
								width="35"
								height="35"
							/>
						</div>
						<div className="text-container">
							<div className="name text-xl font-semibold">Jonathan Walters</div>
							<div className="title opacity-50">Verified Graduate</div>
						</div>
					</div>
					<div className="quote-title text-2xl font-semibold my-2">
						The team was very supportive and kept me motivated
					</div>
					<div className="inner-text opacity-70">
						“ I started as a total newbie with virtually no coding skills. I now
						work as a mobile engineer for a big company. This was one of the
						best investments I’ve made in myself. ”
					</div>
				</div>

				<div className="card lg:row-span-2 rounded-xl text-black flex align-center flex-col p-8 bg-white shadow-2xl justify-between">
					<div className="profile flex align-center">
						<div className="image-container mr-3 rounded-full  w-round h-round flex justify-center my-auto">
							<Image
								className="rounded-full"
								src="/image-kira.jpg"
								alt="profile"
								width="35"
								height="35"
							/>
						</div>
						<div className="text-container">
							<div className="name text-xl font-semibold">Kira Whittle</div>
							<div className="title opacity-50">Verified Graduate</div>
						</div>
					</div>
					<div className="quote-title text-2xl font-semibold my-2">
						Such a life-changing experience. Highly recommended!
					</div>
					<div className="inner-text opacity-70">
						“ Before joining the bootcamp, I’ve never written a line of code. I
						needed some structure from professionals who can help me learn
						programming step by step. I was encouraged to enroll by a former
						student of theirs who can only say wonderful things about the
						program. The entire curriculum and staff did not disappoint. They
						were very hands-on and I never had to wait long for assistance. The
						agile team project, in particular, was outstanding. It took my
						learning to the next level in a way that no tutorial could ever
						have. In fact, I’ve often referred to it during interviews as an
						example of my developent experience. It certainly helped me land a
						job as a full-stack developer after receiving multiple offers. 100%
						recommend! ”
					</div>
				</div>

				<div className="card rounded-xl text-black flex align-center flex-col p-8 bg-white shadow-2xl justify-between">
					<div className="profile flex align-center">
						<div className="image-container mr-3 rounded-full  w-round h-round flex justify-center my-auto">
							<Image
								className="rounded-full"
								src="/image-jeanette.jpg"
								alt="profile"
								width="35"
								height="35"
							/>
						</div>
						<div className="text-container">
							<div className="name text-xl font-semibold">Jeanette Harmon</div>
							<div className="title opacity-50">Verified Graduate</div>
						</div>
					</div>
					<div className="quote-title text-2xl font-semibold my-2">
						An overall wonderful and rewarding experience
					</div>
					<div className="inner-text opacity-70">
						“ Thank you for the wonderful experience! I now have a job I really
						enjoy, and make a good living while doing something I love. ”
					</div>
				</div>

				<div className="card rounded-xl text-white flex align-center flex-col p-8 bg-blue-dark lg:col-span-2 justify-between">
					<div className="profile flex align-center">
						<div className="image-container mr-3 rounded-full  w-round h-round flex justify-center my-auto">
							<Image
								className="rounded-full"
								src="/image-patrick.jpg"
								alt="profile"
								width="35"
								height="35"
							/>
						</div>
						<div className="text-container">
							<div className="name text-xl font-semibold">Patrick Abrams</div>
							<div className="title opacity-50">Verified Graduate</div>
						</div>
					</div>
					<div className="quote-title text-2xl font-semibold my-2">
						Awesome teaching support from TAs who did the bootcamp themselves.
						Getting guidance from them and learning from their experiences was
						easy.
					</div>
					<div className="inner-text opacity-70">
						“ The staff seem genuinely concerned about my progress which I find
						really refreshing. The program gave me the confidence necessary to
						be able to go out in the world and present myself as a capable
						junior developer. The standard is above the rest. You will get the
						personal attention you need from an incredible community of smart
						and amazing people. ”
					</div>
				</div>
			</div>
		</div>
	);
}
