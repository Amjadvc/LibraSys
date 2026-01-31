function PageTitle({ title, classes }) {
  return (
    <h1 className={`text-text-800 text-[32px] font-semibold ${classes}`}>
      {title}
    </h1>
  );
}

export default PageTitle;
