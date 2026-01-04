function CategoryStrip({ changeCategory }) {
  const categories = [
    { name: "CPU", icon: "⚙️", label: "CPU" },
    { name: "GPU", icon: "🎮", label: "GPU" },
    { name: "Monitor", icon: "🖥️", label: "Monitors" },
    { name: "Storage", icon: "💾", label: "Storage" },
    { name: "PSU", icon: "⚡", label: "Power" },
    { name: "Peripherals", icon: "🎧", label: "Peripherals" },
  ];

  return (
    <section className="category" id="components">
      {categories.map((cat) => (
        <button
          key={cat.label}
          className="category-item"
          onClick={() => changeCategory(cat.name)}
        >
          <span className="category-icon">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </section>
  );
}

export default CategoryStrip;
