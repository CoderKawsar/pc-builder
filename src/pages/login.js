import SectionTitle from "@/components/UI/SectionTitle";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import githubIcon from "@/assets/img/github_icon.ico";
import Image from "next/image";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to protected page if already authenticated
    if (status === "authenticated") {
      const redirect = router.query.redirect || "/"; // Default to home page if no redirect query parameter
      router.replace(redirect);
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading . . .</p>;
  }

  return (
    <div className="mt-32">
      <SectionTitle title="Login" />
      <div className="flex justify-center items-center h-48">
        {session ? (
          <p>You are already logged in as {session?.user?.name}</p>
        ) : (
          <button
            className="btn btn-primary text-white"
            onClick={() => signIn()}
          >
            <Image src={githubIcon} alt="Github" height={45} width={45} />
            Sign in using Github
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
