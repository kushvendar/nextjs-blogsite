import axios from "axios";
import Signup from "./signup/page";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
              {/* <div>
                This data is going from sigup route to api/user backend
                and then to the neon db database and coming back 
                to the same / path and being displayed
              </div>
                <div>
                    Name: {userData?.username}
                </div>
                
                {userData?.password} */}
                hi there
            </div>
        </div>
    </div>
  );
}
