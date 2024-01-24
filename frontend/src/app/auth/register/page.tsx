import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignupForm";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="min-h-screen w-screen p-12 grid grid-cols-2">
      <div className="rounded-[2rem] bg-black  text-white overflow-hidden py-10 px-10 text-left relative">
        <Image src="/bg-auth.jpg" alt="bg" objectFit="cover" fill />
        <div className=" relative max-w-96">
          <h2 className="text-5xl font-medium tracking-wide mb-6">
            Banking That&apos;s Always On Your Side.
          </h2>
          <p className="text-lg font-extralight tracking-wider">
            EasyPay is a transaction platform to transfer money to your friends.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  w-80 mx-auto relative h-full">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h2 className="my-5">Enter your credentials</h2>
        <SignUpForm />
        <h2 className="absolute bottom-10 font-light">
          Already have an account ?{" "}
          <Link
            href="/auth/login"
            className="text-blue-500 underline font-medium"
          >
            Login
          </Link>
        </h2>
      </div>
    </main>
  );
}
