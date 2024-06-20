import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/RegisterPage';
import { Login } from '../pages/LoginPage';
import { AuthProvider } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';

const MyRouter = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route index  element={<Login />} />
                    <Route  path='/register' element={<Register />} />
                    <Route  path='/dashboard' element={<Dashboard />} />
                    <Route  path='/profile' element={<h1>Profile</h1>} />
                    <Route  path='/add-tasks' element={<h1>new tasks</h1>} />
                    <Route  path='/tasks' element={<h1>Tasks page</h1>} />
                    <Route  path='/tasks/:id' element={<h1>UpdateTasks</h1>} />

                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default MyRouter;