import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({Pages}) {
  let auth = localStorage.getItem('auth');
//   return auth ? <Pages /> : <Navigate to="/" />;
if(auth){
    return <Pages />
}else {
    return <Navigate to="/"/>;
}

}
