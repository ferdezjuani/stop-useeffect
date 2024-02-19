import React from "react";
import { useQuery } from "react-query";

type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
};

// Con useEffect 🤮
// const usePokemonByName = (name: string) => {
//     const [data, setData] = useState<PokemonData | null>(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         if (name) {
//           try {
//             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//             const result = await response.json();
//             setData(result);
//           } catch (error) {
//             console.error("Error fetching Pokemon data:", error);
//           }
//         } else {
//           setData(null);
//         }
//       };

//       fetchData();
//     }, [name]);

//     return { data };
//   };

const usePokemonByName = (name: string) => {
  const { data } = useQuery<PokemonData>(
    ["pokemon", name],
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      return result;
    },
    { enabled: Boolean(name) }
  );
  return { data };
};

const ExampleTwo = () => {
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const { data } = usePokemonByName(pokemonName);

  return (
    <>
      <div className="flex items-center justify-center flex-row gap-6">
        <button
          className="bg-yellow-200 p-2 rounded-lg text-black font-semibold"
          onClick={() => setPokemonName("pikachu")}
        >
          Bring Pikachu
        </button>
        <button
          className="bg-blue-200 p-2 rounded-lg text-red-600 font-semibold"
          onClick={() => setPokemonName("bulbasaur")}
        >
          Bring Bulbasaur
        </button>
      </div>
      <div className="flex flex-col p-2 items-center justify-center">
        <p className="text-slate-700 font-bold">{data?.name}</p>
      </div>
    </>
  );
};

export default ExampleTwo;
