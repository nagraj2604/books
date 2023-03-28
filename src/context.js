import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { getBooks } from "./services/api.js";
import coverImg from "./images/cover_not_found.jpg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("All Books");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBooks();
      console.log(response);
      const data = response.data.items;
      if (data) {
        const newBooks = data
          .filter((book) => {
            if (searchTerm === "") {
              return book;
            } else if (
              book.volumeInfo.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return book;
            }
          })
          .map((bookSingle) => {
            const { id } = bookSingle;
            const {
              authors,
              imageLinks,
              publisher,
              publishedDate,
              title,
              description,
              pageCount,
            } = bookSingle.volumeInfo;

            return {
              id: id,
              author: authors?.[0] ?? "N/A",
              cover_img: imageLinks?.thumbnail ?? coverImg,
              edition_count: publisher,
              first_publish_year: publishedDate,
              title: title,
              description: description,
              pageCount: pageCount,
            };
          });
        setBooks(newBooks);

        if (newBooks.length >= 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  console.log(books);
  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };