import { SessionProvider } from "next-auth/react";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
