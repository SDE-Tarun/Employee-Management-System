import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello Guys Form Submitted!!");
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary back"
      style={{
        backgroundImage: "url(https://i.imgur.com/WpsqQq3.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-amber-950 text-3xl text-center text-primary-foreground mb-4">
          Streamline <span className="small-text text-amber-500">Your</span> Workflow
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("Email is", email);
            console.log("Password is", password);
            setemail("");
            setpassword("");
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="text-black block text-sm font-medium text-primary-foreground"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              id="email"
              type="email"
              className=" text-black w-full px-3 py-2 placeholder-input text-primary-foreground bg-input border border-primary rounded-md focus:outline-none focus:ring ring-primary"
              placeholder="example@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-black block text-sm font-medium text-primary-foreground"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              id="password"
              type="password"
              className="text-black w-full px-3 py-2 placeholder-input text-primary-foreground bg-input border border-primary rounded-md focus:outline-none focus:ring ring-primary"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="text-amber-950 w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring ring-primary"
          >
            Login
          </button>
        </form>
        <p className="text-amber-950 text-sm text-center text-secondary-foreground mt-4">
          Don't have an account ?{" "}
          <a href="#" className="text-accent">
            <span className="small-text text-amber-500">Signup</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
