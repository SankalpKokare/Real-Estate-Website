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

//book visit to residency

export const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params

    try {
        //check if already booked
        const alreadyBooked = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })


        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(400).json({ message: "This residency is already booked by you" })
        } else {
            //update if not booked 
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            })
            res.send("Your visit is booked successfully");
        }


    } catch (err) {
        throw new Error(err.message)
    }
})

//function to get all booking of a user by email

export const getAllBookings = asyncHandler(async (req, res) => {

    const { email } = req.body;
    try {
        const bookings = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })

        res.status(200).send(bookings)

    } catch (err) {
        throw new Error(err.message);
    }

})