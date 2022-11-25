import { useEffect, useState } from "react";
const getLessons = (arr) => {
  let resultArray = arr.map((element) => {
    return {
      title: element.title,
      keyPoints: element.keyPoints,
      type: element.type,
      youtube: element.youtube,
      links: element.links,
    };
  });
  return resultArray;
};

export const useCourse = () => {
  const [search, setSearch] = useState("");
  const [lessons, setLessons] = useState();
  const [error, setError] = useState({ error: false, message: "" });

  const handledBlur = (name) => {
    setSearch(name);
  };
  useEffect(() => {
    if (search !== "") {
      fetch(`https://react-course-api.azurewebsites.net/lesson/${search}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          if (data.length === 0) {
            throw new Error("Not found. Try again");
          }
          setLessons(getLessons(data));
          setError({ error: false });
        })
        .catch((error) => {
          setError({ error: true, message: error.message });
        });
    }
  }, [search]);

  return [handledBlur, lessons, error];
};
