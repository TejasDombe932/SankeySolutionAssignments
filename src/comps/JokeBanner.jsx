import { useEffect, useState } from "react";

const JokeBanner = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API error");
        }
        return res.json();
      })
      .then((data) => {
        setJoke(data.value); 
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">

      <p className="text-center text-blue-800 text-sm font-medium">
        {error
          ? "Chuck Norris jokes are unavailable right now "
          : joke}
      </p>
    </div>
  );
};

export default JokeBanner;
