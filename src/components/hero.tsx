export default function Hero({ title, subtitle }) {
  return (
    <>
      <h1 className="text-5xl">{title || null}</h1>
      <h4 className="text-2xl">{subtitle || null}</h4>
    </>
  );
}
