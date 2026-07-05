import { useState } from "react";

const EMPTY_FORM = { title: "", genre: "", year: "", posterUrl: "" };

function validate(form) {
  const errors = {};

  if (!form.title.trim()) errors.title = "Title is required.";
  if (!form.genre.trim()) errors.genre = "Genre is required.";

  const yearNum = Number(form.year);
  const currentYear = new Date().getFullYear();
  if (!form.year.trim()) {
    errors.year = "Release year is required.";
  } else if (!Number.isInteger(yearNum) || yearNum < 1888 || yearNum > currentYear + 2) {
    errors.year = `Enter a year between 1888 and ${currentYear + 2}.`;
  }

  if (!form.posterUrl.trim()) {
    errors.posterUrl = "Poster URL is required.";
  } else {
    try {
      new URL(form.posterUrl.trim());
    } catch {
      errors.posterUrl = "Enter a valid URL (must start with http:// or https://).";
    }
  }

  return errors;
}

export default function AddMovieForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // clear that field's error as soon as the user starts fixing it
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      genre: form.genre.trim(),
      year: Number(form.year),
      posterUrl: form.posterUrl.trim(),
      watched: false,
    });

    setForm(EMPTY_FORM);
    setErrors({});
  }

  const fieldClass = (field) =>
    `bg-reel-surface2 border rounded-md px-3 py-2 text-sm text-reel-text placeholder:text-reel-muted focus:outline-none focus:ring-2 focus:ring-reel-amber w-full ${
      errors[field] ? "border-reel-red" : "border-reel-border"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-reel-surface border border-reel-border rounded-lg p-5 sm:p-6"
    >
      <h2 className="font-display text-2xl tracking-wideish mb-4">Add a movie</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className={fieldClass("title")}
          />
          {errors.title && <p className="text-reel-red text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Genre"
            value={form.genre}
            onChange={(e) => handleChange("genre", e.target.value)}
            className={fieldClass("genre")}
          />
          {errors.genre && <p className="text-reel-red text-xs mt-1">{errors.genre}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Release year"
            value={form.year}
            onChange={(e) => handleChange("year", e.target.value)}
            className={fieldClass("year")}
          />
          {errors.year && <p className="text-reel-red text-xs mt-1">{errors.year}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Poster URL"
            value={form.posterUrl}
            onChange={(e) => handleChange("posterUrl", e.target.value)}
            className={fieldClass("posterUrl")}
          />
          {errors.posterUrl && (
            <p className="text-reel-red text-xs mt-1">{errors.posterUrl}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 bg-reel-amber text-reel-bg font-medium text-sm px-5 py-2.5 rounded-md hover:bg-reel-amberDark transition-colors"
      >
        Add to watchlist
      </button>
    </form>
  );
}
