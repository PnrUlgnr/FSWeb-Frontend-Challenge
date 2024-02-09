import axios from "axios";

const postDataToMockService = (data) => {
  return axios.post("https://reqres.in/api", data);
};

postDataToMockService({ language: "en" })
  .then((response) => {
    console.log("Data posted successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error posting data:", error);
  });

export default postDataToMockService;
