USE appointment_booking;

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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
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
    "$2y$10$6SqHWzekgrDWprWW9N8ms.q.7q9FCKBv4Y1Bono8UTdLUdWLcGDpS",
    "pat",
    "Lotsof",
    "Vomit"
);

INSERT INTO patients (user_id, date_of_birth)
VALUES (
    LAST_INSERT_ID(),
    '1000-01-01'
);

