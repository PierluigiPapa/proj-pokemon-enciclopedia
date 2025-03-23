export function Header() {

  return (
    <>
     <header className="bg-rosso font-pokemon text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">EncicloPokéMon</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:underline font-medium">Home</a>
              </li>
              <li>
                <a href="/" className="hover:underline font-medium">Info</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>


  );
}
