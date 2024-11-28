import React from 'react';


function LoginForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'demo' && password === 'password') {
            alert('Login Successful!');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
                {error && (
                    <div className="text-red-500 mb-4">{error}</div>
                )}
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <button 
                    type="submit" 
                    className="w-full bg-green-500 text-white p-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;