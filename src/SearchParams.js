import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import DropdownComponenet from "./DropdownComponent";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = DropdownComponenet("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown] = DropdownComponenet("Breed", "", breeds)

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
