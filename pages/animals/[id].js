import { query } from '../lib/db';

export async function getStaticPaths() {
  // Fetch all animal IDs from the database
  const result = await query('SELECT id FROM animals');
  const paths = result.rows.map((animal) => ({
    params: { id: animal.id.toString() }, // Convert to string for Next.js
  }));

  return { paths, fallback: 'blocking' }; // 'blocking' will build pages on demand
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // Fetch specific animal data based on the ID
  const result = await query('SELECT * FROM animals WHERE id = $1', [id]);

  if (result.rows.length === 0) {
    return { notFound: true }; // Handle 404 if the animal doesn't exist
  }

  const animal = result.rows[0];

  return {
    props: { animal }, // Pass animal data to the page
    revalidate: 60, // Rebuild the page every 60 seconds
  };
}

export default function AnimalPage({ animal }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{animal.name}</h1>
      <p className="text-lg">Species: {animal.species}</p>
      <p className="text-lg">Breed: {animal.breed}</p>
      <p className="text-lg">Age: {animal.age}</p>
      <p className="mt-4">{animal.description}</p>
      <img
        src="https://media.istockphoto.com/id/1482199015/photo/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ACqzLeU69k4_SEPvQvdYgwjhcta5v2WxeqUIg1uMoDc="
        alt={animal.name}
        className="mt-4 rounded-lg shadow-lg w-96"
      />
    </div>
  );
}
