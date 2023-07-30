import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (status === "unauthenticated") {
      router.replace(`/login?redirect=${router.asPath}`);
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading . . .</p>;
  }

  // Render the children if authenticated
  return <>{children}</>;
};

export default PrivateRoute;
