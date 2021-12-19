import { getUser } from "./../../../Services/user.service";
import notify from "./../../../Utils/helper/notifyToast";

export const fetchAndSetUserData = async (
  accessToken,
  uid,
  dispatch,
  history,
  message
) => {
  const userdata = await getUser(accessToken);

  dispatch({
    type: "UPDATE_USER_DATA",
    data: { ...userdata, accessToken, uid },
  });

  notify(message, "success");
};
