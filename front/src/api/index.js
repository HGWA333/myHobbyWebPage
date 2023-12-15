import axios from "axios";

const request = axios.create({
  header: {
    "content-type": "application/json",
  },
});

const Test1 = async () => {
  try {
    const apiUrl = "http://localhost:8080/api/users/ag";

    console.log("Axios 요청:", apiUrl);

    const data = {
      name: "ag",
    };

    const response = await request.post(apiUrl, data);

    console.log("Axios 응답:", response);
  } catch (error) {
    console.error("Error 데이터 못가져옴:", error);
  }
};

export default Test1;
