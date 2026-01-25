function PageTitle({ title, classes }) {
  return (
    <h1 className={`text-[32px] font-semibold text-brand ${classes}`}>
      {title}
    </h1>
  );
}

export default PageTitle;
