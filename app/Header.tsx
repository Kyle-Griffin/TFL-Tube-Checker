export default function Header() {
  return (
    <header className="header flex justify-between py-2 px-4 bg-zinc-600">
      <h2 className="header-heading text-white">TFL Tube Checker</h2>
      <h4 className="text-white text-sm self-center">
        Created by{" "}
        <a
          className="underline"
          href="https://kylegriffin.co.uk"
          title="View Kyle Griffin's Website"
          target="_blank"
        >
          Kyle Griffin
        </a>
      </h4>
    </header>
  );
}
