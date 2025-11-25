USE appointment_booking;

INSERT INTO departments (name)
VALUES (
    "Cardiology"
);

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


INSERT INTO appointments(
    patient_id,
    doctor_id,
    time,
    date
) VALUES (
    2,
    1,
    '11:11:11',
    '1000-01-01'
);