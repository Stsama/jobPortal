import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CommonLayout from "@/components/common-layout";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IZZIJOB | find a job that suits you",
  description: "IZZIJOB is a plaftorm where you can find jobs that fit your criteria",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className} >
          <Suspense fallback={<Loading />}>
            <CommonLayout
              attribute="class"
              defaultTheme="system"
              children={children}
            />
          </Suspense>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
