import { Link } from "react-router-dom";
import "./NoFoundPage.css";
export default function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <div>
        <h1>Whoops!</h1>
        <h2>404 - Page Not Found</h2>
        <p>
          It looks like you've found the mysterious land of nowhere. Fear not!
          Use the button below to guide you back to familiar territory.
        </p>
        <Link to="/" className="NotFoundLink">
          Take me home
        </Link>
      </div>
    </div>
  );
}
