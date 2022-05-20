import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const prisma = new PrismaClient()
        const order = await prisma.order.create({
            data: {
                name: req.body.userName,
                total: req.body.total,
                date: req.body.date,
                order: req.body.order,
            }
        })

        res.status(201).json(order)
    }
} 