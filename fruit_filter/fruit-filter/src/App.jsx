import { useMemo, useState } from "react";
import "./App.css";

function App() {

  // Fruit emojis added with AI assistance
  const fruits = [
    'apple 🍎',
    'banana 🍌',
    'grape 🍇',
    'orange 🍊',
    'mango 🥭',
    'pineapple 🍍',
    'strawberry 🍓',
    'watermelon 🍉',
    'peach 🍑',
    'cherry 🍒',
    'kiwi 🥝',
    'lemon 🍋',
    'coconut 🥥',
    'pear 🍐',
    'blueberry 🫐',
    'pomegranate 🍎',
  ];

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filter.toLowerCase());
    })
  }, [filter, fruits]);

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 class="heading">
            <span>F</span>
            <span>r</span>
            <span>u</span>
            <span>i</span>
            <span>t</span>
            <span>-</span>
            <span>F</span>
            <span>i</span>
            <span>l</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span> </span>
            <span>A</span>
            <span>p</span>
            <span>p</span>
          </h1>

          <input type="text" placeholder="Search the fruit" value={filter} onChange={handleFilterChange} />

          <ul>
            {
              filteredFruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
};

export default App;