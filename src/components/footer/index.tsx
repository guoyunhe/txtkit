import { Box, colors, Link, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const date = new Date();

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box component="footer" p={3} display="flex" fontSize="14px" color={colors.grey[700]}>
      <Box>
        &copy; {date.getFullYear()}{' '}
        <a href="https://guoyunhe.me/" style={{ color: 'inherit' }}>
          Guo Yunhe
        </a>
      </Box>
      <Box flex="1 1 auto" />
      <Stack direction="row" spacing={2}>
        <a href="https://github.com/guoyunhe/txtkit" style={{ color: 'inherit' }}>
          GitHub
        </a>
        <Link component={RouterLink} to="/privacy" color="inherit" underline="hover">
          {t('Privacy')}
        </Link>
        <Link component={RouterLink} to="/about" color="inherit" underline="hover">
          {t('About')}
        </Link>
      </Stack>
    </Box>
  );
}
