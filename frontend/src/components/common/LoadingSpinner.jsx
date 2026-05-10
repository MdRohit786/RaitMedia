const LoadingSpinner = ({ size = "md" }) => {
	const sizeClass = `loading-${size}`;

	return <span className={`loading loading-spinner ${sizeClass}  text-white`} />;
};
export default LoadingSpinner;