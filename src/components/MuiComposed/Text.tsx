import Typography from '@mui/material/Typography';

export default function Text({ children, ...props }) {
  return (
    <Typography color="white" {...props}>
      {children}
    </Typography>
  );
}
