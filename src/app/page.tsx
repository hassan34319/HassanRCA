import { getServerSession } from "next-auth/next"

import MainLayout from 'src/layouts/main';
import authOptions from "src/app/utils/authOptions"
import HomeView from 'src/sections/_elearning/view/elearning-landing-view';


// ----------------------------------------------------------------------

export const metadata = {
  title: 'RCA Capital',
};

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
