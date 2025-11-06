import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "@/store/slices/loginSlice/loginSliceApi";
import { adminSelector, loadingSelector, setIsAuth } from "@/store/slices/loginSlice/loginSlice";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

function AdminLoginPage() {
    const dispatch = useDispatch()
     const admin = useSelector(adminSelector)
     const loading = useSelector(loadingSelector)
     const navigate = useNavigate()

    useEffect(() => {
        dispatch(getLogin())
    }, [dispatch])
 
    const validationSchema = Yup.object({
        login: Yup.string()
            .required("Login is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long.")
            .required("Password is required"),
    });

    const initialValues = {
        login: "",
        password: "",
    };

    const handleSubmit = async(values, {resetForm}) => {
        if (values.login  === admin.login && values.password === admin.password) {
          await dispatch(setIsAuth(true))
          localStorage.setItem("isAuth", "true")

          await  navigate("/admin/dashboard")
        }
        else{
            toast.error("Login or password is false")
        }
    
       resetForm()
    };

  if (loading) return <div className="text-center py-10"><LoadingSpinner/></div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Admin Login
                </h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2.5">
                                <Label htmlFor="email">Email</Label>
                                <Field name="login">
                                    {({ field }) => (
                                        <Input
                                            {...field}
                                            id="login"
                                            type="text"
                                            placeholder="Enter your email"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="login"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <Label htmlFor="password">Password</Label>
                                <Field name="password">
                                    {({ field }) => (
                                        <Input
                                            {...field}
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <Button type="submit" className="mt-4">
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
            <Toaster />
        </div>
    );
}

export default AdminLoginPage;
