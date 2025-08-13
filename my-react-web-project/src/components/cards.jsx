

 const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="bg-white hover:bg-gray-100 p-4 rounded shadow">
        <h3 className="font-bold">Card Title 1</h3>
        <p>Card content goes here.</p>
      </div>
      <div className="bg-white hover:bg-gray-100 p-4 rounded shadow">
        <h3 className="font-bold">Card Title 2</h3>
        <p>Card content goes here.</p>
      </div>
      <div className="bg-white hover:bg-gray-100 p-4 rounded shadow">
        <h3 className="font-bold">Card Title 3</h3>
        <p>Card content goes here.</p>
      </div>
      <div className="bg-white hover:bg-gray-100 p-4 rounded shadow">
        <h3 className="font-bold">Card Title 4</h3>
        <p>Card content goes here.</p>
      </div>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
        <h3 className="font-bold">Card Title 4</h3>
        <p>Card content goes here.</p>
      </div>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
        <h3 className="font-bold">Card Title 4</h3>
        <p>Card content goes here.</p>
      </div>
    </div>
  )
}
export default Cards