function Avatar({ src, alt }) {
  return (
    <img
      src={src || '/avatar-default.svg'}
      alt={alt}
      className="h-10 w-10 rounded-full bg-slate-100 object-cover"
    />
  );
}

export default Avatar;
