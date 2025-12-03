export default function TargetIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19.2c-5.5 0-10-4.2-10-9.2C2 4.2 6.5 0 12 0s10 4.2 10 9.2c0 5-4.5 9.2-10 9.2z" />
      <path d="M12 6.8a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2z" />
    </svg>
  );
}