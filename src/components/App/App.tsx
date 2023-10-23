import Header from "../Header";
import NewsCard from "../NewsCard";

export default function App() {
  return (
    <>
      <Header />
      <NewsCard id={1} title={"title 1"} text={"text 1"} date={"2023-08-15"} image={"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"}/>
      <NewsCard id={2} title={"title 2"} text={"text 2"} date={"2023-04-26"} image={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}/>
    </>
  );
}
