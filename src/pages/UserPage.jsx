import { useContext, useEffect } from "react";
import { ContentSection } from "../components/contentSection/ContentSection";
import { UserContext } from "../components/userContext";

export const UserPage = (props) => {

  const { user } = useContext(UserContext)

  return (
    <ContentSection title={props.title}>
      {
        user ?
          <div>
            <h3>Hej{user?.firstname} {user?.lastname}</h3>
            <p>Din email:{user?.email}
            </p>
            <p>
            </p> dit brugernavn:{user?.username}
          </div>
          :
          <h3>du skal være logget ind</h3>
      }
    </ContentSection>
  );
};
