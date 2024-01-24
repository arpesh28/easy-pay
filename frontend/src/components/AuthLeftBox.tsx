import Image from "next/image";

const AuthLeftBox = () => {
  return (
    <div className="rounded-[2rem] bg-black text-white overflow-hidden py-10 px-10 text-left relative">
      <Image
        src="/bg-auth.jpg"
        className="mt-32"
        alt="bg"
        objectFit="cover"
        fill
      />
      <div className=" relative max-w-[30rem]">
        <h2 className="text-5xl font-medium tracking-wide mb-6">
          Banking That&apos;s Always On Your Side.
        </h2>
        <p className="text-lg font-extralight tracking-wider">
          EasyPay is a transaction platform to transfer money to your friends.
        </p>
      </div>
    </div>
  );
};

export default AuthLeftBox;
