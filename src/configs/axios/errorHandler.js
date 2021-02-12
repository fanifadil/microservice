import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    let mesagge;
    if (error.response) {
      if (error.response.status === 500)
        message = "Something went terribly wrong";
      else mesagge = erro.response.data.mesagge;

      if (typeof message === "string") toast.error(mesagge);

      return Promise.reject(error);
    }
  }
}
