import Link from "next/link";

// put in this list the links to the components
const urlDevPaths = [
  "/dev/template/basetemplate",

  "/dev/buttons/favorites_button",
  "/dev/buttons/search_button",
  "/dev/buttons/add_rem_button",
  "/dev/buttons/close_button",

  "/dev/inputs/search_input",
  "/dev/icons/tdt_icon",
  "/dev/headers/main_header",

  "/dev/layouts/main_layout",
  "/dev/layouts/movies_grip",
  "/dev/layouts/movie_details",
  "/dev/layouts/info_data",

  "/dev/cards/movie_card",

  "/dev/modals/not_found_movie_modal",
  "/dev/modals/loading_modal",
  "/dev/modals/empty_favorites",
  "/dev/modals/loading_app",

];

export default function Home() {
  return (
    <article style={{ height: "100vh", padding: "1rem 1.5rem" }}>
      <h1>Componets Suite</h1>
      <ul
        style={{
          height: "80vh",
          padding: "1rem 1rem 1rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flexWrap: "wrap",
          overflow: "auto",
        }}
      >
        {urlDevPaths.map((urlDevPath, index) => (
          <li
            key={index}
            style={{marginRight: "2rem",width: "fit-content"}}
            onMouseOver={(e) => {e.currentTarget.style.background = "#f5f5f5"}}
            onMouseOut={(e) => {e.currentTarget.style.background = "white"}}
          >
            <Link href={urlDevPath}>{urlDevPath}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
