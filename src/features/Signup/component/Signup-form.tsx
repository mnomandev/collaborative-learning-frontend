import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import * as Yup from "yup";

interface SignupFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string,
}

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState<SignupFormData>({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validationSchema = Yup.object({
      fullName: Yup.string().required("Full Name is Required"),
      email: Yup.string()
        .required("Email is Required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one symbol"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required")
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors: Record<string, string> = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
      }
      setErrors(newErrors);
    }
  }
  return (

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-black">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Signup</CardTitle>
          <CardDescription>
            Enter your Details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && <div className="error">{errors.fullName}</div>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                value={formData.email}
                name="email"
                onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  required />
               {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="Confirmpassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  type="password"
                  required />
                {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div> )}
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
