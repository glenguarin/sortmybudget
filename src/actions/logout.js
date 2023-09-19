// rrd imports
import { redirect } from "react-router";

// library
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  deleteItem({ key: "userName" });

  // return redirect
  toast.success("You've deleted your account");
  return redirect("/");
}
