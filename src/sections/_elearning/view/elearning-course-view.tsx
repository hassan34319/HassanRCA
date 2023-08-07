'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { _socials, _courses } from 'src/_mock';
import { useBoolean } from 'src/hooks/use-boolean';
import { CourseSanity } from 'src/types/SanityCourse';
import { useResponsive } from 'src/hooks/use-responsive';
import { SplashScreen } from 'src/components/loading-screen';

import ElearningNewsletter from '../elearning-newsletter';
import ElearningCourseListSimilar from '../list/elearning-course-list-similar';
import ElearningCourseDetailsHero from '../details/elearning-course-details-hero';
import ElearningCourseDetailsInfo from '../details/elearning-course-details-info';
import ElearningCourseDetailsSummary from '../details/elearning-course-details-summary';


// ----------------------------------------------------------------------


export default function ElearningCourseView({course, courses} : {course : CourseSanity , courses : CourseSanity[]})  {
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  const courseSimilar = courses.slice(-3);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <ElearningCourseDetailsHero course={course} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 15, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!mdUp && (
            <Grid xs={12}>
              <ElearningCourseDetailsInfo course={course} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <ElearningCourseDetailsSummary course={course} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>

            <Divider sx={{ my: 5 }} />

            {/* <ElearningCourseDetailsTeachersInfo teachers={_mockCourse.teachers} /> */}
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {mdUp && <ElearningCourseDetailsInfo course={course} />}

              {/* <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.course(7),
                  path: '',
                }}
              /> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* {mdUp && <Divider />} */}

      {/* <ReviewElearning /> */}

      <ElearningCourseListSimilar courses={courseSimilar} />

      <ElearningNewsletter />
    </>
  );
}