# Database Design

## Users Table

The `users` table represents all authenticated staff members of the clinic.

Examples include:

* Owner
* Doctor
* Receptionist
* Nurse
* Accountant
* Inventory Manager
* Assistant

Patients are **not** stored in this table because they are medical records, not authenticated users.

### Design Principles

* The `users` table stores authentication and profile information only.
* Roles and permissions will be implemented using separate tables.
* Payroll will be implemented as a separate feature.
* Departments and schedules will be implemented separately when needed.
* The table is intentionally kept small and focused to improve maintainability and scalability.

### Future Features

The following features will extend the system without modifying the `users` table significantly:

* Roles & Permissions
* Payroll
* Departments
* Work Schedules
* Notifications
* Activity Logs
