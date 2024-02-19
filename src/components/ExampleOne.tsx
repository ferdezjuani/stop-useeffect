import { useState } from "react";

interface User {
  gender: string;
  email: string;
}

const ExampleOne = () => {
  const [data, setData] = useState<User[]>([]);
  // const [url, setUrl] = useState<string>("");

  // NO HAGAS ESTO ❌
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [url]);

  // HACÉ ESTO 👌
  function fetchUsers(url: string) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex flex-row gap-4 justify-center items-center">
        <button
          className="bg-slate-700 p-2 rounded-lg text-white"
          onClick={() => fetchUsers("https://randomuser.me/api/?results=2")}
        >
          Fetch 2 random users
        </button>
        <button
          onClick={() => fetchUsers("https://randomuser.me/api/?gender=female")}
          className="bg-cyan-700 p-2 rounded-lg text-white"
        >
          Fetch female
        </button>
      </div>
      <div className="p-5 flex flex-row justify-center items-center">
        {data?.map((item, index) => (
          <div className="p-2 border" key={index}>
            <p>
              <span className="font-bold">Email: </span>
              {item.email}
            </p>
            <p>
              <span className="font-bold">Gender: </span>
              {item.gender}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExampleOne;
