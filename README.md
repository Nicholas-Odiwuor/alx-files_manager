# Files Manager API

A simple backend service to upload, manage, and serve files with token-based authentication. Built using Node.js, Express, MongoDB, Redis, and Kue.

## 📌 Features

- User Authentication (via token)
- Upload new files (text, images, folders)
- View and download files
- Change file permissions (public/private)
- Generate image thumbnails (handled as background jobs)
- Pagination support for listing files

## 🛠️ Tech Stack

- **Node.js** (v12.x)
- **Express.js**
- **MongoDB**
- **Redis**
- **Kue** – for background processing
- **Babel** – for ES6+ compatibility
- **ESLint** – for code linting

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v12.x)
- MongoDB
- Redis

### Installation

```bash
git clone https://github.com/Nicholas-Odiwuor/alx-files_manager.git
cd files_manager
npm install

