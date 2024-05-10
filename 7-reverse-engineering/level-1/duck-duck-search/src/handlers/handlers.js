import { searchQuery } from "../logic/utils.js"

export const searchHandler = () => {
    const query = document.getElementById("query").value.trim();
    searchQuery(query)
}