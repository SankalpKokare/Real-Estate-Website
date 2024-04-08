import asyncHandler from 'express-async-handler'
import { prisma } from "../config/prismaConfig.js"

export const createUser = asyncHandler(async (req, res) => {
    console.log("Create a user");

    let { email } = req.body;
    // Check if userexist
    const userExist = await prisma.user.findUnique({ where: { email: email } })

    if (!userExist) {

        const user = await prisma.user.create({ data: req.body });
        res.send({
            message: "User created successfully",
            user: user,
        });
    } else {
        res.status(201).send({ message: "User already registered" });
    }
})