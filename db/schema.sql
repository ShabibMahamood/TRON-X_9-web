CREATE TABLE IF NOT EXISTS releases (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'Single',
  date TEXT NOT NULL,
  artwork TEXT NOT NULL,
  spotify TEXT,
  apple_music TEXT,
  youtube TEXT,
  soundcloud TEXT,
  published BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  artist_name TEXT NOT NULL DEFAULT 'TRON!X 9',
  bio TEXT
);
