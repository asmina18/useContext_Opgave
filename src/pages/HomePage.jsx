import { useEffect } from "react";
import { ContentSection } from "../components/contentSection/ContentSection";

export const HomePage = () => {

  // Eksempel der viser Mount / unmount logik
  useEffect(() => {
    console.log("Home Page Component has Mounted")
    return (
        () => {
            console.log("Home Page Component has Un-Mounted")
        }
    )
}, [])

  return (
    <ContentSection title="Home page. Welcome">
      <h4>Here we could have a welcome to the page section</h4>
      <p>Welcom welcome</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iure
        eaque quos commodi praesentium rerum et repudiandae animi. Debitis
        maxime eum, perferendis explicabo temporibus accusantium enim ipsam
        possimus veniam est.
      </p>
    </ContentSection>
  );
};
