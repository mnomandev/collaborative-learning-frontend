import { SignupForm } from "../component/Signup-form"

export default function SignupPage() {
  return (
    <div className="my-9 flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
