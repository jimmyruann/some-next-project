// https://www.prisma.io/docs/guides/testing/unit-testing

import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, MockProxy } from "jest-mock-extended";

import prisma from "../lib/prisma";

jest.mock("./client", () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
	mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as MockProxy<PrismaClient>;
