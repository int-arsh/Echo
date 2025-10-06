import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html>
				<body>
					<div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
						<Navbar />
					</div>
					<div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
						{children}
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}