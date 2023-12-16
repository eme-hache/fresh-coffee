import { PrismaClient } from '@prisma/client'

export default async function handler (req, res) {
  try {
    const prisma = new PrismaClient()

    const categories = await prisma.category.findMany({
      include: {
        products: true,
      }
    })

    res.status(200).json(categories)
  } catch (error) {
    console.log('error')
    console.log(error)
  }
}
