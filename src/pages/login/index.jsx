import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useSignUp, } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { signUp } = useSignUp();
  const navigate = useNavigate();

  const Auth = async (e) => {
    await signUp.authenticateWithRedirect({
      strategy: `oauth_${e}`,   
      redirectUrl: "/",
    });
  };

  return (
    <div>
      <div className="container mx-auto max-w-[1300px] px-[15px]">
        <div className="flex items-center justify-center">
          <div
            className={clsx(
              styles.box,
              "shadow-gray-500  my-20 w-[900px] h-[650px] py-6 px-14"
            )}
          >
            <div className="flex items-center flex-col ">
              <h1 className="text-[28px] text-[#333]  font-bold">Login</h1>
              <p className="text-[15px] text-[#666] font-normal pt-3.5">
                Please login using account detail bellow.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-[150px_1fr] gap-10 items-center mb-4">
                <label className="text-[14px] text-[#666]" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-[13px] outline-none h-[35px] bg-[#ebebeb] py-[6px] px-[12px] text-[#495057] w-[400px]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-10 items-center mb-4">
                <label className="text-[14px] text-[#666]" htmlFor="password">
                  Password
                </label>
                <input
                  className="text-[13px] outline-none h-[35px] bg-[#ebebeb] py-[6px] px-[12px] text-[#495057] w-[400px]"
                  type="password"
                  placeholder="Password"
                />
              </div>
                <div className="flex  gap-2">
                <div
                  className=" cursor-pointer border border-gray-300 w-[220px] flex items-center justify-between p-1 rounded-2xl hover:border-gray-600 duration-500"
                  onClick={() => {
                    Auth("github");
                  }}
                >
                  <h2 className="text-[14px] text-[#666]">
                    Login with github
                  </h2>
                  <img
                    className="w-[40px] h-[40px] object-contain rounded-full"
                    src="https://avatars1.githubusercontent.com/u/9919?v=4&s=500"
                    alt=""
                  />
                </div>
                <div
                  className="cursor-pointer border border-gray-300 w-[220px] flex items-center justify-between p-1 rounded-2xl hover:border-gray-600 duration-500"
                  onClick={() => {
                    Auth("google");
                  }}
                >
                  <h2 className="text-[14px] text-[#666]">
                    Login with Google
                  </h2>
                  <img
                    className="w-[40px] h-[40px] object-contain "
                    src="https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-9 flex-col">
              <button className="bg-[#e52e06] py-[13px] px-[30px] text-[13px] rounded-4xl text-[#fff] uppercase font-semibold hover:bg-[#333] duration-300 cursor-pointer">
                Create
              </button>
              <p
                onClick={() => {
                  navigate("/");
                }}
                className="text-[#333] text-[16px] hover:text-amber-700 duration-300 cursor-pointer pt-5"
              >
                Return to Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
