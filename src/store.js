export const initialStore = () => ({
  favorites: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav => fav.name !== action.payload.name
        )
      };

    case "CLEAR_FAVORITES":
      return {
        ...store,
        favorites: []
      };

    default:
      return store;
  }
}
