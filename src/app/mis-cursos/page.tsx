import { CourseSanity } from 'src/types/SanityCourse';
import ElearningMisView from 'src/sections/_elearning/view/elearning-miscursos-view';

import { client } from '../utils/client';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Courses',
};

export default async  function ElearningCoursesPage() {
  const getAllCourses = async () => {
    try {
      const courses : CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      console.log('fetched Courses from sanity')
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses()
  return <ElearningMisView courses={courses}/>;
}
