# Secure File Storage System

## Team Members
1. Keshav Kabra(22bcs052)
2. Kunal Sharma(22bcs058)
3. Anish Raja(22bcs012)
4. Ketan Sharma(22bcs053)
   
## Overview
The Secure File Storage System is a web application designed to securely store sensitive files. Built with a robust full-stack setup, the application ensures files are encrypted on the client side using AES encryption. This way, only authorized users with the correct decryption key can access stored files, maintaining the highest level of data confidentiality.

## Target
The **Secure File Storage System** targets users who need a safe platform for uploading, storing, and retrieving files with enhanced privacy. Key goals include:

- **Ensuring Confidentiality**: Files are encrypted with AES on the client side, preventing unauthorized access to file contents.
- **Enabling Secure File Sharing**: The platform allows users to share files securely with specific individuals, controlled by access keys.
- **Protecting User Data**: Access to files is limited to verified users, protecting data integrity.
- **Preventing Data Tampering and Breaches**: AES encryption, combined with user authentication, ensures files are protected from cyber threats, safeguarding user data even in the event of a database or network compromise.

## Features
- **AES Encryption (Client-Side)**: Files are encrypted before reaching the server, ensuring robust data security.
- **User Authentication**: Only authenticated users can access or upload files, enhancing access control.
- **MySQL Database**: Securely stores encrypted files, user credentials, and metadata.
- **Access Logging**: Logs all access attempts to ensure accountability and transparency.

## Security Benefits
This application offers protection against:
- **Data Breaches**: Encrypting files client-side means that, even if a breach occurs, data remains unreadable without the decryption key.
- **Unauthorized Access**: Only verified users with the proper credentials can access stored files.
- **Tampering Detection**: Built-in integrity checks identify any file modifications.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js

## Project Structure
- `frontend/`: React.js frontend with Tailwind CSS styling
- `backend/`: Express.js server and API endpoints
- `encryption/`: AES encryption module in JavaScript for secure client-side encryption


## Usage
1. Register as a new user or log in with existing credentials.
2. Upload files, which are encrypted on the client side before being sent to the server.
3. Download and decrypt files using the decryption key and valid user credentials.

## Progress
Currently, we are focusing on developing the front-end of the Secure File Storage System using React.js and Tailwind CSS to create an intuitive and responsive interface. Alongside, we are exploring additional options to enhance the application, with a focus on improving security, user experience, and scalability.

## Conclusion
The Secure File Storage System aims to address the growing need for secure data storage solutions in an increasingly digital world. By leveraging advanced encryption techniques and a user-friendly interface, this project not only safeguards sensitive information but also empowers users to manage their data with confidence. As we continue to develop and enhance the application, our goal remains to provide a reliable, secure, and scalable platform for file storage that meets the highest standards of data protection.



