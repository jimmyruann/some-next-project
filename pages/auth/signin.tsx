import StatusBar from "lib/components/StatusBar";
import { ArrowDownRightSquareFill, ArrowRightSquareFill } from "react-bootstrap-icons";

import { signIn, getProviders, ClientSafeProvider } from "next-auth/client";
import { GetServerSideProps } from "next";

type Signin = {
	providers: Record<string, ClientSafeProvider> | null;
};

export default function Signin({ providers }: Signin) {
	return (
		<div>
			<div className="flex h-screen flex-col">
				<div id="login_form" className="w-96 m-auto">
					<div className="grid grid-cols gap-2">
						{providers &&
							Object.keys(providers).map(function (key, index) {
								return (
									<button
										key={index}
										className="border rounded-md border-gray-300 text-center py-2 font-semibold"
										onClick={() => signIn(providers[key].id)}>
										Login with {`${providers[key].name}`}
									</button>
								);
							})}
					</div>
				</div>
				{/* <div id="signup" className="w-96 mx-auto">
					<div className="grid grid-cols-2 py-5">
						<div className="flex items-center">
							<span>Don&apos;t have an account?</span>
						</div>
						<div>
							<div className="border rounded-lg border-gray-300 text-center py-2 font-semibold">
								Sign Up
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const providers = await getProviders();

	return { props: { providers } };
};
