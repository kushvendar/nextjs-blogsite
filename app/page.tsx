import axios from "axios";
import { PrismaClient } from "@prisma/client";


// async function getUserDetails() {
//   const response = await axios.get("http://localhost:3000/api/user")
// 	return response.data;
// }
const client=new PrismaClient()
async function getUserDetails(){
  try {
    const user= await client.signupdata.findFirst({})
    return user
  } catch (e) {
    console.log(e)
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
              <div>
              </div>
                <div>
                    Name: {userData?.username}
                </div>
                
                {userData?.password}
                hi there
            </div>
        </div>
    </div>
  );
}
