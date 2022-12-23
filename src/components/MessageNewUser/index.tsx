import React, { useState } from "react";
import { MessageNewUserComponent } from "../../stories/MessageNewUser/MessageNewUser.stories";

export const CreateMessage = () => {
  const [showMsg, setshowMsg] = useState(true);
  return (
    <>
      {showMsg ? (
        <div>
          <MessageNewUserComponent
            onClick={(showMsg) => setshowMsg(!showMsg)}
          />
        </div>
      ) : null}
    </>
  );
};
