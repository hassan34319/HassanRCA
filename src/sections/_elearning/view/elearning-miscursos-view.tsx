'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { CourseSanity } from 'src/types/SanityCourse';

import ElearningCourseList from '../list/elearning-course-list';


// ----------------------------------------------------------------------

// console.log('hola', _courses)

export default function ElearningMisView({courses} : {courses:CourseSanity[]}) {
  const mobileOpen = useBoolean();

  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <Container>
      <Box mt={4} mb={4}> 
        <Typography variant="h2">Mis Cursos</Typography>
      </Box>
        <Stack direction={{ xs: 'column', md: 'row' }}>

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            <ElearningCourseList courses={courses} loading={loading.value} />
          </Box>
        </Stack>
      </Container>
  );
}
