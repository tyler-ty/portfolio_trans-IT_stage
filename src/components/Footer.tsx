export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
      <div className="container mx-auto flex flex-col items-center px-4">

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Tyler Imagbudu's Stage Portfolio. Alle rechten voorbehouden.
        </p>
        </div>
    </footer>
  );
}
