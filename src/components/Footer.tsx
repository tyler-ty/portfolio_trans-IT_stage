import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const createdYear:number = 2025
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
      <div className="container mx-auto flex flex-row items-center justify-center px-4">

        <p className="text-sm text-center">
          &copy; {createdYear}{createdYear < new Date().getFullYear() ? -new Date().getFullYear() : ""} Tyler Imagbudu's Stage Portfolio. Alle rechten voorbehouden 
        </p>
        <Link className="ml-1.5" to="https://github.com/tyler-ty/portfolio_trans-IT_stage"><FaGithub/></Link>
        </div>
    </footer>
  );
}
