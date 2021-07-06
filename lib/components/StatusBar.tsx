import { ChevronDown } from "react-bootstrap-icons";

export default function StatusBar() {
	return (
		<div className="w-full bg-gray-800">
			<div className="container mx-auto">
				<div className="flex justify-between py-3">
					<h1 className="capitalize text-gray-300">Free shipping on all orders over $50</h1>

					<div className="grid grid-cols-2 text-gray-400 justify-items-center">
						<div>
							<a className="flex items-center" href="#">
								<span className="pr-2">AUD</span> <ChevronDown size="10" />
							</a>
						</div>
						<div>
							<a className="flex items-center" href="#">
								<span className="pr-2">My Account</span> <ChevronDown size="10" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
