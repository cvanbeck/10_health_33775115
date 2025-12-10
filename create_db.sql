CREATE DATABASE IF NOT EXISTS health;
USE health;

CREATE TABLE IF NOT EXISTS departments (
    id      INT AUTO_INCREMENT,
    name    VARCHAR(25) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
    id                  INT AUTO_INCREMENT,
    email               VARCHAR(255) UNIQUE NOT NULL,
    username            VARCHAR(255) UNIQUE NOT NULL,
    hashed_password     VARCHAR(255) NOT NULL,
    account_type        VARCHAR(6  ) NOT NULL,
    first_name          VARCHAR(255),
    last_name           VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS patients (
    user_id         INT UNIQUE NOT NULL,
    date_of_birth   DATE NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS doctors (
    user_id        INT UNIQUE NOT NULL,
    department_id  INT NOT NULL,
    availability   BIT(7) NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE IF NOT EXISTS appointments (
    id                      INT AUTO_INCREMENT,
    patient_id              INT NOT NULL,
    doctor_id               INT NOT NULL,
    time                    TIME NOT NULL,
    date                    DATE NOT NULL,
    context                 TEXT,
    is_cancelled            BOOLEAN,
    appointment_attended    BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES patients(user_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(user_id)
);


CREATE USER IF NOT EXISTS "health_app"@"localhost" IDENTIFIED BY "qwertyuiop";
GRANT ALL PRIVILEGES ON health.* TO "health_app"@"localhost"; 