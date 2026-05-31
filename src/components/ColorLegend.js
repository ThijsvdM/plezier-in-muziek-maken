"use client";

export default function ColorLegend({ title, items }) {
  return (
    <div className="card mt-6">
      <h3 className="text-lg font-bold mb-4">
        🎨 {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: item.color }}
            />

            <div>
              <div className="font-bold">{item.note}</div>
              <div className="text-sm text-gray-500">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}