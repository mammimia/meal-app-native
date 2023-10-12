const { createContext, useState } = require('react');

export const FavoritesContext = createContext({
  ids: [],
  toggleFavorite: (id) => {}
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function toggleFavorite(id) {
    if (favoriteMealIds.includes(id)) {
      setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
    } else {
      setFavoriteMealIds((prev) => [...prev, id]);
    }
  }

  function isFavorite(id) {
    return favoriteMealIds.includes(id);
  }

  const context = {
    ids: favoriteMealIds,
    toggleFavorite,
    isFavorite
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
