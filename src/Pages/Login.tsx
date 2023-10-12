import { useState } from "react";
import { BsLockFill } from "react-icons/bs";

interface user{
	username: string;
	password: string;
}

const Login = (): JSX.Element => {
	const [user, setUser] = useState<user>({username: "", password: ""});

	function handleClick() {
		console.log(user);
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	return (
		<div className="items-center flex flex-col">
			<div className="[&>*]:m-[1px]">
				<div className="flex">
					<div className="bg-gray-300 p-4 text-lg w-60">
						<label className="mr-10">Username</label>
						<label className="bg-red-600 text-white rounded-md px-2">Required</label>
					</div>
					<input className="p-4 bg-gray-100 w-72" 
            type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange}/>
				</div>
				<div className="flex">
					<div className="bg-gray-300 p-4 text-lg w-60">
						<label className="mr-10">Password</label>
						<label className="bg-red-600 text-white rounded-md px-2">Required</label>
					</div>
					<input className="p-4 bg-gray-200 w-72" 
          type="password" name="password" value={user.password} placeholder="password" onChange={handleChange} />
				</div>
			</div>
			<button className="mt-2 py-2 px-3 rounded-3xl bg-black text-white text-xl font-semibold flex items-center hover:opacity-70"
        onClick={() => handleClick()}>
				<BsLockFill size="24" className="mr-10"/>
				<label className="pr-8">Login</label>
			</button>
		</div>
	);
};

export default Login;