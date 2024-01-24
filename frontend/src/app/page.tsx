import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login");
}
