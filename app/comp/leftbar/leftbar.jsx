// components/Leftbar.js
const Leftbar = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
  ];

  return (
    <div className="flex flex-col gap-2 p-2">
      <h1 className="text-lg font-bold mb-1 ml-1">Top</h1>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-12 bg-gray-100 rounded-md shadow-md"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Leftbar;
