import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";

import { resolvers } from "@generated/type-graphql";
import prisma, { Context } from "lib/prisma";

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async () => {
	if (!apolloServerHandler) {
		const schema = await buildSchema({
			resolvers,
			validate: false,
		});
		apolloServerHandler = new ApolloServer({
			schema,
			playground: process.env.NODE_ENV !== "production",
			context: (): Context => ({ prisma }),
		}).createHandler({
			path: "/api/graphql",
		});
	}
	return apolloServerHandler;
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const apolloServerHandler = await getApolloServerHandler();
	return apolloServerHandler(req, res);
}
