-- Signups table
CREATE TABLE coompany_signups (
  id BIGSERIAL,
  email VARCHAR(255) NOT NULL,
  project VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
