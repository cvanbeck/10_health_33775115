USE appointment_booking;

INSERT INTO departments
    (name)
VALUES 
    ("Cardiology"),
    ("Pediatrics"),
    ("Radiology");

INSERT INTO users (email, username, hashed_password, account_type, first_name, last_name)
VALUES (
    "goldsmiths@ac.uk",
    "gold",
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
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
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
    "doctor",
    "Dr",
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
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
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
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
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
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
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
    "$2y$10$We22BggEZvgoGz/yoeVfWeL1IVmH3GJl8YfhuPZ/ccLbjmLME91BG",
    "pat",
    "Lotsof",
    "Vomit"
);

INSERT INTO patients (user_id, date_of_birth)
VALUES (
    LAST_INSERT_ID(),
    '1000-01-01'
);

