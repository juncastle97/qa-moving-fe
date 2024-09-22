import GNB from "@/components/GNB";
import DriverGNB from "@/components/GNB/DriverGNB";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const useDriverGNB = [
    "/edit-profile-driver",
    "/my-quote-driver",
    "/mypage-driver",
    "/my-request",
  ].some((path) => router.pathname.startsWith(path));

  return (
    <QueryClientProvider client={queryClient}>
      {useDriverGNB ? <DriverGNB /> : <GNB />}
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
