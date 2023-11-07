import { redirect, useNavigate } from 'react-router-dom';
    
export default function Logout() {
    
  const handleLogout = () => {
    // Simpan data pengguna ke localStorage
    redirect('/login');    
};

  return (
    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
  );
}
