import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../component/Loader";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/api/users";
import { toast } from "react-toastify";

const Login = () => {
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");

          const dispatch = useDispatch();
          const navigate = useNavigate();

          const [login, { isLoading }] = useLoginMutation();

          const { userInfo } = useSelector((state) => state.auth);

          const { search } = useLocation();
          const sp = new URLSearchParams(search);
          const redirect = sp.get("redirect") || "/";

          useEffect(() => {
                    if (userInfo) {
                              navigate(redirect);
                    }
          }, [navigate, redirect, userInfo]);

          const submitHandler = async (e) => {
                    e.preventDefault();

                    try {
                              const res = await login({ email, password }).unwrap();
                              dispatch(setCredentials({ ...res }));
                              navigate(redirect);
                    } catch (err) {
                              toast.error(err?.data?.message || err.error);
                    }
          };

          return (
                    <div className="flex flex-wrap px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-24">
                              <div className="w-full md:w-1/2 lg:w-[33rem] mr-auto">
                                        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

                                        <form onSubmit={submitHandler} className="w-full">
                                                  <div className="my-4">
                                                            <label
                                                                      htmlFor="email"
                                                                      className="block text-sm font-medium text-white"
                                                            >
                                                                      Email Address
                                                            </label>
                                                            <input
                                                                      type="email"
                                                                      id="email"
                                                                      className="mt-1 p-2 border rounded w-full"
                                                                      placeholder="Enter Email"
                                                                      value={email}
                                                                      onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                  </div>
                                                  <div className="my-4">
                                                            <label
                                                                      htmlFor="password"
                                                                      className="block text-sm font-medium text-white"
                                                            >
                                                                      Password
                                                            </label>
                                                            <input
                                                                      type="password"
                                                                      id="password"
                                                                      className="mt-1 p-2 border rounded w-full"
                                                                      placeholder="Enter Password"
                                                                      value={password}
                                                                      onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                  </div>

                                                  <button
                                                            disabled={isLoading}
                                                            type="submit"
                                                            className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-4 w-full"
                                                  >
                                                            {isLoading ? "Signing In ..." : "Sign In"}
                                                  </button>
                                                  {isLoading && <Loader />}
                                        </form>

                                        <div className="mt-4">
                                                  <p className="text-white">
                                                            New Customer?{" "}
                                                            <Link
                                                                      to={redirect ? `/register?redirect=${redirect}` : "/register"}
                                                                      className="text-teal-500 hover:underline"
                                                            >
                                                                      Register
                                                            </Link>
                                                  </p>
                                        </div>
                              </div>

                              <img
                                        src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="lg:h-[30rem] w-full mt-8 md:h-auto md:w-1/2 lg:w-[40rem] rounded-lg md:block"
                              />
                    </div>
          );
};

export default Login;
