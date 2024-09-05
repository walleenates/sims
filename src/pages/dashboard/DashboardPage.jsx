import { useAuth } from "../../lib/authContext"

export default function DashboardPage() {
  const auth = useAuth()
  
  if(auth.currentUser ){
    console.log("bobo kint auth")
  }

  return (
    <div>DashboardPage
      <div className="div">
        {auth.currentUser && "BOBO kint"}
      </div>
    </div>
  )
}
