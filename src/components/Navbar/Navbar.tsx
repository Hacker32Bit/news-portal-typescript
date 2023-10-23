import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
      <span className="logo">Carousel</span>
      <ul>
        <li className="active">Home</li>
        <li>Link</li>
        <li className="disabled">Disabled</li>
      </ul>
    </div>
  );
}
