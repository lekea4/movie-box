import { Link } from "react-router-dom";

export default function IndexCinemas() {
  return (
    <>
      <h3>Cinema</h3>
      <Link className="btn btn-primary" to="/cinemas/create">
        Create Cinema
      </Link>
    </>
  );
}
