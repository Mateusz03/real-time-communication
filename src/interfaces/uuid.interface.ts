import axios from "axios";

const Uuid_interface = async () => {
  try {
    const res = await axios.post("http://localhost:2137/uuid");

    return res.data;
    // Work with the response...
  } catch (err) {
    // Handle error
    console.log(err);
  }
};
export default Uuid_interface;
