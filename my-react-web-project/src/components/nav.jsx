
export const Nav = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between ">
      <h1 className="text-lg font-bold">My Website</h1>
      <ul className="flex space-x-4 flex-row">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
export default Nav;