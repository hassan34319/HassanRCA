import MainLayout from 'src/layouts/main';
import HomeView from 'src/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'RCA Capital',
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
