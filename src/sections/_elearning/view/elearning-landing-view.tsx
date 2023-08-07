'use client';

import {
  _members,
  _courses,
  _brandsColor,
  _coursePosts,
} from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <ElearningOurClients brands={_brandsColor} />

      <ElearningLandingFeaturedCourses courses={_courses} />

      <ElearningTeam members={_members.slice(0, 4)} />

      {/* <ElearningTestimonial testimonials={_testimonials} /> */}

      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />

      <ElearningNewsletter />

    </>
  );
}
