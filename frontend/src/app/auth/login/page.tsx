import AuthLeftBox from "@/components/AuthLeftBox";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen w-screen p-12 grid grid-cols-2">
      <AuthLeftBox />
      <div className="flex flex-col items-center justify-center  w-80 mx-auto relative h-full">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h2 className="my-5">Enter your credentials</h2>
        <LoginForm />
        <h2 className="absolute bottom-10 font-light">
          Don&apos;t have an account ?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 underline font-medium"
          >
            Register
          </Link>
        </h2>
      </div>
    </main>
  );
}
