import NumberInBrackets from "./NumberInBrackets";

const Poster = () => {
  const total = 90;
  let arrayIds = [];
  for (let i = 1; i <= total; i++) {
    arrayIds.push(i);
  }
  // console.log(arrayIds);
  return (
    <div className="grid grid-cols-6 gap-2 aspect-2/3">
      {arrayIds.map((item) => {
        return (
          <div
            key={item}
            className="relative aspect-square rounded-lg bg-fuchsia-500 p-1 bg-gradient-to-tl from-indigo-600 to-pink-600"
          >
            <NumberInBrackets number={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Poster;
