// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create artists and songs
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Artist 1',
      songs: {
        create: [
          {
            name: 'Song 1 by Artist 1',
          },
          {
            name: 'Song 2 by Artist 1',
          },
        ],
      },
    },
    include: {
      songs: true,
    },
  });

  const artist2 = await prisma.artist.create({
    data: {
      name: 'Artist 2',
      songs: {
        create: [
          {
            name: 'Song 1 by Artist 2',
          },
        ],
      },
    },
    include: {
      songs: true,
    },
  });

  console.log({ artist1, artist2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
