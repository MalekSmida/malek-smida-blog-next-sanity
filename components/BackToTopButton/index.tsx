function BackToTopButton() {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={onScrollToTop}
      className="fixed bottom-10 right-10 inline-block cursor-pointer rounded-full border border-primary-color p-3 text-primary-color hover:bg-primary-color hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      data-testid="button-scrollToTop"
    >
      <span className="sr-only"> Back to top </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default BackToTopButton;
