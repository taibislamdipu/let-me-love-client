export default function Menu() {
  const menu = [
    { name: "Skin Care", href: "/skincare" },
    { name: "Perfume", href: "/perfume" },
    { name: "More", href: "/more" },
  ];

  return (
    <div className="flex gap-2 p-4 justify-center">
      {menu.map((item) => (
        <a
          className="bg-black text-white border px-4 py-2 rounded-full"
          key={item.name}
          href={item.href}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
