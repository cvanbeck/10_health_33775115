USE health;

INSERT INTO departments
    (name)
VALUES 
    ("Cardiology"),
    ("Phlebotomy"),
    ("Gastroenterology");

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "goldsmiths@ac.uk",
    "gold",
    "$2b$10$KLT3MBKYuMvLoyvryPn3huDEwhqpvdqZSzVx1LL4Hv49q6g7cdEn2",
    "doctor",
    "gold",
    "smiths"
);

INSERT INTO doctors (user_id, department_id, availability)
VALUES (
    LAST_INSERT_ID(),
    1,
    11
);

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "secondDoc@ac.uk",
    "Second",
    "$2b$10$tQMzC1EzqoFV53zMr7JTyOQ17bs4JO4U1w1RFMb55H23yz3yr3/4C",
    "doctor",
    "Dr.",
    "Acula"
);

INSERT INTO doctors (user_id, department_id, availability)
VALUES (
    LAST_INSERT_ID(),
    2,
    11
);

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "anotherDoc@ac.uk",
    "Third",
    "$2b$10$tQMzC1EzqoFV53zMr7JTyOQ17bs4JO4U1w1RFMb55H23yz3yr3/4C",
    "doctor",
    "Emma",
    "Royd"
);

INSERT INTO doctors (user_id, department_id, availability)
VALUES (
    LAST_INSERT_ID(),
    3,
    11
);

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "patient@ac.uk",
    "illMan",
    "$2b$10$tQMzC1EzqoFV53zMr7JTyOQ17bs4JO4U1w1RFMb55H23yz3yr3/4C",
    "pat",
    "Im",
    "Ill"
);

INSERT INTO patients (user_id, date_of_birth)
VALUES (
    LAST_INSERT_ID(),
    '1000-01-01'
);

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "anotherPatient@ac.uk",
    "badHeadache",
    "$2b$10$tQMzC1EzqoFV53zMr7JTyOQ17bs4JO4U1w1RFMb55H23yz3yr3/4C",
    "pat",
    "Help",
    "Me"
);

INSERT INTO patients (user_id, date_of_birth)
VALUES (
    LAST_INSERT_ID(),
    '1000-01-02'
);

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "oneMore@ac.uk",
    "DyingMan",
    "$2b$10$tQMzC1EzqoFV53zMr7JTyOQ17bs4JO4U1w1RFMb55H23yz3yr3/4C",
    "pat",
    "Lotsof",
    "Vomit"
);

INSERT INTO patients (user_id, date_of_birth)
VALUES (
    LAST_INSERT_ID(),
    '1000-01-01'
);

