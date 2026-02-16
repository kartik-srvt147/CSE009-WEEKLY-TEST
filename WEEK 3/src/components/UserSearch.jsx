import { useState, useEffect } from "react";

const UserSearch = () => {
  const usersData = [
    { id: 1, name: "Kartik" },
    { id: 2, name: "Shashwat" },
    { id: 3, name: "Utkarsh" },
    { id: 4, name: "Hitesh" },
    { id: 5, name: "Ayush" },
  ];

  const useSearch = (data, key) => {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
      const result = data.filter((item) =>
        item[key].toLowerCase().includes(query.toLowerCase()),
      );
      setFiltered(result);
    }, [query, data, key]);

    return { query, setQuery, filtered };
  };

  const { query, setQuery, filtered } = useSearch(usersData, "name");

  return (
    <div className="min-h-screen bg-gray-950 flex justify-center items-center">
      <div className="bg-sky-100/85 p-6 rounded-xl shadow w-96 border-3 border-teal-300">
        <h1 className="text-xl font-extrabold tracking-wide mb-4">
          User Directory
        </h1>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user..."
          className="w-full p-2 border border-teal-200 rounded-md mb-2 bg-gray-400/75"
        />

        <p className="text-gray-600 text-sm">
          Showing {filtered.length} of {usersData.length} users
        </p>

        <div className="mt-3 space-y-2">
          {filtered.map((user) => (
            <div key={user.id} className="p-2 bg-sky-100 rounded-lg">
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
