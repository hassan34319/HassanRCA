import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import { fDate } from 'src/utils/format-time';
import { PostSanity } from 'src/types/SanityPost';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from './post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: PostSanity;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={post.title}
        src={post.coverUrl}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{post.title}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} />
      </Stack>
    </Stack>
  );
}
